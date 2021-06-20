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

/***/ "./src/components/CarouselCategories/CarouselCategories.tsx":
/*!******************************************************************!*\
  !*** ./src/components/CarouselCategories/CarouselCategories.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./src/components/CarouselCategories/Item.tsx");


var _jsxFileName = "/mnt/d/personal_projects/delivery-app/src/components/CarouselCategories/CarouselCategories.tsx";


const breakPoints = [{
  width: 1,
  itemsToShow: 1
}, {
  width: 250,
  itemsToShow: 3
}, {
  width: 550,
  itemsToShow: 5
}, {
  width: 768,
  itemsToShow: 7
}, {
  width: 1200,
  itemsToShow: 10
}];

const CarrrouselCategories = props => {
  const {
    data
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
      isRTL: true,
      breakPoints: breakPoints,
      itemsToScroll: 2,
      itemsToShow: 10,
      children: data === null || data === void 0 ? void 0 : data.map(category => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
          img: category.image,
          link: category.slug,
          title: category.name
        }, category.slug, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (CarrrouselCategories);

/***/ }),

/***/ "./src/components/CarouselCategories/Item.tsx":
/*!****************************************************!*\
  !*** ./src/components/CarouselCategories/Item.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/mnt/d/personal_projects/delivery-app/src/components/CarouselCategories/Item.tsx";
// import { useDispatch, useSelector } from 'react-redux';
 // import classes from './Item.module.scss';
// import { setCurrentCategory } from '../../shared/Redux/Store/Products/ProductsDucks';

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: 150,
      height: 150
    }
  },
  img: {
    display: '-webkit-flex',
    alignContent: 'center',
    height: '100px',
    width: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25px',
    marginTop: '10px',
    borderRadius: '50%',
    userDrag: 'none'
  },
  title: {
    textAlign: 'center',
    fontSize: '16px',
    paddingLeft: '35px'
  },
  card: {
    borderRadius: '4px',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);'
  }
}));

const Item = props => {
  // const dispatch = useDispatch();
  const {
    img,
    title,
    link
  } = props;
  const classes = useStyles();

  function handleSelect(data) {
    console.log('selecionado', data); // dispatch(setCurrentCategory(data));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      onClick: () => handleSelect(link),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: classes.img,
            src: img,
            alt: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: classes.title,
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

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

/***/ "./src/pages/components/Tab/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/components/Tab/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabCategories; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CarouselCategories_CarouselCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~components/CarouselCategories/CarouselCategories */ "./src/components/CarouselCategories/CarouselCategories.tsx");


