import './style.css';
import image from './deezer.png'

const nav = document.getElementById('nav')
const main = document.getElementById('main-page')
const images = document.createElement('img')
images.src = image
nav.appendChild(images)

function musicInfo(id) {
  const div = document.createElement('div')
  div.innerHTML = `
                  <div>
                    <img class = info-image src= todo>
                  </div>
                  <p class="info-text">Todo</p>
                  <button id="comments">todo</button>`
}