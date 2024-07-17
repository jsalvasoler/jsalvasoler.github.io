exports.id = 830;
exports.ids = [830];
exports.modules = {

/***/ 5830:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(__webpack_require__(6689)),n=e(__webpack_require__(7845)),r=__webpack_require__(3470),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var a,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}(a=exports.zl||(exports.zl={})).NotAsked="NotAsked",a.Loading="Loading",a.LoadSuccess="LoadSuccess",a.LoadError="LoadError";var u=r.unionize({NotAsked:{},Buffering:{},Loading:{},LoadSuccess:{},LoadError:r.ofType()}),s=r.unionize({ViewChanged:r.ofType(),BufferingEnded:{},LoadSuccess:{},LoadError:r.ofType()}),d=function(e,t){return function(n){var r=m(g(e,t));r.promise.then(function(e){return n.update(s.LoadSuccess({}))}).catch(function(e){e.isCanceled||n.update(s.LoadError({msg:"Failed to load"}))}),n.promiseCache.loading=r}},f=function(e){e.promiseCache.buffering.cancel()},p=function(e){function r(t){var n=e.call(this,t)||this;return n.promiseCache={},n.initialState=u.NotAsked(),n.state=n.initialState,n.update=n.update.bind(n),n}return function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(r,e),r.reducer=function(e,t,n){return s.match(e,{ViewChanged:function(e){return!0===e.inView?n.src?u.match(t,{NotAsked:function(){return n.debounceDurationMs?{nextState:u.Buffering(),cmd:(e=n.debounceDurationMs,function(t){var n=m(l(e));n.promise.then(function(){return t.update(s.BufferingEnded())}).catch(function(e){}),t.promiseCache.buffering=n})}:{nextState:u.Loading(),cmd:d(n,n.experimentalDecode)};var e},default:function(){return{nextState:t}}}):{nextState:u.LoadSuccess()}:u.match(t,{Buffering:function(){return{nextState:u.NotAsked(),cmd:f}},default:function(){return{nextState:t}}})},BufferingEnded:function(){return{nextState:u.Loading(),cmd:d(n,n.experimentalDecode)}},LoadSuccess:function(){return{nextState:u.LoadSuccess()}},LoadError:function(e){return{nextState:u.LoadError(e)}}})},r.prototype.update=function(e){var t=this,n=r.reducer(e,this.state,this.props),o=n.nextState,a=n.cmd;this.props.debugActions&&( true&&console.warn('You are running LazyImage with debugActions="true" in production. This might have performance implications.'),console.log({action:e,prevState:this.state,nextState:o})),this.setState(o,function(){return a&&a(t)})},r.prototype.componentWillUnmount=function(){this.promiseCache.loading&&this.promiseCache.loading.cancel(),this.promiseCache.buffering&&this.promiseCache.buffering.cancel(),this.promiseCache={}},r.prototype.render=function(){var e=this,r=this.props,o=r.children,a=r.loadEagerly,d=r.observerProps,f=c(r,["children","loadEagerly","observerProps","experimentalDecode","debounceDurationMs","debugActions"]);return a?o({imageState:u.LoadSuccess().tag,imageProps:f}):t.createElement(n,i({rootMargin:"50px 0px",threshold:.01},d,{onChange:function(t){return e.update(s.ViewChanged({inView:t}))}}),function(t){return o({imageState:"Buffering"===e.state.tag?exports.zl.Loading:e.state.tag,imageProps:f,ref:t.ref})})},r.displayName="LazyImageFull",r}(t.Component),g=function(e,t){var n=e.src,r=e.srcSet,o=e.alt,a=e.sizes;return void 0===t&&(t=!1),new Promise(function(e,i){var c=new Image;if(r&&(c.srcset=r),o&&(c.alt=o),a&&(c.sizes=a),c.src=n,t&&"decode"in c)return c.decode().then(function(t){return e(t)}).catch(function(e){return i(e)});c.onload=e,c.onerror=i})},l=function(e){return new Promise(function(t){return setTimeout(t,e)})},m=function(e){var t=!1;return{promise:new Promise(function(n,r){e.then(function(e){return t?r({isCanceled:!0}):n(e)}),e.catch(function(e){return r(t?{isCanceled:!0}:e)})}),cancel:function(){t=!0}}},h=function(e){var n=e.actual,r=e.placeholder,o=e.loading,a=e.error,u=c(e,["actual","placeholder","loading","error"]);return t.createElement(p,i({},u),function(e){var t=e.imageProps,i=e.ref;switch(e.imageState){case exports.zl.NotAsked:return!!r&&r({imageProps:t,ref:i});case exports.zl.Loading:return o?o():!!r&&r({imageProps:t,ref:i});case exports.zl.LoadSuccess:return n({imageProps:t});case exports.zl.LoadError:return a?a():n({imageProps:t})}})};h.displayName="LazyImage",__webpack_unused_export__=h,exports.AZ=p;
//# sourceMappingURL=react-lazy-images.js.map


