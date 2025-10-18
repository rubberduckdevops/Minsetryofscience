import ee from "react";
const oe = {
  // Primary - Amber/Yellow
  primary: {
    100: "#FFF8E1",
    200: "#FFECB3",
    300: "#FFE082",
    400: "#FFD54F",
    500: "#FFC107",
    // Main yellow
    600: "#FFB300",
    700: "#FFA000",
    800: "#FF8F00",
    900: "#FF6F00"
  },
  // Background - Military grays and blacks
  background: {
    darkest: "#0A0A0A",
    dark: "#1A1A1A",
    medium: "#2A2A2A",
    light: "#3A3A3A"
  },
  // Surface colors
  surface: {
    primary: "#1E1E1E",
    secondary: "#2D2D2D",
    tertiary: "#3C3C3C"
  },
  // Status colors
  status: {
    success: "#4CAF50",
    warning: "#FFC107",
    danger: "#F44336",
    info: "#2196F3"
  },
  // Text
  text: {
    primary: "#FFFFFF",
    secondary: "#B0B0B0",
    disabled: "#666666",
    accent: "#FFC107"
  },
  // Borders and dividers
  border: {
    primary: "#FFC107",
    secondary: "#3A3A3A",
    warning: "#FF6F00"
  }
}, te = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px"
}, le = {
  fontFamily: {
    primary: '"Share Tech Mono", "Courier New", monospace',
    secondary: '"Orbitron", "Arial", sans-serif',
    mono: '"Courier New", monospace'
  },
  fontSize: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "20px",
    xxl: "24px",
    xxxl: "32px"
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700
  }
}, ce = {
  shadow: {
    small: "0 2px 4px rgba(0, 0, 0, 0.5)",
    medium: "0 4px 8px rgba(0, 0, 0, 0.5)",
    large: "0 8px 16px rgba(0, 0, 0, 0.5)",
    glow: "0 0 10px rgba(255, 193, 7, 0.5)"
  },
  borderRadius: {
    none: "0",
    small: "2px",
    medium: "4px"
  }
}, ie = {
  duration: {
    fast: "150ms",
    normal: "250ms",
    slow: "350ms"
  },
  easing: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out"
  }
};
var v = { exports: {} }, p = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y;
function re() {
  if (Y) return p;
  Y = 1;
  var a = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function o(c, n, t) {
    var f = null;
    if (t !== void 0 && (f = "" + t), n.key !== void 0 && (f = "" + n.key), "key" in n) {
      t = {};
      for (var d in n)
        d !== "key" && (t[d] = n[d]);
    } else t = n;
    return n = t.ref, {
      $$typeof: a,
      type: c,
      key: f,
      ref: n !== void 0 ? n : null,
      props: t
    };
  }
  return p.Fragment = l, p.jsx = o, p.jsxs = o, p;
}
var x = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function se() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case j:
          return "Fragment";
        case U:
          return "Profiler";
        case M:
          return "StrictMode";
        case V:
          return "Suspense";
        case G:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case z:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case N:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function o(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var i = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), l(e);
      }
    }
    function c(e) {
      if (e === j) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = R.A;
      return e === null ? null : e.getOwner();
    }
    function t() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (k.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function i() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function B() {
      var e = a(this.type);
      return S[e] || (S[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, i, u, E, T) {
      var m = i.ref;
      return e = {
        $$typeof: w,
        type: e,
        key: r,
        props: i,
        _owner: u
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: B
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, r, i, u, E, T) {
      var m = r.children;
      if (m !== void 0)
        if (u)
          if (Q(m)) {
            for (u = 0; u < m.length; u++)
              y(m[u]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(m);
      if (k.call(r, "key")) {
        m = a(e);
        var _ = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        u = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", $[m + u] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          m,
          _,
          m
        ), $[m + u] = !0);
      }
      if (m = null, i !== void 0 && (o(i), m = "" + i), f(r) && (o(r.key), m = "" + r.key), "key" in r) {
        i = {};
        for (var A in r)
          A !== "key" && (i[A] = r[A]);
      } else i = r;
      return m && d(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        m,
        i,
        n(),
        E,
        T
      );
    }
    function y(e) {
      F(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === N && (e._payload.status === "fulfilled" ? F(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function F(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    var b = ee, w = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), z = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), R = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, Q = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var O, S = {}, P = b.react_stack_bottom_frame.bind(
      b,
      t
    )(), C = g(c(t)), $ = {};
    x.Fragment = j, x.jsx = function(e, r, i) {
      var u = 1e4 > R.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        i,
        !1,
        u ? Error("react-stack-top-frame") : P,
        u ? g(c(e)) : C
      );
    }, x.jsxs = function(e, r, i) {
      var u = 1e4 > R.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        i,
        !0,
        u ? Error("react-stack-top-frame") : P,
        u ? g(c(e)) : C
      );
    };
  })()), x;
}
var I;
function ae() {
  return I || (I = 1, process.env.NODE_ENV === "production" ? v.exports = re() : v.exports = se()), v.exports;
}
var s = ae();
const ue = ({
  variant: a = "primary",
  size: l = "medium",
  fullWidth: o = !1,
  className: c = "",
  children: n,
  disabled: t,
  ...f
}) => {
  const d = [
    "mos-button",
    `mos-button--${a}`,
    `mos-button--${l}`,
    o ? "mos-button--full-width" : "",
    t ? "mos-button--disabled" : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("button", { className: d, disabled: t, ...f, children: [
    /* @__PURE__ */ s.jsx("span", { className: "mos-button__corner mos-button__corner--tl" }),
    /* @__PURE__ */ s.jsx("span", { className: "mos-button__corner mos-button__corner--tr" }),
    /* @__PURE__ */ s.jsx("span", { className: "mos-button__corner mos-button__corner--bl" }),
    /* @__PURE__ */ s.jsx("span", { className: "mos-button__corner mos-button__corner--br" }),
    /* @__PURE__ */ s.jsx("span", { className: "mos-button__content", children: n })
  ] });
}, me = ({
  title: a,
  subtitle: l,
  className: o = "",
  children: c,
  variant: n = "default",
  headerRight: t
}) => {
  const f = ["mos-panel", `mos-panel--${n}`, o].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: f, children: [
    /* @__PURE__ */ s.jsx("div", { className: "mos-panel__corner mos-panel__corner--tl" }),
    /* @__PURE__ */ s.jsx("div", { className: "mos-panel__corner mos-panel__corner--tr" }),
    /* @__PURE__ */ s.jsx("div", { className: "mos-panel__corner mos-panel__corner--bl" }),
    /* @__PURE__ */ s.jsx("div", { className: "mos-panel__corner mos-panel__corner--br" }),
    (a || t) && /* @__PURE__ */ s.jsxs("div", { className: "mos-panel__header", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "mos-panel__header-left", children: [
        a && /* @__PURE__ */ s.jsx("h2", { className: "mos-panel__title", children: a }),
        l && /* @__PURE__ */ s.jsx("p", { className: "mos-panel__subtitle", children: l })
      ] }),
      t && /* @__PURE__ */ s.jsx("div", { className: "mos-panel__header-right", children: t })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "mos-panel__content", children: c })
  ] });
}, fe = ({
  className: a = "",
  children: l,
  onClick: o,
  hoverable: c = !1,
  glowOnHover: n = !1
}) => {
  const t = [
    "mos-card",
    c || o ? "mos-card--hoverable" : "",
    n ? "mos-card--glow" : "",
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: t, onClick: o, children: [
    /* @__PURE__ */ s.jsx("div", { className: "mos-card__corner mos-card__corner--tl" }),
    /* @__PURE__ */ s.jsx("div", { className: "mos-card__corner mos-card__corner--tr" }),
    /* @__PURE__ */ s.jsx("div", { className: "mos-card__corner mos-card__corner--bl" }),
    /* @__PURE__ */ s.jsx("div", { className: "mos-card__corner mos-card__corner--br" }),
    /* @__PURE__ */ s.jsx("div", { className: "mos-card__content", children: l })
  ] });
}, de = ({
  level: a = 1,
  children: l,
  className: o = "",
  stencil: c = !1,
  glow: n = !0
}) => {
  const t = `h${a}`, f = [
    "mos-heading",
    `mos-heading--${a}`,
    c ? "mos-heading--stencil" : "",
    n ? "mos-heading--glow" : "",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(t, { className: f, children: l });
}, _e = ({
  children: a,
  className: l = "",
  variant: o = "primary",
  size: c = "md",
  uppercase: n = !1,
  bold: t = !1
}) => {
  const f = [
    "mos-text",
    `mos-text--${o}`,
    `mos-text--${c}`,
    n ? "mos-text--uppercase" : "",
    t ? "mos-text--bold" : "",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx("span", { className: f, children: a });
}, pe = ({
  children: a,
  className: l = "",
  htmlFor: o
}) => /* @__PURE__ */ s.jsx("label", { htmlFor: o, className: `mos-label ${l}`, children: a }), xe = ({
  children: a,
  className: l = "",
  inline: o = !0
}) => {
  const c = [
    "mos-code",
    o ? "mos-code--inline" : "mos-code--block",
    l
  ].filter(Boolean).join(" ");
  return o ? /* @__PURE__ */ s.jsx("code", { className: c, children: a }) : /* @__PURE__ */ s.jsx("pre", { className: c, children: /* @__PURE__ */ s.jsx("code", { children: a }) });
}, be = ({
  className: a = "",
  height: l = 8,
  animated: o = !1,
  variant: c = "caution",
  speed: n = "normal"
}) => {
  const t = [
    "mos-warning-stripe",
    `mos-warning-stripe--${c}`,
    o ? "mos-warning-stripe--animated" : "",
    typeof n == "string" ? `mos-warning-stripe--${n}` : "",
    a
  ].filter(Boolean).join(" "), f = {
    height: `${l}px`,
    ...typeof n == "number" && o ? { animationDuration: `${n}s` } : {}
  };
  return /* @__PURE__ */ s.jsx("div", { className: t, style: f });
}, Ee = ({
  className: a = "",
  speed: l = "normal",
  opacity: o = 0.3,
  enabled: c = !0
}) => {
  if (!c) return null;
  const n = [
    "mos-scanline",
    `mos-scanline--${l}`,
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx("div", { className: n, style: { opacity: o } });
};
export {
  ue as Button,
  fe as Card,
  xe as Code,
  de as Heading,
  pe as Label,
  me as Panel,
  Ee as ScanLine,
  _e as Text,
  be as WarningStripe,
  ie as animations,
  oe as colors,
  ce as effects,
  te as spacing,
  le as typography
};
