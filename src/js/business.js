"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _sponsors = require("./sponsors");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        ow = _ref.owner,
        di = _ref.director,
        ca = _ref.cash,
        em = _ref.emp;

    _classCallCheck(this, MakeBusiness);

    this.ow = ow;
    this.di = di;
    this.ca = ca;
    this.em = em;
    if (typeof this.di === 'undefined') this.di = "Victor";
  }

  _createClass(MakeBusiness, [{
    key: "businessInfo",
    value: function businessInfo() {
      var _console;

      var sumSponsors = [].concat(_toConsumableArray(_sponsors.eu), _toConsumableArray(_sponsors.rus), ['unexpected sponsor']);
      console.log("We have a business. Owner: ".concat(this.ow, ", director: ").concat(this.di, ". Our budget: ").concat(this.ca, ". And our employers: ").concat(this.em));
      console.log('And we have a sponsors: ');

      (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

      console.log("Note. Be careful with ".concat(_sponsors.firstName, ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

var _default = MakeBusiness;
exports.default = _default;