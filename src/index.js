import './style.css';
import image from './deezer.png'

const nav = document.getElementById('nav')
const main = document.getElementById('main-page')
const images = document.createElement('img')
images.src = image
nav.appendChild(images)

function showInfo(show) {
  const div = document.createElement('div')
  div.innerHTML = `
                  <div>
                    <img class ="info-image" src="${show.image}">
                  </div>
                  <p class="info-text">${show}</p>
                  <button id="comments-${show.id}">Comments</button>
                  <button id ="reservation-${show.id}">Reservation</button>
                  `

main.appendChild(div)

const commentBtn = document.getElementById('comments')
const reservationBtn = document.getElementById('reservation')

// commentBtn.addEventListener('click', function (){
// //coments section
// })

// reservationBtn.addEventListener('click', function(){
//   // reservation section
// })
};

const getShowInfo = async () => {
  let url = 'https://api.tvmaze.com/shows/${show}';
  const response = await fetch(url, {
    headers: { 'x-api-key': process.env.API_KEY },
  
  })
  return response.json()
  
}

getShowInfo().then((e) =>{
  e.forEach((show) => showInfo(show)) 
})

showInfo(30)