module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../../../ssr-module-cache.js"); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 5));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
      /*!*********************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign"
        );

        /***/
      },

    /***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
      /*!******************************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \******************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property"
        );

        /***/
      },

    /***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
      /*!**************************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \**************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _defineProperty;
          }
        );
        /* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"
        );
        /* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__
        );

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(
              obj,
              key,
              {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              }
            );
          } else {
            obj[key] = value;
          }

          return obj;
        }

        /***/
      },

    /***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
      /*!*******************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*******************************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _extends;
          }
        );
        /* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"
        );
        /* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__
        );

        function _extends() {
          _extends =
            _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }

              return target;
            };

          return _extends.apply(this, arguments);
        }

        /***/
      },

    /***/ "../../node_modules/common/src/assets/css/flaticon.css":
      /*!********************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/common/src/assets/css/flaticon.css ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /***/
      },

    /***/ "../../node_modules/common/src/assets/css/style.js":
      /*!****************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/common/src/assets/css/style.js ***!
  \****************************************************************************************************/
      /*! exports provided: ResetCSS */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ResetCSS",
          function() {
            return ResetCSS;
          }
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./flaticon.css */ "../../node_modules/common/src/assets/css/flaticon.css"
        );
        /* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _flaticon_css__WEBPACK_IMPORTED_MODULE_1__
        );

        const ResetCSS = styled_components__WEBPACK_IMPORTED_MODULE_0__[
          "createGlobalStyle"
        ]`
  ::selection {
    background: #333333;
    color: #ffffff;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .reuseModalHolder {
    padding: 0 !important;
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.9) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
  }

  button.modalCloseBtn {
    position: fixed !important;
    z-index: 999991 !important;
    background-color: transparent !important;
    top: 10px !important;
    right: 10px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    span.btn-icon {
      font-size: 22px !important;
      transform: rotate(45deg) !important;
    }

    &.alt {
      border-radius: 50% !important;
      z-index: 999999 !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
      top: 25px !important;
      right: 30px !important;
      min-width: 40px !important;
      min-height: 40px !important;

      span.btn-icon {
        font-size: 20px !important;
      }

      &:hover {
        opacity: 0.88 !important;
      }
    }
  }
`;

        /***/
      },

    /***/ "../../node_modules/common/src/assets/image/app/pattern.png":
      /*!*************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/common/src/assets/image/app/pattern.png ***!
  \*************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABOCAYAAACDtFBaAAAAw0lEQVR4nO3asY0CURBEwf7oYgCD/EPDOIJgMUC4jU5zYoWqAhjNPv31JgEAAAAAAHZhTQzZtu2c5JjkmuQyMfMPXjustcZ2OAzNOT1nHYfm7WaHqUC/SW55vKBP+Zcdpn6xiTFj1hr5rCRzL+hrCVQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVPwMzdnVEefkDo44C0ecAAAAAMD77oxYGlHmfHMuAAAAAElFTkSuQmCC";

        /***/
      },

    /***/ "../../node_modules/common/src/assets/image/app/substract-hover.png":
      /*!*********************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/common/src/assets/image/app/substract-hover.png ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAAAadOcAAABm1PezAAAAAnRSTlMAtyOW6xcAAAABYktHRACIBR1IAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wEJDSstJxuX+QAAABNJREFUGNNjYBhQEAoBAQjGgAIAyTkFR/LaIPkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMDlUMTI6NDM6NDUrMDE6MDAW+EkNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTA5VDEyOjQzOjQ1KzAxOjAwZ6XxsQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";

        /***/
      },

    /***/ "../../node_modules/common/src/assets/image/app/substract.png":
      /*!***************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/common/src/assets/image/app/substract.png ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAQAAADX3XYeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjAQkNFyOzUMMBAAACGElEQVR42u3csRGAMBADwTcF038GPZjAc8NuBUou1QwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF+tuU9PAHateU5PAHZdpwcA+wQMYQKGMAFDmIAhTMAQJmAIEzCECRjCBAxhAoYwAUOYgCFMwBAmYAgTMIQJGMIEDGEChjABQ5iAIcytLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8GsvZ4ECCdeosigAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMDlUMTI6MjM6MzUrMDE6MDD0iIpXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTA5VDEyOjIzOjM1KzAxOjAwhdUy6wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";

        /***/
      },

    /***/ "../../node_modules/common/src/theme/app/colors.js":
      /*!****************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/common/src/theme/app/colors.js ***!
  \****************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        const colors = {
          transparent: "transparent",
          labelColor: "#778CA3",
          inactiveField: "#f2f2f2",
          inactiveButton: "#b7dbdd",
          inactiveIcon: "#D1D8E0",
          primaryHover: "#F2B306",
          secondary: "#2B2B2B",
          secondaryHover: "#2B2B2B",
          yellow: "#F2B306",
          yellowHover: "#F2B306",
          borderColor: "#dadada",
          black: "#2B2B2B",
          white: "#ffffff",
          primary: "#F2B306",
          headingColor: "#0f2137",
          quoteText: "#343d48",
          textColor: "#2B2B2B",
          textPlaceholder: "#D1D8E0",
          linkColor: "#2b9eff"
        };
        /* harmony default export */ __webpack_exports__["default"] = colors;

        /***/
      },

    /***/ "../../node_modules/common/src/theme/app/index.js":
      /*!***************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/common/src/theme/app/index.js ***!
  \***************************************************************************************************/
      /*! exports provided: appTheme */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "appTheme",
          function() {
            return appTheme;
          }
        );
        /* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./colors */ "../../node_modules/common/src/theme/app/colors.js"
        );

        const appTheme = {
          breakpoints: [480, 768, 990, 1440],
          space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
          fontSizes: [12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
          fontWeights: [300, 400, 500, 600, 700, 800, 900],
          height: [12, 24, 36, 48],
          width: [12, 24, 36, 48],
          lineHeights: {
            solid: 1,
            title: 1.25,
            copy: 1.5
          },
          letterSpacings: {
            normal: "normal",
            tracked: "0.1em",
            tight: "-0.05em",
            mega: "0.25em"
          },
          fonts: {
            muli: '"Muli", sans-serif'
          },
          borders: [0, "1px solid", "2px solid", "4px solid"],
          radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, "50%"],
          colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"],
          colorStyles: {
            primary: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
              "&:hover": {
                color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover
              }
            },
            secondary: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
              "&:hover": {
                color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
              }
            },
            whiteWithBg: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
              "&:hover": {
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white
              }
            },
            warning: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
              "&:hover": {
                color:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
              }
            },
            error: {
              color:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
              "&:hover": {
                color:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
              }
            },
            primaryWithBg: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
              "&:hover": {
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary
              }
            },
            secondaryWithBg: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
              "&:hover": {
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
              }
            },
            warningWithBg: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
              "&:hover": {
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
              }
            },
            errorWithBg: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
              "&:hover": {
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
              }
            }
          },
          buttonStyles: {
            textButton: {
              border: 0,
              color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
              padding: 0,
              height: "auto",
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
            },
            outlined: {
              borderWidth: "1px",
              borderStyle: "solid",
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
            },
            fab: {
              border: "0",
              width: "40px",
              height: "40px",
              padding: 0,
              borderRadius: "50%",
              justifyContent: "center",
              "span.btn-icon": {
                paddingLeft: 0
              }
            },
            extendedFab: {
              border: "0",
              minWidth: "50px",
              height: "40px",
              borderRadius: "50px",
              justifyContent: "center"
            }
          }
        };

        /***/
      },

    /***/ "../reusecore/src/constants/routes.js":
      /*!********************************************!*\
  !*** ../reusecore/src/constants/routes.js ***!
  \********************************************/
      /*! exports provided: LANDING, SIGN_UP, SIGN_IN, HOME, FORM */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LANDING",
          function() {
            return LANDING;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SIGN_UP",
          function() {
            return SIGN_UP;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SIGN_IN",
          function() {
            return SIGN_IN;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HOME",
          function() {
            return HOME;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FORM",
          function() {
            return FORM;
          }
        );
        const LANDING = "/";
        const SIGN_UP = "/signup";
        const SIGN_IN = "/signin";
        const HOME = "/home";
        const FORM = "/form";

        /***/
      },

    /***/ "./containers/App/app.style.js":
      /*!*************************************!*\
  !*** ./containers/App/app.style.js ***!
  \*************************************/
      /*! exports provided: GlobalStyle, AppWrapper, BannerSquareShape, BannerCircleShape, PaymentCircleShape, ConditionWrapper */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GlobalStyle",
          function() {
            return GlobalStyle;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppWrapper",
          function() {
            return AppWrapper;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "BannerSquareShape",
          function() {
            return BannerSquareShape;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "BannerCircleShape",
          function() {
            return BannerCircleShape;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaymentCircleShape",
          function() {
            return PaymentCircleShape;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ConditionWrapper",
          function() {
            return ConditionWrapper;
          }
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! styled-system */ "styled-system"
        );
        /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          styled_system__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var common_src_assets_image_app_substract_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! common/src/assets/image/app/substract.png */ "../../node_modules/common/src/assets/image/app/substract.png"
        );
        /* harmony import */ var common_src_assets_image_app_substract_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          common_src_assets_image_app_substract_png__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var common_src_assets_image_app_substract_hover_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! common/src/assets/image/app/substract-hover.png */ "../../node_modules/common/src/assets/image/app/substract-hover.png"
        );
        /* harmony import */ var common_src_assets_image_app_substract_hover_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          common_src_assets_image_app_substract_hover_png__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var common_src_assets_image_app_pattern_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! common/src/assets/image/app/pattern.png */ "../../node_modules/common/src/assets/image/app/pattern.png"
        );
        /* harmony import */ var common_src_assets_image_app_pattern_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          common_src_assets_image_app_pattern_png__WEBPACK_IMPORTED_MODULE_4__
        );

        const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[
          "createGlobalStyle"
        ]`
  body {
    font-family: 'Muli', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Muli', sans-serif;
  }

  section{
    position: relative;
  }

    .drawer {
      .drawer-content-wrapper {
        @media only screen and (max-width: 480px) {
          width: 320px !important;
        }
        .reusecore-drawer__close {
          position: absolute;
          top: 20px;
          right: 30px;
          > button {
            box-shadow: 0px 8px 38px 0px rgba(16, 172, 132, 0.5);
            transition: all 0.3s ease;
            svg {
              width: 22px;
              height: 22px;
            }
            &:hover {
              opacity: 0.9;
            }
          }
        }
        .scrollspy__menu {
          padding: 60px 71px;

          li {
            margin: 35px 0;
            a {
              display: block;
              color: #20201d;
              font-size: 24px;
              font-weight: 400;
              transition: all 0.3s ease;
              @media only screen and (max-width: 480px) {
                font-size: 21px;
              }
              &:hover {
                color: #1a73e8;
              }
            }
            &.is-current {
              a {
                color: #1a73e8;
                position: relative;
                &:before {
                  content: '';
                  display: block;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background-color: #1a73e8;
                  position: absolute;
                  top: calc(50% - 8px / 2);
                  left: -20px;
                }
              }
            }
          }
        }
      }
    }

    /* Modal default style */

    button.modalCloseBtn {
      position: fixed !important;
      z-index: 999991 !important;
      background-color: transparent !important;
      color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
        "colors.white",
        "#ffffff"
      )} !important;
      top: 10px !important;
      right: 10px !important;

      @media(max-width: 460px){
        top: 0 !important;
        right: 0 !important;
      }

      span.btn-icon {
        font-size: 24px !important;
        transform: rotate(45deg) !important;
      }

      &.alt {
        background-color: ${Object(
          styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"]
        )("colors.primary", "#1a73e8")} !important;
        border-radius: 50% !important;
        z-index: 999999 !important;
        padding: 0 !important;
        box-shadow: 0 8px 38px rgba(26, 115, 232, 0.5) !important;
        transition: all 0.3s ease !important;
        top: 25px !important;
        right: 30px !important;
        span.btn-icon {
          font-size: 20px !important;
        }
        &:hover {
          opacity: 0.88 !important;
        }
      }
    }

    .reuseModalHolder {
      border: 0 !important;
      background-color: transparent !important;

      &.search-modal,
      &.video-modal {
        background-color: rgba(255, 255, 255, 0.96) !important;
        overflow-y: auto !important;

        .innerRndComponent {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;

          iframe {
            max-width: 700px !important;
            max-height: 380px !important;
            width: 100% !important;
            height: 100% !important;
            border-radius: 5px !important;
          }
        }
      }

      &.demo_switcher_modal {
        border: 0 !important;
        background-color: rgba(16, 30, 77, 0.8) !important;
        .innerRndComponent {
          border-radius: 8px !important;
        }
      }

      &.video-modal {
        background-color: transparent !important;
      }

      .innerRndComponent {
        padding-right: 0 !important;
      }
    }

    .reuseModalCloseBtn {
      cursor: pointer !important;
    }

    .reuseModalOverlay,
    .reuseModalParentWrapper{
      z-index: 99999!important;
    }

    .reuseModalHolder.login-modal{
      @media (min-width: 768px) {
        top: 0!important;
        left: 0!important;
        max-width: 100%!important;
        max-height: 100%!important;
      }
    }

    .reuseModalHolder.search-modal{
      top: 0!important;
      left: 0!important;
      max-width: 100%!important;
      max-height: 100%!important;
      width: 100%;
      height: 100%;
    }

    .reuseModalHolder.login-modal .innerRndComponent{
      overflow-y: auto;
    }
`;
        const AppWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
          {
            displayName: "appstyle__AppWrapper",
            componentId: "j3bbzk-0"
          }
        )(
          [
            "position:relative;background-color:",
            ";height:100vh;@media (max-width:1099px){overflow:hidden;}.button__wrapper{@media only screen and (max-width:480px){text-align:center;}}.reusecore__navbar{width:100%;left:0;top:0;transition:all 0.3s ease;.reusecore__button{.btn-icon{color:",
            ";font-size:18px;@media only screen and (max-width:1100px){color:",
            ";}@media only screen and (max-width:420px){font-size:14px;}}&:hover{background:transparent;box-shadow:none;}}.button__wrapper{@media only screen and (max-width:480px){text-align:center;}}.hamburgMenu__bar{margin-left:8px;@media only screen and (max-width:420px){width:40px;}> span{background-color:",
            ";@media only screen and (max-width:990px){background-color:",
            ";}}}}.sticky-nav-active{.reusecore__navbar{background-color:",
            ";box-shadow:0 0 20px rgba(0,0,0,0.1);padding:5px 15px;transition:all 0.2s ease;@media (max-width:1100px){padding:10px 15px 10px;}@media (max-width:991px){padding:10px 15px 10px;}@media (max-width:767px){padding:20px 15px 10px;}@media (max-width:480px){padding:5px 15px;}.reusecore__button{.btn-icon{color:",
            ";}}.hamburgMenu__bar > span{background-color:",
            ";}}}.particle{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;@media (max-width:990px){display:none;}}.reusecore__button{transition:all 0.3s ease;cursor:pointer;.btn-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(26,115,232);width:35px;}&:hover{box-shadow:0px 9px 20px -5px rgba(43,43,43,0.57);background-color:#2B2B2B;cursor:pointer;}&.btn-secondary{@media (max-width:460px){margin-top:10px;margin-left:0;border:1px solid #ffffff;min-width:auto;}&:hover{opacity:0.85;background-color:rgb(255,255,255) !important;cursor:pointer;box-shadow:0px 9px 20px -5px rgba(255,255,255,0.57);}}}.control-sec-container{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;@media (max-width:767px){position:relative;top:0%;left:0%;transform:none;display:none;}.particle{position:absolute;width:50%;height:100%;top:0;left:0;overflow:hidden;}&.payment{.particle{z-index:-1;}}}.testimonialSlider{.image-gallery-content{display:flex;flex-wrap:wrap;align-items:center;@media (max-width:767px){flex-direction:column;}.image-gallery-slide-wrapper{max-width:60%;width:60%;display:flex;flex-wrap:wrap;flex-direction:column-reverse;@media screen and (max-width:1100px) and (min-width:992px){max-width:56%;width:56%;}@media (max-width:991px){max-width:50%;width:50%;}@media (max-width:767px){max-width:100%;width:100%;}> span{display:flex;@media (max-width:480px){justify-content:center;}.image-gallery-left-nav,.image-gallery-right-nav{position:relative;top:0;transform:none;margin-top:0;}.image-gallery-left-nav{}.image-gallery-right-nav{margin-left:10px;}}.image-gallery-swipe{.image-gallery-slide{.image-gallery-description{background:transparent;bottom:0px;color:#000;position:relative;.testimonialDes{box-sizing:border-box;margin-top:-10px;max-width:550px;font-size:36px;line-height:50px;color:#0f2137;font-weight:300;-webkit-letter-spacing:-0.01em;-moz-letter-spacing:-0.01em;-ms-letter-spacing:-0.01em;letter-spacing:-0.01em;@media (max-width:991px){font-size:30px;line-height:40px;max-width:100%;}@media (max-width:768px){font-size:24px;line-height:36px;}@media (max-width:480px){font-size:20px;text-align:center;}&::before{content:'CUSTOMER OPINIONS';box-sizing:border-box;margin-bottom:10px;margin-top:0px;font-size:14px;color:#1a73e8;display:block;font-weight:700;text-align:left;-webkit-letter-spacing:0.11em;-moz-letter-spacing:0.11em;-ms-letter-spacing:0.11em;letter-spacing:0.11em;@media (max-width:480px){text-align:center;}}}.testimonialDetails{@media (max-width:480px){text-align:center;}.testimonialName{font-size:18px;line-height:33px;color:#343d48;font-weight:700;margin-bottom:-3px;}.testimonialDesignation{font-size:16px;line-height:33px;color:#343d48;font-weight:400;opacity:0.8;}}}}}.image-gallery-left-nav{padding:0;font-size:0;margin-top:-15px;width:15px;height:2px;transition:width 0.25s ease-in-out;background-image:url(",
            ");width:20px;height:30px;background-repeat-x:repeat;background-position:center;background-size:contain;&:hover{width:35px;background-image:url(",
            ");&::before{background-color:#1a73e8;}&::after{background-color:#1a73e8;}}&::before{top:11px;content:'';width:10px;height:2px;background-color:#343d48;display:block;position:absolute;transform:rotate(-36deg);transition:inherit;left:0;}&::after{content:'';width:10px;height:2px;background-color:#343d48;display:block;position:absolute;bottom:11px;transform:rotate(36deg);transition:inherit;left:0;}}.image-gallery-right-nav{padding:0;font-size:0;margin-top:-15px;width:15px;height:2px;transition:all 0.25s ease-in-out;background-image:url(",
            ");width:30px;height:30px;background-repeat-x:repeat;background-position:center;background-size:contain;&:hover{&::before{background-color:#1a73e8;}&::after{background-color:#1a73e8;}}&::before{top:11px;content:'';width:10px;height:2px;background-color:#1a73e8;display:block;position:absolute;transform:rotate(36deg);transition:inherit;left:20px;}&::after{content:'';width:10px;height:2px;background-color:#1a73e8;display:block;position:absolute;bottom:11px;transform:rotate(-36deg);transition:inherit;left:20px;}}}.image-gallery-thumbnails-wrapper{max-width:40%;height:520px;width:40%;@media screen and (max-width:1100px) and (min-width:992px){padding-left:25px;overflow:hidden;}@media (max-width:991px){padding-left:0px;overflow:hidden;max-width:50%;width:50%;}@media (max-width:767px){max-width:100%;width:100%;height:auto;margin-top:50px;overflow:hidden;}.image-gallery-thumbnails{overflow:initial;padding-left:30px;@media (max-width:991px){padding-left:0px;}@media (max-width:767px){overflow:hidden;}}.image-gallery-thumbnails-container{position:relative;height:520px;@media screen and (max-width:1100px) and (min-width:992px){margin-left:-20px;margin-top:15px;}@media (max-width:991px){margin-left:-25px;}@media (max-width:767px){height:auto;margin-left:0px;}img{border-radius:50%;height:100%;width:100%;@media (max-width:768px){box-shadow:none;}@media (max-width:991px){width:70px;height:70px;}@media (max-width:480px){width:70px;height:70px;}}.image-gallery-thumbnail:nth-child(1){position:absolute;top:150px;left:0;width:120px;height:120px;@media (max-width:991px){position:absolute;top:220px;left:80px;width:120px;height:120px;img{width:80px;height:80px;}}@media (max-width:767px){position:relative;top:0;left:0;width:calc(33.33% - 30px);height:auto;margin-right:30px;margin-left:10px;}img{}}.image-gallery-thumbnail:nth-child(2){position:absolute;top:0;left:180px;width:100px;height:100px;@media (max-width:991px){position:absolute;top:110px;left:160px;width:100px;height:100px;}@media (max-width:767px){position:relative;top:0;width:calc(33.33% - 30px);height:auto;margin-right:30px;left:0;}}.image-gallery-thumbnail:nth-child(3){position:absolute;top:160px;left:250px;width:70px;height:70px;@media screen and (max-width:1100px) and (min-width:992px){position:absolute;top:180px;left:220px;width:70px;height:70px;}@media (max-width:991px){position:absolute;top:200px;left:272px;width:70px;height:70px;}@media (max-width:767px){position:relative;top:0;width:calc(33.33% - 30px);height:auto;margin-right:30px;left:0;}}.image-gallery-thumbnail:nth-child(4){position:absolute;bottom:100px;left:200px;width:90px;height:90px;@media (max-width:991px){position:absolute;bottom:100px;left:240px;width:90px;height:90px;}@media (max-width:767px){position:relative;top:0;width:calc(33.33% - 30px);height:auto;margin-right:30px;left:0;}}.image-gallery-thumbnail:nth-child(5){position:absolute;bottom:20px;left:20px;width:105px;height:105px;@media screen and (max-width:1100px) and (min-width:992px){position:absolute;bottom:50px;left:20px;width:105px;height:105px;}@media (max-width:991px){position:absolute;bottom:40px;left:115px;width:105px;height:105px;}@media (max-width:767px){position:relative;top:0;width:calc(33.33% - 30px);height:auto;margin-right:30px;left:0;}}.image-gallery-thumbnail{transition:all 0.35s ease;border:0;border-radius:50%;.image-gallery-thumbnail-inner{width:100%;height:100%;}&.active{border:0;transform:scale(1.3);box-shadow:0px 18px 68px 0px rgba(22,30,54,0.25);@media (max-width:1100px){box-shadow:none;}.image-gallery-thumbnail-inner{@keyframes pulse{0%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);opacity:1;}100%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);opacity:0;}}@media (max-width:991px){@keyframes pulse{0%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);opacity:0;}100%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.2);opacity:0;}}}&::before{content:'';position:absolute;display:block;width:100%;height:100%;box-shadow:0 0 0 0.8px rgba(0,0,0,0.1);border-radius:50%;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);animation:pulse 2.2s ease-out infinite;backface-visibility:hidden;pointer-events:none;}&::after{content:'';position:absolute;display:block;width:100%;height:100%;box-shadow:0 0 0 0.8px rgba(0,0,0,0.1);border-radius:50%;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);animation:pulse 2.2s ease-out infinite;backface-visibility:hidden;pointer-events:none;animation-delay:1s;}}img{position:relative;@media (max-width:768px){margin:10px 0;}}}}}}}}.cardExtraImage{@media screen and (max-width:1440px) and (min-width:1100px){margin-left:-270px;margin-top:50px;}}"
          ],
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.primary",
            "#F2B306"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.white",
            "#ffffff"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.primary",
            "#F2B306"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.white",
            "#ffffff"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.primary",
            "#F2B306"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.white",
            "#ffffff"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.primary",
            "#F2B306"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.primary",
            "#F2B306"
          ),
          common_src_assets_image_app_substract_png__WEBPACK_IMPORTED_MODULE_2___default.a,
          common_src_assets_image_app_substract_hover_png__WEBPACK_IMPORTED_MODULE_3___default.a,
          common_src_assets_image_app_substract_hover_png__WEBPACK_IMPORTED_MODULE_3___default.a
        );
        const BannerSquareShape = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
          {
            displayName: "appstyle__BannerSquareShape",
            componentId: "j3bbzk-1"
          }
        )(
          [
            "width:980px;height:1110px;background:#1a73e8;border-radius:50px;-webkit-transform:rotate(105deg);-ms-transform:rotate(105deg);transform:rotate(107deg);position:absolute;left:58%;top:-28%;z-index:-1;pointer-events:none;background-image:url(",
            ");@media (max-width:1300px){width:870px;height:1000px;transform:rotate(103deg);position:absolute;left:64%;}@media (max-width:1100px){display:none;}"
          ],
          common_src_assets_image_app_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a
        );
        const BannerCircleShape = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
          {
            displayName: "appstyle__BannerCircleShape",
            componentId: "j3bbzk-2"
          }
        )([
          "width:500px;height:500px;background:#ffc845;border-radius:50%;position:absolute;left:55%;top:47%;z-index:-1;transform:translateY(-50%);pointer-events:none;@media (max-width:1300px){width:400px;height:400px;left:63%;}@media (max-width:1100px){width:400px;height:400px;left:60%;}@media (max-width:991px){width:345px;height:345px;left:54%;}@media (max-width:767px){display:none;}"
        ]);
        const PaymentCircleShape = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
          {
            displayName: "appstyle__PaymentCircleShape",
            componentId: "j3bbzk-3"
          }
        )([
          "width:700px;height:700px;background:#ffc845;border-radius:50%;position:absolute;left:5%;top:47%;z-index:-1;transform:translateY(-50%);pointer-events:none;@media (max-width:1440px){width:550px;height:550px;}@media (max-width:1100px){width:450px;height:450px;}@media (max-width:991px){width:350px;height:350px;}@media (max-width:767px){display:none;}"
        ]);
        const ConditionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
          {
            displayName: "appstyle__ConditionWrapper",
            componentId: "j3bbzk-4"
          }
        )(["position:relative;"]);

        /***/
      },

    /***/ "./containers/App/index.js":
      /*!*********************************!*\
  !*** ./containers/App/index.js ***!
  \*********************************/
      /*! exports provided: AppWithAuthentication, AppWithAuthorization */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppWithAuthentication",
          function() {
            return AppWithAuthentication;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppWithAuthorization",
          function() {
            return AppWithAuthorization;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/head */ "next/head"
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! recompose */ "recompose"
        );
        /* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          recompose__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var common_src_theme_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! common/src/theme/app */ "../../node_modules/common/src/theme/app/index.js"
        );
        /* harmony import */ var _App_app_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../App/app.style */ "./containers/App/app.style.js"
        );
        /* harmony import */ var common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! common/src/assets/css/style */ "../../node_modules/common/src/assets/css/style.js"
        );
        /* harmony import */ var _Session_withAuthentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./../Session/withAuthentication */ "./containers/Session/withAuthentication.js"
        );
        /* harmony import */ var _Session_withAuthorization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./../Session/withAuthorization */ "./containers/Session/withAuthorization.js"
        );
        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/packages/landing/containers/App/index.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const App = ({ children }) =>
          __jsx(
            styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"],
            {
              theme:
                common_src_theme_app__WEBPACK_IMPORTED_MODULE_4__["appTheme"],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: undefined
            },
            __jsx(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              __jsx(
                next_head__WEBPACK_IMPORTED_MODULE_1___default.a,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: undefined
                },
                __jsx(
                  "title",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: undefined
                  },
                  "Dhakon | Mudahkan urusan lahan anda"
                ),
                __jsx("meta", {
                  name: "Description",
                  content: "Dhakon",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  },
                  __self: undefined
                }),
                __jsx("meta", {
                  name: "theme-color",
                  content: "#F2B306",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  },
                  __self: undefined
                }),
                __jsx("link", {
                  href:
                    "https://fonts.googleapis.com/css?family=Muli&display=swap",
                  rel: "stylesheet",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                  },
                  __self: undefined
                })
              ),
              __jsx(
                common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_6__[
                  "ResetCSS"
                ],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: undefined
                }
              ),
              __jsx(
                _App_app_style__WEBPACK_IMPORTED_MODULE_5__["GlobalStyle"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: undefined
                }
              ),
              children
            )
          );

        const AppWithAuthentication = Object(
          recompose__WEBPACK_IMPORTED_MODULE_2__["compose"]
        )(
          _Session_withAuthentication__WEBPACK_IMPORTED_MODULE_7__["default"],
          Object(
            _Session_withAuthorization__WEBPACK_IMPORTED_MODULE_8__["default"]
          )(false)
        )(App);
        const AppWithAuthorization = Object(
          recompose__WEBPACK_IMPORTED_MODULE_2__["compose"]
        )(
          _Session_withAuthentication__WEBPACK_IMPORTED_MODULE_7__["default"],
          Object(
            _Session_withAuthorization__WEBPACK_IMPORTED_MODULE_8__["default"]
          )(true)
        )(App);

        /***/
      },

    /***/ "./containers/Session/withAuthentication.js":
      /*!**************************************************!*\
  !*** ./containers/Session/withAuthentication.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-redux */ "react-redux"
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react_redux__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./../firebase */ "./containers/firebase/index.js"
        );

        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/packages/landing/containers/Session/withAuthentication.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

        const withAuthentication = Component => {
          class WithAuthentication extends react__WEBPACK_IMPORTED_MODULE_1___default
            .a.Component {
            componentDidMount() {
              const { onSetAuthUser } = this.props;
              _firebase__WEBPACK_IMPORTED_MODULE_3__[
                "firebase"
              ].auth.onAuthStateChanged(authUser => {
                authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
              });
            }

            render() {
              return __jsx(
                Component,
                Object(
                  _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                    "default"
                  ]
                )({}, this.props, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  },
                  __self: this
                })
              );
            }
          }

          const mapDispatchToProps = dispatch => ({
            onSetAuthUser: authUser =>
              dispatch({
                type: "AUTH_USER_SET",
                authUser
              })
          });

          return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(
            null,
            mapDispatchToProps
          )(WithAuthentication);
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = withAuthentication;

        /***/
      },

    /***/ "./containers/Session/withAuthorization.js":
      /*!*************************************************!*\
  !*** ./containers/Session/withAuthorization.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/router */ "next/router"
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./../firebase */ "./containers/firebase/index.js"
        );
        /* harmony import */ var _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./../../../reusecore/src/constants/routes */ "../reusecore/src/constants/routes.js"
        );

        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/packages/landing/containers/Session/withAuthorization.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

        const withAuthorization = needsAuthorization => Component => {
          class WithAuthorization extends react__WEBPACK_IMPORTED_MODULE_1___default
            .a.Component {
            componentDidMount() {
              _firebase__WEBPACK_IMPORTED_MODULE_3__[
                "firebase"
              ].auth.onAuthStateChanged(authUser => {
                if (!authUser && needsAuthorization) {
                  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(
                    _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_4__[
                      "SIGN_IN"
                    ]
                  );
                }
              });
            }

            render() {
              return __jsx(
                Component,
                Object(
                  _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                    "default"
                  ]
                )({}, this.props, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  },
                  __self: this
                })
              );
            }
          }

          return WithAuthorization;
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = withAuthorization;

        /***/
      },

    /***/ "./containers/firebase/auth.js":
      /*!*************************************!*\
  !*** ./containers/firebase/auth.js ***!
  \*************************************/
      /*! exports provided: doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignOut, doPasswordReset, doPasswordUpdate */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "doCreateUserWithEmailAndPassword",
          function() {
            return doCreateUserWithEmailAndPassword;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "doSignInWithEmailAndPassword",
          function() {
            return doSignInWithEmailAndPassword;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "doSignOut",
          function() {
            return doSignOut;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "doPasswordReset",
          function() {
            return doPasswordReset;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "doPasswordUpdate",
          function() {
            return doPasswordUpdate;
          }
        );
        /* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./firebase */ "./containers/firebase/firebase.js"
        );
        // Sign Up

        const doCreateUserWithEmailAndPassword = (email, password) =>
          _firebase__WEBPACK_IMPORTED_MODULE_0__[
            "auth"
          ].createUserWithEmailAndPassword(email, password); // Sign In

        const doSignInWithEmailAndPassword = (email, password) =>
          _firebase__WEBPACK_IMPORTED_MODULE_0__[
            "auth"
          ].signInWithEmailAndPassword(email, password); // Sign out

        const doSignOut = () =>
          _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signOut(); // Password Reset

        const doPasswordReset = email =>
          _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].sendPasswordResetEmail(
            email
          ); // Password Change

        const doPasswordUpdate = password =>
          _firebase__WEBPACK_IMPORTED_MODULE_0__[
            "auth"
          ].currentUser.updatePassword(password);

        /***/
      },

    /***/ "./containers/firebase/db.js":
      /*!***********************************!*\
  !*** ./containers/firebase/db.js ***!
  \***********************************/
      /*! exports provided: doCreateUser, onceGetUsers */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "doCreateUser",
          function() {
            return doCreateUser;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "onceGetUsers",
          function() {
            return onceGetUsers;
          }
        );
        /* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./firebase */ "./containers/firebase/firebase.js"
        );
        // User API

        const doCreateUser = (id, username, email) =>
          _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref(`users/${id}`).set({
            username,
            email
          });
        const onceGetUsers = () =>
          _firebase__WEBPACK_IMPORTED_MODULE_0__["db"]
            .ref("users")
            .once("value"); // Other db APIs ...

        /***/
      },

    /***/ "./containers/firebase/firebase.js":
      /*!*****************************************!*\
  !*** ./containers/firebase/firebase.js ***!
  \*****************************************/
      /*! exports provided: db, auth */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "db",
          function() {
            return db;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "auth",
          function() {
            return auth;
          }
        );
        /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! firebase/app */ "firebase/app"
        );
        /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          firebase_app__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! firebase/auth */ "firebase/auth"
        );
        /* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          firebase_auth__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! firebase/database */ "firebase/database"
        );
        /* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          firebase_database__WEBPACK_IMPORTED_MODULE_2__
        );

        const prodConfig = {
          apiKey: "AIzaSyA44AWXUBUySKdSFnLfUGbkEyScSwGqU90",
          authDomain: "dhakon-app-6f0db.firebaseapp.com",
          databaseURL: "https://dhakon-app-6f0db.firebaseio.com",
          projectId: "dhakon-app-6f0db",
          storageBucket: "dhakon-app-6f0db.appspot.com",
          messagingSenderId: 604799294040
        };
        const devConfig = {
          apiKey: "AIzaSyA44AWXUBUySKdSFnLfUGbkEyScSwGqU90",
          authDomain: "dhakon-app-6f0db.firebaseapp.com",
          databaseURL: "https://dhakon-app-6f0db.firebaseio.com",
          projectId: "dhakon-app-6f0db",
          storageBucket: "dhakon-app-6f0db.appspot.com",
          messagingSenderId: 604799294040
        };
        const config = false ? undefined : devConfig;

        if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
          firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(
            config
          );
        }

        const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database();
        const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();

        /***/
      },

    /***/ "./containers/firebase/index.js":
      /*!**************************************!*\
  !*** ./containers/firebase/index.js ***!
  \**************************************/
      /*! exports provided: auth, db, firebase */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./auth */ "./containers/firebase/auth.js"
        );
        /* harmony reexport (module object) */ __webpack_require__.d(
          __webpack_exports__,
          "auth",
          function() {
            return _auth__WEBPACK_IMPORTED_MODULE_0__;
          }
        );
        /* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./db */ "./containers/firebase/db.js"
        );
        /* harmony reexport (module object) */ __webpack_require__.d(
          __webpack_exports__,
          "db",
          function() {
            return _db__WEBPACK_IMPORTED_MODULE_1__;
          }
        );
        /* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./firebase */ "./containers/firebase/firebase.js"
        );
        /* harmony reexport (module object) */ __webpack_require__.d(
          __webpack_exports__,
          "firebase",
          function() {
            return _firebase__WEBPACK_IMPORTED_MODULE_2__;
          }
        );

        /***/
      },

    /***/ "./pages/form/index.js":
      /*!*****************************!*\
  !*** ./pages/form/index.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-redux */ "react-redux"
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react_redux__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! next/router */ "next/router"
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./../../../reusecore/src/constants/routes */ "../reusecore/src/constants/routes.js"
        );
        /* harmony import */ var _containers_App_app_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../containers/App/app.style */ "./containers/App/app.style.js"
        );
        /* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./../../containers/App */ "./containers/App/index.js"
        );
        /* harmony import */ var _typeform_embed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @typeform/embed */ "@typeform/embed"
        );
        /* harmony import */ var _typeform_embed__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _typeform_embed__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! axios */ "axios"
        );
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          axios__WEBPACK_IMPORTED_MODULE_8__
        );

        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/packages/landing/pages/form/index.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

        // const form_id = 'A7bW0z';
        // const token = 'DLrXyVaPwwS7VhFoL84VwKvcqc5rP8x9fEARcVJRt5Sg';

        class Form extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
          constructor(...args) {
            super(...args);

            Object(
              _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(this, "handleSubmit", () => {
              next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(
                _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_4__[
                  "LANDING"
                ]
              );
            });
          }

          componentDidMount() {
            _typeform_embed__WEBPACK_IMPORTED_MODULE_7__["makeWidget"](
              embedElement,
              "https://dhakon.typeform.com/to/A7bW0z",
              {
                hideHeaders: true,
                hideFooter: true,
                opacity: 75,
                onSubmit: function() {
                  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(
                    _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_4__[
                      "LANDING"
                    ]
                  );
                  axios__WEBPACK_IMPORTED_MODULE_8___default.a
                    .get(`/forms/A7bW0z/responses`, {
                      headers: {
                        Authorization: `Bearer DLrXyVaPwwS7VhFoL84VwKvcqc5rP8x9fEARcVJRt5Sg`
                      }
                    })
                    .then(function(response) {
                      // handle success
                      const res = response.data.items[0];
                      const name = res.answers[0].text;
                      const phone = res.answers[1].phone_number;
                      const type_work = res.answers[2].choice.label;
                      const number_workers = res.answers[3].number;
                      const duration = res.answers[4].choice.label;
                      const address = res.answers[5].text;
                      axios__WEBPACK_IMPORTED_MODULE_8___default.a
                        .post("/message", {
                          body: `Assalamu'alaikum Bapak/Ibu ${name}. \n Anda baru saja mencari buruh untuk ${type_work} sebanyak ${number_workers} orang dengan durasi ${duration} disawah ${address}. \n Sabar ya... setelah ini Anda akan dihubungi tim Dhakon.`,
                          to: phone,
                          from: "+17609933055"
                        })
                        .then(function(response) {
                          // console.log('response success', response);
                        })
                        .catch(function(error) {
                          // console.log('response error', error);
                        });
                    })
                    .catch(function(error) {
                      // handle error
                      console.log("response error : ", error);
                    });
                }
              }
            );
          }

          render() {
            return __jsx(
              _containers_App__WEBPACK_IMPORTED_MODULE_6__[
                "AppWithAuthentication"
              ],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                },
                __self: this
              },
              __jsx(
                _containers_App_app_style__WEBPACK_IMPORTED_MODULE_5__[
                  "AppWrapper"
                ],
                {
                  id: "embedElement",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  },
                  __self: this
                }
              )
            );
          }
        }

        const mapStateToProps = state => ({
          authUser: state.sessionState.authUser
        });

        /* harmony default export */ __webpack_exports__["default"] = Object(
          react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"]
        )(mapStateToProps)(Form);

        /***/
      },

    /***/ 5:
      /*!***********************************!*\
  !*** multi ./pages/form/index.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/msnajib/Documents/najib/Dhakon/dhakon-app/packages/landing/pages/form/index.js */ "./pages/form/index.js"
        );

        /***/
      },

    /***/ "@typeform/embed":
      /*!**********************************!*\
  !*** external "@typeform/embed" ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("@typeform/embed");

        /***/
      },

    /***/ axios:
      /*!************************!*\
  !*** external "axios" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("axios");

        /***/
      },

    /***/ "core-js/library/fn/object/assign":
      /*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/assign");

        /***/
      },

    /***/ "core-js/library/fn/object/define-property":
      /*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/define-property");

        /***/
      },

    /***/ "firebase/app":
      /*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("firebase/app");

        /***/
      },

    /***/ "firebase/auth":
      /*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("firebase/auth");

        /***/
      },

    /***/ "firebase/database":
      /*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("firebase/database");

        /***/
      },

    /***/ "next/head":
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/head");

        /***/
      },

    /***/ "next/router":
      /*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/router");

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react");

        /***/
      },

    /***/ "react-redux":
      /*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-redux");

        /***/
      },

    /***/ recompose:
      /*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("recompose");

        /***/
      },

    /***/ "styled-components":
      /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("styled-components");

        /***/
      },

    /***/ "styled-system":
      /*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("styled-system");

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=form.js.map
