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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/CDProduct.js":
/*!*************************************!*\
  !*** ./src/components/CDProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopProduct */ "./src/components/ShopProduct.js");


function CDProduct(title, price, playLength) {
  _ShopProduct__WEBPACK_IMPORTED_MODULE_0__["default"].apply(this, arguments);
  this.playLength = playLength;
}

CDProduct.prototype = Object.create(_ShopProduct__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
CDProduct.prototype.constructor = CDProduct;

CDProduct.prototype.getPlayLength = function () {
  return this.playLength;
};

/* harmony default export */ __webpack_exports__["default"] = (CDProduct);

/***/ }),

/***/ "./src/components/ShopProduct.js":
/*!***************************************!*\
  !*** ./src/components/ShopProduct.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ShopProduct(title, price) {
  this.title = title;
  this.price = price;
}

ShopProduct.prototype.getTitle = function () {
  return this.title;
};

ShopProduct.prototype.setTitle = function (newTitle) {
  this.title = newTitle;
};

ShopProduct.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

ShopProduct.prototype.getPrice = function (newPrice) {
  return this.price;
};

ShopProduct.prototype.getInfo = function () {
  return "Title: ".concat(this.title, " Price: ").concat(this.price);
};

/* harmony default export */ __webpack_exports__["default"] = (ShopProduct);

/***/ }),

/***/ "./src/components/media.js":
/*!*********************************!*\
  !*** ./src/components/media.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Media = /*#__PURE__*/function () {
  function Media(title, duration) {
    _classCallCheck(this, Media);

    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
  }

  _createClass(Media, [{
    key: "play",
    value: function play() {
      this.isPlaying = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isPlaying = false;
    }
  }]);

  return Media;
}();

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "./src/components/movie.js":
/*!*********************************!*\
  !*** ./src/components/movie.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ "./src/components/media.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Movie = /*#__PURE__*/function (_Media) {
  _inherits(Movie, _Media);

  var _super = _createSuper(Movie);

  function Movie(title, year, duration) {
    var _this;

    _classCallCheck(this, Movie);

    _this = _super.call(this, title, duration);
    _this.year = year;
    return _this;
  }

  _createClass(Movie, [{
    key: "toHtml",
    value: function toHtml() {
      return "<div class=\"row py-3 ".concat(this.isPlaying ? 'current' : '', "\">\n    <div class=\"col-sm-9\">").concat(this.title, " - ").concat(this.year, "</div>\n    <div class=\"col-sm-3\">").concat(this.duration, "</div>\n  </div>");
    }
  }]);

  return Movie;
}(_media__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./src/components/playlist.js":
/*!************************************!*\
  !*** ./src/components/playlist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PlayList = /*#__PURE__*/function () {
  function PlayList() {
    _classCallCheck(this, PlayList);

    this.songs = [];
    this.currentIndex = 0;
  }

  _createClass(PlayList, [{
    key: "add",
    value: function add(song) {
      this.songs.push(song);
    }
  }, {
    key: "play",
    value: function play() {
      var currentSong = this.songs[this.currentIndex];
      currentSong.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      var currentSong = this.songs[this.currentIndex];
      currentSong.stop();
    }
  }, {
    key: "next",
    value: function next() {
      this.stop();
      this.currentIndex++;
      if (this.currentIndex === this.songs.length) this.currentIndex = 0;
      var currentSong = this.songs[this.currentIndex];
      currentSong.play();
    }
  }, {
    key: "render",
    value: function render(list) {
      list.innerHTML = '';
      var songsList = '';
      this.songs.forEach(function (song) {
        return songsList += song.toHtml();
      });
      list.innerHTML = songsList;
    }
  }]);

  return PlayList;
}();

/* harmony default export */ __webpack_exports__["default"] = (PlayList);

/***/ }),

/***/ "./src/components/song.js":
/*!********************************!*\
  !*** ./src/components/song.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ "./src/components/media.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Song = /*#__PURE__*/function (_Media) {
  _inherits(Song, _Media);

  var _super = _createSuper(Song);

  function Song(title, artist, duration) {
    var _this;

    _classCallCheck(this, Song);

    _this = _super.call(this, title, duration);
    _this.artist = artist;
    return _this;
  }

  _createClass(Song, [{
    key: "toHtml",
    value: function toHtml() {
      return "<div class=\"row py-3 ".concat(this.isPlaying ? 'current' : '', "\">\n    <div class=\"col-sm-9\">").concat(this.title, " - ").concat(this.artist, "</div>\n    <div class=\"col-sm-3\">").concat(this.duration, "</div>\n  </div>");
    }
  }]);

  return Song;
}(_media__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Song);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/song */ "./src/components/song.js");
/* harmony import */ var _components_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/movie */ "./src/components/movie.js");
/* harmony import */ var _components_playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/playlist */ "./src/components/playlist.js");
/* harmony import */ var _components_CDProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CDProduct */ "./src/components/CDProduct.js");
console.log("Hello from Play List");