/***/ }),

/***/ 7845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(__webpack_require__(434));
var _objectWithoutPropertiesLoose = _interopDefault(__webpack_require__(7071));
var _inheritsLoose = _interopDefault(__webpack_require__(7867));
var _assertThisInitialized = _interopDefault(__webpack_require__(6115));
var _defineProperty = _interopDefault(__webpack_require__(8416));
var React = __webpack_require__(6689);
var invariant = _interopDefault(__webpack_require__(7644));

var INSTANCE_MAP = new Map();
var OBSERVER_MAP = new Map();
/**
 * Monitor element, and trigger callback when element becomes visible
 * @param element {HTMLElement}
 * @param callback {Function} Called with inView
 * @param options {Object} InterSection observer options
 * @param options.threshold {Number} Number between 0 and 1, indicating how much of the element should be visible before triggering
 * @param options.root {HTMLElement} It should have a unique id or data-intersection-id in order for the Observer to reused.
 * @param options.rootMargin {String} The CSS margin to apply to the root element.
 * @param rootId {String} Unique identifier for the root element, to enable reusing the IntersectionObserver
 */

function observe(element, callback, options, rootId) {
  if (options === void 0) {
    options = {};
  }

  // Validate that the element is not being used in another <Observer />
  invariant(!INSTANCE_MAP.has(element), "react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s", element); // IntersectionObserver needs a threshold to trigger, so set it to 0 if it's not defined.
  // Modify the options object, since it's used in the onChange handler.

  if (!options.threshold) options.threshold = 0;
  var _options = options,
      root = _options.root,
      rootMargin = _options.rootMargin,
      threshold = _options.threshold;
  if (!element || !callback) return;
  var observerId = rootMargin ? threshold.toString() + "_" + rootMargin : threshold.toString();

  if (root) {
    observerId = rootId ? rootId + "_" + observerId : null;
  }

  var observerInstance = observerId ? OBSERVER_MAP.get(observerId) : null;

  if (!observerInstance) {
    observerInstance = new IntersectionObserver(onChange, options);
    if (observerId) OBSERVER_MAP.set(observerId, observerInstance);
  }

  var instance = {
    callback: callback,
    visible: false,
    options: options,
    observerId: observerId,
    observer: !observerId ? observerInstance : undefined
  };
  INSTANCE_MAP.set(element, instance);
  observerInstance.observe(element);
  return instance;
}
/**
 * Stop observing an element. If an element is removed from the DOM or otherwise destroyed,
 * make sure to call this method.
 * @param element {HTMLElement}
 */

function unobserve(element) {
  if (!element) return;
  var instance = INSTANCE_MAP.get(element);

  if (instance) {
    var observerId = instance.observerId,
        observer = instance.observer;
    var observerInstance = observerId ? OBSERVER_MAP.get(observerId) : observer;

    if (observerInstance) {
      observerInstance.unobserve(element);
    } // Check if we are still observing any elements with the same threshold.


    var itemsLeft = false;

    if (observerId) {
      INSTANCE_MAP.forEach(function (item, key) {
        if (item && item.observerId === observerId && key !== element) {
          itemsLeft = true;
        }
      });
    }

    if (observerInstance && !itemsLeft) {
      // No more elements to observe for threshold, disconnect observer
      observerInstance.disconnect();
      OBSERVER_MAP.delete(observerId);
    } // Remove reference to element


    INSTANCE_MAP.delete(element);
  }
}

function onChange(changes) {
  changes.forEach(function (intersection) {
    var isIntersecting = intersection.isIntersecting,
        intersectionRatio = intersection.intersectionRatio,
        target = intersection.target;
    var instance = INSTANCE_MAP.get(target); // Firefox can report a negative intersectionRatio when scrolling.

    if (instance && intersectionRatio >= 0) {
      var options = instance.options;
      var _inView = false;

      if (Array.isArray(options.threshold)) {
        // If threshold is an array, check if any of them intersects. This just triggers the onChange event multiple times.
        _inView = options.threshold.some(function (threshold) {
          return instance.visible ? intersectionRatio > threshold : intersectionRatio >= threshold;
        });
      } else if (options.threshold !== undefined) {
        // Trigger on 0 ratio only when not visible. This is fallback for browsers without isIntersecting support
        _inView = instance.visible ? intersectionRatio > options.threshold : intersectionRatio >= options.threshold;
      }

      if (isIntersecting !== undefined) {
        // If isIntersecting is defined, ensure that the element is actually intersecting.
        // Otherwise it reports a threshold of 0
        _inView = _inView && isIntersecting;
      }

      instance.visible = _inView;
      instance.callback(_inView, intersectionRatio);
    }
  });
}