var _jsxFileName = "/mnt/d/personal_projects/delivery-app/src/pages/components/Tab/index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    role: "tabpanel",
    hidden: value !== index,
    id: `scrollable-auto-tabpanel-${index}`,
    "aria-labelledby": `scrollable-auto-tab-${index}`
  }, other), {}, {
    children: value === index && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 27
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

function TabCategories(props) {
  const {
    food
  } = props;
  const {
    drink
  } = props;
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0); // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: value // onChange={handleChange}
      ,
      indicatorColor: "primary",
      textColor: "primary" // centered
      ,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_2___default.a, {
        label: "Comidas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_2___default.a, {
        label: "Bebidas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabPanel, {
      value: value,
      index: 0,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CarouselCategories_CarouselCategories__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: food
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabPanel, {
      value: value,
      index: 1,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CarouselCategories_CarouselCategories__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: drink
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

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
/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Tab */ "./src/pages/components/Tab/index.tsx");
/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.module.scss */ "./src/pages/Home.module.scss");
/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/mnt/d/personal_projects/delivery-app/src/pages/index.page.tsx";



const server = {
  name: 'Comida',
  image: 'https://delivery.growtechnologies.com.br/media/groups/Grupo_Morita.ico',
  categories: [{
    image: 'https://delivery.growtechnologies.com.br/media/groups/Comidas_5wi40RM.jpg',
    name: 'Comidas',
    slug: 'comidas',
    products: [{
      name: 'Temaki Filadelfia',
      slug: 'temaki-filadelfia',
      description: 'Temaki com tal tal tal e isso e aquilo',
      obs: 'não vem com moio shoiu',
      price: '30.00',
      image: 'https://delivery.growtechnologies.com.br/media/groups/Temaki_Filadelfia_aQDSNFP.png',
      flavors: [{
        name: 'Sem arroz',
        sizes: [{
          size: 'normal',
          value: '3.00'
        }]
      }]
    }, {
      name: 'Uramaki Pokemon',
      slug: 'UramakiPokemon',
      description: 'Arroz, alga nori, creeam cheese, gergelim, salmão grelado e doritos®\r\n10 unidades',
      obs: '10 unidades',
      price: '18.50',
      image: 'https://delivery.growtechnologies.com.br/media/groups/Uramaki_Pokemon.jpg',
      flavors: [{
        name: 'Tradicional',
        sizes: [{
          size: 'Normal',
          value: 0
        }]
      }]
    }]
  }]
};
function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "PocZustand"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "IDNEXXX"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Tab__WEBPACK_IMPORTED_MODULE_2__["default"], {
        food: server === null || server === void 0 ? void 0 : server.categories,
        drink: server === null || server === void 0 ? void 0 : server.categories
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

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

/***/ "react-elastic-carousel":
/*!*****************************************!*\
  !*** external "react-elastic-carousel" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-elastic-carousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWxDYXRlZ29yaWVzL0Nhcm91c2VsQ2F0ZWdvcmllcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWxDYXRlZ29yaWVzL0l0ZW0udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb21wb25lbnRzL1RhYi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnBhZ2UudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJicmVha1BvaW50cyIsIndpZHRoIiwiaXRlbXNUb1Nob3ciLCJDYXJycm91c2VsQ2F0ZWdvcmllcyIsInByb3BzIiwiZGF0YSIsIm1hcCIsImNhdGVnb3J5IiwiaW1hZ2UiLCJzbHVnIiwibmFtZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJtYXJnaW4iLCJzcGFjaW5nIiwiaGVpZ2h0IiwiaW1nIiwiYWxpZ25Db250ZW50IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsInVzZXJEcmFnIiwidGl0bGUiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsInBhZGRpbmdMZWZ0IiwiY2FyZCIsImJveFNoYWRvdyIsIkl0ZW0iLCJsaW5rIiwiY2xhc3NlcyIsImhhbmRsZVNlbGVjdCIsImNvbnNvbGUiLCJsb2ciLCJUYWJQYW5lbCIsImNoaWxkcmVuIiwidmFsdWUiLCJpbmRleCIsIm90aGVyIiwiVGFiQ2F0ZWdvcmllcyIsImZvb2QiLCJkcmluayIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJzZXJ2ZXIiLCJjYXRlZ29yaWVzIiwicHJvZHVjdHMiLCJkZXNjcmlwdGlvbiIsIm9icyIsInByaWNlIiwiZmxhdm9ycyIsInNpemVzIiwic2l6ZSIsIkhvbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQU0sZUFBUyxFQUFFRCx3REFBTSxDQUFDRSxJQUF4QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyx1REFBRDtBQUFlLFlBQUksRUFBRVosTUFBRixhQUFFQSxNQUFGLHVCQUFFQSxNQUFNLENBQUVDLFVBQTdCO0FBQXlDLGFBQUssRUFBRUQsTUFBRixhQUFFQSxNQUFGLHVCQUFFQSxNQUFNLENBQUVDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdELEM7Ozs7Ozs7Ozs7O0FDMUVELGtEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgucGFnZS50c3hcIik7XG4iLCJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCc7XG5cbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5pbXBvcnQgeyBJQ2Fyb3VzZWwgfSBmcm9tICcuL3R5cGUnO1xuXG5jb25zdCBicmVha1BvaW50cyA9IFtcbiAgeyB3aWR0aDogMSwgaXRlbXNUb1Nob3c6IDEgfSxcbiAgeyB3aWR0aDogMjUwLCBpdGVtc1RvU2hvdzogMyB9LFxuICB7IHdpZHRoOiA1NTAsIGl0ZW1zVG9TaG93OiA1IH0sXG4gIHsgd2lkdGg6IDc2OCwgaXRlbXNUb1Nob3c6IDcgfSxcbiAgeyB3aWR0aDogMTIwMCwgaXRlbXNUb1Nob3c6IDEwIH0sXG5dO1xuY29uc3QgQ2FycnJvdXNlbENhdGVnb3JpZXMgPSAocHJvcHM6IHsgZGF0YTogYW55IH0pID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGF0YSA/IChcbiAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgaXNSVExcbiAgICAgICAgICBicmVha1BvaW50cz17YnJlYWtQb2ludHN9XG4gICAgICAgICAgaXRlbXNUb1Njcm9sbD17Mn1cbiAgICAgICAgICBpdGVtc1RvU2hvdz17MTB9XG4gICAgICAgID5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChjYXRlZ29yeTogSUNhcm91c2VsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICAgIGtleT17Y2F0ZWdvcnkuc2x1Z31cbiAgICAgICAgICAgICAgICBpbWc9e2NhdGVnb3J5LmltYWdlfVxuICAgICAgICAgICAgICAgIGxpbms9e2NhdGVnb3J5LnNsdWd9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2FycnJvdXNlbENhdGVnb3JpZXM7XG4iLCIvLyBpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuLy8gaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9JdGVtLm1vZHVsZS5zY3NzJztcblxuLy8gaW1wb3J0IHsgc2V0Q3VycmVudENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vc2hhcmVkL1JlZHV4L1N0b3JlL1Byb2R1Y3RzL1Byb2R1Y3RzRHVja3MnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICcmID4gKic6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIHdpZHRoOiAxNTAsXG4gICAgICBoZWlnaHQ6IDE1MCxcbiAgICB9LFxuICB9LFxuICBpbWc6IHtcbiAgICBkaXNwbGF5OiAnLXdlYmtpdC1mbGV4JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICB3aWR0aDogJzEwMHB4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luTGVmdDogJzI1cHgnLFxuICAgIG1hcmdpblRvcDogJzEwcHgnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdXNlckRyYWc6ICdub25lJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgcGFkZGluZ0xlZnQ6ICczNXB4JyxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgYm94U2hhZG93OlxuICAgICAgJzBweCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4xMik7JyxcbiAgfSxcbn0pKTtcbmNvbnN0IEl0ZW0gPSAocHJvcHM6IHsgaW1nOiBhbnk7IHRpdGxlOiBhbnk7IGxpbms6IGFueSB9KSA9PiB7XG4gIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBpbWcsIHRpdGxlLCBsaW5rIH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChkYXRhOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnc2VsZWNpb25hZG8nLCBkYXRhKTtcbiAgICAvLyBkaXNwYXRjaChzZXRDdXJyZW50Q2F0ZWdvcnkoZGF0YSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KGxpbmspfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9IHNyYz17aW1nfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZyb20zMjBcIjogXCIzMjBweFwiLFxuXHRcImZyb20zNjBcIjogXCIzNjBweFwiLFxuXHRcImZyb200MDBcIjogXCI0MDBweFwiLFxuXHRcImZyb200ODBcIjogXCI0ODBweFwiLFxuXHRcImZyb202MDBcIjogXCI2MDBweFwiLFxuXHRcImZyb203MjBcIjogXCI3MjBweFwiLFxuXHRcImZyb204NDBcIjogXCI4NDBweFwiLFxuXHRcImZyb205NjBcIjogXCI5NjBweFwiLFxuXHRcImZyb20xMDI0XCI6IFwiMTAyNHB4XCIsXG5cdFwiZnJvbTEyODBcIjogXCIxMjgwcHhcIixcblx0XCJmcm9tMTQ0MFwiOiBcIjE0NDBweFwiLFxuXHRcImZyb20xNjAwXCI6IFwiMTYwMHB4XCIsXG5cdFwiZnJvbTE5MjBcIjogXCIxOTIwcHhcIixcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMjdUN29cIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18zdTBMalwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX1ZLMkF3XCJcbn07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgQ2FycnJvdXNlbENhdGVnb3JpZXMgZnJvbSAnfmNvbXBvbmVudHMvQ2Fyb3VzZWxDYXRlZ29yaWVzL0Nhcm91c2VsQ2F0ZWdvcmllcyc7XG5cbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzOiB7XG4gIFt4OiBzdHJpbmddOiBhbnk7XG4gIGNoaWxkcmVuOiBhbnk7XG4gIHZhbHVlOiBhbnk7XG4gIGluZGV4OiBhbnk7XG59KSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICBoaWRkZW49e3ZhbHVlICE9PSBpbmRleH1cbiAgICAgIGlkPXtgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YH1cbiAgICAgIGFyaWEtbGFiZWxsZWRieT17YHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gfVxuICAgICAgey4uLm90aGVyfVxuICAgID5cbiAgICAgIHt2YWx1ZSA9PT0gaW5kZXggJiYgPGRpdj57Y2hpbGRyZW59PC9kaXY+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJDYXRlZ29yaWVzKHByb3BzOiB7IGZvb2Q/OiBhbnk7IGRyaW5rPzogYW55IH0pIHtcbiAgY29uc3QgeyBmb29kIH0gPSBwcm9wcztcbiAgY29uc3QgeyBkcmluayB9ID0gcHJvcHM7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAvLyAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGFic1xuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAvLyBjZW50ZXJlZFxuICAgICAgPlxuICAgICAgICA8VGFiIGxhYmVsPVwiQ29taWRhc1wiIC8+XG4gICAgICAgIDxUYWIgbGFiZWw9XCJCZWJpZGFzXCIgLz5cbiAgICAgIDwvVGFicz5cbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfT5cbiAgICAgICAgPENhcnJyb3VzZWxDYXRlZ29yaWVzIGRhdGE9e2Zvb2R9IC8+XG4gICAgICA8L1RhYlBhbmVsPlxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxuICAgICAgICA8Q2FycnJvdXNlbENhdGVnb3JpZXMgZGF0YT17ZHJpbmt9IC8+XG4gICAgICA8L1RhYlBhbmVsPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IFRhYkNhdGVnb3JpZXMgZnJvbSAnLi9jb21wb25lbnRzL1RhYic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSG9tZS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IHNlcnZlciA9IHtcbiAgbmFtZTogJ0NvbWlkYScsXG4gIGltYWdlOlxuICAgICdodHRwczovL2RlbGl2ZXJ5Lmdyb3d0ZWNobm9sb2dpZXMuY29tLmJyL21lZGlhL2dyb3Vwcy9HcnVwb19Nb3JpdGEuaWNvJyxcbiAgY2F0ZWdvcmllczogW1xuICAgIHtcbiAgICAgIGltYWdlOlxuICAgICAgICAnaHR0cHM6Ly9kZWxpdmVyeS5ncm93dGVjaG5vbG9naWVzLmNvbS5ici9tZWRpYS9ncm91cHMvQ29taWRhc181d2k0MFJNLmpwZycsXG4gICAgICBuYW1lOiAnQ29taWRhcycsXG4gICAgICBzbHVnOiAnY29taWRhcycsXG4gICAgICBwcm9kdWN0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1RlbWFraSBGaWxhZGVsZmlhJyxcbiAgICAgICAgICBzbHVnOiAndGVtYWtpLWZpbGFkZWxmaWEnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGVtYWtpIGNvbSB0YWwgdGFsIHRhbCBlIGlzc28gZSBhcXVpbG8nLFxuICAgICAgICAgIG9iczogJ27Do28gdmVtIGNvbSBtb2lvIHNob2l1JyxcbiAgICAgICAgICBwcmljZTogJzMwLjAwJyxcbiAgICAgICAgICBpbWFnZTpcbiAgICAgICAgICAgICdodHRwczovL2RlbGl2ZXJ5Lmdyb3d0ZWNobm9sb2dpZXMuY29tLmJyL21lZGlhL2dyb3Vwcy9UZW1ha2lfRmlsYWRlbGZpYV9hUURTTkZQLnBuZycsXG4gICAgICAgICAgZmxhdm9yczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnU2VtIGFycm96JyxcbiAgICAgICAgICAgICAgc2l6ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzaXplOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMy4wMCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdVcmFtYWtpIFBva2Vtb24nLFxuICAgICAgICAgIHNsdWc6ICdVcmFtYWtpUG9rZW1vbicsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnQXJyb3osIGFsZ2Egbm9yaSwgY3JlZWFtIGNoZWVzZSwgZ2VyZ2VsaW0sIHNhbG3Do28gZ3JlbGFkbyBlIGRvcml0b3PCrlxcclxcbjEwIHVuaWRhZGVzJyxcbiAgICAgICAgICBvYnM6ICcxMCB1bmlkYWRlcycsXG4gICAgICAgICAgcHJpY2U6ICcxOC41MCcsXG4gICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAnaHR0cHM6Ly9kZWxpdmVyeS5ncm93dGVjaG5vbG9naWVzLmNvbS5ici9tZWRpYS9ncm91cHMvVXJhbWFraV9Qb2tlbW9uLmpwZycsXG4gICAgICAgICAgZmxhdm9yczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnVHJhZGljaW9uYWwnLFxuICAgICAgICAgICAgICBzaXplczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNpemU6ICdOb3JtYWwnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb2NadXN0YW5kPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDI+SURORVhYWDwvaDI+XG4gICAgICAgIDxUYWJDYXRlZ29yaWVzIGZvb2Q9e3NlcnZlcj8uY2F0ZWdvcmllc30gZHJpbms9e3NlcnZlcj8uY2F0ZWdvcmllc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==