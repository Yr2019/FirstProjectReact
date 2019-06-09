// import {button as btn, Slider as sl } from './script';   // Импорт с перейменованием
// import * as total from './script';  // в переменной total будет все из script 
//import React, {Component} from 'react';


import {employersNames} from './employers';
import {eu, rus, money} from './sponsors';
import MakeBusiness from './business';


const makeBusiness = new MakeBusiness({owner:'Sam', cash: money, emp: employersNames});
makeBusiness.businessInfo();



