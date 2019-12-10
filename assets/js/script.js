/* Først må vi hente inn Spelarene med ein api call, me brukar fetch i dette døme */


const api = 'https://anapioficeandfire.com/api/characters/';
const characters = [339, 583, 1303, 1052, 2024, 565, 148, 16, 849, 216];
/* Eddard stark(339), Jon snow(583), daenerys(1303), Tyrion Lanister( 1052), Tormund Giantsbane (2024), Joffrey (565), Arya Stark(148), Margarye tyrell (16), ramsay snow(849), Brienne of Tarth(216) */

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
  if (result.name === 'Eddard Stark')       {familyicon.src = iconSrc + 'player6-01.svg';  };
	if (result.name === "Daenerys Targaryen") {familyicon.src = iconSrc + 'player7-01.svg';  };
	if (result.name === "Jon Snow")           {familyicon.src = iconSrc + 'snow3-01.svg';  };
	if (result.name === "Tyrion Lannister")   {familyicon.src = iconSrc + 'tyrion-01.svg';  };
  if (result.name === "Tormund")            {familyicon.src = iconSrc + 'tormund-01.svg';  };
	if (result.name === "Joffrey Baratheon")  {familyicon.src = iconSrc + 'joffrey-01.svg';  };
	if (result.name === "Arya Stark")         {familyicon.src = iconSrc + 'arya-01.svg';  };
	if (result.name === "Margaery Tyrell")    {familyicon.src = iconSrc + 'mary2-01.svg';  };
	if (result.name === "Ramsay Snow")        {familyicon.src = iconSrc + 'ramsay2-01.svg';  };
	if (result.name === "Brienne of Tarth")        {familyicon.src = iconSrc + 'brienne-01.svg';  };



  let gender = document.createElement('p');
  gender.innerHTML = result.culture;
	if (result. culture === ""){
		gender.innerHTML = "Unknown";
	}
  card.appendChild(gender);



//lage event listener for å legge til player i local storage
	card.addEventListener('click', function(){
	  if (localStorage.player1 && localStorage.player2){
			localStorage.clear();
			reset();

			localStorage.player1 = result.name;

		  banner1();

		} else if (localStorage.player1){
			localStorage.player2 = result.name;
		
			banner2();
		} else {
			localStorage.player1 = result.name;

			banner1();
		}

	});

	function  banner1() {
		let banner = document.createElement('div');
		banner.innerHTML = "Player1";
		banner.classList.add('banner');
		banner.classList.add('banner1');
		card.appendChild(banner);
	}

	function  banner2() {
		let banner = document.createElement('div');
		banner.innerHTML = "Player2";
		banner.classList.add('banner');
		banner.classList.add('banner2');
		card.appendChild(banner);
	}



	function reset() {
	document.querySelectorAll(".banner").forEach(function (elem) {
		elem.remove();
	});
	document.querySelectorAll(".banner").forEach(function (elem) {
		elem.remove();
	});

	document.querySelectorAll(".shield").forEach(function (elem) {
		elem.style.transform = 'scale(1)';
	});
}




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
