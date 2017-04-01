/** The logic for the game client setup in the browser.*/

var keys = {up:'w', down:'s', left:'a', right:'d'};
var socket = io('http://localhost:4000');
            
socket.on('connect', function(){
    console.log('Client: connection');
});

socket.on('initGame', function(game){
    console.log('Client: initGame');
    ball = game.ball;
    drawBall(ball);
});

socket.on('updateGame', function(serverGame){
    console.log('Client: updateGame');
    ball.x = serverGame.ball.x;
    ball.y = serverGame.ball.y;
    console.log(serverGame.ball.x);
    drawBall(ball);
});

socket.on('disconnect', function(){
    console.log('Client: disconnectec');
});

keyboardJS.on(keys.up, function() {
    sendInput({command : keys.up});
});

keyboardJS.on(keys.down, function() {
    sendInput({command : keys.down});
});

keyboardJS.on(keys.right, function() {
    sendInput({command : keys.right});
});

keyboardJS.on(keys.left, function() {
    sendInput({command : keys.left});
});

function sendInput(input) {
    console.log('sendInput');
    socket.emit('input', input);
}

function drawBall(ball) 
{

}