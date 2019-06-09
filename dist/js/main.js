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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/business.js":
/*!****************************!*\
  !*** ./src/js/business.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sponsors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsors */ "./src/js/sponsors.js");



class MakeBusiness {
  constructor({owner: ow, director : di, cash: ca, emp: em} = {}) {
    this.ow = ow;
    this.director = di;
    this.cash = ca;
    this.emp = em;
    if (typeof (this.di) === 'undefined') this.di = "Victor";
  }
  businessInfo() {
    const sumSponsors = [..._sponsors__WEBPACK_IMPORTED_MODULE_0__["eu"], ..._sponsors__WEBPACK_IMPORTED_MODULE_0__["rus"], 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${this.ow}, director: ${this.di}. Our budget: ${this.ca}. And our employers: ${this.em}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${_sponsors__WEBPACK_IMPORTED_MODULE_0__["firstName"]}. It's a huge risk.`);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (MakeBusiness);

/***/ }),

/***/ "./src/js/employers.js":
/*!*****************************!*\
  !*** ./src/js/employers.js ***!
  \*****************************/
/*! exports provided: employersNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employersNames", function() { return employersNames; });
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((employers) => {
  return employers.length > 0
});
employersNames = employersNames.map((item) => item.toLowerCase().trim());



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employers */ "./src/js/employers.js");
/* harmony import */ var _sponsors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsors */ "./src/js/sponsors.js");
/* harmony import */ var _business__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business */ "./src/js/business.js");
// import {button as btn, Slider as sl } from './script';   // Импорт с перейменованием
// import * as total from './script';  // в переменной total будет все из script 
//import React, {Component} from 'react';







const makeBusiness = new _business__WEBPACK_IMPORTED_MODULE_2__["default"]({owner:'Sam', cash: _sponsors__WEBPACK_IMPORTED_MODULE_1__["money"], emp: _employers__WEBPACK_IMPORTED_MODULE_0__["employersNames"]});
makeBusiness.businessInfo();





/***/ }),

/***/ "./src/js/sponsors.js":
/*!****************************!*\
  !*** ./src/js/sponsors.js ***!
  \****************************/
/*! exports provided: eu, rus, money, firstName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eu", function() { return eu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rus", function() { return rus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "money", function() { return money; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstName", function() { return firstName; });
const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

let { eu, eu: [firstName, secondName, thirdName], rus } = sponsors;

const money = sponsors.cash.reduce((previousValue, currentValue) => previousValue + currentValue, 0);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map