/* Først må vi hente inn Spelarene med ein api call, me brukar fetch i dette døme */


const api = 'https://anapioficeandfire.com/api/characters/';
const characters = [339, 640, 1303, 333, 238, 572, 692, 836, 1442, 503];

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
let iconSrc = 'assets/bilder/icons/skjold';
card.appendChild(familyicon);



// flere if statements kommer her senere
  if (result.name === 'Eddard Stark') { card.style.backgroundColor = 'green';  /* familyicon.src = iconSrc + i + '.svg'; */   }



  let gender = document.createElement('p');
  gender.innerHTML = result.gender;
  card.appendChild(gender);

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



//lage event listener for å legge til player i local storage
