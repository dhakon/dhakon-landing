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
    /***/ "../../node_modules/@babel/runtime-corejs2/core-js/map.js":
      /*!***********************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/map */ "core-js/library/fn/map"
        );

        /***/
      },

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

    /***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
      /*!******************************************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \******************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor"
        );

        /***/
      },

    /***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
      /*!***************************************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \***************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols"
        );

        /***/
      },

    /***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
      /*!*******************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys"
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

    /***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
      /*!************************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _objectSpread;
          }
        );
        /* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js"
        );
        /* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js"
        );
        /* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js"
        );
        /* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js"
        );

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(
              source
            );

            if (
              typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a ===
              "function"
            ) {
              ownKeys = ownKeys.concat(
                _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(
                  source
                ).filter(function(sym) {
                  return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(
                    source,
                    sym
                  ).enumerable;
                })
              );
            }

            ownKeys.forEach(function(key) {
              Object(
                _defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"]
              )(target, key, source[key]);
            });
          }

          return target;
        }

        /***/
      },

    /***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
      /*!***********************************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \***********************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _objectWithoutProperties;
          }
        );
        /* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js"
        );
        /* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js"
        );

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = Object(
            _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ]
          )(source, excluded);
          var key, i;

          if (
            _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a
          ) {
            var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(
              source
            );

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
              target[key] = source[key];
            }
          }

          return target;
        }

        /***/
      },

    /***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
      /*!****************************************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \****************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _objectWithoutPropertiesLoose;
          }
        );
        /* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js"
        );
        /* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__
        );

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};

          var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(
            source
          );

          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }

        /***/
      },

    /***/ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js":
      /*!***************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _Object$assign = __webpack_require__(
          /*! ../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"
        );

        function _extends() {
          module.exports = _extends =
            _Object$assign ||
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

        module.exports = _extends;

        /***/
      },

    /***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
      /*!*****************************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*****************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              };
        }

        module.exports = _interopRequireDefault;

        /***/
      },

    /***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
      /*!******************************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \******************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _Object$getOwnPropertyDescriptor = __webpack_require__(
          /*! ../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js"
        );

        var _Object$defineProperty = __webpack_require__(
          /*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"
        );

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};

            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc =
                    _Object$defineProperty && _Object$getOwnPropertyDescriptor
                      ? _Object$getOwnPropertyDescriptor(obj, key)
                      : {};

                  if (desc.get || desc.set) {
                    _Object$defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
            }

            newObj["default"] = obj;
            return newObj;
          }
        }

        module.exports = _interopRequireWildcard;

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

    /***/ "../../node_modules/common/src/assets/image/app/farmer.svg":
      /*!************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/common/src/assets/image/app/farmer.svg ***!
  \************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          "/_next/static/images/farmer-c5f641520a990ceb529a4020e391a610.svg";

        /***/
      },

    /***/ "../../node_modules/common/src/assets/image/app/logo2.png":
      /*!***********************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/common/src/assets/image/app/logo2.png ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          "/_next/static/images/logo2-273ea2fb87e1a7db2321a0125b2aab16.png";

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

    /***/ "../../node_modules/next/dist/client/link.js":
      /*!**********************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/next/dist/client/link.js ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireWildcard = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js"
        );

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"
        );

        exports.__esModule = true;
        exports.default = void 0;

        var _map = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/core-js/map */ "../../node_modules/@babel/runtime-corejs2/core-js/map.js"
          )
        );

        var _url = __webpack_require__(/*! url */ "url");

        var _react = _interopRequireWildcard(
          __webpack_require__(/*! react */ "react")
        );

        var _propTypes = _interopRequireDefault(
          __webpack_require__(/*! prop-types */ "prop-types")
        );

        var _router = _interopRequireDefault(
          __webpack_require__(
            /*! ./router */ "../../node_modules/next/dist/client/router.js"
          )
        );

        var _rewriteUrlForExport = __webpack_require__(
          /*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export"
        );

        var _utils = __webpack_require__(
          /*! next-server/dist/lib/utils */ "next-server/dist/lib/utils"
        );
        /* global __NEXT_DATA__ */

        function isLocal(href) {
          const url = (0, _url.parse)(href, false, true);
          const origin = (0, _url.parse)(
            (0, _utils.getLocationOrigin)(),
            false,
            true
          );
          return (
            !url.host ||
            (url.protocol === origin.protocol && url.host === origin.host)
          );
        }

        function memoizedFormatUrl(formatFunc) {
          let lastHref = null;
          let lastAs = null;
          let lastResult = null;
          return (href, as) => {
            if (lastResult && href === lastHref && as === lastAs) {
              return lastResult;
            }

            const result = formatFunc(href, as);
            lastHref = href;
            lastAs = as;
            lastResult = result;
            return result;
          };
        }

        function formatUrl(url) {
          return url && typeof url === "object"
            ? (0, _utils.formatWithValidation)(url)
            : url;
        }

        let observer;
        const listeners = new _map.default();
        const IntersectionObserver = false ? undefined : null;

        function getObserver() {
          // Return shared instance of IntersectionObserver if already created
          if (observer) {
            return observer;
          } // Only create shared IntersectionObserver if supported in browser

          if (!IntersectionObserver) {
            return undefined;
          }

          return (observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (!listeners.has(entry.target)) {
                  return;
                }

                const cb = listeners.get(entry.target);

                if (entry.isIntersecting || entry.intersectionRatio > 0) {
                  observer.unobserve(entry.target);
                  listeners.delete(entry.target);
                  cb();
                }
              });
            },
            {
              rootMargin: "200px"
            }
          ));
        }

        const listenToIntersections = (el, cb) => {
          const observer = getObserver();

          if (!observer) {
            return () => {};
          }

          observer.observe(el);
          listeners.set(el, cb);
          return () => {
            observer.unobserve(el);
            listeners.delete(el);
          };
        };

        class Link extends _react.Component {
          constructor(props) {
            super(props);
            this.p = void 0;

            this.cleanUpListeners = () => {};

            this.formatUrls = memoizedFormatUrl((href, asHref) => {
              return {
                href: formatUrl(href),
                as: asHref ? formatUrl(asHref) : asHref
              };
            });

            this.linkClicked = e => {
              // @ts-ignore target exists on currentTarget
              const { nodeName, target } = e.currentTarget;

              if (
                nodeName === "A" &&
                ((target && target !== "_self") ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && e.nativeEvent.which === 2))
              ) {
                // ignore click for new tab / new window behavior
                return;
              }

              let { href, as } = this.formatUrls(
                this.props.href,
                this.props.as
              );

              if (!isLocal(href)) {
                // ignore click if it's outside our scope (e.g. https://google.com)
                return;
              }

              const { pathname } = window.location;
              href = (0, _url.resolve)(pathname, href);
              as = as ? (0, _url.resolve)(pathname, as) : href;
              e.preventDefault(); //  avoid scroll for urls with anchor refs

              let { scroll } = this.props;

              if (scroll == null) {
                scroll = as.indexOf("#") < 0;
              } // replace state instead of push if prop is present

              _router.default[this.props.replace ? "replace" : "push"](
                href,
                as,
                {
                  shallow: this.props.shallow
                }
              ).then(success => {
                if (!success) return;

                if (scroll) {
                  window.scrollTo(0, 0);
                  document.body.focus();
                }
              });
            };

            if (true) {
              if (props.prefetch) {
                console.warn(
                  "Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated"
                );
              }
            }

            this.p = props.prefetch !== false;
          }

          componentWillUnmount() {
            this.cleanUpListeners();
          }

          handleRef(ref) {
            if (this.p && IntersectionObserver && ref && ref.tagName) {
              this.cleanUpListeners();
              this.cleanUpListeners = listenToIntersections(ref, () => {
                this.prefetch();
              });
            }
          } // The function is memoized so that no extra lifecycles are needed
          // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

          prefetch() {
            if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

            const { pathname } = window.location;
            const { href: parsedHref } = this.formatUrls(
              this.props.href,
              this.props.as
            );
            const href = (0, _url.resolve)(pathname, parsedHref);

            _router.default.prefetch(href);
          }

          render() {
            let { children } = this.props;
            const { href, as } = this.formatUrls(
              this.props.href,
              this.props.as
            ); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

            if (typeof children === "string") {
              children = _react.default.createElement("a", null, children);
            } // This will return the first child, if multiple are provided it will throw an error

            const child = _react.Children.only(children);

            const props = {
              ref: el => {
                this.handleRef(el);

                if (child && typeof child === "object" && child.ref) {
                  if (typeof child.ref === "function") child.ref(el);
                  else if (typeof child.ref === "object") {
                    child.ref.current = el;
                  }
                }
              },
              onMouseEnter: e => {
                if (
                  child.props &&
                  typeof child.props.onMouseEnter === "function"
                ) {
                  child.props.onMouseEnter(e);
                }

                this.prefetch();
              },
              onClick: e => {
                if (child.props && typeof child.props.onClick === "function") {
                  child.props.onClick(e);
                }

                if (!e.defaultPrevented) {
                  this.linkClicked(e);
                }
              } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
              // defined, we specify the current 'href', so that repetition is not needed by the user
            };

            if (
              this.props.passHref ||
              (child.type === "a" && !("href" in child.props))
            ) {
              props.href = as || href;
            } // Add the ending slash to the paths. So, we can serve the
            // "<page>/index.html" directly.

            if (false) {
            }

            return _react.default.cloneElement(child, props);
          }
        }

        Link.propTypes = void 0;

        if (true) {
          const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

          const exact = __webpack_require__(
            /*! prop-types-exact */ "prop-types-exact"
          );

          Link.propTypes = exact({
            href: _propTypes.default.oneOfType([
              _propTypes.default.string,
              _propTypes.default.object
            ]).isRequired,
            as: _propTypes.default.oneOfType([
              _propTypes.default.string,
              _propTypes.default.object
            ]),
            prefetch: _propTypes.default.bool,
            replace: _propTypes.default.bool,
            shallow: _propTypes.default.bool,
            passHref: _propTypes.default.bool,
            scroll: _propTypes.default.bool,
            children: _propTypes.default.oneOfType([
              _propTypes.default.element,
              (props, propName) => {
                const value = props[propName];

                if (typeof value === "string") {
                  warn(
                    "Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"
                  );
                }

                return null;
              }
            ]).isRequired
          });
        }

        var _default = Link;
        exports.default = _default;

        /***/
      },

    /***/ "../../node_modules/next/dist/client/router.js":
      /*!************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/next/dist/client/router.js ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireWildcard = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js"
        );

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"
        );

        exports.__esModule = true;
        exports.useRouter = useRouter;
        exports.makePublicRouterInstance = makePublicRouterInstance;
        exports.createRouter = exports.withRouter = exports.default = void 0;

        var _extends2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"
          )
        );

        var _defineProperty = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"
          )
        );

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ "react")
        );

        var _router2 = _interopRequireWildcard(
          __webpack_require__(
            /*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"
          )
        );

        exports.Router = _router2.default;
        exports.NextRouter = _router2.NextRouter;

        var _routerContext = __webpack_require__(
          /*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context"
        );

        var _withRouter = _interopRequireDefault(
          __webpack_require__(
            /*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"
          )
        );

        exports.withRouter = _withRouter.default;
        /* global window */

        const singletonRouter = {
          router: null,
          // holds the actual router instance
          readyCallbacks: [],

          ready(cb) {
            if (this.router) return cb();

            if (false) {
            }
          }
        }; // Create public properties and methods of the router in the singletonRouter

        const urlPropertyFields = [
          "pathname",
          "route",
          "query",
          "asPath",
          "components"
        ];
        const routerEvents = [
          "routeChangeStart",
          "beforeHistoryChange",
          "routeChangeComplete",
          "routeChangeError",
          "hashChangeStart",
          "hashChangeComplete"
        ];
        const coreMethodFields = [
          "push",
          "replace",
          "reload",
          "back",
          "prefetch",
          "beforePopState"
        ]; // Events is a static property on the router, the router doesn't have to be initialized to use it

        (0, _defineProperty.default)(singletonRouter, "events", {
          get() {
            return _router2.default.events;
          }
        });
        urlPropertyFields.forEach(field => {
          // Here we need to use Object.defineProperty because, we need to return
          // the property assigned to the actual router
          // The value might get changed as we change routes and this is the
          // proper way to access it
          (0, _defineProperty.default)(singletonRouter, field, {
            get() {
              const router = getRouter();
              return router[field];
            }
          });
        });
        coreMethodFields.forEach(field => {
          // We don't really know the types here, so we add them later instead
          singletonRouter[field] = function() {
            const router = getRouter();
            return router[field](...arguments);
          };
        });
        routerEvents.forEach(event => {
          singletonRouter.ready(() => {
            _router2.default.events.on(event, function() {
              const eventField =
                "on" + event.charAt(0).toUpperCase() + event.substring(1);
              const _singletonRouter = singletonRouter;

              if (_singletonRouter[eventField]) {
                try {
                  _singletonRouter[eventField](...arguments);
                } catch (err) {
                  // tslint:disable-next-line:no-console
                  console.error(
                    "Error when running the Router event: " + eventField
                  ); // tslint:disable-next-line:no-console

                  console.error(err.message + "\n" + err.stack);
                }
              }
            });
          });
        });

        function getRouter() {
          if (!singletonRouter.router) {
            const message =
              "No router instance found.\n" +
              'You should only use "next/router" inside the client side of your app.\n';
            throw new Error(message);
          }

          return singletonRouter.router;
        } // Export the singletonRouter and this is the public API.

        var _default = singletonRouter; // Reexport the withRoute HOC

        exports.default = _default;

        function useRouter() {
          return _react.default.useContext(_routerContext.RouterContext);
        } // INTERNAL APIS
        // -------------
        // (do not use following exports inside the app)
        // Create a router and assign it as the singleton instance.
        // This is used in client side when we are initilizing the app.
        // This should **not** use inside the server.

        const createRouter = function createRouter() {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          singletonRouter.router = new _router2.default(...args);
          singletonRouter.readyCallbacks.forEach(cb => cb());
          singletonRouter.readyCallbacks = [];
          return singletonRouter.router;
        }; // This function is used to create the `withRouter` router instance

        exports.createRouter = createRouter;

        function makePublicRouterInstance(router) {
          const _router = router;
          const instance = {};

          for (const property of urlPropertyFields) {
            if (typeof _router[property] === "object") {
              instance[property] = (0, _extends2.default)(
                {},
                _router[property]
              ); // makes sure query is not stateful

              continue;
            }

            instance[property] = _router[property];
          } // Events is a static property on the router, the router doesn't have to be initialized to use it

          instance.events = _router2.default.events;
          coreMethodFields.forEach(field => {
            instance[field] = function() {
              return _router[field](...arguments);
            };
          });
          return instance;
        }

        /***/
      },

    /***/ "../../node_modules/next/dist/client/with-router.js":
      /*!*****************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/next/dist/client/with-router.js ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"
        );

        exports.__esModule = true;
        exports.default = withRouter;

        var _extends2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"
          )
        );

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ "react")
        );

        var _propTypes = _interopRequireDefault(
          __webpack_require__(/*! prop-types */ "prop-types")
        );

        function withRouter(ComposedComponent) {
          class WithRouteWrapper extends _react.default.Component {
            constructor() {
              super(...arguments);
              this.context = void 0;
            }

            render() {
              return _react.default.createElement(
                ComposedComponent,
                (0, _extends2.default)(
                  {
                    router: this.context.router
                  },
                  this.props
                )
              );
            }
          }

          WithRouteWrapper.displayName = void 0;
          WithRouteWrapper.getInitialProps = void 0;
          WithRouteWrapper.contextTypes = {
            router: _propTypes.default.object
          };
          WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

          if (true) {
            const name =
              ComposedComponent.displayName ||
              ComposedComponent.name ||
              "Unknown";
            WithRouteWrapper.displayName = "withRouter(" + name + ")";
          }

          return WithRouteWrapper;
        }

        /***/
      },

    /***/ "../../node_modules/next/link.js":
      /*!**********************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/next/link.js ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js"
        );

        /***/
      },

    /***/ "../../node_modules/reusecore/src/elements/Box/index.js":
      /*!*********************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Box/index.js ***!
  \*********************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! prop-types */ "prop-types"
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! styled-system */ "styled-system"
        );
        /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          styled_system__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../base */ "../../node_modules/reusecore/src/elements/base.js"
        );

        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Box/index.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

        const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(
          "div"
        ).withConfig({
          displayName: "Box__BoxWrapper",
          componentId: "m50ttq-0"
        })(
          _base__WEBPACK_IMPORTED_MODULE_6__["base"],
          Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])("Box"),
          props =>
            props.flexBox &&
            Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(
              {
                display: "flex"
              },
              styled_system__WEBPACK_IMPORTED_MODULE_5__["flexWrap"],
              styled_system__WEBPACK_IMPORTED_MODULE_5__["flexDirection"],
              styled_system__WEBPACK_IMPORTED_MODULE_5__["alignItems"],
              styled_system__WEBPACK_IMPORTED_MODULE_5__["justifyContent"],
              Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])("FlexBox")
            )
        );

        const Box = _ref => {
          let { children } = _ref,
            props = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ]
            )(_ref, ["children"]);

          return __jsx(
            BoxWrapper,
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: undefined
            }),
            children
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Box;
        Box.propTypes = {
          children:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,

          /** Using this props we can convert our Box Component to a Flex Container or Component */
          flexBox: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
            "div",
            "article",
            "section",
            "address",
            "header",
            "footer",
            "nav",
            "main"
          ]),
          width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
              ])
            )
          ]),
          height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
              ])
            )
          ]),
          fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
                ])
              )
            ]
          ),
          color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
              ])
            )
          ]),
          flex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
              ])
            )
          ]),
          order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
              ])
            )
          ]),
          alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
                ])
              )
            ]
          ),
          display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
              ])
            )
          ]),
          border: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
              ])
            )
          ]),
          borderTop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
                ])
              )
            ]
          ),
          borderRight: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
                ])
              )
            ]
          ),
          borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
                ])
              )
            ]
          ),
          borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
                ])
              )
            ]
          ),
          borderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
                  prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
                ])
              )
            ]
          )
        };
        Box.defaultProps = {
          as: "div"
        };

        /***/
      },

    /***/ "../../node_modules/reusecore/src/elements/Heading/index.js":
      /*!*************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Heading/index.js ***!
  \*************************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! prop-types */ "prop-types"
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! styled-system */ "styled-system"
        );
        /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          styled_system__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../base */ "../../node_modules/reusecore/src/elements/base.js"
        );

        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Heading/index.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

        const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(
          "p"
        ).withConfig({
          displayName: "Heading__HeadingWrapper",
          componentId: "vaqy1n-0"
        })(
          _base__WEBPACK_IMPORTED_MODULE_7__["base"],
          styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"],
          styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"],
          styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"],
          styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"],
          styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"],
          Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])("Heading")
        );

        const Heading = _ref => {
          let { content } = _ref,
            props = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ]
            )(_ref, ["content"]);

          return __jsx(
            HeadingWrapper,
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ]
            )({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: undefined
            }),
            content
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Heading;
        Heading.propTypes = Object(
          _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ]
        )(
          {
            content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
            as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf([
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6"
            ]),
            mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                ])
              )
            ]),
            mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                ])
              )
            ]),
            fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
              [
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                  ])
                )
              ]
            ),
            fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
              [
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                  ])
                )
              ]
            ),
            textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
              [
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                  ])
                )
              ]
            ),
            lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
              [
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                  ])
                )
              ]
            ),
            letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
              [
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                  ])
                )
              ]
            )
          },
          _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes
        );
        Heading.defaultProps = {
          as: "h2",
          mt: 0,
          mb: "1rem",
          fontWeight: "bold"
        };

        /***/
      },

    /***/ "../../node_modules/reusecore/src/elements/Image/index.js":
      /*!***********************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Image/index.js ***!
  \***********************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! prop-types */ "prop-types"
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../base */ "../../node_modules/reusecore/src/elements/base.js"
        );

        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Image/index.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

        const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(
          "img"
        ).withConfig({
          displayName: "Image__ImageWrapper",
          componentId: "xwdy9p-0"
        })(
          {
            display: "block",
            maxWidth: "100%",
            height: "auto"
          },
          _base__WEBPACK_IMPORTED_MODULE_5__["base"],
          Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])("Image")
        );

        const Image = _ref => {
          let { src, alt } = _ref,
            props = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ]
            )(_ref, ["src", "alt"]);

          return __jsx(
            ImageWrapper,
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(
              {
                src: src,
                alt: alt
              },
              props,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: undefined
              }
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Image;
        Image.propTypes = {
          src:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
          alt:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
        };
        Image.defaultProps = {
          m: 0
        };

        /***/
      },

    /***/ "../../node_modules/reusecore/src/elements/Input/index.js":
      /*!***********************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Input/index.js ***!
  \***********************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! prop-types */ "prop-types"
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _input_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./input.style */ "../../node_modules/reusecore/src/elements/Input/input.style.js"
        );

        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Input/index.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

        const Input = _ref => {
          let {
              label,
              value,
              onBlur,
              onFocus,
              onChange,
              inputType,
              isMaterial,
              icon,
              iconPosition,
              passwordShowHide,
              className,
              placeholder
            } = _ref,
            props = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ]
            )(_ref, [
              "label",
              "value",
              "onBlur",
              "onFocus",
              "onChange",
              "inputType",
              "isMaterial",
              "icon",
              "iconPosition",
              "passwordShowHide",
              "className",
              "placeholder"
            ]);

          // use toggle hooks
          const { 0: state, 1: setState } = Object(
            react__WEBPACK_IMPORTED_MODULE_3__["useState"]
          )({
            toggle: false,
            focus: false,
            value: ""
          }); // toggle function

          const handleToggle = () => {
            setState(
              Object(
                _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )({}, state, {
                toggle: !state.toggle
              })
            );
          }; // add focus class

          const handleOnFocus = event => {
            setState(
              Object(
                _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )({}, state, {
                focus: true
              })
            );
            onFocus(event);
          }; // remove focus class

          const handleOnBlur = event => {
            setState(
              Object(
                _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )({}, state, {
                focus: false
              })
            );
            onBlur(event);
          }; // handle input value

          const handleOnChange = event => {
            setState(
              Object(
                _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )({}, state, {
                value: event.target.value
              })
            );
            onChange(event.target.value);
          }; // get input focus class

          const getInputFocusClass = () => {
            if (state.focus === true || state.value !== "") {
              return "is-focus";
            } else {
              return "";
            }
          }; // init variable

          let inputElement, htmlFor; // Add all classs to an array

          const addAllClasses = ["reusecore__input"]; // Add is-material class

          if (isMaterial) {
            addAllClasses.push("is-material");
          } // Add icon position class if input element has icon

          if (icon && iconPosition) {
            addAllClasses.push(`icon-${iconPosition}`);
          } // Add new class

          if (className) {
            addAllClasses.push(className);
          } // if lable is not empty

          if (label) {
            htmlFor = label.replace(/\s+/g, "_").toLowerCase();
          } // if lable is not empty

          if (placeholder) {
            htmlFor = placeholder.replace(/\s+/g, "_").toLowerCase();
          } // Label position

          const LabelPosition = isMaterial === true ? "bottom" : "top"; // Label field

          const LabelField =
            label &&
            __jsx(
              "label",
              {
                htmlFor: htmlFor,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105
                },
                __self: undefined
              },
              label
            ); // Input type check

          switch (inputType) {
            case "textarea":
              inputElement = __jsx(
                "textarea",
                Object(
                  _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                    "default"
                  ]
                )({}, props, {
                  id: htmlFor,
                  name: htmlFor,
                  value: state.value,
                  onChange: handleOnChange,
                  onBlur: handleOnBlur,
                  onFocus: handleOnFocus,
                  placeholder: placeholder,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                  },
                  __self: undefined
                })
              );
              break;

            case "password":
              inputElement = __jsx(
                "div",
                {
                  className: "field-wrapper",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                  },
                  __self: undefined
                },
                __jsx(
                  "input",
                  Object(
                    _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ]
                  )({}, props, {
                    id: htmlFor,
                    name: htmlFor,
                    type: state.toggle ? "password" : "text",
                    value: state.value,
                    onChange: handleOnChange,
                    onBlur: handleOnBlur,
                    onFocus: handleOnFocus,
                    placeholder: placeholder,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 127
                    },
                    __self: undefined
                  })
                ),
                passwordShowHide &&
                  __jsx(
                    _input_style__WEBPACK_IMPORTED_MODULE_5__["EyeButton"],
                    {
                      onClick: handleToggle,
                      className: state.toggle ? "eye" : "eye-closed",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 139
                      },
                      __self: undefined
                    },
                    __jsx("span", {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 143
                      },
                      __self: undefined
                    })
                  )
              );
              break;

            default:
              inputElement = __jsx(
                "div",
                {
                  className: "field-wrapper",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                  },
                  __self: undefined
                },
                __jsx(
                  "input",
                  Object(
                    _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ]
                  )({}, props, {
                    id: htmlFor,
                    name: htmlFor,
                    type: inputType,
                    value: state.value,
                    onChange: handleOnChange,
                    onBlur: handleOnBlur,
                    onFocus: handleOnFocus,
                    placeholder: placeholder,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 153
                    },
                    __self: undefined
                  })
                ),
                icon &&
                  __jsx(
                    "span",
                    {
                      className: "input-icon",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164
                      },
                      __self: undefined
                    },
                    icon
                  )
              );
          }

          return __jsx(
            _input_style__WEBPACK_IMPORTED_MODULE_5__["default"],
            {
              className: `${addAllClasses.join(" ")} ${getInputFocusClass()}`,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 170
              },
              __self: undefined
            },
            LabelPosition === "top" && LabelField,
            inputElement,
            isMaterial &&
              __jsx("span", {
                className: "highlight",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 175
                },
                __self: undefined
              }),
            LabelPosition === "bottom" && LabelField
          );
        };
        /** Inout prop type checking. */

        Input.propTypes = {
          /** className of the Input component. */
          className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

          /** Set input label value. */
          label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

          /** The input value, required for a controlled component. */
          value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf([
            "string",
            "number"
          ]),

          /** The input placeholder, required for a controlled component. */
          placeholder: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

          /** Make default input into material style input. */
          isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

          /** Password show hide icon button prop [*only for password field]. */
          passwordShowHide:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

          /** Set input type of the input element. Default type is text. */
          inputType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf([
            "text",
            "email",
            "password",
            "number",
            "textarea"
          ]),

          /** Add icon in input field. This prop will not work with password
           * and textarea field.
           */
          icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

          /** Set input field icon position. Default position is 'left'. */
          iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(
            ["left", "right"]
          ),

          /**
           * @ignore
           */
          onBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

          /**
           * @ignore
           */
          onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

          /**
           * Callback fired when the value is changed.
           *
           * @param {object} event The event source of the callback.
           * You can pull out the new value by accessing `event.target.value`.
           */
          onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
        };
        /** Inout default type. */

        Input.defaultProps = {
          inputType: "text",
          isMaterial: false,
          iconPosition: "left",
          onBlur: () => {},
          onFocus: () => {},
          onChange: () => {}
        };
        /* harmony default export */ __webpack_exports__["default"] = Input;

        /***/
      },

    /***/ "../../node_modules/reusecore/src/elements/Input/input.style.js":
      /*!*****************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Input/input.style.js ***!
  \*****************************************************************************************************************/
      /*! exports provided: EyeButton, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EyeButton",
          function() {
            return EyeButton;
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

        const InputField = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
          {
            displayName: "inputstyle__InputField",
            componentId: "sc-8lywy0-0"
          }
        )(
          [
            "position:relative;.field-wrapper{position:relative;}&.icon-left,&.icon-right{.field-wrapper{display:flex;align-items:center;> .input-icon{position:absolute;top:0;bottom:auto;display:flex;align-items:center;justify-content:center;width:34px;height:40px;}}}&.icon-left{.field-wrapper{> .input-icon{left:0;right:auto;}> input{padding-left:34px;}}}&.icon-right{.field-wrapper{> .input-icon{left:auto;right:0;}> input{padding-right:34px;}}}label{display:block;color:",
            ";font-size:",
            "px;font-weight:",
            ";margin-bottom:",
            "px;transition:0.2s ease all;}textarea,input{font-size:16px;padding:11px;display:block;width:100%;color:",
            ";margin-bottom:15px;box-shadow:none;border-radius:5px;box-sizing:border-box;border:1px solid ",
            ";transition:border-color 0.2s ease;::placeholder{color:",
            ";font-size:16px;}&:focus{outline:none;border-color:",
            ";}}textarea{min-height:150px;}&.is-material{label{position:absolute;left:0;top:10px;}input,textarea{border-radius:0;border-top:0;border-left:0;border-right:0;padding-left:0;padding-right:0;}textarea{min-height:40px;padding-bottom:0;}.highlight{position:absolute;height:1px;top:auto;left:50%;bottom:0;width:0;pointer-events:none;transition:all 0.2s ease;}&.icon-left,&.icon-right{.field-wrapper{flex-direction:row-reverse;> .input-icon{width:auto;}> input{flex:1;}}}&.icon-left{.field-wrapper{> input{padding-left:20px;}}label{top:-15px;font-size:12px;}}&.icon-right{.field-wrapper{> input{padding-right:20px;}}}&.is-focus{input{border-color:",
            ";}label{top:-16px;font-size:12px;color:",
            ";}.highlight{width:100%;height:2px;background-color:",
            ";left:0;}}}"
          ],
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.labelColor",
            "#778CA3"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "fontSizes.1",
            "12"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "fontWeights.2",
            "400"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "space.2",
            "5"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.textColor",
            "#484848"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.inactiveIcon",
            "#ebebeb"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.textPlaceholder",
            "#D1D8E0"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.secondary",
            "#2B2B2B"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.inactiveIcon",
            "#ebebeb"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.textColor",
            "#484848"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.primary",
            "#028489"
          )
        );
        const EyeButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig(
          {
            displayName: "inputstyle__EyeButton",
            componentId: "sc-8lywy0-1"
          }
        )(
          [
            "width:43px;height:40px;border:0;padding:0;margin:0;top:0;right:0;position:absolute;outline:none;cursor:pointer;box-shadow:none;display:flex;align-items:center;justify-content:center;background-color:transparent;> span{width:12px;height:12px;display:block;border:solid 1px ",
            ";border-radius:75% 15%;transform:rotate(45deg);position:relative;&:before{content:'';display:block;width:4px;height:4px;border-radius:50%;left:3px;top:3px;position:absolute;border:solid 1px ",
            ";}}&.eye-closed{> span{&:after{content:'';display:block;width:1px;height:20px;left:calc(50% - 1px / 2);top:-4px;position:absolute;background-color:",
            ";transform:rotate(-12deg);}}}"
          ],
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.textColor",
            "#484848"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.textColor",
            "#484848"
          ),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(
            "colors.textColor",
            "#484848"
          )
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = InputField;

        /***/
      },

    /***/ "../../node_modules/reusecore/src/elements/Link/index.js":
      /*!**********************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Link/index.js ***!
  \**********************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! prop-types */ "prop-types"
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../base */ "../../node_modules/reusecore/src/elements/base.js"
        );

        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Link/index.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

        const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(
          "a"
        ).withConfig({
          displayName: "Link__LinkWrapper",
          componentId: "efswp7-0"
        })(
          {
            textDecoration: "none"
          },
          _base__WEBPACK_IMPORTED_MODULE_6__["base"],
          Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])("Link")
        );

        const Link = _ref => {
          let { children } = _ref,
            props = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ]
            )(_ref, ["children"]);

          return __jsx(
            LinkWrapper,
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ]
            )({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: undefined
            }),
            children
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Link;
        Link.propTypes = Object(
          _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ]
        )(
          {
            as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
            ]),
            children:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
          },
          _base__WEBPACK_IMPORTED_MODULE_6__["base"].propTypes
        );
        Link.defaultProps = {
          as: "a",
          m: 0,
          display: "inline-block"
        };

        /***/
      },

    /***/ "../../node_modules/reusecore/src/elements/Text/index.js":
      /*!**********************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Text/index.js ***!
  \**********************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! prop-types */ "prop-types"
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! styled-system */ "styled-system"
        );
        /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          styled_system__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../base */ "../../node_modules/reusecore/src/elements/base.js"
        );

        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Text/index.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

        const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(
          "p"
        ).withConfig({
          displayName: "Text__TextWrapper",
          componentId: "sc-15lufec-0"
        })(
          _base__WEBPACK_IMPORTED_MODULE_7__["base"],
          styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"],
          styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"],
          styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"],
          styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"],
          styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"],
          Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])("Text")
        );

        const Text = _ref => {
          let { content } = _ref,
            props = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ]
            )(_ref, ["content"]);

          return __jsx(
            TextWrapper,
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ]
            )({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: undefined
            }),
            content
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Text;
        Text.propTypes = Object(
          _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ]
        )(
          {
            content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
            as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
            mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                ])
              )
            ]),
            mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                ])
              )
            ]),
            fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
              [
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                  ])
                )
              ]
            ),
            fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
              [
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                  ])
                )
              ]
            ),
            textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
              [
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                  ])
                )
              ]
            ),
            lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
              [
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                  ])
                )
              ]
            ),
            letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
              [
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
                prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(
                  prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
                  ])
                )
              ]
            )
          },
          _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes
        );
        Text.defaultProps = {
          as: "p",
          mt: 0,
          mb: "1rem"
        };

        /***/
      },

    /***/ "../../node_modules/reusecore/src/elements/UI/Logo/index.js":
      /*!*************************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/UI/Logo/index.js ***!
  \*************************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! prop-types */ "prop-types"
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../Text */ "../../node_modules/reusecore/src/elements/Text/index.js"
        );
        /* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../Link */ "../../node_modules/reusecore/src/elements/Link/index.js"
        );
        /* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../Image */ "../../node_modules/reusecore/src/elements/Image/index.js"
        );

        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/UI/Logo/index.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

        const Logo = _ref => {
          let {
              logoWrapperStyle,
              logoStyle,
              titleStyle,
              withAchor,
              anchorProps,
              logoSrc,
              title
            } = _ref,
            props = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ]
            )(_ref, [
              "logoWrapperStyle",
              "logoStyle",
              "titleStyle",
              "withAchor",
              "anchorProps",
              "logoSrc",
              "title"
            ]);

          return __jsx(
            _Link__WEBPACK_IMPORTED_MODULE_5__["default"],
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )({}, props, logoWrapperStyle, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              },
              __self: undefined
            }),
            withAchor
              ? __jsx(
                  "a",
                  Object(
                    _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ]
                  )({}, anchorProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    },
                    __self: undefined
                  }),
                  logoSrc
                    ? __jsx(
                        _Image__WEBPACK_IMPORTED_MODULE_6__["default"],
                        Object(
                          _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            "default"
                          ]
                        )(
                          {
                            src: logoSrc,
                            alt: title
                          },
                          logoStyle,
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 21
                            },
                            __self: undefined
                          }
                        )
                      )
                    : __jsx(
                        _Text__WEBPACK_IMPORTED_MODULE_4__["default"],
                        Object(
                          _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            "default"
                          ]
                        )(
                          {
                            content: title
                          },
                          titleStyle,
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 23
                            },
                            __self: undefined
                          }
                        )
                      )
                )
              : __jsx(
                  react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
                  null,
                  logoSrc
                    ? __jsx(
                        _Image__WEBPACK_IMPORTED_MODULE_6__["default"],
                        Object(
                          _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            "default"
                          ]
                        )(
                          {
                            src: logoSrc,
                            alt: title
                          },
                          logoStyle,
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 29
                            },
                            __self: undefined
                          }
                        )
                      )
                    : __jsx(
                        _Text__WEBPACK_IMPORTED_MODULE_4__["default"],
                        Object(
                          _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            "default"
                          ]
                        )(
                          {
                            content: title
                          },
                          titleStyle,
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 31
                            },
                            __self: undefined
                          }
                        )
                      )
                )
          );
        };

        Logo.propTypes = {
          logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          title:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
          logoWrapperStyle:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          withAchor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          anchorProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
        };
        Logo.defaultProps = {
          logoWrapperStyle: {
            display: "inline-block",
            mr: "1rem",
            "a:hover,a:focus": {
              textDecoration: "none"
            }
          },
          titleStyle: {
            display: "inline-block",
            fontSize: "2rem",
            lineHeight: "inherit",
            whiteSpace: "nowrap"
          }
        };
        /* harmony default export */ __webpack_exports__["default"] = Logo;

        /***/
      },

    /***/ "../../node_modules/reusecore/src/elements/base.js":
      /*!****************************************************************************************************!*\
  !*** /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/base.js ***!
  \****************************************************************************************************/
      /*! exports provided: themed, base */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "themed",
          function() {
            return themed;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "base",
          function() {
            return base;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js"
        );
        /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! styled-system */ "styled-system"
        );
        /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          styled_system__WEBPACK_IMPORTED_MODULE_1__
        );

        /** this is our Base Component every components must be Extend it */

        const themed = key => props => props.theme[key];
        const base = Object(
          styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"]
        )(
          () => ({
            boxSizing: "border-box"
          }),
          styled_system__WEBPACK_IMPORTED_MODULE_1__["space"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["width"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["height"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["color"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["order"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"],
          styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]
        );
        base.propTypes = Object(
          _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ]
        )(
          {},
          styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes,
          styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes,
          styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes,
          styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes,
          styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes,
          styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes,
          styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes,
          styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes,
          styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes,
          styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes,
          styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes
        );

        /***/
      },

    /***/ "../reusecore/src/constants/routes.js":
      /*!********************************************!*\
  !*** ../reusecore/src/constants/routes.js ***!
  \********************************************/
      /*! exports provided: LANDING, SIGN_UP, SIGN_IN, PASSWORD_FORGET, HOME, ACCOUNT */
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
          "PASSWORD_FORGET",
          function() {
            return PASSWORD_FORGET;
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
          "ACCOUNT",
          function() {
            return ACCOUNT;
          }
        );
        const LANDING = "/";
        const SIGN_UP = "/signup";
        const SIGN_IN = "/signin";
        const PASSWORD_FORGET = "/pw-forget";
        const HOME = "/home";
        const ACCOUNT = "/account";

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
                    lineNumber: 22
                  },
                  __self: undefined
                }
              ),
              __jsx(
                _App_app_style__WEBPACK_IMPORTED_MODULE_5__["GlobalStyle"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  },
                  __self: undefined
                }
              ),
              __jsx(
                _App_app_style__WEBPACK_IMPORTED_MODULE_5__["AppWrapper"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: undefined
                },
                children
              )
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
                    lineNumber: 20
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
                    lineNumber: 19
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

    /***/ "./pages/signup/index.js":
      /*!*******************************!*\
  !*** ./pages/signup/index.js ***!
  \*******************************/
      /*! exports provided: default, SignUpForm */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SignUpForm",
          function() {
            return SignUpForm;
          }
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! prop-types */ "prop-types"
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! next/link */ "../../node_modules/next/link.js"
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! next/router */ "next/router"
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js"
        );
        /* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js"
        );
        /* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js"
        );
        /* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js"
        );
        /* harmony import */ var reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! reusecore/src/elements/Input */ "../../node_modules/reusecore/src/elements/Input/index.js"
        );
        /* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js"
        );
        /* harmony import */ var _signup_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./signup.styles */ "./pages/signup/signup.styles.js"
        );
        /* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./../../containers/App */ "./containers/App/index.js"
        );
        /* harmony import */ var _containers_firebase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./../../containers/firebase */ "./containers/firebase/index.js"
        );
        /* harmony import */ var _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./../../../reusecore/src/constants/routes */ "../reusecore/src/constants/routes.js"
        );
        /* harmony import */ var common_src_assets_image_app_farmer_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! common/src/assets/image/app/farmer.svg */ "../../node_modules/common/src/assets/image/app/farmer.svg"
        );
        /* harmony import */ var common_src_assets_image_app_farmer_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(
          common_src_assets_image_app_farmer_svg__WEBPACK_IMPORTED_MODULE_17__
        );
        /* harmony import */ var common_src_assets_image_app_logo2_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! common/src/assets/image/app/logo2.png */ "../../node_modules/common/src/assets/image/app/logo2.png"
        );
        /* harmony import */ var common_src_assets_image_app_logo2_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(
          common_src_assets_image_app_logo2_png__WEBPACK_IMPORTED_MODULE_18__
        );

        var _jsxFileName =
          "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/packages/landing/pages/signup/index.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

        const SignUpPage = () =>
          __jsx(
            _containers_App__WEBPACK_IMPORTED_MODULE_14__[
              "AppWithAuthentication"
            ],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: undefined
            },
            __jsx(SignUpForm, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: undefined
            })
          );

        const updateByPropertyName = (propertyName, value) => () => ({
          [propertyName]: value
        });

        const INITIAL_STATE = {
          fullname: "",
          number_phone: "",
          email: "",
          password: "",
          error: null
        };

        class SignUpForm extends react__WEBPACK_IMPORTED_MODULE_3__[
          "Component"
        ] {
          constructor(props) {
            super(props);

            Object(
              _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ]
            )(this, "onSubmit", event => {
              const { fullname, email, password } = this.state;
              _containers_firebase__WEBPACK_IMPORTED_MODULE_15__["auth"]
                .doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                  // Create a user in your own accessible Firebase Database too
                  _containers_firebase__WEBPACK_IMPORTED_MODULE_15__["db"]
                    .doCreateUser(authUser.user.uid, fullname, email)
                    .then(() => {
                      this.setState(() =>
                        Object(
                          _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                          ]
                        )({}, INITIAL_STATE)
                      );
                      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(
                        _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_16__[
                          "HOME"
                        ]
                      );
                    })
                    .catch(error => {
                      this.setState(updateByPropertyName("error", error));
                    });
                })
                .catch(error => {
                  this.setState(updateByPropertyName("error", error));
                });
              event.preventDefault();
            });

            this.state = Object(
              _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ]
            )({}, INITIAL_STATE);
          }

          handleChange(name, value) {
            let state = this.state;
            state[name] = value;
            this.setState({
              state
            });
          }

          render() {
            const {
              row,
              col,
              imageCol,
              btnStyle,
              logoStyle,
              imageArea,
              titleStyle,
              contentWrapper,
              descriptionStyle,
              textInfoTint,
              textInfoLink
            } = this.props;
            const {
              fullname,
              number_phone,
              email,
              password,
              error
            } = this.state;
            const isInvalid =
              fullname === "" ||
              number_phone === "" ||
              email === "" ||
              password === "";
            return __jsx(
              _signup_styles__WEBPACK_IMPORTED_MODULE_13__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                },
                __self: this
              },
              __jsx(
                reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ],
                Object(
                  _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                    "default"
                  ]
                )(
                  {
                    className: "row"
                  },
                  row,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 105
                    },
                    __self: this
                  }
                ),
                __jsx(
                  reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__[
                    "default"
                  ],
                  Object(
                    _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ]
                  )(
                    {
                      className: "col"
                    },
                    col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106
                      },
                      __self: this
                    }
                  ),
                  __jsx(
                    reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__[
                      "default"
                    ],
                    Object(
                      _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                        "default"
                      ]
                    )({}, contentWrapper, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107
                      },
                      __self: this
                    }),
                    __jsx(
                      reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_10__[
                        "default"
                      ],
                      Object(
                        _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                          "default"
                        ]
                      )(
                        {
                          content: "Daftar"
                        },
                        titleStyle,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 108
                          },
                          __self: this
                        }
                      )
                    ),
                    __jsx(
                      reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__[
                        "default"
                      ],
                      Object(
                        _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                          "default"
                        ]
                      )(
                        {
                          content:
                            "Silahkan masukan data diri anda untuk mendapatkan pelayanan terbaik dari dhakon"
                        },
                        descriptionStyle,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 109
                          },
                          __self: this
                        }
                      )
                    ),
                    __jsx(
                      "form",
                      {
                        onSubmit: this.onSubmit,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 113
                        },
                        __self: this
                      },
                      __jsx(
                        reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_11__[
                          "default"
                        ],
                        {
                          name: "fullname",
                          value: fullname,
                          onChange: this.handleChange.bind(this, "fullname"),
                          inputType: "text",
                          label: "Nama Lengkap",
                          placeholder: "Masukan nama lengkap Anda",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 114
                          },
                          __self: this
                        }
                      ),
                      __jsx(
                        reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_11__[
                          "default"
                        ],
                        {
                          name: "number_phone",
                          value: number_phone,
                          onChange: this.handleChange.bind(
                            this,
                            "number_phone"
                          ),
                          inputType: "number",
                          label: "Nomor Handphone/Whatsapp",
                          placeholder: "Masukan Nomor HP/WA Anda",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 121
                          },
                          __self: this
                        }
                      ),
                      __jsx(
                        reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_11__[
                          "default"
                        ],
                        {
                          name: "email",
                          value: email,
                          onChange: this.handleChange.bind(this, "email"),
                          inputType: "email",
                          label: "Email",
                          placeholder: "Masukan email Anda jika memiliki",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 128
                          },
                          __self: this
                        }
                      ),
                      __jsx(
                        reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_11__[
                          "default"
                        ],
                        {
                          name: "password",
                          value: password,
                          onChange: this.handleChange.bind(this, "password"),
                          inputType: "password",
                          label: "Kata Sandi",
                          placeholder: "Buat kata sandi Anda",
                          passwordShowHide: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 135
                          },
                          __self: this
                        }
                      ),
                      __jsx(
                        "div",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 144
                          },
                          __self: this
                        },
                        __jsx(
                          reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__[
                            "default"
                          ],
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 145
                            },
                            __self: this
                          },
                          __jsx(
                            "div",
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 148
                              },
                              __self: this
                            },
                            __jsx("input", {
                              type: "submit",
                              value: "Daftar",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 149
                              },
                              __self: this
                            })
                          ),
                          error &&
                            __jsx(
                              _signup_styles__WEBPACK_IMPORTED_MODULE_13__[
                                "InfoLabel"
                              ],
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 159
                                },
                                __self: this
                              },
                              __jsx(
                                reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__[
                                  "default"
                                ],
                                Object(
                                  _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                                    "default"
                                  ]
                                )(
                                  {
                                    content: error.message
                                  },
                                  textInfoTint,
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 160
                                    },
                                    __self: this
                                  }
                                )
                              )
                            ),
                          __jsx(
                            _signup_styles__WEBPACK_IMPORTED_MODULE_13__[
                              "InfoLabel"
                            ],
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 164
                              },
                              __self: this
                            },
                            __jsx(
                              reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__[
                                "default"
                              ],
                              Object(
                                _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                                  "default"
                                ]
                              )(
                                {
                                  content: "Saya sudah punya dhakon!"
                                },
                                textInfoTint,
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 165
                                  },
                                  __self: this
                                }
                              )
                            ),
                            __jsx(
                              next_link__WEBPACK_IMPORTED_MODULE_5___default.a,
                              {
                                href: "/signin",
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 166
                                },
                                __self: this
                              },
                              __jsx(
                                "a",
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 167
                                  },
                                  __self: this
                                },
                                __jsx(
                                  reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__[
                                    "default"
                                  ],
                                  Object(
                                    _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                                      "default"
                                    ]
                                  )(
                                    {
                                      content: "Langsung Masuk"
                                    },
                                    textInfoLink,
                                    {
                                      __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 168
                                      },
                                      __self: this
                                    }
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                __jsx(
                  reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__[
                    "default"
                  ],
                  Object(
                    _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ]
                  )(
                    {
                      className: "col imageCol"
                    },
                    col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 177
                      },
                      __self: this
                    }
                  ),
                  __jsx(
                    reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__[
                      "default"
                    ],
                    Object(
                      _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                        "default"
                      ]
                    )({}, imageCol, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 178
                      },
                      __self: this
                    }),
                    __jsx(
                      reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_9__[
                        "default"
                      ],
                      {
                        href: "#",
                        logoSrc:
                          common_src_assets_image_app_logo2_png__WEBPACK_IMPORTED_MODULE_18___default.a,
                        title: "Dhakon",
                        logoStyle: logoStyle,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 179
                        },
                        __self: this
                      }
                    )
                  ),
                  __jsx(
                    reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__[
                      "default"
                    ],
                    Object(
                      _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                        "default"
                      ]
                    )({}, imageArea, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 185
                      },
                      __self: this
                    }),
                    __jsx(
                      reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__[
                        "default"
                      ],
                      {
                        src:
                          common_src_assets_image_app_farmer_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
                        alt: "Dhakon Image",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 186
                        },
                        __self: this
                      }
                    )
                  )
                )
              )
            );
          }
        } // Signup style props

        SignUpForm.propTypes = {
          row: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          col: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          imageCol: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          imageArea: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          image: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          hintTextStyle:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          contentWrapper:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          descriptionStyle:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          textInfoTint:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          textInfoLink: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
        }; // Signup default style

        SignUpForm.defaultProps = {
          // Team member row default style
          row: {
            flexBox: true,
            flexWrap: "wrap"
          },
          // Team member col default style
          col: {
            width: [1, 1 / 2],
            justifyContent: "center"
          },
          // Default logo size
          logoStyle: {
            width: "230px",
            height: "auto",
            ml: "40px",
            mt: "30px"
          },
          imageCol: {},
          imageArea: {
            pt: ["32px", "56px"],
            pl: ["20px", "32px", "50px", "50px", "100px"],
            pr: ["20px", "32px", "50px", "50px", "100px"],
            pb: ["32px", "56px"]
          },
          image: {
            width: ["0%", "0%", "70%", "70%", "70%"],
            backgroundColor: "tomato"
          },
          // Title default style
          titleStyle: {
            fontSize: ["20px", "24px", "40px", "40px", "40px"],
            fontWeight: "900",
            letterSpacing: "-0.01px",
            color: "#2B2B2B",
            mt: "35px",
            mb: "10px"
          },
          // Description default style
          descriptionStyle: {
            fontSize: ["10px", "14px", "16px", "16px", "16px"],
            color: "#2B2B2B",
            mb: "30px"
          },
          // Content wrapper style
          contentWrapper: {
            pt: ["32px", "56px"],
            pl: ["20px", "32px", "50px", "50px", "150px"],
            pr: ["20px", "32px", "50px", "50px", "150px"],
            pb: ["32px", "56px"],
            backgroundColor: "#fff",
            height: "100vh"
          },
          // Default button style
          btnStyle: {
            minWidth: "100%",
            fontSize: "14px",
            fontWeight: "900",
            pl: "22px",
            pr: "22px",
            mt: "20px",
            colors: "primaryWithBg"
          },
          // Outline button outline style
          outlineBtnStyle: {
            minWidth: "156px",
            fontSize: "14px",
            fontWeight: "500",
            color: "rgb(26, 115, 232)"
          },
          textInfoTint: {
            textAlign: "center",
            fontSize: ["12px", "14px", "15px", "15px", "15px"],
            fontWeight: "500",
            color: "#778CA3",
            mr: 1
          },
          textInfoLink: {
            textAlign: "center",
            fontSize: ["12px", "14px", "15px", "15px", "15px"],
            fontWeight: "900",
            color: "#2B2B2B",
            type: "button",
            minHeight: 0,
            p: "0",
            bg: "transparent"
          }
        };
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = SignUpPage;

        /***/
      },

    /***/ "./pages/signup/signup.styles.js":
      /*!***************************************!*\
  !*** ./pages/signup/signup.styles.js ***!
  \***************************************/
      /*! exports provided: InfoLabel, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "InfoLabel",
          function() {
            return InfoLabel;
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

        const SignupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
          {
            displayName: "signupstyles__SignupWrapper",
            componentId: "sc-1e1tpis-0"
          }
        )(
          [
            "position:relative;background-color:",
            ";height:100vh;@media (max-width:1099px){overflow:hidden;}.button__wrapper{@media only screen and (max-width:480px){text-align:center;}}.col{position:relative;&.imageCol{background-color:",
            ";}@media only screen and (max-width:991px){width:100%;&.imageCol{background-color:",
            ";display:flex;flex:1;}}}"
          ],
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
          )
        );
        const InfoLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
          {
            displayName: "signupstyles__InfoLabel",
            componentId: "sc-1e1tpis-1"
          }
        )(["display:flex;justify-content:center;margin-top:33px;"]);

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = SignupWrapper;

        /***/
      },

    /***/ 5:
      /*!*************************************!*\
  !*** multi ./pages/signup/index.js ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/msnajib/Documents/najib/Dhakon/dhakon-app/packages/landing/pages/signup/index.js */ "./pages/signup/index.js"
        );

        /***/
      },

    /***/ "core-js/library/fn/map":
      /*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/map");

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

    /***/ "core-js/library/fn/object/get-own-property-descriptor":
      /*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

        /***/
      },

    /***/ "core-js/library/fn/object/get-own-property-symbols":
      /*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/get-own-property-symbols");

        /***/
      },

    /***/ "core-js/library/fn/object/keys":
      /*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/keys");

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

    /***/ "next-server/dist/lib/router-context":
      /*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next-server/dist/lib/router-context");

        /***/
      },

    /***/ "next-server/dist/lib/router/rewrite-url-for-export":
      /*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

        /***/
      },

    /***/ "next-server/dist/lib/router/router":
      /*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next-server/dist/lib/router/router");

        /***/
      },

    /***/ "next-server/dist/lib/utils":
      /*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next-server/dist/lib/utils");

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

    /***/ "prop-types":
      /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("prop-types");

        /***/
      },

    /***/ "prop-types-exact":
      /*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("prop-types-exact");

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
      },

    /***/ url:
      /*!**********************!*\
  !*** external "url" ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("url");

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=signup.js.map
