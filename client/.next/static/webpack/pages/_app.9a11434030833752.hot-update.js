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

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((param)=>{\n    let { currentUser  } = param;\n    const links = [\n        !currentUser && {\n            label: \"sign Up\",\n            href: \"auth/signup\"\n        },\n        !currentUser && {\n            label: \"sign In\",\n            href: \"auth/signIn\"\n        },\n        currentUser ? {\n            label: \"sign Out\",\n            href: \"auth/signout\"\n        } : {}\n    ].filter((linkCongif)=>linkCongif).map((param)=>{\n        let { label , href  } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"ml-1 mr-1\",\n            children: label\n        }, href, false, {\n            fileName: \"C:\\\\Users\\\\MSI\\\\Desktop\\\\project\\\\ticketing\\\\client\\\\components\\\\header.js\",\n            lineNumber: 12,\n            columnNumber: 16\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"navbar-brand\",\n                children: \"GitTix\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MSI\\\\Desktop\\\\project\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MSI\\\\Desktop\\\\project\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MSI\\\\Desktop\\\\project\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MSI\\\\Desktop\\\\project\\\\ticketing\\\\client\\\\components\\\\header.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQTZCO0FBRTdCLCtEQUFlLFNBQXVCO1FBQXJCLEVBQUVDLFlBQVcsRUFBRTtJQUU1QixNQUFNQyxRQUFRO1FBQ1YsQ0FBQ0QsZUFBZTtZQUFFRSxPQUFPO1lBQVdDLE1BQU07UUFBYztRQUN4RCxDQUFDSCxlQUFlO1lBQUVFLE9BQU87WUFBV0MsTUFBTTtRQUFjO1FBQ3hESCxjQUFjO1lBQUVFLE9BQU87WUFBWUMsTUFBTTtRQUFlLElBQUksQ0FBQyxDQUFDO0tBQ2pFLENBQ0FDLE1BQU0sQ0FBQ0MsQ0FBQUEsYUFBY0EsWUFDckJDLEdBQUcsQ0FBRSxTQUFxQjtZQUFwQixFQUFFSixNQUFLLEVBQUVDLEtBQUksRUFBRTtRQUNsQixxQkFBTyw4REFBQ0k7WUFBY0MsV0FBVTtzQkFDMUJOO1dBRFVDOzs7OztJQUdwQjtJQUVBLHFCQUNJLDhEQUFDTTtRQUFJRCxXQUFVOzswQkFDWCw4REFBQ1Qsa0RBQUlBO2dCQUFDSSxNQUFLO2dCQUFJSyxXQUFVOzBCQUFlOzs7Ozs7MEJBSXhDLDhEQUFDRTtnQkFBSUYsV0FBVTswQkFDWCw0RUFBQ0c7b0JBQUdILFdBQVU7OEJBQ1JQOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzP2MwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICggeyBjdXJyZW50VXNlciB9ICkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxpbmtzID0gW1xyXG4gICAgICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnc2lnbiBVcCcsIGhyZWY6ICdhdXRoL3NpZ251cCcgfSxcclxuICAgICAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ3NpZ24gSW4nLCBocmVmOiAnYXV0aC9zaWduSW4nIH0sXHJcbiAgICAgICAgY3VycmVudFVzZXIgPyB7IGxhYmVsOiAnc2lnbiBPdXQnLCBocmVmOiAnYXV0aC9zaWdub3V0JyB9IDoge31cclxuICAgIF1cclxuICAgIC5maWx0ZXIobGlua0NvbmdpZiA9PiBsaW5rQ29uZ2lmKVxyXG4gICAgLm1hcCggKHsgbGFiZWwsIGhyZWYgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8bGkga2V5PXtocmVmfSBjbGFzc05hbWU9J21sLTEgbXItMSc+XHJcbiAgICAgICAgICAgIHsgbGFiZWwgfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICB9IClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJz5cclxuICAgICAgICAgICAgICAgIEdpdFRpeFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGlua3MgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiTGluayIsImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rQ29uZ2lmIiwibWFwIiwibGkiLCJjbGFzc05hbWUiLCJuYXYiLCJkaXYiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});