var playList = new _components_playlist__WEBPACK_IMPORTED_MODULE_2__["default"]();
var s1 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('TEST', 'Tom', '03:12');
var s2 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('TEST 1', 'Bill', '05:22');
var m1 = new _components_movie__WEBPACK_IMPORTED_MODULE_1__["default"]('Shrek', '2000', '93:54');
var cd = new _components_CDProduct__WEBPACK_IMPORTED_MODULE_3__["default"]('Bob Marley', 34, 88);
var book = new _components_CDProduct__WEBPACK_IMPORTED_MODULE_3__["default"]('Harry Potter and JavaScript`s secrets', 32, 549);
console.log(cd);
console.log(cd.getTitle());
console.log(cd.setTitle('Aguzarova'));
console.log(cd.getTitle());
console.log(cd.getPlayLength());
console.log(book);
console.log(book.getPrice());
console.log(book.setPrice(50));
console.log(book.getPrice());
console.log(book.getNumPages());
playList.add(s1);
playList.add(s2);
playList.add(m1);
var list = document.getElementById('list');
playList.render(list);
var play = document.getElementById('btn-play');
var stop = document.getElementById('btn-stop');
var next = document.getElementById('btn-next');

play.onclick = function () {
  playList.play();
  playList.render(list);
};

stop.onclick = function () {
  playList.stop();
  playList.render(list);
};

