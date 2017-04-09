'use strict';
import GameWorld = require('../gameWorld');

class ClientWorld extends GameWorld {
  constructor(ball) {
    super();
    this.ball = ball;
  };
};

export = ClientWorld;
