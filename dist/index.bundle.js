/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  box-sizing: border-box;\n  padding: 0;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-family: 'Permanent Marker', cursive;\n}\n\n.main,\n.header {\n  padding: 10px;\n}\n\n.app-header {\n  margin: 20px 0 0;\n  font-family: 'Permanent Marker', cursive;\n  color: #008cba;\n}\n\n.error-message {\n  display: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n  width: calc(100% + 10px);\n  position: fixed;\n  text-align: center;\n  align-self: center;\n  top: 0;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: transparent;\n  left: 0;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  transition: all 2s;\n}\n\n.leaderboard-container {\n  margin-top: 30px;\n  box-shadow: 0 1px 5px 3px grey;\n  padding: 10px;\n}\n\n.score-heading {\n  display: flex;\n  justify-content: space-between;\n}\n\n.recent {\n  font-weight: bold;\n  font-size: 1.4rem;\n}\n\n.refresh {\n  background-color: #008cba;\n  font-size: 1.2rem;\n  border: none;\n  height: 40px;\n  outline: none;\n  display: flex;\n  align-items: center;\n  line-height: 40;\n  border-radius: 5px;\n  font-weight: bold;\n  color: #fff;\n  padding: 0 15px;\n}\n\n.fa-sync {\n  font-size: 1.2rem;\n  margin-right: 5px;\n  transition: transform 0.5s linear;\n}\n\n.rotate {\n  transform: rotate(720deg);\n}\n\n.submit {\n  display: block;\n  background-color: #008cba;\n  color: #fff;\n  width: 82%;\n  margin: auto;\n  outline: none;\n  border: none;\n  height: 40px;\n  padding: 2px;\n  border-radius: 5px;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\n.refresh:hover,\n.submit:hover {\n  background-color: #e7e7e7;\n  color: #008cba;\n  cursor: pointer;\n}\n\n.add {\n  margin-top: 50px;\n  box-shadow: 0 1px 5px 3px grey;\n  padding: 20px 0;\n}\n\n.add-score {\n  margin: auto;\n  width: 80%;\n  text-align: center;\n}\n\n.scores {\n  list-style-type: none;\n  width: 100%;\n  margin: 10px auto;\n  padding: 0;\n  height: 60vh;\n  overflow-y: scroll;\n}\n\n.name-score {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  padding: 0 0.5rem;\n  font-size: 1.4rem;\n  font-weight: bold;\n}\n\n.item {\n  padding: 0.2rem 0.5rem;\n  min-height: 30px;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.item:nth-child(odd) {\n  background-color: #e7e7e7;\n}\n\n.top-score {\n  color: #008cba;\n}\n\n.add input:not(.submit) {\n  display: block;\n  width: 80%;\n  margin: 28px auto;\n  border: solid rgb(230, 226, 226);\n  min-height: 30px;\n  border-radius: 5px;\n  font-size: 1.3rem;\n}\n\n.add input:not(.submit):focus {\n  outline: none;\n  border: solid #008cba;\n}\n\n@media screen and (min-width: 768px) {\n  main {\n    display: flex;\n    justify-content: space-between;\n    gap: 20px;\n  }\n\n  .leaderboard-container {\n    width: 49%;\n  }\n\n  .add {\n    margin-top: 30px;\n    width: 49%;\n    height: auto;\n  }\n\n  .submit {\n    width: 20.5vw;\n  }\n\n  .add input:not(.submit) {\n    width: 20vw;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,sBAAsB;EACtB,UAAU;EACV,gDAAgD;EAChD,wCAAwC;AAC1C;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,wCAAwC;EACxC,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,UAAU;EACV,SAAS;EACT,wBAAwB;EACxB,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,MAAM;EACN,gDAAgD;EAChD,kBAAkB;EAClB,OAAO;EACP,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,iBAAiB;EACjB,UAAU;EACV,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,iBAAiB;EACjB,gCAAgC;EAChC,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B,SAAS;EACX;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,gBAAgB;IAChB,UAAU;IACV,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');\n\nbody {\n  margin: 0;\n  box-sizing: border-box;\n  padding: 0;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-family: 'Permanent Marker', cursive;\n}\n\n.main,\n.header {\n  padding: 10px;\n}\n\n.app-header {\n  margin: 20px 0 0;\n  font-family: 'Permanent Marker', cursive;\n  color: #008cba;\n}\n\n.error-message {\n  display: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n  width: calc(100% + 10px);\n  position: fixed;\n  text-align: center;\n  align-self: center;\n  top: 0;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: transparent;\n  left: 0;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  transition: all 2s;\n}\n\n.leaderboard-container {\n  margin-top: 30px;\n  box-shadow: 0 1px 5px 3px grey;\n  padding: 10px;\n}\n\n.score-heading {\n  display: flex;\n  justify-content: space-between;\n}\n\n.recent {\n  font-weight: bold;\n  font-size: 1.4rem;\n}\n\n.refresh {\n  background-color: #008cba;\n  font-size: 1.2rem;\n  border: none;\n  height: 40px;\n  outline: none;\n  display: flex;\n  align-items: center;\n  line-height: 40;\n  border-radius: 5px;\n  font-weight: bold;\n  color: #fff;\n  padding: 0 15px;\n}\n\n.fa-sync {\n  font-size: 1.2rem;\n  margin-right: 5px;\n  transition: transform 0.5s linear;\n}\n\n.rotate {\n  transform: rotate(720deg);\n}\n\n.submit {\n  display: block;\n  background-color: #008cba;\n  color: #fff;\n  width: 82%;\n  margin: auto;\n  outline: none;\n  border: none;\n  height: 40px;\n  padding: 2px;\n  border-radius: 5px;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\n.refresh:hover,\n.submit:hover {\n  background-color: #e7e7e7;\n  color: #008cba;\n  cursor: pointer;\n}\n\n.add {\n  margin-top: 50px;\n  box-shadow: 0 1px 5px 3px grey;\n  padding: 20px 0;\n}\n\n.add-score {\n  margin: auto;\n  width: 80%;\n  text-align: center;\n}\n\n.scores {\n  list-style-type: none;\n  width: 100%;\n  margin: 10px auto;\n  padding: 0;\n  height: 60vh;\n  overflow-y: scroll;\n}\n\n.name-score {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  padding: 0 0.5rem;\n  font-size: 1.4rem;\n  font-weight: bold;\n}\n\n.item {\n  padding: 0.2rem 0.5rem;\n  min-height: 30px;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.item:nth-child(odd) {\n  background-color: #e7e7e7;\n}\n\n.top-score {\n  color: #008cba;\n}\n\n.add input:not(.submit) {\n  display: block;\n  width: 80%;\n  margin: 28px auto;\n  border: solid rgb(230, 226, 226);\n  min-height: 30px;\n  border-radius: 5px;\n  font-size: 1.3rem;\n}\n\n.add input:not(.submit):focus {\n  outline: none;\n  border: solid #008cba;\n}\n\n@media screen and (min-width: 768px) {\n  main {\n    display: flex;\n    justify-content: space-between;\n    gap: 20px;\n  }\n\n  .leaderboard-container {\n    width: 49%;\n  }\n\n  .add {\n    margin-top: 30px;\n    width: 49%;\n    height: auto;\n  }\n\n  .submit {\n    width: 20.5vw;\n  }\n\n  .add input:not(.submit) {\n    width: 20vw;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addScore.js":
/*!*************************!*\
  !*** ./src/addScore.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "errorMessageContainer": () => (/* binding */ errorMessageContainer),
