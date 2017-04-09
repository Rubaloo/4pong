abstract class GameNetIO {
    protected server;
    protected io;
    protected socket;

    constructor(){};
    abstract update(newWorld);
}

export = GameNetIO;