next.onclick = function () {
  playList.next();
  playList.render(list);
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/scss/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ0RQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Nob3BQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21lZGlhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vdmllLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BsYXlsaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NvbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiQ0RQcm9kdWN0IiwidGl0bGUiLCJwcmljZSIsInBsYXlMZW5ndGgiLCJTaG9wUHJvZHVjdCIsImFwcGx5IiwiYXJndW1lbnRzIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJnZXRQbGF5TGVuZ3RoIiwiZ2V0VGl0bGUiLCJzZXRUaXRsZSIsIm5ld1RpdGxlIiwic2V0UHJpY2UiLCJuZXdQcmljZSIsImdldFByaWNlIiwiZ2V0SW5mbyIsIk1lZGlhIiwiZHVyYXRpb24iLCJpc1BsYXlpbmciLCJNb3ZpZSIsInllYXIiLCJQbGF5TGlzdCIsInNvbmdzIiwiY3VycmVudEluZGV4Iiwic29uZyIsInB1c2giLCJjdXJyZW50U29uZyIsInBsYXkiLCJzdG9wIiwibGVuZ3RoIiwibGlzdCIsImlubmVySFRNTCIsInNvbmdzTGlzdCIsImZvckVhY2giLCJ0b0h0bWwiLCJTb25nIiwiYXJ0aXN0IiwiY29uc29sZSIsImxvZyIsInBsYXlMaXN0IiwiczEiLCJzMiIsIm0xIiwiY2QiLCJib29rIiwiQm9va1Byb2R1Y3QiLCJnZXROdW1QYWdlcyIsImFkZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJy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R0FBR29CLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFiO0FBQ0EsSUFBTUUsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBYjs7QUFFQXRCLElBQUksQ0FBQ3lCLE9BQUwsR0FBZSxZQUFVO0FBQ3ZCYixVQUFRLENBQUNaLElBQVQ7QUFDQVksVUFBUSxDQUFDVyxNQUFULENBQWdCcEIsSUFBaEI7QUFDRCxDQUhEOztBQUtBRixJQUFJLENBQUN3QixPQUFMLEdBQWUsWUFBVTtBQUN2QmIsVUFBUSxDQUFDWCxJQUFUO0FBQ0FXLFVBQVEsQ0FBQ1csTUFBVCxDQUFnQnBCLElBQWhCO0FBQ0QsQ0FIRDs7QUFLQXFCLElBQUksQ0FBQ0MsT0FBTCxHQUFlLFlBQVU7QUFDdkJiLFVBQVEsQ0FBQ1ksSUFBVDtBQUNBWixVQUFRLENBQUNXLE1BQVQsQ0FBZ0JwQixJQUFoQjtBQUNELENBSEQsQzs7Ozs7Ozs7Ozs7QUMvQ0EsdUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFNob3BQcm9kdWN0IGZyb20gJy4vU2hvcFByb2R1Y3QnO1xuXG5mdW5jdGlvbiBDRFByb2R1Y3QgKHRpdGxlLCBwcmljZSwgcGxheUxlbmd0aCkge1xuICBTaG9wUHJvZHVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB0aGlzLnBsYXlMZW5ndGggPSBwbGF5TGVuZ3RoO1xufVxuXG5DRFByb2R1Y3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTaG9wUHJvZHVjdC5wcm90b3R5cGUpO1xuQ0RQcm9kdWN0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENEUHJvZHVjdDtcblxuQ0RQcm9kdWN0LnByb3RvdHlwZS5nZXRQbGF5TGVuZ3RoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBsYXlMZW5ndGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENEUHJvZHVjdDsiLCJmdW5jdGlvbiBTaG9wUHJvZHVjdCAodGl0bGUsIHByaWNlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5wcmljZSA9IHByaWNlO1xufVxuXG5TaG9wUHJvZHVjdC5wcm90b3R5cGUuZ2V0VGl0bGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudGl0bGU7XG59XG5cblNob3BQcm9kdWN0LnByb3RvdHlwZS5zZXRUaXRsZSA9IGZ1bmN0aW9uKG5ld1RpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbn1cblxuU2hvcFByb2R1Y3QucHJvdG90eXBlLnNldFByaWNlID0gZnVuY3Rpb24obmV3UHJpY2UpIHtcbiAgdGhpcy5wcmljZSA9IG5ld1ByaWNlO1xufVxuXG5TaG9wUHJvZHVjdC5wcm90b3R5cGUuZ2V0UHJpY2UgPSBmdW5jdGlvbihuZXdQcmljZSkge1xuICByZXR1cm4gdGhpcy5wcmljZTtcbn1cblxuU2hvcFByb2R1Y3QucHJvdG90eXBlLmdldEluZm8gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGBUaXRsZTogJHt0aGlzLnRpdGxlfSBQcmljZTogJHt0aGlzLnByaWNlfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BQcm9kdWN0OyIsImNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1cmF0aW9uKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICB9IFxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICB9XG4gIFxuICBzdG9wKCkge1xuICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWE7IiwiaW1wb3J0IE1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5cbmNsYXNzIE1vdmllIGV4dGVuZHMgTWVkaWEge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgeWVhciwgZHVyYXRpb24pIHtcbiAgICBzdXBlcih0aXRsZSwgZHVyYXRpb24pO1xuICAgIHRoaXMueWVhciA9IHllYXI7XG4gIH1cbiAgXG4gIHRvSHRtbCgpIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJyb3cgcHktMyAke3RoaXMuaXNQbGF5aW5nID8gJ2N1cnJlbnQnOiAnJ31cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj4ke3RoaXMudGl0bGV9IC0gJHt0aGlzLnllYXJ9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+JHt0aGlzLmR1cmF0aW9ufTwvZGl2PlxuICA8L2Rpdj5gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWU7IiwiY2xhc3MgUGxheUxpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNvbmdzID0gW107XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICB9XG5cbiAgYWRkKHNvbmcpIHtcbiAgICB0aGlzLnNvbmdzLnB1c2goc29uZyk7XG4gIH1cbiAgXG4gIHBsYXkoKSB7XG4gICAgY29uc3QgY3VycmVudFNvbmcgPSB0aGlzLnNvbmdzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgICBjdXJyZW50U29uZy5wbGF5KCk7XG4gIH1cbiAgXG4gIHN0b3AoKSB7XG4gICAgY29uc3QgY3VycmVudFNvbmcgPSB0aGlzLnNvbmdzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgICBjdXJyZW50U29uZy5zdG9wKCk7XG4gIH1cbiAgXG4gIG5leHQoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICBpZih0aGlzLmN1cnJlbnRJbmRleCA9PT0gdGhpcy5zb25ncy5sZW5ndGgpIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICBjb25zdCBjdXJyZW50U29uZyA9IHRoaXMuc29uZ3NbdGhpcy5jdXJyZW50SW5kZXhdO1xuICAgIGN1cnJlbnRTb25nLnBsYXkoKTtcbiAgfVxuICBcbiAgcmVuZGVyKGxpc3QpIHtcbiAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIGxldCBzb25nc0xpc3QgPSAnJzsgXG4gICAgdGhpcy5zb25ncy5mb3JFYWNoKHNvbmcgPT4gc29uZ3NMaXN0ICs9IHNvbmcudG9IdG1sKCkpO1xuICAgIGxpc3QuaW5uZXJIVE1MID0gc29uZ3NMaXN0O1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGxheUxpc3Q7IiwiaW1wb3J0IE1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5cbmNsYXNzIFNvbmcgZXh0ZW5kcyBNZWRpYSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBhcnRpc3QsIGR1cmF0aW9uKSB7XG4gICAgc3VwZXIodGl0bGUsIGR1cmF0aW9uKTtcbiAgICB0aGlzLmFydGlzdCA9IGFydGlzdDtcbiAgfVxuICBcbiAgdG9IdG1sKCkge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInJvdyBweS0zICR7dGhpcy5pc1BsYXlpbmcgPyAnY3VycmVudCc6ICcnfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPiR7dGhpcy50aXRsZX0gLSAke3RoaXMuYXJ0aXN0fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPiR7dGhpcy5kdXJhdGlvbn08L2Rpdj5cbiAgPC9kaXY+YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvbmc7IiwiY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIFBsYXkgTGlzdFwiKTtcblxuaW1wb3J0IFNvbmcgZnJvbSBcIi4vY29tcG9uZW50cy9zb25nXCI7XG5pbXBvcnQgTW92aWUgZnJvbSBcIi4vY29tcG9uZW50cy9tb3ZpZVwiO1xuaW1wb3J0IFBsYXlMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvcGxheWxpc3RcIjtcbmltcG9ydCBDRFByb2R1Y3QgZnJvbSBcIi4vY29tcG9uZW50cy9DRFByb2R1Y3RcIjtcbmltcG9ydCBCb29rUHJvZHVjdCBmcm9tIFwiLi9jb21wb25lbnRzL0NEUHJvZHVjdFwiO1xuXG5jb25zdCBwbGF5TGlzdCA9IG5ldyBQbGF5TGlzdCgpO1xuY29uc3QgczEgPSBuZXcgU29uZygnVEVTVCcsICdUb20nLCAnMDM6MTInKVxuY29uc3QgczIgPSBuZXcgU29uZygnVEVTVCAxJywgJ0JpbGwnLCAnMDU6MjInKVxuY29uc3QgbTEgPSBuZXcgTW92aWUoJ1NocmVrJywgJzIwMDAnLCAnOTM6NTQnKTtcbmNvbnN0IGNkID0gbmV3IENEUHJvZHVjdCgnQm9iIE1hcmxleScsIDM0LCA4OCk7XG5jb25zdCBib29rID0gbmV3IEJvb2tQcm9kdWN0KCdIYXJyeSBQb3R0ZXIgYW5kIEphdmFTY3JpcHRgcyBzZWNyZXRzJywgMzIsIDU0OSk7XG5jb25zb2xlLmxvZyhjZCk7XG5jb25zb2xlLmxvZyhjZC5nZXRUaXRsZSgpKTtcbmNvbnNvbGUubG9nKGNkLnNldFRpdGxlKCdBZ3V6YXJvdmEnKSk7XG5jb25zb2xlLmxvZyhjZC5nZXRUaXRsZSgpKTtcbmNvbnNvbGUubG9nKGNkLmdldFBsYXlMZW5ndGgoKSk7XG5cbmNvbnNvbGUubG9nKGJvb2spO1xuY29uc29sZS5sb2coYm9vay5nZXRQcmljZSgpKTtcbmNvbnNvbGUubG9nKGJvb2suc2V0UHJpY2UoNTApKTtcbmNvbnNvbGUubG9nKGJvb2suZ2V0UHJpY2UoKSk7XG5jb25zb2xlLmxvZyhib29rLmdldE51bVBhZ2VzKCkpO1xuXG5wbGF5TGlzdC5hZGQoczEpXG5wbGF5TGlzdC5hZGQoczIpXG5wbGF5TGlzdC5hZGQobTEpXG5cbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpXG5wbGF5TGlzdC5yZW5kZXIobGlzdClcblxuY29uc3QgcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcGxheScpXG5jb25zdCBzdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zdG9wJylcbmNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW5leHQnKVxuXG5wbGF5Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICBwbGF5TGlzdC5wbGF5KCk7XG4gIHBsYXlMaXN0LnJlbmRlcihsaXN0KVxufVxuXG5zdG9wLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICBwbGF5TGlzdC5zdG9wKCk7XG4gIHBsYXlMaXN0LnJlbmRlcihsaXN0KVxufVxuXG5uZXh0Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICBwbGF5TGlzdC5uZXh0KCk7XG4gIHBsYXlMaXN0LnJlbmRlcihsaXN0KVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=