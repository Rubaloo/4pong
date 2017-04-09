import GameInput = require('../gameInput');
import KeyboardJS = require('keyboardJS');


class ClientInput extends GameInput {
    private keys = {up:'w', down:'s', left:'a', right:'d'};
    
    constructor(){
        super();
    };

    keyboardJS.setContext('id');
}

export = ClientInput;