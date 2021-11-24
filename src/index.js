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
  const url = 'https://api.tvmaze.com/shows?page=4';

  const response = await fetch(url, {
  });
  return response.json();
};

getActorsData().then((list) => {
  for (let i = 0; i < 6; i += 1) {
    list.forEach((actor) => createCard(actor));
  }
});