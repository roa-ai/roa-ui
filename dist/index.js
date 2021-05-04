'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var styled = require('styled-components');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var typography = {
    family: "-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    weight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    size: {
        h1: 40,
        h2: 36,
        h3: 32,
        h4: 28,
        h5: 24,
        h6: 20,
        s1: 16,
        s2: 14,
        b1: 16,
        b2: 14,
        link: 16,
        bt1: 14,
        bt2: 12,
        cp: 12,
        ol: 10,
    },
};
var color = {
    // solid
    primary: "#FFB200",
    secondary: "#0095F6",
    label: "#262626",
    background: "#fffffff",
    // basic
    black: "#000000",
    white: "#ffffff",
    red: "#DA1E28",
    // shade
    gray100: "#121619",
    gray90: "#21272a",
    gray80: "#343a3f",
    gray70: "#4d5358",
    gray60: "#697077",
    gray50: "#878d96",
    gray40: "#a2a9b0",
    gray30: "#c1c7cd",
    gray20: "#dde1e6",
    gray10: "#f2f4f8",
};
var spacing = {
    s2: "2px",
    s4: "4px",
    s8: "8px",
    s16: "16px",
    s32: "32px",
};
var shape = {
    r4: "4px",
    r8: "8px",
    r16: "16px",
};

var fontSize = {
    h1: typography.size.h1,
    h2: typography.size.h2,
    h3: typography.size.h3,
    h4: typography.size.h4,
    h5: typography.size.h5,
    h6: typography.size.h6,
    s1: typography.size.s1,
    s2: typography.size.s2,
    b1: typography.size.b1,
    b2: typography.size.b2,
    link: typography.size.link,
    bt1: typography.size.bt1,
    bt2: typography.size.bt2,
    cp: typography.size.cp,
    ol: typography.size.ol,
};
var fontWeight = {
    h1: typography.weight.semibold,
    h2: typography.weight.semibold,
    h3: typography.weight.semibold,
    h4: typography.weight.semibold,
    h5: typography.weight.semibold,
    h6: typography.weight.semibold,
    s1: typography.weight.regular,
    s2: typography.weight.medium,
    b1: typography.weight.regular,
    b2: typography.weight.regular,
    link: typography.weight.regular,
    bt1: typography.weight.bold,
    bt2: typography.weight.bold,
    cp: typography.weight.medium,
    ol: typography.weight.regular,
};
/** `Typograph` 컴포넌트는 모든 텍스트 요소를 다룹니다. */
var Typograph = function (_a) {
    var variant = _a.variant, component = _a.component, children = _a.children;
    return (jsxRuntime.jsx(StyledTag, __assign({ as: component, fontSize: fontSize[variant], fontWeight: fontWeight[variant] }, { children: children }), void 0));
};
var StyledTag = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: ", ";\n"], ["\n  font-size: ", "px;\n  font-weight: ", ";\n"])), function (p) { return p.fontSize; }, function (p) { return p.fontWeight; });
var templateObject_1$1;

var height = {
    small: 32,
    medium: 40,
    large: 44,
};
/** `Button` 컴포넌트는 어떠한 작업을 실행할 때 사용됩니다. */
var Button = function (props) {
    return (jsxRuntime.jsx(StyledButton, __assign({ variant: props.variant, color: props.color, height: height[props.size], disabled: props.disabled, onClick: props.onClick }, { children: props.children }), void 0));
};
Button.defaultProps = {
    variant: "text",
    color: "default",
    size: "medium",
    disabled: false,
};
// prettier-ignore
var StyledButton = styled__default['default'].button(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  // common\n  border-radius: ", ";\n  border: 1px solid transparent;\n  padding: 0 ", ";\n  height: ", "px;\n  font-size: ", ";\n  font-weight: ", ";\n  :disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n\n  // default\n  ", "\n\n  // primary\n  ", "\n\n  // secondary\n  ", "\n"], ["\n  // common\n  border-radius: ", ";\n  border: 1px solid transparent;\n  padding: 0 ", ";\n  height: ", "px;\n  font-size: ", ";\n  font-weight: ", ";\n  :disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n\n  // default\n  ",
    "\n\n  // primary\n  ",
    "\n\n  // secondary\n  ",
    "\n"])), shape.r8, spacing.s16, function (p) { return p.height; }, typography.size.bt1, typography.weight.bold, function (p) { return p.color === "default" && styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: ", ";\n    ", "\n    ", "\n  "], ["\n    color: ", ";\n    ",
    "\n    ",
    "\n  "])), color.label, p.variant === "contained" && styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), color.gray10, color.label), p.variant === "outlined" && styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      border-color: ", ";\n      color: ", ";\n    "], ["\n      border-color: ", ";\n      color: ", ";\n    "])), color.label, color.label)); }, function (p) { return p.color === "primary" && styled.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    color: ", ";\n    ", "\n    ", "\n  "], ["\n    color: ", ";\n    ",
    "\n    ",
    "\n  "])), color.primary, p.variant === "contained" && styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), color.primary, color.white), p.variant === "outlined" && styled.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      border-color: ", ";\n      color: ", ";\n    "], ["\n      border-color: ", ";\n      color: ", ";\n    "])), color.primary, color.primary)); }, function (p) { return p.color === "secondary" && styled.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    color: ", ";\n    ", "\n    ", "\n  "], ["\n    color: ", ";\n    ",
    "\n    ",
    "\n  "])), color.secondary, p.variant === "contained" && styled.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), color.secondary, color.white), p.variant === "outlined" && styled.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      border-color: ", ";\n      color: ", ";\n    "], ["\n      border-color: ", ";\n      color: ", ";\n    "])), color.secondary, color.secondary)); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;

/** `MotionButton` 기존 Button 컴포넌트에 에니메이션을 부각시켰습니다. */
var MotionButton = function (_a) {
    var text = _a.text, onClick = _a.onClick;
    function handleClick() {
        onClick();
    }
    return (jsxRuntime.jsx(framerMotion.motion.button, __assign({ whileHover: { scale: 1.2 }, whileTap: { scale: 0.8 }, onClick: handleClick }, { children: text }), void 0));
};

exports.Button = Button;
exports.MotionButton = MotionButton;
exports.Typograph = Typograph;
//# sourceMappingURL=index.js.map
