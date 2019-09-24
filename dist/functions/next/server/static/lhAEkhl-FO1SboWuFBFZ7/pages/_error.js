module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "/MbW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rNCn");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/** this is our Base Component every components must be Extend it */

const themed = key => props => props.theme[key];
const base = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(() => ({
  boxSizing: 'border-box'
}), styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["order"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
base.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Y0NT");


/***/ }),

/***/ "2MIm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("uFB0"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "5Tpg":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("FIas");

var _Object$defineProperty = __webpack_require__("LcAa");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

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

/***/ }),

/***/ "7xIC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Tpg");

var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("uFB0"));

var _defineProperty = _interopRequireDefault(__webpack_require__("LcAa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("2MIm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
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
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
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
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "8k7s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "Ax/r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "sc-15lufec-0"
})(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Text'));

const Text = (_ref) => {
  let {
    content
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["content"]);

  return __jsx(TextWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Text);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FIas":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "H4oa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetCSS; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mXe9");
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_flaticon_css__WEBPACK_IMPORTED_MODULE_1__);


const ResetCSS = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
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

/***/ }),

/***/ "JeHL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "KeDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Tpg");

var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("JeHL"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("7xIC"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
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
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
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

  return observer = new IntersectionObserver(entries => {
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
  }, {
    rootMargin: '200px'
  });
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
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

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

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "LcAa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "OCF2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "QkGq":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/home");

/***/ }),

/***/ "SwrX":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/ccw");

/***/ }),

/***/ "TPw6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "Y0NT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("rNkn");

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Image/index.js
var Image = __webpack_require__("iP0v");

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Button/index.js + 5 modules
var Button = __webpack_require__("YhXy");

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/common/src/assets/image/404.svg
var _404 = __webpack_require__("Y1rU");
var _404_default = /*#__PURE__*/__webpack_require__.n(_404);

// EXTERNAL MODULE: external "react-icons-kit/entypo/home"
var home_ = __webpack_require__("QkGq");

// EXTERNAL MODULE: external "react-icons-kit/entypo/ccw"
var ccw_ = __webpack_require__("SwrX");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./containers/Error/error.style.js

const ErrorWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "errorstyle__ErrorWrapper",
  componentId: "sc-1yedwaf-0"
})(["padding:80px 15px;height:100vh;display:flex;align-items:center;"]);
const ErrorConatent = external_styled_components_default.a.div.withConfig({
  displayName: "errorstyle__ErrorConatent",
  componentId: "sc-1yedwaf-1"
})(["width:450px;max-width:100%;margin:0 auto;.image-wrapper{@media (max-width:1480px){max-width:80%;margin-left:auto;margin-right:auto;}}"]);
const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "errorstyle__ButtonWrapper",
  componentId: "sc-1yedwaf-2"
})(["font-family:'roboto';text-align:center;> *{margin:0 8px;}"]);
// CONCATENATED MODULE: ./containers/Error/index.js

var __jsx = external_react_default.a.createElement;













const ErrorSec = ({
  imageWrapper,
  title,
  text,
  reloadButton,
  homeButton
}) => {
  const pageReload = () => {
    window.location.reload();
  };

  return __jsx(ErrorWrapper, null, __jsx(ErrorConatent, null, __jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({}, imageWrapper, {
    className: "image-wrapper"
  }), __jsx(Image["a" /* default */], {
    src: _404_default.a,
    alt: "404"
  })), __jsx(Heading["a" /* default */], Object(esm_extends["a" /* default */])({}, title, {
    content: "Page not found!"
  })), __jsx(Text["a" /* default */], Object(esm_extends["a" /* default */])({}, text, {
    content: "Looks like the page you're trying to visit dosen't exist. Please check the URL and try your luck again."
  })), __jsx(ButtonWrapper, null, __jsx(Button["a" /* default */], Object(esm_extends["a" /* default */])({}, reloadButton, {
    title: "Reload Page",
    icon: __jsx(external_react_icons_kit_default.a, {
      icon: ccw_["ccw"],
      size: 24
    }),
    className: "domain_search_button",
    onClick: pageReload
  })), __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", null, __jsx(Button["a" /* default */], Object(esm_extends["a" /* default */])({}, homeButton, {
    title: "Go Home",
    icon: __jsx(external_react_icons_kit_default.a, {
      icon: home_["home"],
      size: 24
    }),
    className: "domain_search_button"
  })))))));
};

