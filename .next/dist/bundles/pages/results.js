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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./components/Flight.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = "/Users/marianzikmund/programming/studium/kiwiform-upload/components/Flight.js";




var Flight = function Flight(_ref) {
  var node = _ref.node;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "flight", __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "flight-date", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_moment___default()(node.departure.localTime).format("L"),
      " ",
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "b",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        node.price.amount,
        " ",
        node.price.currency
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "flight-details", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "table",
        { className: "flight-details-table", __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tbody",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "tr",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              "Departure"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "b",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_moment___default()(node.departure.localTime).format("MM-DD-YYYY h:mm")
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              node.departure.airport.name
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "tr",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              "Arrival"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "b",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_moment___default()(node.arrival.localTime).format("MM-DD-YYYY h:mm")
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "td",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              node.arrival.airport.name
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "flight-price-logo", __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      },
      node.airlines.map(function (airline) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          key: airline.name,
          src: airline.logoUrl,
          title: airline.name,
          className: "flight-price-logo-logo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        });
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "clearfix", __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    })
  );
};

Flight.propTypes = {
  node: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Flight);

/***/ }),

/***/ "./components/FlightsList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Flight__ = __webpack_require__("./components/Flight.js");
var _jsxFileName = "/Users/marianzikmund/programming/studium/kiwiform-upload/components/FlightsList.js";





var FlightsList = function FlightsList(_ref) {
  var allFlights = _ref.allFlights;

  if (!allFlights) return null;

  if (allFlights.edges !== undefined && allFlights.edges.length === 0) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    "No flights found."
  );

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    allFlights.edges.map(function (edge) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Flight__["a" /* default */], { node: edge.node, key: edge.node.id, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      });
    })
  );
};

__WEBPACK_IMPORTED_MODULE_2__Flight__["a" /* default */].propTypes = {
  allFlights: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
};

/* harmony default export */ __webpack_exports__["a"] = (FlightsList);

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

/***/ "./components/SearchResults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DestinationPicker__ = __webpack_require__("./components/DestinationPicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FlightsList__ = __webpack_require__("./components/FlightsList.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/marianzikmund/programming/studium/kiwiform-upload/components/SearchResults.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  query allFlights(\n    $from: String\n    $to: String\n    $date: Date\n    $NUM_LOAD_ITEMS: Int\n  ) {\n    allFlights(\n      search: {\n        from: { location: $from }\n        to: { location: $to }\n        date: { exact: $date }\n        passengers: { adults: 2 }\n      }\n      options: { currency: EUR, locale: en_US }\n      first: $NUM_LOAD_ITEMS\n    ) {\n      edges {\n        node {\n          id\n          airlines {\n            name\n            logoUrl\n          }\n          departure {\n            airport {\n              name\n            }\n            localTime\n          }\n          arrival {\n            airport {\n              name\n            }\n            localTime\n          }\n          price {\n            amount\n            currency\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query allFlights(\n    $from: String\n    $to: String\n    $date: Date\n    $NUM_LOAD_ITEMS: Int\n  ) {\n    allFlights(\n      search: {\n        from: { location: $from }\n        to: { location: $to }\n        date: { exact: $date }\n        passengers: { adults: 2 }\n      }\n      options: { currency: EUR, locale: en_US }\n      first: $NUM_LOAD_ITEMS\n    ) {\n      edges {\n        node {\n          id\n          airlines {\n            name\n            logoUrl\n          }\n          departure {\n            airport {\n              name\n            }\n            localTime\n          }\n          arrival {\n            airport {\n              name\n            }\n            localTime\n          }\n          price {\n            amount\n            currency\n          }\n        }\n      }\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var NUM_LOAD_ITEMS = 5;

var SearchResults = function (_Component) {
  _inherits(SearchResults, _Component);

  function SearchResults() {
    _classCallCheck(this, SearchResults);

    var _this = _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).call(this));

    _this.fetchMoreFlights = _this.fetchMoreFlights.bind(_this);
    return _this;
  }

  _createClass(SearchResults, [{
    key: "fetchMoreFlights",
    value: function fetchMoreFlights() {
      this.props.fetchMoreFlights();
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "search-results", __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__FlightsList__["a" /* default */], { allFlights: this.props.allFlights, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }),
        this.props.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/spinner.svg", className: "loading", __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }),
        !this.props.loading && this.props.allFlights && this.props.allFlights.edges && this.props.allFlights.edges.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "button",
          {
            onClick: this.fetchMoreFlights,
            className: "yellow-button load-more-button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          "Load more flights"
        )
      );
    }
  }]);

  return SearchResults;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var allFlightsQuery = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(allFlightsQuery, {
  options: function options(_ref) {
    var _ref$query = _ref.query,
        departureDate = _ref$query.departureDate,
        destination = _ref$query.destination,
        origin = _ref$query.origin;

    return {
      variables: {
        from: origin,
        to: destination,
        date: departureDate,
        NUM_LOAD_ITEMS: NUM_LOAD_ITEMS
      },
      notifyOnNetworkStatusChange: true
    };
  },
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        allFlights = _ref2$data.allFlights,
        loading = _ref2$data.loading,
        fetchMore = _ref2$data.fetchMore;

    return {
      allFlights: allFlights,
      loading: loading,
      fetchMoreFlights: function fetchMoreFlights() {
        return fetchMore({
          variables: {
            NUM_LOAD_ITEMS: allFlights.edges.length + NUM_LOAD_ITEMS
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }
            return _extends({}, previousResult, {
              allFlights: _extends({}, previousResult.allFlights, fetchMoreResult.allFlights)
            });
          }
        });
      }
    };
  }
})(SearchResults));

