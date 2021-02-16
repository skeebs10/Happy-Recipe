/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Components/Button.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/Components/Button.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/Components/Button.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Components/CreateUpdateRecipe.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/Components/CreateUpdateRecipe.scss ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/Components/CreateUpdateRecipe.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Components/Form.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/Components/Form.scss ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/Components/Form.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Components/Navbar.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/Components/Navbar.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/Components/Navbar.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Pages/CreateRecipe/index.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/Pages/CreateRecipe/index.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/Pages/CreateRecipe/index.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Pages/Home/Recipes.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/Pages/Home/Recipes.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/Pages/Home/Recipes.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Pages/Home/index.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/Pages/Home/index.scss ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/Pages/Home/index.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Pages/Recipe/index.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/Pages/Recipe/index.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/Pages/Recipe/index.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/index.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/index.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/index.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./src/Components/Buttons.js":
/*!***********************************!*\
  !*** ./src/Components/Buttons.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_Components_Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/Components/Button.scss */ \"./src/scss/Components/Button.scss\");\n/* harmony import */ var _scss_Components_Button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_Components_Button_scss__WEBPACK_IMPORTED_MODULE_1__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst Button = (_ref, props) => {\n  let {\n    title,\n    className,\n    onClick,\n    type\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", _extends({\n    className: className ? className + ' Button' : 'Button',\n    onClick: onClick,\n    type: type ? type : 'text'\n  }, props), title);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Button);\n\n//# sourceURL=webpack:///./src/Components/Buttons.js?");

/***/ }),

/***/ "./src/Components/Form.js":
/*!********************************!*\
  !*** ./src/Components/Form.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Buttons */ \"./src/Components/Buttons.js\");\n/* harmony import */ var _scss_Components_Form_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/Components/Form.scss */ \"./src/scss/Components/Form.scss\");\n/* harmony import */ var _scss_Components_Form_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_Components_Form_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Form = (_ref) => {\n  let {\n    getRecipe,\n    ingredient,\n    handleOnchange\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: getRecipe,\n    style: {\n      marginBottom: '2rem'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"Form__input\",\n    type: \"text\",\n    name: \"recipeName\",\n    value: ingredient,\n    onChange: handleOnchange,\n    placeholder: \"Type ingredient name\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Buttons__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    title: \"Search Recipe\",\n    type: \"submit\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Form);\n\n//# sourceURL=webpack:///./src/Components/Form.js?");

/***/ }),

/***/ "./src/Components/Navbar.js":
/*!**********************************!*\
  !*** ./src/Components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _scss_Components_Navbar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/Components/Navbar.scss */ \"./src/scss/Components/Navbar.scss\");\n/* harmony import */ var _scss_Components_Navbar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_Components_Navbar_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Navbar = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Navbar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* NavLink */ \"b\"], {\n    to: \"/\",\n    className: \"Navbar__brand\"\n  }, \"Happy Recipe\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* NavLink */ \"b\"], {\n    to: \"/create-recipe\",\n    className: \"Navbar__title\"\n  }, \"Create\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* NavLink */ \"b\"], {\n    to: \"/\",\n    className: \"Navbar__title\"\n  }, \"Search\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Navbar);\n\n//# sourceURL=webpack:///./src/Components/Navbar.js?");

/***/ }),

