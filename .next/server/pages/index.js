module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.page.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/images/banner_about.png":
/*!****************************************!*\
  !*** ./public/images/banner_about.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner_about-f11d381d8640fadd5c2b6168c9c7f44c.png";

/***/ }),

/***/ "./src/assets/icons/AfyaVector.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/AfyaVector.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAfyaVector(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 555,
    height: 936,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    opacity: 0.5,
    d: "M.447 935.75L575.021.478 1149.55 935.75H999.791L575.234 244.631l-.213-.347-.213.347L150.209 935.75H.447z",
    stroke: "#fff",
    strokeWidth: 0.5
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAfyaVector);

/***/ }),

/***/ "./src/assets/icons/IconSend.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/IconSend.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgIconSend(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 27,
    height: 26,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M10.353 12.954h15.556M25.91 12.955L8.586 21.087a.55.55 0 01-.708-.708l2.475-7.424L7.878 5.53a.55.55 0 01.708-.707l17.324 8.132z",
    stroke: "#fff",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgIconSend);

/***/ }),

/***/ "./src/assets/icons/circle.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/circle.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _mask, _g, _circle, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 30,
    height: 116,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _mask || (_mask = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
    id: "circle_svg__a",
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 69,
    width: 47,
    height: 47
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M46.483 115.825a46.501 46.501 0 01-32.868-13.613A46.478 46.478 0 010 69.348h46.483v46.477z",
    fill: "#fff"
  }))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    filter: "url(#circle_svg__filter0_f)",
    mask: "url(#circle_svg__a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ellipse", {
    cx: 39.071,
    cy: 88.581,
    rx: 28.874,
    ry: 28.878,
    transform: "rotate(-90 39.071 88.581)",
    fill: "#D40054"
  }))), _circle || (_circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    cx: 62.981,
    cy: 52.327,
    r: 52.327,
    transform: "rotate(180 62.98 52.327)",
    fill: "#D40054"
  })), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("filter", {
    id: "circle_svg__filter0_f",
    x: -48.286,
    y: 1.227,
    width: 174.715,
    height: 174.708,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feGaussianBlur", {
    stdDeviation: 29.24,
    result: "effect1_foregroundBlur"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCircle);

/***/ }),

/***/ "./src/assets/icons/circleBotton.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/circleBotton.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _mask, _g, _circle, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCircleBotton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 200,
    height: 200,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _mask || (_mask = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
    id: "circleBotton_svg__a",
    maskUnits: "userSpaceOnUse",
    x: 119,
    y: 0,
    width: 81,
    height: 81
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M119.533 0a80.272 80.272 0 0174.155 49.542 80.239 80.239 0 016.11 30.712h-80.265V0z",
    fill: "#fff"
  }))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    filter: "url(#circleBotton_svg__filter0_f)",
    mask: "url(#circleBotton_svg__a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ellipse", {
    cx: 132.331,
    cy: 47.042,
    rx: 49.859,
    ry: 49.865,
    transform: "rotate(90 132.331 47.042)",
    fill: "#D40054"
  }))), _circle || (_circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    cx: 91.046,
    cy: 109.645,
    r: 90.355,
    fill: "#D40054"
  })), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("filter", {
    id: "circleBotton_svg__filter0_f",
    x: 23.987,
    y: -61.296,
    width: 216.689,
    height: 216.677,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feGaussianBlur", {
    stdDeviation: 29.24,
    result: "effect1_foregroundBlur"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCircleBotton);

/***/ }),

/***/ "./src/assets/logos/cliquefarma.svg":
/*!******************************************!*\
  !*** ./src/assets/logos/cliquefarma.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3, _path4, _path5, _path6, _path7, _path8, _path9;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCliquefarma(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 204,
    height: 52,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M132.251 19.609c0 13.653.143 13.653-.172 13.653h-4.236c0-5.366.172-11.687.172-16.856 3.578 0 5.495.056 10.332.056 0 3.035-.401 3.147-6.096 3.147z",
    fill: "#979797"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M162.788 18.822c-.086-1.685-1.66-2.36-3.291-2.81-4.579 0-5.066-.477-5.066 1.265.343-.421-1.345 1.152-.973 1.348 5.094-1.432 7.327.085 7.327 3.428 0 13.035-.888 11.434 2.489 11.434-.028-4.102-.486-9.103-.486-14.665z",
    fill: "#979797",
    stroke: "#979797",
    strokeMiterlimit: 10
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M144.071 17.445c-3.721 0-4.207-1.432-4.207 1.714 0 3.877-.172 10.45-.086 14.328 2.032.056 2.862.618 2.862-.815 0-2.725.286-9.945.458-12.67.286-.534.572-1.096.858-1.63 4.322-1.685 6.554-.505 6.382 4.186-.086 2.613-.028 8.091-.028 10.704h2.719c0-3.877-.029-10.704.372-14.637-2.92-1.488-5.638-4.944-9.33-1.18z",
    fill: "#979797",
    stroke: "#979797",
    strokeMiterlimit: 10
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M16.427 19.44s-4.378-4.663-7.498-1.798c0 0-3.463 1.264-1.631 6.63 0 0 4.007 7.698 9.13.9h2.919v6.798s-8.042 3.933-13.509 1.067c-5.466-2.865-8.385-11.63-2.919-18.26 0 0 1.088-2.332 4.379-3.596 0 0 6.754-2.163 12.049 1.798v6.265l-2.92.196zM27.933 10.62h-6.926v22.642h6.926V10.619zM37.434 10.62H30.68v5.786h6.754V10.62zM37.434 18.092H30.68v15.142h6.754V18.092zM60.559 16.406v13.625s1.345 5.366 8.042 2.276l.744-1.18h2.318v2.135h5.467V16.406h-6.44v11.827s-2.06 2.388-4.15 0V16.406H60.56zM93.5 26.885s-.83 2.612-2.204 2.612h-2.919s-3.75.366-3.75-4.663h11.248V19.89s-.085-3.034-3.005-3.484h-8.843s-4.007 2.163-4.007 4.748v7.894s.544 4.214 5.009 4.214h11.79v-6.377H93.5zm-6.21-7.08c5.609 0 4.521 3.484 4.521 3.484h-6.496c-2.977 0 1.975-3.484 1.975-3.484zM42.729 16.406c-6.039 6.995-3.005 12.81-.458 15.227 2.547 2.416 8.3.28 8.3.28v6.996h6.954V16.406H42.73zm8.815 12.136h-5.009s-3.92-3.708 0-7.585h5.009v7.585z",
    fill: "#979797"
  })), _path5 || (_path5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M100.512 19.805h-2.69v-3.399h3.176v-2.95s-.372-3.933 2.691-3.933h6.696v3.709h-3.777s-2.977-.478-2.977 1.854v2.022h5.352v2.697h-4.865v13.457h-3.663l.057-13.457z",
    fill: "#979797",
    stroke: "#979797",
    strokeMiterlimit: 10
  })), _path6 || (_path6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M119.544 16.406h-8.157v3.4h9.073v2.387h-5.896c-4.98 0-4.207 2.64-4.207 2.64v5.142c0 2.556 2.604 2.64 2.604 2.64h4.951c0-1.854 2.748-1.46 2.748-1.46v1.46h2.547V19.834c0-4.101-3.663-3.427-3.663-3.427zm-1.717 14.524h-4.608s-.859-.562-.859-2.135v-2.64s0-1.377 3.234-1.377h4.637v3.764c0 .028.543 2.388-2.404 2.388z",
    fill: "#979797",
    stroke: "#979797",
    strokeWidth: 0.75,
    strokeMiterlimit: 10
  })), _path7 || (_path7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M183.337 40.004c11.096 0 20.091-8.83 20.091-19.721 0-10.892-8.995-19.721-20.091-19.721-11.096 0-20.091 8.83-20.091 19.721 0 10.892 8.995 19.721 20.091 19.721z",
    stroke: "#979797",
    strokeWidth: 1.5,
    strokeMiterlimit: 10
  })), _path8 || (_path8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M198.505 38.43l-1.288-3.146s-7.498 4.636-8.586 4.692l1.288 2.107 3.291-1.068 4.837 10.198 3.663-1.601-5.38-10.114 2.175-1.067z",
    fill: "#979797",
    stroke: "#979797",
    strokeMiterlimit: 10
  })), _path9 || (_path9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M186.571 13.765c-2.805-9.074-6.497-9.27-12.421-7.416-5.953 1.882-8.042 6.433-9.387 9.383-.945 2.079 1.946 1.489 1.946 1.489l2.461-.955a1.36 1.36 0 00.858-1.124c.43-5.815 6.669-5.141 6.669-5.141 3.034 0 4.55.843 5.237 1.433.315.28.458.702.43 1.095l-.201 2.192c-.057.702-.658 1.208-1.345 1.208h-.572c-7.441 0-9.76 5.73-10.074 6.545-.029.056-.029.14-.058.197-1.173 5.928.544 11.377 7.327 12.586 6.811 1.236 9.731-7.417 9.731-7.417l.973 1.573c.286.478.887.73 1.459.618.744-.168 1.231-.87 1.059-1.601-.629-2.416-2.032-7.95-4.092-14.665zm-6.926 17.39h-1.431c-1.46-.028-2.175-.281-2.404-.478-1.059-.786-3.692-3.23-1.317-6.208 2.719-3.371 4.923-5.619 8.786-4.888.573.112 1.031.534 1.116 1.067l.745 3.737c.028.196.028.421-.029.618-.315 1.067-1.545 4.607-4.779 5.843-.115.056-.516.309-.687.309z",
    fill: "#979797"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCliquefarma);

/***/ }),

/***/ "./src/assets/logos/iclinic.svg":
/*!**************************************!*\
  !*** ./src/assets/logos/iclinic.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgIclinic(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 129,
    height: 29,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M123.83 12.229c1.772 0 2.997.467 2.997.467.789-.741 1.24-1.998 1.24-3.174 0 0-1.321-.919-4.978-.919-5.446 0-8.007 3.384-8.007 9.716 0 6.331 2.561 9.715 8.007 9.715 3.802 0 5.333-1.096 5.333-1.096-.033-1.208-.5-2.497-1.241-3.174 0 0-1.386.5-3.206.5-3.029 0-4.302-1.708-4.302-5.945 0-4.254 1.096-6.09 4.157-6.09zm-12.712-2.997s-.789-.29-2.239-.29c-1.563 0-2.24.29-2.24.29v18.157s.677.29 2.24.29c1.466 0 2.239-.29 2.239-.29V9.232zm0-7.508s-.789-.29-2.239-.29c-1.563 0-2.24.29-2.24.29v4.092s.677.29 2.24.29c1.466 0 2.239-.29 2.239-.29V1.724zm-9.07 12.277c0-3.206-1.918-5.414-5.59-5.414-1.95 0-3.626.564-4.882 1.708V9.232s-.79-.29-2.24-.29c-1.563 0-2.24.29-2.24.29v18.157s.677.29 2.24.29c1.466 0 2.24-.29 2.24-.29V13.534c.853-.822 1.949-1.322 3.125-1.322 2.03 0 2.852 1.031 2.852 2.562v12.615s.676.29 2.24.29c1.465 0 2.239-.29 2.239-.29V14.001h.016zm-19.64-4.77s-.79-.29-2.24-.29c-1.562 0-2.239.29-2.239.29V27.39s.677.29 2.24.29c1.466 0 2.24-.29 2.24-.29V9.232zm0-7.507s-.79-.29-2.24-.29c-1.562 0-2.239.29-2.239.29v4.092s.677.29 2.24.29c1.466 0 2.24-.29 2.24-.29V1.724zm-9.28-.467s-.79-.29-2.24-.29c-1.562 0-2.239.29-2.239.29v26.132s.677.29 2.24.29c1.466 0 2.24-.29 2.24-.29V1.257zM47.963 14.855c0 8.57 3.737 13.162 10.778 13.162 4.124 0 6.509-1.24 6.509-1.24 0-1.321-.467-2.626-1.353-3.448 0 0-2.095.741-4.657.741-3.77 0-6.508-1.82-6.508-9.183 0-7.363 2.739-9.329 6.508-9.329 2.272 0 4.302.742 4.302.742.822-.887 1.466-1.918 1.353-3.384 0 0-2.207-1.24-6.154-1.24-7.04.016-10.778 4.607-10.778 13.179zM43.87 9.232s-.789-.29-2.239-.29c-1.563 0-2.24.29-2.24.29v18.157s.677.29 2.24.29c1.466 0 2.24-.29 2.24-.29V9.232zm0-7.508s-.789-.29-2.239-.29c-1.563 0-2.24.29-2.24.29v4.092s.677.29 2.24.29c1.466 0 2.24-.29 2.24-.29V1.724z",
    fill: "#979797"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    opacity: 0.5,
    d: "M28.613 19.688H.806A.808.808 0 010 18.882v-8.651c0-.435.354-.806.806-.806h27.807c.435 0 .806.354.806.806v8.651c0 .451-.37.806-.806.806z",
    fill: "#979797"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M20.187 29H11.52a.788.788 0 01-.789-.822c.08-2.416.5-4.72 1.273-6.83.87-2.417 2.159-4.544 3.85-6.316a17.644 17.644 0 016.074-4.173 19.406 19.406 0 016.67-1.402.788.788 0 01.822.79v8.668a.792.792 0 01-.741.789c-2.207.145-4.06.95-5.365 2.336-1.402 1.482-2.191 3.625-2.32 6.203a.81.81 0 01-.806.757zM0 18.882v-8.668c0-.418.322-.757.741-.789 2.223-.161 4.044-1.031 5.43-2.626C7.54 5.236 8.36 3.093 8.507.74A.782.782 0 019.297 0h8.667c.451 0 .805.37.79.822-.178 4.833-1.886 9.328-4.882 12.727a17.702 17.702 0 01-6.026 4.495c-2.175.983-4.527 1.531-7.024 1.644A.811.811 0 010 18.882z",
    fill: "#979797"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgIclinic);

/***/ }),

/***/ "./src/assets/logos/medicalharbor.svg":
/*!********************************************!*\
  !*** ./src/assets/logos/medicalharbor.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMedicalharbor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 220,
    height: 50,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M123.442 39.07h96.016v.46h-96.067c0-.153.051-.306.051-.46zM0 14.607h88.509v.51H.05C0 14.965 0 14.812 0 14.608zM0 39h88.509v.51H.05C0 39.359 0 39.205 0 39zM122.523 14.607h96.935v.51h-96.935v-.51zM8.325 30.235c1.685-3.473 3.115-6.384 4.494-9.295.307-.613.715-.92 1.38-.869.663.052.816.511.867 1.073.358 3.728.715 7.508 1.022 11.236.051.51.204 1.277-.715 1.328-1.073.05-.97-.766-.92-1.38.256-2.86-.714-5.617-.868-8.528-2.349 2.86-3.115 6.588-5.72 9.652-1.583-3.217-3.064-6.281-4.647-9.448-1.022.97-.97 2.043-.97 3.064.05 1.941-.205 3.83-.563 5.72-.102.562-.204 1.022-.868.92-.664-.102-.664-.51-.613-1.073.358-3.677.664-7.354.97-11.031.052-.664-.101-1.38.869-1.532.868-.103 1.226.306 1.532.97.817 1.736 1.788 3.37 2.452 5.21.561 1.276 1.43 2.45 2.298 3.983zM134.269 26.966v5.312c0 .613.256 1.481-.868 1.43-.868-.051-.766-.715-.817-1.277v-.255c-.255-1.532.868-3.677-.562-4.495-1.685-.97-3.983-.255-6.026-.306-1.226-.051-1.277.817-1.277 1.736v3.78c0 .46-.153.817-.715.868-.664.051-.868-.306-.868-.92V21.247c0-.561.153-1.021.817-1.021.664.05.664.613.766 1.072.255 1.43-.817 3.371.511 4.29 1.327.92 3.319.103 4.954.307 2.094.255 2.349-.817 2.4-2.503.051-1.072-.868-3.115.868-3.064 1.532.051.562 2.043.715 3.166.205 1.073.102 2.248.102 3.473zM205.618 26.047c-.205 2.298.715 4.954-1.89 6.946-2.911 2.247-8.631.613-9.397-2.962-.613-2.912-.154-5.874-.256-8.785 0-.51.051-1.072.715-1.123.817-.052.971.51.971 1.174 0 2.35-.051 4.699.051 7.048.102 3.014 1.583 4.546 4.392 4.29 2.4-.204 4.035-1.021 3.779-4.443-.153-2.247-.051-4.545 0-6.793 0-.561-.051-1.276.817-1.276.92-.052.818.715.818 1.276v4.648zM20.276 26.762c0-1.328.153-2.707-.052-4.035-.306-2.35.715-3.013 2.86-2.707.92.103 1.84.052 2.81 0 .561 0 1.123.154 1.123.715 0 .562-.46.818-1.072.818h-1.533c-1.327-.052-2.451-.103-2.451 1.89 0 1.787.613 2.4 2.35 2.246.663-.05 1.787-.408 1.838.664.051 1.022-1.073.92-1.788.818-2.553-.358-2.298 1.225-2.4 2.91-.153 2.095 1.021 1.993 2.503 2.044 1.072.05 3.013-.715 3.013.766 0 1.48-1.89.715-2.911.715-4.341.102-4.341.05-4.341-4.137.05-.868.05-1.788.05-2.707zM60.163 33.708c-4.596.408-6.18-1.43-7.303-3.882-1.328-2.962-.511-6.537 1.736-8.529 2.299-2.043 5.26-1.94 8.07-1.021.613.204 1.583.664 1.072 1.685-.51 1.022-1.175.153-1.685-.051-3.473-1.226-5.158-.92-6.793 1.226-1.583 2.094-1.48 5.26.153 7.507 1.38 1.839 3.627 2.248 6.895 1.175.562-.204 1.124-.664 1.43.153.256.664-.357.97-.868 1.277-1.021.715-2.196.409-2.707.46zM80.848 26.609c0-1.532-.051-3.013 0-4.546 0-.766-.256-1.89.97-1.94 1.379-.051.92 1.123.97 1.838.052 2.503.154 5.056 0 7.559-.153 1.992.358 2.911 2.605 2.707 1.022-.102 2.962-.766 2.962.766 0 1.379-1.94.715-2.962.715-4.954.051-4.494.766-4.494-4.341-.051-.92-.051-1.839-.051-2.758zM47.855 33.606V20.123h.664c.51 4.494.102 8.988.204 13.483h-.868zM106.639 3.422c-.408-.256-.408-.664-.408-1.073-.409-.715-.818-1.43 0-2.349.868 1.124.459 2.298.408 3.422z",
    fill: "#979797"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M110.776 46.782c-.715-6.792-.511-13.636-.46-20.429 0-2.4-.51-4.698-.306-7.2.153-2.299 1.226-4.904-.256-7.253-.817-1.277-1.072-2.707-.817-4.086.46-2.196-.408-3.524-2.298-4.392-.204-.358-.102-.817-.409-1.073-.51.562-.919 1.38-1.532 1.584-1.992.612-1.889 1.94-1.685 3.524.204 1.787.102 3.473-1.328 4.903-1.175 1.174-.817 2.604-.409 3.983.205.613.664 1.073.664 1.839l-.919 26.404c-.051 1.941.511 4.137-2.35 5.414h13.484c-1.737-.715-1.226-2.043-1.379-3.218zm-4.035-22.267c.051.613-.051 1.174-.868 1.277-.817-.205-.664-.869-.664-1.43 0-.613.051-1.277.868-1.226.868.102.613.868.664 1.379zm-.97 5.924c1.072 0 .919.92.97 1.635 0 .612-.051 1.276-.817 1.276-1.021-.05-.613-.97-.766-1.48.153-.563-.204-1.43.613-1.43zm.306 10.266c-.97.102-.868-.766-.868-1.43 0-.664-.102-1.481.868-1.481.868 0 .613.766.715 1.328-.204.561.256 1.48-.715 1.583zm-.051-31.001c-.817-.051-1.43-.51-1.379-1.481.051-.869.511-1.43 1.43-1.43.971 0 1.328.561 1.328 1.48 0 .92-.511 1.43-1.379 1.43zM43.463 25.74c-.613-3.574-2.043-6.435-10.01-5.72-4.189.409-1.226 3.678-2.043 5.465-.154.358 0 .817 0 1.226v1.277c0 6.333.102 6.435 6.486 5.618 3.524-.358 6.282-3.882 5.567-7.865zm-2.145 3.882c-.92 1.94-4.75 3.32-7.15 2.656-.92-.255-.869-.92-.869-1.583V26.66c0-.613-.102-1.175 0-1.788.205-1.225-.817-3.013.766-3.575 1.737-.613 3.729-.153 5.312.92 2.4 1.583 3.115 4.852 1.94 7.405zM183.503 19.56c-4.239-.152-7.201 2.912-7.201 7.304 0 4.188 2.605 7.508 6.946 6.946 4.801 0 6.895-2.145 7.15-6.69.307-4.75-3.013-7.457-6.895-7.56zm0 13.075c-3.37.102-5.362-1.94-5.413-5.516-.051-3.779 1.838-5.975 5.107-6.026 3.269-.051 5.516 2.145 5.465 5.516-.051 3.677-1.481 5.873-5.159 6.026zM171.859 26.813c-.919-.664-.613-.817.051-1.532 1.379-1.481.664-4.495-1.073-5.005-1.685-.46-3.677-.664-5.209.05-1.073.511-.358 2.299-.46 3.525-.102 1.021 0 1.992 0 3.013s-.051 2.043 0 3.013c.102 4.137-.97 3.78 3.933 3.83 2.094.052 3.575-.765 4.392-2.655.868-1.839-.153-3.218-1.634-4.239zm-5.005-3.626c-.102-.92-.307-2.247 1.328-2.094 1.379.153 2.758.613 2.706 2.298-.051 1.686-1.276 2.196-2.349 2.298-2.502.052-1.583-1.583-1.685-2.502zm1.021 9.193c-2.247 0-.817-1.89-.97-2.86-.102-.766-1.022-2.656 1.226-2.4 1.634.204 3.575.204 3.421 2.808.205 2.81-2.145 2.452-3.677 2.452zM216.036 27.886c2.809-2.452 3.269-3.78 2.094-5.874-1.021-1.838-4.188-2.707-6.792-1.94-.664.204-1.073.612-1.073 1.225-.051 3.78-.051 7.559-.051 11.338 0 .562.255.97.919 1.022.715 0 .715-.51.715-1.022 0-1.021-.051-2.042 0-3.013 0-.664-.102-1.43.92-1.481.715-.051 1.43-.255 1.992.664.868 1.43 2.042 2.656 2.86 4.137.561 1.072 1.225.92 2.145.664-.766-2.299-2.401-3.882-3.729-5.72zm-2.298-1.328c-2.247.153-1.89-1.277-1.89-2.86.103-.97-.459-2.758 1.737-2.503 1.532.153 3.32.46 3.115 2.758-.102 1.89-1.225 2.503-2.962 2.605zM161.185 32.329c-.766-1.124-1.379-2.35-2.248-3.32-.868-.97-.664-1.328.256-2.094 1.481-1.277 1.685-3.064 1.021-4.852-.664-1.736-2.247-2.094-3.932-2.043-4.597.103-3.626-.408-3.729 3.729-.051 1.072 0 2.196 0 3.268 0 1.073-.153 2.197.051 3.269.256 1.124-1.072 3.218.869 3.218 1.43 0 .408-2.094.715-3.218.204-.715-.511-1.737.613-2.196 1.123-.46 1.736.357 2.298 1.123.97 1.328 1.941 2.707 2.962 4.035.409.51 1.073.715 1.583.307.46-.46-.204-.869-.459-1.226zm-5.465-5.771c-2.503.102-1.277-1.788-1.634-2.81.153-1.123-.46-2.757 1.532-2.553 1.532.153 3.115.51 3.064 2.605-.102 1.89-1.124 2.707-2.962 2.758zM149.131 32.482a2529.131 2529.131 0 00-4.443-11.134c-.255-.613-.511-1.277-1.123-1.277-1.124.051-1.175.868-1.43 1.43-1.431 3.473-2.912 6.895-4.188 10.42-.154.459-1.379 1.327 0 1.787.868.255 1.276-.358 1.481-1.226.408-1.481.613-3.116 2.86-3.269 2.247-.102 4.188 0 4.749 2.707.103.46.358.92.613 1.38.307.51.818.56 1.328.408.868-.307.256-.817.153-1.226zm-5.924-4.75c-.613-.204-1.941.409-1.685-.715.306-1.277.766-3.422 1.787-3.524 1.532-.102 1.073 2.043 1.532 3.167.511 1.379-.97.868-1.634 1.072zM77.732 32.533c-1.48-3.78-2.962-7.916-4.8-11.9-.563-1.226-1.584-.817-2.095.51-1.379 3.576-2.91 7.049-4.29 10.624-.204.562-1.225 1.379-.102 1.89 1.226.51 1.124-.817 1.532-1.481.613-.97.409-2.554 1.992-2.912 3.013-.663 4.648.103 5.925 2.912.153.357.153.817.306 1.174.204.46.664.46 1.124.358.408-.102.51-.409.408-1.175zm-7.303-5.21c-.817-1.378.97-2.655 1.277-4.34 1.634 1.276 1.225 3.064 2.4 4.443-1.481.357-3.166.766-3.677-.102z",
    fill: "#979797"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMedicalharbor);

/***/ }),

/***/ "./src/assets/logos/medicinae.svg":
/*!****************************************!*\
  !*** ./src/assets/logos/medicinae.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3, _path4, _path5;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMedicinae(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 225,
    height: 33,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M27.089 0v.51c-2.142 1.173-4.335 1.122-6.528.102-.052-.204-.052-.408-.102-.612h6.63zM38.36.561V0h6.631c0 .204-.05.408-.05.612-1.888 1.071-3.877.612-5.815.408a1.921 1.921 0 01-.765-.459z",
    fill: "#979797"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M20.56.612C22.755.562 24.897.51 27.09.51c1.581 5.815 3.111 11.578 4.794 17.341.204.664-.255 2.092 1.326 1.99.765 4.13 2.5 7.956 2.908 12.19-2.602 1.938-6.58.816-7.345-1.99-1.377-5.05-2.703-10.15-4.08-15.199-.153-.612.153-1.683-1.122-1.58-1.071-4.081-2.448-8.06-2.958-12.242-.051-.102-.051-.255-.051-.408zM38.82.561c2.04 0 4.03 0 6.07.051 1.325 4.998 2.6 9.997 3.977 14.944.154.561.102 1.48 1.174 1.224.714 2.244.969 4.59 1.785 6.784.306.816.102 1.632-.204 2.448-1.734.714-3.52.153-5.254.306-1.224.102-1.224-.918-1.428-1.734-.867-3.111-1.683-6.223-2.499-9.283-.204-.765-.204-1.683-1.02-2.193C40.095 8.977 37.749 5.15 38.82.56z",
    fill: "#979797"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M38.82.561c-.153 3.468 1.58 6.478 2.244 9.793.204.918.357 1.785.357 2.754-1.785 6.273-3.57 12.598-5.355 18.871-1.53-3.468-2.194-7.14-3.265-10.761-.102-.408.255-.918.408-1.428 1.734-6.427 3.418-12.853 5.152-19.28.153 0 .306 0 .459.051zM5.719 9.232c.714.204 1.428.51 2.142.612 4.182.612 6.987 2.805 8.007 6.987 2.346 2.601 3.417 5.764 4.08 9.13-1.785.816-3.62.204-5.457.357-1.122.102-1.224-1.02-1.632-1.683-1.53-2.703-2.295-5.815-4.284-8.263-1.275-2.244-2.805-4.386-2.856-7.14zM50.602 16.321c2.805-2.142 5.61-4.335 8.415-6.477.408-.306.867-.51 1.326-.663 1.326-.561 3.265 1.07 4.132-1.173.102-.205 5.967 4.437 5.967 4.845 0 .459-5.763 5.05-6.018 4.794-1.837-2.448-4.387-.51-6.529-1.07-.918-.256-1.632.152-2.193.917-1.734-.153-3.723.714-5.1-1.173z",
    fill: "#979797"
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M20 25.96c-1.378-3.06-2.755-6.069-4.08-9.129 1.376-1.581 1.325-3.723 1.937-5.61 1.02-3.367 1.888-6.784 2.806-10.201 1.58 3.417 2.04 7.192 3.213 10.762.204.56-.153.969-.306 1.428-1.122 4.284-2.091 8.568-3.57 12.75zM173.418 16.73c0-2.347-.051-4.744 0-7.09 0-.663-.459-1.632.51-1.99.969-.356 1.479.358 2.04 1.072a493.23 493.23 0 007.804 10.302c.867 1.122 1.581 3.316 2.907 2.959 1.02-.255.357-2.55.408-3.928.102-2.958 0-5.916.051-8.874 0-.612-.255-1.53.765-1.581 1.275-.051.867 1.02.867 1.632.051 4.998.051 9.996 0 14.995 0 .612.357 1.479-.51 1.785-.918.306-1.326-.408-1.785-1.02a1012.961 1012.961 0 00-9.487-12.547c-.408-.51-.663-1.377-1.53-1.071-.714.255-.357 1.071-.357 1.581-.051 3.825 0 7.6-.051 11.425 0 .612.255 1.53-.714 1.58-1.326.103-.867-1.02-.867-1.631-.102-2.5-.051-5.05-.051-7.6zM81.612 7.753c2.04 3.315 4.131 6.58 6.12 9.894.97 1.632 1.581 2.295 2.754.051 1.632-3.06 3.57-5.916 5.356-8.874.408-.612.612-1.53 1.632-1.224.918.255.612 1.07.612 1.734v14.944c0 .663.357 1.734-.816 1.734-1.224 0-.765-1.122-.765-1.734-.051-4.131 0-8.263 0-12.955-3.01 3.723-4.744 7.701-7.396 11.272-1.785-2.908-3.468-5.764-5.304-8.518-.51-.765-.663-2.091-2.091-1.836-.561 3.52-.102 7.09-.255 10.609-.051.867.153 1.785-.255 2.652-1.02-.306-.765-.97-.765-1.48V9.845c-.051-1.02-.102-1.938 1.173-2.091zM146.947 16.627c-.153 3.417 1.173 6.019 4.08 7.447 3.01 1.479 6.07 1.275 8.926-.663.408-.255.612-1.326 1.377-.51.714.765-.051 1.173-.51 1.632-4.233 4.029-12.598 1.887-14.944-3.877-1.581-3.927-.561-8.313 2.55-11.17 3.06-2.753 7.396-3.213 11.119-1.223.51.255 1.02.612 1.479 1.02.408.306.765.714.357 1.275-.51.612-.816.153-1.224-.153-1.428-1.173-3.06-1.734-4.896-1.734-5.152-.051-8.314 3.009-8.314 7.956zM103.594 16.831c0-2.448.102-4.896-.051-7.344-.102-1.632.51-2.04 2.04-1.938 2.449.102 4.948.05 7.396.05.51 0 1.122.052 1.122.715-.051.714-.714.51-1.173.56a112.47 112.47 0 01-5.866 0c-1.326-.05-1.785.51-1.785 1.837.051 6.222-.459 4.845 4.693 5.05 1.224.05 3.519-.664 3.468.611 0 1.377-2.244.561-3.468.612-5.509.153-4.489-.612-4.744 4.795-.153 2.703.816 3.468 3.316 3.162 1.53-.153 3.06-.051 4.59 0 .459 0 1.122-.102 1.071.663-.051.714-.714.56-1.173.56-2.652 0-5.254-.05-7.906.052-1.275.05-1.581-.46-1.581-1.632.102-2.703.051-5.203.051-7.753zM214.119 16.678v-7.6c0-.968.153-1.58 1.377-1.53 2.652.052 5.253 0 7.905 0 .51 0 1.071 0 1.02.715-.051.765-.663.56-1.122.56h-3.06c-4.488 0-5.457 1.327-4.437 5.866.204.97.765.97 1.428.97 1.683 0 3.417-.052 5.1 0 .561 0 1.53-.562 1.581.56.051 1.173-.918.663-1.479.663-1.428.051-2.907 0-4.335 0-.408 0-.969-.153-1.275.051-2.295 1.683-.51 4.131-1.02 6.172-.255 1.07.153 1.734 1.479 1.683 2.04-.102 4.08-.051 6.12 0 .459 0 1.122-.102 1.173.612 0 .765-.663.663-1.122.663-2.652 0-5.253-.051-7.905 0-1.173.05-1.428-.51-1.428-1.53.051-2.601 0-5.254 0-7.855zM5.719 9.232c.867 2.397 2.448 4.54 2.958 7.14-1.938.051-3.877 0-5.815.102-1.785.102-2.958.102-2.856-2.346C.21 8.671.057 8.671 5.72 9.232zM50.602 16.321c1.53 1.122 3.672-.255 5.15 1.071-1.172 2.958-2.345 5.968-4.13 8.62-.051-2.398-1.377-4.489-1.734-6.835-.154-.867-.306-1.632.153-2.397.153-.153.357-.306.56-.459zM167.859 16.78v7.855c0 .612.204 1.479-.918 1.377-.919-.102-.715-.816-.715-1.377V8.925c0-.662-.153-1.479.919-1.377.918.103.663.817.663 1.378.051 2.6.051 5.253.051 7.854zM140.776 16.78v7.855c0 .51.306 1.275-.663 1.326-1.071.05-.918-.765-.918-1.377V9.079c0-.612-.255-1.53.867-1.48 1.122.051.714.97.714 1.53.051 2.55 0 5.1 0 7.651z",
    fill: "#979797"
  })), _path5 || (_path5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M81.612 7.753c-.612.51-1.02 1.02-1.02 1.887.05 5.05 0 10.047.51 15.097 0-3.213-.051-6.478 0-9.69 0-.97-.408-2.041.51-2.857 0 3.978.05 7.957 0 11.935 0 .663.459 1.734-.714 1.836-1.275.102-.867-1.02-.867-1.683-.051-5.1 0-10.15-.051-15.25.05-1.071.204-1.887 1.632-1.275zM126.24 7.549c-1.938-.102-3.927 0-5.866-.051-1.275-.051-1.581.459-1.581 1.632.051 2.55 0 5.1 0 7.65v2.295c0 7.855 0 7.855 7.855 6.988 4.641-.51 8.109-4.54 8.007-9.283-.102-5.1-3.621-8.976-8.415-9.231zm.969 16.78c-5.814 1.275-6.682.612-6.682-5.203v-2.295-6.324c0-.816.153-1.53 1.225-1.48 1.938.103 3.927-.05 5.814.358 3.264.663 5.253 3.723 5.151 7.497-.051 4.03-2.04 6.682-5.508 7.447zM209.324 24.635c-2.244-5.305-4.488-10.609-6.783-15.862-.204-.51-.357-1.173-1.122-1.224-.918-.051-1.071.714-1.326 1.326-2.244 5.304-4.489 10.608-6.682 15.913-.153.408-.663.969.153 1.224.561.204 1.02-.051 1.275-.561.255-.51.612-1.071.714-1.632.408-2.091 1.684-2.755 3.673-2.397.663.101 1.377 0 2.703 0 2.55-.51 5.304-.256 5.865 3.774 0 .102.102.153.102.204.306.714.918.816 1.479.51.561-.306.102-.867-.051-1.275zm-5.355-4.846h-6.63c1.377-3.264 2.601-6.12 4.029-9.537 1.326 3.162 2.448 5.763 3.519 8.364.408.918-.051 1.224-.918 1.173z",
    fill: "#979797"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMedicinae);

/***/ }),

