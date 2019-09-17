webpackHotUpdate("static/development/pages/signup.js", {
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
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! react */ "../../node_modules/react/index.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_9__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! prop-types */ "../../node_modules/prop-types/index.js"
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_10__
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! next/link */ "../../node_modules/next/link.js"
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
        next_link__WEBPACK_IMPORTED_MODULE_11__
      );
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! next/router */ "../../node_modules/next/dist/client/router.js"
      );
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
        next_router__WEBPACK_IMPORTED_MODULE_12__
      );
      /* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        /*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js"
      );
      /* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        /*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js"
      );
      /* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
        /*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js"
      );
      /* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
        /*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js"
      );
      /* harmony import */ var reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
        /*! reusecore/src/elements/Input */ "../../node_modules/reusecore/src/elements/Input/index.js"
      );
      /* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
        /*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js"
      );
      /* harmony import */ var _signup_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
        /*! ./signup.styles */ "./pages/signup/signup.styles.js"
      );
      /* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
        /*! ./../../containers/App */ "./containers/App/index.js"
      );
      /* harmony import */ var _containers_firebase__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
        /*! ./../../containers/firebase */ "./containers/firebase/index.js"
      );
      /* harmony import */ var _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
        /*! ./../../../reusecore/src/constants/routes */ "../reusecore/src/constants/routes.js"
      );
      /* harmony import */ var common_src_assets_image_app_farmer_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
        /*! common/src/assets/image/app/farmer.svg */ "../../node_modules/common/src/assets/image/app/farmer.svg"
      );
      /* harmony import */ var common_src_assets_image_app_farmer_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(
        common_src_assets_image_app_farmer_svg__WEBPACK_IMPORTED_MODULE_23__
      );
      /* harmony import */ var common_src_assets_image_app_logo2_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
        /*! common/src/assets/image/app/logo2.png */ "../../node_modules/common/src/assets/image/app/logo2.png"
      );
      /* harmony import */ var common_src_assets_image_app_logo2_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(
        common_src_assets_image_app_logo2_png__WEBPACK_IMPORTED_MODULE_24__
      );

      var _jsxFileName =
        "/Users/msnajib/Documents/najib/Dhakon/dhakon-app/packages/landing/pages/signup/index.js";
      var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

      var SignUpPage = function SignUpPage() {
        return __jsx(
          _containers_App__WEBPACK_IMPORTED_MODULE_20__[
            "AppWithAuthentication"
          ],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          __jsx(SignUpForm, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          })
        );
      };

      var INITIAL_STATE = {
        fullname: "",
        number_phone: "",
        email: "",
        password: "",
        error: null
      };

      var SignUpForm =
        /*#__PURE__*/
        (function(_Component) {
          Object(
            _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[
              "default"
            ]
          )(SignUpForm, _Component);

          function SignUpForm(props) {
            var _this;

            Object(
              _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ]
            )(this, SignUpForm);

            _this = Object(
              _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ]
            )(
              this,
              Object(
                _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ]
              )(SignUpForm).call(this, props)
            );

            Object(
              _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[
                "default"
              ]
            )(
              Object(
                _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ]
              )(_this),
              "onSubmit",
              function(event) {
                var _this$state = _this.state,
                  fullname = _this$state.fullname,
                  email = _this$state.email,
                  password = _this$state.password;
                _containers_firebase__WEBPACK_IMPORTED_MODULE_21__["auth"]
                  .doCreateUserWithEmailAndPassword(email, password)
                  .then(function(authUser) {
                    // Create a user in your own accessible Firebase Database too
                    _containers_firebase__WEBPACK_IMPORTED_MODULE_21__["db"]
                      .doCreateUser(authUser.user.uid, fullname, email)
                      .then(function() {
                        _this.setState(function() {
                          return Object(
                            _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                              "default"
                            ]
                          )({}, INITIAL_STATE);
                        });

                        next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push(
                          _reusecore_src_constants_routes__WEBPACK_IMPORTED_MODULE_22__[
                            "HOME"
                          ]
                        );
                      })
                      ["catch"](function(error) {
                        _this.handleChange.bind(
                          Object(
                            _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[
                              "default"
                            ]
                          )(_this),
                          error
                        );
                      });
                  })
                  ["catch"](function(error) {
                    _this.handleChange.bind(
                      Object(
                        _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[
                          "default"
                        ]
                      )(_this),
                      error
                    );
                  });
                event.preventDefault();
              }
            );

            _this.state = Object(
              _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ]
            )({}, INITIAL_STATE);
            return _this;
          }

          Object(
            _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ]
          )(SignUpForm, [
            {
              key: "handleChange",
              value: function handleChange(name, value) {
                var state = this.state;
                state[name] = value;
                this.setState({
                  state: state
                });
              }
            },
            {
              key: "render",
              value: function render() {
                var _this$props = this.props,
                  row = _this$props.row,
                  col = _this$props.col,
                  imageCol = _this$props.imageCol,
                  btnStyle = _this$props.btnStyle,
                  logoStyle = _this$props.logoStyle,
                  imageArea = _this$props.imageArea,
                  titleStyle = _this$props.titleStyle,
                  contentWrapper = _this$props.contentWrapper,
                  descriptionStyle = _this$props.descriptionStyle,
                  textInfoTint = _this$props.textInfoTint,
                  textInfoLink = _this$props.textInfoLink;
                var _this$state2 = this.state,
                  fullname = _this$state2.fullname,
                  number_phone = _this$state2.number_phone,
                  email = _this$state2.email,
                  password = _this$state2.password,
                  error = _this$state2.error;
                var isInvalid =
                  fullname === "" ||
                  number_phone === "" ||
                  email === "" ||
                  password === "";
                return __jsx(
                  _signup_styles__WEBPACK_IMPORTED_MODULE_19__["default"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 100
                    },
                    __self: this
                  },
                  __jsx(
                    reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_13__[
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
                          lineNumber: 101
                        },
                        __self: this
                      }
                    ),
                    __jsx(
                      reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_13__[
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
                            lineNumber: 102
                          },
                          __self: this
                        }
                      ),
                      __jsx(
                        reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_13__[
                          "default"
                        ],
                        Object(
                          _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            "default"
                          ]
                        )({}, contentWrapper, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 103
                          },
                          __self: this
                        }),
                        __jsx(
                          reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_16__[
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
                                lineNumber: 104
                              },
                              __self: this
                            }
                          )
                        ),
                        __jsx(
                          reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_14__[
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
                                lineNumber: 105
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
                              lineNumber: 109
                            },
                            __self: this
                          },
                          __jsx(
                            reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_17__[
                              "default"
                            ],
                            {
                              name: "fullname",
                              value: fullname,
                              onChange: this.handleChange.bind(
                                this,
                                "fullname"
                              ),
                              inputType: "text",
                              label: "Nama Lengkap",
                              placeholder: "Masukan nama lengkap Anda",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 110
                              },
                              __self: this
                            }
                          ),
                          __jsx(
                            reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_17__[
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
                                lineNumber: 117
                              },
                              __self: this
                            }
                          ),
                          __jsx(
                            reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_17__[
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
                                lineNumber: 124
                              },
                              __self: this
                            }
                          ),
                          __jsx(
                            reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_17__[
                              "default"
                            ],
                            {
                              name: "password",
                              value: password,
                              onChange: this.handleChange.bind(
                                this,
                                "password"
                              ),
                              inputType: "password",
                              label: "Kata Sandi",
                              placeholder: "Buat kata sandi Anda",
                              passwordShowHide: true,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 131
                              },
                              __self: this
                            }
                          ),
                          __jsx(
                            "div",
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 140
                              },
                              __self: this
                            },
                            __jsx(
                              reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_13__[
                                "default"
                              ],
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 141
                                },
                                __self: this
                              },
                              __jsx(
                                "div",
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 144
                                  },
                                  __self: this
                                },
                                __jsx("input", {
                                  type: "submit",
                                  value: "Daftar",
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 145
                                  },
                                  __self: this
                                })
                              ),
                              error &&
                                __jsx(
                                  _signup_styles__WEBPACK_IMPORTED_MODULE_19__[
                                    "InfoLabel"
                                  ],
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 155
                                    },
                                    __self: this
                                  },
                                  __jsx(
                                    reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_14__[
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
                                          lineNumber: 156
                                        },
                                        __self: this
                                      }
                                    )
                                  )
                                ),
                              __jsx(
                                _signup_styles__WEBPACK_IMPORTED_MODULE_19__[
                                  "InfoLabel"
                                ],
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 160
                                  },
                                  __self: this
                                },
                                __jsx(
                                  reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_14__[
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
                                        lineNumber: 161
                                      },
                                      __self: this
                                    }
                                  )
                                ),
                                __jsx(
                                  next_link__WEBPACK_IMPORTED_MODULE_11___default.a,
                                  {
                                    href: "/signin",
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 162
                                    },
                                    __self: this
                                  },
                                  __jsx(
                                    "a",
                                    {
                                      __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 163
                                      },
                                      __self: this
                                    },
                                    __jsx(
                                      reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_14__[
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
                                            lineNumber: 164
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
                      reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_13__[
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
                            lineNumber: 173
                          },
                          __self: this
                        }
                      ),
                      __jsx(
                        reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_13__[
                          "default"
                        ],
                        Object(
                          _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            "default"
                          ]
                        )({}, imageCol, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 174
                          },
                          __self: this
                        }),
                        __jsx(
                          reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_15__[
                            "default"
                          ],
                          {
                            href: "#",
                            logoSrc:
                              common_src_assets_image_app_logo2_png__WEBPACK_IMPORTED_MODULE_24___default.a,
                            title: "Dhakon",
                            logoStyle: logoStyle,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 175
                            },
                            __self: this
                          }
                        )
                      ),
                      __jsx(
                        reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_13__[
                          "default"
                        ],
                        Object(
                          _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            "default"
                          ]
                        )({}, imageArea, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 181
                          },
                          __self: this
                        }),
                        __jsx(
                          reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_18__[
                            "default"
                          ],
                          {
                            src:
                              common_src_assets_image_app_farmer_svg__WEBPACK_IMPORTED_MODULE_23___default.a,
                            alt: "Dhakon Image",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 182
                            },
                            __self: this
                          }
                        )
                      )
                    )
                  )
                );
              }
            }
          ]);

          return SignUpForm;
        })(react__WEBPACK_IMPORTED_MODULE_9__["Component"]); // Signup style props

      SignUpForm.propTypes = {
        row: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
        col: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
        imageCol: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
        logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
        imageArea: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
        image: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
        titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
        hintTextStyle:
          prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
        contentWrapper:
          prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
        descriptionStyle:
          prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
        textInfoTint: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
        textInfoLink: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object
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
      /* harmony default export */ __webpack_exports__["default"] = SignUpPage;

      /***/
    }
});
//# sourceMappingURL=signup.js.dcebbebfd64b7c62dd01.hot-update.js.map
