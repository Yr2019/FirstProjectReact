"use strict";

var _employers = require("./employers");

var _sponsors = require("./sponsors");

var _business = _interopRequireDefault(require("./business"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {button as btn, Slider as sl } from './script';   // Импорт с перейменованием
// import * as total from './script';  // в переменной total будет все из script 
//import React, {Component} from 'react';
var makeBusiness = new _business.default({
  owner: 'Sam',
  cash: _sponsors.money,
  emp: _employers.employersNames
});
makeBusiness.businessInfo();