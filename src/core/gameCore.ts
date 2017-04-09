/** The logic for the game play itself, both server and client. */
import Emitter = require('emitter');

class GameCore {
  private gNetIO;
  private gWorld;
  private gInput;
  private inputs;
  private keys;
  private end : boolean;

  /** handles inputs and outputs */
  constructor(gNetIO, gWorld, gInput?) {
    this.gNetIO = gNetIO;
    this.gWorld = gWorld;
    this.gInput = gInput;
    this.inputs = [];
    this.end = false;
  };

  /**Events */
  gInput.on('key', (input) => {
    this.inputs.push(input);
  });

  run(){
    while(!this.end) {
      let inputs = this.processInputs();
      this.updatePhyshics(inputs);
      this.updateNet();
    }
  };

  private processInputs() {
    let inputsToProcess = this.inputs;
    return inputsToProcess;
  };

  private updatePhyshics(inputs) {
      this.gWorld.update(inputs);
  };

  private updateNet() {
    this.gNetIO.update(this.gWorld.ball);
  }

  addInput(input){
    this.inputs.push[input];
  }

};

export = GameCore;
/** IO */


/**GAME CORE */




