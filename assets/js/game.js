


//henter ut spillerene fra local storage
const playerKey1 = localStorage.key(0);
const playerKey2 = localStorage.key(1);
const player1 = localStorage.getItem(playerKey1);
const player2 = localStorage.getItem(playerKey2);
console.log(player1, player2);





// initiater canvas
var myCanvas = document.getElementById('myCanvas');
var ctx  = myCanvas.getContext('2d');





// tegner opp posisjonene på brettet
var drawnPositions = {
  positions:[
    //row 1
  {x: 50,  y: 450},
  {x: 150, y: 450},
  {x: 250, y: 450},
  {x: 350, y: 450},
  {x: 450, y: 450},
  {x: 550, y: 450},


  //row 2
  {x: 550,  y: 350},
  {x: 450,  y: 350},
  {x: 350,  y: 350},
  {x: 250,  y: 350},
  {x: 150,  y: 350},
  {x: 50,   y: 350},

  //row 3
  {x: 50,  y: 250},
  {x: 150, y: 250},
  {x: 250, y: 250},
  {x: 350, y: 250},
  {x: 450, y: 250},
  {x: 550, y: 250},

  //row 4
  {x: 550,  y: 150},
  {x: 450,  y: 150},
  {x: 350,  y: 150},
  {x: 250,  y: 150},
  {x: 150,  y: 150},
  {x: 50,   y: 150},

  //row 5
  {x: 50,  y: 50},
  {x: 150, y: 50},
  {x: 250, y: 50},
  {x: 350, y: 50},
  {x: 450, y: 50},
  {x: 550, y: 50}

]

}

console.table(drawnPositions.positions);














  //lager spillere og posisjoner
  var myPlayer1  = {
    name: player1,
    positionX: 40,
    positionY: 450
  }



  var myPlayer2  = {
    name: player2,
    positionX: 50,
    positionY: 450
  }






// funksjoner for å tegne spillerne

