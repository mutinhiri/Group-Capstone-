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

// export default  reservationPopup;
// export default displayPopup;
// export default getShows;