/***/ }),

/***/ "./lib/initApollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initApollo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);





var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default.a;
}

function create(initialState) {
  return new __WEBPACK_IMPORTED_MODULE_0_apollo_client__["ApolloClient"]({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"]({
      uri: 'https://graphql.kiwi.com/', //https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initApollo__ = __webpack_require__("./lib/initApollo.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/marianzikmund/programming/studium/kiwiform-upload/lib/withData.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

/* harmony default export */ __webpack_exports__["a"] = (function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    _inherits(WithData, _React$Component);

    _createClass(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Initial serverState with apollo (empty)
                  serverState = {
                    apollo: {
                      data: {}
                    }

                    // Evaluate the composed component's getInitialProps()
                  };
                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:

                  // Run all GraphQL queries in the component tree
                  // and extract the resulting data
                  apollo = Object(__WEBPACK_IMPORTED_MODULE_5__initApollo__["a" /* default */])();
                  _context.prev = 7;
                  _context.next = 10;
                  return Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["getDataFromTree"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"],
                    { client: apollo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, composedInitialProps, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      }
                    }))
                  ), {
                    router: {
                      asPath: ctx.asPath,
                      pathname: ctx.pathname,
                      query: ctx.query
                    }
                  });

                case 10:
                  _context.next = 14;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](7);

                case 14:

                  if (!process.browser) {
                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    __WEBPACK_IMPORTED_MODULE_4_next_head___default.a.rewind();
                  }

                  // Extract query data from the Apollo store
                  serverState = {
                    apollo: {
                      data: apollo.cache.extract()
                    }
                  };

                  return _context.abrupt('return', _extends({
                    serverState: serverState
                  }, composedInitialProps));

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[7, 12]]);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      _classCallCheck(this, WithData);

      var _this = _possibleConstructorReturn(this, (WithData.__proto__ || Object.getPrototypeOf(WithData)).call(this, props));

      _this.apollo = Object(__WEBPACK_IMPORTED_MODULE_5__initApollo__["a" /* default */])(_this.props.serverState.apollo.data);
      return _this;
    }

    _createClass(WithData, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"],
          { client: this.apollo, __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          }))
        );
      }
    }]);

    return WithData;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component), _class.displayName = 'WithData(' + getComponentDisplayName(ComposedComponent) + ')', _class.propTypes = {
    serverState: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
  }, _temp;
});

/***/ }),

/***/ "./pages/results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_withData__ = __webpack_require__("./lib/withData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_HeaderSearch__ = __webpack_require__("./components/HeaderSearch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_SearchResults__ = __webpack_require__("./components/SearchResults.js");
var _jsxFileName = "/Users/marianzikmund/programming/studium/kiwiform-upload/pages/results.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    _classCallCheck(this, Results);

    return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
  }

  _createClass(Results, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_HeaderSearch__["a" /* default */], { query: this.props.url.query, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_SearchResults__["a" /* default */], { query: this.props.url.query, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        })
      );
    }
  }]);

  return Results;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2__lib_withData__["a" /* default */])(Results));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/results.js");


/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

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
//# sourceMappingURL=results.js.map