/***/ "./src/assets/logos/medphone.svg":
/*!***************************************!*\
  !*** ./src/assets/logos/medphone.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMedphone(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 183,
    height: 39,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M77.197 18.161v7.63c0 .924-.73 1.59-1.655 1.59-.967 0-1.654-.666-1.654-1.59v-7.007c0-1.74-.71-2.922-2.687-2.922-2.192 0-3.052 1.182-3.052 2.9v7.05c0 .924-.73 1.59-1.654 1.59-.968 0-1.655-.666-1.655-1.59v-7.028c0-1.74-.71-2.922-2.687-2.922-2.3 0-3.052 1.354-3.052 3.137v6.813c0 .924-.709 1.59-1.654 1.59-.946 0-1.655-.666-1.655-1.59V14.68c0-.925.73-1.655 1.655-1.655.924 0 1.654.73 1.654 1.655.58-.882 1.87-1.827 3.912-1.827 2.514 0 3.76.795 4.513 1.977.967-1.311 2.3-1.977 4.363-1.977 4.17 0 5.308 2.665 5.308 5.308zM86.073 12.853c5.158 0 6.104 3.976 6.104 6.082 0 1.139 0 2.45-1.87 2.45h-7.543c0 2.192 1.547 3.202 3.567 3.202 1.354 0 2.3-.451 3.03-.945.344-.215.58-.344.968-.344.795 0 1.44.644 1.44 1.44 0 .494-.237.88-.516 1.139-.516.494-2.128 1.676-4.922 1.676-4.234 0-6.877-2.3-6.877-7.393.022-4.685 2.472-7.307 6.62-7.307zm-3.202 5.781h6.04c0-1.504-.86-2.966-2.838-2.966-1.762 0-3.051 1.01-3.202 2.966zM103.395 14.078V7.05c0-.924.731-1.655 1.655-1.655s1.655.73 1.655 1.655v14.378c0 4.061-2.622 6.103-6.319 6.103-4.126 0-6.533-2.342-6.533-7.328 0-4.986 2.343-7.35 6.19-7.35 1.461 0 2.729.601 3.352 1.225zm0 3.137s-1.182-1.547-3.03-1.547c-2.085 0-3.267 1.526-3.267 4.556 0 2.988 1.16 4.513 3.267 4.513 1.762 0 3.03-1.182 3.03-3.288v-4.234zM116.634 12.853c3.998 0 6.19 2.342 6.19 7.328 0 4.986-2.235 7.35-6.19 7.35-1.526 0-2.88-.494-3.61-1.31v5.394c0 .924-.731 1.655-1.655 1.655s-1.655-.731-1.655-1.655V14.68c0-.925.731-1.655 1.655-1.655s1.655.73 1.655 1.655c.472-.753 1.912-1.827 3.61-1.827zm-.43 2.815c-2.127 0-3.266 1.526-3.266 4.556 0 2.988 1.139 4.514 3.266 4.514 2.128 0 3.288-1.526 3.288-4.535 0-3.009-1.139-4.535-3.288-4.535zM128.583 14.68c.581-.882 1.87-1.827 3.912-1.827 4.148 0 5.136 2.665 5.136 5.308v7.63c0 .924-.73 1.59-1.655 1.59-.967 0-1.654-.666-1.654-1.59v-7.007c0-1.74-.71-2.923-2.687-2.923-2.299 0-3.052 1.354-3.052 3.138v6.813c0 .924-.709 1.59-1.654 1.59-.946 0-1.655-.666-1.655-1.59V7.05c0-.924.73-1.655 1.655-1.655.924 0 1.654.73 1.654 1.655v7.63zM146.572 27.553c-4.127 0-6.684-2.343-6.684-7.329 0-5.007 2.557-7.35 6.684-7.35 4.126 0 6.684 2.343 6.684 7.35 0 4.965-2.558 7.329-6.684 7.329zm0-11.885c-2.192 0-3.353 1.526-3.353 4.556 0 2.987 1.161 4.513 3.353 4.513s3.352-1.526 3.352-4.513c0-3.03-1.16-4.556-3.352-4.556zM167.999 18.161v7.63c0 .924-.731 1.59-1.655 1.59-.967 0-1.655-.666-1.655-1.59v-7.007c0-1.74-.709-2.922-2.687-2.922-2.299 0-3.051 1.354-3.051 3.137v6.813c0 .924-.71 1.59-1.655 1.59-.946 0-1.655-.666-1.655-1.59V14.68c0-.925.731-1.655 1.655-1.655s1.655.73 1.655 1.655c.58-.882 1.869-1.827 3.911-1.827 4.169 0 5.137 2.665 5.137 5.308zM176.896 12.853c5.158 0 6.104 3.976 6.104 6.082 0 1.139 0 2.45-1.87 2.45h-7.543c0 2.192 1.547 3.202 3.567 3.202 1.354 0 2.3-.451 3.031-.945.343-.215.58-.344.967-.344.795 0 1.44.644 1.44 1.44 0 .494-.237.88-.516 1.139-.516.494-2.128 1.676-4.922 1.676-4.234 0-6.877-2.3-6.877-7.393.021-4.685 2.45-7.307 6.619-7.307zm-3.223 5.781h6.039c0-1.504-.86-2.966-2.837-2.966-1.762 0-3.03 1.01-3.202 2.966zM0 7.996v26.069a4.613 4.613 0 004.62 4.62 4.613 4.613 0 004.621-4.62v-16.72l-8.66-8.64A8.416 8.416 0 010 7.995zM16.076 16.034c-.108.107-.215.215-.301.344a.451.451 0 00-.086.128c-.065.086-.13.15-.172.237-.043.064-.065.107-.108.172-.043.064-.086.15-.129.215a.765.765 0 00-.085.193.643.643 0 00-.087.215c-.021.064-.064.15-.085.215l-.065.193c-.021.086-.043.15-.064.237-.022.064-.022.129-.043.172-.022.086-.022.172-.043.258 0 .064-.022.107-.022.172 0 .085-.021.193-.021.279v.581c0 .107.021.214.021.3 0 .043 0 .064.022.107l.064.323c0 .021.022.064.022.086.021.107.064.215.107.344 0 .021.022.043.022.064.043.108.085.237.129.344 0 .021.021.021.021.043.065.107.107.236.172.344l.021.021c.065.108.15.237.215.344v.022c.15.215.323.408.495.602a4.615 4.615 0 005.415.816s.022 0 .022-.021c.129-.065.258-.13.365-.215.022-.022.043-.043.086-.065.108-.064.194-.129.301-.215.022-.021.065-.043.086-.086.086-.085.172-.15.258-.236l5.717-5.717V4.6c0-.3.021-.602.086-.881l-9.027 9.026-3.31 3.289z",
    fill: "#979797"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15.26 15.217l3.266-3.267L7.931 1.355A4.599 4.599 0 002.923.345s-.021 0-.021.021a1.905 1.905 0 00-.365.172C2.515.56 2.494.56 2.45.581c-.108.065-.215.108-.323.193a.386.386 0 00-.15.108c-.065.043-.15.107-.215.15-.129.108-.237.215-.365.323a4.618 4.618 0 000 6.533l7.822 7.823 4.385 4.384a4.764 4.764 0 01-.065-.795 5.833 5.833 0 011.72-4.083zM34.064.001a4.614 4.614 0 00-4.62 4.62v29.466a4.614 4.614 0 004.62 4.62 4.614 4.614 0 004.62-4.62V4.622A4.614 4.614 0 0034.065 0z",
    fill: "#979797"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMedphone);

/***/ }),

/***/ "./src/assets/logos/pebmed.svg":
/*!*************************************!*\
  !*** ./src/assets/logos/pebmed.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgPebmed(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 155,
    height: 38,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    clipPath: "url(#pebmed_svg__clip0)",
    fill: "#979797"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M108.7 18.6L101.3 8h-2.6v21.7h3.2V14.5l5.8 8.4h1.8l5.8-8.4v15.3h3.2V8.1H116l-7.3 10.5zM124.2 20.4h10.1v-3.2h-10.1v-6.1h10.3V8H121v21.7h13.6v-3.1h-10.3v-6.2h-.1zM144.1 8h-8v21.7h8c7.3 0 10.9-5.4 10.9-10.8S151.3 8 144.1 8zm0 18.6h-4.8V11.1h4.8c5.2 0 7.8 3.9 7.8 7.7-.1 3.9-2.7 7.8-7.8 7.8zM56.9 8h-7.5v20.9h1.9v-7.4h5.6c4.5 0 6.5-3.5 6.5-6.7 0-1.8-.6-3.4-1.6-4.7C60.6 8.7 58.9 8 56.9 8zm0 11.6h-5.6V9.8h5.6c2.3 0 4.7 1.5 4.7 4.9 0 3.4-2.4 4.9-4.7 4.9zM68 19.4h10.1v-1.9H68V9.9h10.3V8H66.1v20.9h12.2V27H68v-7.6zM93.3 17.9l-1.1-.5 1-.7c2.1-1.5 2.1-3.8 1.4-5.5C94.1 10 92.9 8 89.8 8h-8.6v20.9h9.4c3.8 0 5.8-3 5.8-6-.1-1.1-.4-3.8-3.1-5zM83 9.7h6.8c1.6 0 3.3 1.1 3.3 3.5s-1.7 3.6-3.3 3.6H83V9.7zm7.5 17.4H83v-8.5h7.6c2 0 3.9 1.4 3.9 4.2 0 2.9-2 4.3-4 4.3zM29.7 19.2l5.6.1c.1 0 .1 0 .2-.1s.1-.1.1-.2c-.1-.4-.2-.8-.5-1.1l-10-10c-.3-.4-.8-.6-1.4-.6-.5 0-.9.2-1.3.5l-1.8 1.9c-.1.1-.1.3 0 .4l8.9 8.9.2.2zM12 18.8l-5.6-.1c-.1 0-.1 0-.2.1s-.1.1-.1.2c.1.4.2.8.5 1.1l10 10c.3.4.8.6 1.3.6h.1c.5 0 .9-.2 1.3-.5l1.8-1.9c.1-.1.1-.3 0-.4L12.2 19c0-.2-.1-.2-.2-.2z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M25.8 1.9c-.1-.1-.2-.2-.4-.3 0 0-.1 0-.1-.1l-.1-.1c-.1 0-.1-.1-.2-.1-.1-.1-.2-.1-.3-.2h-.1c-.1-.1-.3-.1-.4-.1h-1c-.1 0-.1 0-.2.1s-.2.1-.3.2L6.8 17c-.1.1-.1.2-.2.3v.2c-.1.1-.1.2-.1.3V18.1c0 .1.1.1.2.1l5.2.1c.1 0 .1 0 .2-.1L22.2 7.5c.4-.4.9-.6 1.5-.6h.1c.6 0 1.1.2 1.5.7l10 10c.4.4.6.8.6 1.4v.4l-.1.3v.6l-.1.2h-.1l-.2.3s-.1 0-.1.1L23.5 32.5l-3.4 3.3c-.4.4-.9.7-1.4.8 0 0-.1 0-.1.1H18.3c-.1 0-.2.1-.2.2s.1.2.2.3c.8.3 1.7.5 2.5.5h.6c1.8 0 3.3-.6 4.4-1.6L40.9 21c.6-.5.9-1.3.9-2.1s-.3-1.5-.8-2.1L25.8 1.9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M18.1 36.5h.2c.1 0 .3-.1.4-.1l.6-.3c.2-.1.4-.3.5-.4l3.4-3.3L35 20.5l.1-.1.1-.1s0-.1.1-.1l.1-.2v-.3c0-.1-.1-.1-.2-.1l-5.2-.1c-.1 0-.1 0-.2.1L19.6 30.3c-.4.4-.9.7-1.5.7H18c-.6 0-1.1-.2-1.5-.7l-10-10c-.5-.5-.7-1.1-.7-1.7 0-.1 0-.3.1-.4v-.1c0-.1 0-.2.1-.3l.3-.6.3-.3L22.2 1.2c.1-.1.2-.2.4-.3 0 0 .1 0 .1-.1h.1c.1 0 .2-.1.2-.3 0-.1-.1-.2-.2-.2L21 0h-.6C18.5 0 17 .6 16 1.6L.9 16.6c-.6.6-.9 1.3-.9 2.1s.3 1.5.8 2.1l15 15.1s.1.1.2.1l.1.1.1.1.3.1H16.8c.3.1.6.2.8.2h.5z"
  }))), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
    id: "pebmed_svg__clip0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#fff",
    d: "M0 0h155v38H0z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgPebmed);

/***/ }),

/***/ "./src/components/Button/Button.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Button/Button.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btn": "Button_btn__gF3jp"
};


/***/ }),

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.scss */ "./src/components/Button/Button.module.scss");
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\components\\Button\\Button.tsx";


function Button({
  children,
  className,
  onClick,
  to
}) {
  const buttonClass = [_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btn];

  const handleClick = e => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  const renderButton = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    type: "button",
    onClick: handleClick,
    className: buttonClass.join(' '),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);

  const renderLink = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    href: to,
    onClick: handleClick,
    className: buttonClass.join(' '),
    target: "_blank",
    rel: "noreferrer",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);

  if (className) buttonClass.push(className);
  return to ? renderLink() : renderButton();
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Container/Container.module.scss":
/*!********************************************************!*\
  !*** ./src/components/Container/Container.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section": "Container_section__UWnwA",
	"bkgdDarkGray": "Container_bkgdDarkGray__DlWb6",
	"bkgdGray": "Container_bkgdGray__1XSMH",
	"bkgdLightGray": "Container_bkgdLightGray__3w1Vv",
	"bkgdWhite": "Container_bkgdWhite__nodFN",
	"noPadding": "Container_noPadding__qhXkW"
};


/***/ }),

/***/ "./src/components/Container/Container.tsx":
/*!************************************************!*\
  !*** ./src/components/Container/Container.tsx ***!
  \************************************************/
/*! exports provided: listBackground, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listBackground", function() { return listBackground; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.module.scss */ "./src/components/Container/Container.module.scss");
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\components\\Container\\Container.tsx";

/* eslint-disable react/destructuring-assignment */

let listBackground;

(function (listBackground) {
  listBackground["bkgdDarkGray"] = "bkgdDarkGray";
  listBackground["bkgdGray"] = "bkgdGray";
  listBackground["bkgdLightGray"] = "kgdLightGray";
  listBackground["bkgdWhite"] = "bkgdWhite";
})(listBackground || (listBackground = {}));

const Container = props => {
  const ContainerClass = [_Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.section, _Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[props.backgroundColor]];
  if (props.className) ContainerClass.push(props.className);
  if (props.noPadding) ContainerClass.push(_Container_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.noPadding);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: props.id,
    className: ContainerClass.join(' '),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/hooks/useWindowChange.ts":
/*!**************************************!*\
  !*** ./src/hooks/useWindowChange.ts ***!
  \**************************************/
/*! exports provided: useWindowWidthChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowWidthChange", function() { return useWindowWidthChange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowWidthChange(callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleResize = () => callback(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
}

/***/ }),

/***/ "./src/pages/Home.module.scss":
/*!************************************!*\
  !*** ./src/pages/Home.module.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"from320": "320px",
	"from360": "360px",
	"from400": "400px",
	"from480": "480px",
	"from600": "600px",
	"from720": "720px",
	"from840": "840px",
	"from960": "960px",
	"from1024": "1024px",
	"from1280": "1280px",
	"from1440": "1440px",
	"from1600": "1600px",
	"from1920": "1920px",
	"container": "Home_container__27T7o",
	"main": "Home_main__3u0Lj",
	"grid": "Home_grid__VK2Aw"
};


/***/ }),

/***/ "./src/pages/index.page.tsx":
/*!**********************************!*\
  !*** ./src/pages/index.page.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.module.scss */ "./src/pages/Home.module.scss");
/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sections_Banner_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/Banner/Banner */ "./src/pages/sections/Banner/Banner.tsx");
/* harmony import */ var _sections_Beneficios_Beneficios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/Beneficios/Beneficios */ "./src/pages/sections/Beneficios/Beneficios.tsx");
/* harmony import */ var _sections_ExAluno_ExAluno__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/ExAluno/ExAluno */ "./src/pages/sections/ExAluno/ExAluno.tsx");
/* harmony import */ var _sections_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/Footer/Footer */ "./src/pages/sections/Footer/Footer.tsx");
/* harmony import */ var _sections_JaFazParte_JaFazParte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/JaFazParte/JaFazParte */ "./src/pages/sections/JaFazParte/JaFazParte.tsx");
/* harmony import */ var _sections_OqueE_OqueE__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/OqueE/OqueE */ "./src/pages/sections/OqueE/OqueE.tsx");

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\pages\\index.page.tsx";






 // import Menu from './sections/Menu/Menu';


function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Afya Ventures"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description' content='Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sections_Banner_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sections_OqueE_OqueE__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sections_Beneficios_Beneficios__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sections_ExAluno_ExAluno__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sections_JaFazParte_JaFazParte__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sections_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/sections/Banner/Banner.module.scss":
/*!******************************************************!*\
  !*** ./src/pages/sections/Banner/Banner.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"from320": "320px",
	"from360": "360px",
	"from400": "400px",
	"from480": "480px",
	"from600": "600px",
	"from720": "720px",
	"from840": "840px",
	"from960": "960px",
	"from1024": "1024px",
	"from1280": "1280px",
	"from1440": "1440px",
	"from1600": "1600px",
	"from1920": "1920px",
	"container": "Banner_container__1vIOg",
	"img": "Banner_img__3jQX7",
	"bgGradient": "Banner_bgGradient__FkRuI",
	"afyaVector": "Banner_afyaVector__3FWdR",
	"content": "Banner_content__1hdZE",
	"logo": "Banner_logo__30sd4",
	"release": "Banner_release__2ZdhP",
	"dateWrapper": "Banner_dateWrapper__11SVi",
	"divider": "Banner_divider__2XbFA",
	"date": "Banner_date__2DIHc",
	"schedule": "Banner_schedule__1BxHI",
	"btn": "Banner_btn__2icZ5",
	"btnIcon": "Banner_btnIcon__2WYMI"
};


/***/ }),

/***/ "./src/pages/sections/Banner/Banner.tsx":
/*!**********************************************!*\
  !*** ./src/pages/sections/Banner/Banner.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_IconSend_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~assets/icons/IconSend.svg */ "./src/assets/icons/IconSend.svg");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~components/Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Banner.module.scss */ "./src/pages/sections/Banner/Banner.module.scss");
/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Banner_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_AfyaVector_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/AfyaVector.svg */ "./src/pages/sections/Banner/images/AfyaVector.svg");
/* harmony import */ var _images_AfyaVentures_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/AfyaVentures.svg */ "./src/pages/sections/Banner/images/AfyaVentures.svg");
/* harmony import */ var _images_banner_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/banner.jpg */ "./src/pages/sections/Banner/images/banner.jpg");
/* harmony import */ var _images_banner_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_banner_jpg__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\pages\\sections\\Banner\\Banner.tsx";







function Banner() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: _images_banner_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
      className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.img,
      alt: "a man holding a lighted lamp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bgGradient
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_images_AfyaVector_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.afyaVector
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_images_AfyaVector_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.afyaVector
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_images_AfyaVentures_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.release,
        children: "LAN\xC7AMENTO"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dateWrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.divider
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.date,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "26.05"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this), " | 19HRS"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.divider
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.schedule,
        children: "HOR\xC1RIO DE BRAS\xCDLIA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btn,
        to: "https://forms.office.com/r/PAjrMN3NQt",
        children: ["INSCREVA-SE PARA ASSISTIR A LIVE ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_IconSend_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btnIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 44
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./src/pages/sections/Banner/images/AfyaVector.svg":
/*!*********************************************************!*\
  !*** ./src/pages/sections/Banner/images/AfyaVector.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAfyaVector(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 818,
    height: 936,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    opacity: 0.5,
    d: "M-331.105 934.612L242.836 1.76l573.899 932.852H667.609l-424.347-689.75-.426-.692-.426.692-424.389 689.75h-149.126z",
    stroke: "#fff"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAfyaVector);

/***/ }),

/***/ "./src/pages/sections/Banner/images/AfyaVentures.svg":
/*!***********************************************************!*\
  !*** ./src/pages/sections/Banner/images/AfyaVentures.svg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAfyaVentures(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 628.83 105.63"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, ".AfyaVentures_svg__cls-1{fill:#d00063}.AfyaVentures_svg__cls-2{fill:#d00163}.AfyaVentures_svg__cls-4{fill:#d00264}.AfyaVentures_svg__cls-5{fill:#d00364}"))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "AfyaVentures_svg__Layer_2",
    "data-name": "Layer 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "AfyaVentures_svg__Layer_1-2",
    "data-name": "Layer 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "AfyaVentures_svg__cls-1",
    d: "M97.9 10.9a18.39 18.39 0 0111-10.9h7.76c5.49 2 9.67 5.17 11.38 11.12.61 2.13.15 3.44-1.46 4.63-4 2.12-7.25.58-10.32-2-3.41-2.87-6.47-2-6.83 2.52-.74 8.9-.38 17.86-.17 26.79.06 2.58 2 3.21 4.15 3.27 3.66.09 7.32.24 11 0 6-.39 9.68 2.16 11.8 7.73s5 10.63 8.1 16.54a124.4 124.4 0 008.87-17.51c2.45-5.56 6.93-8 12.3-6.81 3.86.83 4.84 2.33 3.28 6-2.26 5.33-4.49 10.69-7.26 15.79-1.51 2.77-2.5 5.78-3.8 8.64a53 53 0 00-8 25.75c-2.18 2.57-5.12 1.78-7.86 1.64-2.27-.11-2.32-1.82-2.31-3.59 0-2.43.64-4.93-.59-7.27-3.22-7.59-6.84-15-10.33-22.45-1-2.1-1.85-4.25-2.92-6.32-2.68-5.22-6.23-6.67-11.84-5-4.17 1.26-4.28 4.87-4.4 8.06a239.79 239.79 0 00.13 26.81c.13 1.8.75 3.63-.83 5.14.34 5-2.87 4.66-6.44 4.84-4.88.25-4.19-3-4.5-5.84-1.75-2.11-1.5-4.65-1.5-7.11 0-5.45-.17-10.9.1-16.34-.09-2.64 0-5.28 0-7.92 0-6.44 0-6.62-6.32-7.68-4.63-.78-7.52-3.1-8.7-7.61-.85-3.26.31-5.11 3.74-5.46a49.28 49.28 0 016-.17c3.8.08 5.34-1.78 5.33-5.46V17.44c-.13-2.29-.46-4.7 1.44-6.54zM0 102.55C6.35 93.39 10 82.89 14.87 73 25.48 51.38 35.7 29.57 46.22 7.56c3.58 4.47 4.55 9.89 7.66 14.15 1.8.61 2.28 2.25 3 3.73 7.38 15.49 14.68 31 22.05 46.5 3.61 6.82 6.29 14.08 9.92 20.89.75 1.42 1.72 2.85 1.18 4.63l2.47 6.32H82.32c-2.09 0-2.64-1.52-3.39-3-2.73-5.41-4.73-11.17-8.09-16.26-4.12-3-5.37-7.83-7.15-12.18-5-12.08-11.3-23.49-16.81-36.29a166.79 166.79 0 00-7.81 15.38C36 58 33.52 64.86 28.88 70.58 24.43 79.72 19.74 88.75 15.63 98c-1.83 4.14-3.91 6.52-8.72 5.7a54.61 54.61 0 00-6.9-.33 4.1 4.1 0 01-.01-.82zM628.83 92.37c-7.47 12.4-21.08 15.34-35 7.56-1.3-.72-2.55-1.53-3.82-2.3.85-7.07 3.06-8.4 9.3-5.48a24.91 24.91 0 0011.52 2.68c3.26-.1 6.14-.71 6.63-4.51.45-3.42-2.25-4.48-4.8-5.39-3.59-1.28-7.29-2.29-10.85-3.65-7.61-2.91-11.29-8.19-10.34-14.5 1.13-7.54 6.64-12.48 14.61-13.22a32.33 32.33 0 0117.42 3.19c2 1 4 1.84 2.48 4.78-1.36 2.57-2.41 5.37-6.21 3.87-3.55-1.41-7-3-11-2.86-3 .1-5.89.55-6.6 4s2.2 4.42 4.69 5.39a60 60 0 007 2.49 21.8 21.8 0 0114.86 11.45c.04 2.13.07 4.32.11 6.5zM266.48 92.37c-2.17 4.21-4.35 8.41-6.85 13.26-3.17-6.13-6.07-11.75-9-17.38L229 42c-.69-1.48-1.31-3-2.25-5.12h9.72c2.79 0 3.43 2.09 4.34 4.07q8.43 18.27 17 36.5a34.86 34.86 0 002 3.17c4.61-9.64 8.89-18.53 13.13-27.43 1.49-3.14 3.27-6.22 4.25-9.52 1.61-5.43 4.59-7.59 10.44-7 3.74.39 4.65.87 2.9 4.46-6.16 12.66-12.14 25.41-18.12 38.15-2.13 4.3-3.99 8.72-5.93 13.09zM579.18 94.47c-3.23 6.17-12.73 10.43-21.32 9.66a28.27 28.27 0 01-15.86-6.4c-5.1-5.6-8.13-12-8-19.74.08-3.36 1.4-4.68 4.83-4.62 5.54.1 10.87.39 15.8 3.49 3.48 2.19 6.8 1.08 9.18-2.15 2.22-3 2.24-6.26-.29-9.11s-5.64-4.29-9.23-1.75c-5.08 3.61-10.71 3.95-17.13 3.28 3.78-8.67 10.28-13 19.08-14.19 8.58-1.14 17.55 3.52 21.88 11A32.87 32.87 0 01582 75.21c1 5.84-.21 7.24-6.11 7.29-9.31.07-18.63 0-28 0-1.57 0-3.61-.77-4.59.92-1.08 1.84.4 3.48 1.4 5 5 7.53 15.1 10.12 22.77 4.31 5.61-4.25 8.35-2.34 11.71 1.74zM332.42 96.46c-12.19 9.7-22.11 10.31-36 2.2-12.46-11.24-9.42-31.89.08-40 10.63-9.13 28.29-7 34.81 4.49 1.58 2.8 1.5 4.17-2.18 4.29-4.59.16-9-.26-12.88-2.9s-7.16-2.38-10.14 1c-2.64 3-2.68 6.38-.16 9.5 2.83 3.49 6.25 4.07 10.07 1.43 5.16-3.56 11.06-3.09 16.85-2.84 4 .17 2.51 3.54 2.79 5.72.36 2.73-1.35 3.3-3.7 3.28q-15.21-.1-30.4 0c-1.58 0-3.63-.73-4.57 1s.63 3.45 1.56 4.91c5.17 8.11 16.73 9.53 25 3.11 1.38-1.06 2.48-3.17 4.55-1.39s5.25 2.5 4.32 6.2zM167.38 76.54L179.77 50c1.6-2.6 2.39-1.42 3.32.57q7.32 15.66 14.76 31.25c1.56 3.27 3.28 6.47 4.92 9.69 1.22 2.7 2.29 5.47 3.69 8.06 1.67 3.09 1.78 4.48-2.58 4.67-5.43.23-9.37-.76-10.77-6.69-.36-1.53-1.55-2.86-2.35-4.29-3.91-3.07-4.44-8-6.64-12-.75-1.36-.81-3.71-2.78-3.68-1.59 0-1.8 2.14-2.52 3.39-2.39 4.19-4 8.75-6.11 13.06-.79 1.61-1.32 3.44-3.05 4.43-4 6.21-9.41 7.72-14.66 4.09.56-5.91 4.23-10.6 6.41-15.87 1.49-3.6 2.73-7.51 5.97-10.14zM486.47 75.55c0 7.12 0 14.23-.07 21.34 0 2.15 1.24 5.32-1.8 6s-6.65 1.68-9.41-1c-1.56-1.53-2.69-2.59-5-1-7.31 4.86-14.7 4-22-.15-7.54-7-6.3-16.27-5.79-25.06.22-3.79 4.26-1.9 6.58-2.3 2.48-.43 4.09.75 4.3 3.51a76.75 76.75 0 00.92 8.84c1 5.16 4.17 7.73 9.25 7.84C469.16 93.6 473 91 474.2 86a24.4 24.4 0 00.69-5.38c0-2.37-1.49-5.65 1.52-6.56 3.25-1.01 7.18-1.98 10.06 1.49z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "AfyaVentures_svg__cls-2",
    d: "M418.16 46.61c-.34 7.3.9 8.74 8.86 8.42 3.85-.15 4.3 1.19 4.34 4.44.06 3.54-1.14 4.62-4.62 4.48s-7.13-.75-9.8 3.07c-1.44 2.06-8.81.69-10.54-1.51-.55-.69-1-1.4-1.89-1.37-3.46.1-4.14-2-4-4.83s.09-5.71 4.45-5.26c1.38.15 2.06-1.47 2.05-2.94s0-2.66 0-4c0-6 3.78-8.53 9.5-6.25 3.02 1.25 1.32 3.99 1.65 5.75zM359.11 61c5.54-6 11.86-8 19.29-6.34a15.54 15.54 0 0110.72 8.17c1.58 3 1.23 5.21-3 5-3.58-.2-6.95.06-10.3-2.44s-8.08-2.28-11.81.1c-4.77 3.06-9.91 2.1-15 2.22-.85 0-2-.14-2.08-1-.51-3.45-1.14-7.32.9-10.14 1.82-2.51 5.5-2 8.43-1.56s1.68 3.51 2.85 5.99z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "AfyaVentures_svg__cls-1",
    d: "M431.15 100.42c-5 5.66-16.42 4.59-22.78-2.12-2.33-7.25-1.17-14.72-1.3-22.09-.07-3.74 3.08-2.65 5.16-2.73 2.53-.09 5.72-.79 6 3.23.22 3.45 0 6.93.19 10.38.29 5.44 2.4 7.65 7.49 6.45s5.94.67 5.33 4.91a16.15 16.15 0 00-.09 1.97z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M512.16 99.46c-.42 2.9-1.65 5.07-5 4.65-3.07-.39-7 .31-7.09-4.66 0-7.25.2-14.5.07-21.75-.05-3.21 1.08-4.5 4.32-4.3 3.09.19 6.19 0 9.71 0-3.17 8.96-2.5 17.51-2.01 26.06z",
    fill: "#d00263"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "AfyaVentures_svg__cls-2",
    d: "M391.5 95.47l-.12 1.47c-.25 3.16 1.42 7.25-4.43 7.3s-6.81-.48-7.66-6.78c.06-6.41.41-12.84.1-19.24-.21-4.31 1.9-4.9 5.35-4.88s6.73-.16 6.62 4.85c-.12 5.81.08 11.52.14 17.28z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "AfyaVentures_svg__cls-4",
    d: "M358.59 98.46c.71 4.69-1.71 5.84-6 5.9-4.58.07-6.08-1.73-5.73-6.12.67-8.18-.51-16.43.66-24.6 10.89-.87 10.88-.87 10.9 10 .04 4.95.12 9.88.17 14.82zM512.35 63.72c2.95-3.78 5.51-7.15 9.61-8.42 2.41-.75 5.62-2.85 7.1 1.13 1.69 4.57-.21 9.65-3.72 10.31-7.54 1.44-15.19.48-22.79.5-1.54 0-2.34-1.07-2.34-2.64v-3.47c0-6.12 3.38-8.37 9.27-6.16 1.52.56 1.52.56 2.87 8.75z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "AfyaVentures_svg__cls-5",
    d: "M486.45 60.41c-.33 7.08-.69 7.29-7.05 7.1-8-.25-3.79-6.18-4.29-9.51-.92-6 4.16-4 7.1-4.2 5.63-.3 4.64 3.7 4.24 6.61zM442.12 59.31c-1-3.93.73-5.68 5.42-5.61 4.17.07 6.31.8 6 5.71-.4 7.74-.25 8-5.85 8s-5.54-.08-5.57-8.1zM464.21 75.61c-3-.46-5.13-1.91-5-5.44s2.35-4.81 5.61-4.77 4.91 1.94 4.86 5c-.04 3.28-1.99 5.06-5.47 5.21z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "AfyaVentures_svg__cls-2",
    d: "M40.58 78.52c6-3.63 9.65-2.83 13.51 3 .12 3.55 0 7-3.76 8.92-3.27 1.67-6.42 1.41-9.1-1.16-3.48-3.28-2.83-7.03-.65-10.76z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAfyaVentures);

/***/ }),

/***/ "./src/pages/sections/Banner/images/banner.jpg":
/*!*****************************************************!*\
  !*** ./src/pages/sections/Banner/images/banner.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-b5167d389df2744bae4dfa038eefe43d.jpg";

/***/ }),

/***/ "./src/pages/sections/Beneficios/Beneficios.module.scss":
/*!**************************************************************!*\
  !*** ./src/pages/sections/Beneficios/Beneficios.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"from320": "320px",
	"from360": "360px",
	"from400": "400px",
	"from480": "480px",
	"from600": "600px",
	"from720": "720px",
	"from840": "840px",
	"from960": "960px",
	"from1024": "1024px",
	"from1280": "1280px",
	"from1440": "1440px",
	"from1600": "1600px",
	"from1920": "1920px",
	"container": "Beneficios_container__3X2Br",
	"bgGray": "Beneficios_bgGray__fcGy2",
	"afyaVector": "Beneficios_afyaVector__2O8kG",
	"title": "Beneficios_title__18Q4P",
	"cardsWrapper": "Beneficios_cardsWrapper__3EWPZ"
};


/***/ }),

/***/ "./src/pages/sections/Beneficios/Beneficios.tsx":
/*!******************************************************!*\
  !*** ./src/pages/sections/Beneficios/Beneficios.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useWindowChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~hooks/useWindowChange */ "./src/hooks/useWindowChange.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/pages/sections/Beneficios/data.ts");
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~components/Container/Container */ "./src/components/Container/Container.tsx");
/* harmony import */ var _components_Swiper_Swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Swiper/Swiper */ "./src/pages/sections/Beneficios/components/Swiper/Swiper.tsx");
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Card/Card */ "./src/pages/sections/Beneficios/components/Card/Card.tsx");
/* harmony import */ var _Beneficios_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Beneficios.module.scss */ "./src/pages/sections/Beneficios/Beneficios.module.scss");
/* harmony import */ var _Beneficios_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Beneficios_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_icons_AfyaVector_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~assets/icons/AfyaVector.svg */ "./src/assets/icons/AfyaVector.svg");

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\pages\\sections\\Beneficios\\Beneficios.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import-helpers/order-imports */









