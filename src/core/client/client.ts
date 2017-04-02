/** The logic for the game client setup in the browser.*/

var keys = {up:'w', down:'s', left:'a', right:'d'};


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

function drawBall(ball) 
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 10, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.strokeStyle = '#003300';
    ctx.lineWidth = 1;
    ctx.stroke();
}