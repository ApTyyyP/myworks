// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST; // пикселированное масштабирование

const app = new PIXI.Application({
    width: 480,
    height: 360
});

const tileSize = 16; // размер выделяемой плитки для спрайта
const SCALE = 2; // масштабирование для картинок

class Keyboard {
    constructor () {
        this.pressed = {}; // нажатие клавиши
    }

    watch (el) {
        el.addEventListener('keydown', (e) => { // при долгом нажатии клавиши, автоматически повторяется
            this.pressed[e.key] = true;
        });
        el.addEventListener('keyup', (e) => { // происходит, когда клавиша отпускается
            this.pressed[e.key] = false;
        });
    }
}

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);
app.view.setAttribute('tabindex', 0); // фокусируем события клавиатуры

// load the texture
app.loader.add('map', 'map.json');
app.loader.add('tileset', 'img/tileset.png');
app.loader.add('character', 'img/character.png');

app.loader.load((loader, resources) => { // loader — экземпляр загрузчика

    let map = resources.map.data;
    console.log(map)

    function testCollision(worldX, worldY) {
        let mapX = Math.floor(worldX / tileSize / SCALE);
        let mapY = Math.floor(worldY / tileSize / SCALE);
        return map.collision[mapY * map.width + mapX];
    }

    let kb = new Keyboard();
    kb.watch(app.view);

    let tileTextures = [];
    // разрезаем наш спрайт (112x176px) на отдельные плитки (16x16)
    for (let i = 0; i < 7 * 11; i++) { // 7 — ширина плитки (7*16=112px); 11 — высота плитки (11*16=176px)
        let x = i % 7;
        let y = Math.floor(i / 7); // при делении на 7 переходим к следующему ряду спрайта
        tileTextures[i] = new PIXI.Texture( // каждый раз создаём новую текстуру
            resources.tileset.texture,
            new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
        );
    }

    let characterFrames = [];
    for (let i = 0; i < 8; i++) { // 8 кадров персонажа в спрайте
        characterFrames[i] = new PIXI.Texture(
            resources.character.texture,
            new PIXI.Rectangle(i * tileSize, 0, tileSize, tileSize * 2)
        );
    }

    const blob = new PIXI.Sprite(characterFrames[0]);
    blob.scale.x = SCALE; // масштабирование ширины картинки
    blob.scale.y = SCALE; // масштабирование высоты картинки

    const sky = new PIXI.Container();
    const background = new PIXI.Container();
    const stage = new PIXI.Container();
    for (let y = 0; y < map.width; y++) {
        for (let x = 0; x < map.width; x++) {
            let pos = y * map.width + x;
            if (map.sky[pos] != 12) {
                let sprite = new PIXI.Sprite(tileTextures[map.sky[pos]]);
                sprite.x = x * tileSize;
                sprite.y = y * tileSize;
                sky.addChild(sprite);
            }
            if (map.background[pos] != 12) {
                let sprite = new PIXI.Sprite(tileTextures[map.background[pos]]);
                sprite.x = x * tileSize;
                sprite.y = y * tileSize;
                background.addChild(sprite);
            }
            if (map.stage[pos] != 12) {
                let sprite = new PIXI.Sprite(tileTextures[map.stage[pos]]);
                sprite.x = x * tileSize;
                sprite.y = y * tileSize;
                stage.addChild(sprite);
            }
        }
    }

    // приравниваем (небо + фон + сцена) к масштабированию
    sky.scale.x = sky.scale.y = SCALE;
    background.scale.x = background.scale.y = SCALE;
    stage.scale.x = stage.scale.y = SCALE;

    // Add the bunny to the scene we are building
    app.stage.addChild(sky);
    app.stage.addChild(background);
    app.stage.addChild(stage);
    app.stage.addChild(blob);

    let character = { // персонаж, картинки берутся из спрайта
        x: 0, y: 0,
        vx: 0, vy: 0,
        direction: 0, // направление
        jumped: false,
        cycles: {
            'runLeft': [5,6,7,6],
            'runRight': [1,2,3,2]
        }
    };

    let scrollX = 0;
    let scrollY = 0;

    app.view.focus(); // фокусировка на нажатие клавиш

    let span = document.querySelector('span');

    // Listen for frame updates
    app.ticker.add((time) => {

        blob.x = character.x;
        blob.y = character.y;

        character.vy = Math.min(12, character.vy + 1)
        if (character.vx > 0) {
            character.vx -= 1;
        }
        if (character.vx < 0) {
            character.vx += 1;
        }

        let touchingGround = testCollision( // соприкосновение с землёй
            character.x + 2,
            character.y + tileSize * SCALE * 2 + 1
        ) || testCollision( // соприкосновение с краями земли в прыжке
            character.x + tileSize * SCALE - 3,
            character.y + tileSize * SCALE * 2 + 1
        );

        if (character.vy > 0) {
            for (let i = 0; i < character.vy; i++) {
                let testX1 = character.x + 2;
                let testX2 = character.x + tileSize * SCALE - 3;
                let testY = character.y + tileSize * SCALE * 2;
                if (testY > map.height * tileSize * SCALE || testCollision(testX1, testY) || testCollision(testX2, testY)) {
                    character.vy = 0; // если при падении столкнулись с вертикальной вершиной
                    break; // то заканчиваем падение
                }
                character.y = character.y + 1;
            }
        }
        if (character.vy < 0) {
            for (let i = character.vy; i < 0; i++) {
                let testX1 = character.x + 2;
                let testX2 = character.x + tileSize * SCALE - 3;
                let testY = character.y + 5;
                if (testCollision(testX1, testY) || testCollision(testX2, testY)) {
                    character.vy = 0;
                    break;
                }
                character.y = character.y - 1;
            }
        }

        if (character.vx > 0) {
            character.direction = 0;
            for (let i = 0; i < character.vx; i++) {
                let testX = character.x + tileSize * SCALE - 2;
                let testY1 = character.y + 5;
                let testY2 = character.y + tileSize * SCALE;
                let testY3 = character.y + tileSize * SCALE * 2 - 1;
                if (testX >= map.width * tileSize * SCALE || testCollision(testX, testY1) || testCollision(testX, testY2) || testCollision(testX, testY3)) {
                    character.vx = 0;
                    break;
                }
                character.x = character.x + 1;
            }
        }
        if (character.vx < 0) {
            character.direction = 1;
            for (let i = character.vx; i < 0; i++) {
                let testX = character.x + 1;
                let testY1 = character.y + 5;
                let testY2 = character.y + tileSize * SCALE;
                let testY3 = character.y + tileSize * SCALE * 2 - 1;
                if (testX < 0 || testCollision(testX, testY1) || testCollision(testX, testY2) || testCollision(testX, testY3)) {
                    character.vx = 0;
                    break;
                }
                character.x = character.x - 1;
            }
        }

        if (character.x + scrollX > app.view.width - tileSize * SCALE * 6){
            scrollX = Math.max(
                app.view.width - map.width * tileSize * SCALE,
                app.view.width - character.x - tileSize * SCALE * 6
            );
        }
        if (character.x + scrollX < tileSize * SCALE * 5){
            scrollX = Math.min(0, -character.x + tileSize * SCALE * 5);
        }
        if (character.y + scrollY > app.view.height - tileSize * SCALE * 5){
            scrollY = Math.max(
                app.view.height - map.height * tileSize * SCALE,
                app.view.height - character.y - tileSize * SCALE * 5
            );
        }
        if (character.y + scrollY < tileSize * SCALE * 2) {
            scrollY = Math.min(0, -character.y + tileSize * SCALE * 2);
        }
        app.stage.x = scrollX;
        sky.x = -scrollX * .5;
        sky.y = -scrollY * .5;
        app.stage.y = scrollY;

        let characterFrame = 0;
        if (!touchingGround) { // если персонаж летит в воздухе
            characterFrame = character.direction * 4 + 1; // то
        } else {
            if (character.vx > 0) {
                characterFrame = character.cycles.runRight[(Math.floor(Date.now() / 100) % 4)] // каждые 100 мс состояние циклов ходьбы меняется
            } else if (character.vx < 0) {
                characterFrame = character.cycles.runLeft[(Math.floor(Date.now() / 100) % 4)]
            } else {
                characterFrame = character.direction * 4;
            }
        }
        blob.texture = characterFrames[characterFrame];

        if (kb.pressed.ArrowRight) {
            character.direction = 0;
            character.vx = Math.min(8, character.vx + 2);
        }
        if (kb.pressed.ArrowLeft) {
            character.direction = 1;
            character.vx = Math.max(-8, character.vx - 2);
        }
        if (!kb.pressed.ArrowUp && touchingGround && character.jumped) {
            character.jumped = false;
        }
        if (kb.pressed.ArrowUp && touchingGround && !character.jumped) {
            character.vy = -19;
            character.jumped = true;
        }


    });
});

app.loader.onError.add((error) => console.error(error)); // показ ошибок в консоли