/***/ "./src/Components/createUpdateRecipe.js":
/*!**********************************************!*\
  !*** ./src/Components/createUpdateRecipe.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ \"./src/Components/Buttons.js\");\n/* harmony import */ var _scss_Components_CreateUpdateRecipe_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/Components/CreateUpdateRecipe.scss */ \"./src/scss/Components/CreateUpdateRecipe.scss\");\n/* harmony import */ var _scss_Components_CreateUpdateRecipe_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_Components_CreateUpdateRecipe_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst CreatUpdateRecipe = (_ref) => {\n  var _data$ingredients;\n\n  let {\n    handleSubmit,\n    handleChange,\n    data,\n    update,\n    handleAddIngredient,\n    ingredientName\n  } = _ref;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const ingredientInput = document.getElementsByClassName('Create-Update-Recipe__ingredient-input');\n    ingredientInput[0].addEventListener('keyup', function (event) {\n      if (event.keyCode === 13) {\n        handleAddIngredient();\n      }\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Create-Update-Recipe__Card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Create-Update-Recipe__field col-12 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"Create-Update-Recipe__label col-sm-12 col-md-3\"\n  }, \"Recipe Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    onChange: handleChange,\n    className: \"Create-Update-Recipe__input col-sm-12 col-md-9\",\n    name: \"title\",\n    value: data === null || data === void 0 ? void 0 : data.title,\n    placeholder: \"Pizza\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Create-Update-Recipe__field col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"Create-Update-Recipe__label col-sm-12 col-md-3\"\n  }, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    onChange: handleChange,\n    className: \"Create-Update-Recipe__input col-sm-12 col-md-9\",\n    name: \"description\",\n    value: data === null || data === void 0 ? void 0 : data.description,\n    placeholder: \"This is more cheesy\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Create-Update-Recipe__field col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"Create-Update-Recipe__label col-sm-12 col-md-3\"\n  }, \"Image Url\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"url\",\n    onChange: handleChange,\n    className: \"Create-Update-Recipe__input col-sm-12 col-md-9\",\n    name: \"image_url\",\n    value: data === null || data === void 0 ? void 0 : data.image_url,\n    placeholder: \"https://www.google.com\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Create-Update-Recipe__field col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"Create-Update-Recipe__label col-sm-12 col-md-3\"\n  }, \"Publisher\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    onChange: handleChange,\n    className: \"Create-Update-Recipe__input col-sm-12 col-md-9\",\n    name: \"publisher\",\n    value: data === null || data === void 0 ? void 0 : data.publisher,\n    placeholder: \"Natalia\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Create-Update-Recipe__field col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"Create-Update-Recipe__label col-sm-12 col-md-3\"\n  }, \"Ingredients\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Create-Update-Recipe__ingredient col-sm-12 col-md-9\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    onChange: handleChange,\n    className: \"Create-Update-Recipe__ingredient-input\",\n    name: \"ingredients\",\n    value: ingredientName,\n    placeholder: \"rice\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Create-Update-Recipe__ingredient-add\",\n    onClick: handleAddIngredient,\n    type: \"button\"\n  }, \"\\xA0 +Add\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Create-Update-Recipe__list-Recipe\"\n  }, !!(data !== null && data !== void 0 && (_data$ingredients = data.ingredients) !== null && _data$ingredients !== void 0 && _data$ingredients.length) && (data === null || data === void 0 ? void 0 : data.ingredients.map((ingredient, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: index,\n    className: \"col-sm-6 col-md-4 Create-Update-Recipe__list-Recipe-item\"\n  }, ingredient)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    title: update ? 'Update Recipe' : 'Create Recipe',\n    type: \"submit\",\n    className: \"Create-Update-Recipe__submit-btn\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (CreatUpdateRecipe);\n\n//# sourceURL=webpack:///./src/Components/createUpdateRecipe.js?");

/***/ }),

/***/ "./src/Pages/CreateRecipe/index.js":
/*!*****************************************!*\
  !*** ./src/Pages/CreateRecipe/index.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_Pages_CreateRecipe_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/Pages/CreateRecipe/index.scss */ \"./src/scss/Pages/CreateRecipe/index.scss\");\n/* harmony import */ var _scss_Pages_CreateRecipe_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_Pages_CreateRecipe_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var _Components_createUpdateRecipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/createUpdateRecipe */ \"./src/Components/createUpdateRecipe.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst CreateRecipe = () => {\n  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: '',\n    description: '',\n    image_url: '',\n    publisher: '',\n    ingredients: []\n  });\n  const [ingredientName, setIngredientName] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n\n  const handleChange = e => {\n    if (e.target.name === 'ingredients') return setIngredientName(e.target.value);\n    setData(_objectSpread(_objectSpread({}, data), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const handleAddIngredient = () => {\n    setData(_objectSpread(_objectSpread({}, data), {}, {\n      ingredients: [...data.ingredients, ingredientName]\n    }));\n    setIngredientName('');\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/', data).then((_ref) => {\n      let {\n        data\n      } = _ref;\n\n      if (data.success) {\n        setData({\n          title: '',\n          description: '',\n          image_url: '',\n          publisher: '',\n          ingredients: []\n        });\n        react_toastify__WEBPACK_IMPORTED_MODULE_3__[/* toast */ \"b\"].success(data.message);\n      }\n    }).catch(err => {\n      var _err$response;\n\n      console.log('err', err.response.data);\n      let error = err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data;\n      error = !!error.error.message ? error.error.message : !!error.message ? error.message : '';\n      react_toastify__WEBPACK_IMPORTED_MODULE_3__[/* toast */ \"b\"].error(\"Something went wrong \".concat(error));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Create-Recipe\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"Create-Recipe__title\"\n  }, \" Create Recipe \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_createUpdateRecipe__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    handleSubmit: handleSubmit,\n    data: data,\n    handleChange: handleChange,\n    handleAddIngredient: handleAddIngredient,\n    ingredientName: ingredientName\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (CreateRecipe);\n\n//# sourceURL=webpack:///./src/Pages/CreateRecipe/index.js?");

/***/ }),

/***/ "./src/Pages/Home/Recipes.js":
/*!***********************************!*\
  !*** ./src/Pages/Home/Recipes.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Buttons */ \"./src/Components/Buttons.js\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"./node_modules/@material-ui/core/esm/Dialog/Dialog.js\");\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ \"./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js\");\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js\");\n/* harmony import */ var _scss_Pages_Home_Recipes_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../scss/Pages/Home/Recipes.scss */ \"./src/scss/Pages/Home/Recipes.scss\");\n/* harmony import */ var _scss_Pages_Home_Recipes_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_Pages_Home_Recipes_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\n\n\n\n\n\n\n\n\nconst Recipes = (_ref) => {\n  let {\n    recipes,\n    handleDeleteRecipe,\n    temp\n  } = _ref;\n  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* useHistory */ \"f\"])();\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  const [toDeleteID, setToDeleteID] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const handleRecipeButton = recipe => {\n    history.push(\"/recipe/\".concat(recipe._id));\n  };\n\n  const handleClickOpen = recipe => {\n    setToDeleteID(recipe);\n    setOpen(true);\n  };\n\n  const handleOpen = deleteRecipe => {\n    if (deleteRecipe) {\n      axios__WEBPACK_IMPORTED_MODULE_7___default.a.delete('/api/id', {\n        data: {\n          id: toDeleteID._id\n        }\n      }).then((_ref2) => {\n        let {\n          data\n        } = _ref2;\n        console.log('data', data);\n\n        if (data.success) {\n          react_toastify__WEBPACK_IMPORTED_MODULE_8__[/* toast */ \"b\"].success(data.message);\n          handleDeleteRecipe(deleteRecipe);\n        }\n      }).catch(err => {\n        var _err$response;\n\n        console.log('err', err.response.data);\n        let error = err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data;\n        error = !!error.error.message ? error.error.message : !!error.message ? error.message : '';\n        react_toastify__WEBPACK_IMPORTED_MODULE_8__[/* toast */ \"b\"].error(\"Something went wrong \".concat(error));\n      });\n    }\n\n    setOpen(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    open: open,\n    onClose: handleOpen,\n    \"aria-labelledby\": \"alert-dialog-title\",\n    \"aria-describedby\": \"alert-dialog-description\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], {\n    id: \"alert-dialog-title\"\n  }, \"Are you Sure you want to delete \", toDeleteID.title, \" recipe?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Buttons__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    onClick: handleOpen,\n    title: \"Disagree\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Buttons__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    onClick: () => handleOpen(toDeleteID),\n    title: \"Agree\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, !recipes ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Recipes__no-recipe\"\n  }, \"loading\") : !!(recipes !== null && recipes !== void 0 && recipes.length) ? recipes.map(recipe => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: recipe.title,\n      className: \"col-md-4\",\n      style: {\n        marginBottom: '2rem'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"Recipes__box\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"Recipes__box-img\",\n      src: recipe.image_url,\n      alt: recipe.title\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"Recipes__text\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n      className: \"Recipes__title\"\n    }, recipe.title.length < 20 ? \"\".concat(recipe.title) : \"\".concat(recipe.title.substring(0, 25), \"...\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"Recipes__subtitle\"\n    }, \"Publisher: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, recipe.publisher))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"Recipes__buttons\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Buttons__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n      onClick: () => handleRecipeButton(recipe),\n      title: 'View Recipe'\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Buttons__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n      title: 'Delete',\n      onClick: () => handleClickOpen(recipe)\n    }))));\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Recipes__no-recipe\"\n  }, \"No Recipe Found\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Recipes);\n\n//# sourceURL=webpack:///./src/Pages/Home/Recipes.js?");

/***/ }),

/***/ "./src/Pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/Pages/Home/index.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Form */ \"./src/Components/Form.js\");\n/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Recipes */ \"./src/Pages/Home/Recipes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scss_Pages_Home_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scss/Pages/Home/index.scss */ \"./src/scss/Pages/Home/index.scss\");\n/* harmony import */ var _scss_Pages_Home_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_Pages_Home_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\n\n\n\n\nfunction App() {\n  const [recipes, setRecipies] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const [ingredient, setIngredient] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [temp, setTemp] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api').then(res => {\n      console.log('res', res.data);\n\n      if (res.data.success) {\n        setRecipies(res.data.data);\n      }\n    }).catch(err => {\n      var _err$response;\n\n      console.log('err', err.response.data);\n      let error = err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data;\n      error = !!error.error.message ? error.error.message : !!error.message ? error.message : '';\n      react_toastify__WEBPACK_IMPORTED_MODULE_5__[/* toast */ \"b\"].error(\"Something went wrong \".concat(error));\n      setRecipies([]);\n    });\n  }, []);\n\n  const handleOnchange = e => setIngredient(e.target.value);\n\n  const getRecipe = e => {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('api/search', {\n      params: {\n        ingredient: ingredient\n      }\n    }).then(res => {\n      console.log('res', res.data.data);\n      setRecipies([]);\n      setRecipies(res.data.data);\n      setTemp(Date.now());\n    }).catch(err => {\n      var _err$response2;\n\n      console.log('err', err.response.data);\n      let error = err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.data;\n      error = !!error.error.message ? error.error.message : !!error.message ? error.message : '';\n      react_toastify__WEBPACK_IMPORTED_MODULE_5__[/* toast */ \"b\"].error(\"Something went wrong \".concat(error));\n      setRecipies([]);\n    });\n  };\n\n  const handleDeleteRecipe = recipe => {\n    setRecipies(previousData => {\n      let preData = previousData.filter(item => item._id !== recipe._id);\n      return preData;\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"RecipeSearch\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Form__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    getRecipe: getRecipe,\n    handleOnchange: handleOnchange,\n    ingredient: ingredient\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Recipes__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    recipes: recipes,\n    handleDeleteRecipe: handleDeleteRecipe,\n    temp: temp\n  }));\n}\n\n//# sourceURL=webpack:///./src/Pages/Home/index.js?");

/***/ }),

