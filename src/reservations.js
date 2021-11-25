// const reservationPopup = () => {
//     const Btn = document.getElementById('btn');
//     Btn.addEventListener('click', () => {

//         const getShows = async () => {
//           const Url = 'https://api.tvmaze.com/singlesearch/shows?q=friends';
//           const response = await fetch(Url, { method: 'GET' });
//           const show = await response.json();
//           return show;
//         };
//         getShows().then((show) => {
//           displayPopup(show.image.medium, show.rating.average);
//         });
//     }
//     )};
/* eslint-disable */
const displayPopup = (image, info) => {
  const popupRes = document.getElementById('reserve');
  popupRes.classList = 'popup-reservation-wraper';
  document.getElementById('reserve').style.display = 'block';
  const text = document.createElement('p');
  const img = document.createElement('img');
  img.setAttribute('alt', 'preview');
  img.setAttribute('src', `${image}`);
  popupRes.innerHTML = `
    <a id="close">X</a>
    <h1>${info}</h1>
    `;
  const anchor = document.getElementById('close');
  popupRes.appendChild(img);
  popupRes.appendChild(text);

  anchor.addEventListener('click', () => {
    popupRes.style.display = 'none';
  });
};



// Form reservation
const addReservations = document.createElement('form');
addReservations.classList.add('reservations-form');
const formHeader = document.createElement('h2');
formHeader.textContent = 'Reserve you Blueray'
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



// export default  reservationPopup;
// export default displayPopup;
// export default getShows;
