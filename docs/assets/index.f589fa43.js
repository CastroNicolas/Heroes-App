var Zm = Object.defineProperty,
  eg = Object.defineProperties;
var tg = Object.getOwnPropertyDescriptors;
var lf = Object.getOwnPropertySymbols;
var ng = Object.prototype.hasOwnProperty,
  rg = Object.prototype.propertyIsEnumerable;
var sf = (e, t, n) =>
    t in e
      ? Zm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ke = (e, t) => {
    for (var n in t || (t = {})) ng.call(t, n) && sf(e, n, t[n]);
    if (lf) for (var n of lf(t)) rg.call(t, n) && sf(e, n, t[n]);
    return e;
  },
  un = (e, t) => eg(e, tg(t));
const ig = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const a of l.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerpolicy && (l.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
};
ig();
var og =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {},
  V = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $i = Symbol.for("react.element"),
  lg = Symbol.for("react.portal"),
  sg = Symbol.for("react.fragment"),
  ag = Symbol.for("react.strict_mode"),
  ug = Symbol.for("react.profiler"),
  cg = Symbol.for("react.provider"),
  fg = Symbol.for("react.context"),
  dg = Symbol.for("react.forward_ref"),
  pg = Symbol.for("react.suspense"),
  hg = Symbol.for("react.memo"),
  mg = Symbol.for("react.lazy"),
  af = Symbol.iterator;