function useInView(ref, options) {
  if (options === void 0) {
    options = {};
  }

  // $FlowFixMe - useState is not exposed in React Flow lib yet
  var _React$useState = React.useState(false),
      isInView = _React$useState[0],
      setInView = _React$useState[1]; // $FlowFixMe - useEffect is not exposed in React Flow lib yet


  React.useEffect(function () {
    if (ref.current) {
      observe(ref.current, function (inView) {
        setInView(inView);

        if (inView && options.triggerOnce) {
          // If it should only trigger once, unobserve the element after it's inView
          unobserve(ref.current);
        }
      }, {
        threshold: options.threshold,
        root: options.root,
        rootMargin: options.rootMargin
      }, options.rootId);
    }

    return function () {
      unobserve(ref.current);
    };
  }, [options.threshold, options.root, options.rootMargin, options.rootId]);
  return isInView;
}

/**
 * Monitors scroll, and triggers the children function with updated props
 *
 <InView>
 {({inView, ref}) => (
   <h1 ref={ref}>{`${inView}`}</h1>
 )}
 </InView>
 */
var InView =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InView, _React$Component);

  function InView() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      inView: false,
      intersectionRatio: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "node", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNode", function (node) {
      if (_this.node) unobserve(_this.node);
      _this.node = node;

      _this.observeNode();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (inView, intersectionRatio) {
      _this.setState({
        inView: inView,
        intersectionRatio: intersectionRatio
      });

      if (_this.props.onChange) {
        _this.props.onChange(inView, intersectionRatio);
      }
    });

    return _this;
  }

  var _proto = InView.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (false) {}
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If a IntersectionObserver option changed, reinit the observer
    if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold) {
      unobserve(this.node);
      this.observeNode();
    }

    if (prevState.inView !== this.state.inView) {
      if (this.state.inView && this.props.triggerOnce) {
        unobserve(this.node);
        this.node = null;
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.node) {
      unobserve(this.node);
      this.node = null;
    }
  };

  _proto.observeNode = function observeNode() {
    if (!this.node) return;
    var _this$props = this.props,
        threshold = _this$props.threshold,
        root = _this$props.root,
        rootMargin = _this$props.rootMargin,
        rootId = _this$props.rootId;
    observe(this.node, this.handleChange, {
      threshold: threshold,
      root: root,
      rootMargin: rootMargin
    }, rootId);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        render = _this$props2.render,
        tag = _this$props2.tag,
        triggerOnce = _this$props2.triggerOnce,
        threshold = _this$props2.threshold,
        root = _this$props2.root,
        rootId = _this$props2.rootId,
        rootMargin = _this$props2.rootMargin,
        props = _objectWithoutPropertiesLoose(_this$props2, ["children", "render", "tag", "triggerOnce", "threshold", "root", "rootId", "rootMargin"]);

    var _this$state = this.state,
        inView = _this$state.inView,
        intersectionRatio = _this$state.intersectionRatio;
    var renderMethod = children || render;

    if (typeof renderMethod === 'function') {
      return renderMethod({
        inView: inView,
        intersectionRatio: intersectionRatio,
        ref: this.handleNode
      });
    }

    return React.createElement(tag || 'div', _extends({
      ref: this.handleNode
    }, props), children);
  };

  return InView;
}(React.Component);

_defineProperty(InView, "defaultProps", {
  threshold: 0,
  triggerOnce: false
});

exports.InView = InView;
exports["default"] = InView;
exports.useInView = useInView;


/***/ }),

/***/ 6115:
/***/ ((module) => {

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8416:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(4062);
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 434:
/***/ ((module) => {

function _extends() {
  return (module.exports = _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _extends.apply(null, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7867:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(6015);
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, setPrototypeOf(t, o);
}
module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7071:
/***/ ((module) => {

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6015:
/***/ ((module) => {

function _setPrototypeOf(t, e) {
  return (module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
var toPrimitive = __webpack_require__(5036);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8698:
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

};
;