function Beneficios() {
  const {
    0: isMobile,
    1: setIsMobile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const renderCards = () => _data__WEBPACK_IMPORTED_MODULE_3__["benefits"].map(benefit => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_Card__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({}, benefit), benefit.id, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 31
  }, this));

  const renderSwiper = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Swiper_Swiper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    totalItems: _data__WEBPACK_IMPORTED_MODULE_3__["benefits"].length,
    children: renderCards()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(() => {
    setIsMobile(window.innerWidth <= 720);
  }, []);
  Object(_hooks_useWindowChange__WEBPACK_IMPORTED_MODULE_2__["useWindowWidthChange"])(() => {
    setIsMobile(window.innerWidth <= 720);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "beneficios",
    className: _Beneficios_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    backgroundColor: _components_Container_Container__WEBPACK_IMPORTED_MODULE_4__["listBackground"].bkgdGray,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Beneficios_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bgGray
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_AfyaVector_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: _Beneficios_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.afyaVector
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: _Beneficios_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.title,
      children: "Benef\xEDcios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Beneficios_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.cardsWrapper,
      children: isMobile ? renderSwiper() : renderCards()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Beneficios);

/***/ }),

/***/ "./src/pages/sections/Beneficios/components/Card/Card.module.scss":
/*!************************************************************************!*\
  !*** ./src/pages/sections/Beneficios/components/Card/Card.module.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"from320": "320px",
	"from360": "360px",
	"from400": "400px",
	"from480": "480px",
	"from600": "600px",
	"from720": "720px",
	"from840": "840px",
	"from960": "960px",
	"from1024": "1024px",
	"from1280": "1280px",
	"from1440": "1440px",
	"from1600": "1600px",
	"from1920": "1920px",
	"container": "Card_container__F1pqz",
	"text": "Card_text__2LGeq",
	"title": "Card_title__2zle7"
};


/***/ }),

/***/ "./src/pages/sections/Beneficios/components/Card/Card.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/sections/Beneficios/components/Card/Card.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.scss */ "./src/pages/sections/Beneficios/components/Card/Card.module.scss");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\pages\\sections\\Beneficios\\components\\Card\\Card.tsx";


function Card(props) {
  const titleClass = [_Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text, _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(props.icon, {
      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: titleClass.join(' '),
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/pages/sections/Beneficios/components/Pagination/Pagination.module.scss":
/*!************************************************************************************!*\
  !*** ./src/pages/sections/Beneficios/components/Pagination/Pagination.module.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btnDot": "Pagination_btnDot__2QtSR",
	"dot": "Pagination_dot__1BoqW",
	"active": "Pagination_active__2Qgy3"
};


/***/ }),

/***/ "./src/pages/sections/Beneficios/components/Pagination/Pagination.tsx":
/*!****************************************************************************!*\
  !*** ./src/pages/sections/Beneficios/components/Pagination/Pagination.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.module.scss */ "./src/pages/sections/Beneficios/components/Pagination/Pagination.module.scss");
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\pages\\sections\\Beneficios\\components\\Pagination\\Pagination.tsx";


function Pagination(props) {
  const dotClass = [_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dot];

  const handleClick = value => {
    props.onChangeIndex(value);
  };

  if (props.value === props.currentIndex) {
    dotClass.push(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    type: "button",
    className: _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btnDot,
    onClick: () => handleClick(props.value),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: dotClass.join(' ')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/pages/sections/Beneficios/components/Swiper/Swiper.module.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/sections/Beneficios/components/Swiper/Swiper.module.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"from320": "320px",
	"from360": "360px",
	"from400": "400px",
	"from480": "480px",
	"from600": "600px",
	"from720": "720px",
	"from840": "840px",
	"from960": "960px",
	"from1024": "1024px",
	"from1280": "1280px",
	"from1440": "1440px",
	"from1600": "1600px",
	"from1920": "1920px",
	"container": "Swiper_container__1-p1I",
	"paginationContainer": "Swiper_paginationContainer__zw3Qp",
	"dotsList": "Swiper_dotsList__19Cx-"
};


/***/ }),

/***/ "./src/pages/sections/Beneficios/components/Swiper/Swiper.tsx":
/*!********************************************************************!*\
  !*** ./src/pages/sections/Beneficios/components/Swiper/Swiper.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable-views-utils */ "react-swipeable-views-utils");
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Pagination/Pagination */ "./src/pages/sections/Beneficios/components/Pagination/Pagination.tsx");
/* harmony import */ var _Swiper_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Swiper.module.scss */ "./src/pages/sections/Beneficios/components/Swiper/Swiper.module.scss");
/* harmony import */ var _Swiper_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Swiper_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\pages\\sections\\Beneficios\\components\\Swiper\\Swiper.tsx";





const AutoPlaySwipeableViews = Object(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_3__["autoPlay"])(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default.a);

function Swiper(props) {
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const numberSteps = props.totalItems;

  const handleChangeIndex = idx => {
    setIndex(idx);
  };

  const renderPagination = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Swiper_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.paginationContainer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Swiper_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dotsList,
      children: Array(numberSteps).fill(1).map((key, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: idx,
        currentIndex: index,
        onChangeIndex: handleChangeIndex
      }, `${idx + 1}`, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Swiper_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AutoPlaySwipeableViews, {
      index: index,
      onChangeIndex: handleChangeIndex,
      enableMouseEvents: true,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), renderPagination()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ "./src/pages/sections/Beneficios/data.ts":
/*!***********************************************!*\
  !*** ./src/pages/sections/Beneficios/data.ts ***!
  \***********************************************/
/*! exports provided: benefits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "benefits", function() { return benefits; });
/* harmony import */ var _images_comunity_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/comunity.svg */ "./src/pages/sections/Beneficios/images/comunity.svg");
/* harmony import */ var _images_connection_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/connection.svg */ "./src/pages/sections/Beneficios/images/connection.svg");
/* harmony import */ var _images_events_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/events.svg */ "./src/pages/sections/Beneficios/images/events.svg");
/* harmony import */ var _images_finance_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/finance.svg */ "./src/pages/sections/Beneficios/images/finance.svg");
/* harmony import */ var _images_mentor_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/mentor.svg */ "./src/pages/sections/Beneficios/images/mentor.svg");
/* harmony import */ var _images_tool_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/tool.svg */ "./src/pages/sections/Beneficios/images/tool.svg");






const benefits = [{
  id: 1,
  icon: _images_comunity_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  title: 'Comunidade Afya Ventures',
  description: 'uma rede única para troca de experiências e networking'
}, {
  id: 2,
  icon: _images_tool_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  title: 'Metodologias e ferramentas',
  description: 'para auxiliar no desenvolvimento e gestão do seu negócio'
}, {
  id: 3,
  icon: _images_mentor_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  title: 'Rede de mentores',
  description: 'composta por professores, empreendedores e executivos de mercado'
}, {
  id: 4,
  icon: _images_connection_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  title: 'Conexões com o mercado',
  description: 'para suporte na validação do produto e em esforços comerciais'
}, {
  id: 5,
  icon: _images_events_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  title: 'Eventos e workshops',
  description: 'conteúdo atualizado e baseado nos desafios dos projetos'
}, {
  id: 6,
  icon: _images_finance_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  title: 'Apoio financeiro',
  description: 'Investimento em projetos selecionados'
}];

/***/ }),

/***/ "./src/pages/sections/Beneficios/images/comunity.svg":
/*!***********************************************************!*\
  !*** ./src/pages/sections/Beneficios/images/comunity.svg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgComunity(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 41,
    height: 41,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M13.188 1h-9.75A2.438 2.438 0 001 3.438v9.75a2.438 2.438 0 002.438 2.437h9.75a2.437 2.437 0 002.437-2.438v-9.75A2.438 2.438 0 0013.187 1zM37.563 1h-9.75a2.438 2.438 0 00-2.438 2.438v9.75a2.437 2.437 0 002.438 2.437h9.75A2.437 2.437 0 0040 13.187v-9.75A2.438 2.438 0 0037.562 1zM13.188 25.375h-9.75A2.438 2.438 0 001 27.812v9.75A2.438 2.438 0 003.438 40h9.75a2.438 2.438 0 002.437-2.438v-9.75a2.437 2.437 0 00-2.438-2.438zM32.688 25.375V40m-7.313-7.313H40 25.375z",
    stroke: "#D10063",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgComunity);

/***/ }),

/***/ "./src/pages/sections/Beneficios/images/connection.svg":
/*!*************************************************************!*\
  !*** ./src/pages/sections/Beneficios/images/connection.svg ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgConnection(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 52,
    height: 39,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M26 19.442v.03M34.72 10.723a12.333 12.333 0 010 17.439M43.442 2a24.668 24.668 0 010 34.885M17.268 28.162a12.334 12.334 0 010-17.44M8.54 36.885A24.666 24.666 0 018.54 2",
    stroke: "#D10063",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgConnection);

/***/ }),

/***/ "./src/pages/sections/Beneficios/images/events.svg":
/*!*********************************************************!*\
  !*** ./src/pages/sections/Beneficios/images/events.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgEvents(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 44,
    height: 44,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M13.111 2H4.222A2.222 2.222 0 002 4.222v8.89c0 1.226.995 2.221 2.222 2.221h8.89a2.222 2.222 0 002.221-2.222V4.222A2.222 2.222 0 0013.111 2zM39.778 28.667h-8.889a2.222 2.222 0 00-2.222 2.222v8.889c0 1.227.995 2.222 2.222 2.222h8.889A2.222 2.222 0 0042 39.778v-8.889a2.222 2.222 0 00-2.222-2.222zM42 19.778V13.11a4.444 4.444 0 00-4.444-4.444H24.222L30.89 2M2 24.222v6.667a4.445 4.445 0 004.444 4.445h13.334L13.11 42",
    stroke: "#D10063",
    strokeWidth: 2.3,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgEvents);

/***/ }),

/***/ "./src/pages/sections/Beneficios/images/finance.svg":
/*!**********************************************************!*\
  !*** ./src/pages/sections/Beneficios/images/finance.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgFinance(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 38,
    height: 49,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M1 47.286V6.143A5.143 5.143 0 016.143 1h25.714A5.143 5.143 0 0137 6.143v41.143l-7.714-5.143-5.143 5.143L19 42.143l-5.143 5.143-5.143-5.143L1 47.286z",
    stroke: "#D10063",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M24.143 13.857h-6.429a3.857 3.857 0 000 7.714h2.572a3.858 3.858 0 010 7.714h-6.429m5.143 0v3.858M19 10v3.857",
    stroke: "#D10063",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgFinance);

/***/ }),

/***/ "./src/pages/sections/Beneficios/images/mentor.svg":
/*!*********************************************************!*\
  !*** ./src/pages/sections/Beneficios/images/mentor.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMentor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 60,
    height: 42,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M58.333 12.333L30 1 1.667 12.333 30 23.667l28.333-11.334zm0 0v17",
    stroke: "#D10063",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M13 16.867v15.3c0 2.254 1.791 4.416 4.98 6.01 3.187 1.594 7.511 2.49 12.02 2.49 4.509 0 8.833-.896 12.02-2.49 3.189-1.594 4.98-3.756 4.98-6.01v-15.3",
    stroke: "#D10063",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMentor);

/***/ }),

/***/ "./src/pages/sections/Beneficios/images/tool.svg":
/*!*******************************************************!*\
  !*** ./src/pages/sections/Beneficios/images/tool.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgTool(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 46,
    height: 46,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M10.874 18.124h7.25v-7.25L9.666 2.416a14.5 14.5 0 0119.333 19.333l14.5 14.5a5.126 5.126 0 11-7.25 7.25l-14.5-14.5A14.5 14.5 0 012.416 9.666l8.458 8.458z",
    stroke: "#D10063",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgTool);

/***/ }),

/***/ "./src/pages/sections/ExAluno/ExAluno.module.scss":
/*!********************************************************!*\
  !*** ./src/pages/sections/ExAluno/ExAluno.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"from320": "320px",
	"from360": "360px",
	"from400": "400px",
	"from480": "480px",
	"from600": "600px",
	"from720": "720px",
	"from840": "840px",
	"from960": "960px",
	"from1024": "1024px",
	"from1280": "1280px",
	"from1440": "1440px",
	"from1600": "1600px",
	"from1920": "1920px",
	"container": "ExAluno_container__1Kcjg",
	"afyaVector": "ExAluno_afyaVector__2_9Vy",
	"cardsContainer": "ExAluno_cardsContainer__1IAWE",
	"card": "ExAluno_card__2v1VA",
	"cardText": "ExAluno_cardText__34dAk",
	"btn": "ExAluno_btn__2fvWM",
	"btnText": "ExAluno_btnText__1LImd",
	"icon": "ExAluno_icon__25o3u",
	"cardButton": "ExAluno_cardButton__wOMUr"
};


/***/ }),

/***/ "./src/pages/sections/ExAluno/ExAluno.tsx":
/*!************************************************!*\
  !*** ./src/pages/sections/ExAluno/ExAluno.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_IconSend_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~assets/icons/IconSend.svg */ "./src/assets/icons/IconSend.svg");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~components/Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~components/Container/Container */ "./src/components/Container/Container.tsx");
/* harmony import */ var _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExAluno.module.scss */ "./src/pages/sections/ExAluno/ExAluno.module.scss");
/* harmony import */ var _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_Vector_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/Vector.svg */ "./src/pages/sections/ExAluno/images/Vector.svg");

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\pages\\sections\\ExAluno\\ExAluno.tsx";






function ExAluno() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "inscricao",
    className: _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    backgroundColor: _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__["listBackground"].bkgdDarkGray,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_images_Vector_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.afyaVector
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cardsContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.card,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cardText,
          children: ["\xC9 aluno, ex-aluno ou ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 34
          }, this), " colaborador e tem um projeto?"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
          to: "https://forms.office.com/r/A6KG3s3WRx",
          children: ["INSCREVA-SE PARA PARTICIPAR", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_IconSend_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.card,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cardText,
          children: ["Tem uma startup de sa\xFAde ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 38
          }, this), " ou educa\xE7\xE3o?"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
          to: "https://forms.office.com/r/PAjrMN3NQt",
          children: ["INSCREVA-SE PARA PARTICIPAR", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_IconSend_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: _ExAluno_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ExAluno);

/***/ }),

/***/ "./src/pages/sections/ExAluno/images/Vector.svg":
/*!******************************************************!*\
  !*** ./src/pages/sections/ExAluno/images/Vector.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgVector(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 555,
    height: 980,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    opacity: 0.5,
    d: "M.437 979.019L574.836.494l574.354 978.525H999.472L575.051 255.95l-.215-.367-.216.367-424.462 723.069H.437z",
    stroke: "#fff",
    strokeWidth: 0.5
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgVector);

/***/ }),

/***/ "./src/pages/sections/Footer/Footer.module.scss":
/*!******************************************************!*\
  !*** ./src/pages/sections/Footer/Footer.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"from320": "320px",
	"from360": "360px",
	"from400": "400px",
	"from480": "480px",
	"from600": "600px",
	"from720": "720px",
	"from840": "840px",
	"from960": "960px",
	"from1024": "1024px",
	"from1280": "1280px",
	"from1440": "1440px",
	"from1600": "1600px",
	"from1920": "1920px",
	"container": "Footer_container__MxEID",
	"contact": "Footer_contact__1RIzt",
	"icon": "Footer_icon__18oCP",
	"text": "Footer_text__2eBAu",
	"email": "Footer_email__3-d4X",
	"visible": "Footer_visible__36mdn",
	"btn": "Footer_btn__3P7Pg",
	"hidden": "Footer_hidden__1O9mj",
	"footer": "Footer_footer__1wm0K",
	"socialWrapper": "Footer_socialWrapper__13x7y",
	"social": "Footer_social__3PKVG",
	"addressWrapper": "Footer_addressWrapper__3Jbkm",
	"info": "Footer_info__uotM8",
	"address": "Footer_address__1S1AZ"
};


/***/ }),

/***/ "./src/pages/sections/Footer/Footer.tsx":
/*!**********************************************!*\
  !*** ./src/pages/sections/Footer/Footer.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~components/Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~components/Container/Container */ "./src/components/Container/Container.tsx");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.module.scss */ "./src/pages/sections/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_AV_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/AV.svg */ "./src/pages/sections/Footer/images/AV.svg");
/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/facebook.svg */ "./src/pages/sections/Footer/images/facebook.svg");
/* harmony import */ var _images_instagram_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/instagram.svg */ "./src/pages/sections/Footer/images/instagram.svg");
/* harmony import */ var _images_linkedin_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/linkedin.svg */ "./src/pages/sections/Footer/images/linkedin.svg");
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/twitter.svg */ "./src/pages/sections/Footer/images/twitter.svg");
/* harmony import */ var _images_youtube_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/youtube.svg */ "./src/pages/sections/Footer/images/youtube.svg");

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\pages\\sections\\Footer\\Footer.tsx";











function Footer() {
  const {
    0: isEmailVisible,
    1: setIsEmailVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const btnClass = [_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.btn];
  const emailClass = [_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.email];

  if (isEmailVisible) {
    btnClass.push(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.hidden);
    emailClass.push(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.visible);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    noPadding: true,
    id: "footer",
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    backgroundColor: _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__["listBackground"].bkgdDarkGray,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.contact,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_images_AV_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.text,
        children: "Entre em contato conosco por email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: emailClass.join(' '),
        children: "ventures@afya.com.br"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: btnClass.join(' '),
        onClick: () => setIsEmailVisible(true),
        children: "Ver email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.socialWrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://br.linkedin.com/company/afyaeducacional",
          target: "_blank",
          rel: "noreferrer",
          className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.social,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_images_linkedin_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.youtube.com/channel/UCdSm08ileKtHLbyWRm82tHQ",
          target: "_blank",
          rel: "noreferrer",
          className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.social,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_images_youtube_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.instagram.com/afyaeducacional/",
          target: "_blank",
          rel: "noreferrer",
          className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.social,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_images_instagram_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.facebook.com/afyaeducacional/",
          target: "_blank",
          rel: "noreferrer",
          className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.social,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_images_facebook_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://twitter.com/afyaeducacao?lang=pt-br",
          target: "_blank",
          rel: "noreferrer",
          className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.social,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_images_twitter_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.addressWrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.info,
          children: "All rights reserved. Copyright \xA9 2021 Afya Educacional."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: [_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.info, _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.address].join(' '),
          children: "Alameda Oscar Niemeyer, 119 - 5th floor - Vale do Sereno Nova Lima / MG - CEP: 34000-000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/pages/sections/Footer/images/AV.svg":
/*!*************************************************!*\
  !*** ./src/pages/sections/Footer/images/AV.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAv(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 68.34 42.88"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, ".AV_svg__cls-1{fill:#fff}"))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "AV_svg__Layer_2",
    "data-name": "Layer 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "AV_svg__Layer_1-2",
    "data-name": "Layer 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "AV_svg__cls-1",
    d: "M68.26 2.21c-.88 1.87-1.88 4-2.86 6.05q-7.14 15.27-14.29 30.52c-.45 1-.65 2.6-2.09 2.32-.7-.13-1.33-1.34-1.73-2.18-5.44-11.51-10.87-23-16.17-34.58-.54-1.18-2.74-3-.09-4.06 2.13-.87 3.57.36 4.55 2.54 3.69 8.12 7.53 16.18 11.36 24.24.54 1.14.71 3 2.19 3s1.58-1.83 2.11-3c3.67-7.77 7.29-15.56 10.95-23.34C63 2 63.7-.06 66.25.09c1.18.06 2.43.06 2.01 2.12zM18.84 12.32c-3.63 7.73-7.18 15.3-10.75 22.87-.56 1.2-1.15 2.38-1.72 3.58C5.3 41 4.14 44.09 1.16 42.38c-2.7-1.56.06-3.83.82-5.49 5-10.82 10.09-21.56 15.22-32.3.52-1.09.48-3 2.19-2.85 1.26.09 1.48 1.66 2 2.66Q29.48 21.68 37.51 39c.49 1.09 2.31 2.7 0 3.58-1.77.66-3.38.11-4.36-2-3.53-7.7-7.15-15.3-10.81-22.9-.84-1.74-1.21-3.8-3.5-5.36z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "AV_svg__cls-1",
    d: "M19.32 36.88c-1.89 0-3.11-1-3.2-2.9A2.81 2.81 0 0119 30.83c2.07-.1 3.45.88 3.42 3.11.02 1.97-1.26 2.82-3.1 2.94z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAv);

/***/ }),

/***/ "./src/pages/sections/Footer/images/facebook.svg":
/*!*******************************************************!*\
  !*** ./src/pages/sections/Footer/images/facebook.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgFacebook(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3V3h-3a5 5 0 00-5 5v2H7z",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgFacebook);

/***/ }),

/***/ "./src/pages/sections/Footer/images/instagram.svg":
/*!********************************************************!*\
  !*** ./src/pages/sections/Footer/images/instagram.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgInstagram(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4z",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M12 15a3 3 0 100-6 3 3 0 000 6zM16.5 7.5v.001",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgInstagram);

/***/ }),

/***/ "./src/pages/sections/Footer/images/linkedin.svg":
/*!*******************************************************!*\
  !*** ./src/pages/sections/Footer/images/linkedin.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLinkedin(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM8 11v5M8 8v.01M12 16v-5",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M16 16v-3a2 2 0 10-4 0",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgLinkedin);

/***/ }),

/***/ "./src/pages/sections/Footer/images/twitter.svg":
/*!******************************************************!*\
  !*** ./src/pages/sections/Footer/images/twitter.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgTwitter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753C20.18 7.773 21.692 5.25 22 4.009v.001z",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgTwitter);

/***/ }),

/***/ "./src/pages/sections/Footer/images/youtube.svg":
/*!******************************************************!*\
  !*** ./src/pages/sections/Footer/images/youtube.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgYoutube(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M17 5H7a4 4 0 00-4 4v6a4 4 0 004 4h10a4 4 0 004-4V9a4 4 0 00-4-4z",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M10 9l5 3-5 3V9z",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgYoutube);

/***/ }),

/***/ "./src/pages/sections/JaFazParte/JaFazParte.module.scss":
/*!**************************************************************!*\
  !*** ./src/pages/sections/JaFazParte/JaFazParte.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"from320": "320px",
	"from360": "360px",
	"from400": "400px",
	"from480": "480px",
	"from600": "600px",
	"from720": "720px",
	"from840": "840px",
	"from960": "960px",
	"from1024": "1024px",
	"from1280": "1280px",
	"from1440": "1440px",
	"from1600": "1600px",
	"from1920": "1920px",
	"companies": "JaFazParte_companies__1BUdd",
	"title": "JaFazParte_title__3rhAg",
	"logos": "JaFazParte_logos__dzp85"
};


/***/ }),

/***/ "./src/pages/sections/JaFazParte/JaFazParte.tsx":
/*!******************************************************!*\
  !*** ./src/pages/sections/JaFazParte/JaFazParte.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_logos_cliquefarma_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~assets/logos/cliquefarma.svg */ "./src/assets/logos/cliquefarma.svg");
/* harmony import */ var _assets_logos_iclinic_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~assets/logos/iclinic.svg */ "./src/assets/logos/iclinic.svg");
/* harmony import */ var _assets_logos_medicalharbor_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~assets/logos/medicalharbor.svg */ "./src/assets/logos/medicalharbor.svg");
/* harmony import */ var _assets_logos_medicinae_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~assets/logos/medicinae.svg */ "./src/assets/logos/medicinae.svg");
/* harmony import */ var _assets_logos_medphone_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~assets/logos/medphone.svg */ "./src/assets/logos/medphone.svg");
/* harmony import */ var _assets_logos_pebmed_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~assets/logos/pebmed.svg */ "./src/assets/logos/pebmed.svg");
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~components/Container/Container */ "./src/components/Container/Container.tsx");
/* harmony import */ var _JaFazParte_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./JaFazParte.module.scss */ "./src/pages/sections/JaFazParte/JaFazParte.module.scss");
/* harmony import */ var _JaFazParte_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_JaFazParte_module_scss__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\pages\\sections\\JaFazParte\\JaFazParte.tsx";









const JaFazParte = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "jafazparte",
    backgroundColor: _components_Container_Container__WEBPACK_IMPORTED_MODULE_7__["listBackground"].bkgdGray,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _JaFazParte_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.companies,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: _JaFazParte_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.title,
        children: "Startups que j\xE1 fazem parte de nosso ecossistema"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _JaFazParte_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.logos,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_logos_pebmed_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_logos_medicinae_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_logos_medphone_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_logos_iclinic_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_logos_medicalharbor_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_logos_cliquefarma_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (JaFazParte);

/***/ }),

/***/ "./src/pages/sections/OqueE/OqueE.module.scss":
/*!****************************************************!*\
  !*** ./src/pages/sections/OqueE/OqueE.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"from320": "320px",
	"from360": "360px",
	"from400": "400px",
	"from480": "480px",
	"from600": "600px",
	"from720": "720px",
	"from840": "840px",
	"from960": "960px",
	"from1024": "1024px",
	"from1280": "1280px",
	"from1440": "1440px",
	"from1600": "1600px",
	"from1920": "1920px",
	"container": "OqueE_container__3iTP2",
	"circleTop": "OqueE_circleTop__2STtd",
	"main": "OqueE_main__3Buv-",
	"title": "OqueE_title__39Y91",
	"about": "OqueE_about__1FKw3",
	"wrapperImage": "OqueE_wrapperImage__oHzx9",
	"circleBotton": "OqueE_circleBotton__343BA",
	"divImage": "OqueE_divImage__1uw_2"
};


/***/ }),

/***/ "./src/pages/sections/OqueE/OqueE.tsx":
/*!********************************************!*\
  !*** ./src/pages/sections/OqueE/OqueE.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~assets/icons/circle.svg */ "./src/assets/icons/circle.svg");
/* harmony import */ var _assets_icons_circleBotton_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~assets/icons/circleBotton.svg */ "./src/assets/icons/circleBotton.svg");
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~components/Container/Container */ "./src/components/Container/Container.tsx");
/* harmony import */ var _public_images_banner_about_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~public/images/banner_about.png */ "./public/images/banner_about.png");
/* harmony import */ var _public_images_banner_about_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_images_banner_about_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OqueE_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OqueE.module.scss */ "./src/pages/sections/OqueE/OqueE.module.scss");
/* harmony import */ var _OqueE_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_OqueE_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\personal_projects\\delivery-app\\src\\pages\\sections\\OqueE\\OqueE.tsx";






const OqueE = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "sobre",
    backgroundColor: _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__["listBackground"].bkgdWhite,
    className: _OqueE_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    noPadding: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: _OqueE_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.circleTop
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _OqueE_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _OqueE_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.about,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: _OqueE_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
          children: "O que \xE9 o Afya Ventures?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Afya Ventures \xE9 a materializa\xE7\xE3o do investimento da Afya em seu maior ativo ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "as pessoas do seu ecossistema!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Trata-se de um ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "centro de empreendedorismo unificado"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 28
          }, undefined), ", onde alunos, ex-alunos, professores e colaboradores contar\xE3o com o suporte da companhia para desenvolver seus projetos."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Al\xE9m disso, buscamos iniciativas de mercado que tem sinergia com a vis\xE3o e", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "estrat\xE9gia da Afya para acelerar e investir."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "Nosso objetivo \xE9 fomentar o empreendedorismo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined), " nas nossas Institui\xE7\xF5es de Ensino, o intraempreendedorismo corporativo e o ecossistema de inova\xE7\xE3o de sa\xFAde e educa\xE7\xE3o brasileiro."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _OqueE_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.wrapperImage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_icons_circleBotton_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: _OqueE_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.circleBotton
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _OqueE_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.divImage,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_images_banner_about_png__WEBPACK_IMPORTED_MODULE_4___default.a,
            alt: "people looking at a notebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (OqueE);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "react-swipeable-views-utils":
