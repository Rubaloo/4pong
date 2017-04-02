/**The logic for the game server (‘lobby’).*/
function initGame() {
  ball = {x : 300, y : 300}; 
  game = {'ball' : ball};
  broadcastToClients('initGame', game);
}
