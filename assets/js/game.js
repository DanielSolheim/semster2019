var myCanvas = document.getElementById('myCanvas');
const ctx  = myCanvas.getContext('2d');







// draw the tiles
for (var i = 0; i <= 10; i++){
  for(var j = 0; j <= 10; j++){
    ctx.beginPath();
    ctx.fillStyle = ["#eeeed2", "#630"][(i + j) % 2];
    ctx.fillRect(j*40, i*40, 40, 40);
    ctx.closePath();
    ctx.fillText(i, j*40, i*40);
  }
}



function rollDice(){
  var number = Math.random() * 6;
  var finalNum = Math.floor(number + 1);
  console.log(finalNum);
}

rollDice();
