"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Products.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/Products.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ \"(app-pages-browser)/./src/app/components/Cards.tsx\");\n/* harmony import */ var _store_zuStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/zuStore */ \"(app-pages-browser)/./src/app/store/zuStore.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Products = ()=>{\n    _s();\n    const increment = (0,_store_zuStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((state)=>state.increment);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-32 bg-base-200\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"heading mb-8 text-black text-xl font-bold font-serif ml-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-2 mx-4\",\n                    children: _Cards__WEBPACK_IMPORTED_MODULE_3__.cards.map((items)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: {\n                                        pathname: \"details/\".concat(items.title),\n                                        query: {\n                                            search: items.title\n                                        }\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card-compact lg:card-normal w-[9.6rem] xs:w-[11rem] ms:w-[13rem] md:w-[15.5rem] xl:w-[16rem] bg-base-100 shadow-xl mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    width: 300,\n                                                    height: 100,\n                                                    src: items.src,\n                                                    alt: items.title,\n                                                    className: \"aspect-[4/3] object-cover\"\n                                                }, void 0, false, {\n                                                    fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                                                    lineNumber: 23,\n                                                    columnNumber: 11\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                                                lineNumber: 23,\n                                                columnNumber: 3\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"card-title\",\n                                                        children: items.title.substring(0, 30)\n                                                    }, void 0, false, {\n                                                        fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                                                        lineNumber: 25,\n                                                        columnNumber: 5\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            items.para.substring(0, 50),\n                                                            \"...\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                                                        lineNumber: 26,\n                                                        columnNumber: 5\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 3\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, items.title, false, {\n                                    fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-actions text-sm flex justify-center items-end\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: increment,\n                                        className: \"btn-sm w-full rounded-md btn-primary text-white\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 7\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 5\n                                }, undefined)\n                            ]\n                        }, void 0, true))\n                }, void 0, false, {\n                    fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"W:\\\\JavaScript\\\\Next Js\\\\supernova\\\\src\\\\app\\\\components\\\\Products.tsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Products, \"aMTASKytRnJ7Uep/IWPpOfDgXNE=\", false, function() {\n    return [\n        _store_zuStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMrQjtBQUNGO0FBQ0c7QUFFUTtBQUN4QyxNQUFNSSxXQUFXOztJQUNiLE1BQU1DLFlBQVlGLDBEQUFRQSxDQUFDLENBQUNHLFFBQVFBLE1BQU1ELFNBQVM7SUFDbkQscUJBQ0k7a0JBQ0EsNEVBQUNFO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0M7a0NBQUs7Ozs7Ozs7Ozs7OzhCQUVWLDhEQUFDRjtvQkFBSUMsV0FBVTs4QkFDMUJOLHlDQUFLQSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1I7OzhDQUNBLDhEQUFDVixrREFBSUE7b0NBQUNXLE1BQU07d0NBQ1JDLFVBQVMsV0FBdUIsT0FBWkYsTUFBTUcsS0FBSzt3Q0FDL0JDLE9BQU07NENBQUNDLFFBQU9MLE1BQU1HLEtBQUs7d0NBQUE7b0NBQzdCOzhDQUNJLDRFQUFDUDt3Q0FBSUMsV0FBVTs7MERBQ3JCLDhEQUFDUzswREFBTyw0RUFBQ2pCLG1EQUFLQTtvREFBQ2tCLE9BQU87b0RBQUtDLFFBQVE7b0RBQUtDLEtBQUtULE1BQU1TLEdBQUc7b0RBQUVDLEtBQUtWLE1BQU1HLEtBQUs7b0RBQUVOLFdBQVU7Ozs7Ozs7Ozs7OzBEQUNwRiw4REFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDYzt3REFBR2QsV0FBVTtrRUFBY0csTUFBTUcsS0FBSyxDQUFDUyxTQUFTLENBQUMsR0FBRTs7Ozs7O2tFQUNwRCw4REFBQ0M7OzREQUFHYixNQUFNYyxJQUFJLENBQUNGLFNBQVMsQ0FBQyxHQUFFOzREQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUx2QlosTUFBTUcsS0FBSzs7Ozs7OENBU25CLDhEQUFDUDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ2tCO3dDQUFPQyxTQUFTdEI7d0NBQVdHLFdBQVU7a0RBQWtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTlGO0dBaENNSjs7UUFDZ0JELHNEQUFRQTs7O0tBRHhCQztBQWlDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvZHVjdHMudHN4P2M0ZmEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjYXJkcyB9IGZyb20gXCIuL0NhcmRzXCI7XHJcbmltcG9ydCB7IHByb2R1Y3RUeXBlIH0gZnJvbSBcIi4vQ2FyZHNcIjtcclxuaW1wb3J0IHVzZVN0b3JlIGZyb20gXCIuLi9zdG9yZS96dVN0b3JlXCI7XHJcbmNvbnN0IFByb2R1Y3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5jcmVtZW50ID0gdXNlU3RvcmUoKHN0YXRlKT0+c3RhdGUuaW5jcmVtZW50KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTMyIGJnLWJhc2UtMjAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZyBtYi04IHRleHQtYmxhY2sgdGV4dC14bCBmb250LWJvbGQgZm9udC1zZXJpZiBtbC00XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Qcm9kdWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCB4bDpncmlkLWNvbHMtNSBteS0yIG14LTRcIj5cclxue2NhcmRzLm1hcCgoaXRlbXM6cHJvZHVjdFR5cGUpPT4oXHJcbiAgICA8PlxyXG4gICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgIHBhdGhuYW1lOmBkZXRhaWxzLyR7aXRlbXMudGl0bGV9YCxcclxuICAgICAgICBxdWVyeTp7c2VhcmNoOml0ZW1zLnRpdGxlfVxyXG4gICAgfX0ga2V5PXtpdGVtcy50aXRsZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbXBhY3QgbGc6Y2FyZC1ub3JtYWwgdy1bOS42cmVtXSB4czp3LVsxMXJlbV0gbXM6dy1bMTNyZW1dIG1kOnctWzE1LjVyZW1dIHhsOnctWzE2cmVtXSBiZy1iYXNlLTEwMCBzaGFkb3cteGwgbWItNFwiPlxyXG4gIDxmaWd1cmU+PEltYWdlIHdpZHRoPXszMDB9IGhlaWdodD17MTAwfSBzcmM9e2l0ZW1zLnNyY30gYWx0PXtpdGVtcy50aXRsZX0gY2xhc3NOYW1lPVwiYXNwZWN0LVs0LzNdIG9iamVjdC1jb3ZlclwiIC8+PC9maWd1cmU+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2l0ZW1zLnRpdGxlLnN1YnN0cmluZygwLDMwKX08L2gyPlxyXG4gICAgPHA+e2l0ZW1zLnBhcmEuc3Vic3RyaW5nKDAsNTApfS4uLjwvcD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyB0ZXh0LXNtIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtZW5kXCI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVtZW50fSBjbGFzc05hbWU9XCJidG4tc20gdy1mdWxsIHJvdW5kZWQtbWQgYnRuLXByaW1hcnkgdGV4dC13aGl0ZVwiPkFkZCB0byBDYXJ0PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4pKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsImNhcmRzIiwidXNlU3RvcmUiLCJQcm9kdWN0cyIsImluY3JlbWVudCIsInN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm1hcCIsIml0ZW1zIiwiaHJlZiIsInBhdGhuYW1lIiwidGl0bGUiLCJxdWVyeSIsInNlYXJjaCIsImZpZ3VyZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwiaDIiLCJzdWJzdHJpbmciLCJwIiwicGFyYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Products.tsx\n"));

/***/ })

});