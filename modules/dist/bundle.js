/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TS_module.ts":
/*!**************************!*\
  !*** ./src/TS_module.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   course: () => (/* binding */ course),
/* harmony export */   courseName: () => (/* binding */ courseName),
/* harmony export */   getProductName: () => (/* binding */ getProductName),
/* harmony export */   released: () => (/* binding */ released)
/* harmony export */ });
function getProductName({ productName }) {
    return productName;
}
const course = {
    name: 'ts',
    price: 100
};
let released = false;
const courseName = "TS course";



/***/ }),

/***/ "./src/TS_re_export.ts":
/*!*****************************!*\
  !*** ./src/TS_re_export.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   course: () => (/* reexport safe */ _TS_module__WEBPACK_IMPORTED_MODULE_0__.course)
/* harmony export */ });
/* harmony import */ var _TS_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TS_module */ "./src/TS_module.ts");



/***/ }),

/***/ "./src/utils/array.ts":
/*!****************************!*\
  !*** ./src/utils/array.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   productList: () => (/* binding */ productList)
/* harmony export */ });
const productList = ['TS', 'JS', 'Python'];


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   product: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_0__.product),
/* harmony export */   productList: () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_1__.productList)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./src/utils/object.ts");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./src/utils/array.ts");




/***/ }),

/***/ "./src/utils/object.ts":
/*!*****************************!*\
  !*** ./src/utils/object.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   product: () => (/* binding */ product)
/* harmony export */ });
const product = {
    name: 'Python',
    price: 100,
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TS_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TS_module */ "./src/TS_module.ts");
/* harmony import */ var _TS_re_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TS_re_export */ "./src/TS_re_export.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");



let product1 = (0,_TS_module__WEBPACK_IMPORTED_MODULE_0__.getProductName)({ productName: 'ts' });
console.log(product1);
console.log(_TS_re_export__WEBPACK_IMPORTED_MODULE_1__.course.name);
console.log(_utils__WEBPACK_IMPORTED_MODULE_2__.product);
console.log(_utils__WEBPACK_IMPORTED_MODULE_2__.productList);
if (_TS_module__WEBPACK_IMPORTED_MODULE_0__.released) {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./TS_module */ "./src/TS_module.ts")).then(() => {
        console.log({ productName: 'ts' });
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxjQUFjLENBQUMsRUFBQyxXQUFXLEVBQXdCO0lBQ3hELE9BQU8sV0FBVyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxNQUFNLE1BQU0sR0FBRztJQUNYLElBQUksRUFBRSxJQUFJO0lBQ1YsS0FBSyxFQUFDLEdBQUc7Q0FDWixDQUFDO0FBRUYsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLE1BQU0sVUFBVSxHQUFHLFdBQVc7QUFPNUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmdDOzs7Ozs7Ozs7Ozs7Ozs7QUNBM0IsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ3ZCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0ZoQixNQUFNLE9BQU8sR0FBRztJQUNuQixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxHQUFHO0NBQ2I7Ozs7Ozs7VUNIRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOb0Q7QUFDZDtBQUVRO0FBRzlDLElBQUksUUFBUSxHQUFHLDBEQUFjLENBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaURBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUFPLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUFXLENBQUMsQ0FBQztBQUd6QixJQUFHLGdEQUFRLEVBQUM7SUFDUiw2SEFBcUIsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUM7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL21vZHVsZXMvLi9zcmMvVFNfbW9kdWxlLnRzIiwid2VicGFjazovL21vZHVsZXMvLi9zcmMvVFNfcmVfZXhwb3J0LnRzIiwid2VicGFjazovL21vZHVsZXMvLi9zcmMvdXRpbHMvYXJyYXkudHMiLCJ3ZWJwYWNrOi8vbW9kdWxlcy8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9tb2R1bGVzLy4vc3JjL3V0aWxzL29iamVjdC50cyIsIndlYnBhY2s6Ly9tb2R1bGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vZHVsZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vZHVsZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tb2R1bGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbW9kdWxlcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRQcm9kdWN0TmFtZSh7cHJvZHVjdE5hbWV9OiB7cHJvZHVjdE5hbWU6IHN0cmluZ30pOnN0cmluZyB7XG4gICAgcmV0dXJuIHByb2R1Y3ROYW1lO1xufVxuXG5jb25zdCBjb3Vyc2UgPSB7XG4gICAgbmFtZTogJ3RzJyxcbiAgICBwcmljZToxMDBcbn07XG5cbmxldCByZWxlYXNlZCA9IGZhbHNlO1xuY29uc3QgY291cnNlTmFtZSA9IFwiVFMgY291cnNlXCJcblxuZXhwb3J0IHtcbiAgICBnZXRQcm9kdWN0TmFtZSxcbiAgICBjb3Vyc2UsXG4gICAgcmVsZWFzZWQsXG4gICAgY291cnNlTmFtZVxufTsiLCJleHBvcnQge2NvdXJzZX0gZnJvbSBcIi4vVFNfbW9kdWxlXCIiLCJleHBvcnQgY29uc3QgcHJvZHVjdExpc3QgPSBbJ1RTJywnSlMnLCdQeXRob24nXSIsIi8vIGJhcnJlbCBmaWxlc1xuZXhwb3J0ICogZnJvbSBcIi4vb2JqZWN0XCJcbmV4cG9ydCAqIGZyb20gXCIuL2FycmF5XCIiLCJleHBvcnQgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBuYW1lOiAnUHl0aG9uJyxcbiAgICBwcmljZTogMTAwLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtnZXRQcm9kdWN0TmFtZSxyZWxlYXNlZH0gZnJvbSBcIi4vVFNfbW9kdWxlXCI7XG5pbXBvcnQge2NvdXJzZX0gZnJvbSBcIi4vVFNfcmVfZXhwb3J0XCI7XG5cbmltcG9ydCB7IHByb2R1Y3QscHJvZHVjdExpc3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuLy8gdHNjb25maWcuanNvbiAtPiBtb2R1bGVSZXNvbHV0aW9uOm5vZGVcblxubGV0IHByb2R1Y3QxID0gZ2V0UHJvZHVjdE5hbWUoe3Byb2R1Y3ROYW1lOiAndHMnfSk7XG5jb25zb2xlLmxvZyhwcm9kdWN0MSk7XG5jb25zb2xlLmxvZyhjb3Vyc2UubmFtZSk7XG5cbmNvbnNvbGUubG9nKHByb2R1Y3QpO1xuY29uc29sZS5sb2cocHJvZHVjdExpc3QpO1xuXG4vLyBjb25kaXRpb25hbGx5IGxvYWRpbmdcbmlmKHJlbGVhc2VkKXtcbiAgICBpbXBvcnQoXCIuL1RTX21vZHVsZVwiKS50aGVuKCgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKHtwcm9kdWN0TmFtZTogJ3RzJ30pO1xuICAgIH0pXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==