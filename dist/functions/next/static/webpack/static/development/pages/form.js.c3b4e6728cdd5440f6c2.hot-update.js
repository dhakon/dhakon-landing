webpackHotUpdate("static/development/pages/form.js", {
  /***/ "./pages/form/index.js":
    /*!*****************************!*\
  !*** ./pages/form/index.js ***!
  \*****************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! react */ "../../node_modules/react/index.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_7__
      );
      /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! react-redux */ "../../node_modules/react-redux/es/index.js"
      );
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! next/router */ "../../node_modules/next/dist/client/router.js"
      );
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        next_router__WEBPACK_IMPORTED_MODULE_9__
      );
      /* harmony import */ var _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ./../../../reusecore/src/constants/routes */ "../reusecore/src/constants/routes.js"
      );
      /* harmony import */ var _containers_App_app_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../../containers/App/app.style */ "./containers/App/app.style.js"
      );
      /* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! ./../../containers/App */ "./containers/App/index.js"
      );
      /* harmony import */ var _typeform_embed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        /*! @typeform/embed */ "../../node_modules/@typeform/embed/lib/api.js"
      );
      /* harmony import */ var _typeform_embed__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
        _typeform_embed__WEBPACK_IMPORTED_MODULE_13__
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        /*! axios */ "../../node_modules/axios/index.js"
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
        axios__WEBPACK_IMPORTED_MODULE_14__
      );

      var _jsxFileName =
        "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/packages/landing/pages/form/index.js";
      var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

      // const form_id = 'A7bW0z';
      // const token = 'DLrXyVaPwwS7VhFoL84VwKvcqc5rP8x9fEARcVJRt5Sg';

      var Form =
        /*#__PURE__*/
        (function(_Component) {
          Object(
            _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ]
          )(Form, _Component);

          function Form() {
            var _getPrototypeOf2;

            var _this;

            Object(
              _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(this, Form);

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            _this = Object(
              _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ]
            )(
              this,
              (_getPrototypeOf2 = Object(
                _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ]
              )(Form)).call.apply(_getPrototypeOf2, [this].concat(args))
            );

            Object(
              _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ]
            )(
              Object(
                _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ]
              )(_this),
              "handleSubmit",
              function() {
                next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(
                  _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_10__[
                    "LANDING"
                  ]
                );
              }
            );

            return _this;
          }

          Object(
            _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ]
          )(Form, [
            {
              key: "componentDidMount",
              value: function componentDidMount() {
                _typeform_embed__WEBPACK_IMPORTED_MODULE_13__["makeWidget"](
                  embedElement,
                  "https://dhakon.typeform.com/to/A7bW0z",
                  {
                    hideHeaders: true,
                    hideFooter: true,
                    opacity: 75,
                    onSubmit: function onSubmit() {
                      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(
                        _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_10__[
                          "LANDING"
                        ]
                      );
                      axios__WEBPACK_IMPORTED_MODULE_14___default.a
                        .get("/forms/A7bW0z/responses", {
                          headers: {
                            Authorization:
                              "Bearer DLrXyVaPwwS7VhFoL84VwKvcqc5rP8x9fEARcVJRt5Sg"
                          }
                        })
                        .then(function(response) {
                          // handle success
                          var res = response.data.items[0];
                          var name = res.answers[0].text;
                          var phone = res.answers[1].phone_number;
                          var type_work = res.answers[2].choice.label;
                          var number_workers = res.answers[3].number;
                          var duration = res.answers[4].choice.label;
                          var address = res.answers[5].text;
                          axios__WEBPACK_IMPORTED_MODULE_14___default.a
                            .post("/message", {
                              body: "Assalamu'alaikum Bapak/Ibu "
                                .concat(
                                  name,
                                  ". \n Anda baru saja mencari buruh untuk "
                                )
                                .concat(type_work, " sebanyak ")
                                .concat(number_workers, " orang dengan durasi ")
                                .concat(duration, " disawah ")
                                .concat(
                                  address,
                                  ". \n Sabar ya... setelah ini Anda akan dihubungi tim Dhakon."
                                ),
                              to: phone,
                              from: "+17609933055"
                            })
                            .then(function(response) {
                              console.log("response success", response);
                            })
                            ["catch"](function(error) {
                              console.log("response error", error);
                            });
                        })
                        ["catch"](function(error) {
                          // handle error
                          console.log("response error : ", error);
                        });
                    }
                  }
                );
              }
            },
            {
              key: "render",
              value: function render() {
                return __jsx(
                  _containers_App__WEBPACK_IMPORTED_MODULE_12__[
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
                    _containers_App_app_style__WEBPACK_IMPORTED_MODULE_11__[
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
          ]);

          return Form;
        })(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

      var mapStateToProps = function mapStateToProps(state) {
        return {
          authUser: state.sessionState.authUser
        };
      };

      /* harmony default export */ __webpack_exports__["default"] = Object(
        react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"]
      )(mapStateToProps)(Form);

      /***/
    }
});
//# sourceMappingURL=form.js.c3b4e6728cdd5440f6c2.hot-update.js.map