function gg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (af && e[af]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Td = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Pd = Object.assign,
  Od = {};
function Rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Od),
    (this.updater = n || Td);
}
Rr.prototype.isReactComponent = {};
Rr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Rr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ld() {}
Ld.prototype = Rr.prototype;
function ba(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Od),
    (this.updater = n || Td);
}
var Ia = (ba.prototype = new Ld());
Ia.constructor = ba;
Pd(Ia, Rr.prototype);
Ia.isPureReactComponent = !0;
var uf = Array.isArray,
  Ad = Object.prototype.hasOwnProperty,
  za = { current: null },
  Dd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Md(e, t, n) {
  var r,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Ad.call(t, r) && !Dd.hasOwnProperty(r) && (o[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) o.children = n;
  else if (1 < c) {
    for (var p = Array(c), m = 0; m < c; m++) p[m] = arguments[m + 2];
    o.children = p;
  }
  if (e && e.defaultProps)
    for (r in ((c = e.defaultProps), c)) o[r] === void 0 && (o[r] = c[r]);
  return {
    $$typeof: $i,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: za.current,
  };
}
function vg(e, t) {
  return {
    $$typeof: $i,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ja(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $i;
}
function yg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cf = /\/+/g;
function ds(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? yg("" + e.key)
    : t.toString(36);
}
function Io(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (l) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $i:
          case lg:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + ds(a, 0) : r),
      uf(o)
        ? ((n = ""),
          e != null && (n = e.replace(cf, "$&/") + "/"),
          Io(o, t, n, "", function (m) {
            return m;
          }))
        : o != null &&
          (ja(o) &&
            (o = vg(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(cf, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), uf(e)))
    for (var c = 0; c < e.length; c++) {
      l = e[c];
      var p = r + ds(l, c);
      a += Io(l, t, n, p, o);
    }
  else if (((p = gg(e)), typeof p == "function"))
    for (e = p.call(e), c = 0; !(l = e.next()).done; )
      (l = l.value), (p = r + ds(l, c++)), (a += Io(l, t, n, p, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function vo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Io(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function _g(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Xe = { current: null },
  zo = { transition: null },
  wg = {
    ReactCurrentDispatcher: Xe,
    ReactCurrentBatchConfig: zo,
    ReactCurrentOwner: za,
  };
ee.Children = {
  map: vo,
  forEach: function (e, t, n) {
    vo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ja(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ee.Component = Rr;
ee.Fragment = sg;
ee.Profiler = ug;
ee.PureComponent = ba;
ee.StrictMode = ag;
ee.Suspense = pg;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wg;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Pd({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = za.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (p in t)
      Ad.call(t, p) &&
        !Dd.hasOwnProperty(p) &&
        (r[p] = t[p] === void 0 && c !== void 0 ? c[p] : t[p]);
  }
  var p = arguments.length - 2;
  if (p === 1) r.children = n;
  else if (1 < p) {
    c = Array(p);
    for (var m = 0; m < p; m++) c[m] = arguments[m + 2];
    r.children = c;
  }
  return { $$typeof: $i, type: e.type, key: o, ref: l, props: r, _owner: a };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: fg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: cg, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = Md;
ee.createFactory = function (e) {
  var t = Md.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: dg, render: e };
};
ee.isValidElement = ja;
ee.lazy = function (e) {
  return { $$typeof: mg, _payload: { _status: -1, _result: e }, _init: _g };
};
ee.memo = function (e, t) {
  return { $$typeof: hg, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = zo.transition;
  zo.transition = {};
  try {
    e();
  } finally {
    zo.transition = t;
  }
};
ee.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ee.useCallback = function (e, t) {
  return Xe.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return Xe.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return Xe.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return Xe.current.useEffect(e, t);
};
ee.useId = function () {
  return Xe.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return Xe.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return Xe.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return Xe.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return Xe.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return Xe.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return Xe.current.useRef(e);
};
ee.useState = function (e) {
  return Xe.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return Xe.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return Xe.current.useTransition();
};
ee.version = "18.1.0";
V.exports = ee;
var Sg = V.exports,
  Fs = {},
  bd = { exports: {} },
  ct = {},
  Id = { exports: {} },
  zd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, Y) {
    var C = j.length;
    j.push(Y);
    e: for (; 0 < C; ) {
      var pe = (C - 1) >>> 1,
        Ee = j[pe];
      if (0 < o(Ee, Y)) (j[pe] = Y), (j[C] = Ee), (C = pe);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var Y = j[0],
      C = j.pop();
    if (C !== Y) {
      j[0] = C;
      e: for (var pe = 0, Ee = j.length, on = Ee >>> 1; pe < on; ) {
        var be = 2 * (pe + 1) - 1,
          Vt = j[be],
          Pe = be + 1,
          ln = j[Pe];
        if (0 > o(Vt, C))
          Pe < Ee && 0 > o(ln, Vt)
            ? ((j[pe] = ln), (j[Pe] = C), (pe = Pe))
            : ((j[pe] = Vt), (j[be] = C), (pe = be));
        else if (Pe < Ee && 0 > o(ln, C)) (j[pe] = ln), (j[Pe] = C), (pe = Pe);
        else break e;
      }
    }
    return Y;
  }
  function o(j, Y) {
    var C = j.sortIndex - Y.sortIndex;
    return C !== 0 ? C : j.id - Y.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var a = Date,
      c = a.now();
    e.unstable_now = function () {
      return a.now() - c;
    };
  }
  var p = [],
    m = [],
    S = 1,
    T = null,
    w = 3,
    L = !1,
    A = !1,
    z = !1,
    K = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(j) {
    for (var Y = n(m); Y !== null; ) {
      if (Y.callback === null) r(m);
      else if (Y.startTime <= j)
        r(m), (Y.sortIndex = Y.expirationTime), t(p, Y);
      else break;
      Y = n(m);
    }
  }
  function y(j) {
    if (((z = !1), h(j), !A))
      if (n(p) !== null) (A = !0), tr(k);
      else {
        var Y = n(m);
        Y !== null && Ln(y, Y.startTime - j);
      }
  }
  function k(j, Y) {
    (A = !1), z && ((z = !1), g(N), (N = -1)), (L = !0);
    var C = w;
    try {
      for (
        h(Y), T = n(p);
        T !== null && (!(T.expirationTime > Y) || (j && !de()));

      ) {
        var pe = T.callback;
        if (typeof pe == "function") {
          (T.callback = null), (w = T.priorityLevel);
          var Ee = pe(T.expirationTime <= Y);
          (Y = e.unstable_now()),
            typeof Ee == "function" ? (T.callback = Ee) : T === n(p) && r(p),
            h(Y);
        } else r(p);
        T = n(p);
      }
      if (T !== null) var on = !0;
      else {
        var be = n(m);
        be !== null && Ln(y, be.startTime - Y), (on = !1);
      }
      return on;
    } finally {
      (T = null), (w = C), (L = !1);
    }
  }
  var x = !1,
    P = null,
    N = -1,
    B = 5,
    U = -1;
  function de() {
    return !(e.unstable_now() - U < B);
  }
  function He() {
    if (P !== null) {
      var j = e.unstable_now();
      U = j;
      var Y = !0;
      try {
        Y = P(!0, j);
      } finally {
        Y ? dt() : ((x = !1), (P = null));
      }
    } else x = !1;
  }
  var dt;
  if (typeof f == "function")
    dt = function () {
      f(He);
    };
  else if (typeof MessageChannel != "undefined") {
    var bt = new MessageChannel(),
      Wr = bt.port2;
    (bt.port1.onmessage = He),
      (dt = function () {
        Wr.postMessage(null);
      });
  } else
    dt = function () {
      K(He, 0);
    };
  function tr(j) {
    (P = j), x || ((x = !0), dt());
  }
  function Ln(j, Y) {
    N = K(function () {
      j(e.unstable_now());
    }, Y);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      A || L || ((A = !0), tr(k));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return w;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(p);
    }),
    (e.unstable_next = function (j) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = w;
      }
      var C = w;
      w = Y;
      try {
        return j();
      } finally {
        w = C;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, Y) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var C = w;
      w = j;
      try {
        return Y();
      } finally {
        w = C;
      }
    }),
    (e.unstable_scheduleCallback = function (j, Y, C) {
      var pe = e.unstable_now();
      switch (
        (typeof C == "object" && C !== null
          ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? pe + C : pe))
          : (C = pe),
        j)
      ) {
        case 1:
          var Ee = -1;
          break;
        case 2:
          Ee = 250;
          break;
        case 5:
          Ee = 1073741823;
          break;
        case 4:
          Ee = 1e4;
          break;
        default:
          Ee = 5e3;
      }
      return (
        (Ee = C + Ee),
        (j = {
          id: S++,
          callback: Y,
          priorityLevel: j,
          startTime: C,
          expirationTime: Ee,
          sortIndex: -1,
        }),
        C > pe
          ? ((j.sortIndex = C),
            t(m, j),
            n(p) === null &&
              j === n(m) &&
              (z ? (g(N), (N = -1)) : (z = !0), Ln(y, C - pe)))
          : ((j.sortIndex = Ee), t(p, j), A || L || ((A = !0), tr(k))),
        j
      );
    }),
    (e.unstable_shouldYield = de),
    (e.unstable_wrapCallback = function (j) {
      var Y = w;
      return function () {
        var C = w;
        w = Y;
        try {
          return j.apply(this, arguments);
        } finally {
          w = C;
        }
      };
    });
})(zd);
Id.exports = zd;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd = V.exports,
  ut = Id.exports;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Fd = new Set(),
  Ci = {};
function Jn(e, t) {
  Mr(e, t), Mr(e + "Capture", t);
}
function Mr(e, t) {
  for (Ci[e] = t, e = 0; e < t.length; e++) Fd.add(t[e]);
}
var en = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  Rs = Object.prototype.hasOwnProperty,
  kg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ff = {},
  df = {};
function Cg(e) {
  return Rs.call(df, e)
    ? !0
    : Rs.call(ff, e)
    ? !1
    : kg.test(e)
    ? (df[e] = !0)
    : ((ff[e] = !0), !1);
}
function Eg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xg(e, t, n, r) {
  if (t === null || typeof t == "undefined" || Eg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ge(e, t, n, r, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    je[e] = new Ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  je[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  je[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  je[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    je[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  je[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  je[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  je[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  je[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fa = /[\-:]([a-z])/g;
function Ra(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fa, Ra);
    je[t] = new Ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fa, Ra);
    je[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Fa, Ra);
  je[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  je[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new Ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  je[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $a(e, t, n, r) {
  var o = je.hasOwnProperty(t) ? je[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xg(t, n, o, r) && (n = null),
    r || o === null
      ? Cg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rn = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yo = Symbol.for("react.element"),
  mr = Symbol.for("react.portal"),
  gr = Symbol.for("react.fragment"),
  Ba = Symbol.for("react.strict_mode"),
  $s = Symbol.for("react.profiler"),
  Rd = Symbol.for("react.provider"),
  $d = Symbol.for("react.context"),
  Ha = Symbol.for("react.forward_ref"),
  Bs = Symbol.for("react.suspense"),
  Hs = Symbol.for("react.suspense_list"),
  Ua = Symbol.for("react.memo"),
  fn = Symbol.for("react.lazy"),
  Bd = Symbol.for("react.offscreen"),
  pf = Symbol.iterator;
function ti(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pf && e[pf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var we = Object.assign,
  ps;
function ci(e) {
  if (ps === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ps = (t && t[1]) || "";
    }
  return (
    `
` +
    ps +
    e
  );
}
var hs = !1;
function ms(e, t) {
  if (!e || hs) return "";
  hs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (m) {
          var r = m;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (m) {
          r = m;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (m) {
        r = m;
      }
      e();
    }
  } catch (m) {
    if (m && r && typeof m.stack == "string") {
      for (
        var o = m.stack.split(`
`),
          l = r.stack.split(`
`),
          a = o.length - 1,
          c = l.length - 1;
        1 <= a && 0 <= c && o[a] !== l[c];

      )
        c--;
      for (; 1 <= a && 0 <= c; a--, c--)
        if (o[a] !== l[c]) {
          if (a !== 1 || c !== 1)
            do
              if ((a--, c--, 0 > c || o[a] !== l[c])) {
                var p =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    p.includes("<anonymous>") &&
                    (p = p.replace("<anonymous>", e.displayName)),
                  p
                );
              }
            while (1 <= a && 0 <= c);
          break;
        }
    }
  } finally {
    (hs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ci(e) : "";
}
function Ng(e) {
  switch (e.tag) {
    case 5:
      return ci(e.type);
    case 16:
      return ci("Lazy");
    case 13:
      return ci("Suspense");
    case 19:
      return ci("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ms(e.type, !1)), e;
    case 11:
      return (e = ms(e.type.render, !1)), e;
    case 1:
      return (e = ms(e.type, !0)), e;
    default:
      return "";
  }
}
function Us(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gr:
      return "Fragment";
    case mr:
      return "Portal";
    case $s:
      return "Profiler";
    case Ba:
      return "StrictMode";
    case Bs:
      return "Suspense";
    case Hs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $d:
        return (e.displayName || "Context") + ".Consumer";
      case Rd:
        return (e._context.displayName || "Context") + ".Provider";
      case Ha:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ua:
        return (
          (t = e.displayName || null), t !== null ? t : Us(e.type) || "Memo"
        );
      case fn:
        (t = e._payload), (e = e._init);
        try {
          return Us(e(t));
        } catch {}
    }
  return null;
}
function Tg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Us(t);
    case 8:
      return t === Ba ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function En(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Hd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Pg(e) {
  var t = Hd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != "undefined" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), l.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _o(e) {
  e._valueTracker || (e._valueTracker = Pg(e));
}
function Ud(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Hd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qo(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ws(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function hf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = En(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Wd(e, t) {
  (t = t.checked), t != null && $a(e, "checked", t, !1);
}
function Vs(e, t) {
  Wd(e, t);
  var n = En(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Qs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Qs(e, t.type, En(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function mf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Qs(e, t, n) {
  (t !== "number" || Qo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fi = Array.isArray;
function Tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + En(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ks(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (fi(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: En(n) };
}
function Vd(e, t) {
  var n = En(t.value),
    r = En(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ys(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wo,
  Kd = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wo = wo || document.createElement("div"),
          wo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ei(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Og = ["Webkit", "ms", "Moz", "O"];
Object.keys(hi).forEach(function (e) {
  Og.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (hi[t] = hi[e]);
  });
});
function Yd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (hi.hasOwnProperty(e) && hi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Xd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Yd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Lg = we(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Xs(e, t) {
  if (t) {
    if (Lg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Gs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Js = null;
function Wa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var qs = null,
  Pr = null,
  Or = null;
function yf(e) {
  if ((e = Ui(e))) {
    if (typeof qs != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = xl(t)), qs(e.stateNode, e.type, t));
  }
}
function Gd(e) {
  Pr ? (Or ? Or.push(e) : (Or = [e])) : (Pr = e);
}
function Jd() {
  if (Pr) {
    var e = Pr,
      t = Or;
    if (((Or = Pr = null), yf(e), t)) for (e = 0; e < t.length; e++) yf(t[e]);
  }
}
function qd(e, t) {
  return e(t);
}
function Zd() {}
var gs = !1;
function ep(e, t, n) {
  if (gs) return e(t, n);
  gs = !0;
  try {
    return qd(e, t, n);
  } finally {
    (gs = !1), (Pr !== null || Or !== null) && (Zd(), Jd());
  }
}
function xi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Zs = !1;
if (en)
  try {
    var ni = {};
    Object.defineProperty(ni, "passive", {
      get: function () {
        Zs = !0;
      },
    }),
      window.addEventListener("test", ni, ni),
      window.removeEventListener("test", ni, ni);
  } catch {
    Zs = !1;
  }
function Ag(e, t, n, r, o, l, a, c, p) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (S) {
    this.onError(S);
  }
}
var mi = !1,
  Ko = null,
  Yo = !1,
  ea = null,
  Dg = {
    onError: function (e) {
      (mi = !0), (Ko = e);
    },
  };
function Mg(e, t, n, r, o, l, a, c, p) {
  (mi = !1), (Ko = null), Ag.apply(Dg, arguments);
}
function bg(e, t, n, r, o, l, a, c, p) {
  if ((Mg.apply(this, arguments), mi)) {
    if (mi) {
      var m = Ko;
      (mi = !1), (Ko = null);
    } else throw Error(M(198));
    Yo || ((Yo = !0), (ea = m));
  }
}
function qn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function tp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _f(e) {
  if (qn(e) !== e) throw Error(M(188));
}
function Ig(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qn(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return _f(o), e;
        if (l === r) return _f(o), t;
        l = l.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var a = !1, c = o.child; c; ) {
        if (c === n) {
          (a = !0), (n = o), (r = l);
          break;
        }
        if (c === r) {
          (a = !0), (r = o), (n = l);
          break;
        }
        c = c.sibling;
      }
      if (!a) {
        for (c = l.child; c; ) {
          if (c === n) {
            (a = !0), (n = l), (r = o);
            break;
          }
          if (c === r) {
            (a = !0), (r = l), (n = o);
            break;
          }
          c = c.sibling;
        }
        if (!a) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function np(e) {
  return (e = Ig(e)), e !== null ? rp(e) : null;
}
function rp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = rp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ip = ut.unstable_scheduleCallback,
  wf = ut.unstable_cancelCallback,
  zg = ut.unstable_shouldYield,
  jg = ut.unstable_requestPaint,
  Ne = ut.unstable_now,
  Fg = ut.unstable_getCurrentPriorityLevel,
  Va = ut.unstable_ImmediatePriority,
  op = ut.unstable_UserBlockingPriority,
  Xo = ut.unstable_NormalPriority,
  Rg = ut.unstable_LowPriority,
  lp = ut.unstable_IdlePriority,
  Sl = null,
  Ut = null;
function $g(e) {
  if (Ut && typeof Ut.onCommitFiberRoot == "function")
    try {
      Ut.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var At = Math.clz32 ? Math.clz32 : Ug,
  Bg = Math.log,
  Hg = Math.LN2;
function Ug(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bg(e) / Hg) | 0)) | 0;
}
var So = 64,
  ko = 4194304;
function di(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Go(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var c = a & ~o;
    c !== 0 ? (r = di(c)) : ((l &= a), l !== 0 && (r = di(l)));
  } else (a = n & ~o), a !== 0 ? (r = di(a)) : l !== 0 && (r = di(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & o) === 0 &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - At(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Wg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Vg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - At(l),
      c = 1 << a,
      p = o[a];
    p === -1
      ? ((c & n) === 0 || (c & r) !== 0) && (o[a] = Wg(c, t))
      : p <= t && (e.expiredLanes |= c),
      (l &= ~c);
  }
}
function ta(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function sp() {
  var e = So;
  return (So <<= 1), (So & 4194240) === 0 && (So = 64), e;
}
function vs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Bi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - At(t)),
    (e[t] = n);
}
function Qg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - At(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Qa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - At(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var le = 0;
function ap(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var up,
  Ka,
  cp,
  fp,
  dp,
  na = !1,
  Co = [],
  vn = null,
  yn = null,
  _n = null,
  Ni = new Map(),
  Ti = new Map(),
  pn = [],
  Kg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Sf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vn = null;
      break;
    case "dragenter":
    case "dragleave":
      yn = null;
      break;
    case "mouseover":
    case "mouseout":
      _n = null;
      break;
    case "pointerover":
    case "pointerout":
      Ni.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ti.delete(t.pointerId);
  }
}
function ri(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Ui(t)), t !== null && Ka(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Yg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (vn = ri(vn, e, t, n, r, o)), !0;
    case "dragenter":
      return (yn = ri(yn, e, t, n, r, o)), !0;
    case "mouseover":
      return (_n = ri(_n, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Ni.set(l, ri(Ni.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Ti.set(l, ri(Ti.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function pp(e) {
  var t = Bn(e.target);
  if (t !== null) {
    var n = qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = tp(n)), t !== null)) {
          (e.blockedOn = t),
            dp(e.priority, function () {
              cp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ra(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Js = r), n.target.dispatchEvent(r), (Js = null);
    } else return (t = Ui(n)), t !== null && Ka(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function kf(e, t, n) {
  jo(e) && n.delete(t);
}
function Xg() {
  (na = !1),
    vn !== null && jo(vn) && (vn = null),
    yn !== null && jo(yn) && (yn = null),
    _n !== null && jo(_n) && (_n = null),
    Ni.forEach(kf),
    Ti.forEach(kf);
}
function ii(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    na ||
      ((na = !0),
      ut.unstable_scheduleCallback(ut.unstable_NormalPriority, Xg)));
}
function Pi(e) {
  function t(o) {
    return ii(o, e);
  }
  if (0 < Co.length) {
    ii(Co[0], e);
    for (var n = 1; n < Co.length; n++) {
      var r = Co[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vn !== null && ii(vn, e),
      yn !== null && ii(yn, e),
      _n !== null && ii(_n, e),
      Ni.forEach(t),
      Ti.forEach(t),
      n = 0;
    n < pn.length;
    n++
  )
    (r = pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && ((n = pn[0]), n.blockedOn === null); )
    pp(n), n.blockedOn === null && pn.shift();
}
var Lr = rn.ReactCurrentBatchConfig,
  Jo = !0;
function Gg(e, t, n, r) {
  var o = le,
    l = Lr.transition;
  Lr.transition = null;
  try {
    (le = 1), Ya(e, t, n, r);
  } finally {
    (le = o), (Lr.transition = l);
  }
}
function Jg(e, t, n, r) {
  var o = le,
    l = Lr.transition;
  Lr.transition = null;
  try {
    (le = 4), Ya(e, t, n, r);
  } finally {
    (le = o), (Lr.transition = l);
  }
}
function Ya(e, t, n, r) {
  if (Jo) {
    var o = ra(e, t, n, r);
    if (o === null) Ts(e, t, r, qo, n), Sf(e, r);
    else if (Yg(o, e, t, n, r)) r.stopPropagation();
    else if ((Sf(e, r), t & 4 && -1 < Kg.indexOf(e))) {
      for (; o !== null; ) {
        var l = Ui(o);
        if (
          (l !== null && up(l),
          (l = ra(e, t, n, r)),
          l === null && Ts(e, t, r, qo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Ts(e, t, r, null, n);
  }
}
var qo = null;
function ra(e, t, n, r) {
  if (((qo = null), (e = Wa(r)), (e = Bn(e)), e !== null))
    if (((t = qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = tp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qo = e), null;
}
function hp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fg()) {
        case Va:
          return 1;
        case op:
          return 4;
        case Xo:
        case Rg:
          return 16;
        case lp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mn = null,
  Xa = null,
  Fo = null;
function mp() {
  if (Fo) return Fo;
  var e,
    t = Xa,
    n = t.length,
    r,
    o = "value" in mn ? mn.value : mn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[l - r]; r++);
  return (Fo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ro(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Eo() {
  return !0;
}
function Cf() {
  return !1;
}
function ft(e) {
  function t(n, r, o, l, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = a),
      (this.currentTarget = null);
    for (var c in e)
      e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(l) : l[c]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Eo
        : Cf),
      (this.isPropagationStopped = Cf),
      this
    );
  }
  return (
    we(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Eo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Eo));
      },
      persist: function () {},
      isPersistent: Eo,
    }),
    t
  );
}
var $r = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ga = ft($r),
  Hi = we({}, $r, { view: 0, detail: 0 }),
  qg = ft(Hi),
  ys,
  _s,
  oi,
  kl = we({}, Hi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ja,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== oi &&
            (oi && e.type === "mousemove"
              ? ((ys = e.screenX - oi.screenX), (_s = e.screenY - oi.screenY))
              : (_s = ys = 0),
            (oi = e)),
          ys);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : _s;
    },
  }),
  Ef = ft(kl),
  Zg = we({}, kl, { dataTransfer: 0 }),
  ev = ft(Zg),
  tv = we({}, Hi, { relatedTarget: 0 }),
  ws = ft(tv),
  nv = we({}, $r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rv = ft(nv),
  iv = we({}, $r, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ov = ft(iv),
  lv = we({}, $r, { data: 0 }),
  xf = ft(lv),
  sv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  av = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  uv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = uv[e]) ? !!t[e] : !1;
}
function Ja() {
  return cv;
}
var fv = we({}, Hi, {
    key: function (e) {
      if (e.key) {
        var t = sv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ro(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? av[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ja,
    charCode: function (e) {
      return e.type === "keypress" ? Ro(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ro(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  dv = ft(fv),
  pv = we({}, kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Nf = ft(pv),
  hv = we({}, Hi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ja,
  }),
  mv = ft(hv),
  gv = we({}, $r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vv = ft(gv),
  yv = we({}, kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _v = ft(yv),
  wv = [9, 13, 27, 32],
  qa = en && "CompositionEvent" in window,
  gi = null;
en && "documentMode" in document && (gi = document.documentMode);
var Sv = en && "TextEvent" in window && !gi,
  gp = en && (!qa || (gi && 8 < gi && 11 >= gi)),
  Tf = String.fromCharCode(32),
  Pf = !1;
function vp(e, t) {
  switch (e) {
    case "keyup":
      return wv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function yp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var vr = !1;
function kv(e, t) {
  switch (e) {
    case "compositionend":
      return yp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Pf = !0), Tf);
    case "textInput":
      return (e = t.data), e === Tf && Pf ? null : e;
    default:
      return null;
  }
}
function Cv(e, t) {
  if (vr)
    return e === "compositionend" || (!qa && vp(e, t))
      ? ((e = mp()), (Fo = Xa = mn = null), (vr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return gp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ev = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Of(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ev[e.type] : t === "textarea";
}
function _p(e, t, n, r) {
  Gd(r),
    (t = Zo(t, "onChange")),
    0 < t.length &&
      ((n = new Ga("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var vi = null,
  Oi = null;
function xv(e) {
  Lp(e, 0);
}
function Cl(e) {
  var t = wr(e);
  if (Ud(t)) return e;
}
function Nv(e, t) {
  if (e === "change") return t;
}
var wp = !1;
if (en) {
  var Ss;
  if (en) {
    var ks = "oninput" in document;
    if (!ks) {
      var Lf = document.createElement("div");
      Lf.setAttribute("oninput", "return;"),
        (ks = typeof Lf.oninput == "function");
    }
    Ss = ks;
  } else Ss = !1;
  wp = Ss && (!document.documentMode || 9 < document.documentMode);
}
function Af() {
  vi && (vi.detachEvent("onpropertychange", Sp), (Oi = vi = null));
}
function Sp(e) {
  if (e.propertyName === "value" && Cl(Oi)) {
    var t = [];
    _p(t, Oi, e, Wa(e)), ep(xv, t);
  }
}
function Tv(e, t, n) {
  e === "focusin"
    ? (Af(), (vi = t), (Oi = n), vi.attachEvent("onpropertychange", Sp))
    : e === "focusout" && Af();
}
function Pv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Cl(Oi);
}
function Ov(e, t) {
  if (e === "click") return Cl(t);
}
function Lv(e, t) {
  if (e === "input" || e === "change") return Cl(t);
}
function Av(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dt = typeof Object.is == "function" ? Object.is : Av;
function Li(e, t) {
  if (Dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Rs.call(t, o) || !Dt(e[o], t[o])) return !1;
  }
  return !0;
}
function Df(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mf(e, t) {
  var n = Df(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Df(n);
  }
}
function kp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? kp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Cp() {
  for (var e = window, t = Qo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qo(e.document);
  }
  return t;
}
function Za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Dv(e) {
  var t = Cp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    kp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Za(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Mf(n, l));
        var a = Mf(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Mv = en && "documentMode" in document && 11 >= document.documentMode,
  yr = null,
  ia = null,
  yi = null,
  oa = !1;
function bf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oa ||
    yr == null ||
    yr !== Qo(r) ||
    ((r = yr),
    "selectionStart" in r && Za(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (yi && Li(yi, r)) ||
      ((yi = r),
      (r = Zo(ia, "onSelect")),
      0 < r.length &&
        ((t = new Ga("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = yr))));
}
function xo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var _r = {
    animationend: xo("Animation", "AnimationEnd"),
    animationiteration: xo("Animation", "AnimationIteration"),
    animationstart: xo("Animation", "AnimationStart"),
    transitionend: xo("Transition", "TransitionEnd"),
  },
  Cs = {},
  Ep = {};
en &&
  ((Ep = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _r.animationend.animation,
    delete _r.animationiteration.animation,
    delete _r.animationstart.animation),
  "TransitionEvent" in window || delete _r.transitionend.transition);
function El(e) {
  if (Cs[e]) return Cs[e];
  if (!_r[e]) return e;
  var t = _r[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ep) return (Cs[e] = t[n]);
  return e;
}
var xp = El("animationend"),
  Np = El("animationiteration"),
  Tp = El("animationstart"),
  Pp = El("transitionend"),
  Op = new Map(),
  If =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Tn(e, t) {
  Op.set(e, t), Jn(t, [e]);
}
for (var Es = 0; Es < If.length; Es++) {
  var xs = If[Es],
    bv = xs.toLowerCase(),
    Iv = xs[0].toUpperCase() + xs.slice(1);
  Tn(bv, "on" + Iv);
}
Tn(xp, "onAnimationEnd");
Tn(Np, "onAnimationIteration");
Tn(Tp, "onAnimationStart");
Tn("dblclick", "onDoubleClick");
Tn("focusin", "onFocus");
Tn("focusout", "onBlur");
Tn(Pp, "onTransitionEnd");
Mr("onMouseEnter", ["mouseout", "mouseover"]);
Mr("onMouseLeave", ["mouseout", "mouseover"]);
Mr("onPointerEnter", ["pointerout", "pointerover"]);
Mr("onPointerLeave", ["pointerout", "pointerover"]);
Jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var pi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  zv = new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));
function zf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), bg(r, t, void 0, e), (e.currentTarget = null);
}
function Lp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var c = r[a],
            p = c.instance,
            m = c.currentTarget;
          if (((c = c.listener), p !== l && o.isPropagationStopped())) break e;
          zf(o, c, m), (l = p);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((c = r[a]),
            (p = c.instance),
            (m = c.currentTarget),
            (c = c.listener),
            p !== l && o.isPropagationStopped())
          )
            break e;
          zf(o, c, m), (l = p);
        }
    }
  }
  if (Yo) throw ((e = ea), (Yo = !1), (ea = null), e);
}
function he(e, t) {
  var n = t[ca];
  n === void 0 && (n = t[ca] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ap(t, e, 2, !1), n.add(r));
}
function Ns(e, t, n) {
  var r = 0;
  t && (r |= 4), Ap(n, e, r, t);
}
var No = "_reactListening" + Math.random().toString(36).slice(2);
function Ai(e) {
  if (!e[No]) {
    (e[No] = !0),
      Fd.forEach(function (n) {
        n !== "selectionchange" && (zv.has(n) || Ns(n, !1, e), Ns(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[No] || ((t[No] = !0), Ns("selectionchange", !1, t));
  }
}
function Ap(e, t, n, r) {
  switch (hp(t)) {
    case 1:
      var o = Gg;
      break;
    case 4:
      o = Jg;
      break;
    default:
      o = Ya;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Zs ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ts(e, t, n, r, o) {
  var l = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var c = r.stateNode.containerInfo;
        if (c === o || (c.nodeType === 8 && c.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var p = a.tag;
            if (
              (p === 3 || p === 4) &&
              ((p = a.stateNode.containerInfo),
              p === o || (p.nodeType === 8 && p.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; c !== null; ) {
          if (((a = Bn(c)), a === null)) return;
          if (((p = a.tag), p === 5 || p === 6)) {
            r = l = a;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
  ep(function () {
    var m = l,
      S = Wa(n),
      T = [];
    e: {
      var w = Op.get(e);
      if (w !== void 0) {
        var L = Ga,
          A = e;
        switch (e) {
          case "keypress":
            if (Ro(n) === 0) break e;
          case "keydown":
          case "keyup":
            L = dv;
            break;
          case "focusin":
            (A = "focus"), (L = ws);
            break;
          case "focusout":
            (A = "blur"), (L = ws);
            break;
          case "beforeblur":
          case "afterblur":
            L = ws;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            L = Ef;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            L = ev;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            L = mv;
            break;
          case xp:
          case Np:
          case Tp:
            L = rv;
            break;
          case Pp:
            L = vv;
            break;
          case "scroll":
            L = qg;
            break;
          case "wheel":
            L = _v;
            break;
          case "copy":
          case "cut":
          case "paste":
            L = ov;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            L = Nf;
        }
        var z = (t & 4) !== 0,
          K = !z && e === "scroll",
          g = z ? (w !== null ? w + "Capture" : null) : w;
        z = [];
        for (var f = m, h; f !== null; ) {
          h = f;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              g !== null && ((y = xi(f, g)), y != null && z.push(Di(f, y, h)))),
            K)
          )
            break;
          f = f.return;
        }
        0 < z.length &&
          ((w = new L(w, A, null, n, S)), T.push({ event: w, listeners: z }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((w = e === "mouseover" || e === "pointerover"),
          (L = e === "mouseout" || e === "pointerout"),
          w &&
            n !== Js &&
            (A = n.relatedTarget || n.fromElement) &&
            (Bn(A) || A[tn]))
        )
          break e;
        if (
          (L || w) &&
          ((w =
            S.window === S
              ? S
              : (w = S.ownerDocument)
              ? w.defaultView || w.parentWindow
              : window),
          L
            ? ((A = n.relatedTarget || n.toElement),
              (L = m),
              (A = A ? Bn(A) : null),
              A !== null &&
                ((K = qn(A)), A !== K || (A.tag !== 5 && A.tag !== 6)) &&
                (A = null))
            : ((L = null), (A = m)),
          L !== A)
        ) {
          if (
            ((z = Ef),
            (y = "onMouseLeave"),
            (g = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((z = Nf),
              (y = "onPointerLeave"),
              (g = "onPointerEnter"),
              (f = "pointer")),
            (K = L == null ? w : wr(L)),
            (h = A == null ? w : wr(A)),
            (w = new z(y, f + "leave", L, n, S)),
            (w.target = K),
            (w.relatedTarget = h),
            (y = null),
            Bn(S) === m &&
              ((z = new z(g, f + "enter", A, n, S)),
              (z.target = h),
              (z.relatedTarget = K),
              (y = z)),
            (K = y),
            L && A)
          )
            t: {
              for (z = L, g = A, f = 0, h = z; h; h = hr(h)) f++;
              for (h = 0, y = g; y; y = hr(y)) h++;
              for (; 0 < f - h; ) (z = hr(z)), f--;
              for (; 0 < h - f; ) (g = hr(g)), h--;
              for (; f--; ) {
                if (z === g || (g !== null && z === g.alternate)) break t;
                (z = hr(z)), (g = hr(g));
              }
              z = null;
            }
          else z = null;
          L !== null && jf(T, w, L, z, !1),
            A !== null && K !== null && jf(T, K, A, z, !0);
        }
      }
      e: {
        if (
          ((w = m ? wr(m) : window),
          (L = w.nodeName && w.nodeName.toLowerCase()),
          L === "select" || (L === "input" && w.type === "file"))
        )
          var k = Nv;
        else if (Of(w))
          if (wp) k = Lv;
          else {
            k = Pv;
            var x = Tv;
          }
        else
          (L = w.nodeName) &&
            L.toLowerCase() === "input" &&
            (w.type === "checkbox" || w.type === "radio") &&
            (k = Ov);
        if (k && (k = k(e, m))) {
          _p(T, k, n, S);
          break e;
        }
        x && x(e, w, m),
          e === "focusout" &&
            (x = w._wrapperState) &&
            x.controlled &&
            w.type === "number" &&
            Qs(w, "number", w.value);
      }
      switch (((x = m ? wr(m) : window), e)) {
        case "focusin":
          (Of(x) || x.contentEditable === "true") &&
            ((yr = x), (ia = m), (yi = null));
          break;
        case "focusout":
          yi = ia = yr = null;
          break;
        case "mousedown":
          oa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (oa = !1), bf(T, n, S);
          break;
        case "selectionchange":
          if (Mv) break;
        case "keydown":
        case "keyup":
          bf(T, n, S);
      }
      var P;
      if (qa)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        vr
          ? vp(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (gp &&
          n.locale !== "ko" &&
          (vr || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && vr && (P = mp())
            : ((mn = S),
              (Xa = "value" in mn ? mn.value : mn.textContent),
              (vr = !0))),
        (x = Zo(m, N)),
        0 < x.length &&
          ((N = new xf(N, e, null, n, S)),
          T.push({ event: N, listeners: x }),
          P ? (N.data = P) : ((P = yp(n)), P !== null && (N.data = P)))),
        (P = Sv ? kv(e, n) : Cv(e, n)) &&
          ((m = Zo(m, "onBeforeInput")),
          0 < m.length &&
            ((S = new xf("onBeforeInput", "beforeinput", null, n, S)),
            T.push({ event: S, listeners: m }),
            (S.data = P)));
    }
    Lp(T, t);
  });
}
function Di(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = xi(e, n)),
      l != null && r.unshift(Di(e, l, o)),
      (l = xi(e, t)),
      l != null && r.push(Di(e, l, o))),
      (e = e.return);
  }
  return r;
}
function hr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jf(e, t, n, r, o) {
  for (var l = t._reactName, a = []; n !== null && n !== r; ) {
    var c = n,
      p = c.alternate,
      m = c.stateNode;
    if (p !== null && p === r) break;
    c.tag === 5 &&
      m !== null &&
      ((c = m),
      o
        ? ((p = xi(n, l)), p != null && a.unshift(Di(n, p, c)))
        : o || ((p = xi(n, l)), p != null && a.push(Di(n, p, c)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var jv = /\r\n?/g,
  Fv = /\u0000|\uFFFD/g;
function Ff(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      jv,
      `
`
    )
    .replace(Fv, "");
}
function To(e, t, n) {
  if (((t = Ff(t)), Ff(e) !== t && n)) throw Error(M(425));
}
function el() {}
var la = null,
  sa = null;
function aa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ua = typeof setTimeout == "function" ? setTimeout : void 0,
  Rv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Rf = typeof Promise == "function" ? Promise : void 0,
  $v =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Rf != "undefined"
      ? function (e) {
          return Rf.resolve(null).then(e).catch(Bv);
        }
      : ua;
function Bv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ps(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Pi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Pi(t);
}
function Gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $f(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Br = Math.random().toString(36).slice(2),
  Ht = "__reactFiber$" + Br,
  Mi = "__reactProps$" + Br,
  tn = "__reactContainer$" + Br,
  ca = "__reactEvents$" + Br,
  Hv = "__reactListeners$" + Br,
  Uv = "__reactHandles$" + Br;
function Bn(e) {
  var t = e[Ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[tn] || n[Ht])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $f(e); e !== null; ) {
          if ((n = e[Ht])) return n;
          e = $f(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ui(e) {
  return (
    (e = e[Ht] || e[tn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function wr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function xl(e) {
  return e[Mi] || null;
}
var fa = [],
  Sr = -1;
function Pn(e) {
  return { current: e };
}
function ge(e) {
  0 > Sr || ((e.current = fa[Sr]), (fa[Sr] = null), Sr--);
}
function fe(e, t) {
  Sr++, (fa[Sr] = e.current), (e.current = t);
}
var xn = {},
  Be = Pn(xn),
  et = Pn(!1),
  Qn = xn;
function br(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function tt(e) {
  return (e = e.childContextTypes), e != null;
}
function tl() {
  ge(et), ge(Be);
}
function Bf(e, t, n) {
  if (Be.current !== xn) throw Error(M(168));
  fe(Be, t), fe(et, n);
}
function Dp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(M(108, Tg(e) || "Unknown", o));
  return we({}, n, r);
}
function nl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xn),
    (Qn = Be.current),
    fe(Be, e),
    fe(et, et.current),
    !0
  );
}
function Hf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = Dp(e, t, Qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ge(et),
      ge(Be),
      fe(Be, e))
    : ge(et),
    fe(et, n);
}
var Xt = null,
  Nl = !1,
  Os = !1;
function Mp(e) {
  Xt === null ? (Xt = [e]) : Xt.push(e);
}
function Wv(e) {
  (Nl = !0), Mp(e);
}
function On() {
  if (!Os && Xt !== null) {
    Os = !0;
    var e = 0,
      t = le;
    try {
      var n = Xt;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xt = null), (Nl = !1);
    } catch (o) {
      throw (Xt !== null && (Xt = Xt.slice(e + 1)), ip(Va, On), o);
    } finally {
      (le = t), (Os = !1);
    }
  }
  return null;
}
var Vv = rn.ReactCurrentBatchConfig;
function Tt(e, t) {
  if (e && e.defaultProps) {
    (t = we({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var rl = Pn(null),
  il = null,
  kr = null,
  eu = null;
function tu() {
  eu = kr = il = null;
}
function nu(e) {
  var t = rl.current;
  ge(rl), (e._currentValue = t);
}
function da(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ar(e, t) {
  (il = e),
    (eu = kr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Ze = !0), (e.firstContext = null));
}
function kt(e) {
  var t = e._currentValue;
  if (eu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), kr === null)) {
      if (il === null) throw Error(M(308));
      (kr = e), (il.dependencies = { lanes: 0, firstContext: e });
    } else kr = kr.next = e;
  return t;
}
var Lt = null,
  dn = !1;
function ru(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Zt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wn(e, t) {
  var n = e.updateQueue;
  n !== null &&
    ((n = n.shared),
    Ch(e)
      ? ((e = n.interleaved),
        e === null
          ? ((t.next = t), Lt === null ? (Lt = [n]) : Lt.push(n))
          : ((t.next = e.next), (e.next = t)),
        (n.interleaved = t))
      : ((e = n.pending),
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (n.pending = t)));
}
function $o(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qa(e, n);
  }
}
function Uf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = a) : (l = l.next = a), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ol(e, t, n, r) {
  var o = e.updateQueue;
  dn = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    c = o.shared.pending;
  if (c !== null) {
    o.shared.pending = null;
    var p = c,
      m = p.next;
    (p.next = null), a === null ? (l = m) : (a.next = m), (a = p);
    var S = e.alternate;
    S !== null &&
      ((S = S.updateQueue),
      (c = S.lastBaseUpdate),
      c !== a &&
        (c === null ? (S.firstBaseUpdate = m) : (c.next = m),
        (S.lastBaseUpdate = p)));
  }
  if (l !== null) {
    var T = o.baseState;
    (a = 0), (S = m = p = null), (c = l);
    do {
      var w = c.lane,
        L = c.eventTime;
      if ((r & w) === w) {
        S !== null &&
          (S = S.next =
            {
              eventTime: L,
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            });
        e: {
          var A = e,
            z = c;
          switch (((w = t), (L = n), z.tag)) {
            case 1:
              if (((A = z.payload), typeof A == "function")) {
                T = A.call(L, T, w);
                break e;
              }
              T = A;
              break e;
            case 3:
              A.flags = (A.flags & -65537) | 128;
            case 0:
              if (
                ((A = z.payload),
                (w = typeof A == "function" ? A.call(L, T, w) : A),
                w == null)
              )
                break e;
              T = we({}, T, w);
              break e;
            case 2:
              dn = !0;
          }
        }
        c.callback !== null &&
          c.lane !== 0 &&
          ((e.flags |= 64),
          (w = o.effects),
          w === null ? (o.effects = [c]) : w.push(c));
      } else
        (L = {
          eventTime: L,
          lane: w,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          S === null ? ((m = S = L), (p = T)) : (S = S.next = L),
          (a |= w);
      if (((c = c.next), c === null)) {
        if (((c = o.shared.pending), c === null)) break;
        (w = c),
          (c = w.next),
          (w.next = null),
          (o.lastBaseUpdate = w),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (S === null && (p = T),
      (o.baseState = p),
      (o.firstBaseUpdate = m),
      (o.lastBaseUpdate = S),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Xn |= a), (e.lanes = a), (e.memoizedState = T);
  }
}
function Wf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(M(191, o));
        o.call(r);
      }
    }
}
var Ip = new jd.Component().refs;
function pa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Tl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ye(),
      o = kn(e),
      l = Zt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      wn(e, l),
      (t = St(e, o, r)),
      t !== null && $o(t, e, o);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ye(),
      o = kn(e),
      l = Zt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      wn(e, l),
      (t = St(e, o, r)),
      t !== null && $o(t, e, o);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ye(),
      r = kn(e),
      o = Zt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      wn(e, o),
      (t = St(e, r, n)),
      t !== null && $o(t, e, r);
  },
};
function Vf(e, t, n, r, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Li(n, r) || !Li(o, l)
      : !0
  );
}
function zp(e, t, n) {
  var r = !1,
    o = xn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = kt(l))
      : ((o = tt(t) ? Qn : Be.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? br(e, o) : xn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Tl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Qf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Tl.enqueueReplaceState(t, t.state, null);
}
function ha(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Ip), ru(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = kt(l))
    : ((l = tt(t) ? Qn : Be.current), (o.context = br(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (pa(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Tl.enqueueReplaceState(o, o.state, null),
      ol(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
var Cr = [],
  Er = 0,
  ll = null,
  sl = 0,
  vt = [],
  yt = 0,
  Kn = null,
  Jt = 1,
  qt = "";
function Rn(e, t) {
  (Cr[Er++] = sl), (Cr[Er++] = ll), (ll = e), (sl = t);
}
function jp(e, t, n) {
  (vt[yt++] = Jt), (vt[yt++] = qt), (vt[yt++] = Kn), (Kn = e);
  var r = Jt;
  e = qt;
  var o = 32 - At(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - At(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Jt = (1 << (32 - At(t) + o)) | (n << o) | r),
      (qt = l + e);
  } else (Jt = (1 << l) | (n << o) | r), (qt = e);
}
function iu(e) {
  e.return !== null && (Rn(e, 1), jp(e, 1, 0));
}
function ou(e) {
  for (; e === ll; )
    (ll = Cr[--Er]), (Cr[Er] = null), (sl = Cr[--Er]), (Cr[Er] = null);
  for (; e === Kn; )
    (Kn = vt[--yt]),
      (vt[yt] = null),
      (qt = vt[--yt]),
      (vt[yt] = null),
      (Jt = vt[--yt]),
      (vt[yt] = null);
}
var at = null,
  qe = null,
  ve = !1,
  Ot = null;
function Fp(e, t) {
  var n = _t(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Kf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (at = e), (qe = Gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (at = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Kn !== null ? { id: Jt, overflow: qt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _t(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (at = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ma(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ga(e) {
  if (ve) {
    var t = qe;
    if (t) {
      var n = t;
      if (!Kf(e, t)) {
        if (ma(e)) throw Error(M(418));
        t = Gt(n.nextSibling);
        var r = at;
        t && Kf(e, t)
          ? Fp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (at = e));
      }
    } else {
      if (ma(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (ve = !1), (at = e);
    }
  }
}
function Yf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  at = e;
}
function li(e) {
  if (e !== at) return !1;
  if (!ve) return Yf(e), (ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !aa(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (ma(e)) {
      for (e = qe; e; ) e = Gt(e.nextSibling);
      throw Error(M(418));
    }
    for (; t; ) Fp(e, t), (t = Gt(t.nextSibling));
  }
  if ((Yf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = Gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = at ? Gt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ir() {
  (qe = at = null), (ve = !1);
}
function lu(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function si(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (a) {
            var c = o.refs;
            c === Ip && (c = o.refs = {}),
              a === null ? delete c[l] : (c[l] = a);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Po(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Xf(e) {
  var t = e._init;
  return t(e._payload);
}
function Rp(e) {
  function t(g, f) {
    if (e) {
      var h = g.deletions;
      h === null ? ((g.deletions = [f]), (g.flags |= 16)) : h.push(f);
    }
  }
  function n(g, f) {
    if (!e) return null;
    for (; f !== null; ) t(g, f), (f = f.sibling);
    return null;
  }
  function r(g, f) {
    for (g = new Map(); f !== null; )
      f.key !== null ? g.set(f.key, f) : g.set(f.index, f), (f = f.sibling);
    return g;
  }
  function o(g, f) {
    return (g = Nn(g, f)), (g.index = 0), (g.sibling = null), g;
  }
  function l(g, f, h) {
    return (
      (g.index = h),
      e
        ? ((h = g.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((g.flags |= 2), f) : h)
            : ((g.flags |= 2), f))
        : ((g.flags |= 1048576), f)
    );
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function c(g, f, h, y) {
    return f === null || f.tag !== 6
      ? ((f = Is(h, g.mode, y)), (f.return = g), f)
      : ((f = o(f, h)), (f.return = g), f);
  }
  function p(g, f, h, y) {
    var k = h.type;
    return k === gr
      ? S(g, f, h.props.children, y, h.key)
      : f !== null &&
        (f.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === fn &&
            Xf(k) === f.type))
      ? ((y = o(f, h.props)), (y.ref = si(g, f, h)), (y.return = g), y)
      : ((y = Vo(h.type, h.key, h.props, null, g.mode, y)),
        (y.ref = si(g, f, h)),
        (y.return = g),
        y);
  }
  function m(g, f, h, y) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = zs(h, g.mode, y)), (f.return = g), f)
      : ((f = o(f, h.children || [])), (f.return = g), f);
  }
  function S(g, f, h, y, k) {
    return f === null || f.tag !== 7
      ? ((f = Vn(h, g.mode, y, k)), (f.return = g), f)
      : ((f = o(f, h)), (f.return = g), f);
  }
  function T(g, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Is("" + f, g.mode, h)), (f.return = g), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case yo:
          return (
            (h = Vo(f.type, f.key, f.props, null, g.mode, h)),
            (h.ref = si(g, null, f)),
            (h.return = g),
            h
          );
        case mr:
          return (f = zs(f, g.mode, h)), (f.return = g), f;
        case fn:
          var y = f._init;
          return T(g, y(f._payload), h);
      }
      if (fi(f) || ti(f))
        return (f = Vn(f, g.mode, h, null)), (f.return = g), f;
      Po(g, f);
    }
    return null;
  }
  function w(g, f, h, y) {
    var k = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : c(g, f, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case yo:
          return h.key === k ? p(g, f, h, y) : null;
        case mr:
          return h.key === k ? m(g, f, h, y) : null;
        case fn:
          return (k = h._init), w(g, f, k(h._payload), y);
      }
      if (fi(h) || ti(h)) return k !== null ? null : S(g, f, h, y, null);
      Po(g, h);
    }
    return null;
  }
  function L(g, f, h, y, k) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (g = g.get(h) || null), c(f, g, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case yo:
          return (g = g.get(y.key === null ? h : y.key) || null), p(f, g, y, k);
        case mr:
          return (g = g.get(y.key === null ? h : y.key) || null), m(f, g, y, k);
        case fn:
          var x = y._init;
          return L(g, f, h, x(y._payload), k);
      }
      if (fi(y) || ti(y)) return (g = g.get(h) || null), S(f, g, y, k, null);
      Po(f, y);
    }
    return null;
  }
  function A(g, f, h, y) {
    for (
      var k = null, x = null, P = f, N = (f = 0), B = null;
      P !== null && N < h.length;
      N++
    ) {
      P.index > N ? ((B = P), (P = null)) : (B = P.sibling);
      var U = w(g, P, h[N], y);
      if (U === null) {
        P === null && (P = B);
        break;
      }
      e && P && U.alternate === null && t(g, P),
        (f = l(U, f, N)),
        x === null ? (k = U) : (x.sibling = U),
        (x = U),
        (P = B);
    }
    if (N === h.length) return n(g, P), ve && Rn(g, N), k;
    if (P === null) {
      for (; N < h.length; N++)
        (P = T(g, h[N], y)),
          P !== null &&
            ((f = l(P, f, N)), x === null ? (k = P) : (x.sibling = P), (x = P));
      return ve && Rn(g, N), k;
    }
    for (P = r(g, P); N < h.length; N++)
      (B = L(P, g, N, h[N], y)),
        B !== null &&
          (e && B.alternate !== null && P.delete(B.key === null ? N : B.key),
          (f = l(B, f, N)),
          x === null ? (k = B) : (x.sibling = B),
          (x = B));
    return (
      e &&
        P.forEach(function (de) {
          return t(g, de);
        }),
      ve && Rn(g, N),
      k
    );
  }
  function z(g, f, h, y) {
    var k = ti(h);
    if (typeof k != "function") throw Error(M(150));
    if (((h = k.call(h)), h == null)) throw Error(M(151));
    for (
      var x = (k = null), P = f, N = (f = 0), B = null, U = h.next();
      P !== null && !U.done;
      N++, U = h.next()
    ) {
      P.index > N ? ((B = P), (P = null)) : (B = P.sibling);
      var de = w(g, P, U.value, y);
      if (de === null) {
        P === null && (P = B);
        break;
      }
      e && P && de.alternate === null && t(g, P),
        (f = l(de, f, N)),
        x === null ? (k = de) : (x.sibling = de),
        (x = de),
        (P = B);
    }
    if (U.done) return n(g, P), ve && Rn(g, N), k;
    if (P === null) {
      for (; !U.done; N++, U = h.next())
        (U = T(g, U.value, y)),
          U !== null &&
            ((f = l(U, f, N)), x === null ? (k = U) : (x.sibling = U), (x = U));
      return ve && Rn(g, N), k;
    }
    for (P = r(g, P); !U.done; N++, U = h.next())
      (U = L(P, g, N, U.value, y)),
        U !== null &&
          (e && U.alternate !== null && P.delete(U.key === null ? N : U.key),
          (f = l(U, f, N)),
          x === null ? (k = U) : (x.sibling = U),
          (x = U));
    return (
      e &&
        P.forEach(function (He) {
          return t(g, He);
        }),
      ve && Rn(g, N),
      k
    );
  }
  function K(g, f, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === gr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case yo:
          e: {
            for (var k = h.key, x = f; x !== null; ) {
              if (x.key === k) {
                if (((k = h.type), k === gr)) {
                  if (x.tag === 7) {
                    n(g, x.sibling),
                      (f = o(x, h.props.children)),
                      (f.return = g),
                      (g = f);
                    break e;
                  }
                } else if (
                  x.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === fn &&
                    Xf(k) === x.type)
                ) {
                  n(g, x.sibling),
                    (f = o(x, h.props)),
                    (f.ref = si(g, x, h)),
                    (f.return = g),
                    (g = f);
                  break e;
                }
                n(g, x);
                break;
              } else t(g, x);
              x = x.sibling;
            }
            h.type === gr
              ? ((f = Vn(h.props.children, g.mode, y, h.key)),
                (f.return = g),
                (g = f))
              : ((y = Vo(h.type, h.key, h.props, null, g.mode, y)),
                (y.ref = si(g, f, h)),
                (y.return = g),
                (g = y));
          }
          return a(g);
        case mr:
          e: {
            for (x = h.key; f !== null; ) {
              if (f.key === x)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(g, f.sibling),
                    (f = o(f, h.children || [])),
                    (f.return = g),
                    (g = f);
                  break e;
                } else {
                  n(g, f);
                  break;
                }
              else t(g, f);
              f = f.sibling;
            }
            (f = zs(h, g.mode, y)), (f.return = g), (g = f);
          }
          return a(g);
        case fn:
          return (x = h._init), K(g, f, x(h._payload), y);
      }
      if (fi(h)) return A(g, f, h, y);
      if (ti(h)) return z(g, f, h, y);
      Po(g, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(g, f.sibling), (f = o(f, h)), (f.return = g), (g = f))
          : (n(g, f), (f = Is(h, g.mode, y)), (f.return = g), (g = f)),
        a(g))
      : n(g, f);
  }
  return K;
}
var zr = Rp(!0),
  $p = Rp(!1),
  Wi = {},
  Wt = Pn(Wi),
  bi = Pn(Wi),
  Ii = Pn(Wi);
function Hn(e) {
  if (e === Wi) throw Error(M(174));
  return e;
}
function su(e, t) {
  switch ((fe(Ii, t), fe(bi, e), fe(Wt, Wi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ys(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ys(t, e));
  }
  ge(Wt), fe(Wt, t);
}
function jr() {
  ge(Wt), ge(bi), ge(Ii);
}
function Bp(e) {
  Hn(Ii.current);
  var t = Hn(Wt.current),
    n = Ys(t, e.type);
  t !== n && (fe(bi, e), fe(Wt, n));
}
function au(e) {
  bi.current === e && (ge(Wt), ge(bi));
}
var ye = Pn(0);
function al(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ls = [];
function uu() {
  for (var e = 0; e < Ls.length; e++)
    Ls[e]._workInProgressVersionPrimary = null;
  Ls.length = 0;
}
var Bo = rn.ReactCurrentDispatcher,
  As = rn.ReactCurrentBatchConfig,
  Yn = 0,
  _e = null,
  Oe = null,
  Me = null,
  ul = !1,
  _i = !1,
  zi = 0,
  Qv = 0;
function Fe() {
  throw Error(M(321));
}
function cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Dt(e[n], t[n])) return !1;
  return !0;
}
function fu(e, t, n, r, o, l) {
  if (
    ((Yn = l),
    (_e = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bo.current = e === null || e.memoizedState === null ? Gv : Jv),
    (e = n(r, o)),
    _i)
  ) {
    l = 0;
    do {
      if (((_i = !1), (zi = 0), 25 <= l)) throw Error(M(301));
      (l += 1),
        (Me = Oe = null),
        (t.updateQueue = null),
        (Bo.current = qv),
        (e = n(r, o));
    } while (_i);
  }
  if (
    ((Bo.current = cl),
    (t = Oe !== null && Oe.next !== null),
    (Yn = 0),
    (Me = Oe = _e = null),
    (ul = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function du() {
  var e = zi !== 0;
  return (zi = 0), e;
}
function $t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Me === null ? (_e.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function Ct() {
  if (Oe === null) {
    var e = _e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = Me === null ? _e.memoizedState : Me.next;
  if (t !== null) (Me = t), (Oe = e);
  else {
    if (e === null) throw Error(M(310));
    (Oe = e),
      (e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null,
      }),
      Me === null ? (_e.memoizedState = Me = e) : (Me = Me.next = e);
  }
  return Me;
}
function ji(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ds(e) {
  var t = Ct(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = Oe,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = l.next), (l.next = a);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var c = (a = null),
      p = null,
      m = l;
    do {
      var S = m.lane;
      if ((Yn & S) === S)
        p !== null &&
          (p = p.next =
            {
              lane: 0,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
          (r = m.hasEagerState ? m.eagerState : e(r, m.action));
      else {
        var T = {
          lane: S,
          action: m.action,
          hasEagerState: m.hasEagerState,
          eagerState: m.eagerState,
          next: null,
        };
        p === null ? ((c = p = T), (a = r)) : (p = p.next = T),
          (_e.lanes |= S),
          (Xn |= S);
      }
      m = m.next;
    } while (m !== null && m !== l);
    p === null ? (a = r) : (p.next = c),
      Dt(r, t.memoizedState) || (Ze = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = p),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (_e.lanes |= l), (Xn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ms(e) {
  var t = Ct(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    Dt(l, t.memoizedState) || (Ze = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Hp() {}
function Up(e, t) {
  var n = _e,
    r = Ct(),
    o = t(),
    l = !Dt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Ze = !0)),
    (r = r.queue),
    pu(Qp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Me !== null && Me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Fi(9, Vp.bind(null, n, r, o, t), void 0, null),
      Ae === null)
    )
      throw Error(M(349));
    (Yn & 30) !== 0 || Wp(n, t, o);
  }
  return o;
}
function Wp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Vp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Kp(t) && St(e, 1, -1);
}
function Qp(e, t, n) {
  return n(function () {
    Kp(t) && St(e, 1, -1);
  });
}
function Kp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dt(e, n);
  } catch {
    return !0;
  }
}
function Gf(e) {
  var t = $t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ji,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xv.bind(null, _e, e)),
    [t.memoizedState, e]
  );
}
function Fi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Yp() {
  return Ct().memoizedState;
}
function Ho(e, t, n, r) {
  var o = $t();
  (_e.flags |= e),
    (o.memoizedState = Fi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pl(e, t, n, r) {
  var o = Ct();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Oe !== null) {
    var a = Oe.memoizedState;
    if (((l = a.destroy), r !== null && cu(r, a.deps))) {
      o.memoizedState = Fi(t, n, l, r);
      return;
    }
  }
  (_e.flags |= e), (o.memoizedState = Fi(1 | t, n, l, r));
}
function Jf(e, t) {
  return Ho(8390656, 8, e, t);
}
function pu(e, t) {
  return Pl(2048, 8, e, t);
}
function Xp(e, t) {
  return Pl(4, 2, e, t);
}
function Gp(e, t) {
  return Pl(4, 4, e, t);
}
function Jp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function qp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Pl(4, 4, Jp.bind(null, t, e), n)
  );
}
function hu() {}
function Zp(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function eh(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function th(e, t, n) {
  return (Yn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n))
    : (Dt(n, t) || ((n = sp()), (_e.lanes |= n), (Xn |= n), (e.baseState = !0)),
      t);
}
function Kv(e, t) {
  var n = le;
  (le = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = As.transition;
  As.transition = {};
  try {
    e(!1), t();
  } finally {
    (le = n), (As.transition = r);
  }
}
function nh() {
  return Ct().memoizedState;
}
function Yv(e, t, n) {
  var r = kn(e);
  (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }),
    rh(e)
      ? ih(t, n)
      : (oh(e, t, n), (n = Ye()), (e = St(e, r, n)), e !== null && lh(e, t, r));
}
function Xv(e, t, n) {
  var r = kn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rh(e)) ih(t, o);
  else {
    oh(e, t, o);
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var a = t.lastRenderedState,
          c = l(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = c), Dt(c, a))) return;
      } catch {
      } finally {
      }
    (n = Ye()), (e = St(e, r, n)), e !== null && lh(e, t, r);
  }
}
function rh(e) {
  var t = e.alternate;
  return e === _e || (t !== null && t === _e);
}
function ih(e, t) {
  _i = ul = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function oh(e, t, n) {
  Ch(e)
    ? ((e = t.interleaved),
      e === null
        ? ((n.next = n), Lt === null ? (Lt = [t]) : Lt.push(t))
        : ((n.next = e.next), (e.next = n)),
      (t.interleaved = n))
    : ((e = t.pending),
      e === null ? (n.next = n) : ((n.next = e.next), (e.next = n)),
      (t.pending = n));
}
function lh(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qa(e, n);
  }
}
var cl = {
    readContext: kt,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1,
  },
  Gv = {
    readContext: kt,
    useCallback: function (e, t) {
      return ($t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: kt,
    useEffect: Jf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ho(4194308, 4, Jp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Yv.bind(null, _e, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Gf,
    useDebugValue: hu,
    useDeferredValue: function (e) {
      return ($t().memoizedState = e);
    },
    useTransition: function () {
      var e = Gf(!1),
        t = e[0];
      return (e = Kv.bind(null, e[1])), ($t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = _e,
        o = $t();
      if (ve) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), Ae === null)) throw Error(M(349));
        (Yn & 30) !== 0 || Wp(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Jf(Qp.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Fi(9, Vp.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $t(),
        t = Ae.identifierPrefix;
      if (ve) {
        var n = qt,
          r = Jt;
        (n = (r & ~(1 << (32 - At(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = zi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Qv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jv = {
    readContext: kt,
    useCallback: Zp,
    useContext: kt,
    useEffect: pu,
    useImperativeHandle: qp,
    useInsertionEffect: Xp,
    useLayoutEffect: Gp,
    useMemo: eh,
    useReducer: Ds,
    useRef: Yp,
    useState: function () {
      return Ds(ji);
    },
    useDebugValue: hu,
    useDeferredValue: function (e) {
      var t = Ct();
      return th(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ds(ji)[0],
        t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Hp,
    useSyncExternalStore: Up,
    useId: nh,
    unstable_isNewReconciler: !1,
  },
  qv = {
    readContext: kt,
    useCallback: Zp,
    useContext: kt,
    useEffect: pu,
    useImperativeHandle: qp,
    useInsertionEffect: Xp,
    useLayoutEffect: Gp,
    useMemo: eh,
    useReducer: Ms,
    useRef: Yp,
    useState: function () {
      return Ms(ji);
    },
    useDebugValue: hu,
    useDeferredValue: function (e) {
      var t = Ct();
      return Oe === null ? (t.memoizedState = e) : th(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ms(ji)[0],
        t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Hp,
    useSyncExternalStore: Up,
    useId: nh,
    unstable_isNewReconciler: !1,
  };
function mu(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ng(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o };
}
function va(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zv = typeof WeakMap == "function" ? WeakMap : Map;
function sh(e, t, n) {
  (n = Zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      dl || ((dl = !0), (Na = r)), va(e, t);
    }),
    n
  );
}
function ah(e, t, n) {
  (n = Zt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        va(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        va(e, t),
          typeof r != "function" &&
            (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function qf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zv();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = dy.bind(null, e, t, n)), t.then(e, e));
}
function Zf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ed(e, t, n, r, o) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Zt(-1, 1)), (t.tag = 2), wn(n, t))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = o), e);
}
var uh, ya, ch, fh;
uh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ya = function () {};
ch = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Hn(Wt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Ws(e, o)), (r = Ws(e, r)), (l = []);
        break;
      case "select":
        (o = we({}, o, { value: void 0 })),
          (r = we({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Ks(e, o)), (r = Ks(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = el);
    }
    Xs(n, r);
    var a;
    n = null;
    for (m in o)
      if (!r.hasOwnProperty(m) && o.hasOwnProperty(m) && o[m] != null)
        if (m === "style") {
          var c = o[m];
          for (a in c) c.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          m !== "dangerouslySetInnerHTML" &&
            m !== "children" &&
            m !== "suppressContentEditableWarning" &&
            m !== "suppressHydrationWarning" &&
            m !== "autoFocus" &&
            (Ci.hasOwnProperty(m)
              ? l || (l = [])
              : (l = l || []).push(m, null));
    for (m in r) {
      var p = r[m];
      if (
        ((c = o != null ? o[m] : void 0),
        r.hasOwnProperty(m) && p !== c && (p != null || c != null))
      )
        if (m === "style")
          if (c) {
            for (a in c)
              !c.hasOwnProperty(a) ||
                (p && p.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in p)
              p.hasOwnProperty(a) &&
                c[a] !== p[a] &&
                (n || (n = {}), (n[a] = p[a]));
          } else n || (l || (l = []), l.push(m, n)), (n = p);
        else
          m === "dangerouslySetInnerHTML"
            ? ((p = p ? p.__html : void 0),
              (c = c ? c.__html : void 0),
              p != null && c !== p && (l = l || []).push(m, p))
            : m === "children"
            ? (typeof p != "string" && typeof p != "number") ||
              (l = l || []).push(m, "" + p)
            : m !== "suppressContentEditableWarning" &&
              m !== "suppressHydrationWarning" &&
              (Ci.hasOwnProperty(m)
                ? (p != null && m === "onScroll" && he("scroll", e),
                  l || c === p || (l = []))
                : (l = l || []).push(m, p));
    }
    n && (l = l || []).push("style", n);
    var m = l;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
fh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ai(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ey(e, t, n) {
  var r = t.pendingProps;
  switch ((ou(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(t), null;
    case 1:
      return tt(t.type) && tl(), Re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        jr(),
        ge(et),
        ge(Be),
        uu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (li(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), Ot !== null && (Oa(Ot), (Ot = null)))),
        ya(e, t),
        Re(t),
        null
      );
    case 5:
      au(t);
      var o = Hn(Ii.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ch(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Re(t), null;
        }
        if (((e = Hn(Wt.current)), li(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ht] = t), (r[Mi] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              he("cancel", r), he("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < pi.length; o++) he(pi[o], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              he("error", r), he("load", r);
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              hf(r, l), he("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                he("invalid", r);
              break;
            case "textarea":
              gf(r, l), he("invalid", r);
          }
          Xs(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var c = l[a];
              a === "children"
                ? typeof c == "string"
                  ? r.textContent !== c &&
                    (l.suppressHydrationWarning !== !0 &&
                      To(r.textContent, c, e),
                    (o = ["children", c]))
                  : typeof c == "number" &&
                    r.textContent !== "" + c &&
                    (l.suppressHydrationWarning !== !0 &&
                      To(r.textContent, c, e),
                    (o = ["children", "" + c]))
                : Ci.hasOwnProperty(a) &&
                  c != null &&
                  a === "onScroll" &&
                  he("scroll", r);
            }
          switch (n) {
            case "input":
              _o(r), mf(r, l, !0);
              break;
            case "textarea":
              _o(r), vf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = el);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Ht] = t),
            (e[Mi] = r),
            uh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Gs(n, r)), n)) {
              case "dialog":
                he("cancel", e), he("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < pi.length; o++) he(pi[o], e);
                o = r;
                break;
              case "source":
                he("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                he("error", e), he("load", e), (o = r);
                break;
              case "details":
                he("toggle", e), (o = r);
                break;
              case "input":
                hf(e, r), (o = Ws(e, r)), he("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = we({}, r, { value: void 0 })),
                  he("invalid", e);
                break;
              case "textarea":
                gf(e, r), (o = Ks(e, r)), he("invalid", e);
                break;
              default:
                o = r;
            }
            Xs(n, o), (c = o);
            for (l in c)
              if (c.hasOwnProperty(l)) {
                var p = c[l];
                l === "style"
                  ? Xd(e, p)
                  : l === "dangerouslySetInnerHTML"
                  ? ((p = p ? p.__html : void 0), p != null && Kd(e, p))
                  : l === "children"
                  ? typeof p == "string"
                    ? (n !== "textarea" || p !== "") && Ei(e, p)
                    : typeof p == "number" && Ei(e, "" + p)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Ci.hasOwnProperty(l)
                      ? p != null && l === "onScroll" && he("scroll", e)
                      : p != null && $a(e, l, p, a));
              }
            switch (n) {
              case "input":
                _o(e), mf(e, r, !1);
                break;
              case "textarea":
                _o(e), vf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + En(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Tr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Tr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = el);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) fh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = Hn(Ii.current)), Hn(Wt.current), li(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ht] = t),
            (l = r.nodeValue !== n) && ((e = at), e !== null))
          )
            switch (e.tag) {
              case 3:
                To(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  To(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ht] = t),
            (t.stateNode = r);
      }
      return Re(t), null;
    case 13:
      if (
        (ge(ye),
        (r = t.memoizedState),
        ve && qe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
      ) {
        for (r = qe; r; ) r = Gt(r.nextSibling);
        return Ir(), (t.flags |= 98560), t;
      }
      if (r !== null && r.dehydrated !== null) {
        if (((r = li(t)), e === null)) {
          if (!r) throw Error(M(318));
          if (
            ((r = t.memoizedState), (r = r !== null ? r.dehydrated : null), !r)
          )
            throw Error(M(317));
          r[Ht] = t;
        } else
          Ir(),
            (t.flags & 128) === 0 && (t.memoizedState = null),
            (t.flags |= 4);
        return Re(t), null;
      }
      return (
        Ot !== null && (Oa(Ot), (Ot = null)),
        (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null ? li(t) : (n = e.memoizedState !== null),
            r !== n &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ye.current & 1) !== 0
                  ? Le === 0 && (Le = 3)
                  : Su())),
            t.updateQueue !== null && (t.flags |= 4),
            Re(t),
            null)
      );
    case 4:
      return (
        jr(), ya(e, t), e === null && Ai(t.stateNode.containerInfo), Re(t), null
      );
    case 10:
      return nu(t.type._context), Re(t), null;
    case 17:
      return tt(t.type) && tl(), Re(t), null;
    case 19:
      if ((ge(ye), (l = t.memoizedState), l === null)) return Re(t), null;
      if (((r = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (r) ai(l, !1);
        else {
          if (Le !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((a = al(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    ai(l, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (a = l.alternate),
                    a === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = a.childLanes),
                        (l.lanes = a.lanes),
                        (l.child = a.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = a.memoizedProps),
                        (l.memoizedState = a.memoizedState),
                        (l.updateQueue = a.updateQueue),
                        (l.type = a.type),
                        (e = a.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return fe(ye, (ye.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Ne() > Fr &&
            ((t.flags |= 128), (r = !0), ai(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = al(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ai(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !ve)
            )
              return Re(t), null;
          } else
            2 * Ne() - l.renderingStartTime > Fr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ai(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = l.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (l.last = a));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Ne()),
          (t.sibling = null),
          (n = ye.current),
          fe(ye, r ? (n & 1) | 2 : n & 1),
          t)
        : (Re(t), null);
    case 22:
    case 23:
      return (
        wu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (st & 1073741824) !== 0 &&
            (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
var ty = rn.ReactCurrentOwner,
  Ze = !1;
function Ke(e, t, n, r) {
  t.child = e === null ? $p(t, null, n, r) : zr(t, e.child, n, r);
}
function td(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Ar(t, o),
    (r = fu(e, t, n, r, l, o)),
    (n = du()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        nn(e, t, o))
      : (ve && n && iu(t), (t.flags |= 1), Ke(e, t, r, o), t.child)
  );
}
function nd(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ku(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), dh(e, t, l, r, o))
      : ((e = Vo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), (e.lanes & o) === 0)) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Li), n(a, r) && e.ref === t.ref)
    )
      return nn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Nn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function dh(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Li(l, r) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (Ze = !0);
      else return (t.lanes = e.lanes), nn(e, t, o);
  }
  return _a(e, t, n, r, o);
}
function ph(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(Nr, st),
        (st |= n);
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        fe(Nr, st),
        (st |= r);
    else
      return (
        (e = l !== null ? l.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null,
        }),
        (t.updateQueue = null),
        fe(Nr, st),
        (st |= e),
        null
      );
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      fe(Nr, st),
      (st |= r);
  return Ke(e, t, o, n), t.child;
}
function hh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _a(e, t, n, r, o) {
  var l = tt(n) ? Qn : Be.current;
  return (
    (l = br(t, l)),
    Ar(t, o),
    (n = fu(e, t, n, r, l, o)),
    (r = du()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        nn(e, t, o))
      : (ve && r && iu(t), (t.flags |= 1), Ke(e, t, n, o), t.child)
  );
}
function rd(e, t, n, r, o) {
  if (tt(n)) {
    var l = !0;
    nl(t);
  } else l = !1;
  if ((Ar(t, o), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      zp(t, n, r),
      ha(t, n, r, o),
      (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      c = t.memoizedProps;
    a.props = c;
    var p = a.context,
      m = n.contextType;
    typeof m == "object" && m !== null
      ? (m = kt(m))
      : ((m = tt(n) ? Qn : Be.current), (m = br(t, m)));
    var S = n.getDerivedStateFromProps,
      T =
        typeof S == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    T ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((c !== r || p !== m) && Qf(t, a, r, m)),
      (dn = !1);
    var w = t.memoizedState;
    (a.state = w),
      ol(t, r, a, o),
      (p = t.memoizedState),
      c !== r || w !== p || et.current || dn
        ? (typeof S == "function" && (pa(t, n, S, r), (p = t.memoizedState)),
          (c = dn || Vf(t, n, c, r, w, p, m))
            ? (T ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = p)),
          (a.props = r),
          (a.state = p),
          (a.context = m),
          (r = c))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      bp(e, t),
      (c = t.memoizedProps),
      (m = t.type === t.elementType ? c : Tt(t.type, c)),
      (a.props = m),
      (T = t.pendingProps),
      (w = a.context),
      (p = n.contextType),
      typeof p == "object" && p !== null
        ? (p = kt(p))
        : ((p = tt(n) ? Qn : Be.current), (p = br(t, p)));
    var L = n.getDerivedStateFromProps;
    (S =
      typeof L == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((c !== T || w !== p) && Qf(t, a, r, p)),
      (dn = !1),
      (w = t.memoizedState),
      (a.state = w),
      ol(t, r, a, o);
    var A = t.memoizedState;
    c !== T || w !== A || et.current || dn
      ? (typeof L == "function" && (pa(t, n, L, r), (A = t.memoizedState)),
        (m = dn || Vf(t, n, m, r, w, A, p) || !1)
          ? (S ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, A, p),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, A, p)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (c === e.memoizedProps && w === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && w === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = A)),
        (a.props = r),
        (a.state = A),
        (a.context = p),
        (r = m))
      : (typeof a.componentDidUpdate != "function" ||
          (c === e.memoizedProps && w === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (c === e.memoizedProps && w === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return wa(e, t, n, r, l, o);
}
function wa(e, t, n, r, o, l) {
  hh(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Hf(t, n, !1), nn(e, t, l);
  (r = t.stateNode), (ty.current = t);
  var c =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = zr(t, e.child, null, l)), (t.child = zr(t, null, c, l)))
      : Ke(e, t, c, l),
    (t.memoizedState = r.state),
    o && Hf(t, n, !0),
    t.child
  );
}
function mh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bf(e, t.context, !1),
    su(e, t.containerInfo);
}
function id(e, t, n, r, o) {
  return Ir(), lu(o), (t.flags |= 256), Ke(e, t, n, r), t.child;
}
var Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function od(e, t) {
  return {
    baseLanes: e.baseLanes | t,
    cachePool: null,
    transitions: e.transitions,
  };
}
function gh(e, t, n) {
  var r = t.pendingProps,
    o = ye.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    c;
  if (
    ((c = a) ||
      (c = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    c
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    fe(ye, o & 1),
    e === null)
  )
    return (
      ga(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((o = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (o = { mode: "hidden", children: o }),
              (r & 1) === 0 && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = ml(o, r, 0, null)),
              (e = Vn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Lo(n)),
              (t.memoizedState = Oo),
              e)
            : Sa(t, o))
    );
  if (((o = e.memoizedState), o !== null)) {
    if (((c = o.dehydrated), c !== null)) {
      if (a)
        return t.flags & 256
          ? ((t.flags &= -257), Ao(e, t, n, Error(M(422))))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((l = r.fallback),
            (o = t.mode),
            (r = ml({ mode: "visible", children: r.children }, o, 0, null)),
            (l = Vn(l, o, n, null)),
            (l.flags |= 2),
            (r.return = t),
            (l.return = t),
            (r.sibling = l),
            (t.child = r),
            (t.mode & 1) !== 0 && zr(t, e.child, null, n),
            (t.child.memoizedState = Lo(n)),
            (t.memoizedState = Oo),
            l);
      if ((t.mode & 1) === 0) t = Ao(e, t, n, null);
      else if (c.data === "$!") t = Ao(e, t, n, Error(M(419)));
      else if (((r = (n & e.childLanes) !== 0), Ze || r)) {
        if (((r = Ae), r !== null)) {
          switch (n & -n) {
            case 4:
              l = 2;
              break;
            case 16:
              l = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              l = 32;
              break;
            case 536870912:
              l = 268435456;
              break;
            default:
              l = 0;
          }
          (r = (l & (r.suspendedLanes | n)) !== 0 ? 0 : l),
            r !== 0 && r !== o.retryLane && ((o.retryLane = r), St(e, r, -1));
        }
        Su(), (t = Ao(e, t, n, Error(M(421))));
      } else
        c.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = py.bind(null, e)),
            (c._reactRetry = t),
            (t = null))
          : ((n = o.treeContext),
            (qe = Gt(c.nextSibling)),
            (at = t),
            (ve = !0),
            (Ot = null),
            n !== null &&
              ((vt[yt++] = Jt),
              (vt[yt++] = qt),
              (vt[yt++] = Kn),
              (Jt = n.id),
              (qt = n.overflow),
              (Kn = t)),
            (t = Sa(t, t.pendingProps.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? ((r = sd(e, t, r.children, r.fallback, n)),
        (l = t.child),
        (o = e.child.memoizedState),
        (l.memoizedState = o === null ? Lo(n) : od(o, n)),
        (l.childLanes = e.childLanes & ~n),
        (t.memoizedState = Oo),
        r)
      : ((n = ld(e, t, r.children, n)), (t.memoizedState = null), n);
  }
  return l
    ? ((r = sd(e, t, r.children, r.fallback, n)),
      (l = t.child),
      (o = e.child.memoizedState),
      (l.memoizedState = o === null ? Lo(n) : od(o, n)),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Oo),
      r)
    : ((n = ld(e, t, r.children, n)), (t.memoizedState = null), n);
}
function Sa(e, t) {
  return (
    (t = ml({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ld(e, t, n, r) {
  var o = e.child;
  return (
    (e = o.sibling),
    (n = Nn(o, { mode: "visible", children: n })),
    (t.mode & 1) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n)
  );
}
function sd(e, t, n, r, o) {
  var l = t.mode;
  e = e.child;
  var a = e.sibling,
    c = { mode: "hidden", children: n };
  return (
    (l & 1) === 0 && t.child !== e
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = c),
        (t.deletions = null))
      : ((n = Nn(e, c)), (n.subtreeFlags = e.subtreeFlags & 14680064)),
    a !== null ? (r = Nn(a, r)) : ((r = Vn(r, l, o, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function Ao(e, t, n, r) {
  return (
    r !== null && lu(r),
    zr(t, e.child, null, n),
    (e = Sa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ad(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), da(e.return, t, n);
}
function bs(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function vh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ke(e, t, r.children, n), (r = ye.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ad(e, n, t);
        else if (e.tag === 19) ad(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((fe(ye, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && al(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          bs(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && al(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        bs(t, !0, n, null, l);
        break;
      case "together":
        bs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function nn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xn |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Nn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ny(e, t, n) {
  switch (t.tag) {
    case 3:
      mh(t), Ir();
      break;
    case 5:
      Bp(t);
      break;
    case 1:
      tt(t.type) && nl(t);
      break;
    case 4:
      su(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      fe(rl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (fe(ye, ye.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? gh(e, t, n)
          : (fe(ye, ye.current & 1),
            (e = nn(e, t, n)),
            e !== null ? e.sibling : null);
      fe(ye, ye.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return vh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        fe(ye, ye.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ph(e, t, n);
  }
  return nn(e, t, n);
}
function ry(e, t) {
  switch ((ou(t), t.tag)) {
    case 1:
      return (
        tt(t.type) && tl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        jr(),
        ge(et),
        ge(Be),
        uu(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return au(t), null;
    case 13:
      if (
        (ge(ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        Ir();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ge(ye), null;
    case 4:
      return jr(), null;
    case 10:
      return nu(t.type._context), null;
    case 22:
    case 23:
      return wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Do = !1,
  $e = !1,
  iy = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function xr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ce(e, t, r);
      }
    else n.current = null;
}
function ka(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var ud = !1;
function oy(e, t) {
  if (((la = Jo), (e = Cp()), Za(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            c = -1,
            p = -1,
            m = 0,
            S = 0,
            T = e,
            w = null;
          t: for (;;) {
            for (
              var L;
              T !== n || (o !== 0 && T.nodeType !== 3) || (c = a + o),
                T !== l || (r !== 0 && T.nodeType !== 3) || (p = a + r),
                T.nodeType === 3 && (a += T.nodeValue.length),
                (L = T.firstChild) !== null;

            )
              (w = T), (T = L);
            for (;;) {
              if (T === e) break t;
              if (
                (w === n && ++m === o && (c = a),
                w === l && ++S === r && (p = a),
                (L = T.nextSibling) !== null)
              )
                break;
              (T = w), (w = T.parentNode);
            }
            T = L;
          }
          n = c === -1 || p === -1 ? null : { start: c, end: p };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (sa = { focusedElem: e, selectionRange: n }, Jo = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var A = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (A !== null) {
                  var z = A.memoizedProps,
                    K = A.memoizedState,
                    g = t.stateNode,
                    f = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? z : Tt(t.type, z),
                      K
                    );
                  g.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                if (h.nodeType === 1) h.textContent = "";
                else if (h.nodeType === 9) {
                  var y = h.body;
                  y != null && (y.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (k) {
          Ce(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (A = ud), (ud = !1), A;
}
function wi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ka(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ol(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ca(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function yh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ht], delete t[Mi], delete t[ca], delete t[Hv], delete t[Uv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _h(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _h(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ea(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = el));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ea(e, t, n), e = e.sibling; e !== null; ) Ea(e, t, n), (e = e.sibling);
}
function xa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xa(e, t, n), e = e.sibling; e !== null; ) xa(e, t, n), (e = e.sibling);
}
var Ie = null,
  Pt = !1;
function cn(e, t, n) {
  for (n = n.child; n !== null; ) wh(e, t, n), (n = n.sibling);
}
function wh(e, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == "function")
    try {
      Ut.onCommitFiberUnmount(Sl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      $e || xr(n, t);
    case 6:
      var r = Ie,
        o = Pt;
      (Ie = null),
        cn(e, t, n),
        (Ie = r),
        (Pt = o),
        Ie !== null &&
          (Pt
            ? ((e = Ie),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ie.removeChild(n.stateNode));
      break;
    case 18:
      Ie !== null &&
        (Pt
          ? ((e = Ie),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ps(e.parentNode, n)
              : e.nodeType === 1 && Ps(e, n),
            Pi(e))
          : Ps(Ie, n.stateNode));
      break;
    case 4:
      (r = Ie),
        (o = Pt),
        (Ie = n.stateNode.containerInfo),
        (Pt = !0),
        cn(e, t, n),
        (Ie = r),
        (Pt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !$e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && ka(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      cn(e, t, n);
      break;
    case 1:
      if (
        !$e &&
        (xr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (c) {
          Ce(n, t, c);
        }
      cn(e, t, n);
      break;
    case 21:
      cn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? (($e = (r = $e) || n.memoizedState !== null), cn(e, t, n), ($e = r))
        : cn(e, t, n);
      break;
    default:
      cn(e, t, n);
  }
}
function fd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new iy()),
      t.forEach(function (r) {
        var o = hy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Nt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          a = t,
          c = a;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 5:
              (Ie = c.stateNode), (Pt = !1);
              break e;
            case 3:
              (Ie = c.stateNode.containerInfo), (Pt = !0);
              break e;
            case 4:
              (Ie = c.stateNode.containerInfo), (Pt = !0);
              break e;
          }
          c = c.return;
        }
        if (Ie === null) throw Error(M(160));
        wh(l, a, o), (Ie = null), (Pt = !1);
        var p = o.alternate;
        p !== null && (p.return = null), (o.return = null);
      } catch (m) {
        Ce(o, t, m);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Sh(t, e), (t = t.sibling);
}
function Sh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Nt(t, e), Rt(e), r & 4)) {
        try {
          wi(3, e, e.return), Ol(3, e);
        } catch (A) {
          Ce(e, e.return, A);
        }
        try {
          wi(5, e, e.return);
        } catch (A) {
          Ce(e, e.return, A);
        }
      }
      break;
    case 1:
      Nt(t, e), Rt(e), r & 512 && n !== null && xr(n, n.return);
      break;
    case 5:
      if (
        (Nt(t, e),
        Rt(e),
        r & 512 && n !== null && xr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ei(o, "");
        } catch (A) {
          Ce(e, e.return, A);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          c = e.type,
          p = e.updateQueue;
        if (((e.updateQueue = null), p !== null))
          try {
            c === "input" && l.type === "radio" && l.name != null && Wd(o, l),
              Gs(c, a);
            var m = Gs(c, l);
            for (a = 0; a < p.length; a += 2) {
              var S = p[a],
                T = p[a + 1];
              S === "style"
                ? Xd(o, T)
                : S === "dangerouslySetInnerHTML"
                ? Kd(o, T)
                : S === "children"
                ? Ei(o, T)
                : $a(o, S, T, m);
            }
            switch (c) {
              case "input":
                Vs(o, l);
                break;
              case "textarea":
                Vd(o, l);
                break;
              case "select":
                var w = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var L = l.value;
                L != null
                  ? Tr(o, !!l.multiple, L, !1)
                  : w !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Tr(o, !!l.multiple, l.defaultValue, !0)
                      : Tr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Mi] = l;
          } catch (A) {
            Ce(e, e.return, A);
          }
      }
      break;
    case 6:
      if ((Nt(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (m = e.stateNode), (S = e.memoizedProps);
        try {
          m.nodeValue = S;
        } catch (A) {
          Ce(e, e.return, A);
        }
      }
      break;
    case 3:
      if (
        (Nt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Pi(t.containerInfo);
        } catch (A) {
          Ce(e, e.return, A);
        }
      break;
    case 4:
      Nt(t, e), Rt(e);
      break;
    case 13:
      Nt(t, e),
        Rt(e),
        (m = e.child),
        m.flags & 8192 &&
          m.memoizedState !== null &&
          (m.alternate === null || m.alternate.memoizedState === null) &&
          (yu = Ne()),
        r & 4 && fd(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? (($e = (S = $e) || m), Nt(t, e), ($e = S)) : Nt(t, e),
        Rt(e),
        r & 8192)
      ) {
        S = e.memoizedState !== null;
        e: for (T = null, w = e; ; ) {
          if (w.tag === 5) {
            if (T === null) {
              T = w;
              try {
                (o = w.stateNode),
                  S
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((c = w.stateNode),
                      (p = w.memoizedProps.style),
                      (a =
                        p != null && p.hasOwnProperty("display")
                          ? p.display
                          : null),
                      (c.style.display = Yd("display", a)));
              } catch (A) {
                Ce(e, e.return, A);
              }
            }
          } else if (w.tag === 6) {
            if (T === null)
              try {
                w.stateNode.nodeValue = S ? "" : w.memoizedProps;
              } catch (A) {
                Ce(e, e.return, A);
              }
          } else if (
            ((w.tag !== 22 && w.tag !== 23) ||
              w.memoizedState === null ||
              w === e) &&
            w.child !== null
          ) {
            (w.child.return = w), (w = w.child);
            continue;
          }
          if (w === e) break e;
          for (; w.sibling === null; ) {
            if (w.return === null || w.return === e) break e;
            T === w && (T = null), (w = w.return);
          }
          T === w && (T = null), (w.sibling.return = w.return), (w = w.sibling);
        }
        if (S && !m && (e.mode & 1) !== 0)
          for (R = e, e = e.child; e !== null; ) {
            for (m = R = e; R !== null; ) {
              switch (((S = R), (T = S.child), S.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wi(4, S, S.return);
                  break;
                case 1:
                  if (
                    (xr(S, S.return),
                    (l = S.stateNode),
                    typeof l.componentWillUnmount == "function")
                  ) {
                    (w = S), (L = S.return);
                    try {
                      (o = w),
                        (l.props = o.memoizedProps),
                        (l.state = o.memoizedState),
                        l.componentWillUnmount();
                    } catch (A) {
                      Ce(w, L, A);
                    }
                  }
                  break;
                case 5:
                  xr(S, S.return);
                  break;
                case 22:
                  if (S.memoizedState !== null) {
                    pd(m);
                    continue;
                  }
              }
              T !== null ? ((T.return = S), (R = T)) : pd(m);
            }
            e = e.sibling;
          }
      }
      break;
    case 19:
      Nt(t, e), Rt(e), r & 4 && fd(e);
      break;
    case 21:
      break;
    default:
      Nt(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_h(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ei(o, ""), (r.flags &= -33));
          var l = cd(e);
          xa(e, l, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            c = cd(e);
          Ea(e, c, a);
          break;
        default:
          throw Error(M(161));
      }
    } catch (p) {
      Ce(e, e.return, p);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ly(e, t, n) {
  (R = e), kh(e);
}
function kh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      l = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Do;
      if (!a) {
        var c = o.alternate,
          p = (c !== null && c.memoizedState !== null) || $e;
        c = Do;
        var m = $e;
        if (((Do = a), ($e = p) && !m))
          for (R = o; R !== null; )
            (a = R),
              (p = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? hd(o)
                : p !== null
                ? ((p.return = a), (R = p))
                : hd(o);
        for (; l !== null; ) (R = l), kh(l), (l = l.sibling);
        (R = o), (Do = c), ($e = m);
      }
      dd(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && l !== null
        ? ((l.return = o), (R = l))
        : dd(e);
  }
}
function dd(e) {
  for (; R !== null; ) {
    var t = R;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              $e || Ol(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !$e)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Wf(t, l, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wf(t, a, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var p = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    p.autoFocus && n.focus();
                    break;
                  case "img":
                    p.src && (n.src = p.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var m = t.alternate;
                if (m !== null) {
                  var S = m.memoizedState;
                  if (S !== null) {
                    var T = S.dehydrated;
                    T !== null && Pi(T);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(M(163));
          }
        $e || (t.flags & 512 && Ca(t));
      } catch (w) {
        Ce(t, t.return, w);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function pd(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function hd(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ol(4, t);
          } catch (p) {
            Ce(t, n, p);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (p) {
              Ce(t, o, p);
            }
          }
          var l = t.return;
          try {
            Ca(t);
          } catch (p) {
            Ce(t, l, p);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Ca(t);
          } catch (p) {
            Ce(t, a, p);
          }
      }
    } catch (p) {
      Ce(t, t.return, p);
    }
    if (t === e) {
      R = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      (c.return = t.return), (R = c);
      break;
    }
    R = t.return;
  }
}
var sy = Math.ceil,
  fl = rn.ReactCurrentDispatcher,
  gu = rn.ReactCurrentOwner,
  wt = rn.ReactCurrentBatchConfig,
  ne = 0,
  Ae = null,
  Te = null,
  ze = 0,
  st = 0,
  Nr = Pn(0),
  Le = 0,
  Ri = null,
  Xn = 0,
  Ll = 0,
  vu = 0,
  Si = null,
  Je = null,
  yu = 0,
  Fr = 1 / 0,
  Yt = null,
  dl = !1,
  Na = null,
  Sn = null,
  Mo = !1,
  gn = null,
  pl = 0,
  ki = 0,
  Ta = null,
  Uo = -1,
  Wo = 0;
function Ye() {
  return (ne & 6) !== 0 ? Ne() : Uo !== -1 ? Uo : (Uo = Ne());
}
function kn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (ne & 2) !== 0 && ze !== 0
    ? ze & -ze
    : Vv.transition !== null
    ? (Wo === 0 && (Wo = sp()), Wo)
    : ((e = le),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hp(e.type))),
      e);
}
function St(e, t, n) {
  if (50 < ki) throw ((ki = 0), (Ta = null), Error(M(185)));
  var r = Al(e, t);
  return r === null
    ? null
    : (Bi(r, t, n),
      ((ne & 2) === 0 || r !== Ae) &&
        (r === Ae && ((ne & 2) === 0 && (Ll |= t), Le === 4 && hn(r, ze)),
        nt(r, n),
        t === 1 &&
          ne === 0 &&
          (e.mode & 1) === 0 &&
          ((Fr = Ne() + 500), Nl && On())),
      r);
}
function Al(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function Ch(e) {
  return (Ae !== null || Lt !== null) && (e.mode & 1) !== 0 && (ne & 2) === 0;
}
function nt(e, t) {
  var n = e.callbackNode;
  Vg(e, t);
  var r = Go(e, e === Ae ? ze : 0);
  if (r === 0)
    n !== null && wf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wf(n), t === 1))
      e.tag === 0 ? Wv(md.bind(null, e)) : Mp(md.bind(null, e)),
        $v(function () {
          ne === 0 && On();
        }),
        (n = null);
    else {
      switch (ap(r)) {
        case 1:
          n = Va;
          break;
        case 4:
          n = op;
          break;
        case 16:
          n = Xo;
          break;
        case 536870912:
          n = lp;
          break;
        default:
          n = Xo;
      }
      n = Ah(n, Eh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Eh(e, t) {
  if (((Uo = -1), (Wo = 0), (ne & 6) !== 0)) throw Error(M(327));
  var n = e.callbackNode;
  if (Dr() && e.callbackNode !== n) return null;
  var r = Go(e, e === Ae ? ze : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = hl(e, r);
  else {
    t = r;
    var o = ne;
    ne |= 2;
    var l = Nh();
    (Ae !== e || ze !== t) && ((Yt = null), (Fr = Ne() + 500), Wn(e, t));
    do
      try {
        cy();
        break;
      } catch (c) {
        xh(e, c);
      }
    while (1);
    tu(),
      (fl.current = l),
      (ne = o),
      Te !== null ? (t = 0) : ((Ae = null), (ze = 0), (t = Le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ta(e)), o !== 0 && ((r = o), (t = Pa(e, o)))), t === 1)
    )
      throw ((n = Ri), Wn(e, 0), hn(e, r), nt(e, Ne()), n);
    if (t === 6) hn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        (r & 30) === 0 &&
          !ay(o) &&
          ((t = hl(e, r)),
          t === 2 && ((l = ta(e)), l !== 0 && ((r = l), (t = Pa(e, l)))),
          t === 1))
      )
        throw ((n = Ri), Wn(e, 0), hn(e, r), nt(e, Ne()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          $n(e, Je, Yt);
          break;
        case 3:
          if (
            (hn(e, r), (r & 130023424) === r && ((t = yu + 500 - Ne()), 10 < t))
          ) {
            if (Go(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ye(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ua($n.bind(null, e, Je, Yt), t);
            break;
          }
          $n(e, Je, Yt);
          break;
        case 4:
          if ((hn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - At(r);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~l);
          }
          if (
            ((r = o),
            (r = Ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * sy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ua($n.bind(null, e, Je, Yt), r);
            break;
          }
          $n(e, Je, Yt);
          break;
        case 5:
          $n(e, Je, Yt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return nt(e, Ne()), e.callbackNode === n ? Eh.bind(null, e) : null;
}
function Pa(e, t) {
  var n = Si;
  return (
    e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256),
    (e = hl(e, t)),
    e !== 2 && ((t = Je), (Je = n), t !== null && Oa(t)),
    e
  );
}
function Oa(e) {
  Je === null ? (Je = e) : Je.push.apply(Je, e);
}
function ay(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Dt(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function hn(e, t) {
  for (
    t &= ~vu,
      t &= ~Ll,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - At(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function md(e) {
  if ((ne & 6) !== 0) throw Error(M(327));
  Dr();
  var t = Go(e, 0);
  if ((t & 1) === 0) return nt(e, Ne()), null;
  var n = hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ta(e);
    r !== 0 && ((t = r), (n = Pa(e, r)));
  }
  if (n === 1) throw ((n = Ri), Wn(e, 0), hn(e, t), nt(e, Ne()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $n(e, Je, Yt),
    nt(e, Ne()),
    null
  );
}
function _u(e, t) {
  var n = ne;
  ne |= 1;
  try {
    return e(t);
  } finally {
    (ne = n), ne === 0 && ((Fr = Ne() + 500), Nl && On());
  }
}
function Gn(e) {
  gn !== null && gn.tag === 0 && (ne & 6) === 0 && Dr();
  var t = ne;
  ne |= 1;
  var n = wt.transition,
    r = le;
  try {
    if (((wt.transition = null), (le = 1), e)) return e();
  } finally {
    (le = r), (wt.transition = n), (ne = t), (ne & 6) === 0 && On();
  }
}
function wu() {
  (st = Nr.current), ge(Nr);
}
function Wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Rv(n)), Te !== null))
    for (n = Te.return; n !== null; ) {
      var r = n;
      switch ((ou(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && tl();
          break;
        case 3:
          jr(), ge(et), ge(Be), uu();
          break;
        case 5:
          au(r);
          break;
        case 4:
          jr();
          break;
        case 13:
          ge(ye);
          break;
        case 19:
          ge(ye);
          break;
        case 10:
          nu(r.type._context);
          break;
        case 22:
        case 23:
          wu();
      }
      n = n.return;
    }
  if (
    ((Ae = e),
    (Te = e = Nn(e.current, null)),
    (ze = st = t),
    (Le = 0),
    (Ri = null),
    (vu = Ll = Xn = 0),
    (Je = Si = null),
    Lt !== null)
  ) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (r.next = a);
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function xh(e, t) {
  do {
    var n = Te;
    try {
      if ((tu(), (Bo.current = cl), ul)) {
        for (var r = _e.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ul = !1;
      }
      if (
        ((Yn = 0),
        (Me = Oe = _e = null),
        (_i = !1),
        (zi = 0),
        (gu.current = null),
        n === null || n.return === null)
      ) {
        (Le = 1), (Ri = t), (Te = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          c = n,
          p = t;
        if (
          ((t = ze),
          (c.flags |= 32768),
          p !== null && typeof p == "object" && typeof p.then == "function")
        ) {
          var m = p,
            S = c,
            T = S.tag;
          if ((S.mode & 1) === 0 && (T === 0 || T === 11 || T === 15)) {
            var w = S.alternate;
            w
              ? ((S.updateQueue = w.updateQueue),
                (S.memoizedState = w.memoizedState),
                (S.lanes = w.lanes))
              : ((S.updateQueue = null), (S.memoizedState = null));
          }
          var L = Zf(a);
          if (L !== null) {
            (L.flags &= -257),
              ed(L, a, c, l, t),
              L.mode & 1 && qf(l, m, t),
              (t = L),
              (p = m);
            var A = t.updateQueue;
            if (A === null) {
              var z = new Set();
              z.add(p), (t.updateQueue = z);
            } else A.add(p);
            break e;
          } else {
            if ((t & 1) === 0) {
              qf(l, m, t), Su();
              break e;
            }
            p = Error(M(426));
          }
        } else if (ve && c.mode & 1) {
          var K = Zf(a);
          if (K !== null) {
            (K.flags & 65536) === 0 && (K.flags |= 256),
              ed(K, a, c, l, t),
              lu(p);
            break e;
          }
        }
        (l = p),
          Le !== 4 && (Le = 2),
          Si === null ? (Si = [l]) : Si.push(l),
          (p = mu(p, c)),
          (c = a);
        do {
          switch (c.tag) {
            case 3:
              (c.flags |= 65536), (t &= -t), (c.lanes |= t);
              var g = sh(c, p, t);
              Uf(c, g);
              break e;
            case 1:
              l = p;
              var f = c.type,
                h = c.stateNode;
              if (
                (c.flags & 128) === 0 &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Sn === null || !Sn.has(h))))
              ) {
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var y = ah(c, l, t);
                Uf(c, y);
                break e;
              }
          }
          c = c.return;
        } while (c !== null);
      }
      Ph(n);
    } catch (k) {
      (t = k), Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Nh() {
  var e = fl.current;
  return (fl.current = cl), e === null ? cl : e;
}
function Su() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
    Ae === null ||
      ((Xn & 268435455) === 0 && (Ll & 268435455) === 0) ||
      hn(Ae, ze);
}
function hl(e, t) {
  var n = ne;
  ne |= 2;
  var r = Nh();
  (Ae !== e || ze !== t) && ((Yt = null), Wn(e, t));
  do
    try {
      uy();
      break;
    } catch (o) {
      xh(e, o);
    }
  while (1);
  if ((tu(), (ne = n), (fl.current = r), Te !== null)) throw Error(M(261));
  return (Ae = null), (ze = 0), Le;
}
function uy() {
  for (; Te !== null; ) Th(Te);
}
function cy() {
  for (; Te !== null && !zg(); ) Th(Te);
}
function Th(e) {
  var t = Lh(e.alternate, e, st);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ph(e) : (Te = t),
    (gu.current = null);
}
function Ph(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = ey(n, t, st)), n !== null)) {
        Te = n;
        return;
      }
    } else {
      if (((n = ry(n, t)), n !== null)) {
        (n.flags &= 32767), (Te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Le = 6), (Te = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function $n(e, t, n) {
  var r = le,
    o = wt.transition;
  try {
    (wt.transition = null), (le = 1), fy(e, t, n, r);
  } finally {
    (wt.transition = o), (le = r);
  }
  return null;
}
function fy(e, t, n, r) {
  do Dr();
  while (gn !== null);
  if ((ne & 6) !== 0) throw Error(M(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Qg(e, l),
    e === Ae && ((Te = Ae = null), (ze = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Mo ||
      ((Mo = !0),
      Ah(Xo, function () {
        return Dr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || l)
  ) {
    (l = wt.transition), (wt.transition = null);
    var a = le;
    le = 1;
    var c = ne;
    (ne |= 4),
      (gu.current = null),
      oy(e, n),
      Sh(n, e),
      Dv(sa),
      (Jo = !!la),
      (sa = la = null),
      (e.current = n),
      ly(n),
      jg(),
      (ne = c),
      (le = a),
      (wt.transition = l);
  } else e.current = n;
  if (
    (Mo && ((Mo = !1), (gn = e), (pl = o)),
    (l = e.pendingLanes),
    l === 0 && (Sn = null),
    $g(n.stateNode),
    nt(e, Ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) r(t[n]);
  if (dl) throw ((dl = !1), (e = Na), (Na = null), e);
  return (
    (pl & 1) !== 0 && e.tag !== 0 && Dr(),
    (l = e.pendingLanes),
    (l & 1) !== 0 ? (e === Ta ? ki++ : ((ki = 0), (Ta = e))) : (ki = 0),
    On(),
    null
  );
}
function Dr() {
  if (gn !== null) {
    var e = ap(pl),
      t = wt.transition,
      n = le;
    try {
      if (((wt.transition = null), (le = 16 > e ? 16 : e), gn === null))
        var r = !1;
      else {
        if (((e = gn), (gn = null), (pl = 0), (ne & 6) !== 0))
          throw Error(M(331));
        var o = ne;
        for (ne |= 4, R = e.current; R !== null; ) {
          var l = R,
            a = l.child;
          if ((R.flags & 16) !== 0) {
            var c = l.deletions;
            if (c !== null) {
              for (var p = 0; p < c.length; p++) {
                var m = c[p];
                for (R = m; R !== null; ) {
                  var S = R;
                  switch (S.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wi(8, S, l);
                  }
                  var T = S.child;
                  if (T !== null) (T.return = S), (R = T);
                  else
                    for (; R !== null; ) {
                      S = R;
                      var w = S.sibling,
                        L = S.return;
                      if ((yh(S), S === m)) {
                        R = null;
                        break;
                      }
                      if (w !== null) {
                        (w.return = L), (R = w);
                        break;
                      }
                      R = L;
                    }
                }
              }
              var A = l.alternate;
              if (A !== null) {
                var z = A.child;
                if (z !== null) {
                  A.child = null;
                  do {
                    var K = z.sibling;
                    (z.sibling = null), (z = K);
                  } while (z !== null);
                }
              }
              R = l;
            }
          }
          if ((l.subtreeFlags & 2064) !== 0 && a !== null)
            (a.return = l), (R = a);
          else
            e: for (; R !== null; ) {
              if (((l = R), (l.flags & 2048) !== 0))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wi(9, l, l.return);
                }
              var g = l.sibling;
              if (g !== null) {
                (g.return = l.return), (R = g);
                break e;
              }
              R = l.return;
            }
        }
        var f = e.current;
        for (R = f; R !== null; ) {
          a = R;
          var h = a.child;
          if ((a.subtreeFlags & 2064) !== 0 && h !== null)
            (h.return = a), (R = h);
          else
            e: for (a = f; R !== null; ) {
              if (((c = R), (c.flags & 2048) !== 0))
                try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ol(9, c);
                  }
                } catch (k) {
                  Ce(c, c.return, k);
                }
              if (c === a) {
                R = null;
                break e;
              }
              var y = c.sibling;
              if (y !== null) {
                (y.return = c.return), (R = y);
                break e;
              }
              R = c.return;
            }
        }
        if (
          ((ne = o), On(), Ut && typeof Ut.onPostCommitFiberRoot == "function")
        )
          try {
            Ut.onPostCommitFiberRoot(Sl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (le = n), (wt.transition = t);
    }
  }
  return !1;
}
function gd(e, t, n) {
  (t = mu(n, t)),
    (t = sh(e, t, 1)),
    wn(e, t),
    (t = Ye()),
    (e = Al(e, 1)),
    e !== null && (Bi(e, 1, t), nt(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) gd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Sn === null || !Sn.has(r)))
        ) {
          (e = mu(n, e)),
            (e = ah(t, e, 1)),
            wn(t, e),
            (e = Ye()),
            (t = Al(t, 1)),
            t !== null && (Bi(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function dy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ae === e &&
      (ze & n) === n &&
      (Le === 4 || (Le === 3 && (ze & 130023424) === ze && 500 > Ne() - yu)
        ? Wn(e, 0)
        : (vu |= n)),
    nt(e, t);
}
function Oh(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = ko), (ko <<= 1), (ko & 130023424) === 0 && (ko = 4194304)));
  var n = Ye();
  (e = Al(e, t)), e !== null && (Bi(e, t, n), nt(e, n));
}
function py(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Oh(e, n);
}
function hy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), Oh(e, n);
}
var Lh;
Lh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || et.current) Ze = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (Ze = !1), ny(e, t, n);
      Ze = (e.flags & 131072) !== 0;
    }
  else (Ze = !1), ve && (t.flags & 1048576) !== 0 && jp(t, sl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps);
      var o = br(t, Be.current);
      Ar(t, n), (o = fu(null, t, r, e, o, n));
      var l = du();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            tt(r) ? ((l = !0), nl(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ru(t),
            (o.updater = Tl),
            (t.stateNode = o),
            (o._reactInternals = t),
            ha(t, r, e, n),
            (t = wa(null, t, r, !0, l, n)))
          : ((t.tag = 0), ve && l && iu(t), Ke(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = gy(r)),
          (e = Tt(r, e)),
          o)
        ) {
          case 0:
            t = _a(null, t, r, e, n);
            break e;
          case 1:
            t = rd(null, t, r, e, n);
            break e;
          case 11:
            t = td(null, t, r, e, n);
            break e;
          case 14:
            t = nd(null, t, r, Tt(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tt(r, o)),
        _a(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tt(r, o)),
        rd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((mh(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          bp(e, t),
          ol(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = Error(M(423))), (t = id(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Error(M(424))), (t = id(e, t, r, n, o));
            break e;
          } else
            for (
              qe = Gt(t.stateNode.containerInfo.firstChild),
                at = t,
                ve = !0,
                Ot = null,
                n = $p(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ir(), r === o)) {
            t = nn(e, t, n);
            break e;
          }
          Ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Bp(t),
        e === null && ga(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        aa(r, o) ? (a = null) : l !== null && aa(r, l) && (t.flags |= 32),
        hh(e, t),
        Ke(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && ga(t), null;
    case 13:
      return gh(e, t, n);
    case 4:
      return (
        su(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zr(t, null, r, n)) : Ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tt(r, o)),
        td(e, t, r, o, n)
      );
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          fe(rl, r._currentValue),
          (r._currentValue = a),
          l !== null)
        )
          if (Dt(l.value, a)) {
            if (l.children === o.children && !et.current) {
              t = nn(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var c = l.dependencies;
              if (c !== null) {
                a = l.child;
                for (var p = c.firstContext; p !== null; ) {
                  if (p.context === r) {
                    if (l.tag === 1) {
                      (p = Zt(-1, n & -n)), (p.tag = 2);
                      var m = l.updateQueue;
                      if (m !== null) {
                        m = m.shared;
                        var S = m.pending;
                        S === null
                          ? (p.next = p)
                          : ((p.next = S.next), (S.next = p)),
                          (m.pending = p);
                      }
                    }
                    (l.lanes |= n),
                      (p = l.alternate),
                      p !== null && (p.lanes |= n),
                      da(l.return, n, t),
                      (c.lanes |= n);
                    break;
                  }
                  p = p.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(M(341));
                (a.lanes |= n),
                  (c = a.alternate),
                  c !== null && (c.lanes |= n),
                  da(a, n, t),
                  (a = l.sibling);
              } else a = l.child;
              if (a !== null) a.return = l;
              else
                for (a = l; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((l = a.sibling), l !== null)) {
                    (l.return = a.return), (a = l);
                    break;
                  }
                  a = a.return;
                }
              l = a;
            }
        Ke(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Ar(t, n),
        (o = kt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Tt(r, t.pendingProps)),
        (o = Tt(r.type, o)),
        nd(e, t, r, o, n)
      );
    case 15:
      return dh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tt(r, o)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        tt(r) ? ((e = !0), nl(t)) : (e = !1),
        Ar(t, n),
        zp(t, r, o),
        ha(t, r, o, n),
        wa(null, t, r, !0, e, n)
      );
    case 19:
      return vh(e, t, n);
    case 22:
      return ph(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Ah(e, t) {
  return ip(e, t);
}
function my(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _t(e, t, n, r) {
  return new my(e, t, n, r);
}
function ku(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function gy(e) {
  if (typeof e == "function") return ku(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ha)) return 11;
    if (e === Ua) return 14;
  }
  return 2;
}
function Nn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _t(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vo(e, t, n, r, o, l) {
  var a = 2;
  if (((r = e), typeof e == "function")) ku(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case gr:
        return Vn(n.children, o, l, t);
      case Ba:
        (a = 8), (o |= 8);
        break;
      case $s:
        return (
          (e = _t(12, n, t, o | 2)), (e.elementType = $s), (e.lanes = l), e
        );
      case Bs:
        return (e = _t(13, n, t, o)), (e.elementType = Bs), (e.lanes = l), e;
      case Hs:
        return (e = _t(19, n, t, o)), (e.elementType = Hs), (e.lanes = l), e;
      case Bd:
        return ml(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rd:
              a = 10;
              break e;
            case $d:
              a = 9;
              break e;
            case Ha:
              a = 11;
              break e;
            case Ua:
              a = 14;
              break e;
            case fn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _t(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Vn(e, t, n, r) {
  return (e = _t(7, e, r, t)), (e.lanes = n), e;
}
function ml(e, t, n, r) {
  return (
    (e = _t(22, e, r, t)),
    (e.elementType = Bd),
    (e.lanes = n),
    (e.stateNode = {}),
    e
  );
}
function Is(e, t, n) {
  return (e = _t(6, e, null, t)), (e.lanes = n), e;
}
function zs(e, t, n) {
  return (
    (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = vs(0)),
    (this.expirationTimes = vs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Cu(e, t, n, r, o, l, a, c, p) {
  return (
    (e = new vy(e, t, n, c, p)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = _t(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ru(l),
    e
  );
}
function yy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: mr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dh(e) {
  if (!e) return xn;
  e = e._reactInternals;
  e: {
    if (qn(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (tt(n)) return Dp(e, n, t);
  }
  return t;
}
function Mh(e, t, n, r, o, l, a, c, p) {
  return (
    (e = Cu(n, r, !0, e, o, l, a, c, p)),
    (e.context = Dh(null)),
    (n = e.current),
    (r = Ye()),
    (o = kn(n)),
    (l = Zt(r, o)),
    (l.callback = t != null ? t : null),
    wn(n, l),
    (e.current.lanes = o),
    Bi(e, o, r),
    nt(e, r),
    e
  );
}
function Dl(e, t, n, r) {
  var o = t.current,
    l = Ye(),
    a = kn(o);
  return (
    (n = Dh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Zt(l, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    wn(o, t),
    (e = St(o, a, l)),
    e !== null && $o(e, o, a),
    a
  );
}
function gl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Eu(e, t) {
  vd(e, t), (e = e.alternate) && vd(e, t);
}
function _y() {
  return null;
}
var bh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function xu(e) {
  this._internalRoot = e;
}
Ml.prototype.render = xu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Dl(e, t, null, null);
};
Ml.prototype.unmount = xu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gn(function () {
      Dl(null, e, null, null);
    }),
      (t[tn] = null);
  }
};
function Ml(e) {
  this._internalRoot = e;
}
Ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = fp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++);
    pn.splice(n, 0, e), n === 0 && pp(e);
  }
};
function Nu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function bl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yd() {}
function wy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var m = gl(a);
        l.call(m);
      };
    }
    var a = Mh(t, r, e, 0, null, !1, !1, "", yd);
    return (
      (e._reactRootContainer = a),
      (e[tn] = a.current),
      Ai(e.nodeType === 8 ? e.parentNode : e),
      Gn(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var c = r;
    r = function () {
      var m = gl(p);
      c.call(m);
    };
  }
  var p = Cu(e, 0, !1, null, null, !1, !1, "", yd);
  return (
    (e._reactRootContainer = p),
    (e[tn] = p.current),
    Ai(e.nodeType === 8 ? e.parentNode : e),
    Gn(function () {
      Dl(t, p, n, r);
    }),
    p
  );
}
function Il(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var c = o;
      o = function () {
        var p = gl(a);
        c.call(p);
      };
    }
    Dl(t, a, e, o);
  } else a = wy(n, t, e, o, r);
  return gl(a);
}
up = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = di(t.pendingLanes);
        n !== 0 &&
          (Qa(t, n | 1),
          nt(t, Ne()),
          (ne & 6) === 0 && ((Fr = Ne() + 500), On()));
      }
      break;
    case 13:
      var r = Ye();
      Gn(function () {
        return St(e, 1, r);
      }),
        Eu(e, 1);
  }
};
Ka = function (e) {
  if (e.tag === 13) {
    var t = Ye();
    St(e, 134217728, t), Eu(e, 134217728);
  }
};
cp = function (e) {
  if (e.tag === 13) {
    var t = Ye(),
      n = kn(e);
    St(e, n, t), Eu(e, n);
  }
};
fp = function () {
  return le;
};
dp = function (e, t) {
  var n = le;
  try {
    return (le = e), t();
  } finally {
    le = n;
  }
};
qs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = xl(r);
            if (!o) throw Error(M(90));
            Ud(r), Vs(r, o);
          }
        }
      }
      break;
    case "textarea":
      Vd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Tr(e, !!n.multiple, t, !1);
  }
};
qd = _u;
Zd = Gn;
var Sy = { usingClientEntryPoint: !1, Events: [Ui, wr, xl, Gd, Jd, _u] },
  ui = {
    findFiberByHostInstance: Bn,
    bundleType: 0,
    version: "18.1.0",
    rendererPackageName: "react-dom",
  },
  ky = {
    bundleType: ui.bundleType,
    version: ui.version,
    rendererPackageName: ui.rendererPackageName,
    rendererConfig: ui.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = np(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ui.findFiberByHostInstance || _y,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bo.isDisabled && bo.supportsFiber)
    try {
      (Sl = bo.inject(ky)), (Ut = bo);
    } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy;
ct.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Nu(t)) throw Error(M(200));
  return yy(e, t, null, n);
};
ct.createRoot = function (e, t) {
  if (!Nu(e)) throw Error(M(299));
  var n = !1,
    r = "",
    o = bh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Cu(e, 1, !1, null, null, n, !1, r, o)),
    (e[tn] = t.current),
    Ai(e.nodeType === 8 ? e.parentNode : e),
    new xu(t)
  );
};
ct.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = np(t)), (e = e === null ? null : e.stateNode), e;
};
ct.flushSync = function (e) {
  return Gn(e);
};
ct.hydrate = function (e, t, n) {
  if (!bl(t)) throw Error(M(200));
  return Il(null, e, t, !0, n);
};
ct.hydrateRoot = function (e, t, n) {
  if (!Nu(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = bh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Mh(t, null, e, 1, n != null ? n : null, o, !1, l, a)),
    (e[tn] = t.current),
    Ai(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ml(t);
};
ct.render = function (e, t, n) {
  if (!bl(t)) throw Error(M(200));
  return Il(null, e, t, !1, n);
};
ct.unmountComponentAtNode = function (e) {
  if (!bl(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (Gn(function () {
        Il(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[tn] = null);
        });
      }),
      !0)
    : !1;
};
ct.unstable_batchedUpdates = _u;
ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!bl(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Il(e, t, n, !1, r);
};
ct.version = "18.1.0-next-22edb9f77-20220426";
function Ih() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ih);
    } catch (e) {
      console.error(e);
    }
}
Ih(), (bd.exports = ct);
var _d = bd.exports;
(Fs.createRoot = _d.createRoot), (Fs.hydrateRoot = _d.hydrateRoot);
function vl() {
  return (
    (vl =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    vl.apply(this, arguments)
  );
}
var Un;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Un || (Un = {}));
var wd = function (e) {
    return e;
  },
  Sd = "beforeunload",
  Cy = "popstate";
function Ey(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.window,
    r = n === void 0 ? document.defaultView : n,
    o = r.history;
  function l() {
    var P = r.location,
      N = P.pathname,
      B = P.search,
      U = P.hash,
      de = o.state || {};
    return [
      de.idx,
      wd({
        pathname: N,
        search: B,
        hash: U,
        state: de.usr || null,
        key: de.key || "default",
      }),
    ];
  }
  var a = null;
  function c() {
    if (a) L.call(a), (a = null);
    else {
      var P = Un.Pop,
        N = l(),
        B = N[0],
        U = N[1];
      if (L.length) {
        if (B != null) {
          var de = S - B;
          de &&
            ((a = {
              action: P,
              location: U,
              retry: function () {
                k(de * -1);
              },
            }),
            k(de));
        }
      } else f(P);
    }
  }
  r.addEventListener(Cy, c);
  var p = Un.Pop,
    m = l(),
    S = m[0],
    T = m[1],
    w = Cd(),
    L = Cd();
  S == null && ((S = 0), o.replaceState(vl({}, o.state, { idx: S }), ""));
  function A(P) {
    return typeof P == "string" ? P : La(P);
  }
  function z(P, N) {
    return (
      N === void 0 && (N = null),
      wd(
        vl(
          { pathname: T.pathname, hash: "", search: "" },
          typeof P == "string" ? Zn(P) : P,
          { state: N, key: xy() }
        )
      )
    );
  }
  function K(P, N) {
    return [{ usr: P.state, key: P.key, idx: N }, A(P)];
  }
  function g(P, N, B) {
    return !L.length || (L.call({ action: P, location: N, retry: B }), !1);
  }
  function f(P) {
    p = P;
    var N = l();
    (S = N[0]), (T = N[1]), w.call({ action: p, location: T });
  }
  function h(P, N) {
    var B = Un.Push,
      U = z(P, N);
    function de() {
      h(P, N);
    }
    if (g(B, U, de)) {
      var He = K(U, S + 1),
        dt = He[0],
        bt = He[1];
      try {
        o.pushState(dt, "", bt);
      } catch {
        r.location.assign(bt);
      }
      f(B);
    }
  }
  function y(P, N) {
    var B = Un.Replace,
      U = z(P, N);
    function de() {
      y(P, N);
    }
    if (g(B, U, de)) {
      var He = K(U, S),
        dt = He[0],
        bt = He[1];
      o.replaceState(dt, "", bt), f(B);
    }
  }
  function k(P) {
    o.go(P);
  }
  var x = {
    get action() {
      return p;
    },
    get location() {
      return T;
    },
    createHref: A,
    push: h,
    replace: y,
    go: k,
    back: function () {
      k(-1);
    },
    forward: function () {
      k(1);
    },
    listen: function (N) {
      return w.push(N);
    },
    block: function (N) {
      var B = L.push(N);
      return (
        L.length === 1 && r.addEventListener(Sd, kd),
        function () {
          B(), L.length || r.removeEventListener(Sd, kd);
        }
      );
    },
  };
  return x;
}
function kd(e) {
  e.preventDefault(), (e.returnValue = "");
}
function Cd() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function (n) {
      return (
        e.push(n),
        function () {
          e = e.filter(function (r) {
            return r !== n;
          });
        }
      );
    },
    call: function (n) {
      e.forEach(function (r) {
        return r && r(n);
      });
    },
  };
}
function xy() {
  return Math.random().toString(36).substr(2, 8);
}
function La(e) {
  var t = e.pathname,
    n = t === void 0 ? "/" : t,
    r = e.search,
    o = r === void 0 ? "" : r,
    l = e.hash,
    a = l === void 0 ? "" : l;
  return (
    o && o !== "?" && (n += o.charAt(0) === "?" ? o : "?" + o),
    a && a !== "#" && (n += a.charAt(0) === "#" ? a : "#" + a),
    n
  );
}
function Zn(e) {
  var t = {};
  if (e) {
    var n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    var r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Tu = V.exports.createContext(null),
  Pu = V.exports.createContext(null),
  Vi = V.exports.createContext({ outlet: null, matches: [] });
function Mt(e, t) {
  if (!e) throw new Error(t);
}
function Ny(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Zn(t) : t,
    o = Fh(r.pathname || "/", n);
  if (o == null) return null;
  let l = zh(e);
  Ty(l);
  let a = null;
  for (let c = 0; a == null && c < l.length; ++c) a = zy(l[c], o);
  return a;
}
function zh(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    e.forEach((o, l) => {
      let a = {
        relativePath: o.path || "",
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: l,
        route: o,
      };
      a.relativePath.startsWith("/") &&
        (a.relativePath.startsWith(r) || Mt(!1),
        (a.relativePath = a.relativePath.slice(r.length)));
      let c = Cn([r, a.relativePath]),
        p = n.concat(a);
      o.children &&
        o.children.length > 0 &&
        (o.index === !0 && Mt(!1), zh(o.children, t, p, c)),
        !(o.path == null && !o.index) &&
          t.push({ path: c, score: by(c, o.index), routesMeta: p });
    }),
    t
  );
}
function Ty(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Iy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Py = /^:\w+$/,
  Oy = 3,
  Ly = 2,
  Ay = 1,
  Dy = 10,
  My = -2,
  Ed = (e) => e === "*";
function by(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ed) && (r += My),
    t && (r += Ly),
    n
      .filter((o) => !Ed(o))
      .reduce((o, l) => o + (Py.test(l) ? Oy : l === "" ? Ay : Dy), r)
  );
}
function Iy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function zy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    l = [];
  for (let a = 0; a < n.length; ++a) {
    let c = n[a],
      p = a === n.length - 1,
      m = o === "/" ? t : t.slice(o.length) || "/",
      S = jy(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: p },
        m
      );
    if (!S) return null;
    Object.assign(r, S.params);
    let T = c.route;
    l.push({
      params: r,
      pathname: Cn([o, S.pathname]),
      pathnameBase: Rh(Cn([o, S.pathnameBase])),
      route: T,
    }),
      S.pathnameBase !== "/" && (o = Cn([o, S.pathnameBase]));
  }
  return l;
}
function jy(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Fy(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    a = l.replace(/(.)\/+$/, "$1"),
    c = o.slice(1);
  return {
    params: r.reduce((m, S, T) => {
      if (S === "*") {
        let w = c[T] || "";
        a = l.slice(0, l.length - w.length).replace(/(.)\/+$/, "$1");
      }
      return (m[S] = Ry(c[T] || "")), m;
    }, {}),
    pathname: l,
    pathnameBase: a,
    pattern: e,
  };
}
function Fy(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0);
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (a, c) => (r.push(c), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : (o += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Ry(e, t) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function $y(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Zn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : By(n, t)) : t,
    search: Uy(r),
    hash: Wy(o),
  };
}
function By(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function jh(e, t, n) {
  let r = typeof e == "string" ? Zn(e) : e,
    o = e === "" || r.pathname === "" ? "/" : r.pathname,
    l;
  if (o == null) l = n;
  else {
    let c = t.length - 1;
    if (o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (c -= 1);
      r.pathname = p.join("/");
    }
    l = c >= 0 ? t[c] : "/";
  }
  let a = $y(r, l);
  return (
    o &&
      o !== "/" &&
      o.endsWith("/") &&
      !a.pathname.endsWith("/") &&
      (a.pathname += "/"),
    a
  );
}
function Hy(e) {
  return e === "" || e.pathname === ""
    ? "/"
    : typeof e == "string"
    ? Zn(e).pathname
    : e.pathname;
}
function Fh(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = e.charAt(t.length);
  return n && n !== "/" ? null : e.slice(t.length) || "/";
}
const Cn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Rh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Uy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Wy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Vy(e) {
  Hr() || Mt(!1);
  let { basename: t, navigator: n } = V.exports.useContext(Tu),
    { hash: r, pathname: o, search: l } = Ou(e),
    a = o;
  if (t !== "/") {
    let c = Hy(e),
      p = c != null && c.endsWith("/");
    a = o === "/" ? t + (p ? "/" : "") : Cn([t, o]);
  }
  return n.createHref({ pathname: a, search: l, hash: r });
}
function Hr() {
  return V.exports.useContext(Pu) != null;
}
function er() {
  return Hr() || Mt(!1), V.exports.useContext(Pu).location;
}
function Ur() {
  Hr() || Mt(!1);
  let { basename: e, navigator: t } = V.exports.useContext(Tu),
    { matches: n } = V.exports.useContext(Vi),
    { pathname: r } = er(),
    o = JSON.stringify(n.map((c) => c.pathnameBase)),
    l = V.exports.useRef(!1);
  return (
    V.exports.useEffect(() => {
      l.current = !0;
    }),
    V.exports.useCallback(
      function (c, p) {
        if ((p === void 0 && (p = {}), !l.current)) return;
        if (typeof c == "number") {
          t.go(c);
          return;
        }
        let m = jh(c, JSON.parse(o), r);
        e !== "/" && (m.pathname = Cn([e, m.pathname])),
          (p.replace ? t.replace : t.push)(m, p.state);
      },
      [e, t, o, r]
    )
  );
}
function Qy() {
  let { matches: e } = V.exports.useContext(Vi),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Ou(e) {
  let { matches: t } = V.exports.useContext(Vi),
    { pathname: n } = er(),
    r = JSON.stringify(t.map((o) => o.pathnameBase));
  return V.exports.useMemo(() => jh(e, JSON.parse(r), n), [e, r, n]);
}
function Ky(e, t) {
  Hr() || Mt(!1);
  let { matches: n } = V.exports.useContext(Vi),
    r = n[n.length - 1],
    o = r ? r.params : {};
  r && r.pathname;
  let l = r ? r.pathnameBase : "/";
  r && r.route;
  let a = er(),
    c;
  if (t) {
    var p;
    let w = typeof t == "string" ? Zn(t) : t;
    l === "/" ||
      ((p = w.pathname) == null ? void 0 : p.startsWith(l)) ||
      Mt(!1),
      (c = w);
  } else c = a;
  let m = c.pathname || "/",
    S = l === "/" ? m : m.slice(l.length) || "/",
    T = Ny(e, { pathname: S });
  return Yy(
    T &&
      T.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, o, w.params),
          pathname: Cn([l, w.pathname]),
          pathnameBase: w.pathnameBase === "/" ? l : Cn([l, w.pathnameBase]),
        })
      ),
    n
  );
}
function Yy(e, t) {
  return (
    t === void 0 && (t = []),
    e == null
      ? null
      : e.reduceRight(
          (n, r, o) =>
            V.exports.createElement(Vi.Provider, {
              children: r.route.element !== void 0 ? r.route.element : n,
              value: { outlet: n, matches: t.concat(e.slice(0, o + 1)) },
            }),
          null
        )
  );
}
function zl(e) {
  let { to: t, replace: n, state: r } = e;
  Hr() || Mt(!1);
  let o = Ur();
  return (
    V.exports.useEffect(() => {
      o(t, { replace: n, state: r });
    }),
    null
  );
}
function Bt(e) {
  Mt(!1);
}
function Xy(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Un.Pop,
    navigator: l,
    static: a = !1,
  } = e;
  Hr() && Mt(!1);
  let c = Rh(t),
    p = V.exports.useMemo(
      () => ({ basename: c, navigator: l, static: a }),
      [c, l, a]
    );
  typeof r == "string" && (r = Zn(r));
  let {
      pathname: m = "/",
      search: S = "",
      hash: T = "",
      state: w = null,
      key: L = "default",
    } = r,
    A = V.exports.useMemo(() => {
      let z = Fh(m, c);
      return z == null
        ? null
        : { pathname: z, search: S, hash: T, state: w, key: L };
    }, [c, m, S, T, w, L]);
  return A == null
    ? null
    : V.exports.createElement(
        Tu.Provider,
        { value: p },
        V.exports.createElement(Pu.Provider, {
          children: n,
          value: { location: A, navigationType: o },
        })
      );
}
function Aa(e) {
  let { children: t, location: n } = e;
  return Ky(Da(t), n);
}
function Da(e) {
  let t = [];
  return (
    V.exports.Children.forEach(e, (n) => {
      if (!V.exports.isValidElement(n)) return;
      if (n.type === V.exports.Fragment) {
        t.push.apply(t, Da(n.props.children));
        return;
      }
      n.type !== Bt && Mt(!1);
      let r = {
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        index: n.props.index,
        path: n.props.path,
      };
      n.props.children && (r.children = Da(n.props.children)), t.push(r);
    }),
    t
  );
}
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yl() {
  return (
    (yl =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    yl.apply(this, arguments)
  );
}
function $h(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Gy = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
  Jy = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function qy(e) {
  let { basename: t, children: n, window: r } = e,
    o = V.exports.useRef();
  o.current == null && (o.current = Ey({ window: r }));
  let l = o.current,
    [a, c] = V.exports.useState({ action: l.action, location: l.location });
  return (
    V.exports.useLayoutEffect(() => l.listen(c), [l]),
    V.exports.createElement(Xy, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: l,
    })
  );
}
function Zy(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const Lu = V.exports.forwardRef(function (t, n) {
    let {
        onClick: r,
        reloadDocument: o,
        replace: l = !1,
        state: a,
        target: c,
        to: p,
      } = t,
      m = $h(t, Gy),
      S = Vy(p),
      T = e0(p, { replace: l, state: a, target: c });
    function w(L) {
      r && r(L), !L.defaultPrevented && !o && T(L);
    }
    return V.exports.createElement(
      "a",
      yl({}, m, { href: S, onClick: w, ref: n, target: c })
    );
  }),
  js = V.exports.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: l = "",
        end: a = !1,
        style: c,
        to: p,
        children: m,
      } = t,
      S = $h(t, Jy),
      T = er(),
      w = Ou(p),
      L = T.pathname,
      A = w.pathname;
    o || ((L = L.toLowerCase()), (A = A.toLowerCase()));
    let z = L === A || (!a && L.startsWith(A) && L.charAt(A.length) === "/"),
      K = z ? r : void 0,
      g;
    typeof l == "function"
      ? (g = l({ isActive: z }))
      : (g = [l, z ? "active" : null].filter(Boolean).join(" "));
    let f = typeof c == "function" ? c({ isActive: z }) : c;
    return V.exports.createElement(
      Lu,
      yl({}, S, { "aria-current": K, className: g, ref: n, style: f, to: p }),
      typeof m == "function" ? m({ isActive: z }) : m
    );
  });
function e0(e, t) {
  let { target: n, replace: r, state: o } = t === void 0 ? {} : t,
    l = Ur(),
    a = er(),
    c = Ou(e);
  return V.exports.useCallback(
    (p) => {
      if (p.button === 0 && (!n || n === "_self") && !Zy(p)) {
        p.preventDefault();
        let m = !!r || La(a) === La(c);
        l(e, { replace: m, state: o });
      }
    },
    [a, l, c, r, o, n, e]
  );
}
var t0 = { exports: {} };
/*!
 * Bootstrap v5.3.0 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(og, function () {
    const n = new Map(),
      r = {
        set(u, i, s) {
          n.has(u) || n.set(u, new Map());
          const d = n.get(u);
          d.has(i) || d.size === 0
            ? d.set(i, s)
            : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                  Array.from(d.keys())[0]
                }.`
              );
        },
        get: (u, i) => (n.has(u) && n.get(u).get(i)) || null,
        remove(u, i) {
          if (!n.has(u)) return;
          const s = n.get(u);
          s.delete(i), s.size === 0 && n.delete(u);
        },
      },
      o = "transitionend",
      l = (u) => (
        u &&
          window.CSS &&
          window.CSS.escape &&
          (u = u.replace(/#([^\s"#']+)/g, (i, s) => `#${CSS.escape(s)}`)),
        u
      ),
      a = (u) => {
        u.dispatchEvent(new Event(o));
      },
      c = (u) =>
        !(!u || typeof u != "object") &&
        (u.jquery !== void 0 && (u = u[0]), u.nodeType !== void 0),
      p = (u) =>
        c(u)
          ? u.jquery
            ? u[0]
            : u
          : typeof u == "string" && u.length > 0
          ? document.querySelector(l(u))
          : null,
      m = (u) => {
        if (!c(u) || u.getClientRects().length === 0) return !1;
        const i =
            getComputedStyle(u).getPropertyValue("visibility") === "visible",
          s = u.closest("details:not([open])");
        if (!s) return i;
        if (s !== u) {
          const d = u.closest("summary");
          if ((d && d.parentNode !== s) || d === null) return !1;
        }
        return i;
      },
      S = (u) =>
        !u ||
        u.nodeType !== Node.ELEMENT_NODE ||
        !!u.classList.contains("disabled") ||
        (u.disabled !== void 0
          ? u.disabled
          : u.hasAttribute("disabled") &&
            u.getAttribute("disabled") !== "false"),
      T = (u) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof u.getRootNode == "function") {
          const i = u.getRootNode();
          return i instanceof ShadowRoot ? i : null;
        }
        return u instanceof ShadowRoot
          ? u
          : u.parentNode
          ? T(u.parentNode)
          : null;
      },
      w = () => {},
      L = (u) => {
        u.offsetHeight;
      },
      A = () =>
        window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
          ? window.jQuery
          : null,
      z = [],
      K = () => document.documentElement.dir === "rtl",
      g = (u) => {
        var i;
        (i = () => {
          const s = A();
          if (s) {
            const d = u.NAME,
              v = s.fn[d];
            (s.fn[d] = u.jQueryInterface),
              (s.fn[d].Constructor = u),
              (s.fn[d].noConflict = () => ((s.fn[d] = v), u.jQueryInterface));
          }
        }),
          document.readyState === "loading"
            ? (z.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  for (const s of z) s();
                }),
              z.push(i))
            : i();
      },
      f = (u, i = [], s = u) => (typeof u == "function" ? u(...i) : s),
      h = (u, i, s = !0) => {
        if (!s) return void f(u);
        const d =
          ((E) => {
            if (!E) return 0;
            let { transitionDuration: O, transitionDelay: b } =
              window.getComputedStyle(E);
            const F = Number.parseFloat(O),
              $ = Number.parseFloat(b);
            return F || $
              ? ((O = O.split(",")[0]),
                (b = b.split(",")[0]),
                1e3 * (Number.parseFloat(O) + Number.parseFloat(b)))
              : 0;
          })(i) + 5;
        let v = !1;
        const _ = ({ target: E }) => {
          E === i && ((v = !0), i.removeEventListener(o, _), f(u));
        };
        i.addEventListener(o, _),
          setTimeout(() => {
            v || a(i);
          }, d);
      },
      y = (u, i, s, d) => {
        const v = u.length;
        let _ = u.indexOf(i);
        return _ === -1
          ? !s && d
            ? u[v - 1]
            : u[0]
          : ((_ += s ? 1 : -1),
            d && (_ = (_ + v) % v),
            u[Math.max(0, Math.min(_, v - 1))]);
      },
      k = /[^.]*(?=\..*)\.|.*/,
      x = /\..*/,
      P = /::\d+$/,
      N = {};
    let B = 1;
    const U = { mouseenter: "mouseover", mouseleave: "mouseout" },
      de = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function He(u, i) {
      return (i && `${i}::${B++}`) || u.uidEvent || B++;
    }
    function dt(u) {
      const i = He(u);
      return (u.uidEvent = i), (N[i] = N[i] || {}), N[i];
    }
    function bt(u, i, s = null) {
      return Object.values(u).find(
        (d) => d.callable === i && d.delegationSelector === s
      );
    }
    function Wr(u, i, s) {
      const d = typeof i == "string",
        v = d ? s : i || s;
      let _ = Y(u);
      return de.has(_) || (_ = u), [d, v, _];
    }
    function tr(u, i, s, d, v) {
      if (typeof i != "string" || !u) return;
      let [_, E, O] = Wr(i, s, d);
      i in U &&
        (E = ((X) =>
          function (Q) {
            if (
              !Q.relatedTarget ||
              (Q.relatedTarget !== Q.delegateTarget &&
                !Q.delegateTarget.contains(Q.relatedTarget))
            )
              return X.call(this, Q);
          })(E));
      const b = dt(u),
        F = b[O] || (b[O] = {}),
        $ = bt(F, E, _ ? s : null);
      if ($) return void ($.oneOff = $.oneOff && v);
      const I = He(E, i.replace(k, "")),
        J = _
          ? (function (W, X, Q) {
              return function G(se) {
                const ce = W.querySelectorAll(X);
                for (let { target: Z } = se; Z && Z !== this; Z = Z.parentNode)
                  for (const re of ce)
                    if (re === Z)
                      return (
                        pe(se, { delegateTarget: Z }),
                        G.oneOff && C.off(W, se.type, X, Q),
                        Q.apply(Z, [se])
                      );
              };
            })(u, s, E)
          : (function (W, X) {
              return function Q(G) {
                return (
                  pe(G, { delegateTarget: W }),
                  Q.oneOff && C.off(W, G.type, X),
                  X.apply(W, [G])
                );
              };
            })(u, E);
      (J.delegationSelector = _ ? s : null),
        (J.callable = E),
        (J.oneOff = v),
        (J.uidEvent = I),
        (F[I] = J),
        u.addEventListener(O, J, _);
    }
    function Ln(u, i, s, d, v) {
      const _ = bt(i[s], d, v);
      _ && (u.removeEventListener(s, _, Boolean(v)), delete i[s][_.uidEvent]);
    }
    function j(u, i, s, d) {
      const v = i[s] || {};
      for (const [_, E] of Object.entries(v))
        _.includes(d) && Ln(u, i, s, E.callable, E.delegationSelector);
    }
    function Y(u) {
      return (u = u.replace(x, "")), U[u] || u;
    }
    const C = {
      on(u, i, s, d) {
        tr(u, i, s, d, !1);
      },
      one(u, i, s, d) {
        tr(u, i, s, d, !0);
      },
      off(u, i, s, d) {
        if (typeof i != "string" || !u) return;
        const [v, _, E] = Wr(i, s, d),
          O = E !== i,
          b = dt(u),
          F = b[E] || {},
          $ = i.startsWith(".");
        if (_ === void 0) {
          if ($) for (const I of Object.keys(b)) j(u, b, I, i.slice(1));
          for (const [I, J] of Object.entries(F)) {
            const W = I.replace(P, "");
            (O && !i.includes(W)) ||
              Ln(u, b, E, J.callable, J.delegationSelector);
          }
        } else {
          if (!Object.keys(F).length) return;
          Ln(u, b, E, _, v ? s : null);
        }
      },
      trigger(u, i, s) {
        if (typeof i != "string" || !u) return null;
        const d = A();
        let v = null,
          _ = !0,
          E = !0,
          O = !1;
        i !== Y(i) &&
          d &&
          ((v = d.Event(i, s)),
          d(u).trigger(v),
          (_ = !v.isPropagationStopped()),
          (E = !v.isImmediatePropagationStopped()),
          (O = v.isDefaultPrevented()));
        const b = pe(new Event(i, { bubbles: _, cancelable: !0 }), s);
        return (
          O && b.preventDefault(),
          E && u.dispatchEvent(b),
          b.defaultPrevented && v && v.preventDefault(),
          b
        );
      },
    };
    function pe(u, i = {}) {
      for (const [s, d] of Object.entries(i))
        try {
          u[s] = d;
        } catch {
          Object.defineProperty(u, s, { configurable: !0, get: () => d });
        }
      return u;
    }
    function Ee(u) {
      if (u === "true") return !0;
      if (u === "false") return !1;
      if (u === Number(u).toString()) return Number(u);
      if (u === "" || u === "null") return null;
      if (typeof u != "string") return u;
      try {
        return JSON.parse(decodeURIComponent(u));
      } catch {
        return u;
      }
    }
    function on(u) {
      return u.replace(/[A-Z]/g, (i) => `-${i.toLowerCase()}`);
    }
    const be = {
      setDataAttribute(u, i, s) {
        u.setAttribute(`data-bs-${on(i)}`, s);
      },
      removeDataAttribute(u, i) {
        u.removeAttribute(`data-bs-${on(i)}`);
      },
      getDataAttributes(u) {
        if (!u) return {};
        const i = {},
          s = Object.keys(u.dataset).filter(
            (d) => d.startsWith("bs") && !d.startsWith("bsConfig")
          );
        for (const d of s) {
          let v = d.replace(/^bs/, "");
          (v = v.charAt(0).toLowerCase() + v.slice(1, v.length)),
            (i[v] = Ee(u.dataset[d]));
        }
        return i;
      },
      getDataAttribute: (u, i) => Ee(u.getAttribute(`data-bs-${on(i)}`)),
    };
    class Vt {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      _getConfig(i) {
        return (
          (i = this._mergeConfigObj(i)),
          (i = this._configAfterMerge(i)),
          this._typeCheckConfig(i),
          i
        );
      }
      _configAfterMerge(i) {
        return i;
      }
      _mergeConfigObj(i, s) {
        const d = c(s) ? be.getDataAttribute(s, "config") : {};
        return ke(
          ke(
            ke(ke({}, this.constructor.Default), typeof d == "object" ? d : {}),
            c(s) ? be.getDataAttributes(s) : {}
          ),
          typeof i == "object" ? i : {}
        );
      }
      _typeCheckConfig(i, s = this.constructor.DefaultType) {
        for (const [v, _] of Object.entries(s)) {
          const E = i[v],
            O = c(E)
              ? "element"
              : (d = E) == null
              ? `${d}`
              : Object.prototype.toString
                  .call(d)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
          if (!new RegExp(_).test(O))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${v}" provided type "${O}" but expected type "${_}".`
            );
        }
        var d;
      }
    }
    class Pe extends Vt {
      constructor(i, s) {
        super(),
          (i = p(i)) &&
            ((this._element = i),
            (this._config = this._getConfig(s)),
            r.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        r.remove(this._element, this.constructor.DATA_KEY),
          C.off(this._element, this.constructor.EVENT_KEY);
        for (const i of Object.getOwnPropertyNames(this)) this[i] = null;
      }
      _queueCallback(i, s, d = !0) {
        h(i, s, d);
      }
      _getConfig(i) {
        return (
          (i = this._mergeConfigObj(i, this._element)),
          (i = this._configAfterMerge(i)),
          this._typeCheckConfig(i),
          i
        );
      }
      static getInstance(i) {
        return r.get(p(i), this.DATA_KEY);
      }
      static getOrCreateInstance(i, s = {}) {
        return (
          this.getInstance(i) || new this(i, typeof s == "object" ? s : null)
        );
      }
      static get VERSION() {
        return "5.3.0";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(i) {
        return `${i}${this.EVENT_KEY}`;
      }
    }
    const ln = (u) => {
        let i = u.getAttribute("data-bs-target");
        if (!i || i === "#") {
          let s = u.getAttribute("href");
          if (!s || (!s.includes("#") && !s.startsWith("."))) return null;
          s.includes("#") && !s.startsWith("#") && (s = `#${s.split("#")[1]}`),
            (i = s && s !== "#" ? s.trim() : null);
        }
        return l(i);
      },
      H = {
        find: (u, i = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(i, u)),
        findOne: (u, i = document.documentElement) =>
          Element.prototype.querySelector.call(i, u),
        children: (u, i) =>
          [].concat(...u.children).filter((s) => s.matches(i)),
        parents(u, i) {
          const s = [];
          let d = u.parentNode.closest(i);
          for (; d; ) s.push(d), (d = d.parentNode.closest(i));
          return s;
        },
        prev(u, i) {
          let s = u.previousElementSibling;
          for (; s; ) {
            if (s.matches(i)) return [s];
            s = s.previousElementSibling;
          }
          return [];
        },
        next(u, i) {
          let s = u.nextElementSibling;
          for (; s; ) {
            if (s.matches(i)) return [s];
            s = s.nextElementSibling;
          }
          return [];
        },
        focusableChildren(u) {
          const i = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((s) => `${s}:not([tabindex^="-"])`)
            .join(",");
          return this.find(i, u).filter((s) => !S(s) && m(s));
        },
        getSelectorFromElement(u) {
          const i = ln(u);
          return i && H.findOne(i) ? i : null;
        },
        getElementFromSelector(u) {
          const i = ln(u);
          return i ? H.findOne(i) : null;
        },
        getMultipleElementsFromSelector(u) {
          const i = ln(u);
          return i ? H.find(i) : [];
        },
      },
      Ki = (u, i = "hide") => {
        const s = `click.dismiss${u.EVENT_KEY}`,
          d = u.NAME;
        C.on(document, s, `[data-bs-dismiss="${d}"]`, function (v) {
          if (
            (["A", "AREA"].includes(this.tagName) && v.preventDefault(),
            S(this))
          )
            return;
          const _ = H.getElementFromSelector(this) || this.closest(`.${d}`);
          u.getOrCreateInstance(_)[i]();
        });
      };
    class Vr extends Pe {
      static get NAME() {
        return "alert";
      }
      close() {
        if (C.trigger(this._element, "close.bs.alert").defaultPrevented) return;
        this._element.classList.remove("show");
        const i = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, i);
      }
      _destroyElement() {
        this._element.remove(),
          C.trigger(this._element, "closed.bs.alert"),
          this.dispose();
      }
      static jQueryInterface(i) {
        return this.each(function () {
          const s = Vr.getOrCreateInstance(this);
          if (typeof i == "string") {
            if (s[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            s[i](this);
          }
        });
      }
    }
    Ki(Vr, "close"), g(Vr);
    const Du = '[data-bs-toggle="button"]';
    class Qr extends Pe {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(i) {
        return this.each(function () {
          const s = Qr.getOrCreateInstance(this);
          i === "toggle" && s[i]();
        });
      }
    }
    C.on(document, "click.bs.button.data-api", Du, (u) => {
      u.preventDefault();
      const i = u.target.closest(Du);
      Qr.getOrCreateInstance(i).toggle();
    }),
      g(Qr);
    const Qh = { endCallback: null, leftCallback: null, rightCallback: null },
      Kh = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
      };
    class Yi extends Vt {
      constructor(i, s) {
        super(),
          (this._element = i),
          i &&
            Yi.isSupported() &&
            ((this._config = this._getConfig(s)),
            (this._deltaX = 0),
            (this._supportPointerEvents = Boolean(window.PointerEvent)),
            this._initEvents());
      }
      static get Default() {
        return Qh;
      }
      static get DefaultType() {
        return Kh;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        C.off(this._element, ".bs.swipe");
      }
      _start(i) {
        this._supportPointerEvents
          ? this._eventIsPointerPenTouch(i) && (this._deltaX = i.clientX)
          : (this._deltaX = i.touches[0].clientX);
      }
      _end(i) {
        this._eventIsPointerPenTouch(i) &&
          (this._deltaX = i.clientX - this._deltaX),
          this._handleSwipe(),
          f(this._config.endCallback);
      }
      _move(i) {
        this._deltaX =
          i.touches && i.touches.length > 1
            ? 0
            : i.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const i = Math.abs(this._deltaX);
        if (i <= 40) return;
        const s = i / this._deltaX;
        (this._deltaX = 0),
          s &&
            f(s > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents
          ? (C.on(this._element, "pointerdown.bs.swipe", (i) => this._start(i)),
            C.on(this._element, "pointerup.bs.swipe", (i) => this._end(i)),
            this._element.classList.add("pointer-event"))
          : (C.on(this._element, "touchstart.bs.swipe", (i) => this._start(i)),
            C.on(this._element, "touchmove.bs.swipe", (i) => this._move(i)),
            C.on(this._element, "touchend.bs.swipe", (i) => this._end(i)));
      }
      _eventIsPointerPenTouch(i) {
        return (
          this._supportPointerEvents &&
          (i.pointerType === "pen" || i.pointerType === "touch")
        );
      }
      static isSupported() {
        return (
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0
        );
      }
    }
    const Kr = "next",
      nr = "prev",
      rr = "left",
      Xi = "right",
      Rl = "slid.bs.carousel",
      Mu = "carousel",
      Gi = "active",
      Yh = { ArrowLeft: Xi, ArrowRight: rr },
      Xh = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0,
      },
      Gh = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
      };
    class ir extends Pe {
      constructor(i, s) {
        super(i, s),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = H.findOne(
            ".carousel-indicators",
            this._element
          )),
          this._addEventListeners(),
          this._config.ride === Mu && this.cycle();
      }
      static get Default() {
        return Xh;
      }
      static get DefaultType() {
        return Gh;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(Kr);
      }
      nextWhenVisible() {
        !document.hidden && m(this._element) && this.next();
      }
      prev() {
        this._slide(nr);
      }
      pause() {
        this._isSliding && a(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(),
          this._updateInterval(),
          (this._interval = setInterval(
            () => this.nextWhenVisible(),
            this._config.interval
          ));
      }
      _maybeEnableCycle() {
        this._config.ride &&
          (this._isSliding
            ? C.one(this._element, Rl, () => this.cycle())
            : this.cycle());
      }
      to(i) {
        const s = this._getItems();
        if (i > s.length - 1 || i < 0) return;
        if (this._isSliding)
          return void C.one(this._element, Rl, () => this.to(i));
        const d = this._getItemIndex(this._getActive());
        if (d === i) return;
        const v = i > d ? Kr : nr;
        this._slide(v, s[i]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(i) {
        return (i.defaultInterval = i.interval), i;
      }
      _addEventListeners() {
        this._config.keyboard &&
          C.on(this._element, "keydown.bs.carousel", (i) => this._keydown(i)),
          this._config.pause === "hover" &&
            (C.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
            C.on(this._element, "mouseleave.bs.carousel", () =>
              this._maybeEnableCycle()
            )),
          this._config.touch &&
            Yi.isSupported() &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const s of H.find(".carousel-item img", this._element))
          C.on(s, "dragstart.bs.carousel", (d) => d.preventDefault());
        const i = {
          leftCallback: () => this._slide(this._directionToOrder(rr)),
          rightCallback: () => this._slide(this._directionToOrder(Xi)),
          endCallback: () => {
            this._config.pause === "hover" &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                () => this._maybeEnableCycle(),
                500 + this._config.interval
              )));
          },
        };
        this._swipeHelper = new Yi(this._element, i);
      }
      _keydown(i) {
        if (/input|textarea/i.test(i.target.tagName)) return;
        const s = Yh[i.key];
        s && (i.preventDefault(), this._slide(this._directionToOrder(s)));
      }
      _getItemIndex(i) {
        return this._getItems().indexOf(i);
      }
      _setActiveIndicatorElement(i) {
        if (!this._indicatorsElement) return;
        const s = H.findOne(".active", this._indicatorsElement);
        s.classList.remove(Gi), s.removeAttribute("aria-current");
        const d = H.findOne(
          `[data-bs-slide-to="${i}"]`,
          this._indicatorsElement
        );
        d && (d.classList.add(Gi), d.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const i = this._activeElement || this._getActive();
        if (!i) return;
        const s = Number.parseInt(i.getAttribute("data-bs-interval"), 10);
        this._config.interval = s || this._config.defaultInterval;
      }
      _slide(i, s = null) {
        if (this._isSliding) return;
        const d = this._getActive(),
          v = i === Kr,
          _ = s || y(this._getItems(), d, v, this._config.wrap);
        if (_ === d) return;
        const E = this._getItemIndex(_),
          O = (I) =>
            C.trigger(this._element, I, {
              relatedTarget: _,
              direction: this._orderToDirection(i),
              from: this._getItemIndex(d),
              to: E,
            });
        if (O("slide.bs.carousel").defaultPrevented || !d || !_) return;
        const b = Boolean(this._interval);
        this.pause(),
          (this._isSliding = !0),
          this._setActiveIndicatorElement(E),
          (this._activeElement = _);
        const F = v ? "carousel-item-start" : "carousel-item-end",
          $ = v ? "carousel-item-next" : "carousel-item-prev";
        _.classList.add($),
          L(_),
          d.classList.add(F),
          _.classList.add(F),
          this._queueCallback(
            () => {
              _.classList.remove(F, $),
                _.classList.add(Gi),
                d.classList.remove(Gi, $, F),
                (this._isSliding = !1),
                O(Rl);
            },
            d,
            this._isAnimated()
          ),
          b && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return H.findOne(".active.carousel-item", this._element);
      }
      _getItems() {
        return H.find(".carousel-item", this._element);
      }
      _clearInterval() {
        this._interval &&
          (clearInterval(this._interval), (this._interval = null));
      }
      _directionToOrder(i) {
        return K() ? (i === rr ? nr : Kr) : i === rr ? Kr : nr;
      }
      _orderToDirection(i) {
        return K() ? (i === nr ? rr : Xi) : i === nr ? Xi : rr;
      }
      static jQueryInterface(i) {
        return this.each(function () {
          const s = ir.getOrCreateInstance(this, i);
          if (typeof i != "number") {
            if (typeof i == "string") {
              if (s[i] === void 0 || i.startsWith("_") || i === "constructor")
                throw new TypeError(`No method named "${i}"`);
              s[i]();
            }
          } else s.to(i);
        });
      }
    }
    C.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      function (u) {
        const i = H.getElementFromSelector(this);
        if (!i || !i.classList.contains(Mu)) return;
        u.preventDefault();
        const s = ir.getOrCreateInstance(i),
          d = this.getAttribute("data-bs-slide-to");
        return d
          ? (s.to(d), void s._maybeEnableCycle())
          : be.getDataAttribute(this, "slide") === "next"
          ? (s.next(), void s._maybeEnableCycle())
          : (s.prev(), void s._maybeEnableCycle());
      }
    ),
      C.on(window, "load.bs.carousel.data-api", () => {
        const u = H.find('[data-bs-ride="carousel"]');
        for (const i of u) ir.getOrCreateInstance(i);
      }),
      g(ir);
    const $l = "show",
      Ji = "collapse",
      qi = "collapsing",
      Bl = '[data-bs-toggle="collapse"]',
      Jh = { parent: null, toggle: !0 },
      qh = { parent: "(null|element)", toggle: "boolean" };
    class or extends Pe {
      constructor(i, s) {
        super(i, s), (this._isTransitioning = !1), (this._triggerArray = []);
        const d = H.find(Bl);
        for (const v of d) {
          const _ = H.getSelectorFromElement(v),
            E = H.find(_).filter((O) => O === this._element);
          _ !== null && E.length && this._triggerArray.push(v);
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return Jh;
      }
      static get DefaultType() {
        return qh;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let i = [];
        if (
          (this._config.parent &&
            (i = this._getFirstLevelChildren(
              ".collapse.show, .collapse.collapsing"
            )
              .filter((v) => v !== this._element)
              .map((v) => or.getOrCreateInstance(v, { toggle: !1 }))),
          (i.length && i[0]._isTransitioning) ||
            C.trigger(this._element, "show.bs.collapse").defaultPrevented)
        )
          return;
        for (const v of i) v.hide();
        const s = this._getDimension();
        this._element.classList.remove(Ji),
          this._element.classList.add(qi),
          (this._element.style[s] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const d = `scroll${s[0].toUpperCase() + s.slice(1)}`;
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(qi),
              this._element.classList.add(Ji, $l),
              (this._element.style[s] = ""),
              C.trigger(this._element, "shown.bs.collapse");
          },
          this._element,
          !0
        ),
          (this._element.style[s] = `${this._element[d]}px`);
      }
      hide() {
        if (
          this._isTransitioning ||
          !this._isShown() ||
          C.trigger(this._element, "hide.bs.collapse").defaultPrevented
        )
          return;
        const i = this._getDimension();
        (this._element.style[i] = `${
          this._element.getBoundingClientRect()[i]
        }px`),
          L(this._element),
          this._element.classList.add(qi),
          this._element.classList.remove(Ji, $l);
        for (const s of this._triggerArray) {
          const d = H.getElementFromSelector(s);
          d && !this._isShown(d) && this._addAriaAndCollapsedClass([s], !1);
        }
        (this._isTransitioning = !0),
          (this._element.style[i] = ""),
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(qi),
                this._element.classList.add(Ji),
                C.trigger(this._element, "hidden.bs.collapse");
            },
            this._element,
            !0
          );
      }
      _isShown(i = this._element) {
        return i.classList.contains($l);
      }
      _configAfterMerge(i) {
        return (i.toggle = Boolean(i.toggle)), (i.parent = p(i.parent)), i;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal")
          ? "width"
          : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const i = this._getFirstLevelChildren(Bl);
        for (const s of i) {
          const d = H.getElementFromSelector(s);
          d && this._addAriaAndCollapsedClass([s], this._isShown(d));
        }
      }
      _getFirstLevelChildren(i) {
        const s = H.find(":scope .collapse .collapse", this._config.parent);
        return H.find(i, this._config.parent).filter((d) => !s.includes(d));
      }
      _addAriaAndCollapsedClass(i, s) {
        if (i.length)
          for (const d of i)
            d.classList.toggle("collapsed", !s),
              d.setAttribute("aria-expanded", s);
      }
      static jQueryInterface(i) {
        const s = {};
        return (
          typeof i == "string" && /show|hide/.test(i) && (s.toggle = !1),
          this.each(function () {
            const d = or.getOrCreateInstance(this, s);
            if (typeof i == "string") {
              if (d[i] === void 0)
                throw new TypeError(`No method named "${i}"`);
              d[i]();
            }
          })
        );
      }
    }
    C.on(document, "click.bs.collapse.data-api", Bl, function (u) {
      (u.target.tagName === "A" ||
        (u.delegateTarget && u.delegateTarget.tagName === "A")) &&
        u.preventDefault();
      for (const i of H.getMultipleElementsFromSelector(this))
        or.getOrCreateInstance(i, { toggle: !1 }).toggle();
    }),
      g(or);
    var Ue = "top",
      rt = "bottom",
      it = "right",
      We = "left",
      Zi = "auto",
      lr = [Ue, rt, it, We],
      An = "start",
      sr = "end",
      bu = "clippingParents",
      Hl = "viewport",
      ar = "popper",
      Iu = "reference",
      Ul = lr.reduce(function (u, i) {
        return u.concat([i + "-" + An, i + "-" + sr]);
      }, []),
      Wl = [].concat(lr, [Zi]).reduce(function (u, i) {
        return u.concat([i, i + "-" + An, i + "-" + sr]);
      }, []),
      zu = "beforeRead",
      ju = "read",
      Fu = "afterRead",
      Ru = "beforeMain",
      $u = "main",
      Bu = "afterMain",
      Hu = "beforeWrite",
      Uu = "write",
      Wu = "afterWrite",
      Vu = [zu, ju, Fu, Ru, $u, Bu, Hu, Uu, Wu];
    function It(u) {
      return u ? (u.nodeName || "").toLowerCase() : null;
    }
    function ot(u) {
      if (u == null) return window;
      if (u.toString() !== "[object Window]") {
        var i = u.ownerDocument;
        return (i && i.defaultView) || window;
      }
      return u;
    }
    function Dn(u) {
      return u instanceof ot(u).Element || u instanceof Element;
    }
    function pt(u) {
      return u instanceof ot(u).HTMLElement || u instanceof HTMLElement;
    }
    function Vl(u) {
      return (
        typeof ShadowRoot != "undefined" &&
        (u instanceof ot(u).ShadowRoot || u instanceof ShadowRoot)
      );
    }
    const Ql = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (u) {
        var i = u.state;
        Object.keys(i.elements).forEach(function (s) {
          var d = i.styles[s] || {},
            v = i.attributes[s] || {},
            _ = i.elements[s];
          pt(_) &&
            It(_) &&
            (Object.assign(_.style, d),
            Object.keys(v).forEach(function (E) {
              var O = v[E];
              O === !1
                ? _.removeAttribute(E)
                : _.setAttribute(E, O === !0 ? "" : O);
            }));
        });
      },
      effect: function (u) {
        var i = u.state,
          s = {
            popper: {
              position: i.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(i.elements.popper.style, s.popper),
          (i.styles = s),
          i.elements.arrow && Object.assign(i.elements.arrow.style, s.arrow),
          function () {
            Object.keys(i.elements).forEach(function (d) {
              var v = i.elements[d],
                _ = i.attributes[d] || {},
                E = Object.keys(
                  i.styles.hasOwnProperty(d) ? i.styles[d] : s[d]
                ).reduce(function (O, b) {
                  return (O[b] = ""), O;
                }, {});
              pt(v) &&
                It(v) &&
                (Object.assign(v.style, E),
                Object.keys(_).forEach(function (O) {
                  v.removeAttribute(O);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function zt(u) {
      return u.split("-")[0];
    }
    var Mn = Math.max,
      eo = Math.min,
      ur = Math.round;
    function Kl() {
      var u = navigator.userAgentData;
      return u != null && u.brands && Array.isArray(u.brands)
        ? u.brands
            .map(function (i) {
              return i.brand + "/" + i.version;
            })
            .join(" ")
        : navigator.userAgent;
    }
    function Qu() {
      return !/^((?!chrome|android).)*safari/i.test(Kl());
    }
    function cr(u, i, s) {
      i === void 0 && (i = !1), s === void 0 && (s = !1);
      var d = u.getBoundingClientRect(),
        v = 1,
        _ = 1;
      i &&
        pt(u) &&
        ((v = (u.offsetWidth > 0 && ur(d.width) / u.offsetWidth) || 1),
        (_ = (u.offsetHeight > 0 && ur(d.height) / u.offsetHeight) || 1));
      var E = (Dn(u) ? ot(u) : window).visualViewport,
        O = !Qu() && s,
        b = (d.left + (O && E ? E.offsetLeft : 0)) / v,
        F = (d.top + (O && E ? E.offsetTop : 0)) / _,
        $ = d.width / v,
        I = d.height / _;
      return {
        width: $,
        height: I,
        top: F,
        right: b + $,
        bottom: F + I,
        left: b,
        x: b,
        y: F,
      };
    }
    function Yl(u) {
      var i = cr(u),
        s = u.offsetWidth,
        d = u.offsetHeight;
      return (
        Math.abs(i.width - s) <= 1 && (s = i.width),
        Math.abs(i.height - d) <= 1 && (d = i.height),
        { x: u.offsetLeft, y: u.offsetTop, width: s, height: d }
      );
    }
    function Ku(u, i) {
      var s = i.getRootNode && i.getRootNode();
      if (u.contains(i)) return !0;
      if (s && Vl(s)) {
        var d = i;
        do {
          if (d && u.isSameNode(d)) return !0;
          d = d.parentNode || d.host;
        } while (d);
      }
      return !1;
    }
    function Qt(u) {
      return ot(u).getComputedStyle(u);
    }
    function Zh(u) {
      return ["table", "td", "th"].indexOf(It(u)) >= 0;
    }
    function sn(u) {
      return (
        (Dn(u) ? u.ownerDocument : u.document) || window.document
      ).documentElement;
    }
    function to(u) {
      return It(u) === "html"
        ? u
        : u.assignedSlot || u.parentNode || (Vl(u) ? u.host : null) || sn(u);
    }
    function Yu(u) {
      return pt(u) && Qt(u).position !== "fixed" ? u.offsetParent : null;
    }
    function Yr(u) {
      for (
        var i = ot(u), s = Yu(u);
        s && Zh(s) && Qt(s).position === "static";

      )
        s = Yu(s);
      return s &&
        (It(s) === "html" || (It(s) === "body" && Qt(s).position === "static"))
        ? i
        : s ||
            (function (d) {
              var v = /firefox/i.test(Kl());
              if (/Trident/i.test(Kl()) && pt(d) && Qt(d).position === "fixed")
                return null;
              var _ = to(d);
              for (
                Vl(_) && (_ = _.host);
                pt(_) && ["html", "body"].indexOf(It(_)) < 0;

              ) {
                var E = Qt(_);
                if (
                  E.transform !== "none" ||
                  E.perspective !== "none" ||
                  E.contain === "paint" ||
                  ["transform", "perspective"].indexOf(E.willChange) !== -1 ||
                  (v && E.willChange === "filter") ||
                  (v && E.filter && E.filter !== "none")
                )
                  return _;
                _ = _.parentNode;
              }
              return null;
            })(u) ||
            i;
    }
    function Xl(u) {
      return ["top", "bottom"].indexOf(u) >= 0 ? "x" : "y";
    }
    function Xr(u, i, s) {
      return Mn(u, eo(i, s));
    }
    function Xu(u) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, u);
    }
    function Gu(u, i) {
      return i.reduce(function (s, d) {
        return (s[d] = u), s;
      }, {});
    }
    const Ju = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (u) {
        var i,
          s = u.state,
          d = u.name,
          v = u.options,
          _ = s.elements.arrow,
          E = s.modifiersData.popperOffsets,
          O = zt(s.placement),
          b = Xl(O),
          F = [We, it].indexOf(O) >= 0 ? "height" : "width";
        if (_ && E) {
          var $ = (function (ae, oe) {
              return Xu(
                typeof (ae =
                  typeof ae == "function"
                    ? ae(
                        Object.assign({}, oe.rects, { placement: oe.placement })
                      )
                    : ae) != "number"
                  ? ae
                  : Gu(ae, lr)
              );
            })(v.padding, s),
            I = Yl(_),
            J = b === "y" ? Ue : We,
            W = b === "y" ? rt : it,
            X =
              s.rects.reference[F] +
              s.rects.reference[b] -
              E[b] -
              s.rects.popper[F],
            Q = E[b] - s.rects.reference[b],
            G = Yr(_),
            se = G ? (b === "y" ? G.clientHeight || 0 : G.clientWidth || 0) : 0,
            ce = X / 2 - Q / 2,
            Z = $[J],
            re = se - I[F] - $[W],
            q = se / 2 - I[F] / 2 + ce,
            te = Xr(Z, q, re),
            ie = b;
          s.modifiersData[d] =
            (((i = {})[ie] = te), (i.centerOffset = te - q), i);
        }
      },
      effect: function (u) {
        var i = u.state,
          s = u.options.element,
          d = s === void 0 ? "[data-popper-arrow]" : s;
        d != null &&
          (typeof d != "string" || (d = i.elements.popper.querySelector(d))) &&
          Ku(i.elements.popper, d) &&
          (i.elements.arrow = d);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function fr(u) {
      return u.split("-")[1];
    }
    var em = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function qu(u) {
      var i,
        s = u.popper,
        d = u.popperRect,
        v = u.placement,
        _ = u.variation,
        E = u.offsets,
        O = u.position,
        b = u.gpuAcceleration,
        F = u.adaptive,
        $ = u.roundOffsets,
        I = u.isFixed,
        J = E.x,
        W = J === void 0 ? 0 : J,
        X = E.y,
        Q = X === void 0 ? 0 : X,
        G = typeof $ == "function" ? $({ x: W, y: Q }) : { x: W, y: Q };
      (W = G.x), (Q = G.y);
      var se = E.hasOwnProperty("x"),
        ce = E.hasOwnProperty("y"),
        Z = We,
        re = Ue,
        q = window;
      if (F) {
        var te = Yr(s),
          ie = "clientHeight",
          ae = "clientWidth";
        te === ot(s) &&
          Qt((te = sn(s))).position !== "static" &&
          O === "absolute" &&
          ((ie = "scrollHeight"), (ae = "scrollWidth")),
          (v === Ue || ((v === We || v === it) && _ === sr)) &&
            ((re = rt),
            (Q -=
              (I && te === q && q.visualViewport
                ? q.visualViewport.height
                : te[ie]) - d.height),
            (Q *= b ? 1 : -1)),
          (v !== We && ((v !== Ue && v !== rt) || _ !== sr)) ||
            ((Z = it),
            (W -=
              (I && te === q && q.visualViewport
                ? q.visualViewport.width
                : te[ae]) - d.width),
            (W *= b ? 1 : -1));
      }
      var oe,
        xe = Object.assign({ position: O }, F && em),
        lt =
          $ === !0
            ? (function (xt, Ve) {
                var ht = xt.x,
                  mt = xt.y,
                  Se = Ve.devicePixelRatio || 1;
                return { x: ur(ht * Se) / Se || 0, y: ur(mt * Se) / Se || 0 };
              })({ x: W, y: Q }, ot(s))
            : { x: W, y: Q };
      return (
        (W = lt.x),
        (Q = lt.y),
        b
          ? Object.assign(
              {},
              xe,
              (((oe = {})[re] = ce ? "0" : ""),
              (oe[Z] = se ? "0" : ""),
              (oe.transform =
                (q.devicePixelRatio || 1) <= 1
                  ? "translate(" + W + "px, " + Q + "px)"
                  : "translate3d(" + W + "px, " + Q + "px, 0)"),
              oe)
            )
          : Object.assign(
              {},
              xe,
              (((i = {})[re] = ce ? Q + "px" : ""),
              (i[Z] = se ? W + "px" : ""),
              (i.transform = ""),
              i)
            )
      );
    }
    const Gl = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (u) {
        var i = u.state,
          s = u.options,
          d = s.gpuAcceleration,
          v = d === void 0 || d,
          _ = s.adaptive,
          E = _ === void 0 || _,
          O = s.roundOffsets,
          b = O === void 0 || O,
          F = {
            placement: zt(i.placement),
            variation: fr(i.placement),
            popper: i.elements.popper,
            popperRect: i.rects.popper,
            gpuAcceleration: v,
            isFixed: i.options.strategy === "fixed",
          };
        i.modifiersData.popperOffsets != null &&
          (i.styles.popper = Object.assign(
            {},
            i.styles.popper,
            qu(
              Object.assign({}, F, {
                offsets: i.modifiersData.popperOffsets,
                position: i.options.strategy,
                adaptive: E,
                roundOffsets: b,
              })
            )
          )),
          i.modifiersData.arrow != null &&
            (i.styles.arrow = Object.assign(
              {},
              i.styles.arrow,
              qu(
                Object.assign({}, F, {
                  offsets: i.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: b,
                })
              )
            )),
          (i.attributes.popper = Object.assign({}, i.attributes.popper, {
            "data-popper-placement": i.placement,
          }));
      },
      data: {},
    };
    var no = { passive: !0 };
    const Jl = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (u) {
        var i = u.state,
          s = u.instance,
          d = u.options,
          v = d.scroll,
          _ = v === void 0 || v,
          E = d.resize,
          O = E === void 0 || E,
          b = ot(i.elements.popper),
          F = [].concat(i.scrollParents.reference, i.scrollParents.popper);
        return (
          _ &&
            F.forEach(function ($) {
              $.addEventListener("scroll", s.update, no);
            }),
          O && b.addEventListener("resize", s.update, no),
          function () {
            _ &&
              F.forEach(function ($) {
                $.removeEventListener("scroll", s.update, no);
              }),
              O && b.removeEventListener("resize", s.update, no);
          }
        );
      },
      data: {},
    };
    var tm = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function ro(u) {
      return u.replace(/left|right|bottom|top/g, function (i) {
        return tm[i];
      });
    }
    var nm = { start: "end", end: "start" };
    function Zu(u) {
      return u.replace(/start|end/g, function (i) {
        return nm[i];
      });
    }
    function ql(u) {
      var i = ot(u);
      return { scrollLeft: i.pageXOffset, scrollTop: i.pageYOffset };
    }
    function Zl(u) {
      return cr(sn(u)).left + ql(u).scrollLeft;
    }
    function es(u) {
      var i = Qt(u),
        s = i.overflow,
        d = i.overflowX,
        v = i.overflowY;
      return /auto|scroll|overlay|hidden/.test(s + v + d);
    }
    function ec(u) {
      return ["html", "body", "#document"].indexOf(It(u)) >= 0
        ? u.ownerDocument.body
        : pt(u) && es(u)
        ? u
        : ec(to(u));
    }
    function Gr(u, i) {
      var s;
      i === void 0 && (i = []);
      var d = ec(u),
        v = d === ((s = u.ownerDocument) == null ? void 0 : s.body),
        _ = ot(d),
        E = v ? [_].concat(_.visualViewport || [], es(d) ? d : []) : d,
        O = i.concat(E);
      return v ? O : O.concat(Gr(to(E)));
    }
    function ts(u) {
      return Object.assign({}, u, {
        left: u.x,
        top: u.y,
        right: u.x + u.width,
        bottom: u.y + u.height,
      });
    }
    function tc(u, i, s) {
      return i === Hl
        ? ts(
            (function (d, v) {
              var _ = ot(d),
                E = sn(d),
                O = _.visualViewport,
                b = E.clientWidth,
                F = E.clientHeight,
                $ = 0,
                I = 0;
              if (O) {
                (b = O.width), (F = O.height);
                var J = Qu();
                (J || (!J && v === "fixed")) &&
                  (($ = O.offsetLeft), (I = O.offsetTop));
              }
              return { width: b, height: F, x: $ + Zl(d), y: I };
            })(u, s)
          )
        : Dn(i)
        ? (function (d, v) {
            var _ = cr(d, !1, v === "fixed");
            return (
              (_.top = _.top + d.clientTop),
              (_.left = _.left + d.clientLeft),
              (_.bottom = _.top + d.clientHeight),
              (_.right = _.left + d.clientWidth),
              (_.width = d.clientWidth),
              (_.height = d.clientHeight),
              (_.x = _.left),
              (_.y = _.top),
              _
            );
          })(i, s)
        : ts(
            (function (d) {
              var v,
                _ = sn(d),
                E = ql(d),
                O = (v = d.ownerDocument) == null ? void 0 : v.body,
                b = Mn(
                  _.scrollWidth,
                  _.clientWidth,
                  O ? O.scrollWidth : 0,
                  O ? O.clientWidth : 0
                ),
                F = Mn(
                  _.scrollHeight,
                  _.clientHeight,
                  O ? O.scrollHeight : 0,
                  O ? O.clientHeight : 0
                ),
                $ = -E.scrollLeft + Zl(d),
                I = -E.scrollTop;
              return (
                Qt(O || _).direction === "rtl" &&
                  ($ += Mn(_.clientWidth, O ? O.clientWidth : 0) - b),
                { width: b, height: F, x: $, y: I }
              );
            })(sn(u))
          );
    }
    function nc(u) {
      var i,
        s = u.reference,
        d = u.element,
        v = u.placement,
        _ = v ? zt(v) : null,
        E = v ? fr(v) : null,
        O = s.x + s.width / 2 - d.width / 2,
        b = s.y + s.height / 2 - d.height / 2;
      switch (_) {
        case Ue:
          i = { x: O, y: s.y - d.height };
          break;
        case rt:
          i = { x: O, y: s.y + s.height };
          break;
        case it:
          i = { x: s.x + s.width, y: b };
          break;
        case We:
          i = { x: s.x - d.width, y: b };
          break;
        default:
          i = { x: s.x, y: s.y };
      }
      var F = _ ? Xl(_) : null;
      if (F != null) {
        var $ = F === "y" ? "height" : "width";
        switch (E) {
          case An:
            i[F] = i[F] - (s[$] / 2 - d[$] / 2);
            break;
          case sr:
            i[F] = i[F] + (s[$] / 2 - d[$] / 2);
        }
      }
      return i;
    }
    function dr(u, i) {
      i === void 0 && (i = {});
      var s = i,
        d = s.placement,
        v = d === void 0 ? u.placement : d,
        _ = s.strategy,
        E = _ === void 0 ? u.strategy : _,
        O = s.boundary,
        b = O === void 0 ? bu : O,
        F = s.rootBoundary,
        $ = F === void 0 ? Hl : F,
        I = s.elementContext,
        J = I === void 0 ? ar : I,
        W = s.altBoundary,
        X = W !== void 0 && W,
        Q = s.padding,
        G = Q === void 0 ? 0 : Q,
        se = Xu(typeof G != "number" ? G : Gu(G, lr)),
        ce = J === ar ? Iu : ar,
        Z = u.rects.popper,
        re = u.elements[X ? ce : J],
        q = (function (Ve, ht, mt, Se) {
          var jt =
              ht === "clippingParents"
                ? (function (ue) {
                    var Qe = Gr(to(ue)),
                      gt =
                        ["absolute", "fixed"].indexOf(Qt(ue).position) >= 0 &&
                        pt(ue)
                          ? Yr(ue)
                          : ue;
                    return Dn(gt)
                      ? Qe.filter(function (an) {
                          return Dn(an) && Ku(an, gt) && It(an) !== "body";
                        })
                      : [];
                  })(Ve)
                : [].concat(ht),
            Ft = [].concat(jt, [mt]),
            pr = Ft[0],
            De = Ft.reduce(function (ue, Qe) {
              var gt = tc(Ve, Qe, Se);
              return (
                (ue.top = Mn(gt.top, ue.top)),
                (ue.right = eo(gt.right, ue.right)),
                (ue.bottom = eo(gt.bottom, ue.bottom)),
                (ue.left = Mn(gt.left, ue.left)),
                ue
              );
            }, tc(Ve, pr, Se));
          return (
            (De.width = De.right - De.left),
            (De.height = De.bottom - De.top),
            (De.x = De.left),
            (De.y = De.top),
            De
          );
        })(Dn(re) ? re : re.contextElement || sn(u.elements.popper), b, $, E),
        te = cr(u.elements.reference),
        ie = nc({
          reference: te,
          element: Z,
          strategy: "absolute",
          placement: v,
        }),
        ae = ts(Object.assign({}, Z, ie)),
        oe = J === ar ? ae : te,
        xe = {
          top: q.top - oe.top + se.top,
          bottom: oe.bottom - q.bottom + se.bottom,
          left: q.left - oe.left + se.left,
          right: oe.right - q.right + se.right,
        },
        lt = u.modifiersData.offset;
      if (J === ar && lt) {
        var xt = lt[v];
        Object.keys(xe).forEach(function (Ve) {
          var ht = [it, rt].indexOf(Ve) >= 0 ? 1 : -1,
            mt = [Ue, rt].indexOf(Ve) >= 0 ? "y" : "x";
          xe[Ve] += xt[mt] * ht;
        });
      }
      return xe;
    }
    function rm(u, i) {
      i === void 0 && (i = {});
      var s = i,
        d = s.placement,
        v = s.boundary,
        _ = s.rootBoundary,
        E = s.padding,
        O = s.flipVariations,
        b = s.allowedAutoPlacements,
        F = b === void 0 ? Wl : b,
        $ = fr(d),
        I = $
          ? O
            ? Ul
            : Ul.filter(function (X) {
                return fr(X) === $;
              })
          : lr,
        J = I.filter(function (X) {
          return F.indexOf(X) >= 0;
        });
      J.length === 0 && (J = I);
      var W = J.reduce(function (X, Q) {
        return (
          (X[Q] = dr(u, {
            placement: Q,
            boundary: v,
            rootBoundary: _,
            padding: E,
          })[zt(Q)]),
          X
        );
      }, {});
      return Object.keys(W).sort(function (X, Q) {
        return W[X] - W[Q];
      });
    }
    const rc = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (u) {
        var i = u.state,
          s = u.options,
          d = u.name;
        if (!i.modifiersData[d]._skip) {
          for (
            var v = s.mainAxis,
              _ = v === void 0 || v,
              E = s.altAxis,
              O = E === void 0 || E,
              b = s.fallbackPlacements,
              F = s.padding,
              $ = s.boundary,
              I = s.rootBoundary,
              J = s.altBoundary,
              W = s.flipVariations,
              X = W === void 0 || W,
              Q = s.allowedAutoPlacements,
              G = i.options.placement,
              se = zt(G),
              ce =
                b ||
                (se !== G && X
                  ? (function (ue) {
                      if (zt(ue) === Zi) return [];
                      var Qe = ro(ue);
                      return [Zu(ue), Qe, Zu(Qe)];
                    })(G)
                  : [ro(G)]),
              Z = [G].concat(ce).reduce(function (ue, Qe) {
                return ue.concat(
                  zt(Qe) === Zi
                    ? rm(i, {
                        placement: Qe,
                        boundary: $,
                        rootBoundary: I,
                        padding: F,
                        flipVariations: X,
                        allowedAutoPlacements: Q,
                      })
                    : Qe
                );
              }, []),
              re = i.rects.reference,
              q = i.rects.popper,
              te = new Map(),
              ie = !0,
              ae = Z[0],
              oe = 0;
            oe < Z.length;
            oe++
          ) {
            var xe = Z[oe],
              lt = zt(xe),
              xt = fr(xe) === An,
              Ve = [Ue, rt].indexOf(lt) >= 0,
              ht = Ve ? "width" : "height",
              mt = dr(i, {
                placement: xe,
                boundary: $,
                rootBoundary: I,
                altBoundary: J,
                padding: F,
              }),
              Se = Ve ? (xt ? it : We) : xt ? rt : Ue;
            re[ht] > q[ht] && (Se = ro(Se));
            var jt = ro(Se),
              Ft = [];
            if (
              (_ && Ft.push(mt[lt] <= 0),
              O && Ft.push(mt[Se] <= 0, mt[jt] <= 0),
              Ft.every(function (ue) {
                return ue;
              }))
            ) {
              (ae = xe), (ie = !1);
              break;
            }
            te.set(xe, Ft);
          }
          if (ie)
            for (
              var pr = function (ue) {
                  var Qe = Z.find(function (gt) {
                    var an = te.get(gt);
                    if (an)
                      return an.slice(0, ue).every(function (ho) {
                        return ho;
                      });
                  });
                  if (Qe) return (ae = Qe), "break";
                },
                De = X ? 3 : 1;
              De > 0 && pr(De) !== "break";
              De--
            );
          i.placement !== ae &&
            ((i.modifiersData[d]._skip = !0),
            (i.placement = ae),
            (i.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function ic(u, i, s) {
      return (
        s === void 0 && (s = { x: 0, y: 0 }),
        {
          top: u.top - i.height - s.y,
          right: u.right - i.width + s.x,
          bottom: u.bottom - i.height + s.y,
          left: u.left - i.width - s.x,
        }
      );
    }
    function oc(u) {
      return [Ue, it, rt, We].some(function (i) {
        return u[i] >= 0;
      });
    }
    const lc = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (u) {
          var i = u.state,
            s = u.name,
            d = i.rects.reference,
            v = i.rects.popper,
            _ = i.modifiersData.preventOverflow,
            E = dr(i, { elementContext: "reference" }),
            O = dr(i, { altBoundary: !0 }),
            b = ic(E, d),
            F = ic(O, v, _),
            $ = oc(b),
            I = oc(F);
          (i.modifiersData[s] = {
            referenceClippingOffsets: b,
            popperEscapeOffsets: F,
            isReferenceHidden: $,
            hasPopperEscaped: I,
          }),
            (i.attributes.popper = Object.assign({}, i.attributes.popper, {
              "data-popper-reference-hidden": $,
              "data-popper-escaped": I,
            }));
        },
      },
      sc = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (u) {
          var i = u.state,
            s = u.options,
            d = u.name,
            v = s.offset,
            _ = v === void 0 ? [0, 0] : v,
            E = Wl.reduce(function ($, I) {
              return (
                ($[I] = (function (J, W, X) {
                  var Q = zt(J),
                    G = [We, Ue].indexOf(Q) >= 0 ? -1 : 1,
                    se =
                      typeof X == "function"
                        ? X(Object.assign({}, W, { placement: J }))
                        : X,
                    ce = se[0],
                    Z = se[1];
                  return (
                    (ce = ce || 0),
                    (Z = (Z || 0) * G),
                    [We, it].indexOf(Q) >= 0 ? { x: Z, y: ce } : { x: ce, y: Z }
                  );
                })(I, i.rects, _)),
                $
              );
            }, {}),
            O = E[i.placement],
            b = O.x,
            F = O.y;
          i.modifiersData.popperOffsets != null &&
            ((i.modifiersData.popperOffsets.x += b),
            (i.modifiersData.popperOffsets.y += F)),
            (i.modifiersData[d] = E);
        },
      },
      ns = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (u) {
          var i = u.state,
            s = u.name;
          i.modifiersData[s] = nc({
            reference: i.rects.reference,
            element: i.rects.popper,
            strategy: "absolute",
            placement: i.placement,
          });
        },
        data: {},
      },
      ac = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (u) {
          var i = u.state,
            s = u.options,
            d = u.name,
            v = s.mainAxis,
            _ = v === void 0 || v,
            E = s.altAxis,
            O = E !== void 0 && E,
            b = s.boundary,
            F = s.rootBoundary,
            $ = s.altBoundary,
            I = s.padding,
            J = s.tether,
            W = J === void 0 || J,
            X = s.tetherOffset,
            Q = X === void 0 ? 0 : X,
            G = dr(i, {
              boundary: b,
              rootBoundary: F,
              padding: I,
              altBoundary: $,
            }),
            se = zt(i.placement),
            ce = fr(i.placement),
            Z = !ce,
            re = Xl(se),
            q = re === "x" ? "y" : "x",
            te = i.modifiersData.popperOffsets,
            ie = i.rects.reference,
            ae = i.rects.popper,
            oe =
              typeof Q == "function"
                ? Q(Object.assign({}, i.rects, { placement: i.placement }))
                : Q,
            xe =
              typeof oe == "number"
                ? { mainAxis: oe, altAxis: oe }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, oe),
            lt = i.modifiersData.offset
              ? i.modifiersData.offset[i.placement]
              : null,
            xt = { x: 0, y: 0 };
          if (te) {
            if (_) {
              var Ve,
                ht = re === "y" ? Ue : We,
                mt = re === "y" ? rt : it,
                Se = re === "y" ? "height" : "width",
                jt = te[re],
                Ft = jt + G[ht],
                pr = jt - G[mt],
                De = W ? -ae[Se] / 2 : 0,
                ue = ce === An ? ie[Se] : ae[Se],
                Qe = ce === An ? -ae[Se] : -ie[Se],
                gt = i.elements.arrow,
                an = W && gt ? Yl(gt) : { width: 0, height: 0 },
                ho = i.modifiersData["arrow#persistent"]
                  ? i.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Kc = ho[ht],
                Yc = ho[mt],
                mo = Xr(0, ie[Se], an[Se]),
                Vm = Z
                  ? ie[Se] / 2 - De - mo - Kc - xe.mainAxis
                  : ue - mo - Kc - xe.mainAxis,
                Qm = Z
                  ? -ie[Se] / 2 + De + mo + Yc + xe.mainAxis
                  : Qe + mo + Yc + xe.mainAxis,
                us = i.elements.arrow && Yr(i.elements.arrow),
                Km = us
                  ? re === "y"
                    ? us.clientTop || 0
                    : us.clientLeft || 0
                  : 0,
                Xc = (Ve = lt == null ? void 0 : lt[re]) != null ? Ve : 0,
                Ym = jt + Qm - Xc,
                Gc = Xr(
                  W ? eo(Ft, jt + Vm - Xc - Km) : Ft,
                  jt,
                  W ? Mn(pr, Ym) : pr
                );
              (te[re] = Gc), (xt[re] = Gc - jt);
            }
            if (O) {
              var Jc,
                Xm = re === "x" ? Ue : We,
                Gm = re === "x" ? rt : it,
                Fn = te[q],
                go = q === "y" ? "height" : "width",
                qc = Fn + G[Xm],
                Zc = Fn - G[Gm],
                cs = [Ue, We].indexOf(se) !== -1,
                ef = (Jc = lt == null ? void 0 : lt[q]) != null ? Jc : 0,
                tf = cs ? qc : Fn - ie[go] - ae[go] - ef + xe.altAxis,
                nf = cs ? Fn + ie[go] + ae[go] - ef - xe.altAxis : Zc,
                rf =
                  W && cs
                    ? (function (Jm, qm, fs) {
                        var of = Xr(Jm, qm, fs);
                        return of > fs ? fs : of;
                      })(tf, Fn, nf)
                    : Xr(W ? tf : qc, Fn, W ? nf : Zc);
              (te[q] = rf), (xt[q] = rf - Fn);
            }
            i.modifiersData[d] = xt;
          }
        },
        requiresIfExists: ["offset"],
      };
    function im(u, i, s) {
      s === void 0 && (s = !1);
      var d,
        v,
        _ = pt(i),
        E =
          pt(i) &&
          (function (I) {
            var J = I.getBoundingClientRect(),
              W = ur(J.width) / I.offsetWidth || 1,
              X = ur(J.height) / I.offsetHeight || 1;
            return W !== 1 || X !== 1;
          })(i),
        O = sn(i),
        b = cr(u, E, s),
        F = { scrollLeft: 0, scrollTop: 0 },
        $ = { x: 0, y: 0 };
      return (
        (_ || (!_ && !s)) &&
          ((It(i) !== "body" || es(O)) &&
            (F =
              (d = i) !== ot(d) && pt(d)
                ? { scrollLeft: (v = d).scrollLeft, scrollTop: v.scrollTop }
                : ql(d)),
          pt(i)
            ? ((($ = cr(i, !0)).x += i.clientLeft), ($.y += i.clientTop))
            : O && ($.x = Zl(O))),
        {
          x: b.left + F.scrollLeft - $.x,
          y: b.top + F.scrollTop - $.y,
          width: b.width,
          height: b.height,
        }
      );
    }
    function om(u) {
      var i = new Map(),
        s = new Set(),
        d = [];
      function v(_) {
        s.add(_.name),
          []
            .concat(_.requires || [], _.requiresIfExists || [])
            .forEach(function (E) {
              if (!s.has(E)) {
                var O = i.get(E);
                O && v(O);
              }
            }),
          d.push(_);
      }
      return (
        u.forEach(function (_) {
          i.set(_.name, _);
        }),
        u.forEach(function (_) {
          s.has(_.name) || v(_);
        }),
        d
      );
    }
    var uc = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function cc() {
      for (var u = arguments.length, i = new Array(u), s = 0; s < u; s++)
        i[s] = arguments[s];
      return !i.some(function (d) {
        return !(d && typeof d.getBoundingClientRect == "function");
      });
    }
    function io(u) {
      u === void 0 && (u = {});
      var i = u,
        s = i.defaultModifiers,
        d = s === void 0 ? [] : s,
        v = i.defaultOptions,
        _ = v === void 0 ? uc : v;
      return function (E, O, b) {
        b === void 0 && (b = _);
        var F,
          $,
          I = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, uc, _),
            modifiersData: {},
            elements: { reference: E, popper: O },
            attributes: {},
            styles: {},
          },
          J = [],
          W = !1,
          X = {
            state: I,
            setOptions: function (G) {
              var se = typeof G == "function" ? G(I.options) : G;
              Q(),
                (I.options = Object.assign({}, _, I.options, se)),
                (I.scrollParents = {
                  reference: Dn(E)
                    ? Gr(E)
                    : E.contextElement
                    ? Gr(E.contextElement)
                    : [],
                  popper: Gr(O),
                });
              var ce,
                Z,
                re = (function (q) {
                  var te = om(q);
                  return Vu.reduce(function (ie, ae) {
                    return ie.concat(
                      te.filter(function (oe) {
                        return oe.phase === ae;
                      })
                    );
                  }, []);
                })(
                  ((ce = [].concat(d, I.options.modifiers)),
                  (Z = ce.reduce(function (q, te) {
                    var ie = q[te.name];
                    return (
                      (q[te.name] = ie
                        ? Object.assign({}, ie, te, {
                            options: Object.assign({}, ie.options, te.options),
                            data: Object.assign({}, ie.data, te.data),
                          })
                        : te),
                      q
                    );
                  }, {})),
                  Object.keys(Z).map(function (q) {
                    return Z[q];
                  }))
                );
              return (
                (I.orderedModifiers = re.filter(function (q) {
                  return q.enabled;
                })),
                I.orderedModifiers.forEach(function (q) {
                  var te = q.name,
                    ie = q.options,
                    ae = ie === void 0 ? {} : ie,
                    oe = q.effect;
                  if (typeof oe == "function") {
                    var xe = oe({
                      state: I,
                      name: te,
                      instance: X,
                      options: ae,
                    });
                    J.push(xe || function () {});
                  }
                }),
                X.update()
              );
            },
            forceUpdate: function () {
              if (!W) {
                var G = I.elements,
                  se = G.reference,
                  ce = G.popper;
                if (cc(se, ce)) {
                  (I.rects = {
                    reference: im(se, Yr(ce), I.options.strategy === "fixed"),
                    popper: Yl(ce),
                  }),
                    (I.reset = !1),
                    (I.placement = I.options.placement),
                    I.orderedModifiers.forEach(function (oe) {
                      return (I.modifiersData[oe.name] = Object.assign(
                        {},
                        oe.data
                      ));
                    });
                  for (var Z = 0; Z < I.orderedModifiers.length; Z++)
                    if (I.reset !== !0) {
                      var re = I.orderedModifiers[Z],
                        q = re.fn,
                        te = re.options,
                        ie = te === void 0 ? {} : te,
                        ae = re.name;
                      typeof q == "function" &&
                        (I =
                          q({ state: I, options: ie, name: ae, instance: X }) ||
                          I);
                    } else (I.reset = !1), (Z = -1);
                }
              }
            },
            update:
              ((F = function () {
                return new Promise(function (G) {
                  X.forceUpdate(), G(I);
                });
              }),
              function () {
                return (
                  $ ||
                    ($ = new Promise(function (G) {
                      Promise.resolve().then(function () {
                        ($ = void 0), G(F());
                      });
                    })),
                  $
                );
              }),
            destroy: function () {
              Q(), (W = !0);
            },
          };
        if (!cc(E, O)) return X;
        function Q() {
          J.forEach(function (G) {
            return G();
          }),
            (J = []);
        }
        return (
          X.setOptions(b).then(function (G) {
            !W && b.onFirstUpdate && b.onFirstUpdate(G);
          }),
          X
        );
      };
    }
    var lm = io(),
      sm = io({ defaultModifiers: [Jl, ns, Gl, Ql] }),
      rs = io({ defaultModifiers: [Jl, ns, Gl, Ql, sc, rc, ac, Ju, lc] });
    const fc = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            afterMain: Bu,
            afterRead: Fu,
            afterWrite: Wu,
            applyStyles: Ql,
            arrow: Ju,
            auto: Zi,
            basePlacements: lr,
            beforeMain: Ru,
            beforeRead: zu,
            beforeWrite: Hu,
            bottom: rt,
            clippingParents: bu,
            computeStyles: Gl,
            createPopper: rs,
            createPopperBase: lm,
            createPopperLite: sm,
            detectOverflow: dr,
            end: sr,
            eventListeners: Jl,
            flip: rc,
            hide: lc,
            left: We,
            main: $u,
            modifierPhases: Vu,
            offset: sc,
            placements: Wl,
            popper: ar,
            popperGenerator: io,
            popperOffsets: ns,
            preventOverflow: ac,
            read: ju,
            reference: Iu,
            right: it,
            start: An,
            top: Ue,
            variationPlacements: Ul,
            viewport: Hl,
            write: Uu,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      ),
      dc = "dropdown",
      am = "ArrowUp",
      pc = "ArrowDown",
      hc = "click.bs.dropdown.data-api",
      mc = "keydown.bs.dropdown.data-api",
      Jr = "show",
      bn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      um = `${bn}.show`,
      oo = ".dropdown-menu",
      cm = K() ? "top-end" : "top-start",
      fm = K() ? "top-start" : "top-end",
      dm = K() ? "bottom-end" : "bottom-start",
      pm = K() ? "bottom-start" : "bottom-end",
      hm = K() ? "left-start" : "right-start",
      mm = K() ? "right-start" : "left-start",
      gm = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
      },
      vm = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      };
    class Et extends Pe {
      constructor(i, s) {
        super(i, s),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu =
            H.next(this._element, oo)[0] ||
            H.prev(this._element, oo)[0] ||
            H.findOne(oo, this._parent)),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return gm;
      }
      static get DefaultType() {
        return vm;
      }
      static get NAME() {
        return dc;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (S(this._element) || this._isShown()) return;
        const i = { relatedTarget: this._element };
        if (!C.trigger(this._element, "show.bs.dropdown", i).defaultPrevented) {
          if (
            (this._createPopper(),
            "ontouchstart" in document.documentElement &&
              !this._parent.closest(".navbar-nav"))
          )
            for (const s of [].concat(...document.body.children))
              C.on(s, "mouseover", w);
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Jr),
            this._element.classList.add(Jr),
            C.trigger(this._element, "shown.bs.dropdown", i);
        }
      }
      hide() {
        if (S(this._element) || !this._isShown()) return;
        const i = { relatedTarget: this._element };
        this._completeHide(i);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _completeHide(i) {
        if (!C.trigger(this._element, "hide.bs.dropdown", i).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const s of [].concat(...document.body.children))
              C.off(s, "mouseover", w);
          this._popper && this._popper.destroy(),
            this._menu.classList.remove(Jr),
            this._element.classList.remove(Jr),
            this._element.setAttribute("aria-expanded", "false"),
            be.removeDataAttribute(this._menu, "popper"),
            C.trigger(this._element, "hidden.bs.dropdown", i);
        }
      }
      _getConfig(i) {
        if (
          typeof (i = super._getConfig(i)).reference == "object" &&
          !c(i.reference) &&
          typeof i.reference.getBoundingClientRect != "function"
        )
          throw new TypeError(
            `${dc.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
          );
        return i;
      }
      _createPopper() {
        if (fc === void 0)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        let i = this._element;
        this._config.reference === "parent"
          ? (i = this._parent)
          : c(this._config.reference)
          ? (i = p(this._config.reference))
          : typeof this._config.reference == "object" &&
            (i = this._config.reference);
        const s = this._getPopperConfig();
        this._popper = rs(i, this._menu, s);
      }
      _isShown() {
        return this._menu.classList.contains(Jr);
      }
      _getPlacement() {
        const i = this._parent;
        if (i.classList.contains("dropend")) return hm;
        if (i.classList.contains("dropstart")) return mm;
        if (i.classList.contains("dropup-center")) return "top";
        if (i.classList.contains("dropdown-center")) return "bottom";
        const s =
          getComputedStyle(this._menu)
            .getPropertyValue("--bs-position")
            .trim() === "end";
        return i.classList.contains("dropup") ? (s ? fm : cm) : s ? pm : dm;
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null;
      }
      _getOffset() {
        const { offset: i } = this._config;
        return typeof i == "string"
          ? i.split(",").map((s) => Number.parseInt(s, 10))
          : typeof i == "function"
          ? (s) => i(s, this._element)
          : i;
      }
      _getPopperConfig() {
        const i = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          (this._inNavbar || this._config.display === "static") &&
            (be.setDataAttribute(this._menu, "popper", "static"),
            (i.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          ke(ke({}, i), f(this._config.popperConfig, [i]))
        );
      }
      _selectMenuItem({ key: i, target: s }) {
        const d = H.find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        ).filter((v) => m(v));
        d.length && y(d, s, i === pc, !d.includes(s)).focus();
      }
      static jQueryInterface(i) {
        return this.each(function () {
          const s = Et.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0) throw new TypeError(`No method named "${i}"`);
            s[i]();
          }
        });
      }
      static clearMenus(i) {
        if (i.button === 2 || (i.type === "keyup" && i.key !== "Tab")) return;
        const s = H.find(um);
        for (const d of s) {
          const v = Et.getInstance(d);
          if (!v || v._config.autoClose === !1) continue;
          const _ = i.composedPath(),
            E = _.includes(v._menu);
          if (
            _.includes(v._element) ||
            (v._config.autoClose === "inside" && !E) ||
            (v._config.autoClose === "outside" && E) ||
            (v._menu.contains(i.target) &&
              ((i.type === "keyup" && i.key === "Tab") ||
                /input|select|option|textarea|form/i.test(i.target.tagName)))
          )
            continue;
          const O = { relatedTarget: v._element };
          i.type === "click" && (O.clickEvent = i), v._completeHide(O);
        }
      }
      static dataApiKeydownHandler(i) {
        const s = /input|textarea/i.test(i.target.tagName),
          d = i.key === "Escape",
          v = [am, pc].includes(i.key);
        if ((!v && !d) || (s && !d)) return;
        i.preventDefault();
        const _ = this.matches(bn)
            ? this
            : H.prev(this, bn)[0] ||
              H.next(this, bn)[0] ||
              H.findOne(bn, i.delegateTarget.parentNode),
          E = Et.getOrCreateInstance(_);
        if (v) return i.stopPropagation(), E.show(), void E._selectMenuItem(i);
        E._isShown() && (i.stopPropagation(), E.hide(), _.focus());
      }
    }
    C.on(document, mc, bn, Et.dataApiKeydownHandler),
      C.on(document, mc, oo, Et.dataApiKeydownHandler),
      C.on(document, hc, Et.clearMenus),
      C.on(document, "keyup.bs.dropdown.data-api", Et.clearMenus),
      C.on(document, hc, bn, function (u) {
        u.preventDefault(), Et.getOrCreateInstance(this).toggle();
      }),
      g(Et);
    const gc = "show",
      vc = "mousedown.bs.backdrop",
      ym = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body",
      },
      _m = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
      };
    class yc extends Vt {
      constructor(i) {
        super(),
          (this._config = this._getConfig(i)),
          (this._isAppended = !1),
          (this._element = null);
      }
      static get Default() {
        return ym;
      }
      static get DefaultType() {
        return _m;
      }
      static get NAME() {
        return "backdrop";
      }
      show(i) {
        if (!this._config.isVisible) return void f(i);
        this._append();
        const s = this._getElement();
        this._config.isAnimated && L(s),
          s.classList.add(gc),
          this._emulateAnimation(() => {
            f(i);
          });
      }
      hide(i) {
        this._config.isVisible
          ? (this._getElement().classList.remove(gc),
            this._emulateAnimation(() => {
              this.dispose(), f(i);
            }))
          : f(i);
      }
      dispose() {
        this._isAppended &&
          (C.off(this._element, vc),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _getElement() {
        if (!this._element) {
          const i = document.createElement("div");
          (i.className = this._config.className),
            this._config.isAnimated && i.classList.add("fade"),
            (this._element = i);
        }
        return this._element;
      }
      _configAfterMerge(i) {
        return (i.rootElement = p(i.rootElement)), i;
      }
      _append() {
        if (this._isAppended) return;
        const i = this._getElement();
        this._config.rootElement.append(i),
          C.on(i, vc, () => {
            f(this._config.clickCallback);
          }),
          (this._isAppended = !0);
      }
      _emulateAnimation(i) {
        h(i, this._getElement(), this._config.isAnimated);
      }
    }
    const _c = ".bs.focustrap",
      wc = "backward",
      wm = { autofocus: !0, trapElement: null },
      Sm = { autofocus: "boolean", trapElement: "element" };
    class Sc extends Vt {
      constructor(i) {
        super(),
          (this._config = this._getConfig(i)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null);
      }
      static get Default() {
        return wm;
      }
      static get DefaultType() {
        return Sm;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
          C.off(document, _c),
          C.on(document, "focusin.bs.focustrap", (i) => this._handleFocusin(i)),
          C.on(document, "keydown.tab.bs.focustrap", (i) =>
            this._handleKeydown(i)
          ),
          (this._isActive = !0));
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), C.off(document, _c));
      }
      _handleFocusin(i) {
        const { trapElement: s } = this._config;
        if (i.target === document || i.target === s || s.contains(i.target))
          return;
        const d = H.focusableChildren(s);
        d.length === 0
          ? s.focus()
          : this._lastTabNavDirection === wc
          ? d[d.length - 1].focus()
          : d[0].focus();
      }
      _handleKeydown(i) {
        i.key === "Tab" &&
          (this._lastTabNavDirection = i.shiftKey ? wc : "forward");
      }
    }
    const kc = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Cc = ".sticky-top",
      lo = "padding-right",
      Ec = "margin-right";
    class is {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const i = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - i);
      }
      hide() {
        const i = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(this._element, lo, (s) => s + i),
          this._setElementAttributes(kc, lo, (s) => s + i),
          this._setElementAttributes(Cc, Ec, (s) => s - i);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, lo),
          this._resetElementAttributes(kc, lo),
          this._resetElementAttributes(Cc, Ec);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(i, s, d) {
        const v = this.getWidth();
        this._applyManipulationCallback(i, (_) => {
          if (_ !== this._element && window.innerWidth > _.clientWidth + v)
            return;
          this._saveInitialAttribute(_, s);
          const E = window.getComputedStyle(_).getPropertyValue(s);
          _.style.setProperty(s, `${d(Number.parseFloat(E))}px`);
        });
      }
      _saveInitialAttribute(i, s) {
        const d = i.style.getPropertyValue(s);
        d && be.setDataAttribute(i, s, d);
      }
      _resetElementAttributes(i, s) {
        this._applyManipulationCallback(i, (d) => {
          const v = be.getDataAttribute(d, s);
          v !== null
            ? (be.removeDataAttribute(d, s), d.style.setProperty(s, v))
            : d.style.removeProperty(s);
        });
      }
      _applyManipulationCallback(i, s) {
        if (c(i)) s(i);
        else for (const d of H.find(i, this._element)) s(d);
      }
    }
    const xc = ".bs.modal",
      Nc = "hidden.bs.modal",
      Tc = "show.bs.modal",
      Pc = "modal-open",
      Oc = "show",
      os = "modal-static",
      km = { backdrop: !0, focus: !0, keyboard: !0 },
      Cm = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean",
      };
    class In extends Pe {
      constructor(i, s) {
        super(i, s),
          (this._dialog = H.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new is()),
          this._addEventListeners();
      }
      static get Default() {
        return km;
      }
      static get DefaultType() {
        return Cm;
      }
      static get NAME() {
        return "modal";
      }
      toggle(i) {
        return this._isShown ? this.hide() : this.show(i);
      }
      show(i) {
        this._isShown ||
          this._isTransitioning ||
          C.trigger(this._element, Tc, { relatedTarget: i }).defaultPrevented ||
          ((this._isShown = !0),
          (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(Pc),
          this._adjustDialog(),
          this._backdrop.show(() => this._showElement(i)));
      }
      hide() {
        this._isShown &&
          !this._isTransitioning &&
          (C.trigger(this._element, "hide.bs.modal").defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(Oc),
            this._queueCallback(
              () => this._hideModal(),
              this._element,
              this._isAnimated()
            )));
      }
      dispose() {
        C.off(window, xc),
          C.off(this._dialog, xc),
          this._backdrop.dispose(),
          this._focustrap.deactivate(),
          super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new yc({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new Sc({ trapElement: this._element });
      }
      _showElement(i) {
        document.body.contains(this._element) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0);
        const s = H.findOne(".modal-body", this._dialog);
        s && (s.scrollTop = 0),
          L(this._element),
          this._element.classList.add(Oc),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                C.trigger(this._element, "shown.bs.modal", {
                  relatedTarget: i,
                });
            },
            this._dialog,
            this._isAnimated()
          );
      }
      _addEventListeners() {
        C.on(this._element, "keydown.dismiss.bs.modal", (i) => {
          i.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : this._triggerBackdropTransition());
        }),
          C.on(window, "resize.bs.modal", () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }),
          C.on(this._element, "mousedown.dismiss.bs.modal", (i) => {
            C.one(this._element, "click.dismiss.bs.modal", (s) => {
              this._element === i.target &&
                this._element === s.target &&
                (this._config.backdrop !== "static"
                  ? this._config.backdrop && this.hide()
                  : this._triggerBackdropTransition());
            });
          });
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove(Pc),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              C.trigger(this._element, Nc);
          });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (C.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
          return;
        const i =
            this._element.scrollHeight > document.documentElement.clientHeight,
          s = this._element.style.overflowY;
        s === "hidden" ||
          this._element.classList.contains(os) ||
          (i || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(os),
          this._queueCallback(() => {
            this._element.classList.remove(os),
              this._queueCallback(() => {
                this._element.style.overflowY = s;
              }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const i =
            this._element.scrollHeight > document.documentElement.clientHeight,
          s = this._scrollBar.getWidth(),
          d = s > 0;
        if (d && !i) {
          const v = K() ? "paddingLeft" : "paddingRight";
          this._element.style[v] = `${s}px`;
        }
        if (!d && i) {
          const v = K() ? "paddingRight" : "paddingLeft";
          this._element.style[v] = `${s}px`;
        }
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(i, s) {
        return this.each(function () {
          const d = In.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (d[i] === void 0) throw new TypeError(`No method named "${i}"`);
            d[i](s);
          }
        });
      }
    }
    C.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (u) {
        const i = H.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && u.preventDefault(),
          C.one(i, Tc, (d) => {
            d.defaultPrevented ||
              C.one(i, Nc, () => {
                m(this) && this.focus();
              });
          });
        const s = H.findOne(".modal.show");
        s && In.getInstance(s).hide(), In.getOrCreateInstance(i).toggle(this);
      }
    ),
      Ki(In),
      g(In);
    const Lc = "show",
      Ac = "showing",
      Dc = "hiding",
      Mc = ".offcanvas.show",
      bc = "hidePrevented.bs.offcanvas",
      Ic = "hidden.bs.offcanvas",
      Em = { backdrop: !0, keyboard: !0, scroll: !1 },
      xm = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
      };
    class Kt extends Pe {
      constructor(i, s) {
        super(i, s),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get Default() {
        return Em;
      }
      static get DefaultType() {
        return xm;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(i) {
        return this._isShown ? this.hide() : this.show(i);
      }
      show(i) {
        this._isShown ||
          C.trigger(this._element, "show.bs.offcanvas", { relatedTarget: i })
            .defaultPrevented ||
          ((this._isShown = !0),
          this._backdrop.show(),
          this._config.scroll || new is().hide(),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add(Ac),
          this._queueCallback(
            () => {
              (this._config.scroll && !this._config.backdrop) ||
                this._focustrap.activate(),
                this._element.classList.add(Lc),
                this._element.classList.remove(Ac),
                C.trigger(this._element, "shown.bs.offcanvas", {
                  relatedTarget: i,
                });
            },
            this._element,
            !0
          ));
      }
      hide() {
        this._isShown &&
          (C.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
            (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add(Dc),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.classList.remove(Lc, Dc),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new is().reset(),
                  C.trigger(this._element, Ic);
              },
              this._element,
              !0
            )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const i = Boolean(this._config.backdrop);
        return new yc({
          className: "offcanvas-backdrop",
          isVisible: i,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: i
            ? () => {
                this._config.backdrop !== "static"
                  ? this.hide()
                  : C.trigger(this._element, bc);
              }
            : null,
        });
      }
      _initializeFocusTrap() {
        return new Sc({ trapElement: this._element });
      }
      _addEventListeners() {
        C.on(this._element, "keydown.dismiss.bs.offcanvas", (i) => {
          i.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : C.trigger(this._element, bc));
        });
      }
      static jQueryInterface(i) {
        return this.each(function () {
          const s = Kt.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            s[i](this);
          }
        });
      }
    }
    C.on(
      document,
      "click.bs.offcanvas.data-api",
      '[data-bs-toggle="offcanvas"]',
      function (u) {
        const i = H.getElementFromSelector(this);
        if (
          (["A", "AREA"].includes(this.tagName) && u.preventDefault(), S(this))
        )
          return;
        C.one(i, Ic, () => {
          m(this) && this.focus();
        });
        const s = H.findOne(Mc);
        s && s !== i && Kt.getInstance(s).hide(),
          Kt.getOrCreateInstance(i).toggle(this);
      }
    ),
      C.on(window, "load.bs.offcanvas.data-api", () => {
        for (const u of H.find(Mc)) Kt.getOrCreateInstance(u).show();
      }),
      C.on(window, "resize.bs.offcanvas", () => {
        for (const u of H.find("[aria-modal][class*=show][class*=offcanvas-]"))
          getComputedStyle(u).position !== "fixed" &&
            Kt.getOrCreateInstance(u).hide();
      }),
      Ki(Kt),
      g(Kt);
    const zc = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      Nm = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      Tm = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      Pm = (u, i) => {
        const s = u.nodeName.toLowerCase();
        return i.includes(s)
          ? !Nm.has(s) || Boolean(Tm.test(u.nodeValue))
          : i.filter((d) => d instanceof RegExp).some((d) => d.test(s));
      },
      Om = {
        allowList: zc,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
      },
      Lm = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      Am = {
        entry: "(string|element|function|null)",
        selector: "(string|element)",
      };
    class Dm extends Vt {
      constructor(i) {
        super(), (this._config = this._getConfig(i));
      }
      static get Default() {
        return Om;
      }
      static get DefaultType() {
        return Lm;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content)
          .map((i) => this._resolvePossibleFunction(i))
          .filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(i) {
        return (
          this._checkContent(i),
          (this._config.content = ke(ke({}, this._config.content), i)),
          this
        );
      }
      toHtml() {
        const i = document.createElement("div");
        i.innerHTML = this._maybeSanitize(this._config.template);
        for (const [v, _] of Object.entries(this._config.content))
          this._setContent(i, _, v);
        const s = i.children[0],
          d = this._resolvePossibleFunction(this._config.extraClass);
        return d && s.classList.add(...d.split(" ")), s;
      }
      _typeCheckConfig(i) {
        super._typeCheckConfig(i), this._checkContent(i.content);
      }
      _checkContent(i) {
        for (const [s, d] of Object.entries(i))
          super._typeCheckConfig({ selector: s, entry: d }, Am);
      }
      _setContent(i, s, d) {
        const v = H.findOne(d, i);
        v &&
          ((s = this._resolvePossibleFunction(s))
            ? c(s)
              ? this._putElementInTemplate(p(s), v)
              : this._config.html
              ? (v.innerHTML = this._maybeSanitize(s))
              : (v.textContent = s)
            : v.remove());
      }
      _maybeSanitize(i) {
        return this._config.sanitize
          ? (function (s, d, v) {
              if (!s.length) return s;
              if (v && typeof v == "function") return v(s);
              const _ = new window.DOMParser().parseFromString(s, "text/html"),
                E = [].concat(..._.body.querySelectorAll("*"));
              for (const O of E) {
                const b = O.nodeName.toLowerCase();
                if (!Object.keys(d).includes(b)) {
                  O.remove();
                  continue;
                }
                const F = [].concat(...O.attributes),
                  $ = [].concat(d["*"] || [], d[b] || []);
                for (const I of F) Pm(I, $) || O.removeAttribute(I.nodeName);
              }
              return _.body.innerHTML;
            })(i, this._config.allowList, this._config.sanitizeFn)
          : i;
      }
      _resolvePossibleFunction(i) {
        return f(i, [this]);
      }
      _putElementInTemplate(i, s) {
        if (this._config.html) return (s.innerHTML = ""), void s.append(i);
        s.textContent = i.textContent;
      }
    }
    const Mm = new Set(["sanitize", "allowList", "sanitizeFn"]),
      ls = "fade",
      so = "show",
      jc = ".modal",
      Fc = "hide.bs.modal",
      ao = "hover",
      Rc = "focus",
      bm = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: K() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: K() ? "right" : "left",
      },
      Im = {
        allowList: zc,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      zm = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      };
    class zn extends Pe {
      constructor(i, s) {
        if (fc === void 0)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(i, s),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle();
      }
      static get Default() {
        return Im;
      }
      static get DefaultType() {
        return zm;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled &&
          ((this._activeTrigger.click = !this._activeTrigger.click),
          this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout),
          C.off(this._element.closest(jc), Fc, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
            this._element.setAttribute(
              "title",
              this._element.getAttribute("data-bs-original-title")
            ),
          this._disposePopper(),
          super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        const i = C.trigger(this._element, this.constructor.eventName("show")),
          s = (
            T(this._element) || this._element.ownerDocument.documentElement
          ).contains(this._element);
        if (i.defaultPrevented || !s) return;
        this._disposePopper();
        const d = this._getTipElement();
        this._element.setAttribute("aria-describedby", d.getAttribute("id"));
        const { container: v } = this._config;
        if (
          (this._element.ownerDocument.documentElement.contains(this.tip) ||
            (v.append(d),
            C.trigger(this._element, this.constructor.eventName("inserted"))),
          (this._popper = this._createPopper(d)),
          d.classList.add(so),
          "ontouchstart" in document.documentElement)
        )
          for (const _ of [].concat(...document.body.children))
            C.on(_, "mouseover", w);
        this._queueCallback(
          () => {
            C.trigger(this._element, this.constructor.eventName("shown")),
              this._isHovered === !1 && this._leave(),
              (this._isHovered = !1);
          },
          this.tip,
          this._isAnimated()
        );
      }
      hide() {
        if (
          this._isShown() &&
          !C.trigger(this._element, this.constructor.eventName("hide"))
            .defaultPrevented
        ) {
          if (
            (this._getTipElement().classList.remove(so),
            "ontouchstart" in document.documentElement)
          )
            for (const i of [].concat(...document.body.children))
              C.off(i, "mouseover", w);
          (this._activeTrigger.click = !1),
            (this._activeTrigger.focus = !1),
            (this._activeTrigger.hover = !1),
            (this._isHovered = null),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  C.trigger(
                    this._element,
                    this.constructor.eventName("hidden")
                  ));
              },
              this.tip,
              this._isAnimated()
            );
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return Boolean(this._getTitle());
      }
      _getTipElement() {
        return (
          this.tip ||
            (this.tip = this._createTipElement(
              this._newContent || this._getContentForTemplate()
            )),
          this.tip
        );
      }
      _createTipElement(i) {
        const s = this._getTemplateFactory(i).toHtml();
        if (!s) return null;
        s.classList.remove(ls, so),
          s.classList.add(`bs-${this.constructor.NAME}-auto`);
        const d = ((v) => {
          do v += Math.floor(1e6 * Math.random());
          while (document.getElementById(v));
          return v;
        })(this.constructor.NAME).toString();
        return (
          s.setAttribute("id", d), this._isAnimated() && s.classList.add(ls), s
        );
      }
      setContent(i) {
        (this._newContent = i),
          this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(i) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(i)
            : (this._templateFactory = new Dm(
                un(ke({}, this._config), {
                  content: i,
                  extraClass: this._resolvePossibleFunction(
                    this._config.customClass
                  ),
                })
              )),
          this._templateFactory
        );
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return (
          this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
        );
      }
      _initializeOnDelegatedTarget(i) {
        return this.constructor.getOrCreateInstance(
          i.delegateTarget,
          this._getDelegateConfig()
        );
      }
      _isAnimated() {
        return (
          this._config.animation ||
          (this.tip && this.tip.classList.contains(ls))
        );
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(so);
      }
      _createPopper(i) {
        const s = f(this._config.placement, [this, i, this._element]),
          d = bm[s.toUpperCase()];
        return rs(this._element, i, this._getPopperConfig(d));
      }
      _getOffset() {
        const { offset: i } = this._config;
        return typeof i == "string"
          ? i.split(",").map((s) => Number.parseInt(s, 10))
          : typeof i == "function"
          ? (s) => i(s, this._element)
          : i;
      }
      _resolvePossibleFunction(i) {
        return f(i, [this._element]);
      }
      _getPopperConfig(i) {
        const s = {
          placement: i,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (d) => {
                this._getTipElement().setAttribute(
                  "data-popper-placement",
                  d.state.placement
                );
              },
            },
          ],
        };
        return ke(ke({}, s), f(this._config.popperConfig, [s]));
      }
      _setListeners() {
        const i = this._config.trigger.split(" ");
        for (const s of i)
          if (s === "click")
            C.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (d) => {
                this._initializeOnDelegatedTarget(d).toggle();
              }
            );
          else if (s !== "manual") {
            const d =
                s === ao
                  ? this.constructor.eventName("mouseenter")
                  : this.constructor.eventName("focusin"),
              v =
                s === ao
                  ? this.constructor.eventName("mouseleave")
                  : this.constructor.eventName("focusout");
            C.on(this._element, d, this._config.selector, (_) => {
              const E = this._initializeOnDelegatedTarget(_);
              (E._activeTrigger[_.type === "focusin" ? Rc : ao] = !0),
                E._enter();
            }),
              C.on(this._element, v, this._config.selector, (_) => {
                const E = this._initializeOnDelegatedTarget(_);
                (E._activeTrigger[_.type === "focusout" ? Rc : ao] =
                  E._element.contains(_.relatedTarget)),
                  E._leave();
              });
          }
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
          C.on(this._element.closest(jc), Fc, this._hideModalHandler);
      }
      _fixTitle() {
        const i = this._element.getAttribute("title");
        i &&
          (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", i),
          this._element.setAttribute("data-bs-original-title", i),
          this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered
          ? (this._isHovered = !0)
          : ((this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
          this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
      }
      _setTimeout(i, s) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(i, s));
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(i) {
        const s = be.getDataAttributes(this._element);
        for (const d of Object.keys(s)) Mm.has(d) && delete s[d];
        return (
          (i = ke(ke({}, s), typeof i == "object" && i ? i : {})),
          (i = this._mergeConfigObj(i)),
          (i = this._configAfterMerge(i)),
          this._typeCheckConfig(i),
          i
        );
      }
      _configAfterMerge(i) {
        return (
          (i.container = i.container === !1 ? document.body : p(i.container)),
          typeof i.delay == "number" &&
            (i.delay = { show: i.delay, hide: i.delay }),
          typeof i.title == "number" && (i.title = i.title.toString()),
          typeof i.content == "number" && (i.content = i.content.toString()),
          i
        );
      }
      _getDelegateConfig() {
        const i = {};
        for (const [s, d] of Object.entries(this._config))
          this.constructor.Default[s] !== d && (i[s] = d);
        return (i.selector = !1), (i.trigger = "manual"), i;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null)),
          this.tip && (this.tip.remove(), (this.tip = null));
      }
      static jQueryInterface(i) {
        return this.each(function () {
          const s = zn.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0) throw new TypeError(`No method named "${i}"`);
            s[i]();
          }
        });
      }
    }
    g(zn);
    const jm = un(ke({}, zn.Default), {
        content: "",
        offset: [0, 8],
        placement: "right",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
      }),
      Fm = un(ke({}, zn.DefaultType), {
        content: "(null|string|element|function)",
      });
    class uo extends zn {
      static get Default() {
        return jm;
      }
      static get DefaultType() {
        return Fm;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent(),
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(i) {
        return this.each(function () {
          const s = uo.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0) throw new TypeError(`No method named "${i}"`);
            s[i]();
          }
        });
      }
    }
    g(uo);
    const $c = "click.bs.scrollspy",
      qr = "active",
      Bc = "[href]",
      Rm = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
      },
      $m = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
      };
    class Zr extends Pe {
      constructor(i, s) {
        super(i, s),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            getComputedStyle(this._element).overflowY === "visible"
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh();
      }
      static get Default() {
        return Rm;
      }
      static get DefaultType() {
        return $m;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer
            ? this._observer.disconnect()
            : (this._observer = this._getNewObserver());
        for (const i of this._observableSections.values())
          this._observer.observe(i);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(i) {
        return (
          (i.target = p(i.target) || document.body),
          (i.rootMargin = i.offset ? `${i.offset}px 0px -30%` : i.rootMargin),
          typeof i.threshold == "string" &&
            (i.threshold = i.threshold
              .split(",")
              .map((s) => Number.parseFloat(s))),
          i
        );
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (C.off(this._config.target, $c),
          C.on(this._config.target, $c, Bc, (i) => {
            const s = this._observableSections.get(i.target.hash);
            if (s) {
              i.preventDefault();
              const d = this._rootElement || window,
                v = s.offsetTop - this._element.offsetTop;
              if (d.scrollTo)
                return void d.scrollTo({ top: v, behavior: "smooth" });
              d.scrollTop = v;
            }
          }));
      }
      _getNewObserver() {
        const i = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin,
        };
        return new IntersectionObserver((s) => this._observerCallback(s), i);
      }
      _observerCallback(i) {
        const s = (E) => this._targetLinks.get(`#${E.target.id}`),
          d = (E) => {
            (this._previousScrollData.visibleEntryTop = E.target.offsetTop),
              this._process(s(E));
          },
          v = (this._rootElement || document.documentElement).scrollTop,
          _ = v >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = v;
        for (const E of i) {
          if (!E.isIntersecting) {
            (this._activeTarget = null), this._clearActiveClass(s(E));
            continue;
          }
          const O =
            E.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (_ && O) {
            if ((d(E), !v)) return;
          } else _ || O || d(E);
        }
      }
      _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const i = H.find(Bc, this._config.target);
        for (const s of i) {
          if (!s.hash || S(s)) continue;
          const d = H.findOne(decodeURI(s.hash), this._element);
          m(d) &&
            (this._targetLinks.set(decodeURI(s.hash), s),
            this._observableSections.set(s.hash, d));
        }
      }
      _process(i) {
        this._activeTarget !== i &&
          (this._clearActiveClass(this._config.target),
          (this._activeTarget = i),
          i.classList.add(qr),
          this._activateParents(i),
          C.trigger(this._element, "activate.bs.scrollspy", {
            relatedTarget: i,
          }));
      }
      _activateParents(i) {
        if (i.classList.contains("dropdown-item"))
          H.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(
            qr
          );
        else
          for (const s of H.parents(i, ".nav, .list-group"))
            for (const d of H.prev(
              s,
              ".nav-link, .nav-item > .nav-link, .list-group-item"
            ))
              d.classList.add(qr);
      }
      _clearActiveClass(i) {
        i.classList.remove(qr);
        const s = H.find("[href].active", i);
        for (const d of s) d.classList.remove(qr);
      }
      static jQueryInterface(i) {
        return this.each(function () {
          const s = Zr.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            s[i]();
          }
        });
      }
    }
    C.on(window, "load.bs.scrollspy.data-api", () => {
      for (const u of H.find('[data-bs-spy="scroll"]'))
        Zr.getOrCreateInstance(u);
    }),
      g(Zr);
    const Bm = "ArrowLeft",
      Hc = "ArrowRight",
      Hm = "ArrowUp",
      Uc = "ArrowDown",
      co = "active",
      Wc = "fade",
      ss = "show",
      Vc =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      as = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Vc}`;
    class jn extends Pe {
      constructor(i) {
        super(i),
          (this._parent = this._element.closest(
            '.list-group, .nav, [role="tablist"]'
          )),
          this._parent &&
            (this._setInitialAttributes(this._parent, this._getChildren()),
            C.on(this._element, "keydown.bs.tab", (s) => this._keydown(s)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const i = this._element;
        if (this._elemIsActive(i)) return;
        const s = this._getActiveElem(),
          d = s ? C.trigger(s, "hide.bs.tab", { relatedTarget: i }) : null;
        C.trigger(i, "show.bs.tab", { relatedTarget: s }).defaultPrevented ||
          (d && d.defaultPrevented) ||
          (this._deactivate(s, i), this._activate(i, s));
      }
      _activate(i, s) {
        i &&
          (i.classList.add(co),
          this._activate(H.getElementFromSelector(i)),
          this._queueCallback(
            () => {
              i.getAttribute("role") === "tab"
                ? (i.removeAttribute("tabindex"),
                  i.setAttribute("aria-selected", !0),
                  this._toggleDropDown(i, !0),
                  C.trigger(i, "shown.bs.tab", { relatedTarget: s }))
                : i.classList.add(ss);
            },
            i,
            i.classList.contains(Wc)
          ));
      }
      _deactivate(i, s) {
        i &&
          (i.classList.remove(co),
          i.blur(),
          this._deactivate(H.getElementFromSelector(i)),
          this._queueCallback(
            () => {
              i.getAttribute("role") === "tab"
                ? (i.setAttribute("aria-selected", !1),
                  i.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(i, !1),
                  C.trigger(i, "hidden.bs.tab", { relatedTarget: s }))
                : i.classList.remove(ss);
            },
            i,
            i.classList.contains(Wc)
          ));
      }
      _keydown(i) {
        if (![Bm, Hc, Hm, Uc].includes(i.key)) return;
        i.stopPropagation(), i.preventDefault();
        const s = [Hc, Uc].includes(i.key),
          d = y(
            this._getChildren().filter((v) => !S(v)),
            i.target,
            s,
            !0
          );
        d && (d.focus({ preventScroll: !0 }), jn.getOrCreateInstance(d).show());
      }
      _getChildren() {
        return H.find(as, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((i) => this._elemIsActive(i)) || null;
      }
      _setInitialAttributes(i, s) {
        this._setAttributeIfNotExists(i, "role", "tablist");
        for (const d of s) this._setInitialAttributesOnChild(d);
      }
      _setInitialAttributesOnChild(i) {
        i = this._getInnerElement(i);
        const s = this._elemIsActive(i),
          d = this._getOuterElement(i);
        i.setAttribute("aria-selected", s),
          d !== i && this._setAttributeIfNotExists(d, "role", "presentation"),
          s || i.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(i, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(i);
      }
      _setInitialAttributesOnTargetPanel(i) {
        const s = H.getElementFromSelector(i);
        s &&
          (this._setAttributeIfNotExists(s, "role", "tabpanel"),
          i.id &&
            this._setAttributeIfNotExists(s, "aria-labelledby", `${i.id}`));
      }
      _toggleDropDown(i, s) {
        const d = this._getOuterElement(i);
        if (!d.classList.contains("dropdown")) return;
        const v = (_, E) => {
          const O = H.findOne(_, d);
          O && O.classList.toggle(E, s);
        };
        v(".dropdown-toggle", co),
          v(".dropdown-menu", ss),
          d.setAttribute("aria-expanded", s);
      }
      _setAttributeIfNotExists(i, s, d) {
        i.hasAttribute(s) || i.setAttribute(s, d);
      }
      _elemIsActive(i) {
        return i.classList.contains(co);
      }
      _getInnerElement(i) {
        return i.matches(as) ? i : H.findOne(as, i);
      }
      _getOuterElement(i) {
        return i.closest(".nav-item, .list-group-item") || i;
      }
      static jQueryInterface(i) {
        return this.each(function () {
          const s = jn.getOrCreateInstance(this);
          if (typeof i == "string") {
            if (s[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            s[i]();
          }
        });
      }
    }
    C.on(document, "click.bs.tab", Vc, function (u) {
      ["A", "AREA"].includes(this.tagName) && u.preventDefault(),
        S(this) || jn.getOrCreateInstance(this).show();
    }),
      C.on(window, "load.bs.tab", () => {
        for (const u of H.find(
          '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
        ))
          jn.getOrCreateInstance(u);
      }),
      g(jn);
    const Qc = "hide",
      fo = "show",
      po = "showing",
      Um = { animation: "boolean", autohide: "boolean", delay: "number" },
      Wm = { animation: !0, autohide: !0, delay: 5e3 };
    class ei extends Pe {
      constructor(i, s) {
        super(i, s),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get Default() {
        return Wm;
      }
      static get DefaultType() {
        return Um;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        C.trigger(this._element, "show.bs.toast").defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove(Qc),
          L(this._element),
          this._element.classList.add(fo, po),
          this._queueCallback(
            () => {
              this._element.classList.remove(po),
                C.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          ));
      }
      hide() {
        this.isShown() &&
          (C.trigger(this._element, "hide.bs.toast").defaultPrevented ||
            (this._element.classList.add(po),
            this._queueCallback(
              () => {
                this._element.classList.add(Qc),
                  this._element.classList.remove(po, fo),
                  C.trigger(this._element, "hidden.bs.toast");
              },
              this._element,
              this._config.animation
            )));
      }
      dispose() {
        this._clearTimeout(),
          this.isShown() && this._element.classList.remove(fo),
          super.dispose();
      }
      isShown() {
        return this._element.classList.contains(fo);
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(i, s) {
        switch (i.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = s;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = s;
        }
        if (s) return void this._clearTimeout();
        const d = i.relatedTarget;
        this._element === d ||
          this._element.contains(d) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        C.on(this._element, "mouseover.bs.toast", (i) =>
          this._onInteraction(i, !0)
        ),
          C.on(this._element, "mouseout.bs.toast", (i) =>
            this._onInteraction(i, !1)
          ),
          C.on(this._element, "focusin.bs.toast", (i) =>
            this._onInteraction(i, !0)
          ),
          C.on(this._element, "focusout.bs.toast", (i) =>
            this._onInteraction(i, !1)
          );
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(i) {
        return this.each(function () {
          const s = ei.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0) throw new TypeError(`No method named "${i}"`);
            s[i](this);
          }
        });
      }
    }
    return (
      Ki(ei),
      g(ei),
      {
        Alert: Vr,
        Button: Qr,
        Carousel: ir,
        Collapse: or,
        Dropdown: Et,
        Modal: In,
        Offcanvas: Kt,
        Popover: uo,
        ScrollSpy: Zr,
        Tab: jn,
        Toast: ei,
        Tooltip: zn,
      }
    );
  });
})(t0);
const Qi = V.exports.createContext(),
  _l = { login: "[Auth] Login", logout: "[Auth] Logout" },
  n0 = (e = {}, t) => {
    switch (t.type) {
      case _l.login:
        return un(ke({}, e), { logged: !0, user: t.payload });
      case _l.logout:
        return { logged: !1 };
      default:
        return e;
    }
  };
var jl = { exports: {} },
  Fl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r0 = V.exports,
  i0 = Symbol.for("react.element"),
  o0 = Symbol.for("react.fragment"),
  l0 = Object.prototype.hasOwnProperty,
  s0 = r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  a0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bh(e, t, n) {
  var r,
    o = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) l0.call(t, r) && !a0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: i0,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: s0.current,
  };
}
Fl.Fragment = o0;
Fl.jsx = Bh;
Fl.jsxs = Bh;
jl.exports = Fl;
const D = jl.exports.jsx,
  me = jl.exports.jsxs,
  Hh = jl.exports.Fragment,
  u0 = () => {
    const e = JSON.parse(localStorage.getItem("user"));
    return { logged: !!e, user: e };
  },
  c0 = ({ children: e }) => {
    const [t, n] = V.exports.useReducer(n0, {}, u0),
      r = (l = "") => {
        const a = { id: "ABC", name: l },
          c = { type: _l.login, payload: a };
        localStorage.setItem("user", JSON.stringify(a)), n(c);
      },
      o = () => {
        localStorage.removeItem("user");
        const l = { type: _l.logout };
        n(l);
      };
    return D(Qi.Provider, {
      value: un(ke({}, t), { login: r, logout: o }),
      children: e,
    });
  };
const f0 = () => {
    const { login: e } = V.exports.useContext(Qi),
      t = Ur(),
      [n, r] = V.exports.useState(""),
      [o, l] = V.exports.useState(""),
      [a, c] = V.exports.useState("");
    return D("div", {
      className:
        "login-container d-flex align-items-center justify-content-center",
      children: me("div", {
        className: "login-box text-center p-5 shadow-lg",
        children: [
          D("h1", { className: "mb-4", children: "Login" }),
          a && D("div", { className: "alert alert-danger", children: a }),
          D("div", {
            className: "mb-3",
            children: D("input", {
              type: "text",
              className: "form-control form-control-lg",
              placeholder: "Nombre de usuario",
              value: n,
              onChange: (m) => r(m.target.value),
            }),
          }),
          D("div", {
            className: "mb-4",
            children: D("input", {
              type: "password",
              className: "form-control form-control-lg",
              placeholder: "Contrase\xF1a",
              value: o,
              onChange: (m) => l(m.target.value),
            }),
          }),
          D("button", {
            className: "btn btn-primary btn-lg w-100",
            onClick: () => {
              if (!n || !o) {
                c("Por favor, completa todos los campos.");
                return;
              }
              const m = localStorage.getItem("lastPath") || "/";
              e(n), t(m, { replace: !0 });
            },
            children: "Login",
          }),
        ],
      }),
    });
  },
  d0 = ({ children: e }) => {
    const { logged: t } = V.exports.useContext(Qi),
      { pathname: n, search: r } = er(),
      o = n + r;
    return localStorage.setItem("lastPath", o), t ? e : D(zl, { to: "/login" });
  },
  p0 = ({ children: e }) => {
    const { logged: t } = V.exports.useContext(Qi);
    return t ? D(zl, { to: "/marvel" }) : e;
  };
const h0 = () => {
  const { user: e, logout: t } = V.exports.useContext(Qi),
    n = Ur(),
    r = () => {
      t(), n("/login", { replace: !0 });
    };
  return D("nav", {
    className: "navbar navbar-expand-md navbar-dark bg-dark shadow-sm",
    children: me("div", {
      className: "container",
      children: [
        D(Lu, { className: "navbar-brand", to: "/", children: "Heroes" }),
        D("button", {
          className: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarNav",
          "aria-controls": "navbarNav",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: D("span", { className: "navbar-toggler-icon" }),
        }),
        me("div", {
          className: "collapse navbar-collapse",
          id: "navbarNav",
          children: [
            me("ul", {
              className: "navbar-nav",
              children: [
                D(js, {
                  className: ({ isActive: o }) =>
                    `nav-item nav-link ${o ? "active" : ""}`,
                  to: "/marvel",
                  children: "Marvel",
                }),
                D(js, {
                  className: ({ isActive: o }) =>
                    `nav-item nav-link ${o ? "active" : ""}`,
                  to: "/dc",
                  children: "DC",
                }),
                D(js, {
                  className: ({ isActive: o }) =>
                    `nav-item nav-link ${o ? "active" : ""}`,
                  to: "/search",
                  children: "Search",
                }),
              ],
            }),
            me("div", {
              className: "navbar-nav ms-auto",
              children: [
                D("span", {
                  className: "nav-item nav-link text-light",
                  children: e == null ? void 0 : e.name,
                }),
                D("button", {
                  className: "nav-item nav-link btn btn-outline-light ms-2",
                  onClick: r,
                  children: "Logout",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
const m0 = ({ alter_ego: e, characters: t }) =>
    e === t ? null : D("p", { className: "card-text", children: t }),
  Uh = ({
    id: e,
    superhero: t,
    alter_ego: n,
    first_appearance: r,
    characters: o,
  }) => {
    const l = `/heroes/${e}.jpg`;
    return D("div", {
      className: "col",
      children: me("div", {
        className: "card shadow-sm border-light h-100",
        children: [
          D("img", { src: l, className: "card-img-top", alt: t }),
          me("div", {
            className: "card-body d-flex flex-column",
            children: [
              D("h5", { className: "card-title", children: t }),
              D("p", { className: "card-text", children: n }),
              D(m0, { characters: o, alter_ego: n }),
              D("p", {
                className: "card-text mt-auto",
                children: D("small", { className: "text-muted", children: r }),
              }),
              D(Lu, {
                to: `/hero/${e}`,
                className: "btn btn-primary mt-3",
                children: "More...",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Au = [
    {
      id: "dc-batman",
      superhero: "Batman",
      publisher: "DC Comics",
      alter_ego: "Bruce Wayne",
      first_appearance: "Detective Comics #27",
      characters: "Bruce Wayne",
    },
    {
      id: "dc-superman",
      superhero: "Superman",
      publisher: "DC Comics",
      alter_ego: "Kal-El",
      first_appearance: "Action Comics #1",
      characters: "Kal-El",
    },
    {
      id: "dc-flash",
      superhero: "Flash",
      publisher: "DC Comics",
      alter_ego: "Jay Garrick",
      first_appearance: "Flash Comics #1",
      characters: "Jay Garrick, Barry Allen, Wally West, Bart Allen",
    },
    {
      id: "dc-green",
      superhero: "Green Lantern",
      publisher: "DC Comics",
      alter_ego: "Alan Scott",
      first_appearance: "All-American Comics #16",
      characters:
        "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz",
    },
    {
      id: "dc-arrow",
      superhero: "Green Arrow",
      publisher: "DC Comics",
      alter_ego: "Oliver Queen",
      first_appearance: "More Fun Comics #73",
      characters: "Oliver Queen",
    },
    {
      id: "dc-wonder",
      superhero: "Wonder Woman",
      publisher: "DC Comics",
      alter_ego: "Princess Diana",
      first_appearance: "All Star Comics #8",
      characters: "Princess Diana",
    },
    {
      id: "dc-martian",
      superhero: "Martian Manhunter",
      publisher: "DC Comics",
      alter_ego: "J'onn J'onzz",
      first_appearance: "Detective Comics #225",
      characters: "Martian Manhunter",
    },
    {
      id: "dc-robin",
      superhero: "Robin/Nightwing",
      publisher: "DC Comics",
      alter_ego: "Dick Grayson",
      first_appearance: "Detective Comics #38",
      characters: "Dick Grayson",
    },
    {
      id: "dc-blue",
      superhero: "Blue Beetle",
      publisher: "DC Comics",
      alter_ego: "Dan Garret",
      first_appearance: "Mystery Men Comics #1",
      characters: "Dan Garret, Ted Kord, Jaime Reyes",
    },
    {
      id: "dc-black",
      superhero: "Black Canary",
      publisher: "DC Comics",
      alter_ego: "Dinah Drake",
      first_appearance: "Flash Comics #86",
      characters: "Dinah Drake, Dinah Lance",
    },
    {
      id: "marvel-spider",
      superhero: "Spider Man",
      publisher: "Marvel Comics",
      alter_ego: "Peter Parker",
      first_appearance: "Amazing Fantasy #15",
      characters: "Peter Parker",
    },
    {
      id: "marvel-captain",
      superhero: "Captain America",
      publisher: "Marvel Comics",
      alter_ego: "Steve Rogers",
      first_appearance: "Captain America Comics #1",
      characters: "Steve Rogers",
    },
    {
      id: "marvel-iron",
      superhero: "Iron Man",
      publisher: "Marvel Comics",
      alter_ego: "Tony Stark",
      first_appearance: "Tales of Suspense #39",
      characters: "Tony Stark",
    },
    {
      id: "marvel-thor",
      superhero: "Thor",
      publisher: "Marvel Comics",
      alter_ego: "Thor Odinson",
      first_appearance: "Journey into Myster #83",
      characters: "Thor Odinson",
    },
    {
      id: "marvel-hulk",
      superhero: "Hulk",
      publisher: "Marvel Comics",
      alter_ego: "Bruce Banner",
      first_appearance: "The Incredible Hulk #1",
      characters: "Bruce Banner",
    },
    {
      id: "marvel-wolverine",
      superhero: "Wolverine",
      publisher: "Marvel Comics",
      alter_ego: "James Howlett",
      first_appearance: "The Incredible Hulk #180",
      characters: "James Howlett",
    },
    {
      id: "marvel-daredevil",
      superhero: "Daredevil",
      publisher: "Marvel Comics",
      alter_ego: "Matthew Michael Murdock",
      first_appearance: "Daredevil #1",
      characters: "Matthew Michael Murdock",
    },
    {
      id: "marvel-hawkeye",
      superhero: "Hawkeye",
      publisher: "Marvel Comics",
      alter_ego: "Clinton Francis Barton",
      first_appearance: "Tales of Suspense #57",
      characters: "Clinton Francis Barton",
    },
    {
      id: "marvel-cyclops",
      superhero: "Cyclops",
      publisher: "Marvel Comics",
      alter_ego: "Scott Summers",
      first_appearance: "X-Men #1",
      characters: "Scott Summers",
    },
    {
      id: "marvel-silver",
      superhero: "Silver Surfer",
      publisher: "Marvel Comics",
      alter_ego: "Norrin Radd",
      first_appearance: "The Fantastic Four #48",
      characters: "Norrin Radd",
    },
  ],
  g0 = (e) => Au.find((t) => t.id === e),
  v0 = (e = "") => (
    (e = e.toLocaleLowerCase().trim()),
    e.length === 0
      ? []
      : Au.filter((t) => t.superhero.toLocaleLowerCase().includes(e))
  ),
  y0 = (e) => {
    if (!["DC Comics", "Marvel Comics"].includes(e))
      throw new Error(`${e} is not a valid publisher`);
    return Au.filter((n) => n.publisher === e);
  },
  wl = ({ publisher: e }) => {
    const t = V.exports.useMemo(() => y0(e), [e]);
    return D("div", {
      className: "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4",
      children: t.map((n) => D(Uh, ke({}, n), n.id)),
    });
  },
  _0 = () =>
    me("div", {
      className: "container my-4",
      children: [
        D("h1", { className: "display-4 mb-4", children: "DC Comics" }),
        D("hr", {}),
        D(wl, { publisher: "DC Comics" }),
      ],
    });
const w0 = () => {
    const { id: e } = Qy(),
      t = Ur(),
      n = V.exports.useMemo(() => g0(e), [e]),
      r = () => {
        t(-1);
      };
    return n
      ? D("div", {
          className: "container mt-5",
          children: me("div", {
            className: "hero-page",
            children: [
              D("div", {
                className: "hero-image",
                children: D("img", {
                  src: `../../../assets/${e}.jpg`,
                  alt: n.superhero,
                  className: "img-fluid",
                }),
              }),
              me("div", {
                className: "hero-details",
                children: [
                  D("h3", { className: "hero-title", children: n.superhero }),
                  me("ul", {
                    className: "list-group list-group-flush",
                    children: [
                      me("li", {
                        className: "list-group-item",
                        children: [
                          D("strong", { children: "Alter ego:" }),
                          " ",
                          n.alter_ego,
                        ],
                      }),
                      me("li", {
                        className: "list-group-item",
                        children: [
                          D("strong", { children: "Publisher:" }),
                          " ",
                          n.publisher,
                        ],
                      }),
                      me("li", {
                        className: "list-group-item",
                        children: [
                          D("strong", { children: "First appearance:" }),
                          " ",
                          n.first_appearance,
                        ],
                      }),
                    ],
                  }),
                  D("h5", { className: "mt-3", children: "Characters" }),
                  D("p", { children: n.characters }),
                  D("button", {
                    className: "btn btn-outline-primary btn-lg mt-4",
                    onClick: r,
                    children: "Back",
                  }),
                ],
              }),
            ],
          }),
        })
      : D(zl, { to: "/marvel" });
  },
  S0 = () =>
    me("div", {
      className: "container my-4",
      children: [
        D("h1", { className: "display-4 mb-4", children: "Marvel Comics" }),
        D("hr", {}),
        D(wl, { publisher: "Marvel Comics" }),
      ],
    });
var Wh = {},
  k0 = (e) =>
    encodeURIComponent(e).replace(
      /[!'()*]/g,
      (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  Vh = "%[a-f0-9]{2}",
  xd = new RegExp(Vh, "gi"),
  Nd = new RegExp("(" + Vh + ")+", "gi");
function Ma(e, t) {
  try {
    return decodeURIComponent(e.join(""));
  } catch {}
  if (e.length === 1) return e;
  t = t || 1;
  var n = e.slice(0, t),
    r = e.slice(t);
  return Array.prototype.concat.call([], Ma(n), Ma(r));
}
function C0(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(xd), n = 1; n < t.length; n++)
      (e = Ma(t, n).join("")), (t = e.match(xd));
    return e;
  }
}
function E0(e) {
  for (
    var t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" },
      n = Nd.exec(e);
    n;

  ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      var r = C0(n[0]);
      r !== n[0] && (t[n[0]] = r);
    }
    n = Nd.exec(e);
  }
  t["%C2"] = "\uFFFD";
  for (var o = Object.keys(t), l = 0; l < o.length; l++) {
    var a = o[l];
    e = e.replace(new RegExp(a, "g"), t[a]);
  }
  return e;
}
var x0 = function (e) {
    if (typeof e != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
      );
    try {
      return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
    } catch {
      return E0(e);
    }
  },
  N0 = (e, t) => {
    if (!(typeof e == "string" && typeof t == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (t === "") return [e];
    const n = e.indexOf(t);
    return n === -1 ? [e] : [e.slice(0, n), e.slice(n + t.length)];
  },
  T0 = function (e, t) {
    for (
      var n = {}, r = Object.keys(e), o = Array.isArray(t), l = 0;
      l < r.length;
      l++
    ) {
      var a = r[l],
        c = e[a];
      (o ? t.indexOf(a) !== -1 : t(a, c, e)) && (n[a] = c);
    }
    return n;
  };
(function (e) {
  const t = k0,
    n = x0,
    r = N0,
    o = T0,
    l = (f) => f == null,
    a = Symbol("encodeFragmentIdentifier");
  function c(f) {
    switch (f.arrayFormat) {
      case "index":
        return (h) => (y, k) => {
          const x = y.length;
          return k === void 0 ||
            (f.skipNull && k === null) ||
            (f.skipEmptyString && k === "")
            ? y
            : k === null
            ? [...y, [S(h, f), "[", x, "]"].join("")]
            : [...y, [S(h, f), "[", S(x, f), "]=", S(k, f)].join("")];
        };
      case "bracket":
        return (h) => (y, k) =>
          k === void 0 ||
          (f.skipNull && k === null) ||
          (f.skipEmptyString && k === "")
            ? y
            : k === null
            ? [...y, [S(h, f), "[]"].join("")]
            : [...y, [S(h, f), "[]=", S(k, f)].join("")];
      case "colon-list-separator":
        return (h) => (y, k) =>
          k === void 0 ||
          (f.skipNull && k === null) ||
          (f.skipEmptyString && k === "")
            ? y
            : k === null
            ? [...y, [S(h, f), ":list="].join("")]
            : [...y, [S(h, f), ":list=", S(k, f)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const h = f.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (y) => (k, x) =>
          x === void 0 ||
          (f.skipNull && x === null) ||
          (f.skipEmptyString && x === "")
            ? k
            : ((x = x === null ? "" : x),
              k.length === 0
                ? [[S(y, f), h, S(x, f)].join("")]
                : [[k, S(x, f)].join(f.arrayFormatSeparator)]);
      }
      default:
        return (h) => (y, k) =>
          k === void 0 ||
          (f.skipNull && k === null) ||
          (f.skipEmptyString && k === "")
            ? y
            : k === null
            ? [...y, S(h, f)]
            : [...y, [S(h, f), "=", S(k, f)].join("")];
    }
  }
  function p(f) {
    let h;
    switch (f.arrayFormat) {
      case "index":
        return (y, k, x) => {
          if (
            ((h = /\[(\d*)\]$/.exec(y)), (y = y.replace(/\[\d*\]$/, "")), !h)
          ) {
            x[y] = k;
            return;
          }
          x[y] === void 0 && (x[y] = {}), (x[y][h[1]] = k);
        };
      case "bracket":
        return (y, k, x) => {
          if (((h = /(\[\])$/.exec(y)), (y = y.replace(/\[\]$/, "")), !h)) {
            x[y] = k;
            return;
          }
          if (x[y] === void 0) {
            x[y] = [k];
            return;
          }
          x[y] = [].concat(x[y], k);
        };
      case "colon-list-separator":
        return (y, k, x) => {
          if (((h = /(:list)$/.exec(y)), (y = y.replace(/:list$/, "")), !h)) {
            x[y] = k;
            return;
          }
          if (x[y] === void 0) {
            x[y] = [k];
            return;
          }
          x[y] = [].concat(x[y], k);
        };
      case "comma":
      case "separator":
        return (y, k, x) => {
          const P = typeof k == "string" && k.includes(f.arrayFormatSeparator),
            N =
              typeof k == "string" &&
              !P &&
              T(k, f).includes(f.arrayFormatSeparator);
          k = N ? T(k, f) : k;
          const B =
            P || N
              ? k.split(f.arrayFormatSeparator).map((U) => T(U, f))
              : k === null
              ? k
              : T(k, f);
          x[y] = B;
        };
      case "bracket-separator":
        return (y, k, x) => {
          const P = /(\[\])$/.test(y);
          if (((y = y.replace(/\[\]$/, "")), !P)) {
            x[y] = k && T(k, f);
            return;
          }
          const N =
            k === null
              ? []
              : k.split(f.arrayFormatSeparator).map((B) => T(B, f));
          if (x[y] === void 0) {
            x[y] = N;
            return;
          }
          x[y] = [].concat(x[y], N);
        };
      default:
        return (y, k, x) => {
          if (x[y] === void 0) {
            x[y] = k;
            return;
          }
          x[y] = [].concat(x[y], k);
        };
    }
  }
  function m(f) {
    if (typeof f != "string" || f.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function S(f, h) {
    return h.encode ? (h.strict ? t(f) : encodeURIComponent(f)) : f;
  }
  function T(f, h) {
    return h.decode ? n(f) : f;
  }
  function w(f) {
    return Array.isArray(f)
      ? f.sort()
      : typeof f == "object"
      ? w(Object.keys(f))
          .sort((h, y) => Number(h) - Number(y))
          .map((h) => f[h])
      : f;
  }
  function L(f) {
    const h = f.indexOf("#");
    return h !== -1 && (f = f.slice(0, h)), f;
  }
  function A(f) {
    let h = "";
    const y = f.indexOf("#");
    return y !== -1 && (h = f.slice(y)), h;
  }
  function z(f) {
    f = L(f);
    const h = f.indexOf("?");
    return h === -1 ? "" : f.slice(h + 1);
  }
  function K(f, h) {
    return (
      h.parseNumbers &&
      !Number.isNaN(Number(f)) &&
      typeof f == "string" &&
      f.trim() !== ""
        ? (f = Number(f))
        : h.parseBooleans &&
          f !== null &&
          (f.toLowerCase() === "true" || f.toLowerCase() === "false") &&
          (f = f.toLowerCase() === "true"),
      f
    );
  }
  function g(f, h) {
    (h = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      h
    )),
      m(h.arrayFormatSeparator);
    const y = p(h),
      k = Object.create(null);
    if (typeof f != "string" || ((f = f.trim().replace(/^[?#&]/, "")), !f))
      return k;
    for (const x of f.split("&")) {
      if (x === "") continue;
      let [P, N] = r(h.decode ? x.replace(/\+/g, " ") : x, "=");
      (N =
        N === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(h.arrayFormat)
          ? N
          : T(N, h)),
        y(T(P, h), N, k);
    }
    for (const x of Object.keys(k)) {
      const P = k[x];
      if (typeof P == "object" && P !== null)
        for (const N of Object.keys(P)) P[N] = K(P[N], h);
      else k[x] = K(P, h);
    }
    return h.sort === !1
      ? k
      : (h.sort === !0
          ? Object.keys(k).sort()
          : Object.keys(k).sort(h.sort)
        ).reduce((x, P) => {
          const N = k[P];
          return (
            Boolean(N) && typeof N == "object" && !Array.isArray(N)
              ? (x[P] = w(N))
              : (x[P] = N),
            x
          );
        }, Object.create(null));
  }
  (e.extract = z),
    (e.parse = g),
    (e.stringify = (f, h) => {
      if (!f) return "";
      (h = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        h
      )),
        m(h.arrayFormatSeparator);
      const y = (N) =>
          (h.skipNull && l(f[N])) || (h.skipEmptyString && f[N] === ""),
        k = c(h),
        x = {};
      for (const N of Object.keys(f)) y(N) || (x[N] = f[N]);
      const P = Object.keys(x);
      return (
        h.sort !== !1 && P.sort(h.sort),
        P.map((N) => {
          const B = f[N];
          return B === void 0
            ? ""
            : B === null
            ? S(N, h)
            : Array.isArray(B)
            ? B.length === 0 && h.arrayFormat === "bracket-separator"
              ? S(N, h) + "[]"
              : B.reduce(k(N), []).join("&")
            : S(N, h) + "=" + S(B, h);
        })
          .filter((N) => N.length > 0)
          .join("&")
      );
    }),
    (e.parseUrl = (f, h) => {
      h = Object.assign({ decode: !0 }, h);
      const [y, k] = r(f, "#");
      return Object.assign(
        { url: y.split("?")[0] || "", query: g(z(f), h) },
        h && h.parseFragmentIdentifier && k
          ? { fragmentIdentifier: T(k, h) }
          : {}
      );
    }),
    (e.stringifyUrl = (f, h) => {
      h = Object.assign({ encode: !0, strict: !0, [a]: !0 }, h);
      const y = L(f.url).split("?")[0] || "",
        k = e.extract(f.url),
        x = e.parse(k, { sort: !1 }),
        P = Object.assign(x, f.query);
      let N = e.stringify(P, h);
      N && (N = `?${N}`);
      let B = A(f.url);
      return (
        f.fragmentIdentifier &&
          (B = `#${h[a] ? S(f.fragmentIdentifier, h) : f.fragmentIdentifier}`),
        `${y}${N}${B}`
      );
    }),
    (e.pick = (f, h, y) => {
      y = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, y);
      const { url: k, query: x, fragmentIdentifier: P } = e.parseUrl(f, y);
      return e.stringifyUrl(
        { url: k, query: o(x, h), fragmentIdentifier: P },
        y
      );
    }),
    (e.exclude = (f, h, y) => {
      const k = Array.isArray(h) ? (x) => !h.includes(x) : (x, P) => !h(x, P);
      return e.pick(f, k, y);
    });
})(Wh);
const P0 = (e = {}) => {
  const [t, n] = V.exports.useState(e),
    r = ({ target: l }) => {
      const { name: a, value: c } = l;
      n(un(ke({}, t), { [a]: c }));
    },
    o = () => {
      n(e);
    };
  return un(ke({}, t), { formState: t, onInputChange: r, onResetForm: o });
};
const O0 = () => {
    const e = Ur(),
      t = er(),
      { q: n = "" } = Wh.parse(t.search),
      r = v0(n),
      o = n.length === 0,
      l = n.length > 0 && r.length === 0,
      { searchText: a, onInputChange: c } = P0({ searchText: n });
    return me("div", {
      className: "container my-4",
      children: [
        D("h1", { className: "display-4 mb-4", children: "Search Heroes" }),
        D("hr", {}),
        D("div", {
          className: "row mb-4",
          children: D("div", {
            className: "col-md-6 mx-auto",
            children: D("form", {
              onSubmit: (m) => {
                m.preventDefault(), !(a.trim().length <= 1) && e(`?q=${a}`);
              },
              className: "search-form",
              children: me("div", {
                className: "input-group",
                children: [
                  D("input", {
                    type: "text",
                    placeholder: "Search for a hero...",
                    className: "form-control",
                    name: "searchText",
                    autoComplete: "off",
                    value: a,
                    onChange: c,
                  }),
                  D("button", {
                    className: "btn btn-primary",
                    type: "submit",
                    children: "Search",
                  }),
                ],
              }),
            }),
          }),
        }),
        D("div", {
          className: "row",
          children: me("div", {
            className: "col-12",
            children: [
              D("div", {
                className: `alert alert-primary animate__animated animate__fadeIn ${
                  o ? "" : "d-none"
                }`,
                children: "Search for a hero to see results.",
              }),
              me("div", {
                className: `alert alert-danger animate__animated animate__fadeIn ${
                  l ? "" : "d-none"
                }`,
                children: ["No hero found with ", D("b", { children: n })],
              }),
            ],
          }),
        }),
        D("div", {
          className: "row",
          children: r.map((m) =>
            D(
              "div",
              { className: "col-md-4 mb-4", children: D(Uh, ke({}, m)) },
              m.id
            )
          ),
        }),
      ],
    });
  },
  L0 = () =>
    me("div", {
      className: "container my-4",
      children: [
        D("h1", { className: "display-4 mb-4", children: "Heroes" }),
        D("hr", {}),
        me("section", {
          className: "mb-4",
          children: [
            D("h2", { className: "display-6", children: "Marvel Comics" }),
            D(wl, { publisher: "Marvel Comics" }),
          ],
        }),
        me("section", {
          children: [
            D("h2", { className: "display-6", children: "DC Comics" }),
            D(wl, { publisher: "DC Comics" }),
          ],
        }),
      ],
    }),
  A0 = () =>
    me(Hh, {
      children: [
        D(h0, {}),
        D("div", {
          className: "container",
          children: me(Aa, {
            children: [
              D(Bt, { path: "/", element: D(L0, {}) }),
              D(Bt, { path: "marvel", element: D(S0, {}) }),
              D(Bt, { path: "dc", element: D(_0, {}) }),
              D(Bt, { path: "search", element: D(O0, {}) }),
              D(Bt, { path: "hero/:id", element: D(w0, {}) }),
              D(Bt, { path: "/", element: D(zl, { to: "/marvel" }) }),
            ],
          }),
        }),
      ],
    }),
  D0 = () =>
    D(Hh, {
      children: me(Aa, {
        children: [
          D(Bt, {
            path: "login/*",
            element: D(p0, {
              children: D(Aa, {
                children: D(Bt, { path: "/*", element: D(f0, {}) }),
              }),
            }),
          }),
          D(Bt, { path: "/*", element: D(d0, { children: D(A0, {}) }) }),
        ],
      }),
    }),
  M0 = () => D(c0, { children: D(D0, {}) });
Fs.createRoot(document.getElementById("root")).render(
  D(Sg.StrictMode, { children: D(qy, { children: D(M0, {}) }) })
);
