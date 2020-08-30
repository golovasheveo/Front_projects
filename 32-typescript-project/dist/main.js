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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Line.ts":
/*!*********************!*\
  !*** ./src/Line.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Point_1 = __webpack_require__(/*! ./Point */ \"./src/Point.ts\");\r\nvar Line = /** @class */ (function (_super) {\r\n    __extends(Line, _super);\r\n    function Line(x, y, length) {\r\n        var _this = _super.call(this, x, y) || this;\r\n        _this.length = length;\r\n        return _this;\r\n    }\r\n    Line.prototype.draw = function () {\r\n        console.log(\"point (x: \" + this.x + \", y: \" + this.y + \", length: \" + this.length);\r\n    };\r\n    return Line;\r\n}(Point_1.default));\r\nexports.default = Line;\r\n\n\n//# sourceURL=webpack:///./src/Line.ts?");

/***/ }),

/***/ "./src/Point.ts":
/*!**********************!*\
  !*** ./src/Point.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Point = /** @class */ (function () {\r\n    function Point(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    return Point;\r\n}());\r\nexports.default = Point;\r\n\n\n//# sourceURL=webpack:///./src/Point.ts?");

/***/ }),

/***/ "./src/Rectangle.ts":
/*!**************************!*\
  !*** ./src/Rectangle.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Line_1 = __webpack_require__(/*! ./Line */ \"./src/Line.ts\");\r\nvar Rectangle = /** @class */ (function (_super) {\r\n    __extends(Rectangle, _super);\r\n    function Rectangle(x, y, width, height) {\r\n        var _this = _super.call(this, x, y, width) || this;\r\n        _this.height = height;\r\n        return _this;\r\n    }\r\n    Rectangle.prototype.drow = function () {\r\n        console.log(\"point (x: \" + this.x + \", y: \" + this.y + \", width: \" + this.length + \", height: \" + this.height);\r\n    };\r\n    return Rectangle;\r\n}(Line_1.default));\r\nexports.default = Rectangle;\r\n{\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Rectangle.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// // import {Person} from \"./Person\";\r\n// // import {Color} from \"./Color\";\r\n// //\r\n// // let message:string = \"10\";\r\n// // message = true.toString();\r\n// // let ar = new Array<string>();\r\n// // ar.push('10')\r\n// // let fl: boolean;\r\n// // //fl = new Boolean(false); error\r\n// // fl = false;\r\n// // let un1:unknown;\r\n// // un1 = 4;\r\n// // un1 = \"bc\";\r\n// // un1 = message;\r\n// // (un1 as string).substr(3);\r\n// // let an1: any = {};\r\n// // //un1.abc = 10;\r\n// // an1.abc = 10;\r\n// // console.log(an1)\r\n// // an1 = \"hello\";\r\n// // let arr: string[];\r\n// // let arrr:Array<string[]> = [] ;\r\n// // let ar4: any[] = [];\r\n// // arrr.push([\"10\"]);\r\n// // ar4.push([10]);\r\n// // let tuple1: [string, number];\r\n// // tuple1 = ['1', 2]\r\n// // let [a, b] = tuple1;\r\n// // a = '10';\r\n// // console.log(b);\r\n// //\r\n// // let color:string;\r\n// // color = Color[0];\r\n// // console.log(color);\r\n// //\r\n// // let person: Person;\r\n// // person = new Person(123, 'Moshe');\r\n// // let persons: Person[] = [];\r\n// // persons.push(new Person(100, \"Sara\"));\r\n// // persons[0].color = Color.GREEN\r\n// // persons[0].display();\r\n// // // console.log(person);\r\n// // // person.display()\r\n// // let abc: string|number;\r\n// // abc = 10;\r\n// // abc = '10';\r\n// // //abc = null;\r\n// // let abcStr = new String(\"abc\");\r\n// // person.display();\r\n//\r\n// // interface searchFunction  {\r\n// //     (a: number) : number;\r\n// // }\r\n//\r\n// interface searchFunction  {\r\n//     (a?: number) : number;\r\n// }\r\n//\r\n// // type searchFunction = (a: number) => number;\r\n//\r\n// let fun1: searchFunction =  (a = 10) => 10;\r\n//\r\n// console.log(fun1());\r\n//\r\n// fun1 = (a: number) => a*10;\r\n// let ar100 = [1,2,3]\r\n// let ar200: ReadonlyArray<number> = ar100;\r\n//\r\n//\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Line_1 = __webpack_require__(/*! ./Line */ \"./src/Line.ts\");\r\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/Rectangle.ts\");\r\nvar shapes = [\r\n    new Line_1.default(3, 4, 20),\r\n    new Line_1.default(10, 20, 40),\r\n    new Rectangle_1.default(3, 4, 30, 50)\r\n];\r\nshapes.forEach(function (s) { return s.draw(); });\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });