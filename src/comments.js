const getDogs = async () => {
  const apiUrl = 'https://dog.ceo/api/breed/labrador/images/random';
  const response = await fetch(apiUrl, { method: 'GET' });
  const dog = await response.json();

  return dog.message;
};
const dogy = getDogs();
const fillPopUp = () => {
  const popUp = document.getElementById('modal');

  popUp.innerHTML = `
  
  <img src="${dogy.message}" alt="">
  <h2>Labrador</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nihil optio dolore quae debitis excepturi fuga impedit recusandae minima inventore!</p>
  
    `;
};

// const populateList = (dog) => {
//   const section = document.getElementById('test');

//   const button = document.getElementById('comment-btn');

//   const newElement = document.createElement('img');

//   newElement.src = dog;

//   section.appendChild(newElement);
// };

export default fillPopUp;