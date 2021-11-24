// const getShows = async () => {
//   const apiUrl = 'https://api.tvmaze.com/singlesearch/shows?q=seinfeld';
//   const response = await fetch(apiUrl, { method: 'GET' });
//   const show = await response.json();
//   return show;
// };

const fillPopUp = (show, sum) => {
  const popUp = document.getElementById('modal');
  popUp.classList = 'modal';
  popUp.style.display = 'block';

  popUp.innerHTML = `
  <a href="#" id="toogle">X</a>
    <img src="${show}" alt="TV-show">
    <p>${sum}</p>
    `;
  const toogle = document.getElementById('toogle');

  toogle.addEventListener('click', () => {
    popUp.style.display = 'none';
  });
};

// button.addEventListener('click', (e) => {
//   e.preventDefault();
//   getShows().then((show) => {
//     fillPopUp(show.image.medium, show.summary);
//   });
// });
export default fillPopUp;