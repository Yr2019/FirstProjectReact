"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employersNames = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = employers.filter(function (employers) {
  return employers.length > 0;
});
exports.employersNames = employersNames;
exports.employersNames = employersNames = employersNames.map(function (item) {
  return item.toLowerCase().trim();
});