/** The logic for the game play itself, both server and client. */

/** handles inputs and outputs */
/**GAME CORE*/
var Emitter = require('emitter');

var inputs = [];
var players = [];
var ball;
var plates;
var game;

var keys = {up:'w', down:'s', left:'a', right:'d'};

/**GAME CORE */

function client_processInputs(input) {

}

function server_processInputs(input) {
 
}

function updatePhyshics(input) {
  if(input.command === keys.left) --game.ball.x;
  else if(input.command === keys.up) --game.ball.y;
  else if(input.command === keys.right) ++game.ball.x;
  else if(input.command === keys.down) ++game.ball.y;
}

/** IO */


/**GAME CORE */




