/* Først må vi hente inn Spelarene med ein api call, me brukar fetch i dette døme */


const api = 'https://anapioficeandfire.com/api/characters/';
const characters = [339, 640, 1303, 862, 238, 572, 692, 836, 1442, 503];

for (let i = 0; i < characters.length; i++) {
	let url = api + characters[i];

	fetch(url)
		.then(result => result.json())
		.then((res) => {
			createCard(res);
		})
		.catch(err => console.log(err));
}


function createCard(result){
  console.log(result);

  var cardContainer = document.getElementById('cards');
  var card = document.createElement('div');
  card.classList.add('card');
  cardContainer.appendChild(card);



}
