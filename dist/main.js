/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: rgb(31, 29, 29);\\r\\n  height: 800px;\\r\\n  font-family: \\\"Netflix Sans\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\r\\n}\\r\\n\\r\\n.main-page {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  gap: 20px;\\r\\n  margin-top: 50px;\\r\\n  margin-left: 9rem;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#reserve {\\r\\n  background-image: linear-gradient(-225deg, #e7dddd 0%, #000 100%);\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  z-index: 1;\\r\\n  display: grid;\\r\\n  overflow-y: auto;\\r\\n  height: 90%;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.rating {\\r\\n  margin: 2px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#close {\\r\\n  position: absolute;\\r\\n  top: 15px;\\r\\n  right: 15px;\\r\\n  cursor: pointer;\\r\\n  height: 25px;\\r\\n}\\r\\n\\r\\n.data-list {\\r\\n  list-style: none;\\r\\n  text-align: center;\\r\\n  display: block;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\n.resText {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#reserve h1 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#input-name {\\r\\n  display: block;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n#input-datestart {\\r\\n  display: block;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n#input-dateend {\\r\\n  display: block;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n#reserve-count {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#submit-btn {\\r\\n  display: block;\\r\\n  cursor: pointer;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  height: 30px;\\r\\n  border-radius: 8px;\\r\\n  background-image:\\r\\n    linear-gradient(\\r\\n      to top,\\r\\n      #977474 0%,\\r\\n      #fd2222 24%,\\r\\n      #e50b0b 30%,\\r\\n      #e91717 46%,\\r\\n      #a10f0f 59%,\\r\\n      #b70b0b 71%,\\r\\n      #2c0203 84%,\\r\\n      #540101 100%\\r\\n    );\\r\\n}\\r\\n\\r\\n#submit-btn:hover {\\r\\n  background-image: linear-gradient(to right, #f5f5f5 0%, #ff000d 100%);\\r\\n}\\r\\n\\r\\n#img {\\r\\n  display: block;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  padding-left: 18rem;\\r\\n  padding-right: 18rem;\\r\\n}\\r\\n\\r\\n#toogle {\\r\\n  position: absolute;\\r\\n  right: 4vh;\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n  font-weight: bolder;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n#modal {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  top: 0;\\r\\n  display: none;\\r\\n  justify-content: space-evenly;\\r\\n  height: 500px;\\r\\n  width: 600px;\\r\\n  align-items: center;\\r\\n  padding: 10px 40px;\\r\\n  background-image: linear-gradient(-225deg, #e7dddd 0%, #000 100%);\\r\\n  background-blend-mode: multiply, multiply;\\r\\n  border-radius: 20px;\\r\\n  margin: 0 50px;\\r\\n  font-size: medium;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.show-img {\\r\\n  height: 130px;\\r\\n  margin: 0 250px;\\r\\n}\\r\\n\\r\\n.inner {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  color: rgb(43, 46, 43);\\r\\n  font-size: 11px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n\\r\\n  /* padding: 10px 40px; */\\r\\n  height: 100px;\\r\\n  overflow-y: scroll;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n#input-text {\\r\\n  margin: 15px 0;\\r\\n}\\r\\n\\r\\n#comments {\\r\\n  height: 50px;\\r\\n  width: 150px;\\r\\n  border: 1px solid black;\\r\\n  list-style: none;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n#btn-comment {\\r\\n  margin: 20px 0;\\r\\n  height: 30px;\\r\\n  border-radius: 8px;\\r\\n  background-image:\\r\\n    linear-gradient(\\r\\n      to top,\\r\\n      #977474 0%,\\r\\n      #fd2222 24%,\\r\\n      #e50b0b 30%,\\r\\n      #e91717 46%,\\r\\n      #a10f0f 59%,\\r\\n      #b70b0b 71%,\\r\\n      #2c0203 84%,\\r\\n      #540101 100%\\r\\n    );\\r\\n}\\r\\n\\r\\n#btn-comment:hover {\\r\\n  background-image: linear-gradient(to right, #f5f5f5 0%, #ff000d 100%);\\r\\n}\\r\\n\\r\\n.header-nav {\\r\\n  width: 100%;\\r\\n  padding: 11px;\\r\\n  background-color: rgb(50 50 50);\\r\\n  color: hsl(0deg 88% 45%);\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  border-radius: 31px;\\r\\n  font-weight: bold;\\r\\n  font-size: larger;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  width: 100%;\\r\\n  padding: 15px;\\r\\n  background-color: rgb(50 50 50);\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  color: #e50914;\\r\\n  color: currentColor;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.link {\\r\\n  color: #e50914;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://group-capstone-/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://group-capstone-/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://group-capstone-/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://group-capstone-/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://group-capstone-/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://group-capstone-/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://group-capstone-/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://group-capstone-/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://group-capstone-/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://group-capstone-/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/actorCounter.js":
/*!*****************************!*\
  !*** ./src/actorCounter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst actorCounter = (list) => {\r\n  const counter = document.getElementById('actor-count');\r\n  counter.innerHTML = `Actor Count (${list.splice(-20).length})`;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actorCounter);\n\n//# sourceURL=webpack://group-capstone-/./src/actorCounter.js?");

/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counterComment = (comments) => {\r\n  const result = comments ? `Comments(${comments.length})` : 'Comments (0)';\r\n  return result;\r\n};\r\n\r\nconst getComments = async (id) => {\r\n  const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xDtzCPywXomy9vfRiKuT/comments?item_id=${id}`;\r\n  const response = await fetch(apiUrl, { method: 'GET' });\r\n  let comments = await response.json();\r\n  if (comments.error) {\r\n    comments = [];\r\n  }\r\n  return comments;\r\n};\r\nconst postStrange = async (body) => {\r\n  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xDtzCPywXomy9vfRiKuT/comments';\r\n  await fetch(apiUrl, {\r\n    method: 'POST',\r\n    body: JSON.stringify(body),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n};\r\n\r\nconst populateList = (list) => {\r\n  const section = document.getElementById('comments');\r\n  section.innerHTML = '';\r\n  list.forEach((item) => {\r\n    const newElement = document.createElement('li');\r\n    newElement.classList = 'item-list';\r\n    newElement.innerHTML = `${item.username}: ${item.comment} : ${item.creation_date}`;\r\n\r\n    section.appendChild(newElement);\r\n  });\r\n  const counterCom = counterComment(list);\r\n  document.getElementById('comment-count').innerHTML = counterCom;\r\n};\r\n\r\nconst fillPopUp = (show, sum, id) => {\r\n  const popUp = document.getElementById('modal');\r\n  popUp.classList = 'modal';\r\n  popUp.style.display = 'block';\r\n  popUp.innerHTML = `\r\n  <a href=\"#\" id=\"toogle\">X</a>\r\n    <img class=\"show-img\" src=\"${show}\" alt=\"TV-show\">\r\n    <div class=\"paragraph\">\r\n     ${sum}\r\n     </div>\r\n    \r\n    <h3 id=\"comment-count\"></h3>\r\n<div id=\"comments\">\r\n   </div>\r\n<div class=\"inner\">\r\n<h4>Add a comment</h4>\r\n<input type=\"text\"  id=\"input-text\" required>\r\n<textarea  id=\"input-area\" cols=\"21\" rows=\"2\" required></textarea>\r\n<button type=\"button\" id=\"btn-comment\" >Comment</button>\r\n</div>\r\n    `;\r\n  const name = document.getElementById('input-text');\r\n  const commentText = document.getElementById('input-area');\r\n  const commentBtn = document.getElementById('btn-comment');\r\n\r\n  commentBtn.addEventListener('click', () => {\r\n    if (name.validity.valueMissing || commentText.validity.valueMissing) {\r\n      name.setCustomValidity('PLease Enter Text!');\r\n    } else {\r\n      const body = {\r\n        item_id: id,\r\n        username: name.value,\r\n        comment: commentText.value,\r\n      };\r\n      postStrange(body);\r\n      setTimeout(() => {\r\n        getComments(id).then((com) => {\r\n          populateList(com);\r\n        });\r\n      }, 1000);\r\n\r\n      name.value = '';\r\n      commentText.value = '';\r\n    }\r\n  });\r\n  const toogle = document.getElementById('toogle');\r\n\r\n  toogle.addEventListener('click', () => {\r\n    popUp.style.display = 'none';\r\n  });\r\n  setTimeout(() => {\r\n    getComments(id).then((com) => {\r\n      populateList(com);\r\n    });\r\n  }, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillPopUp);\r\n\n\n//# sourceURL=webpack://group-capstone-/./src/comments.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _reservations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservations.js */ \"./src/reservations.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ \"./src/comments.js\");\n/* harmony import */ var _actorCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actorCounter.js */ \"./src/actorCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst mainSection = document.getElementById('main-page');\r\n\r\nconst postLikes = async (body) => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nNqRZVTd1eG2Ykrumvl8/likes/';\r\n  await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify(body),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n};\r\n\r\nconst createCard = (actor) => {\r\n  const card = document.createElement('div');\r\n  card.classList = 'main-section-card';\r\n  card.innerHTML = `\r\n    <div class=\"card-image-container\">\r\n      <img class=\"card-image\" src=\"${actor.image.medium}\" alt=\"\">\r\n    </div>\r\n    <h2 class=\"card-title\">${actor.name}</h2>\r\n    <p id=\"like-${actor.id}\">Likes 0</p>\r\n    <button id=\"like-button${actor.id}\">&#10084</button>\r\n    <button id=\"comments-button-${actor.id}\" class=\"comments\">Comments</button>\r\n    <button id=\"reservations-button-${actor.id}\" class=\"reservations\">Reservations</button>\r\n  `;\r\n\r\n  mainSection.appendChild(card);\r\n\r\n  const comments = document.getElementById(`comments-button-${actor.id}`);\r\n\r\n  comments.addEventListener('click', (e) => {\r\n    (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(actor.image.medium, actor.summary, actor.name, e.target.id.split('-')[2]);\r\n  });\r\n\r\n  const reservations = document.getElementById(`reservations-button-${actor.id}`);\r\n  reservations.addEventListener('click', (e) => {\r\n    (0,_reservations_js__WEBPACK_IMPORTED_MODULE_1__.displayPopup)(actor.image.medium, actor.rating.average, e.target.id.split('-')[2]);\r\n\r\n    // Reservations\r\n  });\r\n\r\n  const likeButton = document.getElementById(`like-button${actor.id}`);\r\n  likeButton.addEventListener('click', () => {\r\n    const body = {\r\n      item_id: String(actor.id),\r\n    };\r\n\r\n    postLikes(body);\r\n    const counter = document.getElementById(`like-${actor.id}`);\r\n    const likes = parseInt(counter.innerHTML.split(' ')[1], 10);\r\n    counter.innerHTML = `likes: ${likes + 1}`;\r\n  });\r\n};\r\n\r\nconst getActorsData = async () => {\r\n  const url = 'https://api.tvmaze.com/shows';\r\n\r\n  const response = await fetch(url, {\r\n  });\r\n  return response.json();\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nNqRZVTd1eG2Ykrumvl8/likes/';\r\n  const response = await fetch(url);\r\n  return response.json();\r\n};\r\n\r\ngetActorsData().then((list) => {\r\n  (0,_actorCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(list);\r\n  list.splice(-27).forEach((actor) => createCard(actor));\r\n});\r\n\r\ngetLikes().then((likes) => {\r\n  likes.forEach((item) => {\r\n    const counter = document.getElementById(`like-${item.item_id}`);\r\n    if (counter) {\r\n      const likeNum = `likes: ${item.likes}`;\r\n      counter.innerHTML = likeNum;\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://group-capstone-/./src/index.js?");

