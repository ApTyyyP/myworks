import getRandom from "./utils.js";
import {ATTACK, HIT} from "./action.js";
import {$player1, $player2} from "./player.js";
import {logs} from "./logs.js";
import {$arenas, $formFight, $randomButton, $chat} from "./selectors.js";
import {createElement} from "./createelement.js";

function changeHP(player) {
    this.hp -= getRandom(20);
    console.log(this.hp);

    if (this.hp <= 0) {
        this.hp = 0;
    }
}

function elHP() {  // возвращаем  document.querySelector. Он ссылается на внутреннее поле player (this.player) и выводит 1 или 2
    return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {  // исползует elHP() для того, чтобы взять её содержимое и добавив style.width рисовать (изменять) hp
    this.elHP().style.width = `${this.hp}%`;  // this.hp указывает на hp объекта, в котором применяется
}

function attack() {
    console.log(this.name + ' ' + 'Fight...');
}

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    }
}

function playerAttack() {
    const attack = {};

    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }

        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }

        item.checked = false;
    }

    return attack;
}

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();

    if (player.defence !== enemy.hit) {
        $player1.changeHP(enemy.value);
        $player1.renderHP();
        generateLogs('hit', $player2, $player1);
    } else {
        generateLogs('defence', $player2, $player1);
    }

    if (enemy.defence !== player.hit) {
        $player2.changeHP(player.value);
        $player2.renderHP();
        generateLogs('hit', $player1, $player2);
    } else {
        generateLogs('defence', $player1, $player2);
    }

    showResult();  // вызов функции победителя

    // console.log('####: a', attack);
    // console.log('####: e', enemy);
});

function init() {
    generateLogs('start', $player1, $player2);
}

/*$randomButton.addEventListener('click', function() {
    console.log('####: Click Random Button');

    $player1.changeHP(getRandom(20)); // в объекте player1 вызываю функцию changeHP() по имени ключа (changeHP, которое может меняться). Внутри этой функции я вызываю функцию getRandom() и передею в неё аргумент (20)
    $player1.renderHP();  // в объекте player1 вызываю функцию renderHP(), по имени ключа (renderHP), чтобы оно перерисовывало жизни игрока

    $player2.changeHP(getRandom(20));  // в объекте player2 вызываю функцию changeHP() по имени ключа (changeHP). Внутри этой функции я вызываю функцию getRandom() и передею в неё аргумент (20)
    $player2.renderHP();  // в объекте player2 вызываю функцию renderHP(), по имени ключа (renderHP), чтобы оно перерисовывало жизни игрока

    if ($player2.hp === 0 || $player1.hp === 0) {
        $randomButton.disabled = true;
        $randomButton.style.backgroundColor = '#d1d1d1';
        $randomButton.style.opacity = 0.5;
        createReloadButton();
    }
})*/

function generateLogs(type, player1, player2) {
    // const text = logs[type][0].replace('[playerKick]', $player1.name).replace('[playerDefence]', $player2.name);
    let text = '';
    const time = (new Date()).toLocaleTimeString('ru').replace(/:\d\d$/, '');
    switch (type) {
        case 'start':
            text = logs[type];
            text = text.replace('[time]', '<span class="time">[' + time + ']</span>')
                .replace('[player1]', '<span class="blocking">' + player1.name + '</span>')
                .replace('[player2]', '<span class="attacking">' + player2.name + '</span>');
            break;
        case 'hit':
            text = logs[type][getRandom(logs[type].length - 1)];
            text = `<span class="time">${time}</span> &mdash; ${text} <span class="blocking">-${player2.hp}HP</span> [<span class="attacking">${player2.hp}</span>/100]`
                .replace('[playerKick]', '<span class="blocking">' + player1.name + '</span>')
                .replace('[playerDefence]', '<span class="attacking">' + player2.name + '</span>');
            break;
        case 'defence':
            text = logs[type][getRandom(logs[type].length - 1)];
            text = `<span class="time">${time}</span> &mdash; ${text}`
                .replace('[playerKick]', '<span class="attacking">' + player1.name + '</span>')
                .replace('[playerDefence]', '<span class="blocking">' + player2.name + '</span>');
            break;
        case 'draw':
            text = logs[type];
            break;
        case 'end':
            text = logs[type][getRandom(logs[type].length - 1)];
            text = text.replace('[playerWins]', '<span class="attacking">' + player2.name + '</span>')
                .replace('[playerLose]', '<span class="blocking">' + player1.name + '</span>');
            break;
    }
    // console.log(text);
    // const el = '<p>'+text+'</p>';
    const el = `<p>${text}</p>`;

    $chat.insertAdjacentHTML('afterbegin', el);
}

function createReloadButton() {  // кнопка Restart. Появляется, когда кто-то из игроков проиграет
    const $reloadButtonDiv = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');
    $reloadButton.innerText = 'Reload';

    $reloadButton.addEventListener('click', function() {
        window.location.reload();
    });

    $reloadButtonDiv.appendChild($reloadButton);
    $arenas.appendChild($reloadButtonDiv);
}

function fightButtonHide(hp) {
    if ($player1.hp === 0 || $player2.hp === 0) {
        $randomButton.disabled = true;
        $randomButton.style.backgroundColor = '#d1d1d1';
        $randomButton.style.opacity = 0.5;
        createReloadButton();
    }
}

function playerWins(name) {
    const $winTitle = createElement('div', 'loseTitle');
    if (name) {
        $winTitle.innerText = name + ' wins';
    } else {
        $winTitle.innerText = 'draw';
    }

    return $winTitle;
}

function showResult() {
    fightButtonHide();  // вызов функции скрытия кнопки Fight
    if ($player1.hp === 0 && $player1.hp < $player2.hp) {
        $arenas.appendChild(playerWins($player2.name));
        generateLogs('end', $player1, $player2);
    } else if ($player2.hp === 0 && $player2.hp < $player1.hp) {
        $arenas.appendChild(playerWins($player1.name));
        generateLogs('end', $player2, $player1);
    } else if ($player1.hp === 0 && $player2.hp === 0) {
        $arenas.appendChild(playerWins());
        generateLogs('draw');
    }
}

export {changeHP, elHP, renderHP, attack, init, generateLogs};