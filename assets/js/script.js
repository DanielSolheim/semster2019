/* Først må vi hente inn Spelarene med ein api call, me brukar fetch i dette døme */


const api = 'https://anapioficeandfire.com/api/characters/';
const characters = [339, 583, 1303, 1052, 2024, 572, 552, 333, 444, 16];
/* Eddard stark(339), Jon snow(583), daenerys(1303), Tyrion Lanister( 1052), Tormund Giantsbane (2024) */

for (let i = 0; i < characters.length; i++) {
	let url = api + characters[i];

	fetch(url)
		.then(result => result.json())
		.then((res) => {
			createCards(res);
		})
		.catch(err => console.log(err));
}

var i = 0;




function createCards(result){
  console.log(result);

  var cardContainer = document.getElementById('cards');
  var card = document.createElement('div');
  i++;
  card.classList.add('card');
  card.classList.add('card'  + i);
  cardContainer.appendChild(card);

  let name = document.createElement('p');
  name.classList.add('name')
  card.appendChild(name);
  name.innerHTML = '<b>'  + result.name + '<b>' ;

let familyicon = document.createElement('img');
let iconSrc = 'assets/bilder/players/';
card.appendChild(familyicon);



// flere if statements kommer her senere
  if (result.name === 'Eddard Stark') { card.style.backgroundColor = 'white';   familyicon.src = iconSrc + 'player6-01.svg';  };
	if (result.name === "Daenerys Targaryen") { card.style.backgroundColor = 'white';   familyicon.src = iconSrc + 'player7-01.svg';  };
	if (result.name === "Jon Snow") { card.style.backgroundColor = 'white';   familyicon.src = iconSrc + 'snow3-01.svg';  };
	if (result.name === "Tyrion Lannister") { card.style.backgroundColor = 'white';   familyicon.src = iconSrc + 'tyrion-01.svg';  };




  let gender = document.createElement('p');
  gender.innerHTML = result.gender;
  card.appendChild(gender);



//lage event listener for å legge til player i local storage
	card.addEventListener('click', function(){
	  if (localStorage.player1 && localStorage.player2){
			localStorage.clear();
			localStorage.player1 = result.name;
		} else if (localStorage.player1){
			localStorage.player2 = result.name;
		} else {
			localStorage.player1 = result.name;
		}




	});



} //closing createcard function

//lage en event listener for å starte gamet
const startGame = document.getElementById('startGame');

startGame.addEventListener('click', function(){
	if(localStorage.player1 && localStorage.player2){
		startGame.href = 'game.html';
	} else {
		alert("Choose players")
	}
});
