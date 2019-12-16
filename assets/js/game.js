


//Fetching the players from local storage
const playerKey1 = localStorage.key(0);
const playerKey2 = localStorage.key(1);
const player1 = localStorage.getItem(playerKey1);
const player2 = localStorage.getItem(playerKey2);




// Getting canvas and rendering a context
var myCanvas = document.getElementById('myCanvas');
var ctx  = myCanvas.getContext('2d');





// Drawing and array of the positions on the board
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


//Clear view of the positions with "console.table"
console.table(drawnPositions.positions);









  /*Making an object of the players, and giving them starting positions, we will also change these positions as we start the game functions */
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






/* Drawing the players ------------------------------------ */



//player1

/* Need 2 functions to draw each player, because when we clear canvas and animate player1 for example, i had to redraw player2 without clearing the canvas */
function p1CurrentPos(){
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(myPlayer1.positionX + 10, myPlayer1.positionY + 10, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.strokeStyle = "orange";
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





// player2

function p2CurrentPos(){
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(myPlayer2.positionX - 10, myPlayer2.positionY - 10, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.strokeStyle = "purple";
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



//drawing the players in their starting positions
p1CurrentPos();
p2CurrentPos();






//just getting the main container
var container = document.getElementById('mainContainer');





/*-------------- Drawing the player images on the game page ------------------*/
//creating player img elements
var player1Container = document.getElementById('player1Container');
var playerImage1 = document.createElement('img');
playerImage1.classList.add('playerImage1');
playerImage1.classList.add('playerImage');
player1Container.appendChild(playerImage1);

let iconSrces = 'assets/bilder/players/';


/*defining the src of the image, determined by wich name the player has from local storage */
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




//Do the same for player2 as we did above
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
if(player2 === "Brienne of Tarth")    {playerImage2.src = iconSrces + 'brienne-01.svg'};










/* -------------------- Setting up function for the gameplay and interactive stuff ------------------*/


//setting variables


//winner overlay variables
var winnerOverlay = document.getElementById('gameWinner');
console.log(winnerOverlay)

var winnerName = document.getElementById('winnerName');
var winnerPlayerImage = document.getElementById('winnerPlayerImage');



  var toWinnerPage = document.getElementById('toWinnerPage');

// player  values
   var player2verdi = 0;
   var player1verdi = 0;
   let currentPlayerTurn = 0;




   //changing the colors of the currentPLayer
   var currentPlayerColor = "#54CEC3";
   var currentPlayerBackground = "white";
   var currentPlayerBackground2 = "gray";
   var p1border = document.getElementById('player1Container');
   var p2border = document.getElementById('player2Container');
   //Getting dice button, for the color change
   var dice1 = document.getElementById('rollDice');
   var dice2 = document.getElementById('rollDice2');



   //setTimeout for the traps
   var trapDelay = 4000;



   //Making Img element for rollAgain();
   var diceSource = "assets/bilder/dice/";
   var arrowImg = document.createElement('img');
   arrowImg.classList.add('arrowImg');
   container.appendChild(arrowImg); /* container ref -> mainContainer */

  // 6, roll again function
   function rollAgain(column, row, image){
     arrowImg.style.display = "block";
     arrowImg.src = diceSource + image;
     arrowImg.style.gridColumn = column;
     arrowImg.style.gridRow = row;
   }






      //Making the framwork for traps and the messages
     var page = document.getElementById('game'); // ref body
     //lager parent div(img, p)
     var overlay = document.createElement('div');
     var overlayP = document.createElement('p');
     var overlayImg = document.createElement('img');

     overlay.appendChild(overlayP);
     overlay.appendChild(overlayImg);
     container.appendChild(overlay);
     overlay.classList.add("overlay");
     overlayP.classList.add("overlayP")
     overlayImg.classList.add("overlayImg")
     overlay.style.display = "none";
     var overlayImg1 = document.querySelector(".overlayImg");


    var imgPath1 = "assets/bilder/traps/ferdig/";



   /*The function that  shows a message when a player hits a trap, alot of params because of small differences in text,src, and images */
   function showMessage(player, message, color, marginP, img, imgMargin, imgWidth){
     overlay.style.display = 'block';
     overlay.style.backgroundColor  =   color;

     overlayP.innerHTML = player + message;
     overlayP.style.margin = marginP;

     overlayImg1.src = imgPath1 + img;
     overlayImg1.style.margin = imgMargin;
     overlayImg.style.width = imgWidth;
   }





   /*made one for each player beacause of some of the traps making problems when the same function was called twice withing a certain timeframe */

   function showMessage2(player, message, color, marginP, img, imgMargin, imgWidth){
     overlay.style.display = 'block';
     overlay.style.backgroundColor  =   color;

     overlayP.innerHTML = player + message;
     overlayP.style.margin = marginP;

     overlayImg1.src = imgPath1 + img;
     overlayImg1.style.margin = imgMargin;
     overlayImg.style.width = imgWidth;
   }




   //linked to the dice
   const max = 6;
   var displayDice = document.getElementById('displayDice'); // henter displaydice
   var diceImg = document.createElement('img');   //lager et img element
   displayDice.appendChild(diceImg);   // setter img elementet til child av display child



   toWinnerPage.addEventListener('click', function(){
    winnerOverlay.style.display = 'block';
     winnerName.innerHTML = player1;
    if (player1 === 'Eddard Stark')       {winnerPlayerImage.src = iconSrces + 'player6-01.svg';  };
    if (player1 === "Daenerys Targaryen") {winnerPlayerImage.src = iconSrces + 'player7-01.svg';  };
    if (player1 === "Jon Snow")           {winnerPlayerImage.src = iconSrces + 'snow3-01.svg';  };
    if (player1 === "Tyrion Lannister")   {winnerPlayerImage.src = iconSrces + 'tyrion-01.svg';  };
    if (player1 === "Tormund")            {winnerPlayerImage.src = iconSrces + 'tormund-01.svg';  };
    if (player1 === "Joffrey Baratheon")  {winnerPlayerImage.src = iconSrces + 'joffrey-01.svg';  };
    if (player1 === "Arya Stark")         {winnerPlayerImage.src = iconSrces + 'arya-01.svg';  };
    if (player1 === "Margaery Tyrell")    {winnerPlayerImage.src = iconSrces + 'mary2-01.svg';  };
    if (player1 === "Ramsay Snow")        {winnerPlayerImage.src = iconSrces + 'ramsay2-01.svg'};
    if (player1 === "Brienne of Tarth")   {winnerPlayerImage.src = iconSrces + 'brienne-01.svg'};


   })








/* -------------- game functionalities start here ------------------------*/


// player1 -------------------------------------
function rollDice1(){




    /* checking whos turn it is, and returning an error if the players is not allowed to roll */
    if(currentPlayerTurn === 1){
      var alertError = alert("nope you cant");
      return alertError;
    }



      //Making a variable for the dice
      var rollp1 = Math.ceil(Math.random() * max);


      /*increasing the player value according to the rollp1 value*/
      player1verdi = player1verdi + rollp1;


      /* making dice animation , switching out images with a timeout*/
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




      /* ----------------------------- Traps for player1  ---------------------------*/
      setTimeout(function(){

        // door trap
         if(player1verdi === 2){
          showMessage(player1, "<br>found an <b> OPEN DOOR</b> <br> <b>7</b> steps forward ", "black", "50px 0 0  75px",  "pngdoor.png", "7px 25px 0 0", "120px");

           setTimeout(function(){
             overlay.style.display = 'none';
           }, trapDelay)

           player1verdi += 7;
        }



        // door trap 2
        if(player1verdi === 3){
          showMessage(player1, "<br>found an <b> OPEN DOOR</b> <br> <b>7</b> steps forward ", "black", "50px 0 0  75px",  "pngdoor.png", "7px 25px 0 0", "120px");

          setTimeout(function(){
            overlay.style.display = 'none';
          }, trapDelay)

          player1verdi += 6;
       }



       //Lava trap
      if (player1verdi === 10){
      showMessage(player1, " <br> <b>STEPPED IN LAVA,</b> <br> 9 Steps back", "black", "35px 0 0 75px", "pngfire.png", "25px 25px 200px 0", "200px");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, trapDelay)
        player1verdi -= 9;
      }




      // Dragon trap
      if (player1verdi === 15){
           showMessage(player1, " <br><b>Got Shot By Dragon</b> <br> 4 steps back", "black", "35px 10px 10px 75px", "pngdrage.png", "7px 10px 10px 10px", "200px");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, trapDelay)
        player1verdi -= 4;
      }


      if (player1verdi === 22){
        showMessage(player1, " <br> <b>MET AN ANGRY ELSA,</b><br> 9 steps back", "black", "35px 0 0 75px", "pngelsa.png", "10px 25px 0 0", "150px" );

        setTimeout(function(){
          overlay.style.display = 'none';
        }, trapDelay)
        player1verdi -= 9;
      }


      if (player1verdi === 28){
         showMessage(player1, " <br> <b> Got thrown over the edge</b> <br>24 steps back", "black", "35px 0 0 75px", "pngladder-01.png", "0 100px 0 0", "25px");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, trapDelay)
        player1verdi -= 24;
      }

    }, 600)




       /*increasing the currentPlayerTurn, player1 = 0; player2 = 1 */
       currentPlayerTurn++;


       if(currentPlayerTurn > 1){
         currentPlayerTurn = 0;
       }



       // 6 roll again
       setTimeout(function(){
          if(rollp1 === 6){
             currentPlayerTurn--;

              rollAgain('2/3', '2/3', '6-rollagain.svg'); // p1

              setTimeout(function(){
                arrowImg.style.display = "none";
              }, 3000);
           }

        },700);

        /*if player value goes beyod the map > 29, place it on the the finish tile */
        if(player1verdi > 29){
          player1verdi = 29;
        }









          /* changing the value of player1 positionX/Y accoring to player1Verdi and taking the values from the drawnPositions array*/
          setTimeout(function(){
          myPlayer1.positionX = drawnPositions.positions[player1verdi].x;
          myPlayer1.positionY = drawnPositions.positions[player1verdi].y;
        }, 700)




      /*changing the background/border/button color of the players, according to currentPlayerTurn */
     setTimeout(function(){

          if(currentPlayerTurn === 0){
            dice2.style.backgroundColor = "gray";
            p2border.style.border = "8px solid gray";
            p2border.style.backgroundColor = currentPlayerBackground2;

            dice1.style.backgroundColor = currentPlayerColor;
            p1border.style.border = "8px solid " + currentPlayerColor;
            p1border.style.backgroundColor = currentPlayerBackground;
          }


          if(currentPlayerTurn === 1){
            dice2.style.backgroundColor = currentPlayerColor;
            p2border.style.border = "8px solid " + currentPlayerColor;
            p2border.style.backgroundColor = currentPlayerBackground;

            dice1.style.backgroundColor = "gray";
            p1border.style.border = "8px solid gray";
            p1border.style.backgroundColor = currentPlayerBackground2;

          }
        }, 1100);





  /*showing the score of each player under the dice */
   var showScore1 = document.getElementById('showScore1');

   setTimeout(function(){
   showScore1.innerHTML = player1verdi ;

},1100)




/* and finally, drawPLayer1 in new positon and draw player2 in current posiiton */
setTimeout(function(){

   window.requestAnimationFrame(drawPlayer1);
   window.requestAnimationFrame(p2CurrentPos);

 }, 1100);



setTimeout(function(){
 if(player1verdi >= 29){
   winnerOverlay.style.display = 'block';
   winnerName.innerHTML = player1;




   if (player1 === 'Eddard Stark')       {winnerPlayerImage.src = iconSrces + 'player6-01.svg';  };
   if (player1 === "Daenerys Targaryen") {winnerPlayerImage.src = iconSrces + 'player7-01.svg';  };
   if (player1 === "Jon Snow")           {winnerPlayerImage.src = iconSrces + 'snow3-01.svg';  };
   if (player1 === "Tyrion Lannister")   {winnerPlayerImage.src = iconSrces + 'tyrion-01.svg';  };
   if (player1 === "Tormund")            {winnerPlayerImage.src = iconSrces + 'tormund-01.svg';  };
   if (player1 === "Joffrey Baratheon")  {winnerPlayerImage.src = iconSrces + 'joffrey-01.svg';  };
   if (player1 === "Arya Stark")         {winnerPlayerImage.src = iconSrces + 'arya-01.svg';  };
   if (player1 === "Margaery Tyrell")    {winnerPlayerImage.src = iconSrces + 'mary2-01.svg';  };
   if(player1 === "Ramsay Snow")         {winnerPlayerImage.src = iconSrces + 'ramsay2-01.svg'};
   if(player1 === "Brienne of Tarth")    {winnerPlayerImage.src = iconSrces + 'brienne-01.svg'};

 }


},3500);




}//ending player1

















 //linked to the dice
var displayDice2 = document.getElementById('displayDice2');
var diceImg2 = document.createElement('img');
displayDice2.appendChild(diceImg2);




// player 2 ----------------

function rollDice2(){


  /* checking whos turn it is, and returning an error if the players is not allowed to roll */
  if(currentPlayerTurn === 0){
    var alertError = alert("nope you cant");
    return alertError;
  }


 //Making a variable for the dice
  var rollp2 = Math.ceil(Math.random() * max);
  /*increasing the player value according to the rollp1 value*/
  player2verdi = player2verdi + rollp2;



 /* making dice animation , switching out images with a timeout*/
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







      /* ----------------------------- Traps for player2  ---------------------------*/

      setTimeout(function(){



        //door trap
        if(player2verdi === 2){
         showMessage2(player2, "<br>found an <b> OPEN DOOR</b> <br> <b>7</b> steps forward ", "black", "50px 0 0  75px",  "pngdoor.png", "7px 25px 0 0", "120px");

          setTimeout(function(){
            overlay.style.display = 'none';
          }, trapDelay)

          player2verdi += 7;
       }



       // door trap 2
       if(player2verdi === 3){
           showMessage2(player2, "<br>found an <b> OPEN DOOR</b> <br> <b>7</b> steps forward ", "black", "50px 0 0  75px",  "pngdoor.png", "7px 25px 0 0", "120px");

           setTimeout(function(){
             overlay.style.display = 'none';
           }, trapDelay)

         player2verdi += 6;
      }

      // lava trap
      if (player2verdi === 10){
          showMessage2(player2, " <br> <b>STEPPED IN LAVA,</b> <br> 9 Steps back", "black", "35px 0 0 75px", "pngfire.png", "25px 25px 200px 0", "200px");

          setTimeout(function(){
            overlay.style.display = 'none';
          }, trapDelay)

        player2verdi -= 9;
      }



      // Dragon Trap
      if (player2verdi === 15){
        showMessage2(player2, " <br><b>Got Shot By Dragon</b> <br> 4 steps back", "black", "35px 10px 10px 75px", "pngdrage.png", "7px 10px 10px 10px", "200px");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, trapDelay)

        player2verdi -= 4;
      }


      //Elsa Trap
      if (player2verdi === 22){
        showMessage2(player2, " <br> <b>MET AN ANGRY ELSA,</b><br> 9 steps back", "black", "35px 0 0 75px", "pngelsa.png", "10px 25px 0 0", "150px" );

        setTimeout(function(){
          overlay.style.display = 'none';
        }, trapDelay)

        player2verdi -= 9;
      }

      // Ladder trap
      if (player2verdi === 28){
        showMessage2(player2, " <br> <b> Got thrown over the edge</b> <br>24 steps back", "black", "35px 0 0 75px", "pngladder-01.png", "0 100px 0 0", "25px");

        setTimeout(function(){
          overlay.style.display = 'none';
        }, trapDelay)

        player2verdi -= 24;
      }

    }, 600)


     /*decreasing the currentPlayerTurn, player1 = 0; player2 = 1 */
     currentPlayerTurn--;




     // 6 roll again
     setTimeout(function(){
        if(rollp2 === 6){
           currentPlayerTurn++;
             rollAgain('6/7', '2/3', '6-rollagain2.svg'); //  p2

           setTimeout(function(){
             arrowImg.style.display = 'none';
           }, 3000)

         }
      },700);

      /*if player value goes beyod the map > 29, place it on the the finish tile */
      if(player2verdi > 29){
        player2verdi = 29;
      }




   /* changing the value of player1 positionX/Y accoring to player1Verdi and taking the values from the drawnPositions array*/
  setTimeout(function(){

    myPlayer2.positionX = drawnPositions.positions[player2verdi].x;
    myPlayer2.positionY = drawnPositions.positions[player2verdi].y;
}, 700)





  /*changing the background/border/button color of the players, according to currentPlayerTurn */
  setTimeout(function(){

       if(currentPlayerTurn === 0){
         dice2.style.backgroundColor = "gray";
         p2border.style.border = "8px solid gray";
         p2border.style.backgroundColor = currentPlayerBackground2;

         dice1.style.backgroundColor = currentPlayerColor;
         p1border.style.border = "8px solid " + currentPlayerColor;
         p1border.style.backgroundColor = currentPlayerBackground;
       }


       if(currentPlayerTurn === 1){
         dice2.style.backgroundColor = currentPlayerColor;
         p2border.style.border = "8px solid " + currentPlayerColor;
         p2border.style.backgroundColor = currentPlayerBackground;

         dice1.style.backgroundColor = "gray";
         p1border.style.border = "8px solid gray";
         p1border.style.backgroundColor = currentPlayerBackground2;
       }
     }, 1100);




     /*showing the score of each player under the dice */
                  var showScore2 = document.getElementById('showScore2');

                  setTimeout(function(){
                        showScore2.innerHTML = player2verdi;
                  },1100)



    /* and finally, drawPLayer1 in new positon and draw player2 in current posiiton */
    setTimeout(function(){
      window.requestAnimationFrame(drawPlayer2);
      window.requestAnimationFrame(p1CurrentPos);


    }, 1000)


    setTimeout(function(){
     if(player2verdi >= 29){
       winnerOverlay.style.display = 'block';
       winnerName.innerHTML = player2;




       if (player2 === 'Eddard Stark')       {winnerPlayerImage.src = iconSrces + 'player6-01.svg';  };
       if (player2 === "Daenerys Targaryen") {winnerPlayerImage.src = iconSrces + 'player7-01.svg';  };
       if (player2 === "Jon Snow")           {winnerPlayerImage.src = iconSrces + 'snow3-01.svg';  };
       if (player2 === "Tyrion Lannister")   {winnerPlayerImage.src = iconSrces + 'tyrion-01.svg';  };
       if (player2 === "Tormund")            {winnerPlayerImage.src = iconSrces + 'tormund-01.svg';  };
       if (player2 === "Joffrey Baratheon")  {winnerPlayerImage.src = iconSrces + 'joffrey-01.svg';  };
       if (player2 === "Arya Stark")         {winnerPlayerImage.src = iconSrces + 'arya-01.svg';  };
       if (player2 === "Margaery Tyrell")    {winnerPlayerImage.src = iconSrces + 'mary2-01.svg';  };
       if (player2 === "Ramsay Snow")         {winnerPlayerImage.src = iconSrces + 'ramsay2-01.svg'};
       if (player2 === "Brienne of Tarth")    {winnerPlayerImage.src = iconSrces + 'brienne-01.svg'};

     }


   },3500);


}//closing player2 roll function