ErrorSec.defaultProps = {
  imageWrapper: {
    mb: ['40px', '55px']
  },
  title: {
    fontSize: ['26px', '32px', '38px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '35px'],
    lineHeight: '1.31',
    textAlign: 'center',
    fontFamily: 'poppins',
    fontWeight: '600'
  },
  text: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48',
    lineHeight: '2',
    mb: ['30px', '40px', '50px', '60px'],
    textAlign: 'center',
    fontFamily: 'lato'
  },
  reloadButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#eaa03b',
    fontFamily: 'lato'
  },
  homeButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#e2e7f0',
    fontFamily: 'lato'
  }
};
/* harmony default export */ var containers_Error = (ErrorSec);
// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/common/src/assets/css/style.js
var style = __webpack_require__("H4oa");

// CONCATENATED MODULE: ./pages/_error.js
var _error_jsx = external_react_default.a.createElement;





class _error_Error extends external_react_default.a.Component {
  static async getInitialProps({
    res,
    err
  }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return {
      statusCode
    };
  }

  render() {
    return _error_jsx(external_react_default.a.Fragment, null, _error_jsx(head_default.a, null, _error_jsx("title", null, "404: Not found"), _error_jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap",
      rel: "stylesheet"
    })), _error_jsx(style["a" /* ResetCSS */], null), _error_jsx("div", null, this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : _error_jsx(containers_Error, null)));
  }

}

/* harmony default export */ var _error = __webpack_exports__["default"] = (_error_Error);

/***/ }),

