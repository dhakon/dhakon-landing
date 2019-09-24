webpackHotUpdate("static/development/pages/form.js",{

/***/ "./pages/form/index.js":
/*!*****************************!*\
  !*** ./pages/form/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../reusecore/src/constants/routes */ "../reusecore/src/constants/routes.js");
/* harmony import */ var _containers_App_app_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../containers/App/app.style */ "./containers/App/app.style.js");
/* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../containers/App */ "./containers/App/index.js");
/* harmony import */ var react_typeform_embed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-typeform-embed */ "../../node_modules/react-typeform-embed/lib/index.js");
/* harmony import */ var react_typeform_embed__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_typeform_embed__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/packages/landing/pages/form/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








var Form =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Form, _Component);

  function Form() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Form);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Form).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "render",
    value: function render() {
      return __jsx(_containers_App__WEBPACK_IMPORTED_MODULE_10__["AppWithAuthorization"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(_containers_App_app_style__WEBPACK_IMPORTED_MODULE_9__["AppWrapper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx(react_typeform_embed__WEBPACK_IMPORTED_MODULE_11__["ReactTypeformEmbed"], {
        hideFooter: true,
        onSubmit: function onSubmit() {
          return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(_reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_8__["HOME"]);
        },
        url: "https://dhakon.typeform.com/to/A7bW0z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    authUser: state.sessionState.authUser
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Form));

/***/ })

})
//# sourceMappingURL=form.js.da07e229b837e2d5cf9c.hot-update.js.map