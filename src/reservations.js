const postReservation = async (body) => {
  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O9fOGSf4v54LBte7f7eY/reservations/';
  await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getReservations = async (id) => {
  const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O9fOGSf4v54LBte7f7eY/reservations?item_id=${id}`;
  const response = await fetch(apiUrl, { method: 'GET' });
  let reservations = await response.json();
  if (reservations.error) {
    reservations = [];
  }
  return reservations;
};

const displayReservations = (test) => {
  const section = document.createElement('section');
  const ul = document.getElementById('reserveData');
  ul.classList.add('data-list');
  section.innerHTML = '';
  test.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
     ${item.username}: ${item.date_start}: ${item.date_end}
    `;

    section.appendChild(listItem);
    ul.appendChild(section);
  });
  /* eslint-disable no-use-before-define */
  const counterReserv = counterReservations(test);
  document.getElementById('reserve-count').innerHTML = counterReserv;
};

const displayPopup = (image, info, id) => {
  const ul = document.createElement('ul');
  ul.classList.add('data-list');
  const popupRes = document.getElementById('reserve');
  popupRes.classList = 'popup-reservation-wraper';
  document.getElementById('reserve').style.display = 'block';
  popupRes.innerHTML = `
  <a id="close">X</a>
  <h1>${info}</h1>
  <h3 id="reserve-count"></h3>
  <img src="${image}" alt="image" id="img">
  <ul id="reserveData"></ul>
  <input type="text" id="input-name">
  <input type="date" id="input-datestart">
  <input type="date" id="input-dateend">
  <button type="button" id="submit-btn">Reserve</button>
  `;

  const anchor = document.getElementById('close');

  anchor.addEventListener('click', () => {
    popupRes.style.display = 'none';
  });
  const name = document.getElementById('input-name');
  const startDate = document.getElementById('input-datestart');
  const endDate = document.getElementById('input-dateend');

  const submit = document.getElementById('submit-btn');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const body = {
      item_id: id,
      username: name.value,
      date_start: startDate.value,
      date_end: endDate.value,
    };
    postReservation(body);
    setTimeout(() => {
      getReservations(id).then((res) => {
        displayReservations(res);
      });
    }, 1000);
  });
  setTimeout(() => {
    getReservations(id).then((res) => {
      displayReservations(res);
    });
  }, 1000);
};

const counterReservations = (reservations) => {
  const result = reservations ? `Reservations(${reservations.length})` : 'Reservations (0)';
  return result;
};

export default displayPopup;