/***/ "Y1rU":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjIuODcgMTk2LjM0Ij48ZGVmcz48c3R5bGU+LmNscy05e2ZpbGw6I2VlYmQ0Zn0uY2xzLTEwe2ZpbGw6I2Y3ZWM0MX0uY2xzLTExe2ZpbGw6I2U5YTcyN308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iT0JKRUNUUyI+PGNpcmNsZSBjeD0iMTMxLjYxIiBjeT0iMTAzLjE5IiByPSI5My4xNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDEzMS42MTQgMTAzLjE5NCkiIG9wYWNpdHk9Ii4xIiBmaWxsPSIjZjFjYjZmIi8+PHBhdGggZD0iTTAgMTIzLjU5YTYgNiAwIDAxLjcyLTNMNDUuNiAzMi4yM2E1Ljg1IDUuODUgMCAwMTUuNTQtMy41N0E2LjMgNi4zIDAgMDE1NSAzMC4wOWE0LjIxIDQuMjEgMCAwMTEuODggMy40IDUuODkgNS44OSAwIDAxLS41NCAyLjMyTDE1IDExNy4zNmgzNS4wN1Y4Mi41M1E1MC4wNyA3OCA1NiA3OGE3LjM4IDcuMzggMCAwMTQuMTIgMS4xNyAzLjc2IDMuNzYgMCAwMTEuNzggMy4zNHYzNC44M2g5Ljg0QTMuODMgMy44MyAwIDAxNzUgMTE5YTYuMzUgNi4zNSAwIDAxMS4xNiAzLjczIDYuMjUgNi4yNSAwIDAxLTEuMjUgMy44OSAzLjg4IDMuODggMCAwMS0zLjIyIDEuNjVoLTkuODJ2MjYuNDFhNCA0IDAgMDEtMS43OCAzLjQ0IDcgNyAwIDAxLTQuMDkgMS4yNiA2Ljg0IDYuODQgMCAwMS00LjItMS4yNiA0LjA4IDQuMDggMCAwMS0xLjctMy40NHYtMjYuNDFINC42NXEtNC42NSAwLTQuNjUtNC42OHptMTg2LjY5IDBhNiA2IDAgMDEuNzItM2w0NC44OC04OC4zM2E1Ljg1IDUuODUgMCAwMTUuNTQtMy41NyA2LjMgNi4zIDAgMDEzLjg1IDEuNDMgNC4yMSA0LjIxIDAgMDExLjg4IDMuNCA1Ljg5IDUuODkgMCAwMS0uNTQgMi4zMmwtNDEuMzEgODEuNTVoMzVWODIuNTNxMC00LjUyIDUuOS00LjUxYTcuMzggNy4zOCAwIDAxNC4xMiAxLjE3IDMuNzYgMy43NiAwIDAxMS43OCAzLjM0djM0LjgzaDkuODRhMy44MyAzLjgzIDAgMDEzLjMxIDEuNjQgNi4zNSA2LjM1IDAgMDExLjE2IDMuNzMgNi4yNSA2LjI1IDAgMDEtMS4yNSAzLjg5IDMuODggMy44OCAwIDAxLTMuMjIgMS42NWgtOS44NHYyNi40MWE0IDQgMCAwMS0xLjc4IDMuNDQgNyA3IDAgMDEtNC4xMiAxLjI2IDYuODQgNi44NCAwIDAxLTQuMi0xLjI2IDQuMDggNC4wOCAwIDAxLTEuNy0zLjQ0di0yNi40MWgtNDUuMzdxLTQuNjUgMC00LjY1LTQuNjh6IiBmaWxsPSIjMzYzNjM2Ii8+PHBhdGggZmlsbD0iI2Q4YTA0NSIgZD0iTTE2Ny4yIDU5Ljk4bC0xMC4xMiA4Ljg3LTcuNTMtMTIuNDctMTEuNDIgOC44My0yLjM4IDEzLjUtMTUuMDIgNi41djI4LjU2aDI2Ljc0bDEyLjczLTE1LjMyIDEwLjY0LTIxLjU1LTMuNjQtMTYuOTJ6Ii8+PHBhdGggZD0iTTkzLjUgNzIuODlzLTIuNSAxMi4xOSAxNC42OSAzNi41N2MwIDAgNS42MyA2Ljg4IDQuNjkgMTguNDUgMCAwIC44IDExIDcgMTEuMzlzMzAuMTMgMCAzMC4xMyAwYTkuNCA5LjQgMCAwMDcuNjQtOS4xOWMuMzQtOC4wNSA3LjU0LTI1LjM1IDEwLjc5LTI5LjI5czEzLjg4LTIyLjEgNy44OC00MC43N2MwIDAtNy44OC0xNi43OS0xMS42NS0xNy42NWwzLjc3IDI2LjM5LTIuOTEgNS4xM2gtNC4xMWwtOS41OSAxNC4yMi0xNS4yNSAxLjU0LTcuNTQgMTMtNC4yOC0zLjc2LTEuMi05Ljc3LTE0LjIxLS4xNS02Ljg1LTEyLjE2eiIgZmlsbD0iI2YxY2I2ZiIvPjxwYXRoIGQ9Ik0xMjkuMDUgMTAxLjY5bDIuNTYgNi45OS0xLjI4IDcuNzJtMS4yOC04LjU3bDkuNTkgNC4yNy00Ljc5IDE5LjQybTE1LjQzLTQzLjM4bDMuMTggMTAuNDQtMS41OSA5LjI1bTEuNTktOS4yNWw2LjUzLTcuNjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBvcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0xNDkuNDIgMTQ2LjQ5aC0yNy4zM2EzIDMgMCAwMS0zLTMgMyAzIDAgMDEzLTNoMjcuMzNhMyAzIDAgMDEzIDMgMyAzIDAgMDEtMyAzem0wIDEwLjU4aC0yNy4zM2EzIDMgMCAwMS0zLTMgMyAzIDAgMDEzLTNoMjcuMzNhMyAzIDAgMDEzIDMgMyAzIDAgMDEtMyAzeiIgZmlsbD0iIzY2NiIvPjxwYXRoIGQ9Ik0xMjEuOSAxNDUuNjVoMjcuN2EyLjgzIDIuODMgMCAwMTIuODMgMi44MyAyLjg0IDIuODQgMCAwMS0yLjgzIDIuODNoLTI3LjdhMi44NSAyLjg1IDAgMDEtMi44My0yLjgzIDIuODQgMi44NCAwIDAxMi44My0yLjgzem0yLjE3IDEyLjczSDE0OHMtMTAuNTggMTQuOTMtMjMuOTMgMHoiIGZpbGw9IiM3ZjdmN2YiLz48cGF0aCBjbGFzcz0iY2xzLTkiIGQ9Ik0xMTUuNjYgNjEuMTVzLS4zOS0uMjEtMS0uNTljLS4zMi0uMTktLjczLS40MS0xLjE3LS42OHMtMS0uNTYtMS40OC0uOWMtMS4xLS42NC0yLjMzLTEuNDMtMy42Ni0yLjIzbC0xLS42MmMtLjM0LS4yLS42OS0uNC0xLS42Mi0uNjktLjQzLTEuNDEtLjgxLTIuMTItMS4yM3MtMS40NC0uNzctMi4xMy0xLjE4TDk5LjkzIDUybC0yLS45MWMtLjY1LS4yNS0xLjI2LS41Mi0xLjg0LS43NnMtMS4wOS0uMzMtMS42LS41MS0uOTItLjI0LTEuMjgtLjM2Yy0uNzItLjE5LTEuMTUtLjMzLTEuMTUtLjMzcy40Mi0uMTIgMS4xOC0uMjVhNy4xNCA3LjE0IDAgMDExLjM4LS4xOGgxLjgyYy42NyAwIDEuMzguMTYgMi4xNC4yOHMxLjUxLjM4IDIuMzIuNjEgMS41OC41OCAyLjM4LjkyIDEuNTcuNzYgMi4zMyAxLjIgMS41MS44OCAyLjIgMS4zOWEyNC41IDI0LjUgMCAwMTIgMS41MSAyOC40MSAyOC40MSAwIDAxMy4yMyAzLjA2IDIzLjc4IDIzLjc4IDAgMDEyIDIuNDYgMTEuODEgMTEuODEgMCAwMS42MiAxLjAyeiIvPjxwYXRoIGNsYXNzPSJjbHMtMTAiIGQ9Ik0xNDAuODYgNTZhMTIuNzEgMTIuNzEgMCAwMS4zNS0xLjY4Yy4xMy0uNTQuMzMtMS4xNy41Ny0xLjg5YTI0IDI0IDAgMDEuOTUtMi4zOGMuMTktLjQzLjM5LS44OC42MS0xLjM0cy40OS0uOTEuNzUtMS4zOGMuNS0xIDEuMTUtMS45IDEuNzktMi45LjM0LS40OC43Mi0uOTUgMS4wOS0xLjQ0YTE3LjU0IDE3LjU0IDAgMDExLjE4LTEuNDMgMzAuNzcgMzAuNzcgMCAwMTIuNjYtMi43bDEuNDMtMS4yNSAxLjU0LTEuMTJhMjIuMyAyMi4zIDAgMDEzLjEzLTEuOTIgMjAuNDMgMjAuNDMgMCAwMTMuMDktMS40NWMuNTEtLjE5IDEtLjQxIDEuNDgtLjU3bDEuNDQtLjM2YTIzLjIxIDIzLjIxIDAgMDEyLjUtLjU2Yy43Ni0uMDkgMS40My0uMTQgMi0uMTkgMS4wOS0uMDkgMS43MS0uMSAxLjcxLS4xcy0uNTguMjctMS41Ny42OGMtLjUuMi0xLjEuNDUtMS44LjdzLTEuNDEuNy0yLjIzIDEuMDZsLTEuMjYuNi0xLjMuNzRhMjkuMDYgMjkuMDYgMCAwMC0yLjczIDEuNjdsLTEuMzkuOTRjLS40OS4yOS0uOS43LTEuMzcgMWwtMS4zOCAxLjA3LTEuMzEgMS4yYy0uOTEuNzUtMS43IDEuNjMtMi41MyAyLjQ0UzE0OC43MSA0NS4xOCAxNDggNDZzLTEuNDMgMS42Ny0yIDIuNTEtMS4yMiAxLjYtMS43MyAyLjM1LTEgMS40NC0xLjQxIDItLjc3IDEuMTctMSAxLjYzYy0uNjkuOTQtMSAxLjUxLTEgMS41MXptLTE1Ljk2LTMuNTFsLTUuMTMtNS4zOC0yLjQ4LTIuNTYtMi44LTIuODFjLS45NC0xLTItMS45My0zLTNzLTIuMTEtMi0zLjItMy0yLjE1LTItMy4yNi0yLjg4LTIuMTQtMS44OC0zLjI0LTIuNjktMi4wOC0xLjcxLTMuMTItMi40MWwtMS40OC0xLjA4YTE3IDE3IDAgMDAtMS4zOS0xYy0uOTItLjU5LTEuNzUtMS4xNy0yLjUtMS42OHMtMS40My0uODctMi0xLjIxYy0xLjExLS42OC0xLjc0LTEuMS0xLjc0LTEuMXMuNzMuMTggMiAuNTZjLjYzLjIgMS40MS40IDIuMjYuNzRzMS44Ljc1IDIuODMgMS4yMkEzNS4yOCAzNS4yOCAwIDAxOTkuODYgMjZhMzguMTggMzguMTggMCAwMTMuNDYgMi4xNmMxLjE5Ljc3IDIuMzQgMS42NiAzLjUxIDIuNTdzMi4yOCAxLjkzIDMuNDMgMi45MSAyLjE3IDIuMDkgMy4yMiAzLjEzIDIgMi4xNCAyLjkxIDMuMjEgMS43OCAyLjEyIDIuNTYgMy4xNSAxLjQ5IDIgMi4xMyAyLjkzYTUzLjE4IDUzLjE4IDAgMDEyLjkyIDQuNmMuNTkgMS4xNC45IDEuODMuOSAxLjgzeiIvPjxwYXRoIGNsYXNzPSJjbHMtOSIgZD0iTTEzMC43MSA0MS4xN3YtMS41NmE0MC4yOSA0MC4yOSAwIDAxLjQzLTQuMDljLjE0LS44NC4yNy0xLjc1LjQ5LTIuN3MuNDEtMiAuNjktMyAuNTgtMi4wOC45Mi0zLjE1Ljc1LTIuMTIgMS4xMy0zLjE5Ljg4LTIuMSAxLjM0LTMuMTIgMS0yIDEuNS0yLjkzYTQxLjA3IDQxLjA3IDAgMDEzLjIzLTQuODljLjU0LS42NyAxLjA3LTEuMjYgMS41My0xLjc4YTEzLjQ4IDEzLjQ4IDAgMDExLjI5LTEuMjZjLjczLS42OCAxLjE4LTEgMS4xOC0xcy0uMjUuNTMtLjcyIDEuNGMtLjIyLjQ0LS41NC45My0uODMgMS41NXMtLjYyIDEuMy0xIDItLjcxIDEuNTgtMS4xMyAyLjQyLS43NSAxLjgtMS4xOSAyLjcyLS44MSAxLjkzLTEuMjIgMi45M2wtMS4yMiAzYy0xLjU4IDQuMTMtMy4xNiA4LjI3LTQuMzUgMTEuMzctLjU5IDEuNTctMS4xMiAyLjg3LTEuNDkgMy43OHMtLjU4IDEuNS0uNTggMS41eiIvPjxwYXRoIGNsYXNzPSJjbHMtMTAiIGQ9Ik04Ny4zIDI3LjM5QTIxLjMxIDIxLjMxIDAgMDE4Ni4xIDI0YTMzLjcgMzMuNyAwIDAxLS43Ni0zLjQyIDM0LjIyIDM0LjIyIDAgMDEtLjQxLTMuNDkgMjAuMTggMjAuMTggMCAwMTAtMy41NiAyMC4zNSAyMC4zNSAwIDAxMS4yIDMuMzUgMzQuODMgMzQuODMgMCAwMTEuMTcgNi45MSAyMC4xOCAyMC4xOCAwIDAxMCAzLjZ6Ii8+PHBhdGggY2xhc3M9ImNscy0xMCIgZD0iTTc5LjgyIDIzLjY0YTIwLjE5IDIwLjE5IDAgMDEyLjg4LTIuMTMgMzQuOCAzNC44IDAgMDE2LjMtMy4xNiAyMC4zIDIwLjMgMCAwMTMuNDMtMSAyMC42OSAyMC42OSAwIDAxLTIuODcgMi4xMyAzMi4yNCAzMi4yNCAwIDAxLTMuMDggMS43MyAzMy4yNiAzMy4yNiAwIDAxLTMuMjMgMS40MiAyMS42IDIxLjYgMCAwMS0zLjQzIDEuMDF6Ii8+PHBhdGggY2xhc3M9ImNscy0xMSIgZD0iTTkxLjQ4IDUzLjgzYTEyLjEgMTIuMSAwIDAxLTEuMTktMS40Yy0uMzQtLjQzLS43LTEtMS4wNy0xLjUxcy0uNzMtMS4yLTEuMDktMS44MmEyNi44OSAyNi44OSAwIDAxLTEuNjYtMy42IDEyLjM0IDEyLjM0IDAgMDEtLjU0LTEuNzYgMTMuMjkgMTMuMjkgMCAwMTEuMTkgMS40IDI2LjA5IDI2LjA5IDAgMDEyLjE1IDMuMzNjLjM0LjY0LjY4IDEuMjggMSAxLjg5cy41MyAxLjIuNzIgMS43MmExNC40IDE0LjQgMCAwMS40OSAxLjc1eiIvPjxwYXRoIGNsYXNzPSJjbHMtMTEiIGQ9Ik04NC42NiA1Mi45NGExMi43NiAxMi43NiAwIDAxMS0xLjU2Yy4zMi0uNDUuNzEtMSAxLjE1LTEuNDdzLjkzLTEgMS40My0xLjU4YTMwLjIzIDMwLjIzIDAgMDEzLTIuNjYgMTIuNTcgMTIuNTcgMCAwMTEuNTQtMSAxMy43MyAxMy43MyAwIDAxLTEgMS41NiAyOC41NSAyOC41NSAwIDAxLTIuNTggM2MtLjUyLjUxLTEgMS0xLjU0IDEuNDdzLTEgLjg2LTEuNDQgMS4xOWExNC4xIDE0LjEgMCAwMS0xLjU2IDEuMDV6bTU1LjUtNDcuMThhMTMuNDEgMTMuNDEgMCAwMTItLjI3Yy41OSAwIDEuMjktLjA4IDItLjA4czEuNTMgMCAyLjMyLjA3YTMwLjU3IDMwLjU3IDAgMDE0LjMxLjYxIDE0LjMyIDE0LjMyIDAgMDEyIC41NSAxNS42MSAxNS42MSAwIDAxLTIgLjI3IDMxLjU5IDMxLjU5IDAgMDEtNC4zNiAwYy0uNzkgMC0xLjU3LS4xNC0yLjMxLS4yNXMtMS40Mi0uMjItMi0uMzZhMTQuOSAxNC45IDAgMDEtMS45Ni0uNTR6Ii8+PHBhdGggY2xhc3M9ImNscy0xMSIgZD0iTTE0NSAwYTE0LjYgMTQuNiAwIDAxLjg0IDEuODUgMjAuNCAyMC40IDAgMDEuNjcgMS45M2MuMjIuNzIuNDMgMS40OC42MSAyLjI2YTI5Ljg0IDI5Ljg0IDAgMDEuNjggNC4zMyAxNC4zMiAxNC4zMiAwIDAxMCAyIDE0LjgyIDE0LjgyIDAgMDEtLjg0LTEuODQgMzEuNTUgMzEuNTUgMCAwMS0xLjI4LTQuMTljLS4xNy0uNzgtLjMyLTEuNTYtLjQzLTIuM3MtLjItMS40My0uMjUtMkExNC40NyAxNC40NyAwIDAxMTQ1IDB6Ii8+PHBhdGggY2xhc3M9ImNscy0xMCIgZD0iTTE2Ny42NSAyNmExOSAxOSAwIDAxMyAxLjY3QTM0LjczIDM0LjczIDAgMDExNzYgMzJhMTkuODMgMTkuODMgMCAwMTIuMjggMi42MSAxOS44MSAxOS44MSAwIDAxLTMtMS42NyAzMC40IDMwLjQgMCAwMS0yLjc2LTIgMzAuNTMgMzAuNTMgMCAwMS0yLjU2LTIuMjcgMjAuNCAyMC40IDAgMDEtMi4zMS0yLjY3eiIvPjxwYXRoIGNsYXNzPSJjbHMtMTAiIGQ9Ik0xNzUuNTMgMjMuOTJhMjAgMjAgMCAwMS0uNzIgMy40MWMtLjMyIDEuMTEtLjcgMi4xOS0xLjEyIDMuMjVhMzIuNiAzMi42IDAgMDEtMS40NCAzLjEyIDE5LjkyIDE5LjkyIDAgMDEtMS44NCAzIDIwLjI0IDIwLjI0IDAgMDEuNzItMy40MWMuMzEtMS4xLjctMi4xOCAxLjEyLTMuMjVhMzMuNzcgMzMuNzcgMCAwMTEuNDQtMy4xMiAxOS45MiAxOS45MiAwIDAxMS44NC0zeiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "YhXy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("rNCn");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/theme/customVariant.js