/***/ "./src/Pages/Recipe/index.js":
/*!***********************************!*\
  !*** ./src/Pages/Recipe/index.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Components_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Buttons */ \"./src/Components/Buttons.js\");\n/* harmony import */ var _scss_Pages_Recipe_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scss/Pages/Recipe/index.scss */ \"./src/scss/Pages/Recipe/index.scss\");\n/* harmony import */ var _scss_Pages_Recipe_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_Pages_Recipe_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_createUpdateRecipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/createUpdateRecipe */ \"./src/Components/createUpdateRecipe.js\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"./node_modules/@material-ui/core/esm/Dialog/Dialog.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nfunction RecipeDetail(_ref) {\n  let {\n    match\n  } = _ref;\n  const [recipeDetails, setRecipeDetails] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const [errMess, setErrMess] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const [ingredientName, setIngredientName] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* useHistory */ \"f\"])();\n  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null); // const [errMess, setErrMess] = useState(null);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    var _match$params;\n\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/id\", {\n      params: {\n        id: match === null || match === void 0 ? void 0 : (_match$params = match.params) === null || _match$params === void 0 ? void 0 : _match$params.id\n      }\n    }).then(res => {\n      if (res.data.success) {\n        setRecipeDetails(res.data.data);\n        setData(res.data.data);\n        setErrMess('');\n      } else {\n        if (res.data.error) {\n          setErrMess(res.data.error.message);\n        }\n      }\n\n      setLoading(false);\n    }).catch(err => {\n      var _err$response;\n\n      setLoading(false);\n      console.log('err', err.response.data);\n      let error = err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data;\n      error = !!error.error.message ? error.error.message : !!error.message ? error.message : '';\n      react_toastify__WEBPACK_IMPORTED_MODULE_7__[/* toast */ \"b\"].error(\"Something went wrong \".concat(error));\n      setErrMess(error);\n    });\n  }, []);\n\n  const handleGoHome = () => {\n    history.push('/');\n  };\n\n  const handleOpen = () => {\n    setOpen(!open);\n  };\n\n  const handleChange = e => {\n    if (e.target.name === 'ingredients') return setIngredientName(e.target.value);\n    setData(_objectSpread(_objectSpread({}, data), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const handleAddIngredient = () => {\n    setData(_objectSpread(_objectSpread({}, data), {}, {\n      ingredients: [...data.ingredients, ingredientName]\n    }));\n    setIngredientName('');\n  };\n\n  const handleSubmit = e => {\n    var _match$params2;\n\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.put('/api/id', _objectSpread({\n      id: match === null || match === void 0 ? void 0 : (_match$params2 = match.params) === null || _match$params2 === void 0 ? void 0 : _match$params2.id\n    }, data)).then(res => {\n      if (res.data.success) {\n        react_toastify__WEBPACK_IMPORTED_MODULE_7__[/* toast */ \"b\"].success('Recipe updated successfully');\n        setRecipeDetails(data);\n        handleOpen();\n      } else react_toastify__WEBPACK_IMPORTED_MODULE_7__[/* toast */ \"b\"].info(res.data.message);\n    }).catch(err => {\n      var _err$response2;\n\n      console.log('err', err.response.data);\n      let error = err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.data;\n      error = !!error.error.message ? error.error.message : !!error.message ? error.message : '';\n      react_toastify__WEBPACK_IMPORTED_MODULE_7__[/* toast */ \"b\"].error(\"Something went wrong \".concat(error));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"container Active-recipe\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], {\n    open: open,\n    maxWidth: 'sm',\n    onClose: handleOpen,\n    fullWidth: true,\n    className: \"Active-recipe__update-recipe-dialog\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_createUpdateRecipe__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], {\n    data: data,\n    handleChange: handleChange,\n    update: true,\n    handleSubmit: handleSubmit,\n    handleAddIngredient: handleAddIngredient\n  })), !!recipeDetails && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"Active-recipe__main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n    className: \"Active-recipe__img\",\n    src: recipeDetails.image_url,\n    alt: recipeDetails.title\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", {\n    className: \"Active-recipe__title\"\n  }, recipeDetails.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h5\", {\n    className: \"Active-recipe__sub-heading\"\n  }, \"Publisher: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, recipeDetails.publisher)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h5\", {\n    className: \"Active-recipe__sub-heading\"\n  }, \"Description: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, recipeDetails.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h5\", {\n    className: \"Active-recipe__sub-heading\"\n  }, \"Ingredients:\", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, recipeDetails.ingredients.map((ingredient, index) => index > 0 ? \", \".concat(ingredient) : ingredient))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Buttons__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    title: \"Go Home\",\n    onClick: handleGoHome,\n    className: \"Active-recipe__btn\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Buttons__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    title: \"Update\",\n    onClick: handleOpen,\n    className: \"Active-recipe__btn\"\n  })))) : !loading && errMess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, errMess));\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (RecipeDetail);\n\n//# sourceURL=webpack:///./src/Pages/Recipe/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null)), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Navbar */ \"./src/Components/Navbar.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"].map((_ref) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({\n        page: key\n      }, props)),\n      exact: true\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_5__[/* ToastContainer */ \"a\"], {\n    position: react_toastify__WEBPACK_IMPORTED_MODULE_5__[/* toast */ \"b\"].POSITION.TOP_RIGHT\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (App);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _Pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Pages/Home */ \"./src/Pages/Home/index.js\");\n/* harmony import */ var _Pages_Recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pages/Recipe */ \"./src/Pages/Recipe/index.js\");\n/* harmony import */ var _Pages_CreateRecipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pages/CreateRecipe */ \"./src/Pages/CreateRecipe/index.js\");\n\n\n\nconst routes = [{\n  Component: _Pages_Home__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"],\n  key: 'Home',\n  path: '/'\n}, {\n  Component: _Pages_Recipe__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'Recipe',\n  path: '/recipe/:id'\n}, {\n  Component: _Pages_CreateRecipe__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'CreateRecipe',\n  path: '/create-recipe'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ }),

