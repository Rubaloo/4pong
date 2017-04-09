/** The logic for the game client setup in the browser.*/


import ClientWorld = require('./core/client/clientWorld');
import ClientNetIO = require('./core/client/clientNetIO');
import ClientInput = require('./core/client/clientInput');
import GameCore = require('./core/gameCore');

let cNetIO,
    cWorld,
    cInput,
    gCore;

function initGame(ball) {
    cNetIO = new ClientNetIO();
    cWorld = new ClientWorld(ball);
    cInput = new ClientInput();
    gCore = new GameCore(cNetIO, cWorld, cInput);
    gCore.run();
}