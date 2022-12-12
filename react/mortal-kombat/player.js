import {changeHP, elHP, renderHP, attack} from "./game.js";
import {createElement} from "./createelement.js";
import {$arenas} from "./selectors.js";

export const $player1 = {
    player: 1,
    name: "Kitana",
    hp: 100,
    img: "assets/kitana.gif",
    weapon: ["Knife", "Blade"],

    elHP,  // если функция внешняя имеет такое же имя как в объекте, то мы можем написать просто имя функции
    changeHP,  // changeHP метод объекта player1. changeHP вызывается по ключу объекта: changeHP
    renderHP,  // renderHP метод объекта player1. renderHP вызывается по ключу объекта: renderHP имя ключа может быть другим, но нужно перепроверить все вызовы, которые на него ссылаются
    attack,  // в ES5 записывали attack: attack
};

export const $player2 = {
    player: 2,
    name: "Sub-Zero",
    hp: 100,
    img: "assets/subzero.gif",
    weapon: ["Knife", "Ice"],

    elHP,
    changeHP,
    renderHP,
    attack,
};

export function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);

    return $player;
}

