/**The logic for the game server (‘lobby’).*/
'use strict';

class GameWorld {
  private keys = {up:'w', down:'s', left:'a', right:'d'};
  protected ball;
  private players;

  constructor() {
    this.ball = undefined
    this.players = []; 
  }

  update(input) {
    if(input.command === this.keys.left) --this.ball.x;
    else if(input.command === this.keys.up) --this.ball.y;
    else if(input.command === this.keys.right) ++this.ball.x;
    else if(input.command === this.keys.down) ++this.ball.y;
  }
}

export = GameWorld;

