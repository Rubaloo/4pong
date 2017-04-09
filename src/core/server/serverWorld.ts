'use strict';
import GameWorld = require('../gameWorld');

class ServerWorld extends GameWorld {
  constructor() {
    super();
    this.ball = {x : 300, y : 300}; 
  };
}

export = ServerWorld;

