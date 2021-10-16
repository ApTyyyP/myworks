import {$arenas} from "./selectors.js";
import {$player1, $player2, createPlayer} from "./player.js";
import {init} from "./game.js";

$arenas.appendChild(createPlayer($player1));
$arenas.appendChild(createPlayer($player2));

init();