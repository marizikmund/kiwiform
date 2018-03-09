module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DestinationPicker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_select__ = __webpack_require__("react-select");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);

var _jsxFileName = "/Users/marianzikmund/programming/studium/kiwiform-upload/components/DestinationPicker.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var DestinationPicker = function (_Component) {
  _inherits(DestinationPicker, _Component);

  function DestinationPicker() {
    _classCallCheck(this, DestinationPicker);

    var _this = _possibleConstructorReturn(this, (DestinationPicker.__proto__ || Object.getPrototypeOf(DestinationPicker)).call(this));

    _this.state = {
      locations: []
    };
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(DestinationPicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // preferably solvable by redux or graphql, but easy and quick enough for now
      if (this.props.value && this.state.locations.length === 0) {
        this.fetchLocations(this.props.value, true);
      }
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(value) {
      var _props = this.props,
          typeDestination = _props.typeDestination,
          onSelectDestination = _props.onSelectDestination;

      if (value.length > 2) {
        this.fetchLocations(value);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      var _props2 = this.props,
          typeDestination = _props2.typeDestination,
          onSelectDestination = _props2.onSelectDestination;

      onSelectDestination(typeDestination, value.value);
    }
  }, {
    key: "fetchLocations",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(value) {
        var searchById = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var locationsFromAPI;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("https://api.skypicker.com/locations/" + (!searchById ? "?term=" + value + "&v=2" : "?type=id&id=" + value) + "&locale=en-US");

              case 2:
                locationsFromAPI = _context.sent;


                this.setState({
                  locations: locationsFromAPI.data.locations.map(function (location) {
                    return {
                      value: location.id,
                      label: location.name
                    };
                  })
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchLocations(_x2) {
        return _ref.apply(this, arguments);
      }

      return fetchLocations;
    }()
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props,
          value = _props3.value,
          title = _props3.title;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { className: "header-search-input-wrapper", __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "span",
          { className: "header-search-input-title", __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_select___default.a, {
          onInputChange: this.onInputChange,
          value: value,
          clearable: false,
          arrowRenderer: null,
          onSelectResetsInput: false,
          options: this.state.locations,
          searchPromptText: "",
          placeholder: "Type in airport/place",
          noResultsText: false,
          onChange: this.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        })
      );
    }
  }]);

  return DestinationPicker;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

DestinationPicker.propTypes = {
  typeDestination: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  value: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  title: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  onSelectDestination: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
};

/* harmony default export */ __webpack_exports__["a"] = (DestinationPicker);

/***/ }),

/***/ "./components/HeaderSearch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_datepicker__ = __webpack_require__("react-datepicker");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DestinationPicker__ = __webpack_require__("./components/DestinationPicker.js");
var _jsxFileName = "/Users/marianzikmund/programming/studium/kiwiform-upload/components/HeaderSearch.js";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var HeaderSearch = function (_Component) {
  _inherits(HeaderSearch, _Component);

  function HeaderSearch() {
    _classCallCheck(this, HeaderSearch);

    var _this = _possibleConstructorReturn(this, (HeaderSearch.__proto__ || Object.getPrototypeOf(HeaderSearch)).call(this));

    _this.state = {
      origin: "",
      destination: "",
      departureDate: ""
    };
    _this.onSelectDestination = _this.onSelectDestination.bind(_this);
    _this.onChangeDate = _this.onChangeDate.bind(_this);
    _this.search = _this.search.bind(_this);
    return _this;
  }

  _createClass(HeaderSearch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.query && this.props.query.departureDate) {
        this.setState({
          departureDate: __WEBPACK_IMPORTED_MODULE_4_moment___default()(this.props.query.departureDate),
          origin: this.props.query.origin,
          destination: this.props.query.destination
        });
      } else {
        this.setState({ departureDate: __WEBPACK_IMPORTED_MODULE_4_moment___default()().add("2", "days") });
      }
    }
  }, {
    key: "onSelectDestination",
    value: function onSelectDestination(typeDestination, destinationCode) {
      if (!destinationCode) return;
      this.setState(_defineProperty({}, typeDestination, destinationCode));
    }
  }, {
    key: "onChangeDate",
    value: function onChangeDate(departureDate) {
      this.setState({ departureDate: departureDate });
    }
  }, {
    key: "search",
    value: function search() {
      var searchQuery = _extends({}, this.state, {
        departureDate: __WEBPACK_IMPORTED_MODULE_4_moment___default()(this.state.departureDate).format("YYYY-MM-DD")
      });

      if (!searchQuery.origin) return alert("Please fill in where to fly from.");
      if (!searchQuery.destination) return alert("Please fill in where you want to fly.");
      if (!searchQuery.departureDate) return alert("Please fill in the desired date of the flight.");

      __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push({
        pathname: "/results",
        query: searchQuery
      });
    }
  }, {
    key: "render",
    value: function render() {
      var query = this.props.query;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "header", __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          { href: "/", __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/logo.jpg", alt: "Kiwi.com", className: "logo", __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "header-search", __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "tablet-third", __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__DestinationPicker__["a" /* default */], {
              title: "From",
              value: this.state.origin || query.origin,
              onSelectDestination: this.onSelectDestination,
              typeDestination: "origin",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "tablet-third", __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__DestinationPicker__["a" /* default */], {
              title: "To",
              value: this.state.destination || query.destination,
              onSelectDestination: this.onSelectDestination,
              typeDestination: "destination",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "tablet-third", __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "span",
              { className: "header-search-datepicker-title", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 92
                }
              },
              "When"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_datepicker___default.a, {
              selected: __WEBPACK_IMPORTED_MODULE_4_moment___default()(this.state.departureDate),
              onChange: this.onChangeDate,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "clearfix", __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "button",
            { className: "yellow-button", onClick: this.search, __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              }
            },
            "Search"
          )
        )
      );
    }
  }]);

  return HeaderSearch;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

HeaderSearch.propTypes = {
  query: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (HeaderSearch);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HeaderSearch__ = __webpack_require__("./components/HeaderSearch.js");
var _jsxFileName = "/Users/marianzikmund/programming/studium/kiwiform-upload/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.prefetch("/results");
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_HeaderSearch__["a" /* default */], { query: this.props.url.query, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h1",
          { className: "h1", __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          "Welcome. Look for the flights you wish"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "h3", __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          "Features"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "ul",
          { className: "main-ul", __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            "Used both REST and GraphQL API"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            "Several libraries used for various purposes (nextjs, axios, apollo, moment, react-select...)"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            "Destinations auto-suggest"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            },
            "Pagination"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            "Persistent URLs - address with search results can be refreshed"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            "Simple responsivity"
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-datepicker":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-select":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map