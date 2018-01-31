/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simpleAdd__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deeplyCurriedGreeting__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unitConverter__ = __webpack_require__(3);




const add10 = Object(__WEBPACK_IMPORTED_MODULE_0__simpleAdd__["a" /* default */])(10);

const twenty = add10(10);
const thirty = add10(20);

console.log(`Twenty: ${twenty}`); //Twenty: 20
console.log(`Thirty: ${thirty}`); //Thirty: 30

const greeting = Object(__WEBPACK_IMPORTED_MODULE_1__deeplyCurriedGreeting__["a" /* default */])("Hello");

const seperator = greeting(" ");

const greetNiall = seperator("Niall");

const greetJohn = seperator("John");

console.log(greetNiall); //Hello Niall
console.log(greetJohn); //Hello John

const remCalc = Object(__WEBPACK_IMPORTED_MODULE_2__unitConverter__["a" /* default */])("rem")(0.071428571)(0);
const emCalc = Object(__WEBPACK_IMPORTED_MODULE_2__unitConverter__["a" /* default */])("em")(0.071428571)(0);

const tenPxToRem = remCalc(10);
const tenPxToEm = emCalc(10);

console.log(tenPxToRem); //0.71428571rem
console.log(tenPxToEm); //0.71428571em

const milesToKm = Object(__WEBPACK_IMPORTED_MODULE_2__unitConverter__["a" /* default */])(" miles")(1.60936)(0);

const twentyTwoMilesToKm = milesToKm(22);

console.log(twentyTwoMilesToKm);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * a simple example of how to add 2 numbers together using currying
 * @param number1 - This is the set number. This will not change.
 */
const simpleAdd = number1 => number2 => number1 + number2;

/* harmony default export */ __webpack_exports__["a"] = (simpleAdd);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * creates a greeting string using a deeply curried function
 * @param greeting
 */
const deeplyCurriedGreeting = greeting => seperator => name => `${greeting}${seperator}${name}`;

/* harmony default export */ __webpack_exports__["a"] = (deeplyCurriedGreeting);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const unitConverter =
    units =>
        factor =>
            offset =>
                input =>
                    `${(input - offset) * factor}${units}`;


/* harmony default export */ __webpack_exports__["a"] = (unitConverter);

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map