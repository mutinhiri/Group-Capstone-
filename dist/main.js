/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const mainSection = document.getElementById('main-page');\r\n\r\nfunction createCard(dog) {\r\n  const card = document.createElement('div');\r\n  card.classList = 'main-section-card';\r\n  card.innerHTML = `\r\n    <div class=\"card-image-container\">\r\n      <img class=\"card-image\" src=\"${dog.image.url}\" alt=\"\">\r\n    </div>\r\n    <h3 class=\"card-title\">${dog.name}</h3>\r\n    <button id=\"comments-button-${dog.id}\" class=\"comments-button\">Comments</button>\r\n    <button id=\"reservations-button-${dog.id}\" class=\"reservations-button\">Reservations</button>\r\n  `;\r\n\r\n  mainSection.appendChild(card);\r\n\r\n  const commentsButton = document.getElementById(`comments-button-${dog.id}`);\r\n  commentsButton.addEventListener('click', () => {\r\n    // Comments\r\n  });\r\n\r\n  const reservationsButton = document.getElementById(`reservations-button-${dog.id}`);\r\n  reservationsButton.addEventListener('click', () => {\r\n    // Reservations\r\n  });\r\n}\r\n\r\nconst getDogsData = async () => {\r\n  const url = 'https://api.thedogapi.com/v1/breeds?page=0&limit=9';\r\n  const response = await fetch(url, {\r\n    // headers: { 'x-api-key': process.env.API_KEY },\r\n  });\r\n  return response.json();\r\n};\r\n\r\ngetDogsData().then((list) => {\r\n  list.forEach((dog) => createCard(dog));\r\n});\n\n//# sourceURL=webpack://group-capstone-/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;