function p1CurrentPos(){
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(myPlayer1.positionX + 10, myPlayer1.positionY + 10, 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.lineWidth = 7;
  ctx.strokeStyle = "orange";
  ctx.stroke();

}

function p2CurrentPos(){
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(myPlayer2.positionX - 10, myPlayer2.positionY - 10, 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.lineWidth = 7;
  ctx.strokeStyle = "purple";
  ctx.stroke();
}



function drawPlayer1(){
  ctx.clearRect(0, 0, myCanvas.width,myCanvas.height);
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(myPlayer1.positionX + 10, myPlayer1.positionY + 10, 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.lineWidth = 7;
  ctx.strokeStyle = "orange";
  ctx.stroke();


}



function drawPlayer2(){
  ctx.clearRect(0, 0, myCanvas.width,myCanvas.height);
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(myPlayer2.positionX - 10, myPlayer2.positionY - 10, 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.lineWidth = 7;
  ctx.strokeStyle = "purple";
  ctx.stroke();


}


p1CurrentPos();
p2CurrentPos();




var container = document.getElementById('mainContainer');

//vi tegner spillerne på spillsiden;
var player1Container = document.getElementById('player1Container');
var playerImage1 = document.createElement('img');
playerImage1.classList.add('playerImage1');
playerImage1.classList.add('playerImage');
player1Container.appendChild(playerImage1);

let iconSrces = 'assets/bilder/players/';

if (player1 === 'Eddard Stark')       {playerImage1.src = iconSrces + 'player6-01.svg';  };
if (player1 === "Daenerys Targaryen") {playerImage1.src = iconSrces + 'player7-01.svg';  };
if (player1 === "Jon Snow")           {playerImage1.src = iconSrces + 'snow3-01.svg';  };
if (player1 === "Tyrion Lannister")   {playerImage1.src = iconSrces + 'tyrion-01.svg';  };
if (player1 === "Tormund")            {playerImage1.src = iconSrces + 'tormund-01.svg';  };
if (player1 === "Joffrey Baratheon")  {playerImage1.src = iconSrces + 'joffrey-01.svg';  };
if (player1 === "Arya Stark")         {playerImage1.src = iconSrces + 'arya-01.svg';  };
if (player1 === "Margaery Tyrell")    {playerImage1.src = iconSrces + 'mary2-01.svg';  };
if(player1 === "Ramsay Snow")         {playerImage1.src = iconSrces + 'ramsay2-01.svg'};
if(player1 === "Brienne of Tarth")         {playerImage1.src = iconSrces + 'brienne-01.svg'};




var player2Container = document.getElementById('player2Container');
var playerImage2 = document.createElement('img');
playerImage2.classList.add('playerImage2');
playerImage2.classList.add('playerImage');
player2Container.appendChild(playerImage2);



if (player2 === 'Eddard Stark')       {playerImage2.src = iconSrces + 'player6-01.svg';  };
if (player2 === "Daenerys Targaryen") {playerImage2.src = iconSrces + 'player7-01.svg';  };
if (player2 === "Jon Snow")           {playerImage2.src = iconSrces + 'snow3-01.svg';  };
if (player2 === "Tyrion Lannister")   {playerImage2.src = iconSrces + 'tyrion-01.svg';  };
if (player2 === "Tormund")            {playerImage2.src = iconSrces + 'tormund-01.svg';  };
if (player2 === "Joffrey Baratheon")  {playerImage2.src = iconSrces + 'joffrey-01.svg';  };
if (player2 === "Arya Stark")         {playerImage2.src = iconSrces + 'arya-01.svg';  };
if (player2 === "Margaery Tyrell")    {playerImage2.src = iconSrces + 'mary2-01.svg';  };
if(player2 === "Ramsay Snow")         {playerImage2.src = iconSrces + 'ramsay2-01.svg'};
if(player2 === "Brienne of Tarth")         {playerImage1.src = iconSrces + 'brienne-01.svg'};










// rulle terninger funksjoner player1 and player2

   var player2verdi = 0;
   var player1verdi = 0;
   const max = 6;
   let currentPlayerTurn = 0;






   var dice1 = document.getElementById('rollDice');
   var dice2 = document.getElementById('rollDice2');
   var p1border = document.getElementById('player1Container');
   var p2border = document.getElementById('player2Container');






   var page = document.getElementById('game');
   var overlay = document.createElement('div');
   var overlayP = document.createElement('p');
   var overlayImg = document.createElement('img');
   overlay.appendChild(overlayP);
   overlay.appendChild(overlayImg);
   container.appendChild(overlay);
   overlay.classList.add("overlay");

   overlay.style.display = 'none';





   // denne utføres når noen går på en felle
   function showMessage(player, message, color){
     overlay.style.display = 'block';
     overlayP.innerHTML = player + message;
     overlay.style.backgroundColor  =   color;
   }





   var displayDice = document.getElementById('displayDice'); // henter displaydice
   var diceImg = document.createElement('img');   //lager et img element
   displayDice.appendChild(diceImg);   // setter img elementet til child av display childe

// player1 -------------------------------------
function rollDice1(){


    if(currentPlayerTurn === 1){
      var alertError = alert("nope you cant");
      return alertError;
    }





      //Terningen
      var rollp1 = Math.ceil(Math.random() * max);

      // øker spillerverdi like mye som terningen
      player1verdi = player1verdi + rollp1;





       ////////////////////////Lager terning animasjon


       displayDice.removeChild(diceImg);
       var diceImage = document.createElement('img');
       displayDice.appendChild(diceImg);

        diceSrc = "assets/bilder/dice/";


        if(rollp1){
           setTimeout(function () { diceImg.src = diceSrc + '2.svg'; }, 100);
           setTimeout(function () { diceImg.src = diceSrc + '4.svg'; }, 200);
           setTimeout(function () { diceImg.src = diceSrc + '1.svg'; }, 300);
           setTimeout(function () { diceImg.src = diceSrc + '6.svg'; }, 400);
           setTimeout(function () { diceImg.src = diceSrc + rollp1 + '.svg'; }, 500);
          }




      /* traps (de må komme før man endrer verdien), muligens bruke switch for å gjøre det mer oversiktlig */
      setTimeout(function(){


        // door trap
         if(player1verdi === 2){
           showMessage(player1, " OPEN DOOR 7 steps forward ", "black");

           setTimeout(function(){
             overlay.style.display = 'none';
           }, 3500)

           player1verdi += 7;

        }

        // door trap 2
        if(player1verdi === 3){
          showMessage(player1, " OPEN DOOR 6 steps forward ", "black");

          setTimeout(function(){
            overlay.style.display = 'none';
          }, 3500)

          player1verdi += 6;

       }



       //Lava trap
      if (player1verdi === 10){
        showMessage(player1, " STEPPED IN LAVA, 9 BACK", "black");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, 3500)
        player1verdi -= 9;
      }


      // Dragon trap
      if (player1verdi === 15){
        showMessage(player1, " FUCK, A Dragon", "black");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, 3500)
        player1verdi -= 4;
      }


      if (player1verdi === 22){
        showMessage(player1, " ELSA IS ANGRY, MOVE AWAY", "black");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, 3500)
        player1verdi -= 9;
      }


      if (player1verdi === 28){
        showMessage(player1, " LADDER YOUR WAY DOWN", "black");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, 3500)
        player1verdi -= 24;
      }

    }, 600)





       currentPlayerTurn++;


       if(currentPlayerTurn > 1){
         currentPlayerTurn = 0;
       }



       // Hvis 6 rull igjen
       setTimeout(function(){
          if(rollp1 === 6){
             currentPlayerTurn--;
             showMessage(player1, "rolled a 6, roll one more time", "black")
             setTimeout(function(){
               overlay.style.display = "none";
             }, 2000)
           }
        },700);









          /* endrer posisjonen til player 1 if forhold til drawPositions listen og verdien av player1. player1verdi følger indexen til drawPositions*/
          setTimeout(function(){
          myPlayer1.positionX = drawnPositions.positions[player1verdi].x;
          myPlayer1.positionY = drawnPositions.positions[player1verdi].y;
        }, 700)




      // bytter bakgrunn på terning, for å vise hvem som kan rulle
     setTimeout(function(){

          if(currentPlayerTurn === 0){
            dice2.style.backgroundColor = "grey";
            dice1.style.backgroundColor = "green";
            p2border.style.border = "5px solid gray";
            p1border.style.border = "5px solid green";
          }


          if(currentPlayerTurn === 1){
            dice2.style.backgroundColor = "green";
            dice1.style.backgroundColor = "gray";
            p2border.style.border = "5px solid green";
            p1border.style.border = "5px solid gray";
          }
        }, 1200);




   var showScore1 = document.getElementById('showScore1');

   setTimeout(function(){
   showScore1.innerHTML = player1verdi ;

},1100)




// requester animasjon av brikkene etter en hvis tid etter terningrull
setTimeout(function(){

   window.requestAnimationFrame(drawPlayer1);
   window.requestAnimationFrame(p2CurrentPos);

 }, 1100);




}//ender player 1














