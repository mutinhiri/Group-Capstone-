import './style.css';
// import reservationPopup from './reservations';
import { displayPopup } from './reservations.js';
// import getShows from './reservations';
// reservationPopup();
import fillPopUp from './comments.js';
import actorCounter from './actorCounter';

const mainSection = document.getElementById('main-page');

const postLikes = async (body) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nNqRZVTd1eG2Ykrumvl8/likes/';
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

function createCard(actor) {
  const card = document.createElement('div');
  card.classList = 'main-section-card';
  card.innerHTML = `
    <div class="card-image-container">
      <img class="card-image" src="${actor.image.medium}" alt="">
    </div>
    <h2 class="card-title">${actor.name}</h2>
    <p id="like-${actor.id}">Likes 0</p>
    <button id="like-button${actor.id}">&#10084</button>
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
    displayPopup(actor.image.medium, actor.rating.average);
    // Reservations
  });

  const likeButton = document.getElementById(`like-button${actor.id}`);
  likeButton.addEventListener('click', () => {
    const body = {
      item_id: String(actor.id),
    };

    postLikes(body);
    const counter = document.getElementById(`like-${actor.id}`);
    const likes = parseInt(counter.innerHTML.split(' ')[1], 10);
    counter.innerHTML = `likes: ${likes + 1}`;
  });
}

const getActorsData = async () => {
  // const url = 'https://api.tvmaze.com/people?page=1'
  // const url = 'https://api.tvmaze.com/people?page=4'
  const url = 'https://api.tvmaze.com/shows';

  const response = await fetch(url, {
  });
  return response.json();
};

const getLikes = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nNqRZVTd1eG2Ykrumvl8/likes/';
  const response = await fetch(url);
  return response.json();
};

getActorsData().then((list) => {
  actorCounter(list);
  list.splice(-6).forEach((actor) => createCard(actor));
});

getLikes().then((likes) => {
  likes.forEach((item) => {
    const counter = document.getElementById(`like-${item.item_id}`);
    if (counter) {
      const likeNum = `likes: ${item.likes}`;
      counter.innerHTML = likeNum;
    }
  });
});
