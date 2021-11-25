import './style.css';
import fillPopUp from './comments.js';


const mainSection = document.getElementById('main-page');

function createCard(actor) {
  const card = document.createElement('div');
  card.classList = 'main-section-card';
  card.innerHTML = `
    <div class="card-image-container">
      <img class="card-image" src="${actor.image.medium}" alt="">
    </div>
    <h2 class="card-title">${actor.name}</h2>
    <button id="comments-button-${actor.id}" class="comments">Comments</button>
    <button id="reservations-button-${actor.id}" class="reservations">Reservations</button>
  `;

  mainSection.appendChild(card);

  const comments = document.getElementById(`comments-button-${actor.id}`);
  comments.addEventListener('click', () => {
  fillPopUp(actor.image.medium, actor.summary);
  });

  const reservations = document.getElementById(`reservations-button-${actor.id}`);
  reservations.addEventListener('click', () => {
    // Reservations
  });
}

const getActorsData = async () => {
  // const url = 'https://api.tvmaze.com/people?page=4'
  const url = 'https://api.tvmaze.com/shows';

  const response = await fetch(url, {
  });
  return response.json();
};

getActorsData().then((list) => {
    list.splice(-6).forEach((actor) => createCard(actor));

    getLikes().then((likes) => {
      likes.forEach((e) => {
        const counter = document.getElementById(`like${e.item_id}`);
        if (counter){
          counter.innerHTML =  `Likes: ${e.likes}`;
        }
      })
    })
    
});