/*!**********************************************!*\
  !*** external "react-swipeable-views-utils" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views-utils");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9iYW5uZXJfYWJvdXQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvQWZ5YVZlY3Rvci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9JY29uU2VuZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9jaXJjbGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvY2lyY2xlQm90dG9uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xvZ29zL2NsaXF1ZWZhcm1hLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xvZ29zL2ljbGluaWMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nb3MvbWVkaWNhbGhhcmJvci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2dvcy9tZWRpY2luYWUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nb3MvbWVkcGhvbmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nb3MvcGVibWVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci9Db250YWluZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZVdpbmRvd0NoYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgucGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0Jhbm5lci9CYW5uZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0Jhbm5lci9CYW5uZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZWN0aW9ucy9CYW5uZXIvaW1hZ2VzL0FmeWFWZWN0b3Iuc3ZnIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZWN0aW9ucy9CYW5uZXIvaW1hZ2VzL0FmeWFWZW50dXJlcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0Jhbm5lci9pbWFnZXMvYmFubmVyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VjdGlvbnMvQmVuZWZpY2lvcy9CZW5lZmljaW9zLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZWN0aW9ucy9CZW5lZmljaW9zL0JlbmVmaWNpb3MudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZWN0aW9ucy9CZW5lZmljaW9zL2NvbXBvbmVudHMvQ2FyZC9DYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZWN0aW9ucy9CZW5lZmljaW9zL2NvbXBvbmVudHMvQ2FyZC9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VjdGlvbnMvQmVuZWZpY2lvcy9jb21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VjdGlvbnMvQmVuZWZpY2lvcy9jb21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0JlbmVmaWNpb3MvY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZWN0aW9ucy9CZW5lZmljaW9zL2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0JlbmVmaWNpb3MvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VjdGlvbnMvQmVuZWZpY2lvcy9pbWFnZXMvY29tdW5pdHkuc3ZnIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZWN0aW9ucy9CZW5lZmljaW9zL2ltYWdlcy9jb25uZWN0aW9uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VjdGlvbnMvQmVuZWZpY2lvcy9pbWFnZXMvZXZlbnRzLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VjdGlvbnMvQmVuZWZpY2lvcy9pbWFnZXMvZmluYW5jZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0JlbmVmaWNpb3MvaW1hZ2VzL21lbnRvci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0JlbmVmaWNpb3MvaW1hZ2VzL3Rvb2wuc3ZnIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZWN0aW9ucy9FeEFsdW5vL0V4QWx1bm8ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0V4QWx1bm8vRXhBbHVuby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0V4QWx1bm8vaW1hZ2VzL1ZlY3Rvci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0Zvb3Rlci9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZWN0aW9ucy9Gb290ZXIvaW1hZ2VzL0FWLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VjdGlvbnMvRm9vdGVyL2ltYWdlcy9mYWNlYm9vay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0Zvb3Rlci9pbWFnZXMvaW5zdGFncmFtLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VjdGlvbnMvRm9vdGVyL2ltYWdlcy9saW5rZWRpbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0Zvb3Rlci9pbWFnZXMvdHdpdHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0Zvb3Rlci9pbWFnZXMveW91dHViZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL0phRmF6UGFydGUvSmFGYXpQYXJ0ZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VjdGlvbnMvSmFGYXpQYXJ0ZS9KYUZhelBhcnRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VjdGlvbnMvT3F1ZUUvT3F1ZUUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NlY3Rpb25zL09xdWVFL09xdWVFLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN3aXBlYWJsZS12aWV3c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN3aXBlYWJsZS12aWV3cy11dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwib25DbGljayIsInRvIiwiYnV0dG9uQ2xhc3MiLCJzY3NzIiwiYnRuIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJyZW5kZXJCdXR0b24iLCJqb2luIiwicmVuZGVyTGluayIsInB1c2giLCJsaXN0QmFja2dyb3VuZCIsIkNvbnRhaW5lciIsInByb3BzIiwiQ29udGFpbmVyQ2xhc3MiLCJzdHlsZXMiLCJzZWN0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwibm9QYWRkaW5nIiwiaWQiLCJ1c2VXaW5kb3dXaWR0aENoYW5nZSIsImNhbGxiYWNrIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSG9tZSIsImNvbnRhaW5lciIsIm1haW4iLCJCYW5uZXIiLCJpbWFnZSIsImltZyIsImJnR3JhZGllbnQiLCJhZnlhVmVjdG9yIiwiY29udGVudCIsImxvZ28iLCJyZWxlYXNlIiwiZGF0ZVdyYXBwZXIiLCJkaXZpZGVyIiwiZGF0ZSIsInNjaGVkdWxlIiwiYnRuSWNvbiIsIkJlbmVmaWNpb3MiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwidXNlU3RhdGUiLCJyZW5kZXJDYXJkcyIsImJlbmVmaXRzIiwibWFwIiwiYmVuZWZpdCIsInJlbmRlclN3aXBlciIsImxlbmd0aCIsInVzZUxheW91dEVmZmVjdCIsImJrZ2RHcmF5IiwiYmdHcmF5IiwidGl0bGUiLCJjYXJkc1dyYXBwZXIiLCJDYXJkIiwidGl0bGVDbGFzcyIsInRleHQiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJQYWdpbmF0aW9uIiwiZG90Q2xhc3MiLCJkb3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlSW5kZXgiLCJjdXJyZW50SW5kZXgiLCJhY3RpdmUiLCJidG5Eb3QiLCJBdXRvUGxheVN3aXBlYWJsZVZpZXdzIiwiYXV0b1BsYXkiLCJTd2lwZWFibGVWaWV3cyIsIlN3aXBlciIsImluZGV4Iiwic2V0SW5kZXgiLCJudW1iZXJTdGVwcyIsInRvdGFsSXRlbXMiLCJoYW5kbGVDaGFuZ2VJbmRleCIsImlkeCIsInJlbmRlclBhZ2luYXRpb24iLCJwYWdpbmF0aW9uQ29udGFpbmVyIiwiZG90c0xpc3QiLCJBcnJheSIsImZpbGwiLCJrZXkiLCJDb211bml0eVNWRyIsIlRvb2xTVkciLCJNZW50b3JTVkciLCJDb25uZWN0aW9uU1ZHIiwiRXZlbnRTVkciLCJGaW5hbmNlU1ZHIiwiRXhBbHVubyIsImJrZ2REYXJrR3JheSIsImNhcmRzQ29udGFpbmVyIiwiY2FyZCIsImNhcmRUZXh0IiwiRm9vdGVyIiwiaXNFbWFpbFZpc2libGUiLCJzZXRJc0VtYWlsVmlzaWJsZSIsImJ0bkNsYXNzIiwiZW1haWxDbGFzcyIsImVtYWlsIiwiaGlkZGVuIiwidmlzaWJsZSIsImNvbnRhY3QiLCJmb290ZXIiLCJzb2NpYWxXcmFwcGVyIiwic29jaWFsIiwiYWRkcmVzc1dyYXBwZXIiLCJpbmZvIiwiYWRkcmVzcyIsIkphRmF6UGFydGUiLCJjb21wYW5pZXMiLCJsb2dvcyIsIk9xdWVFIiwiYmtnZFdoaXRlIiwiY2lyY2xlVG9wIiwiYWJvdXQiLCJ3cmFwcGVySW1hZ2UiLCJjaXJjbGVCb3R0b24iLCJkaXZJbWFnZSIsIkltYWdlQWJvdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwwRjs7Ozs7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ZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgucGFnZS50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyX2Fib3V0LWYxMWQzODFkODY0MGZhZGQ1YzJiNjE2OGM5YzdmNDRjLnBuZ1wiOyIsInZhciBfcGF0aDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0FmeWFWZWN0b3IocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogNTU1LFxuICAgIGhlaWdodDogOTM2LFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIG9wYWNpdHk6IDAuNSxcbiAgICBkOiBcIk0uNDQ3IDkzNS43NUw1NzUuMDIxLjQ3OCAxMTQ5LjU1IDkzNS43NUg5OTkuNzkxTDU3NS4yMzQgMjQ0LjYzMWwtLjIxMy0uMzQ3LS4yMTMuMzQ3TDE1MC4yMDkgOTM1Ljc1SC40NDd6XCIsXG4gICAgc3Ryb2tlOiBcIiNmZmZcIixcbiAgICBzdHJva2VXaWR0aDogMC41XG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0FmeWFWZWN0b3I7IiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnSWNvblNlbmQocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjcsXG4gICAgaGVpZ2h0OiAyNixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMC4zNTMgMTIuOTU0aDE1LjU1Nk0yNS45MSAxMi45NTVMOC41ODYgMjEuMDg3YS41NS41NSAwIDAxLS43MDgtLjcwOGwyLjQ3NS03LjQyNEw3Ljg3OCA1LjUzYS41NS41NSAwIDAxLjcwOC0uNzA3bDE3LjMyNCA4LjEzMnpcIixcbiAgICBzdHJva2U6IFwiI2ZmZlwiLFxuICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ljb25TZW5kOyIsInZhciBfbWFzaywgX2csIF9jaXJjbGUsIF9kZWZzO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnQ2lyY2xlKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMTE2LFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfbWFzayB8fCAoX21hc2sgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1hc2tcIiwge1xuICAgIGlkOiBcImNpcmNsZV9zdmdfX2FcIixcbiAgICBtYXNrVW5pdHM6IFwidXNlclNwYWNlT25Vc2VcIixcbiAgICB4OiAwLFxuICAgIHk6IDY5LFxuICAgIHdpZHRoOiA0NyxcbiAgICBoZWlnaHQ6IDQ3XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDYuNDgzIDExNS44MjVhNDYuNTAxIDQ2LjUwMSAwIDAxLTMyLjg2OC0xMy42MTNBNDYuNDc4IDQ2LjQ3OCAwIDAxMCA2OS4zNDhoNDYuNDgzdjQ2LjQ3N3pcIixcbiAgICBmaWxsOiBcIiNmZmZcIlxuICB9KSkpLCBfZyB8fCAoX2cgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGZpbHRlcjogXCJ1cmwoI2NpcmNsZV9zdmdfX2ZpbHRlcjBfZilcIixcbiAgICBtYXNrOiBcInVybCgjY2lyY2xlX3N2Z19fYSlcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImVsbGlwc2VcIiwge1xuICAgIGN4OiAzOS4wNzEsXG4gICAgY3k6IDg4LjU4MSxcbiAgICByeDogMjguODc0LFxuICAgIHJ5OiAyOC44NzgsXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtOTAgMzkuMDcxIDg4LjU4MSlcIixcbiAgICBmaWxsOiBcIiNENDAwNTRcIlxuICB9KSkpLCBfY2lyY2xlIHx8IChfY2lyY2xlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiA2Mi45ODEsXG4gICAgY3k6IDUyLjMyNyxcbiAgICByOiA1Mi4zMjcsXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxODAgNjIuOTggNTIuMzI3KVwiLFxuICAgIGZpbGw6IFwiI0Q0MDA1NFwiXG4gIH0pKSwgX2RlZnMgfHwgKF9kZWZzID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkZWZzXCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZmlsdGVyXCIsIHtcbiAgICBpZDogXCJjaXJjbGVfc3ZnX19maWx0ZXIwX2ZcIixcbiAgICB4OiAtNDguMjg2LFxuICAgIHk6IDEuMjI3LFxuICAgIHdpZHRoOiAxNzQuNzE1LFxuICAgIGhlaWdodDogMTc0LjcwOCxcbiAgICBmaWx0ZXJVbml0czogXCJ1c2VyU3BhY2VPblVzZVwiLFxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM6IFwic1JHQlwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZmVGbG9vZFwiLCB7XG4gICAgZmxvb2RPcGFjaXR5OiAwLFxuICAgIHJlc3VsdDogXCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmZUJsZW5kXCIsIHtcbiAgICBcImluXCI6IFwiU291cmNlR3JhcGhpY1wiLFxuICAgIGluMjogXCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIixcbiAgICByZXN1bHQ6IFwic2hhcGVcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmZUdhdXNzaWFuQmx1clwiLCB7XG4gICAgc3RkRGV2aWF0aW9uOiAyOS4yNCxcbiAgICByZXN1bHQ6IFwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1clwiXG4gIH0pKSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2lyY2xlOyIsInZhciBfbWFzaywgX2csIF9jaXJjbGUsIF9kZWZzO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnQ2lyY2xlQm90dG9uKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDIwMCxcbiAgICBoZWlnaHQ6IDIwMCxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX21hc2sgfHwgKF9tYXNrID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtYXNrXCIsIHtcbiAgICBpZDogXCJjaXJjbGVCb3R0b25fc3ZnX19hXCIsXG4gICAgbWFza1VuaXRzOiBcInVzZXJTcGFjZU9uVXNlXCIsXG4gICAgeDogMTE5LFxuICAgIHk6IDAsXG4gICAgd2lkdGg6IDgxLFxuICAgIGhlaWdodDogODFcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMTkuNTMzIDBhODAuMjcyIDgwLjI3MiAwIDAxNzQuMTU1IDQ5LjU0MiA4MC4yMzkgODAuMjM5IDAgMDE2LjExIDMwLjcxMmgtODAuMjY1VjB6XCIsXG4gICAgZmlsbDogXCIjZmZmXCJcbiAgfSkpKSwgX2cgfHwgKF9nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBmaWx0ZXI6IFwidXJsKCNjaXJjbGVCb3R0b25fc3ZnX19maWx0ZXIwX2YpXCIsXG4gICAgbWFzazogXCJ1cmwoI2NpcmNsZUJvdHRvbl9zdmdfX2EpXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjeDogMTMyLjMzMSxcbiAgICBjeTogNDcuMDQyLFxuICAgIHJ4OiA0OS44NTksXG4gICAgcnk6IDQ5Ljg2NSxcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKDkwIDEzMi4zMzEgNDcuMDQyKVwiLFxuICAgIGZpbGw6IFwiI0Q0MDA1NFwiXG4gIH0pKSksIF9jaXJjbGUgfHwgKF9jaXJjbGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IDkxLjA0NixcbiAgICBjeTogMTA5LjY0NSxcbiAgICByOiA5MC4zNTUsXG4gICAgZmlsbDogXCIjRDQwMDU0XCJcbiAgfSkpLCBfZGVmcyB8fCAoX2RlZnMgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRlZnNcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmaWx0ZXJcIiwge1xuICAgIGlkOiBcImNpcmNsZUJvdHRvbl9zdmdfX2ZpbHRlcjBfZlwiLFxuICAgIHg6IDIzLjk4NyxcbiAgICB5OiAtNjEuMjk2LFxuICAgIHdpZHRoOiAyMTYuNjg5LFxuICAgIGhlaWdodDogMjE2LjY3NyxcbiAgICBmaWx0ZXJVbml0czogXCJ1c2VyU3BhY2VPblVzZVwiLFxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM6IFwic1JHQlwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZmVGbG9vZFwiLCB7XG4gICAgZmxvb2RPcGFjaXR5OiAwLFxuICAgIHJlc3VsdDogXCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmZUJsZW5kXCIsIHtcbiAgICBcImluXCI6IFwiU291cmNlR3JhcGhpY1wiLFxuICAgIGluMjogXCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIixcbiAgICByZXN1bHQ6IFwic2hhcGVcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmZUdhdXNzaWFuQmx1clwiLCB7XG4gICAgc3RkRGV2aWF0aW9uOiAyOS4yNCxcbiAgICByZXN1bHQ6IFwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1clwiXG4gIH0pKSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2lyY2xlQm90dG9uOyIsInZhciBfcGF0aCwgX3BhdGgyLCBfcGF0aDMsIF9wYXRoNCwgX3BhdGg1LCBfcGF0aDYsIF9wYXRoNywgX3BhdGg4LCBfcGF0aDk7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdDbGlxdWVmYXJtYShwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyMDQsXG4gICAgaGVpZ2h0OiA1MixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMzIuMjUxIDE5LjYwOWMwIDEzLjY1My4xNDMgMTMuNjUzLS4xNzIgMTMuNjUzaC00LjIzNmMwLTUuMzY2LjE3Mi0xMS42ODcuMTcyLTE2Ljg1NiAzLjU3OCAwIDUuNDk1LjA1NiAxMC4zMzIuMDU2IDAgMy4wMzUtLjQwMSAzLjE0Ny02LjA5NiAzLjE0N3pcIixcbiAgICBmaWxsOiBcIiM5Nzk3OTdcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNjIuNzg4IDE4LjgyMmMtLjA4Ni0xLjY4NS0xLjY2LTIuMzYtMy4yOTEtMi44MS00LjU3OSAwLTUuMDY2LS40NzctNS4wNjYgMS4yNjUuMzQzLS40MjEtMS4zNDUgMS4xNTItLjk3MyAxLjM0OCA1LjA5NC0xLjQzMiA3LjMyNy4wODUgNy4zMjcgMy40MjggMCAxMy4wMzUtLjg4OCAxMS40MzQgMi40ODkgMTEuNDM0LS4wMjgtNC4xMDItLjQ4Ni05LjEwMy0uNDg2LTE0LjY2NXpcIixcbiAgICBmaWxsOiBcIiM5Nzk3OTdcIixcbiAgICBzdHJva2U6IFwiIzk3OTc5N1wiLFxuICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwXG4gIH0pKSwgX3BhdGgzIHx8IChfcGF0aDMgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE0NC4wNzEgMTcuNDQ1Yy0zLjcyMSAwLTQuMjA3LTEuNDMyLTQuMjA3IDEuNzE0IDAgMy44NzctLjE3MiAxMC40NS0uMDg2IDE0LjMyOCAyLjAzMi4wNTYgMi44NjIuNjE4IDIuODYyLS44MTUgMC0yLjcyNS4yODYtOS45NDUuNDU4LTEyLjY3LjI4Ni0uNTM0LjU3Mi0xLjA5Ni44NTgtMS42MyA0LjMyMi0xLjY4NSA2LjU1NC0uNTA1IDYuMzgyIDQuMTg2LS4wODYgMi42MTMtLjAyOCA4LjA5MS0uMDI4IDEwLjcwNGgyLjcxOWMwLTMuODc3LS4wMjktMTAuNzA0LjM3Mi0xNC42MzctMi45Mi0xLjQ4OC01LjYzOC00Ljk0NC05LjMzLTEuMTh6XCIsXG4gICAgZmlsbDogXCIjOTc5Nzk3XCIsXG4gICAgc3Ryb2tlOiBcIiM5Nzk3OTdcIixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiAxMFxuICB9KSksIF9wYXRoNCB8fCAoX3BhdGg0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNi40MjcgMTkuNDRzLTQuMzc4LTQuNjYzLTcuNDk4LTEuNzk4YzAgMC0zLjQ2MyAxLjI2NC0xLjYzMSA2LjYzIDAgMCA0LjAwNyA3LjY5OCA5LjEzLjloMi45MTl2Ni43OThzLTguMDQyIDMuOTMzLTEzLjUwOSAxLjA2N2MtNS40NjYtMi44NjUtOC4zODUtMTEuNjMtMi45MTktMTguMjYgMCAwIDEuMDg4LTIuMzMyIDQuMzc5LTMuNTk2IDAgMCA2Ljc1NC0yLjE2MyAxMi4wNDkgMS43OTh2Ni4yNjVsLTIuOTIuMTk2ek0yNy45MzMgMTAuNjJoLTYuOTI2djIyLjY0Mmg2LjkyNlYxMC42MTl6TTM3LjQzNCAxMC42MkgzMC42OHY1Ljc4Nmg2Ljc1NFYxMC42MnpNMzcuNDM0IDE4LjA5MkgzMC42OHYxNS4xNDJoNi43NTRWMTguMDkyek02MC41NTkgMTYuNDA2djEzLjYyNXMxLjM0NSA1LjM2NiA4LjA0MiAyLjI3NmwuNzQ0LTEuMThoMi4zMTh2Mi4xMzVoNS40NjdWMTYuNDA2aC02LjQ0djExLjgyN3MtMi4wNiAyLjM4OC00LjE1IDBWMTYuNDA2SDYwLjU2ek05My41IDI2Ljg4NXMtLjgzIDIuNjEyLTIuMjA0IDIuNjEyaC0yLjkxOXMtMy43NS4zNjYtMy43NS00LjY2M2gxMS4yNDhWMTkuODlzLS4wODUtMy4wMzQtMy4wMDUtMy40ODRoLTguODQzcy00LjAwNyAyLjE2My00LjAwNyA0Ljc0OHY3Ljg5NHMuNTQ0IDQuMjE0IDUuMDA5IDQuMjE0aDExLjc5di02LjM3N0g5My41em0tNi4yMS03LjA4YzUuNjA5IDAgNC41MjEgMy40ODQgNC41MjEgMy40ODRoLTYuNDk2Yy0yLjk3NyAwIDEuOTc1LTMuNDg0IDEuOTc1LTMuNDg0ek00Mi43MjkgMTYuNDA2Yy02LjAzOSA2Ljk5NS0zLjAwNSAxMi44MS0uNDU4IDE1LjIyNyAyLjU0NyAyLjQxNiA4LjMuMjggOC4zLjI4djYuOTk2aDYuOTU0VjE2LjQwNkg0Mi43M3ptOC44MTUgMTIuMTM2aC01LjAwOXMtMy45Mi0zLjcwOCAwLTcuNTg1aDUuMDA5djcuNTg1elwiLFxuICAgIGZpbGw6IFwiIzk3OTc5N1wiXG4gIH0pKSwgX3BhdGg1IHx8IChfcGF0aDUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTEwMC41MTIgMTkuODA1aC0yLjY5di0zLjM5OWgzLjE3NnYtMi45NXMtLjM3Mi0zLjkzMyAyLjY5MS0zLjkzM2g2LjY5NnYzLjcwOWgtMy43NzdzLTIuOTc3LS40NzgtMi45NzcgMS44NTR2Mi4wMjJoNS4zNTJ2Mi42OTdoLTQuODY1djEzLjQ1N2gtMy42NjNsLjA1Ny0xMy40NTd6XCIsXG4gICAgZmlsbDogXCIjOTc5Nzk3XCIsXG4gICAgc3Ryb2tlOiBcIiM5Nzk3OTdcIixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiAxMFxuICB9KSksIF9wYXRoNiB8fCAoX3BhdGg2ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMTkuNTQ0IDE2LjQwNmgtOC4xNTd2My40aDkuMDczdjIuMzg3aC01Ljg5NmMtNC45OCAwLTQuMjA3IDIuNjQtNC4yMDcgMi42NHY1LjE0MmMwIDIuNTU2IDIuNjA0IDIuNjQgMi42MDQgMi42NGg0Ljk1MWMwLTEuODU0IDIuNzQ4LTEuNDYgMi43NDgtMS40NnYxLjQ2aDIuNTQ3VjE5LjgzNGMwLTQuMTAxLTMuNjYzLTMuNDI3LTMuNjYzLTMuNDI3em0tMS43MTcgMTQuNTI0aC00LjYwOHMtLjg1OS0uNTYyLS44NTktMi4xMzV2LTIuNjRzMC0xLjM3NyAzLjIzNC0xLjM3N2g0LjYzN3YzLjc2NGMwIC4wMjguNTQzIDIuMzg4LTIuNDA0IDIuMzg4elwiLFxuICAgIGZpbGw6IFwiIzk3OTc5N1wiLFxuICAgIHN0cm9rZTogXCIjOTc5Nzk3XCIsXG4gICAgc3Ryb2tlV2lkdGg6IDAuNzUsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTBcbiAgfSkpLCBfcGF0aDcgfHwgKF9wYXRoNyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTgzLjMzNyA0MC4wMDRjMTEuMDk2IDAgMjAuMDkxLTguODMgMjAuMDkxLTE5LjcyMSAwLTEwLjg5Mi04Ljk5NS0xOS43MjEtMjAuMDkxLTE5LjcyMS0xMS4wOTYgMC0yMC4wOTEgOC44My0yMC4wOTEgMTkuNzIxIDAgMTAuODkyIDguOTk1IDE5LjcyMSAyMC4wOTEgMTkuNzIxelwiLFxuICAgIHN0cm9rZTogXCIjOTc5Nzk3XCIsXG4gICAgc3Ryb2tlV2lkdGg6IDEuNSxcbiAgICBzdHJva2VNaXRlcmxpbWl0OiAxMFxuICB9KSksIF9wYXRoOCB8fCAoX3BhdGg4ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xOTguNTA1IDM4LjQzbC0xLjI4OC0zLjE0NnMtNy40OTggNC42MzYtOC41ODYgNC42OTJsMS4yODggMi4xMDcgMy4yOTEtMS4wNjggNC44MzcgMTAuMTk4IDMuNjYzLTEuNjAxLTUuMzgtMTAuMTE0IDIuMTc1LTEuMDY3elwiLFxuICAgIGZpbGw6IFwiIzk3OTc5N1wiLFxuICAgIHN0cm9rZTogXCIjOTc5Nzk3XCIsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTBcbiAgfSkpLCBfcGF0aDkgfHwgKF9wYXRoOSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTg2LjU3MSAxMy43NjVjLTIuODA1LTkuMDc0LTYuNDk3LTkuMjctMTIuNDIxLTcuNDE2LTUuOTUzIDEuODgyLTguMDQyIDYuNDMzLTkuMzg3IDkuMzgzLS45NDUgMi4wNzkgMS45NDYgMS40ODkgMS45NDYgMS40ODlsMi40NjEtLjk1NWExLjM2IDEuMzYgMCAwMC44NTgtMS4xMjRjLjQzLTUuODE1IDYuNjY5LTUuMTQxIDYuNjY5LTUuMTQxIDMuMDM0IDAgNC41NS44NDMgNS4yMzcgMS40MzMuMzE1LjI4LjQ1OC43MDIuNDMgMS4wOTVsLS4yMDEgMi4xOTJjLS4wNTcuNzAyLS42NTggMS4yMDgtMS4zNDUgMS4yMDhoLS41NzJjLTcuNDQxIDAtOS43NiA1LjczLTEwLjA3NCA2LjU0NS0uMDI5LjA1Ni0uMDI5LjE0LS4wNTguMTk3LTEuMTczIDUuOTI4LjU0NCAxMS4zNzcgNy4zMjcgMTIuNTg2IDYuODExIDEuMjM2IDkuNzMxLTcuNDE3IDkuNzMxLTcuNDE3bC45NzMgMS41NzNjLjI4Ni40NzguODg3LjczIDEuNDU5LjYxOC43NDQtLjE2OCAxLjIzMS0uODcgMS4wNTktMS42MDEtLjYyOS0yLjQxNi0yLjAzMi03Ljk1LTQuMDkyLTE0LjY2NXptLTYuOTI2IDE3LjM5aC0xLjQzMWMtMS40Ni0uMDI4LTIuMTc1LS4yODEtMi40MDQtLjQ3OC0xLjA1OS0uNzg2LTMuNjkyLTMuMjMtMS4zMTctNi4yMDggMi43MTktMy4zNzEgNC45MjMtNS42MTkgOC43ODYtNC44ODguNTczLjExMiAxLjAzMS41MzQgMS4xMTYgMS4wNjdsLjc0NSAzLjczN2MuMDI4LjE5Ni4wMjguNDIxLS4wMjkuNjE4LS4zMTUgMS4wNjctMS41NDUgNC42MDctNC43NzkgNS44NDMtLjExNS4wNTYtLjUxNi4zMDktLjY4Ny4zMDl6XCIsXG4gICAgZmlsbDogXCIjOTc5Nzk3XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2xpcXVlZmFybWE7IiwidmFyIF9wYXRoLCBfcGF0aDIsIF9wYXRoMztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0ljbGluaWMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMTI5LFxuICAgIGhlaWdodDogMjksXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTIzLjgzIDEyLjIyOWMxLjc3MiAwIDIuOTk3LjQ2NyAyLjk5Ny40NjcuNzg5LS43NDEgMS4yNC0xLjk5OCAxLjI0LTMuMTc0IDAgMC0xLjMyMS0uOTE5LTQuOTc4LS45MTktNS40NDYgMC04LjAwNyAzLjM4NC04LjAwNyA5LjcxNiAwIDYuMzMxIDIuNTYxIDkuNzE1IDguMDA3IDkuNzE1IDMuODAyIDAgNS4zMzMtMS4wOTYgNS4zMzMtMS4wOTYtLjAzMy0xLjIwOC0uNS0yLjQ5Ny0xLjI0MS0zLjE3NCAwIDAtMS4zODYuNS0zLjIwNi41LTMuMDI5IDAtNC4zMDItMS43MDgtNC4zMDItNS45NDUgMC00LjI1NCAxLjA5Ni02LjA5IDQuMTU3LTYuMDl6bS0xMi43MTItMi45OTdzLS43ODktLjI5LTIuMjM5LS4yOWMtMS41NjMgMC0yLjI0LjI5LTIuMjQuMjl2MTguMTU3cy42NzcuMjkgMi4yNC4yOWMxLjQ2NiAwIDIuMjM5LS4yOSAyLjIzOS0uMjlWOS4yMzJ6bTAtNy41MDhzLS43ODktLjI5LTIuMjM5LS4yOWMtMS41NjMgMC0yLjI0LjI5LTIuMjQuMjl2NC4wOTJzLjY3Ny4yOSAyLjI0LjI5YzEuNDY2IDAgMi4yMzktLjI5IDIuMjM5LS4yOVYxLjcyNHptLTkuMDcgMTIuMjc3YzAtMy4yMDYtMS45MTgtNS40MTQtNS41OS01LjQxNC0xLjk1IDAtMy42MjYuNTY0LTQuODgyIDEuNzA4VjkuMjMycy0uNzktLjI5LTIuMjQtLjI5Yy0xLjU2MyAwLTIuMjQuMjktMi4yNC4yOXYxOC4xNTdzLjY3Ny4yOSAyLjI0LjI5YzEuNDY2IDAgMi4yNC0uMjkgMi4yNC0uMjlWMTMuNTM0Yy44NTMtLjgyMiAxLjk0OS0xLjMyMiAzLjEyNS0xLjMyMiAyLjAzIDAgMi44NTIgMS4wMzEgMi44NTIgMi41NjJ2MTIuNjE1cy42NzYuMjkgMi4yNC4yOWMxLjQ2NSAwIDIuMjM5LS4yOSAyLjIzOS0uMjlWMTQuMDAxaC4wMTZ6bS0xOS42NC00Ljc3cy0uNzktLjI5LTIuMjQtLjI5Yy0xLjU2MiAwLTIuMjM5LjI5LTIuMjM5LjI5VjI3LjM5cy42NzcuMjkgMi4yNC4yOWMxLjQ2NiAwIDIuMjQtLjI5IDIuMjQtLjI5VjkuMjMyem0wLTcuNTA3cy0uNzktLjI5LTIuMjQtLjI5Yy0xLjU2MiAwLTIuMjM5LjI5LTIuMjM5LjI5djQuMDkycy42NzcuMjkgMi4yNC4yOWMxLjQ2NiAwIDIuMjQtLjI5IDIuMjQtLjI5VjEuNzI0em0tOS4yOC0uNDY3cy0uNzktLjI5LTIuMjQtLjI5Yy0xLjU2MiAwLTIuMjM5LjI5LTIuMjM5LjI5djI2LjEzMnMuNjc3LjI5IDIuMjQuMjljMS40NjYgMCAyLjI0LS4yOSAyLjI0LS4yOVYxLjI1N3pNNDcuOTYzIDE0Ljg1NWMwIDguNTcgMy43MzcgMTMuMTYyIDEwLjc3OCAxMy4xNjIgNC4xMjQgMCA2LjUwOS0xLjI0IDYuNTA5LTEuMjQgMC0xLjMyMS0uNDY3LTIuNjI2LTEuMzUzLTMuNDQ4IDAgMC0yLjA5NS43NDEtNC42NTcuNzQxLTMuNzcgMC02LjUwOC0xLjgyLTYuNTA4LTkuMTgzIDAtNy4zNjMgMi43MzktOS4zMjkgNi41MDgtOS4zMjkgMi4yNzIgMCA0LjMwMi43NDIgNC4zMDIuNzQyLjgyMi0uODg3IDEuNDY2LTEuOTE4IDEuMzUzLTMuMzg0IDAgMC0yLjIwNy0xLjI0LTYuMTU0LTEuMjQtNy4wNC4wMTYtMTAuNzc4IDQuNjA3LTEwLjc3OCAxMy4xNzl6TTQzLjg3IDkuMjMycy0uNzg5LS4yOS0yLjIzOS0uMjljLTEuNTYzIDAtMi4yNC4yOS0yLjI0LjI5djE4LjE1N3MuNjc3LjI5IDIuMjQuMjljMS40NjYgMCAyLjI0LS4yOSAyLjI0LS4yOVY5LjIzMnptMC03LjUwOHMtLjc4OS0uMjktMi4yMzktLjI5Yy0xLjU2MyAwLTIuMjQuMjktMi4yNC4yOXY0LjA5MnMuNjc3LjI5IDIuMjQuMjljMS40NjYgMCAyLjI0LS4yOSAyLjI0LS4yOVYxLjcyNHpcIixcbiAgICBmaWxsOiBcIiM5Nzk3OTdcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgZDogXCJNMjguNjEzIDE5LjY4OEguODA2QS44MDguODA4IDAgMDEwIDE4Ljg4MnYtOC42NTFjMC0uNDM1LjM1NC0uODA2LjgwNi0uODA2aDI3LjgwN2MuNDM1IDAgLjgwNi4zNTQuODA2LjgwNnY4LjY1MWMwIC40NTEtLjM3LjgwNi0uODA2LjgwNnpcIixcbiAgICBmaWxsOiBcIiM5Nzk3OTdcIlxuICB9KSksIF9wYXRoMyB8fCAoX3BhdGgzID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yMC4xODcgMjlIMTEuNTJhLjc4OC43ODggMCAwMS0uNzg5LS44MjJjLjA4LTIuNDE2LjUtNC43MiAxLjI3My02LjgzLjg3LTIuNDE3IDIuMTU5LTQuNTQ0IDMuODUtNi4zMTZhMTcuNjQ0IDE3LjY0NCAwIDAxNi4wNzQtNC4xNzMgMTkuNDA2IDE5LjQwNiAwIDAxNi42Ny0xLjQwMi43ODguNzg4IDAgMDEuODIyLjc5djguNjY4YS43OTIuNzkyIDAgMDEtLjc0MS43ODljLTIuMjA3LjE0NS00LjA2Ljk1LTUuMzY1IDIuMzM2LTEuNDAyIDEuNDgyLTIuMTkxIDMuNjI1LTIuMzIgNi4yMDNhLjgxLjgxIDAgMDEtLjgwNi43NTd6TTAgMTguODgydi04LjY2OGMwLS40MTguMzIyLS43NTcuNzQxLS43ODkgMi4yMjMtLjE2MSA0LjA0NC0xLjAzMSA1LjQzLTIuNjI2QzcuNTQgNS4yMzYgOC4zNiAzLjA5MyA4LjUwNy43NEEuNzgyLjc4MiAwIDAxOS4yOTcgMGg4LjY2N2MuNDUxIDAgLjgwNS4zNy43OS44MjItLjE3OCA0LjgzMy0xLjg4NiA5LjMyOC00Ljg4MiAxMi43MjdhMTcuNzAyIDE3LjcwMiAwIDAxLTYuMDI2IDQuNDk1Yy0yLjE3NS45ODMtNC41MjcgMS41MzEtNy4wMjQgMS42NDRBLjgxMS44MTEgMCAwMTAgMTguODgyelwiLFxuICAgIGZpbGw6IFwiIzk3OTc5N1wiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ljbGluaWM7IiwidmFyIF9wYXRoLCBfcGF0aDI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdNZWRpY2FsaGFyYm9yKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDIyMCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTEyMy40NDIgMzkuMDdoOTYuMDE2di40NmgtOTYuMDY3YzAtLjE1My4wNTEtLjMwNi4wNTEtLjQ2ek0wIDE0LjYwN2g4OC41MDl2LjUxSC4wNUMwIDE0Ljk2NSAwIDE0LjgxMiAwIDE0LjYwOHpNMCAzOWg4OC41MDl2LjUxSC4wNUMwIDM5LjM1OSAwIDM5LjIwNSAwIDM5ek0xMjIuNTIzIDE0LjYwN2g5Ni45MzV2LjUxaC05Ni45MzV2LS41MXpNOC4zMjUgMzAuMjM1YzEuNjg1LTMuNDczIDMuMTE1LTYuMzg0IDQuNDk0LTkuMjk1LjMwNy0uNjEzLjcxNS0uOTIgMS4zOC0uODY5LjY2My4wNTIuODE2LjUxMS44NjcgMS4wNzMuMzU4IDMuNzI4LjcxNSA3LjUwOCAxLjAyMiAxMS4yMzYuMDUxLjUxLjIwNCAxLjI3Ny0uNzE1IDEuMzI4LTEuMDczLjA1LS45Ny0uNzY2LS45Mi0xLjM4LjI1Ni0yLjg2LS43MTQtNS42MTctLjg2OC04LjUyOC0yLjM0OSAyLjg2LTMuMTE1IDYuNTg4LTUuNzIgOS42NTItMS41ODMtMy4yMTctMy4wNjQtNi4yODEtNC42NDctOS40NDgtMS4wMjIuOTctLjk3IDIuMDQzLS45NyAzLjA2NC4wNSAxLjk0MS0uMjA1IDMuODMtLjU2MyA1LjcyLS4xMDIuNTYyLS4yMDQgMS4wMjItLjg2OC45Mi0uNjY0LS4xMDItLjY2NC0uNTEtLjYxMy0xLjA3My4zNTgtMy42NzcuNjY0LTcuMzU0Ljk3LTExLjAzMS4wNTItLjY2NC0uMTAxLTEuMzguODY5LTEuNTMyLjg2OC0uMTAzIDEuMjI2LjMwNiAxLjUzMi45Ny44MTcgMS43MzYgMS43ODggMy4zNyAyLjQ1MiA1LjIxLjU2MSAxLjI3NiAxLjQzIDIuNDUgMi4yOTggMy45ODN6TTEzNC4yNjkgMjYuOTY2djUuMzEyYzAgLjYxMy4yNTYgMS40ODEtLjg2OCAxLjQzLS44NjgtLjA1MS0uNzY2LS43MTUtLjgxNy0xLjI3N3YtLjI1NWMtLjI1NS0xLjUzMi44NjgtMy42NzctLjU2Mi00LjQ5NS0xLjY4NS0uOTctMy45ODMtLjI1NS02LjAyNi0uMzA2LTEuMjI2LS4wNTEtMS4yNzcuODE3LTEuMjc3IDEuNzM2djMuNzhjMCAuNDYtLjE1My44MTctLjcxNS44NjgtLjY2NC4wNTEtLjg2OC0uMzA2LS44NjgtLjkyVjIxLjI0N2MwLS41NjEuMTUzLTEuMDIxLjgxNy0xLjAyMS42NjQuMDUuNjY0LjYxMy43NjYgMS4wNzIuMjU1IDEuNDMtLjgxNyAzLjM3MS41MTEgNC4yOSAxLjMyNy45MiAzLjMxOS4xMDMgNC45NTQuMzA3IDIuMDk0LjI1NSAyLjM0OS0uODE3IDIuNC0yLjUwMy4wNTEtMS4wNzItLjg2OC0zLjExNS44NjgtMy4wNjQgMS41MzIuMDUxLjU2MiAyLjA0My43MTUgMy4xNjYuMjA1IDEuMDczLjEwMiAyLjI0OC4xMDIgMy40NzN6TTIwNS42MTggMjYuMDQ3Yy0uMjA1IDIuMjk4LjcxNSA0Ljk1NC0xLjg5IDYuOTQ2LTIuOTExIDIuMjQ3LTguNjMxLjYxMy05LjM5Ny0yLjk2Mi0uNjEzLTIuOTEyLS4xNTQtNS44NzQtLjI1Ni04Ljc4NSAwLS41MS4wNTEtMS4wNzIuNzE1LTEuMTIzLjgxNy0uMDUyLjk3MS41MS45NzEgMS4xNzQgMCAyLjM1LS4wNTEgNC42OTkuMDUxIDcuMDQ4LjEwMiAzLjAxNCAxLjU4MyA0LjU0NiA0LjM5MiA0LjI5IDIuNC0uMjA0IDQuMDM1LTEuMDIxIDMuNzc5LTQuNDQzLS4xNTMtMi4yNDctLjA1MS00LjU0NSAwLTYuNzkzIDAtLjU2MS0uMDUxLTEuMjc2LjgxNy0xLjI3Ni45Mi0uMDUyLjgxOC43MTUuODE4IDEuMjc2djQuNjQ4ek0yMC4yNzYgMjYuNzYyYzAtMS4zMjguMTUzLTIuNzA3LS4wNTItNC4wMzUtLjMwNi0yLjM1LjcxNS0zLjAxMyAyLjg2LTIuNzA3LjkyLjEwMyAxLjg0LjA1MiAyLjgxIDAgLjU2MSAwIDEuMTIzLjE1NCAxLjEyMy43MTUgMCAuNTYyLS40Ni44MTgtMS4wNzIuODE4aC0xLjUzM2MtMS4zMjctLjA1Mi0yLjQ1MS0uMTAzLTIuNDUxIDEuODkgMCAxLjc4Ny42MTMgMi40IDIuMzUgMi4yNDYuNjYzLS4wNSAxLjc4Ny0uNDA4IDEuODM4LjY2NC4wNTEgMS4wMjItMS4wNzMuOTItMS43ODguODE4LTIuNTUzLS4zNTgtMi4yOTggMS4yMjUtMi40IDIuOTEtLjE1MyAyLjA5NSAxLjAyMSAxLjk5MyAyLjUwMyAyLjA0NCAxLjA3Mi4wNSAzLjAxMy0uNzE1IDMuMDEzLjc2NiAwIDEuNDgtMS44OS43MTUtMi45MTEuNzE1LTQuMzQxLjEwMi00LjM0MS4wNS00LjM0MS00LjEzNy4wNS0uODY4LjA1LTEuNzg4LjA1LTIuNzA3ek02MC4xNjMgMzMuNzA4Yy00LjU5Ni40MDgtNi4xOC0xLjQzLTcuMzAzLTMuODgyLTEuMzI4LTIuOTYyLS41MTEtNi41MzcgMS43MzYtOC41MjkgMi4yOTktMi4wNDMgNS4yNi0xLjk0IDguMDctMS4wMjEuNjEzLjIwNCAxLjU4My42NjQgMS4wNzIgMS42ODUtLjUxIDEuMDIyLTEuMTc1LjE1My0xLjY4NS0uMDUxLTMuNDczLTEuMjI2LTUuMTU4LS45Mi02Ljc5MyAxLjIyNi0xLjU4MyAyLjA5NC0xLjQ4IDUuMjYuMTUzIDcuNTA3IDEuMzggMS44MzkgMy42MjcgMi4yNDggNi44OTUgMS4xNzUuNTYyLS4yMDQgMS4xMjQtLjY2NCAxLjQzLjE1My4yNTYuNjY0LS4zNTcuOTctLjg2OCAxLjI3Ny0xLjAyMS43MTUtMi4xOTYuNDA5LTIuNzA3LjQ2ek04MC44NDggMjYuNjA5YzAtMS41MzItLjA1MS0zLjAxMyAwLTQuNTQ2IDAtLjc2Ni0uMjU2LTEuODkuOTctMS45NCAxLjM3OS0uMDUxLjkyIDEuMTIzLjk3IDEuODM4LjA1MiAyLjUwMy4xNTQgNS4wNTYgMCA3LjU1OS0uMTUzIDEuOTkyLjM1OCAyLjkxMSAyLjYwNSAyLjcwNyAxLjAyMi0uMTAyIDIuOTYyLS43NjYgMi45NjIuNzY2IDAgMS4zNzktMS45NC43MTUtMi45NjIuNzE1LTQuOTU0LjA1MS00LjQ5NC43NjYtNC40OTQtNC4zNDEtLjA1MS0uOTItLjA1MS0xLjgzOS0uMDUxLTIuNzU4ek00Ny44NTUgMzMuNjA2VjIwLjEyM2guNjY0Yy41MSA0LjQ5NC4xMDIgOC45ODguMjA0IDEzLjQ4M2gtLjg2OHpNMTA2LjYzOSAzLjQyMmMtLjQwOC0uMjU2LS40MDgtLjY2NC0uNDA4LTEuMDczLS40MDktLjcxNS0uODE4LTEuNDMgMC0yLjM0OS44NjggMS4xMjQuNDU5IDIuMjk4LjQwOCAzLjQyMnpcIixcbiAgICBmaWxsOiBcIiM5Nzk3OTdcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMTAuNzc2IDQ2Ljc4MmMtLjcxNS02Ljc5Mi0uNTExLTEzLjYzNi0uNDYtMjAuNDI5IDAtMi40LS41MS00LjY5OC0uMzA2LTcuMi4xNTMtMi4yOTkgMS4yMjYtNC45MDQtLjI1Ni03LjI1My0uODE3LTEuMjc3LTEuMDcyLTIuNzA3LS44MTctNC4wODYuNDYtMi4xOTYtLjQwOC0zLjUyNC0yLjI5OC00LjM5Mi0uMjA0LS4zNTgtLjEwMi0uODE3LS40MDktMS4wNzMtLjUxLjU2Mi0uOTE5IDEuMzgtMS41MzIgMS41ODQtMS45OTIuNjEyLTEuODg5IDEuOTQtMS42ODUgMy41MjQuMjA0IDEuNzg3LjEwMiAzLjQ3My0xLjMyOCA0LjkwMy0xLjE3NSAxLjE3NC0uODE3IDIuNjA0LS40MDkgMy45ODMuMjA1LjYxMy42NjQgMS4wNzMuNjY0IDEuODM5bC0uOTE5IDI2LjQwNGMtLjA1MSAxLjk0MS41MTEgNC4xMzctMi4zNSA1LjQxNGgxMy40ODRjLTEuNzM3LS43MTUtMS4yMjYtMi4wNDMtMS4zNzktMy4yMTh6bS00LjAzNS0yMi4yNjdjLjA1MS42MTMtLjA1MSAxLjE3NC0uODY4IDEuMjc3LS44MTctLjIwNS0uNjY0LS44NjktLjY2NC0xLjQzIDAtLjYxMy4wNTEtMS4yNzcuODY4LTEuMjI2Ljg2OC4xMDIuNjEzLjg2OC42NjQgMS4zNzl6bS0uOTcgNS45MjRjMS4wNzIgMCAuOTE5LjkyLjk3IDEuNjM1IDAgLjYxMi0uMDUxIDEuMjc2LS44MTcgMS4yNzYtMS4wMjEtLjA1LS42MTMtLjk3LS43NjYtMS40OC4xNTMtLjU2My0uMjA0LTEuNDMuNjEzLTEuNDN6bS4zMDYgMTAuMjY2Yy0uOTcuMTAyLS44NjgtLjc2Ni0uODY4LTEuNDMgMC0uNjY0LS4xMDItMS40ODEuODY4LTEuNDgxLjg2OCAwIC42MTMuNzY2LjcxNSAxLjMyOC0uMjA0LjU2MS4yNTYgMS40OC0uNzE1IDEuNTgzem0tLjA1MS0zMS4wMDFjLS44MTctLjA1MS0xLjQzLS41MS0xLjM3OS0xLjQ4MS4wNTEtLjg2OS41MTEtMS40MyAxLjQzLTEuNDMuOTcxIDAgMS4zMjguNTYxIDEuMzI4IDEuNDggMCAuOTItLjUxMSAxLjQzLTEuMzc5IDEuNDN6TTQzLjQ2MyAyNS43NGMtLjYxMy0zLjU3NC0yLjA0My02LjQzNS0xMC4wMS01LjcyLTQuMTg5LjQwOS0xLjIyNiAzLjY3OC0yLjA0MyA1LjQ2NS0uMTU0LjM1OCAwIC44MTcgMCAxLjIyNnYxLjI3N2MwIDYuMzMzLjEwMiA2LjQzNSA2LjQ4NiA1LjYxOCAzLjUyNC0uMzU4IDYuMjgyLTMuODgyIDUuNTY3LTcuODY1em0tMi4xNDUgMy44ODJjLS45MiAxLjk0LTQuNzUgMy4zMi03LjE1IDIuNjU2LS45Mi0uMjU1LS44NjktLjkyLS44NjktMS41ODNWMjYuNjZjMC0uNjEzLS4xMDItMS4xNzUgMC0xLjc4OC4yMDUtMS4yMjUtLjgxNy0zLjAxMy43NjYtMy41NzUgMS43MzctLjYxMyAzLjcyOS0uMTUzIDUuMzEyLjkyIDIuNCAxLjU4MyAzLjExNSA0Ljg1MiAxLjk0IDcuNDA1ek0xODMuNTAzIDE5LjU2Yy00LjIzOS0uMTUyLTcuMjAxIDIuOTEyLTcuMjAxIDcuMzA0IDAgNC4xODggMi42MDUgNy41MDggNi45NDYgNi45NDYgNC44MDEgMCA2Ljg5NS0yLjE0NSA3LjE1LTYuNjkuMzA3LTQuNzUtMy4wMTMtNy40NTctNi44OTUtNy41NnptMCAxMy4wNzVjLTMuMzcuMTAyLTUuMzYyLTEuOTQtNS40MTMtNS41MTYtLjA1MS0zLjc3OSAxLjgzOC01Ljk3NSA1LjEwNy02LjAyNiAzLjI2OS0uMDUxIDUuNTE2IDIuMTQ1IDUuNDY1IDUuNTE2LS4wNTEgMy42NzctMS40ODEgNS44NzMtNS4xNTkgNi4wMjZ6TTE3MS44NTkgMjYuODEzYy0uOTE5LS42NjQtLjYxMy0uODE3LjA1MS0xLjUzMiAxLjM3OS0xLjQ4MS42NjQtNC40OTUtMS4wNzMtNS4wMDUtMS42ODUtLjQ2LTMuNjc3LS42NjQtNS4yMDkuMDUtMS4wNzMuNTExLS4zNTggMi4yOTktLjQ2IDMuNTI1LS4xMDIgMS4wMjEgMCAxLjk5MiAwIDMuMDEzcy0uMDUxIDIuMDQzIDAgMy4wMTNjLjEwMiA0LjEzNy0uOTcgMy43OCAzLjkzMyAzLjgzIDIuMDk0LjA1MiAzLjU3NS0uNzY1IDQuMzkyLTIuNjU1Ljg2OC0xLjgzOS0uMTUzLTMuMjE4LTEuNjM0LTQuMjM5em0tNS4wMDUtMy42MjZjLS4xMDItLjkyLS4zMDctMi4yNDcgMS4zMjgtMi4wOTQgMS4zNzkuMTUzIDIuNzU4LjYxMyAyLjcwNiAyLjI5OC0uMDUxIDEuNjg2LTEuMjc2IDIuMTk2LTIuMzQ5IDIuMjk4LTIuNTAyLjA1Mi0xLjU4My0xLjU4My0xLjY4NS0yLjUwMnptMS4wMjEgOS4xOTNjLTIuMjQ3IDAtLjgxNy0xLjg5LS45Ny0yLjg2LS4xMDItLjc2Ni0xLjAyMi0yLjY1NiAxLjIyNi0yLjQgMS42MzQuMjA0IDMuNTc1LjIwNCAzLjQyMSAyLjgwOC4yMDUgMi44MS0yLjE0NSAyLjQ1Mi0zLjY3NyAyLjQ1MnpNMjE2LjAzNiAyNy44ODZjMi44MDktMi40NTIgMy4yNjktMy43OCAyLjA5NC01Ljg3NC0xLjAyMS0xLjgzOC00LjE4OC0yLjcwNy02Ljc5Mi0xLjk0LS42NjQuMjA0LTEuMDczLjYxMi0xLjA3MyAxLjIyNS0uMDUxIDMuNzgtLjA1MSA3LjU1OS0uMDUxIDExLjMzOCAwIC41NjIuMjU1Ljk3LjkxOSAxLjAyMi43MTUgMCAuNzE1LS41MS43MTUtMS4wMjIgMC0xLjAyMS0uMDUxLTIuMDQyIDAtMy4wMTMgMC0uNjY0LS4xMDItMS40My45Mi0xLjQ4MS43MTUtLjA1MSAxLjQzLS4yNTUgMS45OTIuNjY0Ljg2OCAxLjQzIDIuMDQyIDIuNjU2IDIuODYgNC4xMzcuNTYxIDEuMDcyIDEuMjI1LjkyIDIuMTQ1LjY2NC0uNzY2LTIuMjk5LTIuNDAxLTMuODgyLTMuNzI5LTUuNzJ6bS0yLjI5OC0xLjMyOGMtMi4yNDcuMTUzLTEuODktMS4yNzctMS44OS0yLjg2LjEwMy0uOTctLjQ1OS0yLjc1OCAxLjczNy0yLjUwMyAxLjUzMi4xNTMgMy4zMi40NiAzLjExNSAyLjc1OC0uMTAyIDEuODktMS4yMjUgMi41MDMtMi45NjIgMi42MDV6TTE2MS4xODUgMzIuMzI5Yy0uNzY2LTEuMTI0LTEuMzc5LTIuMzUtMi4yNDgtMy4zMi0uODY4LS45Ny0uNjY0LTEuMzI4LjI1Ni0yLjA5NCAxLjQ4MS0xLjI3NyAxLjY4NS0zLjA2NCAxLjAyMS00Ljg1Mi0uNjY0LTEuNzM2LTIuMjQ3LTIuMDk0LTMuOTMyLTIuMDQzLTQuNTk3LjEwMy0zLjYyNi0uNDA4LTMuNzI5IDMuNzI5LS4wNTEgMS4wNzIgMCAyLjE5NiAwIDMuMjY4IDAgMS4wNzMtLjE1MyAyLjE5Ny4wNTEgMy4yNjkuMjU2IDEuMTI0LTEuMDcyIDMuMjE4Ljg2OSAzLjIxOCAxLjQzIDAgLjQwOC0yLjA5NC43MTUtMy4yMTguMjA0LS43MTUtLjUxMS0xLjczNy42MTMtMi4xOTYgMS4xMjMtLjQ2IDEuNzM2LjM1NyAyLjI5OCAxLjEyMy45NyAxLjMyOCAxLjk0MSAyLjcwNyAyLjk2MiA0LjAzNS40MDkuNTEgMS4wNzMuNzE1IDEuNTgzLjMwNy40Ni0uNDYtLjIwNC0uODY5LS40NTktMS4yMjZ6bS01LjQ2NS01Ljc3MWMtMi41MDMuMTAyLTEuMjc3LTEuNzg4LTEuNjM0LTIuODEuMTUzLTEuMTIzLS40Ni0yLjc1NyAxLjUzMi0yLjU1MyAxLjUzMi4xNTMgMy4xMTUuNTEgMy4wNjQgMi42MDUtLjEwMiAxLjg5LTEuMTI0IDIuNzA3LTIuOTYyIDIuNzU4ek0xNDkuMTMxIDMyLjQ4MmEyNTI5LjEzMSAyNTI5LjEzMSAwIDAwLTQuNDQzLTExLjEzNGMtLjI1NS0uNjEzLS41MTEtMS4yNzctMS4xMjMtMS4yNzctMS4xMjQuMDUxLTEuMTc1Ljg2OC0xLjQzIDEuNDMtMS40MzEgMy40NzMtMi45MTIgNi44OTUtNC4xODggMTAuNDItLjE1NC40NTktMS4zNzkgMS4zMjcgMCAxLjc4Ny44NjguMjU1IDEuMjc2LS4zNTggMS40ODEtMS4yMjYuNDA4LTEuNDgxLjYxMy0zLjExNiAyLjg2LTMuMjY5IDIuMjQ3LS4xMDIgNC4xODggMCA0Ljc0OSAyLjcwNy4xMDMuNDYuMzU4LjkyLjYxMyAxLjM4LjMwNy41MS44MTguNTYgMS4zMjguNDA4Ljg2OC0uMzA3LjI1Ni0uODE3LjE1My0xLjIyNnptLTUuOTI0LTQuNzVjLS42MTMtLjIwNC0xLjk0MS40MDktMS42ODUtLjcxNS4zMDYtMS4yNzcuNzY2LTMuNDIyIDEuNzg3LTMuNTI0IDEuNTMyLS4xMDIgMS4wNzMgMi4wNDMgMS41MzIgMy4xNjcuNTExIDEuMzc5LS45Ny44NjgtMS42MzQgMS4wNzJ6TTc3LjczMiAzMi41MzNjLTEuNDgtMy43OC0yLjk2Mi03LjkxNi00LjgtMTEuOS0uNTYzLTEuMjI2LTEuNTg0LS44MTctMi4wOTUuNTEtMS4zNzkgMy41NzYtMi45MSA3LjA0OS00LjI5IDEwLjYyNC0uMjA0LjU2Mi0xLjIyNSAxLjM3OS0uMTAyIDEuODkgMS4yMjYuNTEgMS4xMjQtLjgxNyAxLjUzMi0xLjQ4MS42MTMtLjk3LjQwOS0yLjU1NCAxLjk5Mi0yLjkxMiAzLjAxMy0uNjYzIDQuNjQ4LjEwMyA1LjkyNSAyLjkxMi4xNTMuMzU3LjE1My44MTcuMzA2IDEuMTc0LjIwNC40Ni42NjQuNDYgMS4xMjQuMzU4LjQwOC0uMTAyLjUxLS40MDkuNDA4LTEuMTc1em0tNy4zMDMtNS4yMWMtLjgxNy0xLjM3OC45Ny0yLjY1NSAxLjI3Ny00LjM0IDEuNjM0IDEuMjc2IDEuMjI1IDMuMDY0IDIuNCA0LjQ0My0xLjQ4MS4zNTctMy4xNjYuNzY2LTMuNjc3LS4xMDJ6XCIsXG4gICAgZmlsbDogXCIjOTc5Nzk3XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWVkaWNhbGhhcmJvcjsiLCJ2YXIgX3BhdGgsIF9wYXRoMiwgX3BhdGgzLCBfcGF0aDQsIF9wYXRoNTtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z01lZGljaW5hZShwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyMjUsXG4gICAgaGVpZ2h0OiAzMyxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yNy4wODkgMHYuNTFjLTIuMTQyIDEuMTczLTQuMzM1IDEuMTIyLTYuNTI4LjEwMi0uMDUyLS4yMDQtLjA1Mi0uNDA4LS4xMDItLjYxMmg2LjYzek0zOC4zNi41NjFWMGg2LjYzMWMwIC4yMDQtLjA1LjQwOC0uMDUuNjEyLTEuODg4IDEuMDcxLTMuODc3LjYxMi01LjgxNS40MDhhMS45MjEgMS45MjEgMCAwMS0uNzY1LS40NTl6XCIsXG4gICAgZmlsbDogXCIjOTc5Nzk3XCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjAuNTYuNjEyQzIyLjc1NS41NjIgMjQuODk3LjUxIDI3LjA5LjUxYzEuNTgxIDUuODE1IDMuMTExIDExLjU3OCA0Ljc5NCAxNy4zNDEuMjA0LjY2NC0uMjU1IDIuMDkyIDEuMzI2IDEuOTkuNzY1IDQuMTMgMi41IDcuOTU2IDIuOTA4IDEyLjE5LTIuNjAyIDEuOTM4LTYuNTguODE2LTcuMzQ1LTEuOTktMS4zNzctNS4wNS0yLjcwMy0xMC4xNS00LjA4LTE1LjE5OS0uMTUzLS42MTIuMTUzLTEuNjgzLTEuMTIyLTEuNTgtMS4wNzEtNC4wODEtMi40NDgtOC4wNi0yLjk1OC0xMi4yNDItLjA1MS0uMTAyLS4wNTEtLjI1NS0uMDUxLS40MDh6TTM4LjgyLjU2MWMyLjA0IDAgNC4wMyAwIDYuMDcuMDUxIDEuMzI1IDQuOTk4IDIuNiA5Ljk5NyAzLjk3NyAxNC45NDQuMTU0LjU2MS4xMDIgMS40OCAxLjE3NCAxLjIyNC43MTQgMi4yNDQuOTY5IDQuNTkgMS43ODUgNi43ODQuMzA2LjgxNi4xMDIgMS42MzItLjIwNCAyLjQ0OC0xLjczNC43MTQtMy41Mi4xNTMtNS4yNTQuMzA2LTEuMjI0LjEwMi0xLjIyNC0uOTE4LTEuNDI4LTEuNzM0LS44NjctMy4xMTEtMS42ODMtNi4yMjMtMi40OTktOS4yODMtLjIwNC0uNzY1LS4yMDQtMS42ODMtMS4wMi0yLjE5M0M0MC4wOTUgOC45NzcgMzcuNzQ5IDUuMTUgMzguODIuNTZ6XCIsXG4gICAgZmlsbDogXCIjOTc5Nzk3XCJcbiAgfSkpLCBfcGF0aDMgfHwgKF9wYXRoMyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMzguODIuNTYxYy0uMTUzIDMuNDY4IDEuNTggNi40NzggMi4yNDQgOS43OTMuMjA0LjkxOC4zNTcgMS43ODUuMzU3IDIuNzU0LTEuNzg1IDYuMjczLTMuNTcgMTIuNTk4LTUuMzU1IDE4Ljg3MS0xLjUzLTMuNDY4LTIuMTk0LTcuMTQtMy4yNjUtMTAuNzYxLS4xMDItLjQwOC4yNTUtLjkxOC40MDgtMS40MjggMS43MzQtNi40MjcgMy40MTgtMTIuODUzIDUuMTUyLTE5LjI4LjE1MyAwIC4zMDYgMCAuNDU5LjA1MXpNNS43MTkgOS4yMzJjLjcxNC4yMDQgMS40MjguNTEgMi4xNDIuNjEyIDQuMTgyLjYxMiA2Ljk4NyAyLjgwNSA4LjAwNyA2Ljk4NyAyLjM0NiAyLjYwMSAzLjQxNyA1Ljc2NCA0LjA4IDkuMTMtMS43ODUuODE2LTMuNjIuMjA0LTUuNDU3LjM1Ny0xLjEyMi4xMDItMS4yMjQtMS4wMi0xLjYzMi0xLjY4My0xLjUzLTIuNzAzLTIuMjk1LTUuODE1LTQuMjg0LTguMjYzLTEuMjc1LTIuMjQ0LTIuODA1LTQuMzg2LTIuODU2LTcuMTR6TTUwLjYwMiAxNi4zMjFjMi44MDUtMi4xNDIgNS42MS00LjMzNSA4LjQxNS02LjQ3Ny40MDgtLjMwNi44NjctLjUxIDEuMzI2LS42NjMgMS4zMjYtLjU2MSAzLjI2NSAxLjA3IDQuMTMyLTEuMTczLjEwMi0uMjA1IDUuOTY3IDQuNDM3IDUuOTY3IDQuODQ1IDAgLjQ1OS01Ljc2MyA1LjA1LTYuMDE4IDQuNzk0LTEuODM3LTIuNDQ4LTQuMzg3LS41MS02LjUyOS0xLjA3LS45MTgtLjI1Ni0xLjYzMi4xNTItMi4xOTMuOTE3LTEuNzM0LS4xNTMtMy43MjMuNzE0LTUuMS0xLjE3M3pcIixcbiAgICBmaWxsOiBcIiM5Nzk3OTdcIlxuICB9KSksIF9wYXRoNCB8fCAoX3BhdGg0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yMCAyNS45NmMtMS4zNzgtMy4wNi0yLjc1NS02LjA2OS00LjA4LTkuMTI5IDEuMzc2LTEuNTgxIDEuMzI1LTMuNzIzIDEuOTM3LTUuNjEgMS4wMi0zLjM2NyAxLjg4OC02Ljc4NCAyLjgwNi0xMC4yMDEgMS41OCAzLjQxNyAyLjA0IDcuMTkyIDMuMjEzIDEwLjc2Mi4yMDQuNTYtLjE1My45NjktLjMwNiAxLjQyOC0xLjEyMiA0LjI4NC0yLjA5MSA4LjU2OC0zLjU3IDEyLjc1ek0xNzMuNDE4IDE2LjczYzAtMi4zNDctLjA1MS00Ljc0NCAwLTcuMDkgMC0uNjYzLS40NTktMS42MzIuNTEtMS45OS45NjktLjM1NiAxLjQ3OS4zNTggMi4wNCAxLjA3MmE0OTMuMjMgNDkzLjIzIDAgMDA3LjgwNCAxMC4zMDJjLjg2NyAxLjEyMiAxLjU4MSAzLjMxNiAyLjkwNyAyLjk1OSAxLjAyLS4yNTUuMzU3LTIuNTUuNDA4LTMuOTI4LjEwMi0yLjk1OCAwLTUuOTE2LjA1MS04Ljg3NCAwLS42MTItLjI1NS0xLjUzLjc2NS0xLjU4MSAxLjI3NS0uMDUxLjg2NyAxLjAyLjg2NyAxLjYzMi4wNTEgNC45OTguMDUxIDkuOTk2IDAgMTQuOTk1IDAgLjYxMi4zNTcgMS40NzktLjUxIDEuNzg1LS45MTguMzA2LTEuMzI2LS40MDgtMS43ODUtMS4wMmExMDEyLjk2MSAxMDEyLjk2MSAwIDAwLTkuNDg3LTEyLjU0N2MtLjQwOC0uNTEtLjY2My0xLjM3Ny0xLjUzLTEuMDcxLS43MTQuMjU1LS4zNTcgMS4wNzEtLjM1NyAxLjU4MS0uMDUxIDMuODI1IDAgNy42LS4wNTEgMTEuNDI1IDAgLjYxMi4yNTUgMS41My0uNzE0IDEuNTgtMS4zMjYuMTAzLS44NjctMS4wMi0uODY3LTEuNjMxLS4xMDItMi41LS4wNTEtNS4wNS0uMDUxLTcuNnpNODEuNjEyIDcuNzUzYzIuMDQgMy4zMTUgNC4xMzEgNi41OCA2LjEyIDkuODk0Ljk3IDEuNjMyIDEuNTgxIDIuMjk1IDIuNzU0LjA1MSAxLjYzMi0zLjA2IDMuNTctNS45MTYgNS4zNTYtOC44NzQuNDA4LS42MTIuNjEyLTEuNTMgMS42MzItMS4yMjQuOTE4LjI1NS42MTIgMS4wNy42MTIgMS43MzR2MTQuOTQ0YzAgLjY2My4zNTcgMS43MzQtLjgxNiAxLjczNC0xLjIyNCAwLS43NjUtMS4xMjItLjc2NS0xLjczNC0uMDUxLTQuMTMxIDAtOC4yNjMgMC0xMi45NTUtMy4wMSAzLjcyMy00Ljc0NCA3LjcwMS03LjM5NiAxMS4yNzItMS43ODUtMi45MDgtMy40NjgtNS43NjQtNS4zMDQtOC41MTgtLjUxLS43NjUtLjY2My0yLjA5MS0yLjA5MS0xLjgzNi0uNTYxIDMuNTItLjEwMiA3LjA5LS4yNTUgMTAuNjA5LS4wNTEuODY3LjE1MyAxLjc4NS0uMjU1IDIuNjUyLTEuMDItLjMwNi0uNzY1LS45Ny0uNzY1LTEuNDhWOS44NDVjLS4wNTEtMS4wMi0uMTAyLTEuOTM4IDEuMTczLTIuMDkxek0xNDYuOTQ3IDE2LjYyN2MtLjE1MyAzLjQxNyAxLjE3MyA2LjAxOSA0LjA4IDcuNDQ3IDMuMDEgMS40NzkgNi4wNyAxLjI3NSA4LjkyNi0uNjYzLjQwOC0uMjU1LjYxMi0xLjMyNiAxLjM3Ny0uNTEuNzE0Ljc2NS0uMDUxIDEuMTczLS41MSAxLjYzMi00LjIzMyA0LjAyOS0xMi41OTggMS44ODctMTQuOTQ0LTMuODc3LTEuNTgxLTMuOTI3LS41NjEtOC4zMTMgMi41NS0xMS4xNyAzLjA2LTIuNzUzIDcuMzk2LTMuMjEzIDExLjExOS0xLjIyMy41MS4yNTUgMS4wMi42MTIgMS40NzkgMS4wMi40MDguMzA2Ljc2NS43MTQuMzU3IDEuMjc1LS41MS42MTItLjgxNi4xNTMtMS4yMjQtLjE1My0xLjQyOC0xLjE3My0zLjA2LTEuNzM0LTQuODk2LTEuNzM0LTUuMTUyLS4wNTEtOC4zMTQgMy4wMDktOC4zMTQgNy45NTZ6TTEwMy41OTQgMTYuODMxYzAtMi40NDguMTAyLTQuODk2LS4wNTEtNy4zNDQtLjEwMi0xLjYzMi41MS0yLjA0IDIuMDQtMS45MzggMi40NDkuMTAyIDQuOTQ4LjA1IDcuMzk2LjA1LjUxIDAgMS4xMjIuMDUyIDEuMTIyLjcxNS0uMDUxLjcxNC0uNzE0LjUxLTEuMTczLjU2YTExMi40NyAxMTIuNDcgMCAwMS01Ljg2NiAwYy0xLjMyNi0uMDUtMS43ODUuNTEtMS43ODUgMS44MzcuMDUxIDYuMjIyLS40NTkgNC44NDUgNC42OTMgNS4wNSAxLjIyNC4wNSAzLjUxOS0uNjY0IDMuNDY4LjYxMSAwIDEuMzc3LTIuMjQ0LjU2MS0zLjQ2OC42MTItNS41MDkuMTUzLTQuNDg5LS42MTItNC43NDQgNC43OTUtLjE1MyAyLjcwMy44MTYgMy40NjggMy4zMTYgMy4xNjIgMS41My0uMTUzIDMuMDYtLjA1MSA0LjU5IDAgLjQ1OSAwIDEuMTIyLS4xMDIgMS4wNzEuNjYzLS4wNTEuNzE0LS43MTQuNTYtMS4xNzMuNTYtMi42NTIgMC01LjI1NC0uMDUtNy45MDYuMDUyLTEuMjc1LjA1LTEuNTgxLS40Ni0xLjU4MS0xLjYzMi4xMDItMi43MDMuMDUxLTUuMjAzLjA1MS03Ljc1M3pNMjE0LjExOSAxNi42Nzh2LTcuNmMwLS45NjguMTUzLTEuNTggMS4zNzctMS41MyAyLjY1Mi4wNTIgNS4yNTMgMCA3LjkwNSAwIC41MSAwIDEuMDcxIDAgMS4wMi43MTUtLjA1MS43NjUtLjY2My41Ni0xLjEyMi41NmgtMy4wNmMtNC40ODggMC01LjQ1NyAxLjMyNy00LjQzNyA1Ljg2Ni4yMDQuOTcuNzY1Ljk3IDEuNDI4Ljk3IDEuNjgzIDAgMy40MTctLjA1MiA1LjEgMCAuNTYxIDAgMS41My0uNTYyIDEuNTgxLjU2LjA1MSAxLjE3My0uOTE4LjY2My0xLjQ3OS42NjMtMS40MjguMDUxLTIuOTA3IDAtNC4zMzUgMC0uNDA4IDAtLjk2OS0uMTUzLTEuMjc1LjA1MS0yLjI5NSAxLjY4My0uNTEgNC4xMzEtMS4wMiA2LjE3Mi0uMjU1IDEuMDcuMTUzIDEuNzM0IDEuNDc5IDEuNjgzIDIuMDQtLjEwMiA0LjA4LS4wNTEgNi4xMiAwIC40NTkgMCAxLjEyMi0uMTAyIDEuMTczLjYxMiAwIC43NjUtLjY2My42NjMtMS4xMjIuNjYzLTIuNjUyIDAtNS4yNTMtLjA1MS03LjkwNSAwLTEuMTczLjA1LTEuNDI4LS41MS0xLjQyOC0xLjUzLjA1MS0yLjYwMSAwLTUuMjU0IDAtNy44NTV6TTUuNzE5IDkuMjMyYy44NjcgMi4zOTcgMi40NDggNC41NCAyLjk1OCA3LjE0LTEuOTM4LjA1MS0zLjg3NyAwLTUuODE1LjEwMi0xLjc4NS4xMDItMi45NTguMTAyLTIuODU2LTIuMzQ2Qy4yMSA4LjY3MS4wNTcgOC42NzEgNS43MiA5LjIzMnpNNTAuNjAyIDE2LjMyMWMxLjUzIDEuMTIyIDMuNjcyLS4yNTUgNS4xNSAxLjA3MS0xLjE3MiAyLjk1OC0yLjM0NSA1Ljk2OC00LjEzIDguNjItLjA1MS0yLjM5OC0xLjM3Ny00LjQ4OS0xLjczNC02LjgzNS0uMTU0LS44NjctLjMwNi0xLjYzMi4xNTMtMi4zOTcuMTUzLS4xNTMuMzU3LS4zMDYuNTYtLjQ1OXpNMTY3Ljg1OSAxNi43OHY3Ljg1NWMwIC42MTIuMjA0IDEuNDc5LS45MTggMS4zNzctLjkxOS0uMTAyLS43MTUtLjgxNi0uNzE1LTEuMzc3VjguOTI1YzAtLjY2Mi0uMTUzLTEuNDc5LjkxOS0xLjM3Ny45MTguMTAzLjY2My44MTcuNjYzIDEuMzc4LjA1MSAyLjYuMDUxIDUuMjUzLjA1MSA3Ljg1NHpNMTQwLjc3NiAxNi43OHY3Ljg1NWMwIC41MS4zMDYgMS4yNzUtLjY2MyAxLjMyNi0xLjA3MS4wNS0uOTE4LS43NjUtLjkxOC0xLjM3N1Y5LjA3OWMwLS42MTItLjI1NS0xLjUzLjg2Ny0xLjQ4IDEuMTIyLjA1MS43MTQuOTcuNzE0IDEuNTMuMDUxIDIuNTUgMCA1LjEgMCA3LjY1MXpcIixcbiAgICBmaWxsOiBcIiM5Nzk3OTdcIlxuICB9KSksIF9wYXRoNSB8fCAoX3BhdGg1ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk04MS42MTIgNy43NTNjLS42MTIuNTEtMS4wMiAxLjAyLTEuMDIgMS44ODcuMDUgNS4wNSAwIDEwLjA0Ny41MSAxNS4wOTcgMC0zLjIxMy0uMDUxLTYuNDc4IDAtOS42OSAwLS45Ny0uNDA4LTIuMDQxLjUxLTIuODU3IDAgMy45NzguMDUgNy45NTcgMCAxMS45MzUgMCAuNjYzLjQ1OSAxLjczNC0uNzE0IDEuODM2LTEuMjc1LjEwMi0uODY3LTEuMDItLjg2Ny0xLjY4My0uMDUxLTUuMSAwLTEwLjE1LS4wNTEtMTUuMjUuMDUtMS4wNzEuMjA0LTEuODg3IDEuNjMyLTEuMjc1ek0xMjYuMjQgNy41NDljLTEuOTM4LS4xMDItMy45MjcgMC01Ljg2Ni0uMDUxLTEuMjc1LS4wNTEtMS41ODEuNDU5LTEuNTgxIDEuNjMyLjA1MSAyLjU1IDAgNS4xIDAgNy42NXYyLjI5NWMwIDcuODU1IDAgNy44NTUgNy44NTUgNi45ODggNC42NDEtLjUxIDguMTA5LTQuNTQgOC4wMDctOS4yODMtLjEwMi01LjEtMy42MjEtOC45NzYtOC40MTUtOS4yMzF6bS45NjkgMTYuNzhjLTUuODE0IDEuMjc1LTYuNjgyLjYxMi02LjY4Mi01LjIwM3YtMi4yOTUtNi4zMjRjMC0uODE2LjE1My0xLjUzIDEuMjI1LTEuNDggMS45MzguMTAzIDMuOTI3LS4wNSA1LjgxNC4zNTggMy4yNjQuNjYzIDUuMjUzIDMuNzIzIDUuMTUxIDcuNDk3LS4wNTEgNC4wMy0yLjA0IDYuNjgyLTUuNTA4IDcuNDQ3ek0yMDkuMzI0IDI0LjYzNWMtMi4yNDQtNS4zMDUtNC40ODgtMTAuNjA5LTYuNzgzLTE1Ljg2Mi0uMjA0LS41MS0uMzU3LTEuMTczLTEuMTIyLTEuMjI0LS45MTgtLjA1MS0xLjA3MS43MTQtMS4zMjYgMS4zMjYtMi4yNDQgNS4zMDQtNC40ODkgMTAuNjA4LTYuNjgyIDE1LjkxMy0uMTUzLjQwOC0uNjYzLjk2OS4xNTMgMS4yMjQuNTYxLjIwNCAxLjAyLS4wNTEgMS4yNzUtLjU2MS4yNTUtLjUxLjYxMi0xLjA3MS43MTQtMS42MzIuNDA4LTIuMDkxIDEuNjg0LTIuNzU1IDMuNjczLTIuMzk3LjY2My4xMDEgMS4zNzcgMCAyLjcwMyAwIDIuNTUtLjUxIDUuMzA0LS4yNTYgNS44NjUgMy43NzQgMCAuMTAyLjEwMi4xNTMuMTAyLjIwNC4zMDYuNzE0LjkxOC44MTYgMS40NzkuNTEuNTYxLS4zMDYuMTAyLS44NjctLjA1MS0xLjI3NXptLTUuMzU1LTQuODQ2aC02LjYzYzEuMzc3LTMuMjY0IDIuNjAxLTYuMTIgNC4wMjktOS41MzcgMS4zMjYgMy4xNjIgMi40NDggNS43NjMgMy41MTkgOC4zNjQuNDA4LjkxOC0uMDUxIDEuMjI0LS45MTggMS4xNzN6XCIsXG4gICAgZmlsbDogXCIjOTc5Nzk3XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWVkaWNpbmFlOyIsInZhciBfcGF0aCwgX3BhdGgyO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnTWVkcGhvbmUocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMTgzLFxuICAgIGhlaWdodDogMzksXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNzcuMTk3IDE4LjE2MXY3LjYzYzAgLjkyNC0uNzMgMS41OS0xLjY1NSAxLjU5LS45NjcgMC0xLjY1NC0uNjY2LTEuNjU0LTEuNTl2LTcuMDA3YzAtMS43NC0uNzEtMi45MjItMi42ODctMi45MjItMi4xOTIgMC0zLjA1MiAxLjE4Mi0zLjA1MiAyLjl2Ny4wNWMwIC45MjQtLjczIDEuNTktMS42NTQgMS41OS0uOTY4IDAtMS42NTUtLjY2Ni0xLjY1NS0xLjU5di03LjAyOGMwLTEuNzQtLjcxLTIuOTIyLTIuNjg3LTIuOTIyLTIuMyAwLTMuMDUyIDEuMzU0LTMuMDUyIDMuMTM3djYuODEzYzAgLjkyNC0uNzA5IDEuNTktMS42NTQgMS41OS0uOTQ2IDAtMS42NTUtLjY2Ni0xLjY1NS0xLjU5VjE0LjY4YzAtLjkyNS43My0xLjY1NSAxLjY1NS0xLjY1NS45MjQgMCAxLjY1NC43MyAxLjY1NCAxLjY1NS41OC0uODgyIDEuODctMS44MjcgMy45MTItMS44MjcgMi41MTQgMCAzLjc2Ljc5NSA0LjUxMyAxLjk3Ny45NjctMS4zMTEgMi4zLTEuOTc3IDQuMzYzLTEuOTc3IDQuMTcgMCA1LjMwOCAyLjY2NSA1LjMwOCA1LjMwOHpNODYuMDczIDEyLjg1M2M1LjE1OCAwIDYuMTA0IDMuOTc2IDYuMTA0IDYuMDgyIDAgMS4xMzkgMCAyLjQ1LTEuODcgMi40NWgtNy41NDNjMCAyLjE5MiAxLjU0NyAzLjIwMiAzLjU2NyAzLjIwMiAxLjM1NCAwIDIuMy0uNDUxIDMuMDMtLjk0NS4zNDQtLjIxNS41OC0uMzQ0Ljk2OC0uMzQ0Ljc5NSAwIDEuNDQuNjQ0IDEuNDQgMS40NCAwIC40OTQtLjIzNy44OC0uNTE2IDEuMTM5LS41MTYuNDk0LTIuMTI4IDEuNjc2LTQuOTIyIDEuNjc2LTQuMjM0IDAtNi44NzctMi4zLTYuODc3LTcuMzkzLjAyMi00LjY4NSAyLjQ3Mi03LjMwNyA2LjYyLTcuMzA3em0tMy4yMDIgNS43ODFoNi4wNGMwLTEuNTA0LS44Ni0yLjk2Ni0yLjgzOC0yLjk2Ni0xLjc2MiAwLTMuMDUxIDEuMDEtMy4yMDIgMi45NjZ6TTEwMy4zOTUgMTQuMDc4VjcuMDVjMC0uOTI0LjczMS0xLjY1NSAxLjY1NS0xLjY1NXMxLjY1NS43MyAxLjY1NSAxLjY1NXYxNC4zNzhjMCA0LjA2MS0yLjYyMiA2LjEwMy02LjMxOSA2LjEwMy00LjEyNiAwLTYuNTMzLTIuMzQyLTYuNTMzLTcuMzI4IDAtNC45ODYgMi4zNDMtNy4zNSA2LjE5LTcuMzUgMS40NjEgMCAyLjcyOS42MDEgMy4zNTIgMS4yMjV6bTAgMy4xMzdzLTEuMTgyLTEuNTQ3LTMuMDMtMS41NDdjLTIuMDg1IDAtMy4yNjcgMS41MjYtMy4yNjcgNC41NTYgMCAyLjk4OCAxLjE2IDQuNTEzIDMuMjY3IDQuNTEzIDEuNzYyIDAgMy4wMy0xLjE4MiAzLjAzLTMuMjg4di00LjIzNHpNMTE2LjYzNCAxMi44NTNjMy45OTggMCA2LjE5IDIuMzQyIDYuMTkgNy4zMjggMCA0Ljk4Ni0yLjIzNSA3LjM1LTYuMTkgNy4zNS0xLjUyNiAwLTIuODgtLjQ5NC0zLjYxLTEuMzF2NS4zOTRjMCAuOTI0LS43MzEgMS42NTUtMS42NTUgMS42NTVzLTEuNjU1LS43MzEtMS42NTUtMS42NTVWMTQuNjhjMC0uOTI1LjczMS0xLjY1NSAxLjY1NS0xLjY1NXMxLjY1NS43MyAxLjY1NSAxLjY1NWMuNDcyLS43NTMgMS45MTItMS44MjcgMy42MS0xLjgyN3ptLS40MyAyLjgxNWMtMi4xMjcgMC0zLjI2NiAxLjUyNi0zLjI2NiA0LjU1NiAwIDIuOTg4IDEuMTM5IDQuNTE0IDMuMjY2IDQuNTE0IDIuMTI4IDAgMy4yODgtMS41MjYgMy4yODgtNC41MzUgMC0zLjAwOS0xLjEzOS00LjUzNS0zLjI4OC00LjUzNXpNMTI4LjU4MyAxNC42OGMuNTgxLS44ODIgMS44Ny0xLjgyNyAzLjkxMi0xLjgyNyA0LjE0OCAwIDUuMTM2IDIuNjY1IDUuMTM2IDUuMzA4djcuNjNjMCAuOTI0LS43MyAxLjU5LTEuNjU1IDEuNTktLjk2NyAwLTEuNjU0LS42NjYtMS42NTQtMS41OXYtNy4wMDdjMC0xLjc0LS43MS0yLjkyMy0yLjY4Ny0yLjkyMy0yLjI5OSAwLTMuMDUyIDEuMzU0LTMuMDUyIDMuMTM4djYuODEzYzAgLjkyNC0uNzA5IDEuNTktMS42NTQgMS41OS0uOTQ2IDAtMS42NTUtLjY2Ni0xLjY1NS0xLjU5VjcuMDVjMC0uOTI0LjczLTEuNjU1IDEuNjU1LTEuNjU1LjkyNCAwIDEuNjU0LjczIDEuNjU0IDEuNjU1djcuNjN6TTE0Ni41NzIgMjcuNTUzYy00LjEyNyAwLTYuNjg0LTIuMzQzLTYuNjg0LTcuMzI5IDAtNS4wMDcgMi41NTctNy4zNSA2LjY4NC03LjM1IDQuMTI2IDAgNi42ODQgMi4zNDMgNi42ODQgNy4zNSAwIDQuOTY1LTIuNTU4IDcuMzI5LTYuNjg0IDcuMzI5em0wLTExLjg4NWMtMi4xOTIgMC0zLjM1MyAxLjUyNi0zLjM1MyA0LjU1NiAwIDIuOTg3IDEuMTYxIDQuNTEzIDMuMzUzIDQuNTEzczMuMzUyLTEuNTI2IDMuMzUyLTQuNTEzYzAtMy4wMy0xLjE2LTQuNTU2LTMuMzUyLTQuNTU2ek0xNjcuOTk5IDE4LjE2MXY3LjYzYzAgLjkyNC0uNzMxIDEuNTktMS42NTUgMS41OS0uOTY3IDAtMS42NTUtLjY2Ni0xLjY1NS0xLjU5di03LjAwN2MwLTEuNzQtLjcwOS0yLjkyMi0yLjY4Ny0yLjkyMi0yLjI5OSAwLTMuMDUxIDEuMzU0LTMuMDUxIDMuMTM3djYuODEzYzAgLjkyNC0uNzEgMS41OS0xLjY1NSAxLjU5LS45NDYgMC0xLjY1NS0uNjY2LTEuNjU1LTEuNTlWMTQuNjhjMC0uOTI1LjczMS0xLjY1NSAxLjY1NS0xLjY1NXMxLjY1NS43MyAxLjY1NSAxLjY1NWMuNTgtLjg4MiAxLjg2OS0xLjgyNyAzLjkxMS0xLjgyNyA0LjE2OSAwIDUuMTM3IDIuNjY1IDUuMTM3IDUuMzA4ek0xNzYuODk2IDEyLjg1M2M1LjE1OCAwIDYuMTA0IDMuOTc2IDYuMTA0IDYuMDgyIDAgMS4xMzkgMCAyLjQ1LTEuODcgMi40NWgtNy41NDNjMCAyLjE5MiAxLjU0NyAzLjIwMiAzLjU2NyAzLjIwMiAxLjM1NCAwIDIuMy0uNDUxIDMuMDMxLS45NDUuMzQzLS4yMTUuNTgtLjM0NC45NjctLjM0NC43OTUgMCAxLjQ0LjY0NCAxLjQ0IDEuNDQgMCAuNDk0LS4yMzcuODgtLjUxNiAxLjEzOS0uNTE2LjQ5NC0yLjEyOCAxLjY3Ni00LjkyMiAxLjY3Ni00LjIzNCAwLTYuODc3LTIuMy02Ljg3Ny03LjM5My4wMjEtNC42ODUgMi40NS03LjMwNyA2LjYxOS03LjMwN3ptLTMuMjIzIDUuNzgxaDYuMDM5YzAtMS41MDQtLjg2LTIuOTY2LTIuODM3LTIuOTY2LTEuNzYyIDAtMy4wMyAxLjAxLTMuMjAyIDIuOTY2ek0wIDcuOTk2djI2LjA2OWE0LjYxMyA0LjYxMyAwIDAwNC42MiA0LjYyIDQuNjEzIDQuNjEzIDAgMDA0LjYyMS00LjYydi0xNi43MmwtOC42Ni04LjY0QTguNDE2IDguNDE2IDAgMDEwIDcuOTk1ek0xNi4wNzYgMTYuMDM0Yy0uMTA4LjEwNy0uMjE1LjIxNS0uMzAxLjM0NGEuNDUxLjQ1MSAwIDAwLS4wODYuMTI4Yy0uMDY1LjA4Ni0uMTMuMTUtLjE3Mi4yMzctLjA0My4wNjQtLjA2NS4xMDctLjEwOC4xNzItLjA0My4wNjQtLjA4Ni4xNS0uMTI5LjIxNWEuNzY1Ljc2NSAwIDAwLS4wODUuMTkzLjY0My42NDMgMCAwMC0uMDg3LjIxNWMtLjAyMS4wNjQtLjA2NC4xNS0uMDg1LjIxNWwtLjA2NS4xOTNjLS4wMjEuMDg2LS4wNDMuMTUtLjA2NC4yMzctLjAyMi4wNjQtLjAyMi4xMjktLjA0My4xNzItLjAyMi4wODYtLjAyMi4xNzItLjA0My4yNTggMCAuMDY0LS4wMjIuMTA3LS4wMjIuMTcyIDAgLjA4NS0uMDIxLjE5My0uMDIxLjI3OXYuNTgxYzAgLjEwNy4wMjEuMjE0LjAyMS4zIDAgLjA0MyAwIC4wNjQuMDIyLjEwN2wuMDY0LjMyM2MwIC4wMjEuMDIyLjA2NC4wMjIuMDg2LjAyMS4xMDcuMDY0LjIxNS4xMDcuMzQ0IDAgLjAyMS4wMjIuMDQzLjAyMi4wNjQuMDQzLjEwOC4wODUuMjM3LjEyOS4zNDQgMCAuMDIxLjAyMS4wMjEuMDIxLjA0My4wNjUuMTA3LjEwNy4yMzYuMTcyLjM0NGwuMDIxLjAyMWMuMDY1LjEwOC4xNS4yMzcuMjE1LjM0NHYuMDIyYy4xNS4yMTUuMzIzLjQwOC40OTUuNjAyYTQuNjE1IDQuNjE1IDAgMDA1LjQxNS44MTZzLjAyMiAwIC4wMjItLjAyMWMuMTI5LS4wNjUuMjU4LS4xMy4zNjUtLjIxNS4wMjItLjAyMi4wNDMtLjA0My4wODYtLjA2NS4xMDgtLjA2NC4xOTQtLjEyOS4zMDEtLjIxNS4wMjItLjAyMS4wNjUtLjA0My4wODYtLjA4Ni4wODYtLjA4NS4xNzItLjE1LjI1OC0uMjM2bDUuNzE3LTUuNzE3VjQuNmMwLS4zLjAyMS0uNjAyLjA4Ni0uODgxbC05LjAyNyA5LjAyNi0zLjMxIDMuMjg5elwiLFxuICAgIGZpbGw6IFwiIzk3OTc5N1wiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE1LjI2IDE1LjIxN2wzLjI2Ni0zLjI2N0w3LjkzMSAxLjM1NUE0LjU5OSA0LjU5OSAwIDAwMi45MjMuMzQ1cy0uMDIxIDAtLjAyMS4wMjFhMS45MDUgMS45MDUgMCAwMC0uMzY1LjE3MkMyLjUxNS41NiAyLjQ5NC41NiAyLjQ1LjU4MWMtLjEwOC4wNjUtLjIxNS4xMDgtLjMyMy4xOTNhLjM4Ni4zODYgMCAwMC0uMTUuMTA4Yy0uMDY1LjA0My0uMTUuMTA3LS4yMTUuMTUtLjEyOS4xMDgtLjIzNy4yMTUtLjM2NS4zMjNhNC42MTggNC42MTggMCAwMDAgNi41MzNsNy44MjIgNy44MjMgNC4zODUgNC4zODRhNC43NjQgNC43NjQgMCAwMS0uMDY1LS43OTUgNS44MzMgNS44MzMgMCAwMTEuNzItNC4wODN6TTM0LjA2NC4wMDFhNC42MTQgNC42MTQgMCAwMC00LjYyIDQuNjJ2MjkuNDY2YTQuNjE0IDQuNjE0IDAgMDA0LjYyIDQuNjIgNC42MTQgNC42MTQgMCAwMDQuNjItNC42MlY0LjYyMkE0LjYxNCA0LjYxNCAwIDAwMzQuMDY1IDB6XCIsXG4gICAgZmlsbDogXCIjOTc5Nzk3XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWVkcGhvbmU7IiwidmFyIF9nLCBfZGVmcztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z1BlYm1lZChwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAxNTUsXG4gICAgaGVpZ2h0OiAzOCxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX2cgfHwgKF9nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBjbGlwUGF0aDogXCJ1cmwoI3BlYm1lZF9zdmdfX2NsaXAwKVwiLFxuICAgIGZpbGw6IFwiIzk3OTc5N1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTA4LjcgMTguNkwxMDEuMyA4aC0yLjZ2MjEuN2gzLjJWMTQuNWw1LjggOC40aDEuOGw1LjgtOC40djE1LjNoMy4yVjguMUgxMTZsLTcuMyAxMC41ek0xMjQuMiAyMC40aDEwLjF2LTMuMmgtMTAuMXYtNi4xaDEwLjNWOEgxMjF2MjEuN2gxMy42di0zLjFoLTEwLjN2LTYuMmgtLjF6TTE0NC4xIDhoLTh2MjEuN2g4YzcuMyAwIDEwLjktNS40IDEwLjktMTAuOFMxNTEuMyA4IDE0NC4xIDh6bTAgMTguNmgtNC44VjExLjFoNC44YzUuMiAwIDcuOCAzLjkgNy44IDcuNy0uMSAzLjktMi43IDcuOC03LjggNy44ek01Ni45IDhoLTcuNXYyMC45aDEuOXYtNy40aDUuNmM0LjUgMCA2LjUtMy41IDYuNS02LjcgMC0xLjgtLjYtMy40LTEuNi00LjdDNjAuNiA4LjcgNTguOSA4IDU2LjkgOHptMCAxMS42aC01LjZWOS44aDUuNmMyLjMgMCA0LjcgMS41IDQuNyA0LjkgMCAzLjQtMi40IDQuOS00LjcgNC45ek02OCAxOS40aDEwLjF2LTEuOUg2OFY5LjloMTAuM1Y4SDY2LjF2MjAuOWgxMi4yVjI3SDY4di03LjZ6TTkzLjMgMTcuOWwtMS4xLS41IDEtLjdjMi4xLTEuNSAyLjEtMy44IDEuNC01LjVDOTQuMSAxMCA5Mi45IDggODkuOCA4aC04LjZ2MjAuOWg5LjRjMy44IDAgNS44LTMgNS44LTYtLjEtMS4xLS40LTMuOC0zLjEtNXpNODMgOS43aDYuOGMxLjYgMCAzLjMgMS4xIDMuMyAzLjVzLTEuNyAzLjYtMy4zIDMuNkg4M1Y5Ljd6bTcuNSAxNy40SDgzdi04LjVoNy42YzIgMCAzLjkgMS40IDMuOSA0LjIgMCAyLjktMiA0LjMtNCA0LjN6TTI5LjcgMTkuMmw1LjYuMWMuMSAwIC4xIDAgLjItLjFzLjEtLjEuMS0uMmMtLjEtLjQtLjItLjgtLjUtMS4xbC0xMC0xMGMtLjMtLjQtLjgtLjYtMS40LS42LS41IDAtLjkuMi0xLjMuNWwtMS44IDEuOWMtLjEuMS0uMS4zIDAgLjRsOC45IDguOS4yLjJ6TTEyIDE4LjhsLTUuNi0uMWMtLjEgMC0uMSAwLS4yLjFzLS4xLjEtLjEuMmMuMS40LjIuOC41IDEuMWwxMCAxMGMuMy40LjguNiAxLjMuNmguMWMuNSAwIC45LS4yIDEuMy0uNWwxLjgtMS45Yy4xLS4xLjEtLjMgMC0uNEwxMi4yIDE5YzAtLjItLjEtLjItLjItLjJ6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjUuOCAxLjljLS4xLS4xLS4yLS4yLS40LS4zIDAgMC0uMSAwLS4xLS4xbC0uMS0uMWMtLjEgMC0uMS0uMS0uMi0uMS0uMS0uMS0uMi0uMS0uMy0uMmgtLjFjLS4xLS4xLS4zLS4xLS40LS4xaC0xYy0uMSAwLS4xIDAtLjIuMXMtLjIuMS0uMy4yTDYuOCAxN2MtLjEuMS0uMS4yLS4yLjN2LjJjLS4xLjEtLjEuMi0uMS4zVjE4LjFjMCAuMS4xLjEuMi4xbDUuMi4xYy4xIDAgLjEgMCAuMi0uMUwyMi4yIDcuNWMuNC0uNC45LS42IDEuNS0uNmguMWMuNiAwIDEuMS4yIDEuNS43bDEwIDEwYy40LjQuNi44LjYgMS40di40bC0uMS4zdi42bC0uMS4yaC0uMWwtLjIuM3MtLjEgMC0uMS4xTDIzLjUgMzIuNWwtMy40IDMuM2MtLjQuNC0uOS43LTEuNC44IDAgMC0uMSAwLS4xLjFIMTguM2MtLjEgMC0uMi4xLS4yLjJzLjEuMi4yLjNjLjguMyAxLjcuNSAyLjUuNWguNmMxLjggMCAzLjMtLjYgNC40LTEuNkw0MC45IDIxYy42LS41LjktMS4zLjktMi4xcy0uMy0xLjUtLjgtMi4xTDI1LjggMS45elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE4LjEgMzYuNWguMmMuMSAwIC4zLS4xLjQtLjFsLjYtLjNjLjItLjEuNC0uMy41LS40bDMuNC0zLjNMMzUgMjAuNWwuMS0uMS4xLS4xczAtLjEuMS0uMWwuMS0uMnYtLjNjMC0uMS0uMS0uMS0uMi0uMWwtNS4yLS4xYy0uMSAwLS4xIDAtLjIuMUwxOS42IDMwLjNjLS40LjQtLjkuNy0xLjUuN0gxOGMtLjYgMC0xLjEtLjItMS41LS43bC0xMC0xMGMtLjUtLjUtLjctMS4xLS43LTEuNyAwLS4xIDAtLjMuMS0uNHYtLjFjMC0uMSAwLS4yLjEtLjNsLjMtLjYuMy0uM0wyMi4yIDEuMmMuMS0uMS4yLS4yLjQtLjMgMCAwIC4xIDAgLjEtLjFoLjFjLjEgMCAuMi0uMS4yLS4zIDAtLjEtLjEtLjItLjItLjJMMjEgMGgtLjZDMTguNSAwIDE3IC42IDE2IDEuNkwuOSAxNi42Yy0uNi42LS45IDEuMy0uOSAyLjFzLjMgMS41LjggMi4xbDE1IDE1LjFzLjEuMS4yLjFsLjEuMS4xLjEuMy4xSDE2LjhjLjMuMS42LjIuOC4yaC41elwiXG4gIH0pKSksIF9kZWZzIHx8IChfZGVmcyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGVmc1wiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNsaXBQYXRoXCIsIHtcbiAgICBpZDogXCJwZWJtZWRfc3ZnX19jbGlwMFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbDogXCIjZmZmXCIsXG4gICAgZDogXCJNMCAwaDE1NXYzOEgwelwiXG4gIH0pKSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUGVibWVkOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ0blwiOiBcIkJ1dHRvbl9idG5fX2dGM2pwXCJcbn07XG4iLCJpbXBvcnQgc2NzcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBJQnV0dG9uUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuZnVuY3Rpb24gQnV0dG9uKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgb25DbGljaywgdG8gfTogSUJ1dHRvblByb3BzKSB7XG4gIGNvbnN0IGJ1dHRvbkNsYXNzID0gW3Njc3MuYnRuXTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAob25DbGljaykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb25DbGljayhlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQnV0dG9uID0gKCkgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG5cbiAgY29uc3QgcmVuZGVyTGluayA9ICgpID0+IChcbiAgICA8YVxuICAgICAgaHJlZj17dG99XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3Muam9pbignICcpfVxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG5cbiAgaWYgKGNsYXNzTmFtZSkgYnV0dG9uQ2xhc3MucHVzaChjbGFzc05hbWUpO1xuXG4gIHJldHVybiB0byA/IHJlbmRlckxpbmsoKSA6IHJlbmRlckJ1dHRvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWN0aW9uXCI6IFwiQ29udGFpbmVyX3NlY3Rpb25fX1VXbndBXCIsXG5cdFwiYmtnZERhcmtHcmF5XCI6IFwiQ29udGFpbmVyX2JrZ2REYXJrR3JheV9fRGxXYjZcIixcblx0XCJia2dkR3JheVwiOiBcIkNvbnRhaW5lcl9ia2dkR3JheV9fMVhTTUhcIixcblx0XCJia2dkTGlnaHRHcmF5XCI6IFwiQ29udGFpbmVyX2JrZ2RMaWdodEdyYXlfXzN3MVZ2XCIsXG5cdFwiYmtnZFdoaXRlXCI6IFwiQ29udGFpbmVyX2JrZ2RXaGl0ZV9fbm9kRk5cIixcblx0XCJub1BhZGRpbmdcIjogXCJDb250YWluZXJfbm9QYWRkaW5nX19xaFhrV1wiXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGFpbmVyLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGVudW0gbGlzdEJhY2tncm91bmQge1xuICBia2dkRGFya0dyYXkgPSAnYmtnZERhcmtHcmF5JyxcbiAgYmtnZEdyYXkgPSAnYmtnZEdyYXknLFxuICBia2dkTGlnaHRHcmF5ID0gJ2tnZExpZ2h0R3JheScsXG4gIGJrZ2RXaGl0ZSA9ICdia2dkV2hpdGUnLFxufVxuXG5pbnRlcmZhY2UgQ29udGFpbmVyUHJvcHMge1xuICBiYWNrZ3JvdW5kQ29sb3I6IGtleW9mIHR5cGVvZiBsaXN0QmFja2dyb3VuZDtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBpZDogc3RyaW5nO1xuICBub1BhZGRpbmc/OiBib29sZWFuO1xufVxuXG5jb25zdCBDb250YWluZXI6IFJlYWN0LkZDPENvbnRhaW5lclByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBDb250YWluZXJDbGFzcyA9IFtzdHlsZXMuc2VjdGlvbiwgc3R5bGVzW3Byb3BzLmJhY2tncm91bmRDb2xvcl1dO1xuICBpZiAocHJvcHMuY2xhc3NOYW1lKSBDb250YWluZXJDbGFzcy5wdXNoKHByb3BzLmNsYXNzTmFtZSk7XG4gIGlmIChwcm9wcy5ub1BhZGRpbmcpIENvbnRhaW5lckNsYXNzLnB1c2goc3R5bGVzLm5vUGFkZGluZyk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9e3Byb3BzLmlkfSBjbGFzc05hbWU9e0NvbnRhaW5lckNsYXNzLmpvaW4oJyAnKX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVdpbmRvd1dpZHRoQ2hhbmdlKGNhbGxiYWNrOiBhbnkpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiBjYWxsYmFjayh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0pO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZnJvbTMyMFwiOiBcIjMyMHB4XCIsXG5cdFwiZnJvbTM2MFwiOiBcIjM2MHB4XCIsXG5cdFwiZnJvbTQwMFwiOiBcIjQwMHB4XCIsXG5cdFwiZnJvbTQ4MFwiOiBcIjQ4MHB4XCIsXG5cdFwiZnJvbTYwMFwiOiBcIjYwMHB4XCIsXG5cdFwiZnJvbTcyMFwiOiBcIjcyMHB4XCIsXG5cdFwiZnJvbTg0MFwiOiBcIjg0MHB4XCIsXG5cdFwiZnJvbTk2MFwiOiBcIjk2MHB4XCIsXG5cdFwiZnJvbTEwMjRcIjogXCIxMDI0cHhcIixcblx0XCJmcm9tMTI4MFwiOiBcIjEyODBweFwiLFxuXHRcImZyb20xNDQwXCI6IFwiMTQ0MHB4XCIsXG5cdFwiZnJvbTE2MDBcIjogXCIxNjAwcHhcIixcblx0XCJmcm9tMTkyMFwiOiBcIjE5MjBweFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18yN1Q3b1wiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzN1MExqXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fVksyQXdcIlxufTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ib21lLm1vZHVsZS5zY3NzJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi9zZWN0aW9ucy9CYW5uZXIvQmFubmVyJztcbmltcG9ydCBCZW5lZmljaW9zIGZyb20gJy4vc2VjdGlvbnMvQmVuZWZpY2lvcy9CZW5lZmljaW9zJztcbmltcG9ydCBFeEFsdW5vIGZyb20gJy4vc2VjdGlvbnMvRXhBbHVuby9FeEFsdW5vJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBKYUZhelBhcnRlIGZyb20gJy4vc2VjdGlvbnMvSmFGYXpQYXJ0ZS9KYUZhelBhcnRlJztcbi8vIGltcG9ydCBNZW51IGZyb20gJy4vc2VjdGlvbnMvTWVudS9NZW51JztcbmltcG9ydCBPcXVlRSBmcm9tICcuL3NlY3Rpb25zL09xdWVFL09xdWVFJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFmeWEgVmVudHVyZXM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0dlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7LyogPE1lbnUgLz4gKi99XG4gICAgICA8QmFubmVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPE9xdWVFIC8+XG4gICAgICAgIDxCZW5lZmljaW9zIC8+XG4gICAgICAgIDxFeEFsdW5vIC8+XG4gICAgICAgIDxKYUZhelBhcnRlIC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZyb20zMjBcIjogXCIzMjBweFwiLFxuXHRcImZyb20zNjBcIjogXCIzNjBweFwiLFxuXHRcImZyb200MDBcIjogXCI0MDBweFwiLFxuXHRcImZyb200ODBcIjogXCI0ODBweFwiLFxuXHRcImZyb202MDBcIjogXCI2MDBweFwiLFxuXHRcImZyb203MjBcIjogXCI3MjBweFwiLFxuXHRcImZyb204NDBcIjogXCI4NDBweFwiLFxuXHRcImZyb205NjBcIjogXCI5NjBweFwiLFxuXHRcImZyb20xMDI0XCI6IFwiMTAyNHB4XCIsXG5cdFwiZnJvbTEyODBcIjogXCIxMjgwcHhcIixcblx0XCJmcm9tMTQ0MFwiOiBcIjE0NDBweFwiLFxuXHRcImZyb20xNjAwXCI6IFwiMTYwMHB4XCIsXG5cdFwiZnJvbTE5MjBcIjogXCIxOTIwcHhcIixcblx0XCJjb250YWluZXJcIjogXCJCYW5uZXJfY29udGFpbmVyX18xdklPZ1wiLFxuXHRcImltZ1wiOiBcIkJhbm5lcl9pbWdfXzNqUVg3XCIsXG5cdFwiYmdHcmFkaWVudFwiOiBcIkJhbm5lcl9iZ0dyYWRpZW50X19Ga1J1SVwiLFxuXHRcImFmeWFWZWN0b3JcIjogXCJCYW5uZXJfYWZ5YVZlY3Rvcl9fM0ZXZFJcIixcblx0XCJjb250ZW50XCI6IFwiQmFubmVyX2NvbnRlbnRfXzFoZFpFXCIsXG5cdFwibG9nb1wiOiBcIkJhbm5lcl9sb2dvX18zMHNkNFwiLFxuXHRcInJlbGVhc2VcIjogXCJCYW5uZXJfcmVsZWFzZV9fMlpkaFBcIixcblx0XCJkYXRlV3JhcHBlclwiOiBcIkJhbm5lcl9kYXRlV3JhcHBlcl9fMTFTVmlcIixcblx0XCJkaXZpZGVyXCI6IFwiQmFubmVyX2RpdmlkZXJfXzJYYkZBXCIsXG5cdFwiZGF0ZVwiOiBcIkJhbm5lcl9kYXRlX18yRElIY1wiLFxuXHRcInNjaGVkdWxlXCI6IFwiQmFubmVyX3NjaGVkdWxlX18xQnhISVwiLFxuXHRcImJ0blwiOiBcIkJhbm5lcl9idG5fXzJpY1o1XCIsXG5cdFwiYnRuSWNvblwiOiBcIkJhbm5lcl9idG5JY29uX18yV1lNSVwiXG59O1xuIiwiaW1wb3J0IFNlbmRTVkcgZnJvbSAnfmFzc2V0cy9pY29ucy9JY29uU2VuZC5zdmcnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICd+Y29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcblxuaW1wb3J0IHNjc3MgZnJvbSAnLi9CYW5uZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEFmeWFWZWN0b3JTVkcgZnJvbSAnLi9pbWFnZXMvQWZ5YVZlY3Rvci5zdmcnO1xuaW1wb3J0IEFmeWFWZW50dXJlc1NWRyBmcm9tICcuL2ltYWdlcy9BZnlhVmVudHVyZXMuc3ZnJztcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlcy9iYW5uZXIuanBnJztcblxuZnVuY3Rpb24gQmFubmVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzY3NzLmNvbnRhaW5lcn0+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgIGNsYXNzTmFtZT17c2Nzcy5pbWd9XG4gICAgICAgIGFsdD1cImEgbWFuIGhvbGRpbmcgYSBsaWdodGVkIGxhbXBcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzY3NzLmJnR3JhZGllbnR9IC8+XG4gICAgICA8QWZ5YVZlY3RvclNWRyBjbGFzc05hbWU9e3Njc3MuYWZ5YVZlY3Rvcn0gLz5cbiAgICAgIDxBZnlhVmVjdG9yU1ZHIGNsYXNzTmFtZT17c2Nzcy5hZnlhVmVjdG9yfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Njc3MuY29udGVudH0+XG4gICAgICAgIDxBZnlhVmVudHVyZXNTVkcgY2xhc3NOYW1lPXtzY3NzLmxvZ299IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c2Nzcy5yZWxlYXNlfT5MQU7Dh0FNRU5UTzwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Njc3MuZGF0ZVdyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzY3NzLmRpdmlkZXJ9IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzY3NzLmRhdGV9PlxuICAgICAgICAgICAgPHN0cm9uZz4yNi4wNTwvc3Ryb25nPiB8IDE5SFJTXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzY3NzLmRpdmlkZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Njc3Muc2NoZWR1bGV9PkhPUsOBUklPIERFIEJSQVPDjUxJQTwvc3Bhbj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3Njc3MuYnRufSB0bz1cImh0dHBzOi8vZm9ybXMub2ZmaWNlLmNvbS9yL1BBanJNTjNOUXRcIj5cbiAgICAgICAgICBJTlNDUkVWQS1TRSBQQVJBIEFTU0lTVElSIEEgTElWRSA8U2VuZFNWRyBjbGFzc05hbWU9e3Njc3MuYnRuSWNvbn0gLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnQWZ5YVZlY3Rvcihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiA4MTgsXG4gICAgaGVpZ2h0OiA5MzYsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgb3BhY2l0eTogMC41LFxuICAgIGQ6IFwiTS0zMzEuMTA1IDkzNC42MTJMMjQyLjgzNiAxLjc2bDU3My44OTkgOTMyLjg1Mkg2NjcuNjA5bC00MjQuMzQ3LTY4OS43NS0uNDI2LS42OTItLjQyNi42OTItNDI0LjM4OSA2ODkuNzVoLTE0OS4xMjZ6XCIsXG4gICAgc3Ryb2tlOiBcIiNmZmZcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdBZnlhVmVjdG9yOyIsInZhciBfZGVmcywgX2c7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdBZnlhVmVudHVyZXMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDYyOC44MyAxMDUuNjNcIlxuICB9LCBwcm9wcyksIF9kZWZzIHx8IChfZGVmcyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGVmc1wiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIG51bGwsIFwiLkFmeWFWZW50dXJlc19zdmdfX2Nscy0xe2ZpbGw6I2QwMDA2M30uQWZ5YVZlbnR1cmVzX3N2Z19fY2xzLTJ7ZmlsbDojZDAwMTYzfS5BZnlhVmVudHVyZXNfc3ZnX19jbHMtNHtmaWxsOiNkMDAyNjR9LkFmeWFWZW50dXJlc19zdmdfX2Nscy01e2ZpbGw6I2QwMDM2NH1cIikpKSwgX2cgfHwgKF9nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBpZDogXCJBZnlhVmVudHVyZXNfc3ZnX19MYXllcl8yXCIsXG4gICAgXCJkYXRhLW5hbWVcIjogXCJMYXllciAyXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBpZDogXCJBZnlhVmVudHVyZXNfc3ZnX19MYXllcl8xLTJcIixcbiAgICBcImRhdGEtbmFtZVwiOiBcIkxheWVyIDFcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJBZnlhVmVudHVyZXNfc3ZnX19jbHMtMVwiLFxuICAgIGQ6IFwiTTk3LjkgMTAuOWExOC4zOSAxOC4zOSAwIDAxMTEtMTAuOWg3Ljc2YzUuNDkgMiA5LjY3IDUuMTcgMTEuMzggMTEuMTIuNjEgMi4xMy4xNSAzLjQ0LTEuNDYgNC42My00IDIuMTItNy4yNS41OC0xMC4zMi0yLTMuNDEtMi44Ny02LjQ3LTItNi44MyAyLjUyLS43NCA4LjktLjM4IDE3Ljg2LS4xNyAyNi43OS4wNiAyLjU4IDIgMy4yMSA0LjE1IDMuMjcgMy42Ni4wOSA3LjMyLjI0IDExIDAgNi0uMzkgOS42OCAyLjE2IDExLjggNy43M3M1IDEwLjYzIDguMSAxNi41NGExMjQuNCAxMjQuNCAwIDAwOC44Ny0xNy41MWMyLjQ1LTUuNTYgNi45My04IDEyLjMtNi44MSAzLjg2LjgzIDQuODQgMi4zMyAzLjI4IDYtMi4yNiA1LjMzLTQuNDkgMTAuNjktNy4yNiAxNS43OS0xLjUxIDIuNzctMi41IDUuNzgtMy44IDguNjRhNTMgNTMgMCAwMC04IDI1Ljc1Yy0yLjE4IDIuNTctNS4xMiAxLjc4LTcuODYgMS42NC0yLjI3LS4xMS0yLjMyLTEuODItMi4zMS0zLjU5IDAtMi40My42NC00LjkzLS41OS03LjI3LTMuMjItNy41OS02Ljg0LTE1LTEwLjMzLTIyLjQ1LTEtMi4xLTEuODUtNC4yNS0yLjkyLTYuMzItMi42OC01LjIyLTYuMjMtNi42Ny0xMS44NC01LTQuMTcgMS4yNi00LjI4IDQuODctNC40IDguMDZhMjM5Ljc5IDIzOS43OSAwIDAwLjEzIDI2LjgxYy4xMyAxLjguNzUgMy42My0uODMgNS4xNC4zNCA1LTIuODcgNC42Ni02LjQ0IDQuODQtNC44OC4yNS00LjE5LTMtNC41LTUuODQtMS43NS0yLjExLTEuNS00LjY1LTEuNS03LjExIDAtNS40NS0uMTctMTAuOS4xLTE2LjM0LS4wOS0yLjY0IDAtNS4yOCAwLTcuOTIgMC02LjQ0IDAtNi42Mi02LjMyLTcuNjgtNC42My0uNzgtNy41Mi0zLjEtOC43LTcuNjEtLjg1LTMuMjYuMzEtNS4xMSAzLjc0LTUuNDZhNDkuMjggNDkuMjggMCAwMTYtLjE3YzMuOC4wOCA1LjM0LTEuNzggNS4zMy01LjQ2VjE3LjQ0Yy0uMTMtMi4yOS0uNDYtNC43IDEuNDQtNi41NHpNMCAxMDIuNTVDNi4zNSA5My4zOSAxMCA4Mi44OSAxNC44NyA3MyAyNS40OCA1MS4zOCAzNS43IDI5LjU3IDQ2LjIyIDcuNTZjMy41OCA0LjQ3IDQuNTUgOS44OSA3LjY2IDE0LjE1IDEuOC42MSAyLjI4IDIuMjUgMyAzLjczIDcuMzggMTUuNDkgMTQuNjggMzEgMjIuMDUgNDYuNSAzLjYxIDYuODIgNi4yOSAxNC4wOCA5LjkyIDIwLjg5Ljc1IDEuNDIgMS43MiAyLjg1IDEuMTggNC42M2wyLjQ3IDYuMzJIODIuMzJjLTIuMDkgMC0yLjY0LTEuNTItMy4zOS0zLTIuNzMtNS40MS00LjczLTExLjE3LTguMDktMTYuMjYtNC4xMi0zLTUuMzctNy44My03LjE1LTEyLjE4LTUtMTIuMDgtMTEuMy0yMy40OS0xNi44MS0zNi4yOWExNjYuNzkgMTY2Ljc5IDAgMDAtNy44MSAxNS4zOEMzNiA1OCAzMy41MiA2NC44NiAyOC44OCA3MC41OCAyNC40MyA3OS43MiAxOS43NCA4OC43NSAxNS42MyA5OGMtMS44MyA0LjE0LTMuOTEgNi41Mi04LjcyIDUuN2E1NC42MSA1NC42MSAwIDAwLTYuOS0uMzMgNC4xIDQuMSAwIDAxLS4wMS0uODJ6TTYyOC44MyA5Mi4zN2MtNy40NyAxMi40LTIxLjA4IDE1LjM0LTM1IDcuNTYtMS4zLS43Mi0yLjU1LTEuNTMtMy44Mi0yLjMuODUtNy4wNyAzLjA2LTguNCA5LjMtNS40OGEyNC45MSAyNC45MSAwIDAwMTEuNTIgMi42OGMzLjI2LS4xIDYuMTQtLjcxIDYuNjMtNC41MS40NS0zLjQyLTIuMjUtNC40OC00LjgtNS4zOS0zLjU5LTEuMjgtNy4yOS0yLjI5LTEwLjg1LTMuNjUtNy42MS0yLjkxLTExLjI5LTguMTktMTAuMzQtMTQuNSAxLjEzLTcuNTQgNi42NC0xMi40OCAxNC42MS0xMy4yMmEzMi4zMyAzMi4zMyAwIDAxMTcuNDIgMy4xOWMyIDEgNCAxLjg0IDIuNDggNC43OC0xLjM2IDIuNTctMi40MSA1LjM3LTYuMjEgMy44Ny0zLjU1LTEuNDEtNy0zLTExLTIuODYtMyAuMS01Ljg5LjU1LTYuNiA0czIuMiA0LjQyIDQuNjkgNS4zOWE2MCA2MCAwIDAwNyAyLjQ5IDIxLjggMjEuOCAwIDAxMTQuODYgMTEuNDVjLjA0IDIuMTMuMDcgNC4zMi4xMSA2LjV6TTI2Ni40OCA5Mi4zN2MtMi4xNyA0LjIxLTQuMzUgOC40MS02Ljg1IDEzLjI2LTMuMTctNi4xMy02LjA3LTExLjc1LTktMTcuMzhMMjI5IDQyYy0uNjktMS40OC0xLjMxLTMtMi4yNS01LjEyaDkuNzJjMi43OSAwIDMuNDMgMi4wOSA0LjM0IDQuMDdxOC40MyAxOC4yNyAxNyAzNi41YTM0Ljg2IDM0Ljg2IDAgMDAyIDMuMTdjNC42MS05LjY0IDguODktMTguNTMgMTMuMTMtMjcuNDMgMS40OS0zLjE0IDMuMjctNi4yMiA0LjI1LTkuNTIgMS42MS01LjQzIDQuNTktNy41OSAxMC40NC03IDMuNzQuMzkgNC42NS44NyAyLjkgNC40Ni02LjE2IDEyLjY2LTEyLjE0IDI1LjQxLTE4LjEyIDM4LjE1LTIuMTMgNC4zLTMuOTkgOC43Mi01LjkzIDEzLjA5ek01NzkuMTggOTQuNDdjLTMuMjMgNi4xNy0xMi43MyAxMC40My0yMS4zMiA5LjY2YTI4LjI3IDI4LjI3IDAgMDEtMTUuODYtNi40Yy01LjEtNS42LTguMTMtMTItOC0xOS43NC4wOC0zLjM2IDEuNC00LjY4IDQuODMtNC42MiA1LjU0LjEgMTAuODcuMzkgMTUuOCAzLjQ5IDMuNDggMi4xOSA2LjggMS4wOCA5LjE4LTIuMTUgMi4yMi0zIDIuMjQtNi4yNi0uMjktOS4xMXMtNS42NC00LjI5LTkuMjMtMS43NWMtNS4wOCAzLjYxLTEwLjcxIDMuOTUtMTcuMTMgMy4yOCAzLjc4LTguNjcgMTAuMjgtMTMgMTkuMDgtMTQuMTkgOC41OC0xLjE0IDE3LjU1IDMuNTIgMjEuODggMTFBMzIuODcgMzIuODcgMCAwMTU4MiA3NS4yMWMxIDUuODQtLjIxIDcuMjQtNi4xMSA3LjI5LTkuMzEuMDctMTguNjMgMC0yOCAwLTEuNTcgMC0zLjYxLS43Ny00LjU5LjkyLTEuMDggMS44NC40IDMuNDggMS40IDUgNSA3LjUzIDE1LjEgMTAuMTIgMjIuNzcgNC4zMSA1LjYxLTQuMjUgOC4zNS0yLjM0IDExLjcxIDEuNzR6TTMzMi40MiA5Ni40NmMtMTIuMTkgOS43LTIyLjExIDEwLjMxLTM2IDIuMi0xMi40Ni0xMS4yNC05LjQyLTMxLjg5LjA4LTQwIDEwLjYzLTkuMTMgMjguMjktNyAzNC44MSA0LjQ5IDEuNTggMi44IDEuNSA0LjE3LTIuMTggNC4yOS00LjU5LjE2LTktLjI2LTEyLjg4LTIuOXMtNy4xNi0yLjM4LTEwLjE0IDFjLTIuNjQgMy0yLjY4IDYuMzgtLjE2IDkuNSAyLjgzIDMuNDkgNi4yNSA0LjA3IDEwLjA3IDEuNDMgNS4xNi0zLjU2IDExLjA2LTMuMDkgMTYuODUtMi44NCA0IC4xNyAyLjUxIDMuNTQgMi43OSA1LjcyLjM2IDIuNzMtMS4zNSAzLjMtMy43IDMuMjhxLTE1LjIxLS4xLTMwLjQgMGMtMS41OCAwLTMuNjMtLjczLTQuNTcgMXMuNjMgMy40NSAxLjU2IDQuOTFjNS4xNyA4LjExIDE2LjczIDkuNTMgMjUgMy4xMSAxLjM4LTEuMDYgMi40OC0zLjE3IDQuNTUtMS4zOXM1LjI1IDIuNSA0LjMyIDYuMnpNMTY3LjM4IDc2LjU0TDE3OS43NyA1MGMxLjYtMi42IDIuMzktMS40MiAzLjMyLjU3cTcuMzIgMTUuNjYgMTQuNzYgMzEuMjVjMS41NiAzLjI3IDMuMjggNi40NyA0LjkyIDkuNjkgMS4yMiAyLjcgMi4yOSA1LjQ3IDMuNjkgOC4wNiAxLjY3IDMuMDkgMS43OCA0LjQ4LTIuNTggNC42Ny01LjQzLjIzLTkuMzctLjc2LTEwLjc3LTYuNjktLjM2LTEuNTMtMS41NS0yLjg2LTIuMzUtNC4yOS0zLjkxLTMuMDctNC40NC04LTYuNjQtMTItLjc1LTEuMzYtLjgxLTMuNzEtMi43OC0zLjY4LTEuNTkgMC0xLjggMi4xNC0yLjUyIDMuMzktMi4zOSA0LjE5LTQgOC43NS02LjExIDEzLjA2LS43OSAxLjYxLTEuMzIgMy40NC0zLjA1IDQuNDMtNCA2LjIxLTkuNDEgNy43Mi0xNC42NiA0LjA5LjU2LTUuOTEgNC4yMy0xMC42IDYuNDEtMTUuODcgMS40OS0zLjYgMi43My03LjUxIDUuOTctMTAuMTR6TTQ4Ni40NyA3NS41NWMwIDcuMTIgMCAxNC4yMy0uMDcgMjEuMzQgMCAyLjE1IDEuMjQgNS4zMi0xLjggNnMtNi42NSAxLjY4LTkuNDEtMWMtMS41Ni0xLjUzLTIuNjktMi41OS01LTEtNy4zMSA0Ljg2LTE0LjcgNC0yMi0uMTUtNy41NC03LTYuMy0xNi4yNy01Ljc5LTI1LjA2LjIyLTMuNzkgNC4yNi0xLjkgNi41OC0yLjMgMi40OC0uNDMgNC4wOS43NSA0LjMgMy41MWE3Ni43NSA3Ni43NSAwIDAwLjkyIDguODRjMSA1LjE2IDQuMTcgNy43MyA5LjI1IDcuODRDNDY5LjE2IDkzLjYgNDczIDkxIDQ3NC4yIDg2YTI0LjQgMjQuNCAwIDAwLjY5LTUuMzhjMC0yLjM3LTEuNDktNS42NSAxLjUyLTYuNTYgMy4yNS0xLjAxIDcuMTgtMS45OCAxMC4wNiAxLjQ5elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJBZnlhVmVudHVyZXNfc3ZnX19jbHMtMlwiLFxuICAgIGQ6IFwiTTQxOC4xNiA0Ni42MWMtLjM0IDcuMy45IDguNzQgOC44NiA4LjQyIDMuODUtLjE1IDQuMyAxLjE5IDQuMzQgNC40NC4wNiAzLjU0LTEuMTQgNC42Mi00LjYyIDQuNDhzLTcuMTMtLjc1LTkuOCAzLjA3Yy0xLjQ0IDIuMDYtOC44MS42OS0xMC41NC0xLjUxLS41NS0uNjktMS0xLjQtMS44OS0xLjM3LTMuNDYuMS00LjE0LTItNC00Ljgzcy4wOS01LjcxIDQuNDUtNS4yNmMxLjM4LjE1IDIuMDYtMS40NyAyLjA1LTIuOTRzMC0yLjY2IDAtNGMwLTYgMy43OC04LjUzIDkuNS02LjI1IDMuMDIgMS4yNSAxLjMyIDMuOTkgMS42NSA1Ljc1ek0zNTkuMTEgNjFjNS41NC02IDExLjg2LTggMTkuMjktNi4zNGExNS41NCAxNS41NCAwIDAxMTAuNzIgOC4xN2MxLjU4IDMgMS4yMyA1LjIxLTMgNS0zLjU4LS4yLTYuOTUuMDYtMTAuMy0yLjQ0cy04LjA4LTIuMjgtMTEuODEuMWMtNC43NyAzLjA2LTkuOTEgMi4xLTE1IDIuMjItLjg1IDAtMi0uMTQtMi4wOC0xLS41MS0zLjQ1LTEuMTQtNy4zMi45LTEwLjE0IDEuODItMi41MSA1LjUtMiA4LjQzLTEuNTZzMS42OCAzLjUxIDIuODUgNS45OXpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiQWZ5YVZlbnR1cmVzX3N2Z19fY2xzLTFcIixcbiAgICBkOiBcIk00MzEuMTUgMTAwLjQyYy01IDUuNjYtMTYuNDIgNC41OS0yMi43OC0yLjEyLTIuMzMtNy4yNS0xLjE3LTE0LjcyLTEuMy0yMi4wOS0uMDctMy43NCAzLjA4LTIuNjUgNS4xNi0yLjczIDIuNTMtLjA5IDUuNzItLjc5IDYgMy4yMy4yMiAzLjQ1IDAgNi45My4xOSAxMC4zOC4yOSA1LjQ0IDIuNCA3LjY1IDcuNDkgNi40NXM1Ljk0LjY3IDUuMzMgNC45MWExNi4xNSAxNi4xNSAwIDAwLS4wOSAxLjk3elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTUxMi4xNiA5OS40NmMtLjQyIDIuOS0xLjY1IDUuMDctNSA0LjY1LTMuMDctLjM5LTcgLjMxLTcuMDktNC42NiAwLTcuMjUuMi0xNC41LjA3LTIxLjc1LS4wNS0zLjIxIDEuMDgtNC41IDQuMzItNC4zIDMuMDkuMTkgNi4xOSAwIDkuNzEgMC0zLjE3IDguOTYtMi41IDE3LjUxLTIuMDEgMjYuMDZ6XCIsXG4gICAgZmlsbDogXCIjZDAwMjYzXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIkFmeWFWZW50dXJlc19zdmdfX2Nscy0yXCIsXG4gICAgZDogXCJNMzkxLjUgOTUuNDdsLS4xMiAxLjQ3Yy0uMjUgMy4xNiAxLjQyIDcuMjUtNC40MyA3LjNzLTYuODEtLjQ4LTcuNjYtNi43OGMuMDYtNi40MS40MS0xMi44NC4xLTE5LjI0LS4yMS00LjMxIDEuOS00LjkgNS4zNS00Ljg4czYuNzMtLjE2IDYuNjIgNC44NWMtLjEyIDUuODEuMDggMTEuNTIuMTQgMTcuMjh6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIkFmeWFWZW50dXJlc19zdmdfX2Nscy00XCIsXG4gICAgZDogXCJNMzU4LjU5IDk4LjQ2Yy43MSA0LjY5LTEuNzEgNS44NC02IDUuOS00LjU4LjA3LTYuMDgtMS43My01LjczLTYuMTIuNjctOC4xOC0uNTEtMTYuNDMuNjYtMjQuNiAxMC44OS0uODcgMTAuODgtLjg3IDEwLjkgMTAgLjA0IDQuOTUuMTIgOS44OC4xNyAxNC44MnpNNTEyLjM1IDYzLjcyYzIuOTUtMy43OCA1LjUxLTcuMTUgOS42MS04LjQyIDIuNDEtLjc1IDUuNjItMi44NSA3LjEgMS4xMyAxLjY5IDQuNTctLjIxIDkuNjUtMy43MiAxMC4zMS03LjU0IDEuNDQtMTUuMTkuNDgtMjIuNzkuNS0xLjU0IDAtMi4zNC0xLjA3LTIuMzQtMi42NHYtMy40N2MwLTYuMTIgMy4zOC04LjM3IDkuMjctNi4xNiAxLjUyLjU2IDEuNTIuNTYgMi44NyA4Ljc1elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJBZnlhVmVudHVyZXNfc3ZnX19jbHMtNVwiLFxuICAgIGQ6IFwiTTQ4Ni40NSA2MC40MWMtLjMzIDcuMDgtLjY5IDcuMjktNy4wNSA3LjEtOC0uMjUtMy43OS02LjE4LTQuMjktOS41MS0uOTItNiA0LjE2LTQgNy4xLTQuMiA1LjYzLS4zIDQuNjQgMy43IDQuMjQgNi42MXpNNDQyLjEyIDU5LjMxYy0xLTMuOTMuNzMtNS42OCA1LjQyLTUuNjEgNC4xNy4wNyA2LjMxLjggNiA1LjcxLS40IDcuNzQtLjI1IDgtNS44NSA4cy01LjU0LS4wOC01LjU3LTguMXpNNDY0LjIxIDc1LjYxYy0zLS40Ni01LjEzLTEuOTEtNS01LjQ0czIuMzUtNC44MSA1LjYxLTQuNzcgNC45MSAxLjk0IDQuODYgNWMtLjA0IDMuMjgtMS45OSA1LjA2LTUuNDcgNS4yMXpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiQWZ5YVZlbnR1cmVzX3N2Z19fY2xzLTJcIixcbiAgICBkOiBcIk00MC41OCA3OC41MmM2LTMuNjMgOS42NS0yLjgzIDEzLjUxIDMgLjEyIDMuNTUgMCA3LTMuNzYgOC45Mi0zLjI3IDEuNjctNi40MiAxLjQxLTkuMS0xLjE2LTMuNDgtMy4yOC0yLjgzLTcuMDMtLjY1LTEwLjc2elwiXG4gIH0pKSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQWZ5YVZlbnR1cmVzOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYW5uZXItYjUxNjdkMzg5ZGYyNzQ0YmFlNGRmYTAzOGVlZmU0M2QuanBnXCI7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZnJvbTMyMFwiOiBcIjMyMHB4XCIsXG5cdFwiZnJvbTM2MFwiOiBcIjM2MHB4XCIsXG5cdFwiZnJvbTQwMFwiOiBcIjQwMHB4XCIsXG5cdFwiZnJvbTQ4MFwiOiBcIjQ4MHB4XCIsXG5cdFwiZnJvbTYwMFwiOiBcIjYwMHB4XCIsXG5cdFwiZnJvbTcyMFwiOiBcIjcyMHB4XCIsXG5cdFwiZnJvbTg0MFwiOiBcIjg0MHB4XCIsXG5cdFwiZnJvbTk2MFwiOiBcIjk2MHB4XCIsXG5cdFwiZnJvbTEwMjRcIjogXCIxMDI0cHhcIixcblx0XCJmcm9tMTI4MFwiOiBcIjEyODBweFwiLFxuXHRcImZyb20xNDQwXCI6IFwiMTQ0MHB4XCIsXG5cdFwiZnJvbTE2MDBcIjogXCIxNjAwcHhcIixcblx0XCJmcm9tMTkyMFwiOiBcIjE5MjBweFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkJlbmVmaWNpb3NfY29udGFpbmVyX18zWDJCclwiLFxuXHRcImJnR3JheVwiOiBcIkJlbmVmaWNpb3NfYmdHcmF5X19mY0d5MlwiLFxuXHRcImFmeWFWZWN0b3JcIjogXCJCZW5lZmljaW9zX2FmeWFWZWN0b3JfXzJPOGtHXCIsXG5cdFwidGl0bGVcIjogXCJCZW5lZmljaW9zX3RpdGxlX18xOFE0UFwiLFxuXHRcImNhcmRzV3JhcHBlclwiOiBcIkJlbmVmaWNpb3NfY2FyZHNXcmFwcGVyX18zRVdQWlwiXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0LWhlbHBlcnMvb3JkZXItaW1wb3J0cyAqL1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdpbmRvd1dpZHRoQ2hhbmdlIH0gZnJvbSAnfmhvb2tzL3VzZVdpbmRvd0NoYW5nZSc7XG5cbmltcG9ydCB7IGJlbmVmaXRzIH0gZnJvbSAnLi9kYXRhJztcblxuaW1wb3J0IENvbnRhaW5lciwgeyBsaXN0QmFja2dyb3VuZCB9IGZyb20gJ35jb21wb25lbnRzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IFN3aXBlciBmcm9tICcuL2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlcic7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvQ2FyZC9DYXJkJztcblxuaW1wb3J0IHNjc3MgZnJvbSAnLi9CZW5lZmljaW9zLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IEFmeWFWZWN0b3IgZnJvbSAnfmFzc2V0cy9pY29ucy9BZnlhVmVjdG9yLnN2Zyc7XG5cbmZ1bmN0aW9uIEJlbmVmaWNpb3MoKSB7XG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJlbmRlckNhcmRzID0gKCkgPT5cbiAgICBiZW5lZml0cy5tYXAoKGJlbmVmaXQpID0+IDxDYXJkIGtleT17YmVuZWZpdC5pZH0gey4uLmJlbmVmaXR9IC8+KTtcblxuICBjb25zdCByZW5kZXJTd2lwZXIgPSAoKSA9PiAoXG4gICAgPFN3aXBlciB0b3RhbEl0ZW1zPXtiZW5lZml0cy5sZW5ndGh9PntyZW5kZXJDYXJkcygpfTwvU3dpcGVyPlxuICApO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNNb2JpbGUod2luZG93LmlubmVyV2lkdGggPD0gNzIwKTtcbiAgfSwgW10pO1xuXG4gIHVzZVdpbmRvd1dpZHRoQ2hhbmdlKCgpID0+IHtcbiAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3MjApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIGlkPVwiYmVuZWZpY2lvc1wiXG4gICAgICBjbGFzc05hbWU9e3Njc3MuY29udGFpbmVyfVxuICAgICAgYmFja2dyb3VuZENvbG9yPXtsaXN0QmFja2dyb3VuZC5ia2dkR3JheX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c2Nzcy5iZ0dyYXl9IC8+XG4gICAgICA8QWZ5YVZlY3RvciBjbGFzc05hbWU9e3Njc3MuYWZ5YVZlY3Rvcn0gLz5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3Njc3MudGl0bGV9PkJlbmVmw61jaW9zPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzY3NzLmNhcmRzV3JhcHBlcn0+XG4gICAgICAgIHtpc01vYmlsZSA/IHJlbmRlclN3aXBlcigpIDogcmVuZGVyQ2FyZHMoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCZW5lZmljaW9zO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZnJvbTMyMFwiOiBcIjMyMHB4XCIsXG5cdFwiZnJvbTM2MFwiOiBcIjM2MHB4XCIsXG5cdFwiZnJvbTQwMFwiOiBcIjQwMHB4XCIsXG5cdFwiZnJvbTQ4MFwiOiBcIjQ4MHB4XCIsXG5cdFwiZnJvbTYwMFwiOiBcIjYwMHB4XCIsXG5cdFwiZnJvbTcyMFwiOiBcIjcyMHB4XCIsXG5cdFwiZnJvbTg0MFwiOiBcIjg0MHB4XCIsXG5cdFwiZnJvbTk2MFwiOiBcIjk2MHB4XCIsXG5cdFwiZnJvbTEwMjRcIjogXCIxMDI0cHhcIixcblx0XCJmcm9tMTI4MFwiOiBcIjEyODBweFwiLFxuXHRcImZyb20xNDQwXCI6IFwiMTQ0MHB4XCIsXG5cdFwiZnJvbTE2MDBcIjogXCIxNjAwcHhcIixcblx0XCJmcm9tMTkyMFwiOiBcIjE5MjBweFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkNhcmRfY29udGFpbmVyX19GMXBxelwiLFxuXHRcInRleHRcIjogXCJDYXJkX3RleHRfXzJMR2VxXCIsXG5cdFwidGl0bGVcIjogXCJDYXJkX3RpdGxlX18yemxlN1wiXG59O1xuIiwiaW1wb3J0IHsgSUJlbmVmaXQgfSBmcm9tICcuLi8uLi90eXBlJztcbmltcG9ydCBzY3NzIGZyb20gJy4vQ2FyZC5tb2R1bGUuc2Nzcyc7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHM6IElCZW5lZml0KSB7XG4gIGNvbnN0IHRpdGxlQ2xhc3MgPSBbc2Nzcy50ZXh0LCBzY3NzLnRpdGxlXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2Nzcy5jb250YWluZXJ9PlxuICAgICAgPHByb3BzLmljb24gY2xhc3NOYW1lPXtzY3NzLmljb259IC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3RpdGxlQ2xhc3Muam9pbignICcpfT57cHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzY3NzLnRleHR9Pntwcm9wcy5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidG5Eb3RcIjogXCJQYWdpbmF0aW9uX2J0bkRvdF9fMlF0U1JcIixcblx0XCJkb3RcIjogXCJQYWdpbmF0aW9uX2RvdF9fMUJvcVdcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fMlFneTNcIlxufTtcbiIsImltcG9ydCBzY3NzIGZyb20gJy4vUGFnaW5hdGlvbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBJUGFnaW5hdGlvblByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmZ1bmN0aW9uIFBhZ2luYXRpb24ocHJvcHM6IElQYWdpbmF0aW9uUHJvcHMpIHtcbiAgY29uc3QgZG90Q2xhc3MgPSBbc2Nzcy5kb3RdO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBwcm9wcy5vbkNoYW5nZUluZGV4KHZhbHVlKTtcbiAgfTtcblxuICBpZiAocHJvcHMudmFsdWUgPT09IHByb3BzLmN1cnJlbnRJbmRleCkge1xuICAgIGRvdENsYXNzLnB1c2goc2Nzcy5hY3RpdmUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17c2Nzcy5idG5Eb3R9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhwcm9wcy52YWx1ZSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2RvdENsYXNzLmpvaW4oJyAnKX0gLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZyb20zMjBcIjogXCIzMjBweFwiLFxuXHRcImZyb20zNjBcIjogXCIzNjBweFwiLFxuXHRcImZyb200MDBcIjogXCI0MDBweFwiLFxuXHRcImZyb200ODBcIjogXCI0ODBweFwiLFxuXHRcImZyb202MDBcIjogXCI2MDBweFwiLFxuXHRcImZyb203MjBcIjogXCI3MjBweFwiLFxuXHRcImZyb204NDBcIjogXCI4NDBweFwiLFxuXHRcImZyb205NjBcIjogXCI5NjBweFwiLFxuXHRcImZyb20xMDI0XCI6IFwiMTAyNHB4XCIsXG5cdFwiZnJvbTEyODBcIjogXCIxMjgwcHhcIixcblx0XCJmcm9tMTQ0MFwiOiBcIjE0NDBweFwiLFxuXHRcImZyb20xNjAwXCI6IFwiMTYwMHB4XCIsXG5cdFwiZnJvbTE5MjBcIjogXCIxOTIwcHhcIixcblx0XCJjb250YWluZXJcIjogXCJTd2lwZXJfY29udGFpbmVyX18xLXAxSVwiLFxuXHRcInBhZ2luYXRpb25Db250YWluZXJcIjogXCJTd2lwZXJfcGFnaW5hdGlvbkNvbnRhaW5lcl9fenczUXBcIixcblx0XCJkb3RzTGlzdFwiOiBcIlN3aXBlcl9kb3RzTGlzdF9fMTlDeC1cIlxufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3aXBlYWJsZVZpZXdzIGZyb20gJ3JlYWN0LXN3aXBlYWJsZS12aWV3cyc7XG5pbXBvcnQgeyBhdXRvUGxheSB9IGZyb20gJ3JlYWN0LXN3aXBlYWJsZS12aWV3cy11dGlscyc7XG5cbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL1BhZ2luYXRpb24vUGFnaW5hdGlvbic7XG5pbXBvcnQgc2NzcyBmcm9tICcuL1N3aXBlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBJU3dpcGVyUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgQXV0b1BsYXlTd2lwZWFibGVWaWV3cyA9IGF1dG9QbGF5KFN3aXBlYWJsZVZpZXdzKTtcblxuZnVuY3Rpb24gU3dpcGVyKHByb3BzOiBJU3dpcGVyUHJvcHMpIHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgbnVtYmVyU3RlcHMgPSBwcm9wcy50b3RhbEl0ZW1zO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUluZGV4ID0gKGlkeDogbnVtYmVyKSA9PiB7XG4gICAgc2V0SW5kZXgoaWR4KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQYWdpbmF0aW9uID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzY3NzLnBhZ2luYXRpb25Db250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Njc3MuZG90c0xpc3R9PlxuICAgICAgICB7QXJyYXkobnVtYmVyU3RlcHMpXG4gICAgICAgICAgLmZpbGwoMSlcbiAgICAgICAgICAubWFwKChrZXksIGlkeCkgPT4gKFxuICAgICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgICAga2V5PXtgJHtpZHggKyAxfWB9XG4gICAgICAgICAgICAgIHZhbHVlPXtpZHh9XG4gICAgICAgICAgICAgIGN1cnJlbnRJbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlSW5kZXg9e2hhbmRsZUNoYW5nZUluZGV4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Njc3MuY29udGFpbmVyfT5cbiAgICAgIDxBdXRvUGxheVN3aXBlYWJsZVZpZXdzXG4gICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgb25DaGFuZ2VJbmRleD17aGFuZGxlQ2hhbmdlSW5kZXh9XG4gICAgICAgIGVuYWJsZU1vdXNlRXZlbnRzXG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvQXV0b1BsYXlTd2lwZWFibGVWaWV3cz5cbiAgICAgIHtyZW5kZXJQYWdpbmF0aW9uKCl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXBlcjtcbiIsImltcG9ydCBDb211bml0eVNWRyBmcm9tICcuL2ltYWdlcy9jb211bml0eS5zdmcnO1xuaW1wb3J0IENvbm5lY3Rpb25TVkcgZnJvbSAnLi9pbWFnZXMvY29ubmVjdGlvbi5zdmcnO1xuaW1wb3J0IEV2ZW50U1ZHIGZyb20gJy4vaW1hZ2VzL2V2ZW50cy5zdmcnO1xuaW1wb3J0IEZpbmFuY2VTVkcgZnJvbSAnLi9pbWFnZXMvZmluYW5jZS5zdmcnO1xuaW1wb3J0IE1lbnRvclNWRyBmcm9tICcuL2ltYWdlcy9tZW50b3Iuc3ZnJztcbmltcG9ydCBUb29sU1ZHIGZyb20gJy4vaW1hZ2VzL3Rvb2wuc3ZnJztcbmltcG9ydCB7IElCZW5lZml0IH0gZnJvbSAnLi90eXBlJztcblxuZXhwb3J0IGNvbnN0IGJlbmVmaXRzOiBJQmVuZWZpdFtdID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaWNvbjogQ29tdW5pdHlTVkcsXG4gICAgdGl0bGU6ICdDb211bmlkYWRlIEFmeWEgVmVudHVyZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAndW1hIHJlZGUgw7puaWNhIHBhcmEgdHJvY2EgZGUgZXhwZXJpw6puY2lhcyBlIG5ldHdvcmtpbmcnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaWNvbjogVG9vbFNWRyxcbiAgICB0aXRsZTogJ01ldG9kb2xvZ2lhcyBlIGZlcnJhbWVudGFzJyxcbiAgICBkZXNjcmlwdGlvbjogJ3BhcmEgYXV4aWxpYXIgbm8gZGVzZW52b2x2aW1lbnRvIGUgZ2VzdMOjbyBkbyBzZXUgbmVnw7NjaW8nLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaWNvbjogTWVudG9yU1ZHLFxuICAgIHRpdGxlOiAnUmVkZSBkZSBtZW50b3JlcycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnY29tcG9zdGEgcG9yIHByb2Zlc3NvcmVzLCBlbXByZWVuZGVkb3JlcyBlIGV4ZWN1dGl2b3MgZGUgbWVyY2FkbycsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpY29uOiBDb25uZWN0aW9uU1ZHLFxuICAgIHRpdGxlOiAnQ29uZXjDtWVzIGNvbSBvIG1lcmNhZG8nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ3BhcmEgc3Vwb3J0ZSBuYSB2YWxpZGHDp8OjbyBkbyBwcm9kdXRvIGUgZW0gZXNmb3LDp29zIGNvbWVyY2lhaXMnLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgaWNvbjogRXZlbnRTVkcsXG4gICAgdGl0bGU6ICdFdmVudG9zIGUgd29ya3Nob3BzJyxcbiAgICBkZXNjcmlwdGlvbjogJ2NvbnRlw7pkbyBhdHVhbGl6YWRvIGUgYmFzZWFkbyBub3MgZGVzYWZpb3MgZG9zIHByb2pldG9zJyxcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIGljb246IEZpbmFuY2VTVkcsXG4gICAgdGl0bGU6ICdBcG9pbyBmaW5hbmNlaXJvJyxcbiAgICBkZXNjcmlwdGlvbjogJ0ludmVzdGltZW50byBlbSBwcm9qZXRvcyBzZWxlY2lvbmFkb3MnLFxuICB9LFxuXTtcbiIsInZhciBfcGF0aDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0NvbXVuaXR5KHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDQxLFxuICAgIGhlaWdodDogNDEsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTMuMTg4IDFoLTkuNzVBMi40MzggMi40MzggMCAwMDEgMy40Mzh2OS43NWEyLjQzOCAyLjQzOCAwIDAwMi40MzggMi40MzdoOS43NWEyLjQzNyAyLjQzNyAwIDAwMi40MzctMi40Mzh2LTkuNzVBMi40MzggMi40MzggMCAwMDEzLjE4NyAxek0zNy41NjMgMWgtOS43NWEyLjQzOCAyLjQzOCAwIDAwLTIuNDM4IDIuNDM4djkuNzVhMi40MzcgMi40MzcgMCAwMDIuNDM4IDIuNDM3aDkuNzVBMi40MzcgMi40MzcgMCAwMDQwIDEzLjE4N3YtOS43NUEyLjQzOCAyLjQzOCAwIDAwMzcuNTYyIDF6TTEzLjE4OCAyNS4zNzVoLTkuNzVBMi40MzggMi40MzggMCAwMDEgMjcuODEydjkuNzVBMi40MzggMi40MzggMCAwMDMuNDM4IDQwaDkuNzVhMi40MzggMi40MzggMCAwMDIuNDM3LTIuNDM4di05Ljc1YTIuNDM3IDIuNDM3IDAgMDAtMi40MzgtMi40Mzh6TTMyLjY4OCAyNS4zNzVWNDBtLTcuMzEzLTcuMzEzSDQwIDI1LjM3NXpcIixcbiAgICBzdHJva2U6IFwiI0QxMDA2M1wiLFxuICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0NvbXVuaXR5OyIsInZhciBfcGF0aDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0Nvbm5lY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogNTIsXG4gICAgaGVpZ2h0OiAzOSxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yNiAxOS40NDJ2LjAzTTM0LjcyIDEwLjcyM2ExMi4zMzMgMTIuMzMzIDAgMDEwIDE3LjQzOU00My40NDIgMmEyNC42NjggMjQuNjY4IDAgMDEwIDM0Ljg4NU0xNy4yNjggMjguMTYyYTEyLjMzNCAxMi4zMzQgMCAwMTAtMTcuNDRNOC41NCAzNi44ODVBMjQuNjY2IDI0LjY2NiAwIDAxOC41NCAyXCIsXG4gICAgc3Ryb2tlOiBcIiNEMTAwNjNcIixcbiAgICBzdHJva2VXaWR0aDogMi41LFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Nvbm5lY3Rpb247IiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnRXZlbnRzKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDQ0LFxuICAgIGhlaWdodDogNDQsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTMuMTExIDJINC4yMjJBMi4yMjIgMi4yMjIgMCAwMDIgNC4yMjJ2OC44OWMwIDEuMjI2Ljk5NSAyLjIyMSAyLjIyMiAyLjIyMWg4Ljg5YTIuMjIyIDIuMjIyIDAgMDAyLjIyMS0yLjIyMlY0LjIyMkEyLjIyMiAyLjIyMiAwIDAwMTMuMTExIDJ6TTM5Ljc3OCAyOC42NjdoLTguODg5YTIuMjIyIDIuMjIyIDAgMDAtMi4yMjIgMi4yMjJ2OC44ODljMCAxLjIyNy45OTUgMi4yMjIgMi4yMjIgMi4yMjJoOC44ODlBMi4yMjIgMi4yMjIgMCAwMDQyIDM5Ljc3OHYtOC44ODlhMi4yMjIgMi4yMjIgMCAwMC0yLjIyMi0yLjIyMnpNNDIgMTkuNzc4VjEzLjExYTQuNDQ0IDQuNDQ0IDAgMDAtNC40NDQtNC40NDRIMjQuMjIyTDMwLjg5IDJNMiAyNC4yMjJ2Ni42NjdhNC40NDUgNC40NDUgMCAwMDQuNDQ0IDQuNDQ1aDEzLjMzNEwxMy4xMSA0MlwiLFxuICAgIHN0cm9rZTogXCIjRDEwMDYzXCIsXG4gICAgc3Ryb2tlV2lkdGg6IDIuMyxcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdFdmVudHM7IiwidmFyIF9wYXRoLCBfcGF0aDI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdGaW5hbmNlKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDM4LFxuICAgIGhlaWdodDogNDksXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMSA0Ny4yODZWNi4xNDNBNS4xNDMgNS4xNDMgMCAwMTYuMTQzIDFoMjUuNzE0QTUuMTQzIDUuMTQzIDAgMDEzNyA2LjE0M3Y0MS4xNDNsLTcuNzE0LTUuMTQzLTUuMTQzIDUuMTQzTDE5IDQyLjE0M2wtNS4xNDMgNS4xNDMtNS4xNDMtNS4xNDNMMSA0Ny4yODZ6XCIsXG4gICAgc3Ryb2tlOiBcIiNEMTAwNjNcIixcbiAgICBzdHJva2VXaWR0aDogMixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yNC4xNDMgMTMuODU3aC02LjQyOWEzLjg1NyAzLjg1NyAwIDAwMCA3LjcxNGgyLjU3MmEzLjg1OCAzLjg1OCAwIDAxMCA3LjcxNGgtNi40MjltNS4xNDMgMHYzLjg1OE0xOSAxMHYzLjg1N1wiLFxuICAgIHN0cm9rZTogXCIjRDEwMDYzXCIsXG4gICAgc3Ryb2tlV2lkdGg6IDIsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRmluYW5jZTsiLCJ2YXIgX3BhdGgsIF9wYXRoMjtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z01lbnRvcihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiA2MCxcbiAgICBoZWlnaHQ6IDQyLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTU4LjMzMyAxMi4zMzNMMzAgMSAxLjY2NyAxMi4zMzMgMzAgMjMuNjY3bDI4LjMzMy0xMS4zMzR6bTAgMHYxN1wiLFxuICAgIHN0cm9rZTogXCIjRDEwMDYzXCIsXG4gICAgc3Ryb2tlV2lkdGg6IDIsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTMgMTYuODY3djE1LjNjMCAyLjI1NCAxLjc5MSA0LjQxNiA0Ljk4IDYuMDEgMy4xODcgMS41OTQgNy41MTEgMi40OSAxMi4wMiAyLjQ5IDQuNTA5IDAgOC44MzMtLjg5NiAxMi4wMi0yLjQ5IDMuMTg5LTEuNTk0IDQuOTgtMy43NTYgNC45OC02LjAxdi0xNS4zXCIsXG4gICAgc3Ryb2tlOiBcIiNEMTAwNjNcIixcbiAgICBzdHJva2VXaWR0aDogMixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZW50b3I7IiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnVG9vbChwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiA0NixcbiAgICBoZWlnaHQ6IDQ2LFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTEwLjg3NCAxOC4xMjRoNy4yNXYtNy4yNUw5LjY2NiAyLjQxNmExNC41IDE0LjUgMCAwMTE5LjMzMyAxOS4zMzNsMTQuNSAxNC41YTUuMTI2IDUuMTI2IDAgMTEtNy4yNSA3LjI1bC0xNC41LTE0LjVBMTQuNSAxNC41IDAgMDEyLjQxNiA5LjY2Nmw4LjQ1OCA4LjQ1OHpcIixcbiAgICBzdHJva2U6IFwiI0QxMDA2M1wiLFxuICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1Rvb2w7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZnJvbTMyMFwiOiBcIjMyMHB4XCIsXG5cdFwiZnJvbTM2MFwiOiBcIjM2MHB4XCIsXG5cdFwiZnJvbTQwMFwiOiBcIjQwMHB4XCIsXG5cdFwiZnJvbTQ4MFwiOiBcIjQ4MHB4XCIsXG5cdFwiZnJvbTYwMFwiOiBcIjYwMHB4XCIsXG5cdFwiZnJvbTcyMFwiOiBcIjcyMHB4XCIsXG5cdFwiZnJvbTg0MFwiOiBcIjg0MHB4XCIsXG5cdFwiZnJvbTk2MFwiOiBcIjk2MHB4XCIsXG5cdFwiZnJvbTEwMjRcIjogXCIxMDI0cHhcIixcblx0XCJmcm9tMTI4MFwiOiBcIjEyODBweFwiLFxuXHRcImZyb20xNDQwXCI6IFwiMTQ0MHB4XCIsXG5cdFwiZnJvbTE2MDBcIjogXCIxNjAwcHhcIixcblx0XCJmcm9tMTkyMFwiOiBcIjE5MjBweFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkV4QWx1bm9fY29udGFpbmVyX18xS2NqZ1wiLFxuXHRcImFmeWFWZWN0b3JcIjogXCJFeEFsdW5vX2FmeWFWZWN0b3JfXzJfOVZ5XCIsXG5cdFwiY2FyZHNDb250YWluZXJcIjogXCJFeEFsdW5vX2NhcmRzQ29udGFpbmVyX18xSUFXRVwiLFxuXHRcImNhcmRcIjogXCJFeEFsdW5vX2NhcmRfXzJ2MVZBXCIsXG5cdFwiY2FyZFRleHRcIjogXCJFeEFsdW5vX2NhcmRUZXh0X18zNGRBa1wiLFxuXHRcImJ0blwiOiBcIkV4QWx1bm9fYnRuX18yZnZXTVwiLFxuXHRcImJ0blRleHRcIjogXCJFeEFsdW5vX2J0blRleHRfXzFMSW1kXCIsXG5cdFwiaWNvblwiOiBcIkV4QWx1bm9faWNvbl9fMjVvM3VcIixcblx0XCJjYXJkQnV0dG9uXCI6IFwiRXhBbHVub19jYXJkQnV0dG9uX193T01VclwiXG59O1xuIiwiaW1wb3J0IFNlbmRTVkcgZnJvbSAnfmFzc2V0cy9pY29ucy9JY29uU2VuZC5zdmcnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICd+Y29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBDb250YWluZXIsIHsgbGlzdEJhY2tncm91bmQgfSBmcm9tICd+Y29tcG9uZW50cy9Db250YWluZXIvQ29udGFpbmVyJztcblxuaW1wb3J0IHNjc3MgZnJvbSAnLi9FeEFsdW5vLm1vZHVsZS5zY3NzJztcbmltcG9ydCBBZnlhVmVjdG9yU1ZHIGZyb20gJy4vaW1hZ2VzL1ZlY3Rvci5zdmcnO1xuXG5mdW5jdGlvbiBFeEFsdW5vKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIGlkPVwiaW5zY3JpY2FvXCJcbiAgICAgIGNsYXNzTmFtZT17c2Nzcy5jb250YWluZXJ9XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9e2xpc3RCYWNrZ3JvdW5kLmJrZ2REYXJrR3JheX1cbiAgICA+XG4gICAgICA8QWZ5YVZlY3RvclNWRyBjbGFzc05hbWU9e3Njc3MuYWZ5YVZlY3Rvcn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzY3NzLmNhcmRzQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Njc3MuY2FyZH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzY3NzLmNhcmRUZXh0fT5cbiAgICAgICAgICAgIMOJIGFsdW5vLCBleC1hbHVubyBvdSA8YnIgLz4gY29sYWJvcmFkb3IgZSB0ZW0gdW0gcHJvamV0bz9cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzY3NzLmJ0bn1cbiAgICAgICAgICAgIHRvPVwiaHR0cHM6Ly9mb3Jtcy5vZmZpY2UuY29tL3IvQTZLRzNzM1dSeFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgSU5TQ1JFVkEtU0UgUEFSQSBQQVJUSUNJUEFSXG4gICAgICAgICAgICA8U2VuZFNWRyBjbGFzc05hbWU9e3Njc3MuaWNvbn0gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzY3NzLmNhcmR9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c2Nzcy5jYXJkVGV4dH0+XG4gICAgICAgICAgICBUZW0gdW1hIHN0YXJ0dXAgZGUgc2HDumRlIDxiciAvPiBvdSBlZHVjYcOnw6NvP1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3Njc3MuYnRufVxuICAgICAgICAgICAgdG89XCJodHRwczovL2Zvcm1zLm9mZmljZS5jb20vci9QQWpyTU4zTlF0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBJTlNDUkVWQS1TRSBQQVJBIFBBUlRJQ0lQQVJcbiAgICAgICAgICAgIDxTZW5kU1ZHIGNsYXNzTmFtZT17c2Nzcy5pY29ufSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeEFsdW5vO1xuIiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnVmVjdG9yKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDU1NSxcbiAgICBoZWlnaHQ6IDk4MCxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgZDogXCJNLjQzNyA5NzkuMDE5TDU3NC44MzYuNDk0bDU3NC4zNTQgOTc4LjUyNUg5OTkuNDcyTDU3NS4wNTEgMjU1Ljk1bC0uMjE1LS4zNjctLjIxNi4zNjctNDI0LjQ2MiA3MjMuMDY5SC40Mzd6XCIsXG4gICAgc3Ryb2tlOiBcIiNmZmZcIixcbiAgICBzdHJva2VXaWR0aDogMC41XG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1ZlY3RvcjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmcm9tMzIwXCI6IFwiMzIwcHhcIixcblx0XCJmcm9tMzYwXCI6IFwiMzYwcHhcIixcblx0XCJmcm9tNDAwXCI6IFwiNDAwcHhcIixcblx0XCJmcm9tNDgwXCI6IFwiNDgwcHhcIixcblx0XCJmcm9tNjAwXCI6IFwiNjAwcHhcIixcblx0XCJmcm9tNzIwXCI6IFwiNzIwcHhcIixcblx0XCJmcm9tODQwXCI6IFwiODQwcHhcIixcblx0XCJmcm9tOTYwXCI6IFwiOTYwcHhcIixcblx0XCJmcm9tMTAyNFwiOiBcIjEwMjRweFwiLFxuXHRcImZyb20xMjgwXCI6IFwiMTI4MHB4XCIsXG5cdFwiZnJvbTE0NDBcIjogXCIxNDQwcHhcIixcblx0XCJmcm9tMTYwMFwiOiBcIjE2MDBweFwiLFxuXHRcImZyb20xOTIwXCI6IFwiMTkyMHB4XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRm9vdGVyX2NvbnRhaW5lcl9fTXhFSURcIixcblx0XCJjb250YWN0XCI6IFwiRm9vdGVyX2NvbnRhY3RfXzFSSXp0XCIsXG5cdFwiaWNvblwiOiBcIkZvb3Rlcl9pY29uX18xOG9DUFwiLFxuXHRcInRleHRcIjogXCJGb290ZXJfdGV4dF9fMmVCQXVcIixcblx0XCJlbWFpbFwiOiBcIkZvb3Rlcl9lbWFpbF9fMy1kNFhcIixcblx0XCJ2aXNpYmxlXCI6IFwiRm9vdGVyX3Zpc2libGVfXzM2bWRuXCIsXG5cdFwiYnRuXCI6IFwiRm9vdGVyX2J0bl9fM1A3UGdcIixcblx0XCJoaWRkZW5cIjogXCJGb290ZXJfaGlkZGVuX18xTzltalwiLFxuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzF3bTBLXCIsXG5cdFwic29jaWFsV3JhcHBlclwiOiBcIkZvb3Rlcl9zb2NpYWxXcmFwcGVyX18xM3g3eVwiLFxuXHRcInNvY2lhbFwiOiBcIkZvb3Rlcl9zb2NpYWxfXzNQS1ZHXCIsXG5cdFwiYWRkcmVzc1dyYXBwZXJcIjogXCJGb290ZXJfYWRkcmVzc1dyYXBwZXJfXzNKYmttXCIsXG5cdFwiaW5mb1wiOiBcIkZvb3Rlcl9pbmZvX191b3RNOFwiLFxuXHRcImFkZHJlc3NcIjogXCJGb290ZXJfYWRkcmVzc19fMVMxQVpcIlxufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICd+Y29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBDb250YWluZXIsIHsgbGlzdEJhY2tncm91bmQgfSBmcm9tICd+Y29tcG9uZW50cy9Db250YWluZXIvQ29udGFpbmVyJztcblxuaW1wb3J0IHNjc3MgZnJvbSAnLi9Gb290ZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEFmeWFMb2dvU1ZHIGZyb20gJy4vaW1hZ2VzL0FWLnN2Zyc7XG5pbXBvcnQgRmFjZWJvb2tTVkcgZnJvbSAnLi9pbWFnZXMvZmFjZWJvb2suc3ZnJztcbmltcG9ydCBJbnN0YWdyYW1TVkcgZnJvbSAnLi9pbWFnZXMvaW5zdGFncmFtLnN2Zyc7XG5pbXBvcnQgTGlua2VkaW5TVkcgZnJvbSAnLi9pbWFnZXMvbGlua2VkaW4uc3ZnJztcbmltcG9ydCBUd2l0dGVyU1ZHIGZyb20gJy4vaW1hZ2VzL3R3aXR0ZXIuc3ZnJztcbmltcG9ydCBZb3V0dWJlU1ZHIGZyb20gJy4vaW1hZ2VzL3lvdXR1YmUuc3ZnJztcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCBbaXNFbWFpbFZpc2libGUsIHNldElzRW1haWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYnRuQ2xhc3MgPSBbc2Nzcy5idG5dO1xuICBjb25zdCBlbWFpbENsYXNzID0gW3Njc3MuZW1haWxdO1xuXG4gIGlmIChpc0VtYWlsVmlzaWJsZSkge1xuICAgIGJ0bkNsYXNzLnB1c2goc2Nzcy5oaWRkZW4pO1xuICAgIGVtYWlsQ2xhc3MucHVzaChzY3NzLnZpc2libGUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBub1BhZGRpbmdcbiAgICAgIGlkPVwiZm9vdGVyXCJcbiAgICAgIGNsYXNzTmFtZT17c2Nzcy5jb250YWluZXJ9XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9e2xpc3RCYWNrZ3JvdW5kLmJrZ2REYXJrR3JheX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c2Nzcy5jb250YWN0fT5cbiAgICAgICAgPEFmeWFMb2dvU1ZHIGNsYXNzTmFtZT17c2Nzcy5pY29ufSAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3Njc3MudGV4dH0+RW50cmUgZW0gY29udGF0byBjb25vc2NvIHBvciBlbWFpbDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtlbWFpbENsYXNzLmpvaW4oJyAnKX0+dmVudHVyZXNAYWZ5YS5jb20uYnI8L3A+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2J0bkNsYXNzLmpvaW4oJyAnKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0VtYWlsVmlzaWJsZSh0cnVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIFZlciBlbWFpbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3Njc3MuZm9vdGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Njc3Muc29jaWFsV3JhcHBlcn0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2JyLmxpbmtlZGluLmNvbS9jb21wYW55L2FmeWFlZHVjYWNpb25hbFwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3Njc3Muc29jaWFsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rZWRpblNWRyAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNkU20wOGlsZUt0SExieVdSbTgydEhRXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c2Nzcy5zb2NpYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFlvdXR1YmVTVkcgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FmeWFlZHVjYWNpb25hbC9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzY3NzLnNvY2lhbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5zdGFncmFtU1ZHIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FmeWFlZHVjYWNpb25hbC9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzY3NzLnNvY2lhbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmFjZWJvb2tTVkcgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2FmeWFlZHVjYWNhbz9sYW5nPXB0LWJyXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c2Nzcy5zb2NpYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFR3aXR0ZXJTVkcgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2Nzcy5hZGRyZXNzV3JhcHBlcn0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzY3NzLmluZm99PlxuICAgICAgICAgICAgQWxsIHJpZ2h0cyByZXNlcnZlZC4gQ29weXJpZ2h0IMKpIDIwMjEgQWZ5YSBFZHVjYWNpb25hbC5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbc2Nzcy5pbmZvLCBzY3NzLmFkZHJlc3NdLmpvaW4oJyAnKX0+XG4gICAgICAgICAgICBBbGFtZWRhIE9zY2FyIE5pZW1leWVyLCAxMTkgLSA1dGggZmxvb3IgLSBWYWxlIGRvIFNlcmVubyBOb3ZhIExpbWEgL1xuICAgICAgICAgICAgTUcgLSBDRVA6IDM0MDAwLTAwMFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwidmFyIF9kZWZzLCBfZztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0F2KHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICB2aWV3Qm94OiBcIjAgMCA2OC4zNCA0Mi44OFwiXG4gIH0sIHByb3BzKSwgX2RlZnMgfHwgKF9kZWZzID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkZWZzXCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwgbnVsbCwgXCIuQVZfc3ZnX19jbHMtMXtmaWxsOiNmZmZ9XCIpKSksIF9nIHx8IChfZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgaWQ6IFwiQVZfc3ZnX19MYXllcl8yXCIsXG4gICAgXCJkYXRhLW5hbWVcIjogXCJMYXllciAyXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBpZDogXCJBVl9zdmdfX0xheWVyXzEtMlwiLFxuICAgIFwiZGF0YS1uYW1lXCI6IFwiTGF5ZXIgMVwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIkFWX3N2Z19fY2xzLTFcIixcbiAgICBkOiBcIk02OC4yNiAyLjIxYy0uODggMS44Ny0xLjg4IDQtMi44NiA2LjA1cS03LjE0IDE1LjI3LTE0LjI5IDMwLjUyYy0uNDUgMS0uNjUgMi42LTIuMDkgMi4zMi0uNy0uMTMtMS4zMy0xLjM0LTEuNzMtMi4xOC01LjQ0LTExLjUxLTEwLjg3LTIzLTE2LjE3LTM0LjU4LS41NC0xLjE4LTIuNzQtMy0uMDktNC4wNiAyLjEzLS44NyAzLjU3LjM2IDQuNTUgMi41NCAzLjY5IDguMTIgNy41MyAxNi4xOCAxMS4zNiAyNC4yNC41NCAxLjE0LjcxIDMgMi4xOSAzczEuNTgtMS44MyAyLjExLTNjMy42Ny03Ljc3IDcuMjktMTUuNTYgMTAuOTUtMjMuMzRDNjMgMiA2My43LS4wNiA2Ni4yNS4wOWMxLjE4LjA2IDIuNDMuMDYgMi4wMSAyLjEyek0xOC44NCAxMi4zMmMtMy42MyA3LjczLTcuMTggMTUuMy0xMC43NSAyMi44Ny0uNTYgMS4yLTEuMTUgMi4zOC0xLjcyIDMuNThDNS4zIDQxIDQuMTQgNDQuMDkgMS4xNiA0Mi4zOGMtMi43LTEuNTYuMDYtMy44My44Mi01LjQ5IDUtMTAuODIgMTAuMDktMjEuNTYgMTUuMjItMzIuMy41Mi0xLjA5LjQ4LTMgMi4xOS0yLjg1IDEuMjYuMDkgMS40OCAxLjY2IDIgMi42NlEyOS40OCAyMS42OCAzNy41MSAzOWMuNDkgMS4wOSAyLjMxIDIuNyAwIDMuNTgtMS43Ny42Ni0zLjM4LjExLTQuMzYtMi0zLjUzLTcuNy03LjE1LTE1LjMtMTAuODEtMjIuOS0uODQtMS43NC0xLjIxLTMuOC0zLjUtNS4zNnpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiQVZfc3ZnX19jbHMtMVwiLFxuICAgIGQ6IFwiTTE5LjMyIDM2Ljg4Yy0xLjg5IDAtMy4xMS0xLTMuMi0yLjlBMi44MSAyLjgxIDAgMDExOSAzMC44M2MyLjA3LS4xIDMuNDUuODggMy40MiAzLjExLjAyIDEuOTctMS4yNiAyLjgyLTMuMSAyLjk0elwiXG4gIH0pKSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQXY7IiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnRmFjZWJvb2socHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyNCxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk03IDEwdjRoM3Y3aDR2LTdoM2wxLTRoLTRWOGExIDEgMCAwMTEtMWgzVjNoLTNhNSA1IDAgMDAtNSA1djJIN3pcIixcbiAgICBzdHJva2U6IFwiI2ZmZlwiLFxuICAgIHN0cm9rZVdpZHRoOiAxLjUsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnRmFjZWJvb2s7IiwidmFyIF9wYXRoLCBfcGF0aDI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdJbnN0YWdyYW0ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyNCxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNiA0SDhhNCA0IDAgMDAtNCA0djhhNCA0IDAgMDA0IDRoOGE0IDQgMCAwMDQtNFY4YTQgNCAwIDAwLTQtNHpcIixcbiAgICBzdHJva2U6IFwiI2ZmZlwiLFxuICAgIHN0cm9rZVdpZHRoOiAxLjUsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTIgMTVhMyAzIDAgMTAwLTYgMyAzIDAgMDAwIDZ6TTE2LjUgNy41di4wMDFcIixcbiAgICBzdHJva2U6IFwiI2ZmZlwiLFxuICAgIHN0cm9rZVdpZHRoOiAxLjUsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnSW5zdGFncmFtOyIsInZhciBfcGF0aCwgX3BhdGgyO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnTGlua2VkaW4ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyNCxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xOCA0SDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0yek04IDExdjVNOCA4di4wMU0xMiAxNnYtNVwiLFxuICAgIHN0cm9rZTogXCIjZmZmXCIsXG4gICAgc3Ryb2tlV2lkdGg6IDEuNSxcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNiAxNnYtM2EyIDIgMCAxMC00IDBcIixcbiAgICBzdHJva2U6IFwiI2ZmZlwiLFxuICAgIHN0cm9rZVdpZHRoOiAxLjUsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTGlua2VkaW47IiwidmFyIF9wYXRoO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnVHdpdHRlcihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyNCxcbiAgICBoZWlnaHQ6IDI0LFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIyIDQuMDFjLTEgLjQ5LTEuOTguNjg5LTMgLjk5LTEuMTIxLTEuMjY1LTIuNzgzLTEuMzM1LTQuMzgtLjczN1MxMS45NzcgNi4zMjMgMTIgOHYxYy0zLjI0NS4wODMtNi4xMzUtMS4zOTUtOC00IDAgMC00LjE4MiA3LjQzMyA0IDExLTEuODcyIDEuMjQ3LTMuNzM5IDIuMDg4LTYgMiAzLjMwOCAxLjgwMyA2LjkxMyAyLjQyMyAxMC4wMzQgMS41MTcgMy41OC0xLjA0IDYuNTIyLTMuNzIzIDcuNjUxLTcuNzQyYTEzLjg0IDEzLjg0IDAgMDAuNDk3LTMuNzUzQzIwLjE4IDcuNzczIDIxLjY5MiA1LjI1IDIyIDQuMDA5di4wMDF6XCIsXG4gICAgc3Ryb2tlOiBcIiNmZmZcIixcbiAgICBzdHJva2VXaWR0aDogMS41LFxuICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1R3aXR0ZXI7IiwidmFyIF9wYXRoLCBfcGF0aDI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdZb3V0dWJlKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDI0LFxuICAgIGhlaWdodDogMjQsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTcgNUg3YTQgNCAwIDAwLTQgNHY2YTQgNCAwIDAwNCA0aDEwYTQgNCAwIDAwNC00VjlhNCA0IDAgMDAtNC00elwiLFxuICAgIHN0cm9rZTogXCIjZmZmXCIsXG4gICAgc3Ryb2tlV2lkdGg6IDEuNSxcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMCA5bDUgMy01IDNWOXpcIixcbiAgICBzdHJva2U6IFwiI2ZmZlwiLFxuICAgIHN0cm9rZVdpZHRoOiAxLjUsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnWW91dHViZTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmcm9tMzIwXCI6IFwiMzIwcHhcIixcblx0XCJmcm9tMzYwXCI6IFwiMzYwcHhcIixcblx0XCJmcm9tNDAwXCI6IFwiNDAwcHhcIixcblx0XCJmcm9tNDgwXCI6IFwiNDgwcHhcIixcblx0XCJmcm9tNjAwXCI6IFwiNjAwcHhcIixcblx0XCJmcm9tNzIwXCI6IFwiNzIwcHhcIixcblx0XCJmcm9tODQwXCI6IFwiODQwcHhcIixcblx0XCJmcm9tOTYwXCI6IFwiOTYwcHhcIixcblx0XCJmcm9tMTAyNFwiOiBcIjEwMjRweFwiLFxuXHRcImZyb20xMjgwXCI6IFwiMTI4MHB4XCIsXG5cdFwiZnJvbTE0NDBcIjogXCIxNDQwcHhcIixcblx0XCJmcm9tMTYwMFwiOiBcIjE2MDBweFwiLFxuXHRcImZyb20xOTIwXCI6IFwiMTkyMHB4XCIsXG5cdFwiY29tcGFuaWVzXCI6IFwiSmFGYXpQYXJ0ZV9jb21wYW5pZXNfXzFCVWRkXCIsXG5cdFwidGl0bGVcIjogXCJKYUZhelBhcnRlX3RpdGxlX18zcmhBZ1wiLFxuXHRcImxvZ29zXCI6IFwiSmFGYXpQYXJ0ZV9sb2dvc19fZHpwODVcIlxufTtcbiIsImltcG9ydCBDbGlxdWVGYXJtYSBmcm9tICd+YXNzZXRzL2xvZ29zL2NsaXF1ZWZhcm1hLnN2Zyc7XG5pbXBvcnQgSWNsaW5pYyBmcm9tICd+YXNzZXRzL2xvZ29zL2ljbGluaWMuc3ZnJztcbmltcG9ydCBNZWRpY2FsaGFyYm9yIGZyb20gJ35hc3NldHMvbG9nb3MvbWVkaWNhbGhhcmJvci5zdmcnO1xuaW1wb3J0IE1lZGljaW5hZSBmcm9tICd+YXNzZXRzL2xvZ29zL21lZGljaW5hZS5zdmcnO1xuaW1wb3J0IE1lZHBob25lIGZyb20gJ35hc3NldHMvbG9nb3MvbWVkcGhvbmUuc3ZnJztcbmltcG9ydCBQZWJtZWQgZnJvbSAnfmFzc2V0cy9sb2dvcy9wZWJtZWQuc3ZnJztcbmltcG9ydCBDb250YWluZXIsIHsgbGlzdEJhY2tncm91bmQgfSBmcm9tICd+Y29tcG9uZW50cy9Db250YWluZXIvQ29udGFpbmVyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0phRmF6UGFydGUubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBKYUZhelBhcnRlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlkPVwiamFmYXpwYXJ0ZVwiIGJhY2tncm91bmRDb2xvcj17bGlzdEJhY2tncm91bmQuYmtnZEdyYXl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW5pZXN9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFN0YXJ0dXBzIHF1ZSBqw6EgZmF6ZW0gcGFydGUgZGUgbm9zc28gZWNvc3Npc3RlbWFcbiAgICAgICAgPC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvc30+XG4gICAgICAgICAgPFBlYm1lZCAvPlxuICAgICAgICAgIDxNZWRpY2luYWUgLz5cbiAgICAgICAgICA8TWVkcGhvbmUgLz5cbiAgICAgICAgICA8SWNsaW5pYyAvPlxuICAgICAgICAgIDxNZWRpY2FsaGFyYm9yIC8+XG4gICAgICAgICAgPENsaXF1ZUZhcm1hIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKYUZhelBhcnRlO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZnJvbTMyMFwiOiBcIjMyMHB4XCIsXG5cdFwiZnJvbTM2MFwiOiBcIjM2MHB4XCIsXG5cdFwiZnJvbTQwMFwiOiBcIjQwMHB4XCIsXG5cdFwiZnJvbTQ4MFwiOiBcIjQ4MHB4XCIsXG5cdFwiZnJvbTYwMFwiOiBcIjYwMHB4XCIsXG5cdFwiZnJvbTcyMFwiOiBcIjcyMHB4XCIsXG5cdFwiZnJvbTg0MFwiOiBcIjg0MHB4XCIsXG5cdFwiZnJvbTk2MFwiOiBcIjk2MHB4XCIsXG5cdFwiZnJvbTEwMjRcIjogXCIxMDI0cHhcIixcblx0XCJmcm9tMTI4MFwiOiBcIjEyODBweFwiLFxuXHRcImZyb20xNDQwXCI6IFwiMTQ0MHB4XCIsXG5cdFwiZnJvbTE2MDBcIjogXCIxNjAwcHhcIixcblx0XCJmcm9tMTkyMFwiOiBcIjE5MjBweFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIk9xdWVFX2NvbnRhaW5lcl9fM2lUUDJcIixcblx0XCJjaXJjbGVUb3BcIjogXCJPcXVlRV9jaXJjbGVUb3BfXzJTVHRkXCIsXG5cdFwibWFpblwiOiBcIk9xdWVFX21haW5fXzNCdXYtXCIsXG5cdFwidGl0bGVcIjogXCJPcXVlRV90aXRsZV9fMzlZOTFcIixcblx0XCJhYm91dFwiOiBcIk9xdWVFX2Fib3V0X18xRkt3M1wiLFxuXHRcIndyYXBwZXJJbWFnZVwiOiBcIk9xdWVFX3dyYXBwZXJJbWFnZV9fb0h6eDlcIixcblx0XCJjaXJjbGVCb3R0b25cIjogXCJPcXVlRV9jaXJjbGVCb3R0b25fXzM0M0JBXCIsXG5cdFwiZGl2SW1hZ2VcIjogXCJPcXVlRV9kaXZJbWFnZV9fMXV3XzJcIlxufTtcbiIsImltcG9ydCBDaXJjbGVUb3AgZnJvbSAnfmFzc2V0cy9pY29ucy9jaXJjbGUuc3ZnJztcbmltcG9ydCBDaXJjbGVCb3R0b24gZnJvbSAnfmFzc2V0cy9pY29ucy9jaXJjbGVCb3R0b24uc3ZnJztcbmltcG9ydCBDb250YWluZXIsIHsgbGlzdEJhY2tncm91bmQgfSBmcm9tICd+Y29tcG9uZW50cy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCBJbWFnZUFib3V0IGZyb20gJ35wdWJsaWMvaW1hZ2VzL2Jhbm5lcl9hYm91dC5wbmcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vT3F1ZUUubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBPcXVlRTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgaWQ9XCJzb2JyZVwiXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9e2xpc3RCYWNrZ3JvdW5kLmJrZ2RXaGl0ZX1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cbiAgICAgIG5vUGFkZGluZ1xuICAgID5cbiAgICAgIDxDaXJjbGVUb3AgY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlVG9wfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dH0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5PIHF1ZSDDqSBvIEFmeWEgVmVudHVyZXM/PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEFmeWEgVmVudHVyZXMgw6kgYSBtYXRlcmlhbGl6YcOnw6NvIGRvIGludmVzdGltZW50byBkYSBBZnlhIGVtIHNldVxuICAgICAgICAgICAgbWFpb3IgYXRpdm8gPHN0cm9uZz5hcyBwZXNzb2FzIGRvIHNldSBlY29zc2lzdGVtYSE8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUcmF0YS1zZSBkZSB1bSA8c3Ryb25nPmNlbnRybyBkZSBlbXByZWVuZGVkb3Jpc21vIHVuaWZpY2Fkbzwvc3Ryb25nPlxuICAgICAgICAgICAgLCBvbmRlIGFsdW5vcywgZXgtYWx1bm9zLCBwcm9mZXNzb3JlcyBlIGNvbGFib3JhZG9yZXMgY29udGFyw6NvIGNvbSBvXG4gICAgICAgICAgICBzdXBvcnRlIGRhIGNvbXBhbmhpYSBwYXJhIGRlc2Vudm9sdmVyIHNldXMgcHJvamV0b3MuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQWzDqW0gZGlzc28sIGJ1c2NhbW9zIGluaWNpYXRpdmFzIGRlIG1lcmNhZG8gcXVlIHRlbSBzaW5lcmdpYSBjb20gYVxuICAgICAgICAgICAgdmlzw6NvIGV7JyAnfVxuICAgICAgICAgICAgPHN0cm9uZz5lc3RyYXTDqWdpYSBkYSBBZnlhIHBhcmEgYWNlbGVyYXIgZSBpbnZlc3Rpci48L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPk5vc3NvIG9iamV0aXZvIMOpIGZvbWVudGFyIG8gZW1wcmVlbmRlZG9yaXNtbzwvc3Ryb25nPiBuYXNcbiAgICAgICAgICAgIG5vc3NhcyBJbnN0aXR1acOnw7VlcyBkZSBFbnNpbm8sIG8gaW50cmFlbXByZWVuZGVkb3Jpc21vIGNvcnBvcmF0aXZvIGVcbiAgICAgICAgICAgIG8gZWNvc3Npc3RlbWEgZGUgaW5vdmHDp8OjbyBkZSBzYcO6ZGUgZSBlZHVjYcOnw6NvIGJyYXNpbGVpcm8uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVySW1hZ2V9PlxuICAgICAgICAgIDxDaXJjbGVCb3R0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlQm90dG9ufSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2SW1hZ2V9PlxuICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlQWJvdXR9IGFsdD1cInBlb3BsZSBsb29raW5nIGF0IGEgbm90ZWJvb2tcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3F1ZUU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3dpcGVhYmxlLXZpZXdzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN3aXBlYWJsZS12aWV3cy11dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==