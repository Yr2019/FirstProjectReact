"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/js/employers.js":
  /*!*****************************!*\
    !*** ./src/js/employers.js ***!
    \*****************************/

  /*! exports provided: employersNames */

  /***/
  function srcJsEmployersJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "employersNames", function () {
      return employersNames;
    });

    var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
    var employersNames = employers.filter(function (employers) {
      return employers.length > 0;
    });
    employersNames = employersNames.map(function (item) {
      return item.toLowerCase().trim();
    });
    /***/
  },

  /***/
  "./src/js/index.js":
  /*!*************************!*\
    !*** ./src/js/index.js ***!
    \*************************/

  /*! exports provided: default */

  /***/
  function srcJsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _sponsors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./sponsors */
    "./src/js/sponsors.js");
    /* harmony import */


    var _employers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./employers */
    "./src/js/employers.js");

    var MakeBusiness =
    /*#__PURE__*/
    function () {
      function MakeBusiness() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            ow = _ref.owner,
            _ref$director = _ref.director,
            di = _ref$director === void 0 ? 'Victor' : _ref$director,
            ca = _ref.cash,
            em = _ref.emp;

        _classCallCheck(this, MakeBusiness);

        this.ow = ow;
        this.di = di;
        this.ca = ca;
        this.em = em;
      }

      _createClass(MakeBusiness, [{
        key: "businessInfo",
        value: function businessInfo() {
          var _console;

          var sumSponsors = [].concat(_toConsumableArray(_sponsors__WEBPACK_IMPORTED_MODULE_0__["eu"]), _toConsumableArray(_sponsors__WEBPACK_IMPORTED_MODULE_0__["rus"]), ['unexpected sponsor']);
          console.log("We have a business. Owner: ".concat(this.ow, ", director: ").concat(this.di, ". Our budget: ").concat(this.ca, ". And our employers: ").concat(this.em));
          console.log('And we have a sponsors: ');

          (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

          console.log("Note. Be careful with ".concat(_sponsors__WEBPACK_IMPORTED_MODULE_0__["firstName"], ". It's a huge risk."));
        }
      }]);

      return MakeBusiness;
    }();

    var makeBusiness = new MakeBusiness({
      owner: 'Sam',
      cash: _sponsors__WEBPACK_IMPORTED_MODULE_0__["money"],
      emp: _employers__WEBPACK_IMPORTED_MODULE_1__["employersNames"]
    });
    makeBusiness.businessInfo();
    /* harmony default export */

    __webpack_exports__["default"] = MakeBusiness;
    /***/
  },

  /***/
  "./src/js/sponsors.js":
  /*!****************************!*\
    !*** ./src/js/sponsors.js ***!
    \****************************/

  /*! exports provided: eu, rus, money, firstName */

  /***/
  function srcJsSponsorsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "eu", function () {
      return eu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rus", function () {
      return rus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "money", function () {
      return money;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firstName", function () {
      return firstName;
    });

    var sponsors = {
      cash: [40000, 5000, 30400, 12000],
      eu: ['SRL', 'PLO', 'J&K'],
      rus: ['RusAuto', 'SBO']
    };

    var eu = sponsors.eu,
        _sponsors$eu = _slicedToArray(sponsors.eu, 3),
        firstName = _sponsors$eu[0],
        secondName = _sponsors$eu[1],
        thirdName = _sponsors$eu[2],
        rus = sponsors.rus;

    var money = sponsors.cash.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
    /***/
  }
  /******/

});