/* harmony export */   "showMessage": () => (/* binding */ showMessage)
/* harmony export */ });
const errorMessageContainer = document.querySelector('.error-message');

const showMessage = (message, backgroundColor) => {
  if (message) {
    errorMessageContainer.textContent = message;
    errorMessageContainer.style.backgroundColor = backgroundColor;
    errorMessageContainer.style.color = '#fff';
    setTimeout(() => {
      errorMessageContainer.style.backgroundColor = 'transparent';
      errorMessageContainer.style.color = 'transparent';
    }, 3000);
  }
};

const postData = async () => {
  const nameField = document.querySelector('.name');
  const scoreField = document.querySelector('.score');
  const { value: user } = nameField;
  const { value: score } = scoreField;

  if (!score || !user) {
    showMessage('Please, fill out all the fields.', '#f33');
    return false;
  }

  const scoreObject = {
    user,
    score,
  };

  nameField.value = '';
  scoreField.value = '';

  try {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hTQZn6X8J86KPjE48QNK/scores/';
    const message = (await fetch(url, {
      method: 'POST',
      body: JSON.stringify(scoreObject),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })).json();
    return message;
  } catch (e) {
    return { result: e };
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _addScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addScore */ "./src/addScore.js");



let scores = [];

const scoresContainer = document.querySelector('.scores');

let topScore = 0;

const showScores = () => {
  scoresContainer.innerHTML = '';
  scores.forEach((each, ind) => {
    const li = document.createElement('li');
    li.className = 'item';
    const nameSpan = document.createElement('span');
    nameSpan.className = 'player-name';
    nameSpan.textContent = each.user;

    const scoreSpan = document.createElement('span');
    scoreSpan.className = 'player-score';
    scoreSpan.textContent = each.score;

    const topSpan = document.createElement('i');
    topSpan.classList.add('fas', 'fa-trophy-alt');

    if (ind === 0) {
      topScore = each.score;
      li.classList.add('top-score');
    }

    if (ind === 0) {
      topScore = each.score;
      li.classList.add('top-score');
    }

    if (ind === 0) {
      topScore = each.score;
      li.classList.add('top-score');
    }

    li.append(nameSpan, (ind === 0 && topSpan) || '', scoreSpan);

    if (ind > 0 && (each.score === topScore)) {
      li.insertBefore(topSpan, li.firstElementChild.nextElementSibling);
      li.classList.add('top-score');
    }

    scoresContainer.append(li);
  });
};

const getScores = async (msg) => {
  const getData = async () => (await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hTQZn6X8J86KPjE48QNK/scores/')).json();
  try {
    const data = await getData();
    scores = data.result;
    scores.sort((a, b) => a.score - b.score).reverse();
    showScores();
    (0,_addScore__WEBPACK_IMPORTED_MODULE_1__.showMessage)(msg, '#228b22');
  } catch (e) {
    (0,_addScore__WEBPACK_IMPORTED_MODULE_1__.showMessage)(e.message);
  }
};

document.querySelector('.submit').addEventListener('click', async () => {
  const message = await (0,_addScore__WEBPACK_IMPORTED_MODULE_1__.default)();
  await getScores(message.result);
});

document.querySelector('.refresh').addEventListener('click', async () => {
  await getScores('');
});

document.querySelector('.refresh').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate');
});

