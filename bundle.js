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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ScoresStorage.ts":
/*!**************************!*\
  !*** ./ScoresStorage.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ScoresStorage = /** @class */ (function () {\n    function ScoresStorage(initData, storageName) {\n        this.scores = [];\n        this.initData = initData;\n        this.storageName = storageName;\n        this.changeIndex = null;\n        this.storageData = null;\n        this.setInitData();\n    }\n    ScoresStorage.prototype.setInitData = function () {\n        this.changeIndex = null;\n        var localScores = localStorage.getItem(this.storageName);\n        if (localScores !== null) {\n            this.storageData = JSON.parse(localScores);\n        }\n        if (this.storageData === null) {\n            this.scores = this.initData;\n        }\n        else {\n            this.scores = this.storageData;\n        }\n    };\n    ScoresStorage.prototype.setScore = function (score) {\n        var _this = this;\n        this.changeIndex = null;\n        this.scores.some(function (value, index) {\n            if (value < score) {\n                _this.scores.splice(index, 0, score);\n                _this.scores.pop();\n                _this.changeIndex = index;\n                return true;\n            }\n            else {\n                return false;\n            }\n        });\n        localStorage.setItem(this.storageName, JSON.stringify(this.scores));\n    };\n    ScoresStorage.prototype.getChangeIndex = function () {\n        return this.changeIndex;\n    };\n    ScoresStorage.prototype.getScores = function () {\n        return this.scores;\n    };\n    ScoresStorage.prototype.clearScores = function () {\n        localStorage.clear();\n        this.setInitData();\n    };\n    return ScoresStorage;\n}());\nexports.default = ScoresStorage;\n\n\n//# sourceURL=webpack:///./ScoresStorage.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ScoresStorage_1 = __importDefault(__webpack_require__(/*! ./ScoresStorage */ \"./ScoresStorage.ts\"));\ndocument.addEventListener('DOMContentLoaded', function () {\n    var INIT_DATA = [11, 8, 5, 3, 0];\n    var STRAGE_NAME = 'scores';\n    var scoresStorage = new ScoresStorage_1.default(INIT_DATA, STRAGE_NAME);\n    var inputScoreInput = document.getElementById(\"inputScore\");\n    var setScoreButton = document.getElementById('setScore');\n    var clearScoreButton = document.getElementById('clearScore');\n    setScoreButton.addEventListener('click', function () {\n        scoresStorage.setScore(Number(inputScoreInput.value));\n        refreshDisplay(scoresStorage, scoresStorage.getChangeIndex());\n    });\n    clearScoreButton.addEventListener('click', function () {\n        scoresStorage.clearScores();\n        scoresStorage.getScores().forEach(function (value, index) {\n            document.getElementById(\"scoreValue\" + index).innerHTML = String(value);\n        });\n        initialize(scoresStorage.getScores());\n    });\n    initialize(scoresStorage.getScores());\n});\nfunction refreshDisplay(scoresStorage, changeIndex) {\n    if (changeIndex !== null) {\n        document.querySelectorAll('li').forEach(function (element) {\n            element.classList.remove('changeText');\n        });\n        document.getElementById(\"score\" + changeIndex).classList.add('changeText');\n        scoresStorage.getScores().forEach(function (value, index) {\n            document.getElementById(\"scoreValue\" + index).innerHTML = String(value);\n        });\n    }\n}\nfunction initialize(scoreValues) {\n    var scores = document.getElementById('scores');\n    scores.innerHTML = '';\n    scoreValues.forEach(function (value, index) {\n        scores.innerHTML += \"\\n      <li class=\\\"score\\\" id=\\\"score\" + index + \"\\\">\\n        \" + (index + 1) + \"\\u4F4D\\uFF1A\\n        <span id=\\\"scoreValue\" + index + \"\\\">\" + value + \"</span>\\n        \\u70B9\\n      </li>\\n    \";\n    });\n}\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ });