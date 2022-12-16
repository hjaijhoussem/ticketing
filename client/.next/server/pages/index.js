"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req  })=>{\n    if (true) {\n        //we are in the server\n        return awios.create({\n            baseURL: \"http://ingress-nginx.ingress-nginx.svc.cluster.local\",\n            headers: req.headers // in case we are in the client there no need to set this because browesr will handle it for us\n        });\n    } else {}\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLGlFQUFlLENBQUMsRUFBRUMsSUFBRyxFQUFFLEdBQUs7SUFDeEIsSUFBRyxJQUFrQixFQUFhO1FBQzlCLHNCQUFzQjtRQUV0QixPQUFPQyxNQUFNQyxNQUFNLENBQUM7WUFDaEJDLFNBQVM7WUFDVEMsU0FBU0osSUFBSUksT0FBTyxDQUFDLCtGQUErRjtRQUN4SDtJQUNKLE9BQU0sRUFLTDtBQUNMLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2M2ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHJlcSB9KSA9PiB7XHJcbiAgICBpZih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vd2UgYXJlIGluIHRoZSBzZXJ2ZXJcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGJhc2VVUkw6ICdodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsJyxcclxuICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMgLy8gaW4gY2FzZSB3ZSBhcmUgaW4gdGhlIGNsaWVudCB0aGVyZSBubyBuZWVkIHRvIHNldCB0aGlzIGJlY2F1c2UgYnJvd2VzciB3aWxsIGhhbmRsZSBpdCBmb3IgdXNcclxuICAgICAgICB9KTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICAvL3dlIG11c3QgYmUgb24gdGhlIGJyb3dzZXJcclxuICAgICAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgYmFzZVVSTDogJy8nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXEiLCJhd2lvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _api_build_client__WEBPACK_IMPORTED_MODULE_2__]);\n([axios__WEBPACK_IMPORTED_MODULE_1__, _api_build_client__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst LandingPage = ({ currentUser  })=>{\n    console.log(currentUser);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"hello from start page\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MSI\\\\Desktop\\\\project\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\nLandingPage.getInitialProps = async ({ context  })=>{\n    // this will executed in the server side rendering prpcess\n    // we dont use useRequest hook, because \n    // hooks are used in component and this not a component\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(context);\n    const { data  } = await client.get(\"/api/users/currentUser\");\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ29CO0FBRTlDLE1BQU1FLGNBQWMsQ0FBQyxFQUFFQyxZQUFXLEVBQUUsR0FBSztJQUNyQ0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNJLDhEQUFDRztrQkFBRzs7Ozs7O0FBRVo7QUFFQUosWUFBWUssZUFBZSxHQUFHLE9BQU8sRUFBRUMsUUFBTyxFQUFFLEdBQUs7SUFDakQsMERBQTBEO0lBQzFELHdDQUF3QztJQUN4Qyx1REFBdUQ7SUFDdkQsTUFBTUMsU0FBU1IsNkRBQVdBLENBQUNPO0lBQzNCLE1BQU0sRUFBRUUsS0FBSSxFQUFFLEdBQUcsTUFBTUQsT0FBT0UsR0FBRyxDQUFDO0lBRWxDLE9BQU9EO0FBQ1g7QUFFQSxpRUFBZVIsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYnVpbGRDbGllbnQgZnJvbSBcIi4uL2FwaS9idWlsZC1jbGllbnRcIjtcclxuXHJcbmNvbnN0IExhbmRpbmdQYWdlID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aDE+aGVsbG8gZnJvbSBzdGFydCBwYWdlPC9oMT5cclxuICAgIClcclxufVxyXG5cclxuTGFuZGluZ1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY29udGV4dCB9KSA9PiB7XHJcbiAgICAvLyB0aGlzIHdpbGwgZXhlY3V0ZWQgaW4gdGhlIHNlcnZlciBzaWRlIHJlbmRlcmluZyBwcnBjZXNzXHJcbiAgICAvLyB3ZSBkb250IHVzZSB1c2VSZXF1ZXN0IGhvb2ssIGJlY2F1c2UgXHJcbiAgICAvLyBob29rcyBhcmUgdXNlZCBpbiBjb21wb25lbnQgYW5kIHRoaXMgbm90IGEgY29tcG9uZW50XHJcbiAgICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChjb250ZXh0KTtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldCgnL2FwaS91c2Vycy9jdXJyZW50VXNlcicpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlOyJdLCJuYW1lcyI6WyJheGlvcyIsImJ1aWxkQ2xpZW50IiwiTGFuZGluZ1BhZ2UiLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJoMSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjbGllbnQiLCJkYXRhIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();