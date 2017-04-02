/** The logic for the game play itself, both server and client. */
 var Emitter = require('emitter');

class GameCore {
  
  /** handles inputs and outputs */
  constructor(gameNetIO, gameWorld) {
    this.gameNetIO = gameNetIO;
    this.gameWorld = gameWorld;
    this.keys = {up:'w', down:'s', left:'a', right:'d'};
  }

  /**GAME CORE */

  client_processInputs(input) {

  }

  server_processInputs(input) {
  
  }

  updatePhyshics(input) {
    if(input.command === keys.left) --game.ball.x;
    else if(input.command === keys.up) --game.ball.y;
    else if(input.command === keys.right) ++game.ball.x;
    else if(input.command === keys.down) ++game.ball.y;
  }
}

/** IO */


/**GAME CORE */




