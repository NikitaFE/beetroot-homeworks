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

/***/ "./src/components/media.js":
/*!*********************************!*\
  !*** ./src/components/media.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media__WEBPACK_IMPORTED_MODULE_0__);
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

  function Song(title, duration, artist) {
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
}(_media__WEBPACK_IMPORTED_MODULE_0___default.a);

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
/* harmony import */ var _components_playlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/playlist */ "./src/components/playlist.js");
console.log("Hello from Play List");


var playList = new _components_playlist__WEBPACK_IMPORTED_MODULE_1__["default"]();
var s1 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('TEST', 'Tom', '03:12');
var s2 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('TEST 1', 'Bill', '05:22');
playList.add(s1);
playList.add(s2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxheWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc29uZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJNZWRpYSIsInRpdGxlIiwiZHVyYXRpb24iLCJpc1BsYXlpbmciLCJQbGF5TGlzdCIsInNvbmdzIiwiY3VycmVudEluZGV4Iiwic29uZyIsInB1c2giLCJjdXJyZW50U29uZyIsInBsYXkiLCJzdG9wIiwibGVuZ3RoIiwibGlzdCIsImlubmVySFRNTCIsInNvbmdzTGlzdCIsImZvckVhY2giLCJ0b0h0bWwiLCJTb25nIiwiYXJ0aXN0IiwiY29uc29sZSIsImxvZyIsInBsYXlMaXN0IiwiczEiLCJzMiIsImFkZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJuZXh0Iiwib25jbGljayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFD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R0FBVCxDQUFhRCxFQUFiO0FBRUEsSUFBTVgsSUFBSSxHQUFHYSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBTCxRQUFRLENBQUNNLE1BQVQsQ0FBZ0JmLElBQWhCO0FBRUEsSUFBTUgsSUFBSSxHQUFHZ0IsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWI7QUFDQSxJQUFNaEIsSUFBSSxHQUFHZSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBYjtBQUNBLElBQU1FLElBQUksR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWI7O0FBRUFqQixJQUFJLENBQUNvQixPQUFMLEdBQWUsWUFBVTtBQUN2QlIsVUFBUSxDQUFDWixJQUFUO0FBQ0FZLFVBQVEsQ0FBQ00sTUFBVCxDQUFnQmYsSUFBaEI7QUFDRCxDQUhEOztBQUtBRixJQUFJLENBQUNtQixPQUFMLEdBQWUsWUFBVTtBQUN2QlIsVUFBUSxDQUFDWCxJQUFUO0FBQ0FXLFVBQVEsQ0FBQ00sTUFBVCxDQUFnQmYsSUFBaEI7QUFDRCxDQUhEOztBQUtBZ0IsSUFBSSxDQUFDQyxPQUFMLEdBQWUsWUFBVTtBQUN2QlIsVUFBUSxDQUFDTyxJQUFUO0FBQ0FQLFVBQVEsQ0FBQ00sTUFBVCxDQUFnQmYsSUFBaEI7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7O0FDN0JBLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1cmF0aW9uKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICB9IFxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICB9XG4gIFxuICBzdG9wKCkge1xuICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gIH1cbn0iLCJjbGFzcyBQbGF5TGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc29uZ3MgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gIH1cblxuICBhZGQoc29uZykge1xuICAgIHRoaXMuc29uZ3MucHVzaChzb25nKTtcbiAgfVxuICBcbiAgcGxheSgpIHtcbiAgICBjb25zdCBjdXJyZW50U29uZyA9IHRoaXMuc29uZ3NbdGhpcy5jdXJyZW50SW5kZXhdO1xuICAgIGN1cnJlbnRTb25nLnBsYXkoKTtcbiAgfVxuICBcbiAgc3RvcCgpIHtcbiAgICBjb25zdCBjdXJyZW50U29uZyA9IHRoaXMuc29uZ3NbdGhpcy5jdXJyZW50SW5kZXhdO1xuICAgIGN1cnJlbnRTb25nLnN0b3AoKTtcbiAgfVxuICBcbiAgbmV4dCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgIGlmKHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLnNvbmdzLmxlbmd0aCkgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgIGNvbnN0IGN1cnJlbnRTb25nID0gdGhpcy5zb25nc1t0aGlzLmN1cnJlbnRJbmRleF07XG4gICAgY3VycmVudFNvbmcucGxheSgpO1xuICB9XG4gIFxuICByZW5kZXIobGlzdCkge1xuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgbGV0IHNvbmdzTGlzdCA9ICcnOyBcbiAgICB0aGlzLnNvbmdzLmZvckVhY2goc29uZyA9PiBzb25nc0xpc3QgKz0gc29uZy50b0h0bWwoKSk7XG4gICAgbGlzdC5pbm5lckhUTUwgPSBzb25nc0xpc3Q7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQbGF5TGlzdDsiLCJpbXBvcnQgTWVkaWEgZnJvbSBcIi4vbWVkaWFcIjtcblxuY2xhc3MgU29uZyBleHRlbmRzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1cmF0aW9uLCBhcnRpc3QpIHtcbiAgICBzdXBlcih0aXRsZSwgZHVyYXRpb24pO1xuICAgIHRoaXMuYXJ0aXN0ID0gYXJ0aXN0O1xuICB9XG4gIFxuICB0b0h0bWwoKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicm93IHB5LTMgJHt0aGlzLmlzUGxheWluZyA/ICdjdXJyZW50JzogJyd9XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+JHt0aGlzLnRpdGxlfSAtICR7dGhpcy5hcnRpc3R9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+JHt0aGlzLmR1cmF0aW9ufTwvZGl2PlxuICA8L2Rpdj5gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU29uZzsiLCJjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gUGxheSBMaXN0XCIpO1xuXG5pbXBvcnQgU29uZyBmcm9tIFwiLi9jb21wb25lbnRzL3NvbmdcIjtcbmltcG9ydCBQbGF5TGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL3BsYXlsaXN0XCI7XG5cbmNvbnN0IHBsYXlMaXN0ID0gbmV3IFBsYXlMaXN0KCk7XG5jb25zdCBzMSA9IG5ldyBTb25nKCdURVNUJywgJ1RvbScsICcwMzoxMicpXG5jb25zdCBzMiA9IG5ldyBTb25nKCdURVNUIDEnLCAnQmlsbCcsICcwNToyMicpXG5cbnBsYXlMaXN0LmFkZChzMSlcbnBsYXlMaXN0LmFkZChzMilcblxuY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0JylcbnBsYXlMaXN0LnJlbmRlcihsaXN0KVxuXG5jb25zdCBwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1wbGF5JylcbmNvbnN0IHN0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXN0b3AnKVxuY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbmV4dCcpXG5cbnBsYXkub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gIHBsYXlMaXN0LnBsYXkoKTtcbiAgcGxheUxpc3QucmVuZGVyKGxpc3QpXG59XG5cbnN0b3Aub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gIHBsYXlMaXN0LnN0b3AoKTtcbiAgcGxheUxpc3QucmVuZGVyKGxpc3QpXG59XG5cbm5leHQub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gIHBsYXlMaXN0Lm5leHQoKTtcbiAgcGxheUxpc3QucmVuZGVyKGxpc3QpXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==