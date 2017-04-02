/**The logic for the game server (‘lobby’).*/
'use strict';

class GameWorld {
  constructor() {
    this.ball = undefined; 
  }

  server_initGame() {
    this.ball = {x : 300, y : 300}; 
    return this;
  };

  client_initGame(ball) {
    this.ball = ball;
    return this;
  };
}