const buttonStyle = Object(external_styled_system_["variant"])({
  key: 'buttonStyles'
});
const colorStyle = Object(external_styled_system_["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
const sizeStyle = Object(external_styled_system_["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
const cards = Object(external_styled_system_["variant"])({
  key: 'cards'
});

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/base.js
var base = __webpack_require__("/MbW");

// CONCATENATED MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Button/button.style.js





const ButtonStyle = external_styled_components_default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "ntq24p-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;border-radius:4px;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.black', '#2B2B2B'), Object(external_styled_system_["themeGet"])('heights.3', '48'), Object(external_styled_system_["themeGet"])('widths.3', '48'), Object(external_styled_system_["themeGet"])('radius.0', '4'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('fontWeights.4', '500'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.4', '15'), Object(external_styled_system_["themeGet"])('space.4', '15'), Object(external_styled_system_["themeGet"])('space.1', '4'), Object(external_styled_system_["themeGet"])('space.1', '4'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), external_styled_system_["alignItems"], external_styled_system_["boxShadow"], buttonStyle, colorStyle, sizeStyle, base["a" /* base */]); // prop types can also be added from the style functions

ButtonStyle.propTypes = Object(objectSpread["a" /* default */])({}, external_styled_system_["alignItems"].propTypes, external_styled_system_["boxShadow"].propTypes, external_styled_system_["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ var button_style = (ButtonStyle);
// CONCATENATED MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Animation/index.js

const spinner = Object(external_styled_components_["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
const AnimSpinner = Object(external_styled_components_["css"])(["animation:", " 1s linear infinite;"], spinner);

// CONCATENATED MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Loader/loader.style.js






const LoaderStyle = external_styled_components_default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "sc-6byg9m-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], props => props.loaderColor ? props.loaderColor : '#000000', AnimSpinner, colorStyle, base["a" /* base */]); // prop types can also be added from the style functions

LoaderStyle.propTypes = Object(objectSpread["a" /* default */])({}, external_styled_system_["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ var loader_style = (LoaderStyle);
// CONCATENATED MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Loader/index.js


var __jsx = external_react_default.a.createElement;



const Loader = (_ref) => {
  let {
    loaderColor,
    className
  } = _ref,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(loader_style, Object(esm_extends["a" /* default */])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props));
};

Loader.defaultProps = {};
/* harmony default export */ var elements_Loader = (Loader);
// CONCATENATED MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/reusecore/src/elements/Button/index.js


var Button_jsx = external_react_default.a.createElement;




const Button = (_ref) => {
  let {
    type,
    title,
    icon,
    disabled,
    iconPosition,
    onClick,
    loader,
    loaderColor,
    isMaterial,
    isLoading,
    className
  } = _ref,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  const buttonIcon = isLoading !== false ? Button_jsx(external_react_["Fragment"], null, loader ? loader : Button_jsx(elements_Loader, {
    loaderColor: loaderColor || '#30C56D'
  })) : icon && Button_jsx("span", {
    className: "btn-icon"
  }, icon); // set icon position

  const position = iconPosition || 'right';
  return Button_jsx(button_style, Object(esm_extends["a" /* default */])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props), position === 'left' && buttonIcon, title && Button_jsx("span", {
    className: "btn-text"
  }, title), position === 'right' && buttonIcon);
};

Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ var elements_Button = __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bKIR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "m50ttq-0"
})(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Box'), props => props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])({
  display: 'flex'
}, styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('FlexBox')));

const Box = (_ref) => {
  let {
    children
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["children"]);

  return __jsx(BoxWrapper, props, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Box);
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "iP0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('img').withConfig({
  displayName: "Image__ImageWrapper",
  componentId: "xwdy9p-0"
})({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Image'));

const Image = (_ref) => {
  let {
    src,
    alt
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["src", "alt"]);

  return __jsx(ImageWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    src: src,
    alt: alt
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (Image);
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lpv4":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "mXe9":
/***/ (function(module, exports) {



/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pneb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OCF2");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rNCn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FIas");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8k7s");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TPw6");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("znL5");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "rNkn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "vaqy1n-0"
})(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Heading'));

const Heading = (_ref) => {
  let {
    content
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["content"]);

  return __jsx(HeadingWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Heading);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "uFB0":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("OCF2");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

/***/ }),

/***/ "wk2l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("8k7s");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("TPw6");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: /Users/msnajib/Documents/najib/Dhakon/dhakon-app/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "znL5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LcAa");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ });