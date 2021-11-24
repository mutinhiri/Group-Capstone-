const reservationPopup = () => {
    const Btn = document.getElementById('btn');
    Btn.addEventListener('click', () => {

        const getShows = async () => {
          const Url = 'https://api.tvmaze.com/singlesearch/shows?q=friends';
          const response = await fetch(Url, { method: 'GET' });
          const show = await response.json();
          return show;
        };
        getShows().then((show) => {
          displayPopup(show.image.medium, show.rating.average);
        });
    } 
    )};

const displayPopup = (image, info)  => {
    const popupRes = document.getElementById('reserve');
    popupRes.classList = 'popup-reservation-wraper';
    const text = document.createElement('p');
    const img = document.createElement('img');
    img.setAttribute("alt", "preview")
    img.setAttribute("src", `${image}`);
    popupRes.innerHTML = `
    
    <h1>${info}</h1>
    `
    popupRes.appendChild(img);
    popupRes.appendChild(text);
}


export default  reservationPopup; 
export { displayPopup };

 