


//henter ut spillerene fra local storage
const playerKey1 = localStorage.key(0);
const playerKey2 = localStorage.key(1);
const player1 = localStorage.getItem(playerKey1);
const player2 = localStorage.getItem(playerKey2);
console.log(player1, player2);



var myCanvas = document.getElementById('myCanvas');
var ctx  = myCanvas.getContext('2d');



var drawnPositions = {
  positions:[
    //row 1
  {x: 40,  y: 40},
  {x: 120, y: 40},
  {x: 200, y: 40},
  {x: 280, y: 40},
  {x: 360, y: 40},
  {x: 440, y: 40},


  //row 2
  {x: 40,  y: 120},
  {x: 120, y: 120},
  {x: 200, y: 120},
  {x: 280, y: 120},
  {x: 360, y: 120},
  {x: 440, y: 120},

  //row 3
  {x: 40,  y: 200},
  {x: 120, y: 200},
  {x: 200, y: 200},
  {x: 280, y: 200},
  {x: 360, y: 200},
  {x: 440, y: 200},

  //row 4
  {x: 40,  y: 280},
  {x: 120, y: 280},
  {x: 200, y: 280},
  {x: 280, y: 280},
  {x: 360, y: 280},
  {x: 440, y: 280},

  //row 5
  {x: 40,  y: 360},
  {x: 120, y: 360},
  {x: 200, y: 360},
  {x: 280, y: 360},
  {x: 360, y: 360},
  {x: 440, y: 360}

]

}



console.table(drawnPositions.positions);





 let currentPlayerTurn = 0;


/*
  var players = [{
    name: player1,
    position: 40,
    position2: 40,
  },

      {
        name: player2,
        position: 0,
      }
    ] */



  var myPlayer1  = {
    name: player1,
    positionX: 40,
    positionY: 40
  }


  var myPlayer2  = {
    name: player2,
    positionX: 40,
    positionY: 40
  }



function drawPlayer1(){

  ctx.beginPath();
  ctx.arc(myPlayer1.positionX, myPlayer1.positionY, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.save();
}



function drawPlayer2(){

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(myPlayer2.positionX, myPlayer2.positionY, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}





// setter variabler
var tileWidth = 80;
var tileHeight = 80;
var tileCount = 0;

// draw the tiles in a double for loop
for (var column = 0; column <= 5; column++){
  for(var row = 0; row <= 5; row++){
    ctx.beginPath();
    ctx.fillStyle = ["#eeeed2", "#630"][(column + row) % 2];
    ctx.fillRect(row*tileWidth, column*tileHeight, tileWidth, tileHeight);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText( tileCount - 5, row*tileWidth, column*tileHeight);
    tileCount++;
  }
}


// alert function  for wrong player
function wrongPlayer() {
  alert("not your turn");
}


// player 1 ---------------------


   var player1verdi = 0;
   /* let currentPlayer = players[currentPlayerTurn]; */
   const max = 6;

function rollDice1(){

      var rollp1 = Math.ceil(Math.random() * max);
      console.log("player1: " + rollp1);

      player1verdi = player1verdi + rollp1;
      console.log(player1verdi);

      // Direkte referanse til den spilleren sin tur
      myPlayer1.positionX = drawnPositions.positions[player1verdi].x;
      myPlayer1.positionY = drawnPositions.positions[player1verdi].y;
      console.log(myPlayer1.name)
        console.log("currentPlayerValue:"  + currentPlayerTurn);
      currentPlayerTurn++;


      if(currentPlayerTurn > 1){
        currentPlayerTurn = 0;
      }

    /*   if (currentPlayerTurn === 1){
         var wrongturn = document.getElementById('rollDice');
          wrongturn.style.backgroundColor = "yellow";
         wrongturn.setAttribute('onclick', wrongPlayer());


      }  kode for å endre dice ved feil bruker*/



   window.requestAnimationFrame(drawPlayer1);

}




// player 2 ----------------




var player2verdi = 0;

function rollDice2(){
var rollp2 = Math.ceil(Math.random() * max);

console.log("player2: " + rollp2);

  player2verdi = player2verdi + rollp2;


  myPlayer2.positionX = drawnPositions.positions[player2verdi].x;
  myPlayer2.positionY = drawnPositions.positions[player2verdi].y;

  console.log(player2verdi);

  console.log(myPlayer2.name)
 console.log("currentPlayerValue:"  + currentPlayerTurn);
  currentPlayerTurn--;



 window.requestAnimationFrame(drawPlayer2);
}









/*
var player1Img = new Image();
player1Img.src = "assets/bilder/tab-logo.png";




var playerUNO = {
  name: player1,
  playerUNOX: 40,
  playerUNOY: 20,
  playerUNOnewx: 80,
  playerUNOnewy: 80,

  tegnSpelar: function(){
    player1Img.addEventListener('load', function(){

      ctx.drawImage(player1Img, playerUNO.playerUNOX, playerUNO.playerUNOY, 20, 20);

    })
  }


  } // stenger player1 object

/*
  function drawPlayer1(){
      playerUNO.tegnSpelar();

  }


drawPlayer1();



function rollMyDice(){

  var dice =  Math.floor( Math.random() * 6 ) +1;
  playerUNO.playerUNOX = playerUNO.playerUNOX + 40 * dice;
  console.log(playerUNO.playerUNOX);

}





console.log(playerUNO.name);
console.log(playerUNO.playerUNOX);*/
