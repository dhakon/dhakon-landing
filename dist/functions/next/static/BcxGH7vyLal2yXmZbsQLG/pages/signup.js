(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    AoLp: function(e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, "InfoLabel", function() {
          return r;
        });
      var a = o("j/s1"),
        n = o("za5s"),
        i = a.d.div.withConfig({
          displayName: "signupstyles__SignupWrapper",
          componentId: "sc-1e1tpis-0"
        })(
          [
            "position:relative;background-color:",
            ";height:100vh;@media (max-width:1099px){overflow:hidden;}.button__wrapper{@media only screen and (max-width:480px){text-align:center;}}.col{position:relative;&.imageCol{background-color:",
            ";}@media only screen and (max-width:991px){width:100%;&.imageCol{background-color:",
            ";display:flex;flex:1;}}}"
          ],
          Object(n.a)("colors.white", "#ffffff"),
          Object(n.a)("colors.primary", "#F2B306"),
          Object(n.a)("colors.primary", "#F2B306")
        ),
        r = a.d.div.withConfig({
          displayName: "signupstyles__InfoLabel",
          componentId: "sc-1e1tpis-1"
        })(["display:flex;justify-content:center;margin-top:33px;"]);
      t.default = i;
    },
    TUO6: function(e, t) {
      e.exports =
        "/_next/static/images/logo2-459b30930d2147ee85ca426b08b153da.png";
    },
    YF8D: function(e, t, o) {
      "use strict";
      var a = o("pneb"),
        n = o("rNCn"),
        i = o("wk2l"),
        r = o("ERkP"),
        l = o.n(r),
        p = o("j/s1"),
        c = o("GkOb"),
        s = p.d.div.withConfig({
          displayName: "inputstyle__InputField",
          componentId: "sc-8lywy0-0"
        })(
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
          Object(c.C)("colors.labelColor", "#778CA3"),
          Object(c.C)("fontSizes.1", "12"),
          Object(c.C)("fontWeights.2", "400"),
          Object(c.C)("space.2", "5"),
          Object(c.C)("colors.textColor", "#484848"),
          Object(c.C)("colors.inactiveIcon", "#ebebeb"),
          Object(c.C)("colors.textPlaceholder", "#D1D8E0"),
          Object(c.C)("colors.secondary", "#2B2B2B"),
          Object(c.C)("colors.inactiveIcon", "#ebebeb"),
          Object(c.C)("colors.textColor", "#484848"),
          Object(c.C)("colors.primary", "#028489")
        ),
        u = p.d.button.withConfig({
          displayName: "inputstyle__EyeButton",
          componentId: "sc-8lywy0-1"
        })(
          [
            "width:43px;height:40px;border:0;padding:0;margin:0;top:0;right:0;position:absolute;outline:none;cursor:pointer;box-shadow:none;display:flex;align-items:center;justify-content:center;background-color:transparent;> span{width:12px;height:12px;display:block;border:solid 1px ",
            ";border-radius:75% 15%;transform:rotate(45deg);position:relative;&:before{content:'';display:block;width:4px;height:4px;border-radius:50%;left:3px;top:3px;position:absolute;border:solid 1px ",
            ";}}&.eye-closed{> span{&:after{content:'';display:block;width:1px;height:20px;left:calc(50% - 1px / 2);top:-4px;position:absolute;background-color:",
            ";transform:rotate(-12deg);}}}"
          ],
          Object(c.C)("colors.textColor", "#484848"),
          Object(c.C)("colors.textColor", "#484848"),
          Object(c.C)("colors.textColor", "#484848")
        ),
        d = s,
        h = l.a.createElement,
        b = function(e) {
          var t,
            o,
            l = e.label,
            p = (e.value, e.onBlur),
            c = e.onFocus,
            s = e.onChange,
            b = e.inputType,
            x = e.isMaterial,
            f = e.icon,
            g = e.iconPosition,
            m = e.passwordShowHide,
            w = e.className,
            y = e.placeholder,
            j = Object(i.a)(e, [
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
            ]),
            C = Object(r.useState)({ toggle: !1, focus: !1, value: "" }),
            v = C[0],
            O = C[1],
            k = function(e) {
              O(Object(n.a)({}, v, { focus: !0 })), c(e);
            },
            S = function(e) {
              O(Object(n.a)({}, v, { focus: !1 })), p(e);
            },
            _ = function(e) {
              O(Object(n.a)({}, v, { value: e.target.value })),
                s(e.target.value);
            },
            B = ["reusecore__input"];
          x && B.push("is-material"),
            f && g && B.push("icon-".concat(g)),
            w && B.push(w),
            l && (o = l.replace(/\s+/g, "_").toLowerCase()),
            y && (o = y.replace(/\s+/g, "_").toLowerCase());
          var N = !0 === x ? "bottom" : "top",
            W = l && h("label", { htmlFor: o }, l);
          switch (b) {
            case "textarea":
              t = h(
                "textarea",
                Object(a.a)({}, j, {
                  id: o,
                  name: o,
                  value: v.value,
                  onChange: _,
                  onBlur: S,
                  onFocus: k,
                  placeholder: y
                })
              );
              break;
            case "password":
              t = h(
                "div",
                { className: "field-wrapper" },
                h(
                  "input",
                  Object(a.a)({}, j, {
                    id: o,
                    name: o,
                    type: v.toggle ? "password" : "text",
                    value: v.value,
                    onChange: _,
                    onBlur: S,
                    onFocus: k,
                    placeholder: y
                  })
                ),
                m &&
                  h(
                    u,
                    {
                      onClick: function() {
                        O(Object(n.a)({}, v, { toggle: !v.toggle }));
                      },
                      className: v.toggle ? "eye" : "eye-closed"
                    },
                    h("span", null)
                  )
              );
              break;
            default:
              t = h(
                "div",
                { className: "field-wrapper" },
                h(
                  "input",
                  Object(a.a)({}, j, {
                    id: o,
                    name: o,
                    type: b,
                    value: v.value,
                    onChange: _,
                    onBlur: S,
                    onFocus: k,
                    placeholder: y
                  })
                ),
                f && h("span", { className: "input-icon" }, f)
              );
          }
          return h(
            d,
            {
              className: ""
                .concat(B.join(" "), " ")
                .concat(!0 === v.focus || "" !== v.value ? "is-focus" : "")
            },
            "top" === N && W,
            t,
            x && h("span", { className: "highlight" }),
            "bottom" === N && W
          );
        };
      b.defaultProps = {
        inputType: "text",
        isMaterial: !1,
        iconPosition: "left",
        onBlur: function() {},
        onFocus: function() {},
        onChange: function() {}
      };
      t.a = b;
    },
    bMuK: function(e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/signup",
        function() {
          var e = o("s7nH");
          return { page: e.default || e };
        }
      ]);
    },
    rTXN: function(e, t) {
      e.exports =
        "/_next/static/images/farmer-570a901099b499c4b4ad7e4aa615de07.svg";
    },
    rcog: function(e, t, o) {
      "use strict";
      var a = o("pneb"),
        n = o("wk2l"),
        i = o("ERkP"),
        r = o.n(i),
        l = o("Ax/r"),
        p = o("j/s1"),
        c = o("/MbW"),
        s = r.a.createElement,
        u = Object(p.d)("a").withConfig({
          displayName: "Link__LinkWrapper",
          componentId: "efswp7-0"
        })({ textDecoration: "none" }, c.a, Object(c.b)("Link")),
        d = function(e) {
          var t = e.children,
            o = Object(n.a)(e, ["children"]);
          return s(u, o, t);
        },
        h = d;
      d.defaultProps = { as: "a", m: 0, display: "inline-block" };
      var b = o("iP0v"),
        x = r.a.createElement,
        f = function(e) {
          var t = e.logoWrapperStyle,
            o = e.logoStyle,
            i = e.titleStyle,
            p = e.withAchor,
            c = e.anchorProps,
            s = e.logoSrc,
            u = e.title,
            d = Object(n.a)(e, [
              "logoWrapperStyle",
              "logoStyle",
              "titleStyle",
              "withAchor",
              "anchorProps",
              "logoSrc",
              "title"
            ]);
          return x(
            h,
            Object(a.a)({}, d, t),
            p
              ? x(
                  "a",
                  c,
                  s
                    ? x(b.a, Object(a.a)({ src: s, alt: u }, o))
                    : x(l.a, Object(a.a)({ content: u }, i))
                )
              : x(
                  r.a.Fragment,
                  null,
                  s
                    ? x(b.a, Object(a.a)({ src: s, alt: u }, o))
                    : x(l.a, Object(a.a)({ content: u }, i))
                )
          );
        };
      f.defaultProps = {
        logoWrapperStyle: {
          display: "inline-block",
          mr: "1rem",
          "a:hover,a:focus": { textDecoration: "none" }
        },
        titleStyle: {
          display: "inline-block",
          fontSize: "2rem",
          lineHeight: "inherit",
          whiteSpace: "nowrap"
        }
      };
      t.a = f;
    },
    s7nH: function(e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, "SignUpForm", function() {
          return E;
        });
      var a = o("pneb"),
        n = o("rNCn"),
        i = o("h7sq"),
        r = o("tS02"),
        l = o("/XES"),
        p = o("ztBH"),
        c = o("vTWr"),
        s = o("Fayl"),
        u = o("znL5"),
        d = o("ERkP"),
        h = o.n(d),
        b = o("jvFD"),
        x = o.n(b),
        f = o("7xIC"),
        g = o.n(f),
        m = o("bKIR"),
        w = o("Ax/r"),
        y = o("rcog"),
        j = o("rNkn"),
        C = o("YF8D"),
        v = o("YhXy"),
        O = o("iP0v"),
        k = o("AoLp"),
        S = o("jukB"),
        _ = o("htXD"),
        B = o("rfOZ"),
        N = o("rTXN"),
        W = o.n(N),
        I = o("TUO6"),
        A = o.n(I),
        P = h.a.createElement,
        z = function(e, t) {
          return function() {
            return Object(u.a)({}, e, t);
          };
        },
        T = {
          fullname: "",
          number_phone: null,
          email: "",
          password: "",
          error: null
        },
        E = (function(e) {
          function t(e) {
            var o;
            return (
              Object(i.a)(this, t),
              (o = Object(l.a)(this, Object(p.a)(t).call(this, e))),
              Object(u.a)(Object(c.a)(o), "onSubmit", function(e) {
                var t = o.state,
                  a = t.fullname,
                  i = t.email,
                  r = t.password;
                _.a
                  .doCreateUserWithEmailAndPassword(i, r)
                  .then(function(e) {
                    _.b
                      .doCreateUser(e.user.uid, a, i)
                      .then(function() {
                        o.setState(function() {
                          return Object(n.a)({}, T);
                        }),
                          g.a.push(B.a);
                      })
                      .catch(function(e) {
                        o.setState(z("error", e));
                      });
                  })
                  .catch(function(e) {
                    o.setState(z("error", e));
                  }),
                  e.preventDefault();
              }),
              (o.state = Object(n.a)({}, T)),
              o
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "handleChange",
                value: function(e, t) {
                  var o = this.state;
                  (o[e] = t), this.setState({ state: o });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.row,
                    o = e.col,
                    n = e.imageCol,
                    i = e.btnStyle,
                    r = e.logoStyle,
                    l = e.imageArea,
                    p = e.titleStyle,
                    c = e.contentWrapper,
                    s = e.descriptionStyle,
                    u = e.textInfoTint,
                    d = e.textInfoTintError,
                    h = e.textInfoLink,
                    b = this.state,
                    f = b.fullname,
                    g = b.number_phone,
                    S = b.email,
                    _ = b.password,
                    B = b.error,
                    N = "" === f || "" === g || "" === S || "" === _;
                  return P(
                    k.default,
                    null,
                    P(
                      m.a,
                      Object(a.a)({ className: "row" }, t),
                      P(
                        m.a,
                        Object(a.a)({ className: "col" }, o),
                        P(
                          m.a,
                          c,
                          P(j.a, Object(a.a)({ content: "Daftar" }, p)),
                          P(
                            w.a,
                            Object(a.a)(
                              {
                                content:
                                  "Silahkan masukan data diri anda untuk mendapatkan pelayanan terbaik dari dhakon"
                              },
                              s
                            )
                          ),
                          P(
                            "form",
                            { onSubmit: this.onSubmit },
                            P(C.a, {
                              name: "fullname",
                              value: f,
                              onChange: this.handleChange.bind(
                                this,
                                "fullname"
                              ),
                              inputType: "text",
                              label: "Nama Lengkap",
                              placeholder: "Masukan nama lengkap Anda"
                            }),
                            P(C.a, {
                              name: "number_phone",
                              value: g,
                              onChange: this.handleChange.bind(
                                this,
                                "number_phone"
                              ),
                              inputType: "number",
                              label: "Nomor Handphone/Whatsapp",
                              placeholder: "Masukan Nomor HP/WA Anda"
                            }),
                            P(C.a, {
                              name: "email",
                              value: S,
                              onChange: this.handleChange.bind(this, "email"),
                              inputType: "email",
                              label: "Email",
                              placeholder: "Masukan email Anda jika memiliki"
                            }),
                            P(C.a, {
                              name: "password",
                              value: _,
                              onChange: this.handleChange.bind(
                                this,
                                "password"
                              ),
                              inputType: "password",
                              label: "Kata Sandi",
                              placeholder: "Buat kata sandi Anda",
                              autoComplete: "off",
                              passwordShowHide: !0
                            }),
                            P(
                              "div",
                              null,
                              P(
                                m.a,
                                null,
                                P(
                                  x.a,
                                  null,
                                  P(
                                    v.a,
                                    Object(a.a)(
                                      { type: "submit", disabled: N },
                                      i,
                                      { title: "Daftar Sekarang" }
                                    )
                                  )
                                ),
                                B &&
                                  P(
                                    k.InfoLabel,
                                    null,
                                    P(
                                      w.a,
                                      Object(a.a)({ content: B.message }, d)
                                    )
                                  ),
                                P(
                                  k.InfoLabel,
                                  null,
                                  P(
                                    w.a,
                                    Object(a.a)(
                                      { content: "Saya sudah punya dhakon!" },
                                      u
                                    )
                                  ),
                                  P(
                                    x.a,
                                    { href: "/signin" },
                                    P(
                                      w.a,
                                      Object(a.a)(
                                        { content: "Langsung Masuk" },
                                        h
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      P(
                        m.a,
                        Object(a.a)({ className: "col imageCol" }, o),
                        P(
                          m.a,
                          n,
                          P(y.a, {
                            href: "#",
                            logoSrc: A.a,
                            title: "Dhakon",
                            logoStyle: r
                          })
                        ),
                        P(m.a, l, P(O.a, { src: W.a, alt: "Dhakon Image" }))
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(d.Component);
      (E.defaultProps = {
        row: { flexBox: !0, flexWrap: "wrap" },
        col: { width: [1, 0.5], justifyContent: "center" },
        logoStyle: { width: "230px", height: "auto", ml: "40px", mt: "30px" },
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
        titleStyle: {
          fontSize: ["20px", "24px", "40px", "40px", "40px"],
          fontWeight: "900",
          letterSpacing: "-0.01px",
          color: "#2B2B2B",
          mt: "35px",
          mb: "10px"
        },
        descriptionStyle: {
          fontSize: ["10px", "14px", "16px", "16px", "16px"],
          color: "#2B2B2B",
          mb: "30px"
        },
        contentWrapper: {
          pt: ["32px", "56px"],
          pl: ["20px", "32px", "50px", "50px", "150px"],
          pr: ["20px", "32px", "50px", "50px", "150px"],
          pb: ["32px", "56px"],
          backgroundColor: "#fff",
          height: "100vh"
        },
        btnStyle: {
          minWidth: "100%",
          fontSize: "14px",
          fontWeight: "900",
          pl: "22px",
          pr: "22px",
          mt: "20px",
          colors: "primaryWithBg"
        },
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
        textInfoTintError: {
          textAlign: "center",
          fontSize: ["12px", "14px", "15px", "15px", "15px"],
          fontWeight: "500",
          color: "#eb3b5a",
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
      }),
        (t.default = function() {
          return P(S.a, null, P(E, null));
        });
    }
  },
  [["bMuK", 1, 0]]
]);