/***/ "./src/scss/Components/Button.scss":
/*!*****************************************!*\
  !*** ./src/scss/Components/Button.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./Button.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Components/Button.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/Components/Button.scss?");

/***/ }),

/***/ "./src/scss/Components/CreateUpdateRecipe.scss":
/*!*****************************************************!*\
  !*** ./src/scss/Components/CreateUpdateRecipe.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./CreateUpdateRecipe.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Components/CreateUpdateRecipe.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/Components/CreateUpdateRecipe.scss?");

/***/ }),

/***/ "./src/scss/Components/Form.scss":
/*!***************************************!*\
  !*** ./src/scss/Components/Form.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./Form.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Components/Form.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/Components/Form.scss?");

/***/ }),

/***/ "./src/scss/Components/Navbar.scss":
/*!*****************************************!*\
  !*** ./src/scss/Components/Navbar.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!./Navbar.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Components/Navbar.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/Components/Navbar.scss?");

/***/ }),

/***/ "./src/scss/Pages/CreateRecipe/index.scss":
/*!************************************************!*\
  !*** ./src/scss/Pages/CreateRecipe/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./index.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Pages/CreateRecipe/index.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/Pages/CreateRecipe/index.scss?");

/***/ }),

/***/ "./src/scss/Pages/Home/Recipes.scss":
/*!******************************************!*\
  !*** ./src/scss/Pages/Home/Recipes.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./Recipes.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Pages/Home/Recipes.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/Pages/Home/Recipes.scss?");

/***/ }),

/***/ "./src/scss/Pages/Home/index.scss":
/*!****************************************!*\
  !*** ./src/scss/Pages/Home/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./index.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Pages/Home/index.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/Pages/Home/index.scss?");

/***/ }),

/***/ "./src/scss/Pages/Recipe/index.scss":
/*!******************************************!*\
  !*** ./src/scss/Pages/Recipe/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./index.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/Pages/Recipe/index.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/Pages/Recipe/index.scss?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./index.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/index.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ })

/******/ });