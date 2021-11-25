

const displayPopup = (image, info, actorId)  => {
  const test = document.createElement('ul');
  test.classList.add('data-list');
  const popupRes = document.getElementById('reserve');
  popupRes.classList = 'popup-reservation-wraper';
  document.getElementById("reserve").style.display="block"; 
  const text = document.createElement('p');
  const img = document.createElement('img');
  img.classList.add('image');
  img.setAttribute("alt", "preview")
  img.setAttribute("src", `${image}`);
  popupRes.innerHTML = `
  <a id="close">X</a>
  <h1>${info}</h1>
  `
 
  refreshreservations(actorId).then((response) => {
      if (response.length !== 0) {
          response.forEach((element) => {
              const { username:name, date_start:startDate, date_end:endDate } = element;
              const li = document.createElement('li');
              li.innerText = `${name} : ${startDate}:  ${endDate}`;
              test.appendChild(li);
          });
      } else {
          test.innerHTML = "empty list"
      }
      
  });

  const addReservations = document.createElement('form');
addReservations.classList.add('reservations-form');
const formHeader = document.createElement('h2');
formHeader.textContent = 'Reserve your Blueray'
formHeader.classList.add('form-header');
const name = document.createElement('input');
name.classList.add('name');
name.type = 'text';
name.placeholder = 'your name';
const startDate = document.createElement('input');
startDate.classList.add('start-date');
startDate.type = 'date';
startDate.placeholder ='Enter start date';
const endDate = document.createElement('input');
endDate.classList.add('end-date');
endDate.type = 'date';
endDate.placeholder ='Enter end date';
const submit = document.createElement('button');
submit.classList.add('submit');
submit.textContent = 'Reserve';
submit.type ='submit';

addReservations.appendChild(formHeader);
addReservations.appendChild(name);
addReservations.appendChild(startDate);
addReservations.appendChild(endDate);
addReservations.appendChild(submit);



  const anchor =  document.getElementById('close');
  popupRes.appendChild(img);
  popupRes.appendChild(text);
  popupRes.appendChild(addReservations);
  popupRes.appendChild(test);


  anchor.addEventListener('click',  () => {
  popupRes.style.display = 'none';
  }

  )

  submit.addEventListener('submit', (event) => {
      event.preventDefault();
      submitReservation(
        actorId,
        name.value,
        startDate.value,
        endDate.value,
      );
      });
}

// reserve Blueray
const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O9fOGSf4v54LBte7f7eY/reservations/';

const submitReservation = async (actorId, name, startDate, endDate) => {
const client = { item_id: actorId, 
username: name,
date_start: startDate,
date_end: endDate
};

await fetch(API, {
  method: 'POST',
  body: JSON.stringify(client),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
};

// Form reservation

const item = document.getElementsByClassName('item');
const reservations = document.querySelector('#reservation')
const refreshreservations = async (item_id) => {
reservations.innerHTML = '';
const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O9fOGSf4v54LBte7f7eY/reservations?item_id=${item_id}`);
const data = await response.json();
return data;
};

// export default  reservationPopup;
export default displayPopup;
// export default getShows;
