"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTIONS\": function() { return /* binding */ ACTIONS; },\n/* harmony export */   \"addToCart\": function() { return /* binding */ addToCart; },\n/* harmony export */   \"decrease\": function() { return /* binding */ decrease; },\n/* harmony export */   \"deleteItem\": function() { return /* binding */ deleteItem; },\n/* harmony export */   \"increase\": function() { return /* binding */ increase; },\n/* harmony export */   \"updateItem\": function() { return /* binding */ updateItem; }\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar ACTIONS = {\n    NOTIFY: \"NOTIFY\",\n    AUTH: \"AUTH\",\n    ADD_CART: \"ADD_CART\",\n    ADD_MODAL: \"ADD_MODAL\",\n    ADD_ORDERS: \"ADD_ORDERS\",\n    ADD_USERS: \"ADD_USERS\",\n    ADD_CATEGORIES: \"ADD_CATEGORIES\"\n};\nvar addToCart = function(product, cart) {\n    if (product.inStock === 0) return {\n        type: \"NOTIFY\",\n        payload: {\n            error: \"This product is out of stock.\"\n        }\n    };\n    var check = cart.every(function(item) {\n        return item._id !== product._id;\n    });\n    if (!check) return {\n        type: \"NOTIFY\",\n        payload: {\n            error: \"El producto ya ha sido a\\xf1adido al carrito. Puede modificar la cantidad entrando a su carrito!\"\n        }\n    };\n    return {\n        type: \"ADD_CART\",\n        payload: _toConsumableArray(cart).concat([\n            _objectSpread({}, product, {\n                quantity: 1\n            })\n        ])\n    };\n};\nvar decrease = function(data, id) {\n    var newData = _toConsumableArray(data);\n    newData.forEach(function(item) {\n        if (item._id === id) item.quantity -= 1;\n    });\n    return {\n        type: \"ADD_CART\",\n        payload: newData\n    };\n};\nvar increase = function(data, id) {\n    var newData = _toConsumableArray(data);\n    newData.forEach(function(item) {\n        if (item._id === id) item.quantity += 1;\n    });\n    return {\n        type: \"ADD_CART\",\n        payload: newData\n    };\n};\nvar deleteItem = function(data, id, type) {\n    var newData = data.filter(function(item) {\n        return item._id !== id;\n    });\n    return {\n        type: type,\n        payload: newData\n    };\n};\nvar updateItem = function(data, id, post, type) {\n    var newData = data.map(function(item) {\n        return item._id === id ? post : item;\n    });\n    return {\n        type: type,\n        payload: newData\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R08sSUFBSSxHQUFHWixJQUFJO0tBQUMsQ0FBQztJQUNqRSxPQUFRO1FBQUVMLElBQUksRUFBSkEsSUFBSTtRQUFFQyxPQUFPLEVBQUVVLE9BQU87S0FBQyxDQUFDO0NBQ3JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL0FjdGlvbnMuanM/NWNlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUNUSU9OUyA9IHtcclxuICAgIE5PVElGWTogJ05PVElGWScsXHJcbiAgICBBVVRIOiAnQVVUSCcsXHJcbiAgICBBRERfQ0FSVDogJ0FERF9DQVJUJyxcclxuICAgIEFERF9NT0RBTDogJ0FERF9NT0RBTCcsXHJcbiAgICBBRERfT1JERVJTOiAnQUREX09SREVSUycsXHJcbiAgICBBRERfVVNFUlM6ICdBRERfVVNFUlMnLFxyXG4gICAgQUREX0NBVEVHT1JJRVM6ICdBRERfQ0FURUdPUklFUycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCwgY2FydCkgPT4ge1xyXG4gICAgaWYocHJvZHVjdC5pblN0b2NrID09PSAwKVxyXG4gICAgcmV0dXJuICh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdUaGlzIHByb2R1Y3QgaXMgb3V0IG9mIHN0b2NrLid9IH0pIFxyXG5cclxuICAgIGNvbnN0IGNoZWNrID0gY2FydC5ldmVyeShpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbS5faWQgIT09IHByb2R1Y3QuX2lkXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKCFjaGVjaykgcmV0dXJuICh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdFbCBwcm9kdWN0byB5YSBoYSBzaWRvIGHDsWFkaWRvIGFsIGNhcnJpdG8uIFB1ZWRlIG1vZGlmaWNhciBsYSBjYW50aWRhZCBlbnRyYW5kbyBhIHN1IGNhcnJpdG8hJ30gfSkgXHJcblxyXG4gICAgcmV0dXJuICh7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IFsuLi5jYXJ0LCB7Li4ucHJvZHVjdCwgcXVhbnRpdHk6IDF9XSB9KSBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3JlYXNlID0gKGRhdGEsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXHJcbiAgICBuZXdEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYoaXRlbS5faWQgPT09IGlkKSBpdGVtLnF1YW50aXR5IC09IDFcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuICh7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IG5ld0RhdGEgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlYXNlID0gKGRhdGEsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXHJcbiAgICBuZXdEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYoaXRlbS5faWQgPT09IGlkKSBpdGVtLnF1YW50aXR5ICs9IDFcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuICh7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IG5ld0RhdGEgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVJdGVtID0gKGRhdGEsIGlkLCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gaWQpXHJcbiAgICByZXR1cm4gKHsgdHlwZSwgcGF5bG9hZDogbmV3RGF0YX0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVJdGVtID0gKGRhdGEsIGlkLCBwb3N0LCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoaXRlbSA9PiAoaXRlbS5faWQgPT09IGlkID8gcG9zdCA6IGl0ZW0pKVxyXG4gICAgcmV0dXJuICh7IHR5cGUsIHBheWxvYWQ6IG5ld0RhdGF9KVxyXG59Il0sIm5hbWVzIjpbIkFDVElPTlMiLCJOT1RJRlkiLCJBVVRIIiwiQUREX0NBUlQiLCJBRERfTU9EQUwiLCJBRERfT1JERVJTIiwiQUREX1VTRVJTIiwiQUREX0NBVEVHT1JJRVMiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwiY2FydCIsImluU3RvY2siLCJ0eXBlIiwicGF5bG9hZCIsImVycm9yIiwiY2hlY2siLCJldmVyeSIsIml0ZW0iLCJfaWQiLCJxdWFudGl0eSIsImRlY3JlYXNlIiwiZGF0YSIsImlkIiwibmV3RGF0YSIsImZvckVhY2giLCJpbmNyZWFzZSIsImRlbGV0ZUl0ZW0iLCJmaWx0ZXIiLCJ1cGRhdGVJdGVtIiwicG9zdCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/Actions.js\n");

/***/ })

});