/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPopup\": () => (/* binding */ displayPopup),\n/* harmony export */   \"counterReservations\": () => (/* binding */ counterReservations)\n/* harmony export */ });\nconst postReservation = async (body) => {\n  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O9fOGSf4v54LBte7f7eY/reservations/';\n  await fetch(apiUrl, {\n    method: 'POST',\n    body: JSON.stringify(body),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n};\n\nconst getReservations = async (id) => {\n  const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O9fOGSf4v54LBte7f7eY/reservations?item_id=${id}`;\n  const response = await fetch(apiUrl, { method: 'GET' });\n  let reservations = await response.json();\n  if (reservations.error) {\n    reservations = [];\n  }\n  return reservations;\n};\n\nconst displayReservations = (test) => {\n  const section = document.createElement('section');\n  const ul = document.getElementById('reserveData');\n  ul.classList.add('data-list');\n  section.innerHTML = '';\n  test.forEach((item) => {\n    const listItem = document.createElement('li');\n    listItem.innerHTML = `\n     ${item.username}: ${item.date_start}: ${item.date_end}\n    `;\n\n    section.appendChild(listItem);\n    ul.appendChild(section);\n  });\n  /* eslint-disable no-use-before-define */\n  const counterReserv = counterReservations(test);\n  document.getElementById('reserve-count').innerHTML = counterReserv;\n};\n\nconst displayPopup = (image, info, id) => {\n  const ul = document.createElement('ul');\n  ul.classList.add('data-list');\n  const popupRes = document.getElementById('reserve');\n  popupRes.classList = 'popup-reservation-wraper';\n  document.getElementById('reserve').style.display = 'block';\n  popupRes.innerHTML = `\n  <a id=\"close\">X</a>\n  <h1>${info}</h1>\n  <h3 id=\"reserve-count\"></h3>\n  <img src=\"${image}\" alt=\"image\" id=\"img\">\n  <ul id=\"reserveData\"></ul>\n  <input type=\"text\" id=\"input-name\">\n  <input type=\"date\" id=\"input-datestart\">\n  <input type=\"date\" id=\"input-dateend\">\n  <button type=\"button\" id=\"submit-btn\">Reserve</button>\n  `;\n\n  const anchor = document.getElementById('close');\n\n  anchor.addEventListener('click', () => {\n    popupRes.style.display = 'none';\n  });\n  const name = document.getElementById('input-name');\n  const startDate = document.getElementById('input-datestart');\n  const endDate = document.getElementById('input-dateend');\n\n  const submit = document.getElementById('submit-btn');\n  submit.addEventListener('click', (e) => {\n    e.preventDefault();\n    const body = {\n      item_id: id,\n      username: name.value,\n      date_start: startDate.value,\n      date_end: endDate.value,\n    };\n    postReservation(body);\n    setTimeout(() => {\n      getReservations(id).then((res) => {\n        displayReservations(res);\n      });\n    }, 1000);\n  });\n  setTimeout(() => {\n    getReservations(id).then((res) => {\n      displayReservations(res);\n    });\n  }, 1000);\n};\n\nconst counterReservations = (reservations) => {\n  const result = reservations ? `Reservations(${reservations.length})` : 'Reservations (0)';\n  return result;\n};\n\n\n//# sourceURL=webpack://group-capstone-/./src/reservations.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;