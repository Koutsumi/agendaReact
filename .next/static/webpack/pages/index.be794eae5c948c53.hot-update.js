"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./services/firebase.ts":
/*!******************************!*\
  !*** ./services/firebase.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": function() { return /* binding */ auth; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n// Import the functions you need from the SDKs you need\n\n\n\n(__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config)();\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"\".concat(process.env.API_KEY),\n    authDomain: \"\".concat(process.env.AUTH_DOMAIN),\n    databaseURL: \"\".concat(process.env.DATABASE_URL),\n    projectId: process.env.PROJECT_ID,\n    storageBucket: \"\".concat(process.env.STORAGE_BUCKET),\n    messagingSenderId: \"\".concat(process.env.MESSAGING_SENDER_ID),\n    appId: \"\".concat(process.env.APP_ID)\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWO0FBQ0k7QUFDVjtBQUN2Q0csK0VBQXdCO0FBRXhCLHdDQUF3QztBQUN4QyxNQUFNRSxpQkFBaUI7SUFDckJDLFFBQVEsR0FBdUIsT0FBcEJDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTztJQUM5QkMsWUFBWSxHQUEyQixPQUF4QkgsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDRyxXQUFXO0lBQ3RDQyxhQUFhLEdBQTRCLE9BQXpCTCxPQUFPQSxDQUFDQyxHQUFHLENBQUNLLFlBQVk7SUFDeENDLFdBQVdQLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ08sVUFBVTtJQUNqQ0MsZUFBZSxHQUE4QixPQUEzQlQsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDUyxjQUFjO0lBQzVDQyxtQkFBbUIsR0FBbUMsT0FBaENYLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ1csbUJBQW1CO0lBQ3JEQyxPQUFPLEdBQXNCLE9BQW5CYixPQUFPQSxDQUFDQyxHQUFHLENBQUNhLE1BQU07QUFDOUI7QUFFQSxzQkFBc0I7QUFDdEIsTUFBTUMsTUFBTXRCLDJEQUFhQSxDQUFDSztBQUNuQixNQUFNa0IsT0FBT3JCLHNEQUFPQSxHQUFFO0FBQzdCLCtEQUFlRCxnRUFBWUEsQ0FBQ3FCLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvZmlyZWJhc2UudHM/OGNlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKClcclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBgJHtwcm9jZXNzLmVudi5BUElfS0VZfWAsXHJcbiAgYXV0aERvbWFpbjogYCR7cHJvY2Vzcy5lbnYuQVVUSF9ET01BSU59YCxcclxuICBkYXRhYmFzZVVSTDogYCR7cHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMfWAsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IGAke3Byb2Nlc3MuZW52LlNUT1JBR0VfQlVDS0VUfWAsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IGAke3Byb2Nlc3MuZW52Lk1FU1NBR0lOR19TRU5ERVJfSUR9YCxcclxuICBhcHBJZDogYCR7cHJvY2Vzcy5lbnYuQVBQX0lEfWBcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aCgpXHJcbmV4cG9ydCBkZWZhdWx0IGdldEZpcmVzdG9yZShhcHApXHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0QXV0aCIsInJlcXVpcmUiLCJjb25maWciLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBUElfS0VZIiwiYXV0aERvbWFpbiIsIkFVVEhfRE9NQUlOIiwiZGF0YWJhc2VVUkwiLCJEQVRBQkFTRV9VUkwiLCJwcm9qZWN0SWQiLCJQUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIlNUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJNRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJBUFBfSUQiLCJhcHAiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/firebase.ts\n"));

/***/ })

});