////////////////////////Lager terning animasjon
var displayDice2 = document.getElementById('displayDice2');
var diceImg2 = document.createElement('img');
displayDice2.appendChild(diceImg2);




// player 2 ----------------

function rollDice2(){


  if(currentPlayerTurn === 0){
    var alertError = alert("nope you cant");
    return alertError;
  }


  var rollp2 = Math.ceil(Math.random() * max);
  player2verdi = player2verdi + rollp2;


  displayDice2.removeChild(diceImg2);
  diceImg2 = document.createElement('img');
  displayDice2.appendChild(diceImg2);



    diceSrc = "assets/bilder/dice/";


    if(rollp2){
       setTimeout(function () { diceImg2.src = diceSrc + '2.svg'; }, 100);
       setTimeout(function () { diceImg2.src = diceSrc + '4.svg'; }, 200);
       setTimeout(function () { diceImg2.src = diceSrc + '1.svg'; }, 300);
       setTimeout(function () { diceImg2.src = diceSrc + '6.svg'; }, 400);
       setTimeout(function () { diceImg2.src = diceSrc + rollp2 + '.svg'; }, 500);
      }


      /* traps (de må komme før man endrer verdien), muligens bruke switch for å gjøre det mer oversiktlig */
      setTimeout(function(){
         if(player2verdi === 2){
           showMessage(player2, " OPEN DOOR", "purple");

           setTimeout(function(){
             overlay.style.display = 'none';
           }, 3500)

           player2verdi += 7;

        }


      if (player2verdi === 10){
        showMessage(player2, " CRAP LAVA", "purple");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, 3500)
        player2verdi -= 9;
      }

      if (player2verdi === 15){
        showMessage(player2, " DRAGON", "purple");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, 3500)
        player2verdi -= 4;
      }


      if (player2verdi === 22){
        showMessage(player2, " ELSA ANGRY", "purple");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, 3500)
        player2verdi -= 9;
      }


      if (player2verdi === 28){
        showMessage(player2, " DOWN THE LADDER", "purple");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, 3500)
        player2verdi -= 24;
      }

    }, 600)

     currentPlayerTurn--;




     // hvis spilleren får 6
     setTimeout(function(){
        if(rollp2 === 6){
           currentPlayerTurn++;
           showMessage(player2, "rolled a 6, roll one more time", "purple")

           setTimeout(function(){
             overlay.style.display = 'none';
           }, 2000)

         }
      },700);




  /* endrer posisjonen til player 2 if forhold til drawPositions listen og verdien av player1. player1verdi følger indexen til drawPositions*/
  setTimeout(function(){

    myPlayer2.positionX = drawnPositions.positions[player2verdi].x;
    myPlayer2.positionY = drawnPositions.positions[player2verdi].y;
}, 700)














  setTimeout(function(){

       if(currentPlayerTurn === 0){
         dice2.style.backgroundColor = "gray";
         dice1.style.backgroundColor = "green";
         p2border.style.border = "5px solid gray";
         p1border.style.border = "5px solid green";
       }


       if(currentPlayerTurn === 1){
         dice2.style.backgroundColor = "green";
         dice1.style.backgroundColor = "gray";
         p2border.style.border = "5px solid green";
         p1border.style.border = "5px solid gray";
       }
     }, 1300);



     var showScore2 = document.getElementById('showScore2');

     setTimeout(function(){
     showScore2.innerHTML = player2verdi;

  },1100)

    setTimeout(function(){
      window.requestAnimationFrame(drawPlayer2);
      window.requestAnimationFrame(p1CurrentPos);


    }, 1000)




}//closing player2 roll function












/* for den under
var tileWidth = 80;
var tileHeight = 80;
var tileCount = 0;
*/


/* ----- Original Tile drawing with for loop. going to do it with a background instead */
/*
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
} */