getScores('');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showScores);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2FkZFNjb3JlLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xcbn1cXG5cXG4ubWFpbixcXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hcHAtaGVhZGVyIHtcXG4gIG1hcmdpbjogMjBweCAwIDA7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xcbiAgY29sb3I6ICMwMDhjYmE7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxMHB4KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRvcDogMDtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXG59XFxuXFxuLmxlYWRlcmJvYXJkLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDNweCBncmV5O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNjb3JlLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnJlY2VudCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ucmVmcmVzaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Y2JhO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogNDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG5cXG4uZmEtc3luYyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgbGluZWFyO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Y2JhO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogODIlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWZyZXNoOmhvdmVyLFxcbi5zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcXG4gIGNvbG9yOiAjMDA4Y2JhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCA1cHggM3B4IGdyZXk7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbi5hZGQtc2NvcmUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNjb3JlcyB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogNjB2aDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLm5hbWUtc2NvcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pdGVtIHtcXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW06bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcXG59XFxuXFxuLnRvcC1zY29yZSB7XFxuICBjb2xvcjogIzAwOGNiYTtcXG59XFxuXFxuLmFkZCBpbnB1dDpub3QoLnN1Ym1pdCkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAyOHB4IGF1dG87XFxuICBib3JkZXI6IHNvbGlkIHJnYigyMzAsIDIyNiwgMjI2KTtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmFkZCBpbnB1dDpub3QoLnN1Ym1pdCk6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgIzAwOGNiYTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG5cXG4gIC5sZWFkZXJib2FyZC1jb250YWluZXIge1xcbiAgICB3aWR0aDogNDklO1xcbiAgfVxcblxcbiAgLmFkZCB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHdpZHRoOiA0OSU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5zdWJtaXQge1xcbiAgICB3aWR0aDogMjAuNXZ3O1xcbiAgfVxcblxcbiAgLmFkZCBpbnB1dDpub3QoLnN1Ym1pdCkge1xcbiAgICB3aWR0aDogMjB2dztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGdEQUFnRDtFQUNoRCx3Q0FBd0M7QUFDMUM7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0VBQ1YsU0FBUztFQUNULHdCQUF3QjtFQUN4QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztFQUNYOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xcbn1cXG5cXG4ubWFpbixcXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hcHAtaGVhZGVyIHtcXG4gIG1hcmdpbjogMjBweCAwIDA7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xcbiAgY29sb3I6ICMwMDhjYmE7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxMHB4KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRvcDogMDtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXG59XFxuXFxuLmxlYWRlcmJvYXJkLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDNweCBncmV5O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNjb3JlLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnJlY2VudCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ucmVmcmVzaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Y2JhO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogNDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG5cXG4uZmEtc3luYyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgbGluZWFyO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Y2JhO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogODIlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWZyZXNoOmhvdmVyLFxcbi5zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcXG4gIGNvbG9yOiAjMDA4Y2JhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCA1cHggM3B4IGdyZXk7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbi5hZGQtc2NvcmUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNjb3JlcyB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogNjB2aDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLm5hbWUtc2NvcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pdGVtIHtcXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW06bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcXG59XFxuXFxuLnRvcC1zY29yZSB7XFxuICBjb2xvcjogIzAwOGNiYTtcXG59XFxuXFxuLmFkZCBpbnB1dDpub3QoLnN1Ym1pdCkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAyOHB4IGF1dG87XFxuICBib3JkZXI6IHNvbGlkIHJnYigyMzAsIDIyNiwgMjI2KTtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmFkZCBpbnB1dDpub3QoLnN1Ym1pdCk6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgIzAwOGNiYTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG5cXG4gIC5sZWFkZXJib2FyZC1jb250YWluZXIge1xcbiAgICB3aWR0aDogNDklO1xcbiAgfVxcblxcbiAgLmFkZCB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHdpZHRoOiA0OSU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5zdWJtaXQge1xcbiAgICB3aWR0aDogMjAuNXZ3O1xcbiAgfVxcblxcbiAgLmFkZCBpbnB1dDpub3QoLnN1Ym1pdCkge1xcbiAgICB3aWR0aDogMjB2dztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGVycm9yTWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJyk7XG5cbmNvbnN0IHNob3dNZXNzYWdlID0gKG1lc3NhZ2UsIGJhY2tncm91bmRDb2xvcikgPT4ge1xuICBpZiAobWVzc2FnZSkge1xuICAgIGVycm9yTWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgZXJyb3JNZXNzYWdlQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcbiAgICBlcnJvck1lc3NhZ2VDb250YWluZXIuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlcnJvck1lc3NhZ2VDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgIGVycm9yTWVzc2FnZUNvbnRhaW5lci5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfSwgMzAwMCk7XG4gIH1cbn07XG5cbmNvbnN0IHBvc3REYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBuYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuICBjb25zdCBzY29yZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlJyk7XG4gIGNvbnN0IHsgdmFsdWU6IHVzZXIgfSA9IG5hbWVGaWVsZDtcbiAgY29uc3QgeyB2YWx1ZTogc2NvcmUgfSA9IHNjb3JlRmllbGQ7XG5cbiAgaWYgKCFzY29yZSB8fCAhdXNlcikge1xuICAgIHNob3dNZXNzYWdlKCdQbGVhc2UsIGZpbGwgb3V0IGFsbCB0aGUgZmllbGRzLicsICcjZjMzJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3Qgc2NvcmVPYmplY3QgPSB7XG4gICAgdXNlcixcbiAgICBzY29yZSxcbiAgfTtcblxuICBuYW1lRmllbGQudmFsdWUgPSAnJztcbiAgc2NvcmVGaWVsZC52YWx1ZSA9ICcnO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL2hUUVpuNlg4Sjg2S1BqRTQ4UU5LL3Njb3Jlcy8nO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAoYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHNjb3JlT2JqZWN0KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IHJlc3VsdDogZSB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0RGF0YTtcbmV4cG9ydCB7IGVycm9yTWVzc2FnZUNvbnRhaW5lciwgc2hvd01lc3NhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcG9zdERhdGEsIHsgc2hvd01lc3NhZ2UgfSBmcm9tICcuL2FkZFNjb3JlJztcblxubGV0IHNjb3JlcyA9IFtdO1xuXG5jb25zdCBzY29yZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzJyk7XG5cbmxldCB0b3BTY29yZSA9IDA7XG5cbmNvbnN0IHNob3dTY29yZXMgPSAoKSA9PiB7XG4gIHNjb3Jlc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgc2NvcmVzLmZvckVhY2goKGVhY2gsIGluZCkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc05hbWUgPSAnaXRlbSc7XG4gICAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZVNwYW4uY2xhc3NOYW1lID0gJ3BsYXllci1uYW1lJztcbiAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGVhY2gudXNlcjtcblxuICAgIGNvbnN0IHNjb3JlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzY29yZVNwYW4uY2xhc3NOYW1lID0gJ3BsYXllci1zY29yZSc7XG4gICAgc2NvcmVTcGFuLnRleHRDb250ZW50ID0gZWFjaC5zY29yZTtcblxuICAgIGNvbnN0IHRvcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgdG9wU3Bhbi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtdHJvcGh5LWFsdCcpO1xuXG4gICAgaWYgKGluZCA9PT0gMCkge1xuICAgICAgdG9wU2NvcmUgPSBlYWNoLnNjb3JlO1xuICAgICAgbGkuY2xhc3NMaXN0LmFkZCgndG9wLXNjb3JlJyk7XG4gICAgfVxuXG4gICAgaWYgKGluZCA9PT0gMCkge1xuICAgICAgdG9wU2NvcmUgPSBlYWNoLnNjb3JlO1xuICAgICAgbGkuY2xhc3NMaXN0LmFkZCgndG9wLXNjb3JlJyk7XG4gICAgfVxuXG4gICAgaWYgKGluZCA9PT0gMCkge1xuICAgICAgdG9wU2NvcmUgPSBlYWNoLnNjb3JlO1xuICAgICAgbGkuY2xhc3NMaXN0LmFkZCgndG9wLXNjb3JlJyk7XG4gICAgfVxuXG4gICAgbGkuYXBwZW5kKG5hbWVTcGFuLCAoaW5kID09PSAwICYmIHRvcFNwYW4pIHx8ICcnLCBzY29yZVNwYW4pO1xuXG4gICAgaWYgKGluZCA+IDAgJiYgKGVhY2guc2NvcmUgPT09IHRvcFNjb3JlKSkge1xuICAgICAgbGkuaW5zZXJ0QmVmb3JlKHRvcFNwYW4sIGxpLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCd0b3Atc2NvcmUnKTtcbiAgICB9XG5cbiAgICBzY29yZXNDb250YWluZXIuYXBwZW5kKGxpKTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRTY29yZXMgPSBhc3luYyAobXNnKSA9PiB7XG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiAoYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL2hUUVpuNlg4Sjg2S1BqRTQ4UU5LL3Njb3Jlcy8nKSkuanNvbigpO1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCk7XG4gICAgc2NvcmVzID0gZGF0YS5yZXN1bHQ7XG4gICAgc2NvcmVzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlKS5yZXZlcnNlKCk7XG4gICAgc2hvd1Njb3JlcygpO1xuICAgIHNob3dNZXNzYWdlKG1zZywgJyMyMjhiMjInKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNob3dNZXNzYWdlKGUubWVzc2FnZSk7XG4gIH1cbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHBvc3REYXRhKCk7XG4gIGF3YWl0IGdldFNjb3JlcyhtZXNzYWdlLnJlc3VsdCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgZ2V0U2NvcmVzKCcnKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVmcmVzaCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc3luYycpLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpO1xufSk7XG5cbmdldFNjb3JlcygnJyk7XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dTY29yZXM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=