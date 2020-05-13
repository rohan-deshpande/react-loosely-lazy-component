/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/collect/hydrate.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/collect/hydrate.js ***!
  \********************************************************************/
/*! exports provided: refElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refElements", function() { return refElements; });
var refElements = function refElements(fromEl, id) {
  var result = [];
  var el = fromEl;

  while (el = el.nextSibling) {
    if (el.dataset && el.dataset.lazyEnd === id) break;
    result.push(el);
  }

  return result;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0L2h5ZHJhdGUudHMiXSwibmFtZXMiOlsicmVmRWxlbWVudHMiLCJmcm9tRWwiLCJpZCIsInJlc3VsdCIsImVsIiwibmV4dFNpYmxpbmciLCJkYXRhc2V0IiwibGF6eUVuZCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRCxFQUFjQyxFQUFkLEVBQTZCO0FBQ3RELE1BQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EsTUFBSUMsRUFBRSxHQUFHSCxNQUFUOztBQUNBLFNBQVFHLEVBQUUsR0FBR0EsRUFBRSxDQUFDQyxXQUFoQixFQUE4QjtBQUM1QixRQUFJRCxFQUFFLENBQUNFLE9BQUgsSUFBY0YsRUFBRSxDQUFDRSxPQUFILENBQVdDLE9BQVgsS0FBdUJMLEVBQXpDLEVBQTZDO0FBQzdDQyxJQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBWUosRUFBWjtBQUNEOztBQUVELFNBQU9ELE1BQVA7QUFDRCxDQVRNIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlZkVsZW1lbnRzID0gKGZyb21FbDogYW55LCBpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBsZXQgZWwgPSBmcm9tRWw7XG4gIHdoaWxlICgoZWwgPSBlbC5uZXh0U2libGluZykpIHtcbiAgICBpZiAoZWwuZGF0YXNldCAmJiBlbC5kYXRhc2V0LmxhenlFbmQgPT09IGlkKSBicmVhaztcbiAgICByZXN1bHQucHVzaChlbCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiJdfQ==

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/collect/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/collect/index.js ***!
  \******************************************************************/
/*! exports provided: collect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return collect; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/react-loosely-lazy/lib/esm/constants.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./node_modules/react-loosely-lazy/lib/esm/collect/render.js");
/* harmony import */ var _hydrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hydrate */ "./node_modules/react-loosely-lazy/lib/esm/collect/hydrate.js");



var collect = function collect() {
  var markers = document.querySelectorAll('input[data-lazy-begin]');

  for (var i = 0, j = markers.length; i < j; i += 1) {
    var el = markers[i];

    var _ref = el.dataset || {},
        lazyBegin = _ref.lazyBegin;

    var value = _constants__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].CURRENT_MODE === _constants__WEBPACK_IMPORTED_MODULE_0__["MODE"].RENDER ? Object(_render__WEBPACK_IMPORTED_MODULE_1__["cloneElements"])(markers[i], lazyBegin) : Object(_hydrate__WEBPACK_IMPORTED_MODULE_2__["refElements"])(markers[i], lazyBegin);

    if (_constants__WEBPACK_IMPORTED_MODULE_0__["COLLECTED"].has(lazyBegin)) {
      _constants__WEBPACK_IMPORTED_MODULE_0__["COLLECTED"].get(lazyBegin).push(value);
    } else {
      _constants__WEBPACK_IMPORTED_MODULE_0__["COLLECTED"].set(lazyBegin, [value]);
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbIk1PREUiLCJDT0xMRUNURUQiLCJTRVRUSU5HUyIsImNsb25lRWxlbWVudHMiLCJyZWZFbGVtZW50cyIsImNvbGxlY3QiLCJtYXJrZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImoiLCJsZW5ndGgiLCJlbCIsImRhdGFzZXQiLCJsYXp5QmVnaW4iLCJ2YWx1ZSIsIkNVUlJFTlRfTU9ERSIsIlJFTkRFUiIsImhhcyIsImdldCIsInB1c2giLCJzZXQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsRUFBZUMsU0FBZixFQUEwQkMsUUFBMUIsUUFBMEMsY0FBMUM7QUFDQSxTQUFTQyxhQUFULFFBQThCLFVBQTlCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixXQUE1QjtBQUVBLE9BQU8sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUMzQixNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsd0JBQTFCLENBQWhCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsQ0FBQyxHQUFHSixPQUFPLENBQUNLLE1BQTVCLEVBQW9DRixDQUFDLEdBQUdDLENBQXhDLEVBQTJDRCxDQUFDLElBQUksQ0FBaEQsRUFBbUQ7QUFDakQsUUFBTUcsRUFBRSxHQUFHTixPQUFPLENBQUNHLENBQUQsQ0FBbEI7O0FBRGlELGVBRTNCRyxFQUFFLENBQUNDLE9BQUgsSUFBYyxFQUZhO0FBQUEsUUFFekNDLFNBRnlDLFFBRXpDQSxTQUZ5Qzs7QUFHakQsUUFBTUMsS0FBSyxHQUNUYixRQUFRLENBQUNjLFlBQVQsS0FBMEJoQixJQUFJLENBQUNpQixNQUEvQixHQUNJZCxhQUFhLENBQUNHLE9BQU8sQ0FBQ0csQ0FBRCxDQUFSLEVBQWFLLFNBQWIsQ0FEakIsR0FFSVYsV0FBVyxDQUFDRSxPQUFPLENBQUNHLENBQUQsQ0FBUixFQUFhSyxTQUFiLENBSGpCOztBQUtBLFFBQUliLFNBQVMsQ0FBQ2lCLEdBQVYsQ0FBY0osU0FBZCxDQUFKLEVBQThCO0FBQzVCYixNQUFBQSxTQUFTLENBQUNrQixHQUFWLENBQWNMLFNBQWQsRUFBeUJNLElBQXpCLENBQThCTCxLQUE5QjtBQUNELEtBRkQsTUFFTztBQUNMZCxNQUFBQSxTQUFTLENBQUNvQixHQUFWLENBQWNQLFNBQWQsRUFBeUIsQ0FBQ0MsS0FBRCxDQUF6QjtBQUNEO0FBQ0Y7QUFDRixDQWhCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1PREUsIENPTExFQ1RFRCwgU0VUVElOR1MgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50cyB9IGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB7IHJlZkVsZW1lbnRzIH0gZnJvbSAnLi9oeWRyYXRlJztcblxuZXhwb3J0IGNvbnN0IGNvbGxlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IG1hcmtlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLWxhenktYmVnaW5dJyk7XG4gIGZvciAobGV0IGkgPSAwLCBqID0gbWFya2Vycy5sZW5ndGg7IGkgPCBqOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbCA9IG1hcmtlcnNbaV0gYXMgYW55O1xuICAgIGNvbnN0IHsgbGF6eUJlZ2luIH0gPSBlbC5kYXRhc2V0IHx8IHt9O1xuICAgIGNvbnN0IHZhbHVlID1cbiAgICAgIFNFVFRJTkdTLkNVUlJFTlRfTU9ERSA9PT0gTU9ERS5SRU5ERVJcbiAgICAgICAgPyBjbG9uZUVsZW1lbnRzKG1hcmtlcnNbaV0sIGxhenlCZWdpbilcbiAgICAgICAgOiByZWZFbGVtZW50cyhtYXJrZXJzW2ldLCBsYXp5QmVnaW4pO1xuXG4gICAgaWYgKENPTExFQ1RFRC5oYXMobGF6eUJlZ2luKSkge1xuICAgICAgQ09MTEVDVEVELmdldChsYXp5QmVnaW4pLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBDT0xMRUNURUQuc2V0KGxhenlCZWdpbiwgW3ZhbHVlXSk7XG4gICAgfVxuICB9XG59O1xuIl19

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/collect/render.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/collect/render.js ***!
  \*******************************************************************/
/*! exports provided: cloneElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElements", function() { return cloneElements; });
var cloneElements = function cloneElements(fromEl, id) {
  var fragment = document.createElement('div');
  var el = fromEl;

  while (el = el.nextSibling) {
    if (el.dataset && el.dataset.lazyEnd === id) break; // cloneNode is 50% faster than outerHTML/textContent

    fragment.appendChild(el.cloneNode(true));
  }

  return Array.from(fragment.childNodes);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0L3JlbmRlci50cyJdLCJuYW1lcyI6WyJjbG9uZUVsZW1lbnRzIiwiZnJvbUVsIiwiaWQiLCJmcmFnbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsIiwibmV4dFNpYmxpbmciLCJkYXRhc2V0IiwibGF6eUVuZCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLE1BQUQsRUFBY0MsRUFBZCxFQUE2QjtBQUN4RCxNQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBLE1BQUlDLEVBQUUsR0FBR0wsTUFBVDs7QUFDQSxTQUFRSyxFQUFFLEdBQUdBLEVBQUUsQ0FBQ0MsV0FBaEIsRUFBOEI7QUFDNUIsUUFBSUQsRUFBRSxDQUFDRSxPQUFILElBQWNGLEVBQUUsQ0FBQ0UsT0FBSCxDQUFXQyxPQUFYLEtBQXVCUCxFQUF6QyxFQUE2QyxNQURqQixDQUU1Qjs7QUFDQUMsSUFBQUEsUUFBUSxDQUFDTyxXQUFULENBQXFCSixFQUFFLENBQUNLLFNBQUgsQ0FBYSxJQUFiLENBQXJCO0FBQ0Q7O0FBRUQsU0FBT0MsS0FBSyxDQUFDQyxJQUFOLENBQVdWLFFBQVEsQ0FBQ1csVUFBcEIsQ0FBUDtBQUNELENBVk0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2xvbmVFbGVtZW50cyA9IChmcm9tRWw6IGFueSwgaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgZWwgPSBmcm9tRWw7XG4gIHdoaWxlICgoZWwgPSBlbC5uZXh0U2libGluZykpIHtcbiAgICBpZiAoZWwuZGF0YXNldCAmJiBlbC5kYXRhc2V0LmxhenlFbmQgPT09IGlkKSBicmVhaztcbiAgICAvLyBjbG9uZU5vZGUgaXMgNTAlIGZhc3RlciB0aGFuIG91dGVySFRNTC90ZXh0Q29udGVudFxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsLmNsb25lTm9kZSh0cnVlKSk7XG4gIH1cblxuICByZXR1cm4gQXJyYXkuZnJvbShmcmFnbWVudC5jaGlsZE5vZGVzKTtcbn07XG4iXX0=

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/constants.js ***!
  \**************************************************************/
/*! exports provided: MODE, PHASE, PHASE_LAZY_DELAY, COLLECTED, SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE", function() { return MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHASE", function() { return PHASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHASE_LAZY_DELAY", function() { return PHASE_LAZY_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTED", function() { return COLLECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
var MODE = {
  RENDER: 'RENDER',
  HYDRATE: 'HYDRATE'
};
var PHASE = {
  PAINT: 0,
  AFTER_PAINT: 1,
  LAZY: 2
};
var PHASE_LAZY_DELAY = 50;
var COLLECTED = new Map();
var SETTINGS = {
  CURRENT_MODE: MODE.HYDRATE
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMudHMiXSwibmFtZXMiOlsiTU9ERSIsIlJFTkRFUiIsIkhZRFJBVEUiLCJQSEFTRSIsIlBBSU5UIiwiQUZURVJfUEFJTlQiLCJMQVpZIiwiUEhBU0VfTEFaWV9ERUxBWSIsIkNPTExFQ1RFRCIsIk1hcCIsIlNFVFRJTkdTIiwiQ1VSUkVOVF9NT0RFIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQU1BLElBQUksR0FBRztBQUNsQkMsRUFBQUEsTUFBTSxFQUFFLFFBRFU7QUFFbEJDLEVBQUFBLE9BQU8sRUFBRTtBQUZTLENBQWI7QUFLUCxPQUFPLElBQU1DLEtBQUssR0FBRztBQUNuQkMsRUFBQUEsS0FBSyxFQUFFLENBRFk7QUFFbkJDLEVBQUFBLFdBQVcsRUFBRSxDQUZNO0FBR25CQyxFQUFBQSxJQUFJLEVBQUU7QUFIYSxDQUFkO0FBTVAsT0FBTyxJQUFNQyxnQkFBZ0IsR0FBRyxFQUF6QjtBQUVQLE9BQU8sSUFBTUMsU0FBUyxHQUFHLElBQUlDLEdBQUosRUFBbEI7QUFNUCxPQUFPLElBQU1DLFFBQWtCLEdBQUc7QUFDaENDLEVBQUFBLFlBQVksRUFBRVgsSUFBSSxDQUFDRTtBQURhLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE1PREUgPSB7XG4gIFJFTkRFUjogJ1JFTkRFUicgYXMgY29uc3QsXG4gIEhZRFJBVEU6ICdIWURSQVRFJyBhcyBjb25zdCxcbn07XG5cbmV4cG9ydCBjb25zdCBQSEFTRSA9IHtcbiAgUEFJTlQ6IDAsXG4gIEFGVEVSX1BBSU5UOiAxLFxuICBMQVpZOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFBIQVNFX0xBWllfREVMQVkgPSA1MDtcblxuZXhwb3J0IGNvbnN0IENPTExFQ1RFRCA9IG5ldyBNYXAoKTtcblxudHlwZSBTZXR0aW5ncyA9IHtcbiAgQ1VSUkVOVF9NT0RFOiB0eXBlb2YgTU9ERS5IWURSQVRFIHwgdHlwZW9mIE1PREUuUkVOREVSO1xufTtcblxuZXhwb3J0IGNvbnN0IFNFVFRJTkdTOiBTZXR0aW5ncyA9IHtcbiAgQ1VSUkVOVF9NT0RFOiBNT0RFLkhZRFJBVEUsXG59O1xuIl19

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/index.js ***!
  \**********************************************************/
/*! exports provided: MODE, SETTINGS, default, lazyForPaint, lazyAfterPaint, lazy, LazySuspense, LazyWait, useLazyPhase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/react-loosely-lazy/lib/esm/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODE", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"]; });

/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/react-loosely-lazy/lib/esm/init.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _init__WEBPACK_IMPORTED_MODULE_1__["LooselyLazy"]; });

/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy */ "./node_modules/react-loosely-lazy/lib/esm/lazy/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazyForPaint", function() { return _lazy__WEBPACK_IMPORTED_MODULE_2__["lazyForPaint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazyAfterPaint", function() { return _lazy__WEBPACK_IMPORTED_MODULE_2__["lazyAfterPaint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return _lazy__WEBPACK_IMPORTED_MODULE_2__["lazy"]; });

/* harmony import */ var _suspense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suspense */ "./node_modules/react-loosely-lazy/lib/esm/suspense/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazySuspense", function() { return _suspense__WEBPACK_IMPORTED_MODULE_3__["LazySuspense"]; });

/* harmony import */ var _phase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phase */ "./node_modules/react-loosely-lazy/lib/esm/phase/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyWait", function() { return _phase__WEBPACK_IMPORTED_MODULE_4__["LazyWait"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLazyPhase", function() { return _phase__WEBPACK_IMPORTED_MODULE_4__["useLazyPhase"]; });






//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJNT0RFIiwiU0VUVElOR1MiLCJMb29zZWx5TGF6eSIsImRlZmF1bHQiLCJsYXp5Rm9yUGFpbnQiLCJsYXp5QWZ0ZXJQYWludCIsImxhenkiLCJMYXp5U3VzcGVuc2UiLCJMYXp5V2FpdCIsInVzZUxhenlQaGFzZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsSUFBVCxFQUFlQyxRQUFmLFFBQStCLGFBQS9CO0FBQ0EsU0FBU0MsV0FBVyxJQUFJQyxPQUF4QixRQUF1QyxRQUF2QztBQUNBLFNBQVNDLFlBQVQsRUFBdUJDLGNBQXZCLEVBQXVDQyxJQUF2QyxRQUFtRCxRQUFuRDtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsWUFBN0I7QUFDQSxTQUFTQyxRQUFULEVBQW1CQyxZQUFuQixRQUF1QyxTQUF2QyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE1PREUsIFNFVFRJTkdTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IHsgTG9vc2VseUxhenkgYXMgZGVmYXVsdCB9IGZyb20gJy4vaW5pdCc7XG5leHBvcnQgeyBsYXp5Rm9yUGFpbnQsIGxhenlBZnRlclBhaW50LCBsYXp5IH0gZnJvbSAnLi9sYXp5JztcbmV4cG9ydCB7IExhenlTdXNwZW5zZSB9IGZyb20gJy4vc3VzcGVuc2UnO1xuZXhwb3J0IHsgTGF6eVdhaXQsIHVzZUxhenlQaGFzZSB9IGZyb20gJy4vcGhhc2UnO1xuIl19

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/init.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/init.js ***!
  \*********************************************************/
/*! exports provided: LooselyLazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LooselyLazy", function() { return LooselyLazy; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/react-loosely-lazy/lib/esm/constants.js");
/* harmony import */ var _collect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collect */ "./node_modules/react-loosely-lazy/lib/esm/collect/index.js");
/* harmony import */ var _phase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phase */ "./node_modules/react-loosely-lazy/lib/esm/phase/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-loosely-lazy/lib/esm/utils/index.js");




var LooselyLazy = {
  init: function init(mode) {
    _constants__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].CURRENT_MODE = mode;
    Object(_phase__WEBPACK_IMPORTED_MODULE_2__["setCurrent"])(0);
    _phase__WEBPACK_IMPORTED_MODULE_2__["LISTENERS"].length = 0;

    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNodeEnvironment"])()) {
      Object(_collect__WEBPACK_IMPORTED_MODULE_1__["collect"])();
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbml0LnRzIl0sIm5hbWVzIjpbIlNFVFRJTkdTIiwiY29sbGVjdCIsIkxJU1RFTkVSUyIsInNldEN1cnJlbnQiLCJpc05vZGVFbnZpcm9ubWVudCIsIkxvb3NlbHlMYXp5IiwiaW5pdCIsIm1vZGUiLCJDVVJSRU5UX01PREUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFFBQVQsUUFBeUIsYUFBekI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLFdBQXhCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsVUFBcEIsUUFBc0MsU0FBdEM7QUFDQSxTQUFTQyxpQkFBVCxRQUFrQyxTQUFsQztBQUVBLE9BQU8sSUFBTUMsV0FBVyxHQUFHO0FBQ3pCQyxFQUFBQSxJQUFJLEVBQUUsY0FBQ0MsSUFBRCxFQUFnQztBQUNwQ1AsSUFBQUEsUUFBUSxDQUFDUSxZQUFULEdBQXdCRCxJQUF4QjtBQUNBSixJQUFBQSxVQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0FELElBQUFBLFNBQVMsQ0FBQ08sTUFBVixHQUFtQixDQUFuQjs7QUFFQSxRQUFJLENBQUNMLGlCQUFpQixFQUF0QixFQUEwQjtBQUN4QkgsTUFBQUEsT0FBTztBQUNSO0FBQ0Y7QUFUd0IsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRUSU5HUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbGxlY3QgfSBmcm9tICcuL2NvbGxlY3QnO1xuaW1wb3J0IHsgTElTVEVORVJTLCBzZXRDdXJyZW50IH0gZnJvbSAnLi9waGFzZSc7XG5pbXBvcnQgeyBpc05vZGVFbnZpcm9ubWVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgTG9vc2VseUxhenkgPSB7XG4gIGluaXQ6IChtb2RlOiAnSFlEUkFURScgfCAnUkVOREVSJykgPT4ge1xuICAgIFNFVFRJTkdTLkNVUlJFTlRfTU9ERSA9IG1vZGU7XG4gICAgc2V0Q3VycmVudCgwKTtcbiAgICBMSVNURU5FUlMubGVuZ3RoID0gMDtcblxuICAgIGlmICghaXNOb2RlRW52aXJvbm1lbnQoKSkge1xuICAgICAgY29sbGVjdCgpO1xuICAgIH1cbiAgfSxcbn07XG4iXX0=

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/lazy/components/client.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/lazy/components/client.js ***!
  \***************************************************************************/
/*! exports provided: createComponentClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentClient", function() { return createComponentClient; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./node_modules/react-loosely-lazy/lib/esm/constants.js");
/* harmony import */ var _suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../suspense */ "./node_modules/react-loosely-lazy/lib/esm/suspense/index.js");
/* harmony import */ var _phase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../phase */ "./node_modules/react-loosely-lazy/lib/esm/phase/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./node_modules/react-loosely-lazy/lib/esm/utils/index.js");
/* harmony import */ var _placeholders_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../placeholders/render */ "./node_modules/react-loosely-lazy/lib/esm/lazy/placeholders/render.js");
/* harmony import */ var _placeholders_hydrate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../placeholders/hydrate */ "./node_modules/react-loosely-lazy/lib/esm/lazy/placeholders/hydrate.js");







var createComponentClient = function createComponentClient(_ref) {
  var cacheId = _ref.cacheId,
      defer = _ref.defer,
      deferred = _ref.deferred,
      dataLazyId = _ref.dataLazyId,
      ssr = _ref.ssr;
  var isCached = Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["tryRequire"])(cacheId));

  if (!isCached) {
    deferred.promise.then(function () {
      isCached = true;
    });
  }

  var ResolvedLazy = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
    return deferred.promise;
  });
  return function (props) {
    if (isCached) {
      return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResolvedLazy, props)
      );
    }

    var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_suspense__WEBPACK_IMPORTED_MODULE_2__["LazySuspenseContext"]),
        setFallback = _useContext.setFallback;

    var isOwnPhase = Object(_phase__WEBPACK_IMPORTED_MODULE_3__["usePhaseSubscription"])(defer);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
      if (isOwnPhase) deferred.start().then(function () {
        return setFallback(null);
      });
    }, [isOwnPhase, setFallback]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
      var content = (_constants__WEBPACK_IMPORTED_MODULE_1__["COLLECTED"].get(dataLazyId) || []).shift();
      if (!content) return; // override Suspense fallback with magic input wrappers

      var component = _constants__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].CURRENT_MODE === _constants__WEBPACK_IMPORTED_MODULE_1__["MODE"].RENDER ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_placeholders_render__WEBPACK_IMPORTED_MODULE_5__["PlaceholderFallbackRender"], {
        id: dataLazyId,
        content: content
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_placeholders_hydrate__WEBPACK_IMPORTED_MODULE_6__["PlaceholderFallbackHydrate"], {
        id: dataLazyId,
        content: content
      });
      setFallback(component);
    }, [setFallback]);

    if (!ssr) {
      // if not SSR we can replace stale placeholder with suspense
      // as soon as the component mounts, so fallback becomes live
      // but we do not trigger hydration warnings
      Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setFallback(null);
      }, [setFallback]);
    }

    return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResolvedLazy, props)
    );
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9sYXp5L2NvbXBvbmVudHMvY2xpZW50LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlRWZmZWN0IiwiQ09MTEVDVEVEIiwiU0VUVElOR1MiLCJNT0RFIiwiTGF6eVN1c3BlbnNlQ29udGV4dCIsInVzZVBoYXNlU3Vic2NyaXB0aW9uIiwidHJ5UmVxdWlyZSIsIlBsYWNlaG9sZGVyRmFsbGJhY2tSZW5kZXIiLCJQbGFjZWhvbGRlckZhbGxiYWNrSHlkcmF0ZSIsImNyZWF0ZUNvbXBvbmVudENsaWVudCIsImNhY2hlSWQiLCJkZWZlciIsImRlZmVycmVkIiwiZGF0YUxhenlJZCIsInNzciIsImlzQ2FjaGVkIiwiQm9vbGVhbiIsInByb21pc2UiLCJ0aGVuIiwiUmVzb2x2ZWRMYXp5IiwibGF6eSIsInByb3BzIiwic2V0RmFsbGJhY2siLCJpc093blBoYXNlIiwic3RhcnQiLCJjb250ZW50IiwiZ2V0Iiwic2hpZnQiLCJjb21wb25lbnQiLCJDVVJSRU5UX01PREUiLCJSRU5ERVIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFVBQWhCLEVBQTRCQyxPQUE1QixFQUFxQ0MsU0FBckMsUUFBc0QsT0FBdEQ7QUFFQSxTQUFTQyxTQUFULEVBQW9CQyxRQUFwQixFQUE4QkMsSUFBOUIsUUFBMEMsaUJBQTFDO0FBQ0EsU0FBU0MsbUJBQVQsUUFBb0MsZ0JBQXBDO0FBQ0EsU0FBU0Msb0JBQVQsUUFBcUMsYUFBckM7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGFBQTNCO0FBQ0EsU0FBU0MseUJBQVQsUUFBMEMsd0JBQTFDO0FBQ0EsU0FBU0MsMEJBQVQsUUFBMkMseUJBQTNDO0FBRUEsT0FBTyxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLE9BTTFCO0FBQUEsTUFMVEMsT0FLUyxRQUxUQSxPQUtTO0FBQUEsTUFKVEMsS0FJUyxRQUpUQSxLQUlTO0FBQUEsTUFIVEMsUUFHUyxRQUhUQSxRQUdTO0FBQUEsTUFGVEMsVUFFUyxRQUZUQSxVQUVTO0FBQUEsTUFEVEMsR0FDUyxRQURUQSxHQUNTO0FBQ1QsTUFBSUMsUUFBUSxHQUFHQyxPQUFPLENBQUNWLFVBQVUsQ0FBQ0ksT0FBRCxDQUFYLENBQXRCOztBQUVBLE1BQUksQ0FBQ0ssUUFBTCxFQUFlO0FBQ2JILElBQUFBLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsSUFBakIsQ0FBc0IsWUFBTTtBQUMxQkgsTUFBQUEsUUFBUSxHQUFHLElBQVg7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsTUFBTUksWUFBWSxHQUFHdEIsS0FBSyxDQUFDdUIsSUFBTixDQUFXO0FBQUEsV0FBTVIsUUFBUSxDQUFDSyxPQUFmO0FBQUEsR0FBWCxDQUFyQjtBQUVBLFNBQU8sVUFBQ0ksS0FBRCxFQUFnQjtBQUNyQixRQUFJTixRQUFKLEVBQWM7QUFDWiwyQkFBTyxvQkFBQyxZQUFELEVBQWtCTSxLQUFsQjtBQUFQO0FBQ0Q7O0FBSG9CLHNCQUtHdkIsVUFBVSxDQUFDTSxtQkFBRCxDQUxiO0FBQUEsUUFLYmtCLFdBTGEsZUFLYkEsV0FMYTs7QUFNckIsUUFBTUMsVUFBVSxHQUFHbEIsb0JBQW9CLENBQUNNLEtBQUQsQ0FBdkM7QUFFQVosSUFBQUEsT0FBTyxDQUFDLFlBQU07QUFDWixVQUFJd0IsVUFBSixFQUFnQlgsUUFBUSxDQUFDWSxLQUFULEdBQWlCTixJQUFqQixDQUFzQjtBQUFBLGVBQU1JLFdBQVcsQ0FBQyxJQUFELENBQWpCO0FBQUEsT0FBdEI7QUFDakIsS0FGTSxFQUVKLENBQUNDLFVBQUQsRUFBYUQsV0FBYixDQUZJLENBQVA7QUFJQXZCLElBQUFBLE9BQU8sQ0FBQyxZQUFNO0FBQ1osVUFBTTBCLE9BQU8sR0FBRyxDQUFDeEIsU0FBUyxDQUFDeUIsR0FBVixDQUFjYixVQUFkLEtBQTZCLEVBQTlCLEVBQWtDYyxLQUFsQyxFQUFoQjtBQUVBLFVBQUksQ0FBQ0YsT0FBTCxFQUFjLE9BSEYsQ0FJWjs7QUFDQSxVQUFNRyxTQUFTLEdBQ2IxQixRQUFRLENBQUMyQixZQUFULEtBQTBCMUIsSUFBSSxDQUFDMkIsTUFBL0IsZ0JBQ0Usb0JBQUMseUJBQUQ7QUFBMkIsUUFBQSxFQUFFLEVBQUVqQixVQUEvQjtBQUEyQyxRQUFBLE9BQU8sRUFBRVk7QUFBcEQsUUFERixnQkFHRSxvQkFBQywwQkFBRDtBQUE0QixRQUFBLEVBQUUsRUFBRVosVUFBaEM7QUFBNEMsUUFBQSxPQUFPLEVBQUVZO0FBQXJELFFBSko7QUFNQUgsTUFBQUEsV0FBVyxDQUFDTSxTQUFELENBQVg7QUFDRCxLQVpNLEVBWUosQ0FBQ04sV0FBRCxDQVpJLENBQVA7O0FBY0EsUUFBSSxDQUFDUixHQUFMLEVBQVU7QUFDUjtBQUNBO0FBQ0E7QUFDQWQsTUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZHNCLFFBQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxPQUZRLEVBRU4sQ0FBQ0EsV0FBRCxDQUZNLENBQVQ7QUFHRDs7QUFFRCx5QkFBTyxvQkFBQyxZQUFELEVBQWtCRCxLQUFsQjtBQUFQO0FBQ0QsR0FwQ0Q7QUFxQ0QsQ0F0RE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDT0xMRUNURUQsIFNFVFRJTkdTLCBNT0RFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IExhenlTdXNwZW5zZUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdXNwZW5zZSc7XG5pbXBvcnQgeyB1c2VQaGFzZVN1YnNjcmlwdGlvbiB9IGZyb20gJy4uLy4uL3BoYXNlJztcbmltcG9ydCB7IHRyeVJlcXVpcmUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlckZhbGxiYWNrUmVuZGVyIH0gZnJvbSAnLi4vcGxhY2Vob2xkZXJzL3JlbmRlcic7XG5pbXBvcnQgeyBQbGFjZWhvbGRlckZhbGxiYWNrSHlkcmF0ZSB9IGZyb20gJy4uL3BsYWNlaG9sZGVycy9oeWRyYXRlJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbXBvbmVudENsaWVudCA9ICh7XG4gIGNhY2hlSWQsXG4gIGRlZmVyLFxuICBkZWZlcnJlZCxcbiAgZGF0YUxhenlJZCxcbiAgc3NyLFxufTogYW55KSA9PiB7XG4gIGxldCBpc0NhY2hlZCA9IEJvb2xlYW4odHJ5UmVxdWlyZShjYWNoZUlkKSk7XG5cbiAgaWYgKCFpc0NhY2hlZCkge1xuICAgIGRlZmVycmVkLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBpc0NhY2hlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBSZXNvbHZlZExhenkgPSBSZWFjdC5sYXp5KCgpID0+IGRlZmVycmVkLnByb21pc2UpO1xuXG4gIHJldHVybiAocHJvcHM6IGFueSkgPT4ge1xuICAgIGlmIChpc0NhY2hlZCkge1xuICAgICAgcmV0dXJuIDxSZXNvbHZlZExhenkgey4uLnByb3BzfSAvPjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHNldEZhbGxiYWNrIH0gPSB1c2VDb250ZXh0KExhenlTdXNwZW5zZUNvbnRleHQpO1xuICAgIGNvbnN0IGlzT3duUGhhc2UgPSB1c2VQaGFzZVN1YnNjcmlwdGlvbihkZWZlcik7XG5cbiAgICB1c2VNZW1vKCgpID0+IHtcbiAgICAgIGlmIChpc093blBoYXNlKSBkZWZlcnJlZC5zdGFydCgpLnRoZW4oKCkgPT4gc2V0RmFsbGJhY2sobnVsbCkpO1xuICAgIH0sIFtpc093blBoYXNlLCBzZXRGYWxsYmFja10pO1xuXG4gICAgdXNlTWVtbygoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gKENPTExFQ1RFRC5nZXQoZGF0YUxhenlJZCkgfHwgW10pLnNoaWZ0KCk7XG5cbiAgICAgIGlmICghY29udGVudCkgcmV0dXJuO1xuICAgICAgLy8gb3ZlcnJpZGUgU3VzcGVuc2UgZmFsbGJhY2sgd2l0aCBtYWdpYyBpbnB1dCB3cmFwcGVyc1xuICAgICAgY29uc3QgY29tcG9uZW50ID1cbiAgICAgICAgU0VUVElOR1MuQ1VSUkVOVF9NT0RFID09PSBNT0RFLlJFTkRFUiA/IChcbiAgICAgICAgICA8UGxhY2Vob2xkZXJGYWxsYmFja1JlbmRlciBpZD17ZGF0YUxhenlJZH0gY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UGxhY2Vob2xkZXJGYWxsYmFja0h5ZHJhdGUgaWQ9e2RhdGFMYXp5SWR9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICk7XG4gICAgICBzZXRGYWxsYmFjayhjb21wb25lbnQpO1xuICAgIH0sIFtzZXRGYWxsYmFja10pO1xuXG4gICAgaWYgKCFzc3IpIHtcbiAgICAgIC8vIGlmIG5vdCBTU1Igd2UgY2FuIHJlcGxhY2Ugc3RhbGUgcGxhY2Vob2xkZXIgd2l0aCBzdXNwZW5zZVxuICAgICAgLy8gYXMgc29vbiBhcyB0aGUgY29tcG9uZW50IG1vdW50cywgc28gZmFsbGJhY2sgYmVjb21lcyBsaXZlXG4gICAgICAvLyBidXQgd2UgZG8gbm90IHRyaWdnZXIgaHlkcmF0aW9uIHdhcm5pbmdzXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRGYWxsYmFjayhudWxsKTtcbiAgICAgIH0sIFtzZXRGYWxsYmFja10pO1xuICAgIH1cblxuICAgIHJldHVybiA8UmVzb2x2ZWRMYXp5IHsuLi5wcm9wc30gLz47XG4gIH07XG59O1xuIl19

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/lazy/components/server.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/lazy/components/server.js ***!
  \***************************************************************************/
/*! exports provided: createComponentServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentServer", function() { return createComponentServer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./node_modules/react-loosely-lazy/lib/esm/utils/index.js");
/* harmony import */ var _suspense_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../suspense/context */ "./node_modules/react-loosely-lazy/lib/esm/suspense/context.js");



var createComponentServer = function createComponentServer(_ref) {
  var ssr = _ref.ssr,
      loader = _ref.loader,
      cacheId = _ref.cacheId,
      dataLazyId = _ref.dataLazyId;
  return function (props) {
    var Resolved = ssr ? Object(_utils__WEBPACK_IMPORTED_MODULE_1__["tryRequire"])(cacheId) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getExport"])(loader()) : null;

    var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_suspense_context__WEBPACK_IMPORTED_MODULE_2__["LazySuspenseContext"]),
        fallback = _useContext.fallback;

    return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        "data-lazy-begin": dataLazyId
      }), Resolved ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Resolved, props) : fallback, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        "data-lazy-end": dataLazyId
      }))
    );
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9sYXp5L2NvbXBvbmVudHMvc2VydmVyLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ0cnlSZXF1aXJlIiwiZ2V0RXhwb3J0IiwiTGF6eVN1c3BlbnNlQ29udGV4dCIsImNyZWF0ZUNvbXBvbmVudFNlcnZlciIsInNzciIsImxvYWRlciIsImNhY2hlSWQiLCJkYXRhTGF6eUlkIiwicHJvcHMiLCJSZXNvbHZlZCIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixRQUFrQyxPQUFsQztBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLFNBQXJCLFFBQXNDLGFBQXRDO0FBQ0EsU0FBU0MsbUJBQVQsUUFBb0Msd0JBQXBDO0FBRUEsT0FBTyxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCO0FBQUEsTUFDbkNDLEdBRG1DLFFBQ25DQSxHQURtQztBQUFBLE1BRW5DQyxNQUZtQyxRQUVuQ0EsTUFGbUM7QUFBQSxNQUduQ0MsT0FIbUMsUUFHbkNBLE9BSG1DO0FBQUEsTUFJbkNDLFVBSm1DLFFBSW5DQSxVQUptQztBQUFBLFNBSzFCLFVBQUNDLEtBQUQsRUFBZ0I7QUFDekIsUUFBTUMsUUFBUSxHQUFHTCxHQUFHLEdBQUdKLFVBQVUsQ0FBQ00sT0FBRCxDQUFWLElBQXVCTCxTQUFTLENBQUNJLE1BQU0sRUFBUCxDQUFuQyxHQUFnRCxJQUFwRTs7QUFEeUIsc0JBRUpOLFVBQVUsQ0FBQ0csbUJBQUQsQ0FGTjtBQUFBLFFBRWpCUSxRQUZpQixlQUVqQkEsUUFGaUI7O0FBSXpCLHlCQUNFLHVEQUNFO0FBQU8sUUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQiwyQkFBaUJIO0FBQXRDLFFBREYsRUFFR0UsUUFBUSxnQkFBRyxvQkFBQyxRQUFELEVBQWNELEtBQWQsQ0FBSCxHQUE2QkUsUUFGeEMsZUFHRTtBQUFPLFFBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIseUJBQWVIO0FBQXBDLFFBSEY7QUFERjtBQU9ELEdBaEJvQztBQUFBLENBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0cnlSZXF1aXJlLCBnZXRFeHBvcnQgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBMYXp5U3VzcGVuc2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3VzcGVuc2UvY29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb21wb25lbnRTZXJ2ZXIgPSAoe1xuICBzc3IsXG4gIGxvYWRlcixcbiAgY2FjaGVJZCxcbiAgZGF0YUxhenlJZCxcbn06IGFueSkgPT4gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgUmVzb2x2ZWQgPSBzc3IgPyB0cnlSZXF1aXJlKGNhY2hlSWQpIHx8IGdldEV4cG9ydChsb2FkZXIoKSkgOiBudWxsO1xuICBjb25zdCB7IGZhbGxiYWNrIH0gPSB1c2VDb250ZXh0KExhenlTdXNwZW5zZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGF0YS1sYXp5LWJlZ2luPXtkYXRhTGF6eUlkfSAvPlxuICAgICAge1Jlc29sdmVkID8gPFJlc29sdmVkIHsuLi5wcm9wc30gLz4gOiBmYWxsYmFja31cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGF0YS1sYXp5LWVuZD17ZGF0YUxhenlJZH0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXX0=

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/lazy/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/lazy/index.js ***!
  \***************************************************************/
/*! exports provided: DEFAULT_OPTIONS, lazyForPaint, lazyAfterPaint, lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_OPTIONS", function() { return DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyForPaint", function() { return lazyForPaint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyAfterPaint", function() { return lazyAfterPaint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return lazy; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/react-loosely-lazy/lib/esm/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/react-loosely-lazy/lib/esm/utils/index.js");
/* harmony import */ var _components_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/server */ "./node_modules/react-loosely-lazy/lib/esm/lazy/components/server.js");
/* harmony import */ var _components_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/client */ "./node_modules/react-loosely-lazy/lib/esm/lazy/components/client.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var createDeferred = function createDeferred(loader) {
  var resolve;
  var result;
  var deferred = {
    promise: new Promise(function (r) {
      resolve = function resolve(m) {
        var withDefault;
        deferred.result = m;

        if (!m.default) {
          withDefault = {
            default: m
          };
        }

        r(withDefault ? withDefault : m);
      };
    }),
    result: result,
    start: function start() {
      return loader().then(resolve);
    }
  };
  return deferred;
};

var lazyProxy = function lazyProxy(loader) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? true : _ref$ssr,
      _ref$defer = _ref.defer,
      defer = _ref$defer === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_0__["PHASE"].PAINT : _ref$defer,
      _ref$getCacheId = _ref.getCacheId,
      getCacheId = _ref$getCacheId === void 0 ? function () {
    return '';
  } : _ref$getCacheId,
      _ref$moduleId = _ref.moduleId,
      moduleId = _ref$moduleId === void 0 ? '' : _ref$moduleId;

  var isServer = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNodeEnvironment"])();
  var cacheId = getCacheId();
  var dataLazyId = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["hash"])(moduleId);
  var LazyComponent = isServer ? Object(_components_server__WEBPACK_IMPORTED_MODULE_2__["createComponentServer"])({
    ssr: ssr,
    loader: loader,
    cacheId: cacheId,
    dataLazyId: dataLazyId
  }) : Object(_components_client__WEBPACK_IMPORTED_MODULE_3__["createComponentClient"])({
    ssr: ssr,
    defer: defer,
    deferred: createDeferred(loader),
    cacheId: cacheId,
    dataLazyId: dataLazyId
  });
  LazyComponent.displayName = "Lazy(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["displayNameFromId"])(moduleId), ")");
  /**
   * This will eventually be used to render preload link tags on transition.
   * Currently not working as we need a way for the client to be able to know the manifest[moduleId].file
   * without having to load the manifest on the client as it could be huge.
   */

  LazyComponent.preload = function () {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["tryRequire"])(cacheId)) {
      return;
    }

    var head = document.querySelector('head');

    if (!head) {
      return;
    }

    var link = document.createElement('link');
    link.rel = 'preload'; // TODO add href to link

    head.appendChild(link);
  };

  LazyComponent.getBundleUrl = function (manifest) {
    if (!manifest[moduleId]) {
      return undefined;
    }

    return manifest[moduleId].publicPath;
  };

  return LazyComponent;
};

var DEFAULT_OPTIONS = {
  lazyForPaint: {
    ssr: true,
    defer: _constants__WEBPACK_IMPORTED_MODULE_0__["PHASE"].PAINT
  },
  lazyAfterPaint: {
    ssr: true,
    defer: _constants__WEBPACK_IMPORTED_MODULE_0__["PHASE"].AFTER_PAINT
  },
  lazy: {
    ssr: false,
    defer: _constants__WEBPACK_IMPORTED_MODULE_0__["PHASE"].LAZY
  }
};
var lazyForPaint = function lazyForPaint(loader, opts) {
  return lazyProxy(loader, _objectSpread({}, DEFAULT_OPTIONS.lazyForPaint, {}, opts || {}));
};
var lazyAfterPaint = function lazyAfterPaint(loader, opts) {
  return lazyProxy(loader, _objectSpread({}, DEFAULT_OPTIONS.lazyAfterPaint, {}, opts || {}));
};
var lazy = function lazy(loader, opts) {
  return lazyProxy(loader, _objectSpread({}, DEFAULT_OPTIONS.lazy, {}, opts || {}));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXp5L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQSEFTRSIsImhhc2giLCJ0cnlSZXF1aXJlIiwiZGlzcGxheU5hbWVGcm9tSWQiLCJpc05vZGVFbnZpcm9ubWVudCIsImNyZWF0ZUNvbXBvbmVudFNlcnZlciIsImNyZWF0ZUNvbXBvbmVudENsaWVudCIsImNyZWF0ZURlZmVycmVkIiwibG9hZGVyIiwicmVzb2x2ZSIsInJlc3VsdCIsImRlZmVycmVkIiwicHJvbWlzZSIsIlByb21pc2UiLCJyIiwibSIsIndpdGhEZWZhdWx0IiwiZGVmYXVsdCIsInN0YXJ0IiwidGhlbiIsImxhenlQcm94eSIsInNzciIsImRlZmVyIiwiUEFJTlQiLCJnZXRDYWNoZUlkIiwibW9kdWxlSWQiLCJpc1NlcnZlciIsImNhY2hlSWQiLCJkYXRhTGF6eUlkIiwiTGF6eUNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJlbG9hZCIsImhlYWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsaW5rIiwiY3JlYXRlRWxlbWVudCIsInJlbCIsImFwcGVuZENoaWxkIiwiZ2V0QnVuZGxlVXJsIiwibWFuaWZlc3QiLCJ1bmRlZmluZWQiLCJwdWJsaWNQYXRoIiwiREVGQVVMVF9PUFRJT05TIiwibGF6eUZvclBhaW50IiwibGF6eUFmdGVyUGFpbnQiLCJBRlRFUl9QQUlOVCIsImxhenkiLCJMQVpZIiwib3B0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsU0FBU0EsS0FBVCxRQUFzQixjQUF0QjtBQUVBLFNBQ0VDLElBREYsRUFFRUMsVUFGRixFQUdFQyxpQkFIRixFQUlFQyxpQkFKRixRQUtPLFVBTFA7QUFNQSxTQUFTQyxxQkFBVCxRQUFzQyxxQkFBdEM7QUFDQSxTQUFTQyxxQkFBVCxRQUFzQyxxQkFBdEM7O0FBaUNBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsTUFBRCxFQUFvQjtBQUN6QyxNQUFJQyxPQUFKO0FBQ0EsTUFBSUMsTUFBSjtBQUNBLE1BQU1DLFFBQVEsR0FBRztBQUNmQyxJQUFBQSxPQUFPLEVBQUUsSUFBSUMsT0FBSixDQUFvQyxVQUFBQyxDQUFDLEVBQUk7QUFDaERMLE1BQUFBLE9BQU8sR0FBRyxpQkFBQ00sQ0FBRCxFQUFZO0FBQ3BCLFlBQUlDLFdBQUo7QUFDQUwsUUFBQUEsUUFBUSxDQUFDRCxNQUFULEdBQWtCSyxDQUFsQjs7QUFFQSxZQUFJLENBQUNBLENBQUMsQ0FBQ0UsT0FBUCxFQUFnQjtBQUNkRCxVQUFBQSxXQUFXLEdBQUc7QUFBRUMsWUFBQUEsT0FBTyxFQUFFRjtBQUFYLFdBQWQ7QUFDRDs7QUFFREQsUUFBQUEsQ0FBQyxDQUFDRSxXQUFXLEdBQUdBLFdBQUgsR0FBaUJELENBQTdCLENBQUQ7QUFDRCxPQVREO0FBVUQsS0FYUSxDQURNO0FBYWZMLElBQUFBLE1BQU0sRUFBTkEsTUFiZTtBQWNmUSxJQUFBQSxLQUFLLEVBQUU7QUFBQSxhQUFNVixNQUFNLEdBQUdXLElBQVQsQ0FBY1YsT0FBZCxDQUFOO0FBQUE7QUFkUSxHQUFqQjtBQWlCQSxTQUFPRSxRQUFQO0FBQ0QsQ0FyQkQ7O0FBdUJBLElBQU1TLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQ2hCWixNQURnQixFQVFFO0FBQUEsaUZBREwsRUFDSztBQUFBLHNCQUxoQmEsR0FLZ0I7QUFBQSxNQUxoQkEsR0FLZ0IseUJBTFYsSUFLVTtBQUFBLHdCQUpoQkMsS0FJZ0I7QUFBQSxNQUpoQkEsS0FJZ0IsMkJBSlJ0QixLQUFLLENBQUN1QixLQUlFO0FBQUEsNkJBSGhCQyxVQUdnQjtBQUFBLE1BSGhCQSxVQUdnQixnQ0FISDtBQUFBLFdBQU0sRUFBTjtBQUFBLEdBR0c7QUFBQSwyQkFGaEJDLFFBRWdCO0FBQUEsTUFGaEJBLFFBRWdCLDhCQUZMLEVBRUs7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR3RCLGlCQUFpQixFQUFsQztBQUNBLE1BQU11QixPQUFPLEdBQUdILFVBQVUsRUFBMUI7QUFDQSxNQUFNSSxVQUFVLEdBQUczQixJQUFJLENBQUN3QixRQUFELENBQXZCO0FBRUEsTUFBTUksYUFBa0IsR0FBR0gsUUFBUSxHQUMvQnJCLHFCQUFxQixDQUFDO0FBQ3BCZ0IsSUFBQUEsR0FBRyxFQUFIQSxHQURvQjtBQUVwQmIsSUFBQUEsTUFBTSxFQUFOQSxNQUZvQjtBQUdwQm1CLElBQUFBLE9BQU8sRUFBUEEsT0FIb0I7QUFJcEJDLElBQUFBLFVBQVUsRUFBVkE7QUFKb0IsR0FBRCxDQURVLEdBTy9CdEIscUJBQXFCLENBQUM7QUFDcEJlLElBQUFBLEdBQUcsRUFBSEEsR0FEb0I7QUFFcEJDLElBQUFBLEtBQUssRUFBTEEsS0FGb0I7QUFHcEJYLElBQUFBLFFBQVEsRUFBRUosY0FBYyxDQUFDQyxNQUFELENBSEo7QUFJcEJtQixJQUFBQSxPQUFPLEVBQVBBLE9BSm9CO0FBS3BCQyxJQUFBQSxVQUFVLEVBQVZBO0FBTG9CLEdBQUQsQ0FQekI7QUFlQUMsRUFBQUEsYUFBYSxDQUFDQyxXQUFkLGtCQUFvQzNCLGlCQUFpQixDQUFDc0IsUUFBRCxDQUFyRDtBQUVBOzs7Ozs7QUFLQUksRUFBQUEsYUFBYSxDQUFDRSxPQUFkLEdBQXdCLFlBQU07QUFDNUIsUUFBSTdCLFVBQVUsQ0FBQ3lCLE9BQUQsQ0FBZCxFQUF5QjtBQUN2QjtBQUNEOztBQUVELFFBQU1LLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7O0FBRUEsUUFBSSxDQUFDRixJQUFMLEVBQVc7QUFDVDtBQUNEOztBQUVELFFBQU1HLElBQUksR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFFQUQsSUFBQUEsSUFBSSxDQUFDRSxHQUFMLEdBQVcsU0FBWCxDQWI0QixDQWU1Qjs7QUFDQUwsSUFBQUEsSUFBSSxDQUFDTSxXQUFMLENBQWlCSCxJQUFqQjtBQUNELEdBakJEOztBQW1CQU4sRUFBQUEsYUFBYSxDQUFDVSxZQUFkLEdBQTZCLFVBQUNDLFFBQUQsRUFBd0I7QUFDbkQsUUFBSSxDQUFDQSxRQUFRLENBQUNmLFFBQUQsQ0FBYixFQUF5QjtBQUN2QixhQUFPZ0IsU0FBUDtBQUNEOztBQUVELFdBQU9ELFFBQVEsQ0FBQ2YsUUFBRCxDQUFSLENBQW1CaUIsVUFBMUI7QUFDRCxHQU5EOztBQVFBLFNBQU9iLGFBQVA7QUFDRCxDQS9ERDs7QUFpRUEsT0FBTyxJQUFNYyxlQUVaLEdBQUc7QUFDRkMsRUFBQUEsWUFBWSxFQUFFO0FBQUV2QixJQUFBQSxHQUFHLEVBQUUsSUFBUDtBQUFhQyxJQUFBQSxLQUFLLEVBQUV0QixLQUFLLENBQUN1QjtBQUExQixHQURaO0FBRUZzQixFQUFBQSxjQUFjLEVBQUU7QUFBRXhCLElBQUFBLEdBQUcsRUFBRSxJQUFQO0FBQWFDLElBQUFBLEtBQUssRUFBRXRCLEtBQUssQ0FBQzhDO0FBQTFCLEdBRmQ7QUFHRkMsRUFBQUEsSUFBSSxFQUFFO0FBQUUxQixJQUFBQSxHQUFHLEVBQUUsS0FBUDtBQUFjQyxJQUFBQSxLQUFLLEVBQUV0QixLQUFLLENBQUNnRDtBQUEzQjtBQUhKLENBRkc7QUFRUCxPQUFPLElBQU1KLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNwQyxNQUFELEVBQWlCeUMsSUFBakI7QUFBQSxTQUMxQjdCLFNBQVMsQ0FBQ1osTUFBRCxvQkFDSm1DLGVBQWUsQ0FBQ0MsWUFEWixNQUVISyxJQUFJLElBQUksRUFGTCxFQURpQjtBQUFBLENBQXJCO0FBTVAsT0FBTyxJQUFNSixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNyQyxNQUFELEVBQWlCeUMsSUFBakI7QUFBQSxTQUM1QjdCLFNBQVMsQ0FBQ1osTUFBRCxvQkFDSm1DLGVBQWUsQ0FBQ0UsY0FEWixNQUVISSxJQUFJLElBQUksRUFGTCxFQURtQjtBQUFBLENBQXZCO0FBTVAsT0FBTyxJQUFNRixJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDdkMsTUFBRCxFQUFpQnlDLElBQWpCO0FBQUEsU0FDbEI3QixTQUFTLENBQUNaLE1BQUQsb0JBQ0ptQyxlQUFlLENBQUNJLElBRFosTUFFSEUsSUFBSSxJQUFJLEVBRkwsRUFEUztBQUFBLENBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUEhBU0UgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5pbXBvcnQge1xuICBoYXNoLFxuICB0cnlSZXF1aXJlLFxuICBkaXNwbGF5TmFtZUZyb21JZCxcbiAgaXNOb2RlRW52aXJvbm1lbnQsXG59IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudFNlcnZlciB9IGZyb20gJy4vY29tcG9uZW50cy9zZXJ2ZXInO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50Q2xpZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NsaWVudCc7XG5cbnR5cGUgSW1wb3J0RGVmYXVsdENvbXBvbmVudCA9IHtcbiAgZGVmYXVsdDogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+O1xufTtcbnR5cGUgTG9hZGVyID0gKCkgPT4gUHJvbWlzZTxJbXBvcnREZWZhdWx0Q29tcG9uZW50PjtcblxudHlwZSBNYW5pZmVzdCA9IHsgW2tleTogc3RyaW5nXTogQnVuZGxlIH07XG5cbnR5cGUgQnVuZGxlID0ge1xuICBpZDogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgZmlsZTogc3RyaW5nO1xuICBwdWJsaWNQYXRoOiBzdHJpbmc7XG59O1xuXG50eXBlIE9wdGlvbnMgPSB7XG4gIC8vIFNob3VsZCBiZSByZW5kZXJlZCBvbiBTU1JcbiAgLy8gaWYgZmFsc2UgcmVuZGVycyBmYWxsYmFjayBvbiBTU1JcbiAgc3NyPzogYm9vbGVhbjtcblxuICBkZWZlcj86IG51bWJlcjtcblxuICBnZXRDYWNoZUlkPzogKCkgPT4gc3RyaW5nO1xuXG4gIG1vZHVsZUlkPzogc3RyaW5nO1xufTtcblxudHlwZSBMYXp5Q29tcG9uZW50ID0gUmVhY3QuQ29tcG9uZW50VHlwZSAmIHtcbiAgcHJlbG9hZDogKCkgPT4gdm9pZDtcbiAgZ2V0QnVuZGxlVXJsOiAobWFuaWZlc3Q6IE1hbmlmZXN0KSA9PiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBjcmVhdGVEZWZlcnJlZCA9IChsb2FkZXI6IExvYWRlcikgPT4ge1xuICBsZXQgcmVzb2x2ZTogYW55O1xuICBsZXQgcmVzdWx0OiBhbnk7XG4gIGNvbnN0IGRlZmVycmVkID0ge1xuICAgIHByb21pc2U6IG5ldyBQcm9taXNlPEltcG9ydERlZmF1bHRDb21wb25lbnQ+KHIgPT4ge1xuICAgICAgcmVzb2x2ZSA9IChtOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IHdpdGhEZWZhdWx0O1xuICAgICAgICBkZWZlcnJlZC5yZXN1bHQgPSBtO1xuXG4gICAgICAgIGlmICghbS5kZWZhdWx0KSB7XG4gICAgICAgICAgd2l0aERlZmF1bHQgPSB7IGRlZmF1bHQ6IG0gfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHIod2l0aERlZmF1bHQgPyB3aXRoRGVmYXVsdCA6IG0pO1xuICAgICAgfTtcbiAgICB9KSxcbiAgICByZXN1bHQsXG4gICAgc3RhcnQ6ICgpID0+IGxvYWRlcigpLnRoZW4ocmVzb2x2ZSksXG4gIH07XG5cbiAgcmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgbGF6eVByb3h5ID0gKFxuICBsb2FkZXI6IExvYWRlcixcbiAge1xuICAgIHNzciA9IHRydWUsXG4gICAgZGVmZXIgPSBQSEFTRS5QQUlOVCxcbiAgICBnZXRDYWNoZUlkID0gKCkgPT4gJycsXG4gICAgbW9kdWxlSWQgPSAnJyxcbiAgfTogT3B0aW9ucyA9IHt9XG4pOiBMYXp5Q29tcG9uZW50ID0+IHtcbiAgY29uc3QgaXNTZXJ2ZXIgPSBpc05vZGVFbnZpcm9ubWVudCgpO1xuICBjb25zdCBjYWNoZUlkID0gZ2V0Q2FjaGVJZCgpO1xuICBjb25zdCBkYXRhTGF6eUlkID0gaGFzaChtb2R1bGVJZCk7XG5cbiAgY29uc3QgTGF6eUNvbXBvbmVudDogYW55ID0gaXNTZXJ2ZXJcbiAgICA/IGNyZWF0ZUNvbXBvbmVudFNlcnZlcih7XG4gICAgICAgIHNzcixcbiAgICAgICAgbG9hZGVyLFxuICAgICAgICBjYWNoZUlkLFxuICAgICAgICBkYXRhTGF6eUlkLFxuICAgICAgfSlcbiAgICA6IGNyZWF0ZUNvbXBvbmVudENsaWVudCh7XG4gICAgICAgIHNzcixcbiAgICAgICAgZGVmZXIsXG4gICAgICAgIGRlZmVycmVkOiBjcmVhdGVEZWZlcnJlZChsb2FkZXIpLFxuICAgICAgICBjYWNoZUlkLFxuICAgICAgICBkYXRhTGF6eUlkLFxuICAgICAgfSk7XG5cbiAgTGF6eUNvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGBMYXp5KCR7ZGlzcGxheU5hbWVGcm9tSWQobW9kdWxlSWQpfSlgO1xuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgZXZlbnR1YWxseSBiZSB1c2VkIHRvIHJlbmRlciBwcmVsb2FkIGxpbmsgdGFncyBvbiB0cmFuc2l0aW9uLlxuICAgKiBDdXJyZW50bHkgbm90IHdvcmtpbmcgYXMgd2UgbmVlZCBhIHdheSBmb3IgdGhlIGNsaWVudCB0byBiZSBhYmxlIHRvIGtub3cgdGhlIG1hbmlmZXN0W21vZHVsZUlkXS5maWxlXG4gICAqIHdpdGhvdXQgaGF2aW5nIHRvIGxvYWQgdGhlIG1hbmlmZXN0IG9uIHRoZSBjbGllbnQgYXMgaXQgY291bGQgYmUgaHVnZS5cbiAgICovXG4gIExhenlDb21wb25lbnQucHJlbG9hZCA9ICgpID0+IHtcbiAgICBpZiAodHJ5UmVxdWlyZShjYWNoZUlkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG5cbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgbGluay5yZWwgPSAncHJlbG9hZCc7XG5cbiAgICAvLyBUT0RPIGFkZCBocmVmIHRvIGxpbmtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICB9O1xuXG4gIExhenlDb21wb25lbnQuZ2V0QnVuZGxlVXJsID0gKG1hbmlmZXN0OiBNYW5pZmVzdCkgPT4ge1xuICAgIGlmICghbWFuaWZlc3RbbW9kdWxlSWRdKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBtYW5pZmVzdFttb2R1bGVJZF0ucHVibGljUGF0aDtcbiAgfTtcblxuICByZXR1cm4gTGF6eUNvbXBvbmVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX09QVElPTlM6IHtcbiAgW2tleTogc3RyaW5nXTogeyBzc3I6IGJvb2xlYW47IGRlZmVyOiBudW1iZXIgfTtcbn0gPSB7XG4gIGxhenlGb3JQYWludDogeyBzc3I6IHRydWUsIGRlZmVyOiBQSEFTRS5QQUlOVCB9LFxuICBsYXp5QWZ0ZXJQYWludDogeyBzc3I6IHRydWUsIGRlZmVyOiBQSEFTRS5BRlRFUl9QQUlOVCB9LFxuICBsYXp5OiB7IHNzcjogZmFsc2UsIGRlZmVyOiBQSEFTRS5MQVpZIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbGF6eUZvclBhaW50ID0gKGxvYWRlcjogTG9hZGVyLCBvcHRzPzogYW55KSA9PlxuICBsYXp5UHJveHkobG9hZGVyLCB7XG4gICAgLi4uREVGQVVMVF9PUFRJT05TLmxhenlGb3JQYWludCxcbiAgICAuLi4ob3B0cyB8fCB7fSksXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgbGF6eUFmdGVyUGFpbnQgPSAobG9hZGVyOiBMb2FkZXIsIG9wdHM/OiBhbnkpID0+XG4gIGxhenlQcm94eShsb2FkZXIsIHtcbiAgICAuLi5ERUZBVUxUX09QVElPTlMubGF6eUFmdGVyUGFpbnQsXG4gICAgLi4uKG9wdHMgfHwge30pLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGxhenkgPSAobG9hZGVyOiBMb2FkZXIsIG9wdHM/OiBhbnkpID0+XG4gIGxhenlQcm94eShsb2FkZXIsIHtcbiAgICAuLi5ERUZBVUxUX09QVElPTlMubGF6eSxcbiAgICAuLi4ob3B0cyB8fCB7fSksXG4gIH0pO1xuIl19

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/lazy/placeholders/hydrate.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/lazy/placeholders/hydrate.js ***!
  \******************************************************************************/
/*! exports provided: PlaceholderFallbackHydrate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderFallbackHydrate", function() { return PlaceholderFallbackHydrate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var PlaceholderFallbackHydrate = function PlaceholderFallbackHydrate(_ref) {
  var id = _ref.id,
      content = _ref.content;
  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "hidden",
      "data-lazy-begin": id
    }), content.map(function (el, i) {
      var _el$tagName = el.tagName,
          tagName = _el$tagName === void 0 ? '' : _el$tagName,
          _el$childNodes = el.childNodes,
          childNodes = _el$childNodes === void 0 ? [] : _el$childNodes;
      var props = {
        key: String(i)
      }; // text node

      if (!tagName) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], props, el.textContent); // childless tag

      if (!childNodes.length) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tagName.toLowerCase(), props); // tag with content

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tagName.toLowerCase(), _objectSpread({}, props, {
        dangerouslySetInnerHTML: {
          __html: ''
        },
        suppressHydrationWarning: true
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "hidden",
      "data-lazy-end": id
    }))
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9sYXp5L3BsYWNlaG9sZGVycy9oeWRyYXRlLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwiUGxhY2Vob2xkZXJGYWxsYmFja0h5ZHJhdGUiLCJpZCIsImNvbnRlbnQiLCJtYXAiLCJlbCIsImkiLCJ0YWdOYW1lIiwiY2hpbGROb2RlcyIsInByb3BzIiwia2V5IiwiU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInN1cHByZXNzSHlkcmF0aW9uV2FybmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsUUFBZ0MsT0FBaEM7QUFFQSxPQUFPLElBQU1DLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsT0FBMEI7QUFBQSxNQUF2QkMsRUFBdUIsUUFBdkJBLEVBQXVCO0FBQUEsTUFBbkJDLE9BQW1CLFFBQW5CQSxPQUFtQjtBQUNsRSx1QkFDRSx1REFDRTtBQUFPLE1BQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIseUJBQWlCRDtBQUF0QyxNQURGLEVBRUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNDLEVBQUQsRUFBa0JDLENBQWxCLEVBQWdDO0FBQUEsd0JBQ0RELEVBREMsQ0FDbkNFLE9BRG1DO0FBQUEsVUFDbkNBLE9BRG1DLDRCQUN6QixFQUR5QjtBQUFBLDJCQUNERixFQURDLENBQ3JCRyxVQURxQjtBQUFBLFVBQ3JCQSxVQURxQiwrQkFDUixFQURRO0FBRTNDLFVBQU1DLEtBQUssR0FBRztBQUFFQyxRQUFBQSxHQUFHLEVBQUVDLE1BQU0sQ0FBQ0wsQ0FBRDtBQUFiLE9BQWQsQ0FGMkMsQ0FHM0M7O0FBQ0EsVUFBSSxDQUFDQyxPQUFMLEVBQ0UsT0FBT1IsS0FBSyxDQUFDYSxhQUFOLENBQW9CWixRQUFwQixFQUE4QlMsS0FBOUIsRUFBcUNKLEVBQUUsQ0FBQ1EsV0FBeEMsQ0FBUCxDQUx5QyxDQU8zQzs7QUFDQSxVQUFJLENBQUNMLFVBQVUsQ0FBQ00sTUFBaEIsRUFDRSxPQUFPZixLQUFLLENBQUNhLGFBQU4sQ0FBb0JMLE9BQU8sQ0FBQ1EsV0FBUixFQUFwQixFQUEyQ04sS0FBM0MsQ0FBUCxDQVR5QyxDQVczQzs7QUFDQSxhQUFPVixLQUFLLENBQUNhLGFBQU4sQ0FBb0JMLE9BQU8sQ0FBQ1EsV0FBUixFQUFwQixvQkFDRk4sS0FERTtBQUVMTyxRQUFBQSx1QkFBdUIsRUFBRTtBQUFFQyxVQUFBQSxNQUFNLEVBQUU7QUFBVixTQUZwQjtBQUdMQyxRQUFBQSx3QkFBd0IsRUFBRTtBQUhyQixTQUFQO0FBS0QsS0FqQkEsQ0FGSCxlQW9CRTtBQUFPLE1BQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsdUJBQWVoQjtBQUFwQyxNQXBCRjtBQURGO0FBd0JELENBekJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgUGxhY2Vob2xkZXJGYWxsYmFja0h5ZHJhdGUgPSAoeyBpZCwgY29udGVudCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkYXRhLWxhenktYmVnaW49e2lkfSAvPlxuICAgICAge2NvbnRlbnQubWFwKChlbDogSFRNTEVsZW1lbnQsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCB7IHRhZ05hbWUgPSAnJywgY2hpbGROb2RlcyA9IFtdIH0gPSBlbDtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7IGtleTogU3RyaW5nKGkpIH07XG4gICAgICAgIC8vIHRleHQgbm9kZVxuICAgICAgICBpZiAoIXRhZ05hbWUpXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHByb3BzLCBlbC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgLy8gY2hpbGRsZXNzIHRhZ1xuICAgICAgICBpZiAoIWNoaWxkTm9kZXMubGVuZ3RoKVxuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUudG9Mb3dlckNhc2UoKSwgcHJvcHMpO1xuXG4gICAgICAgIC8vIHRhZyB3aXRoIGNvbnRlbnRcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZS50b0xvd2VyQ2FzZSgpLCB7XG4gICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiAnJyB9LFxuICAgICAgICAgIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZzogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9KX1cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGF0YS1sYXp5LWVuZD17aWR9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuIl19

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/lazy/placeholders/render.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/lazy/placeholders/render.js ***!
  \*****************************************************************************/
/*! exports provided: PlaceholderFallbackRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderFallbackRender", function() { return PlaceholderFallbackRender; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var usePlaceholderRender = function usePlaceholderRender(resolveId, content) {
  var hydrationRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(content || []),
      ssrDomNodes = _useRef.current;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    var element = hydrationRef.current;

    var _ref = element || {},
        parentNode = _ref.parentNode;

    if (parentNode && !parentNode.contains(ssrDomNodes[0])) {
      ssrDomNodes.reverse().forEach(function (node) {
        return parentNode.insertBefore(node, element.nextSibling);
      });
    }

    return function () {
      ssrDomNodes.forEach(function (node) {
        return node.parentNode.removeChild(node);
      });
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrationRef.current, ssrDomNodes]);
  return hydrationRef;
};

var PlaceholderFallbackRender = function PlaceholderFallbackRender(_ref2) {
  var id = _ref2.id,
      content = _ref2.content;
  var placeholderRef = usePlaceholderRender(id, content);
  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "hidden",
      "data-lazy-begin": id,
      ref: placeholderRef
    })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9sYXp5L3BsYWNlaG9sZGVycy9yZW5kZXIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUGxhY2Vob2xkZXJSZW5kZXIiLCJyZXNvbHZlSWQiLCJjb250ZW50IiwiaHlkcmF0aW9uUmVmIiwic3NyRG9tTm9kZXMiLCJjdXJyZW50IiwiZWxlbWVudCIsInBhcmVudE5vZGUiLCJjb250YWlucyIsInJldmVyc2UiLCJmb3JFYWNoIiwibm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwicmVtb3ZlQ2hpbGQiLCJQbGFjZWhvbGRlckZhbGxiYWNrUmVuZGVyIiwiaWQiLCJwbGFjZWhvbGRlclJlZiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxJQUFnQkMsTUFBaEIsRUFBd0JDLGVBQXhCLFFBQStDLE9BQS9DOztBQUVBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsU0FBRCxFQUFvQkMsT0FBcEIsRUFBcUM7QUFDaEUsTUFBTUMsWUFBWSxHQUFHTCxNQUFNLENBQTBCLElBQTFCLENBQTNCOztBQURnRSxnQkFFL0JBLE1BQU0sQ0FBQ0ksT0FBTyxJQUFLLEVBQWIsQ0FGeUI7QUFBQSxNQUUvQ0UsV0FGK0MsV0FFeERDLE9BRndEOztBQUloRU4sRUFBQUEsZUFBZSxDQUFDLFlBQU07QUFDcEIsUUFBTU8sT0FBTyxHQUFHSCxZQUFZLENBQUNFLE9BQTdCOztBQURvQixlQUVHQyxPQUFPLElBQUksRUFGZDtBQUFBLFFBRVpDLFVBRlksUUFFWkEsVUFGWTs7QUFJcEIsUUFBSUEsVUFBVSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsUUFBWCxDQUFvQkosV0FBVyxDQUFDLENBQUQsQ0FBL0IsQ0FBbkIsRUFBd0Q7QUFDdERBLE1BQUFBLFdBQVcsQ0FDUkssT0FESCxHQUVHQyxPQUZILENBRVcsVUFBQ0MsSUFBRDtBQUFBLGVBQ1BKLFVBQVUsQ0FBQ0ssWUFBWCxDQUF3QkQsSUFBeEIsRUFBK0JMLE9BQUQsQ0FBaUJPLFdBQS9DLENBRE87QUFBQSxPQUZYO0FBS0Q7O0FBRUQsV0FBTyxZQUFNO0FBQ1hULE1BQUFBLFdBQVcsQ0FBQ00sT0FBWixDQUFvQixVQUFDQyxJQUFEO0FBQUEsZUFBZUEsSUFBSSxDQUFDSixVQUFMLENBQWdCTyxXQUFoQixDQUE0QkgsSUFBNUIsQ0FBZjtBQUFBLE9BQXBCO0FBQ0QsS0FGRCxDQVpvQixDQWVwQjtBQUNELEdBaEJjLEVBZ0JaLENBQUNSLFlBQVksQ0FBQ0UsT0FBZCxFQUF1QkQsV0FBdkIsQ0FoQlksQ0FBZjtBQWtCQSxTQUFPRCxZQUFQO0FBQ0QsQ0F2QkQ7O0FBeUJBLE9BQU8sSUFBTVkseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixRQUEwQjtBQUFBLE1BQXZCQyxFQUF1QixTQUF2QkEsRUFBdUI7QUFBQSxNQUFuQmQsT0FBbUIsU0FBbkJBLE9BQW1CO0FBQ2pFLE1BQU1lLGNBQWMsR0FBR2pCLG9CQUFvQixDQUFDZ0IsRUFBRCxFQUFLZCxPQUFMLENBQTNDO0FBRUEsdUJBQU87QUFBTyxNQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLHlCQUFpQmMsRUFBdEM7QUFBMEMsTUFBQSxHQUFHLEVBQUVDO0FBQS9DO0FBQVA7QUFDRCxDQUpNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VQbGFjZWhvbGRlclJlbmRlciA9IChyZXNvbHZlSWQ6IHN0cmluZywgY29udGVudDogYW55KSA9PiB7XG4gIGNvbnN0IGh5ZHJhdGlvblJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHsgY3VycmVudDogc3NyRG9tTm9kZXMgfSA9IHVzZVJlZihjb250ZW50IHx8IChbXSBhcyBIVE1MRWxlbWVudFtdKSk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gaHlkcmF0aW9uUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgeyBwYXJlbnROb2RlIH0gPSBlbGVtZW50IHx8IHt9O1xuXG4gICAgaWYgKHBhcmVudE5vZGUgJiYgIXBhcmVudE5vZGUuY29udGFpbnMoc3NyRG9tTm9kZXNbMF0pKSB7XG4gICAgICBzc3JEb21Ob2Rlc1xuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5mb3JFYWNoKChub2RlOiBhbnkpID0+XG4gICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgKGVsZW1lbnQgYXMgYW55KS5uZXh0U2libGluZylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3NyRG9tTm9kZXMuZm9yRWFjaCgobm9kZTogYW55KSA9PiBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSkpO1xuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbaHlkcmF0aW9uUmVmLmN1cnJlbnQsIHNzckRvbU5vZGVzXSk7XG5cbiAgcmV0dXJuIGh5ZHJhdGlvblJlZjtcbn07XG5cbmV4cG9ydCBjb25zdCBQbGFjZWhvbGRlckZhbGxiYWNrUmVuZGVyID0gKHsgaWQsIGNvbnRlbnQgfTogYW55KSA9PiB7XG4gIGNvbnN0IHBsYWNlaG9sZGVyUmVmID0gdXNlUGxhY2Vob2xkZXJSZW5kZXIoaWQsIGNvbnRlbnQpO1xuXG4gIHJldHVybiA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRhdGEtbGF6eS1iZWdpbj17aWR9IHJlZj17cGxhY2Vob2xkZXJSZWZ9IC8+O1xufTtcbiJdfQ==

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/phase/component.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/phase/component.js ***!
  \********************************************************************/
/*! exports provided: LazyWait */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyWait", function() { return LazyWait; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/react-loosely-lazy/lib/esm/constants.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-loosely-lazy/lib/esm/phase/context.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-loosely-lazy/lib/esm/phase/utils.js");




var LazyWait = function LazyWait(_ref) {
  var until = _ref.until,
      children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_2__["LazyPhaseContext"]),
      ctxApi = _useContext.api;

  var phaseRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(-1);
  phaseRef.current = until ? _constants__WEBPACK_IMPORTED_MODULE_1__["PHASE"].LAZY : -1; // notify all children of phase change

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]),
      listeners = _useRef.current;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    listeners.slice(0).forEach(function (listener) {
      return listener(phaseRef.current);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listeners, phaseRef.current]);
  var api = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      subscribe: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createSubscribe"])(listeners),
      currentPhase: function currentPhase() {
        return phaseRef.current;
      },
      api: ctxApi
    };
  }, [listeners, ctxApi, phaseRef]);
  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_2__["LazyPhaseContext"].Provider, {
      value: api
    }, children)
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waGFzZS9jb21wb25lbnQudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJQSEFTRSIsIkxhenlQaGFzZUNvbnRleHQiLCJjcmVhdGVTdWJzY3JpYmUiLCJMYXp5V2FpdCIsInVudGlsIiwiY2hpbGRyZW4iLCJjdHhBcGkiLCJhcGkiLCJwaGFzZVJlZiIsImN1cnJlbnQiLCJMQVpZIiwibGlzdGVuZXJzIiwic2xpY2UiLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJzdWJzY3JpYmUiLCJjdXJyZW50UGhhc2UiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFVBQWhCLEVBQTRCQyxPQUE1QixFQUFxQ0MsTUFBckMsUUFBbUQsT0FBbkQ7QUFFQSxTQUFTQyxLQUFULFFBQXNCLGNBQXRCO0FBQ0EsU0FBU0MsZ0JBQVQsUUFBaUMsV0FBakM7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFNBQWhDO0FBTUEsT0FBTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF3QztBQUFBLE1BQXJDQyxLQUFxQyxRQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QkMsUUFBOEIsUUFBOUJBLFFBQThCOztBQUFBLG9CQUN0Q1IsVUFBVSxDQUFDSSxnQkFBRCxDQUQ0QjtBQUFBLE1BQ2pESyxNQURpRCxlQUN0REMsR0FEc0Q7O0FBRTlELE1BQU1DLFFBQVEsR0FBR1QsTUFBTSxDQUFDLENBQUMsQ0FBRixDQUF2QjtBQUVBUyxFQUFBQSxRQUFRLENBQUNDLE9BQVQsR0FBbUJMLEtBQUssR0FBR0osS0FBSyxDQUFDVSxJQUFULEdBQWdCLENBQUMsQ0FBekMsQ0FKOEQsQ0FNOUQ7O0FBTjhELGdCQU8vQlgsTUFBTSxDQUFNLEVBQU4sQ0FQeUI7QUFBQSxNQU83Q1ksU0FQNkMsV0FPdERGLE9BUHNEOztBQVM5RFgsRUFBQUEsT0FBTyxDQUFDLFlBQU07QUFDWmEsSUFBQUEsU0FBUyxDQUFDQyxLQUFWLENBQWdCLENBQWhCLEVBQW1CQyxPQUFuQixDQUEyQixVQUFDQyxRQUFEO0FBQUEsYUFBbUJBLFFBQVEsQ0FBQ04sUUFBUSxDQUFDQyxPQUFWLENBQTNCO0FBQUEsS0FBM0IsRUFEWSxDQUVaO0FBQ0QsR0FITSxFQUdKLENBQUNFLFNBQUQsRUFBWUgsUUFBUSxDQUFDQyxPQUFyQixDQUhJLENBQVA7QUFLQSxNQUFNRixHQUFHLEdBQUdULE9BQU8sQ0FDakI7QUFBQSxXQUFPO0FBQ0xpQixNQUFBQSxTQUFTLEVBQUViLGVBQWUsQ0FBQ1MsU0FBRCxDQURyQjtBQUVMSyxNQUFBQSxZQUFZLEVBQUU7QUFBQSxlQUFNUixRQUFRLENBQUNDLE9BQWY7QUFBQSxPQUZUO0FBR0xGLE1BQUFBLEdBQUcsRUFBRUQ7QUFIQSxLQUFQO0FBQUEsR0FEaUIsRUFNakIsQ0FBQ0ssU0FBRCxFQUFZTCxNQUFaLEVBQW9CRSxRQUFwQixDQU5pQixDQUFuQjtBQVNBLHVCQUNFLG9CQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLE1BQUEsS0FBSyxFQUFFRDtBQUFsQyxPQUNHRixRQURIO0FBREY7QUFLRCxDQTVCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBIQVNFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IExhenlQaGFzZUNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHsgY3JlYXRlU3Vic2NyaWJlIH0gZnJvbSAnLi91dGlscyc7XG5cbnR5cGUgTGF6eVdhaXRQcm9wcyA9IHtcbiAgdW50aWw6IGJvb2xlYW47XG4gIGNoaWxkcmVuOiBhbnk7XG59O1xuZXhwb3J0IGNvbnN0IExhenlXYWl0ID0gKHsgdW50aWwsIGNoaWxkcmVuIH06IExhenlXYWl0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBhcGk6IGN0eEFwaSB9ID0gdXNlQ29udGV4dChMYXp5UGhhc2VDb250ZXh0KTtcbiAgY29uc3QgcGhhc2VSZWYgPSB1c2VSZWYoLTEpO1xuXG4gIHBoYXNlUmVmLmN1cnJlbnQgPSB1bnRpbCA/IFBIQVNFLkxBWlkgOiAtMTtcblxuICAvLyBub3RpZnkgYWxsIGNoaWxkcmVuIG9mIHBoYXNlIGNoYW5nZVxuICBjb25zdCB7IGN1cnJlbnQ6IGxpc3RlbmVycyB9ID0gdXNlUmVmPGFueT4oW10pO1xuXG4gIHVzZU1lbW8oKCkgPT4ge1xuICAgIGxpc3RlbmVycy5zbGljZSgwKS5mb3JFYWNoKChsaXN0ZW5lcjogYW55KSA9PiBsaXN0ZW5lcihwaGFzZVJlZi5jdXJyZW50KSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbbGlzdGVuZXJzLCBwaGFzZVJlZi5jdXJyZW50XSk7XG5cbiAgY29uc3QgYXBpID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgc3Vic2NyaWJlOiBjcmVhdGVTdWJzY3JpYmUobGlzdGVuZXJzKSxcbiAgICAgIGN1cnJlbnRQaGFzZTogKCkgPT4gcGhhc2VSZWYuY3VycmVudCxcbiAgICAgIGFwaTogY3R4QXBpLFxuICAgIH0pLFxuICAgIFtsaXN0ZW5lcnMsIGN0eEFwaSwgcGhhc2VSZWZdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF6eVBoYXNlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXBpfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xhenlQaGFzZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl19

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/phase/context.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/phase/context.js ***!
  \******************************************************************/
/*! exports provided: LISTENERS, setCurrent, LazyPhaseContext, useLazyPhase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTENERS", function() { return LISTENERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrent", function() { return setCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyPhaseContext", function() { return LazyPhaseContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLazyPhase", function() { return useLazyPhase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/react-loosely-lazy/lib/esm/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-loosely-lazy/lib/esm/phase/utils.js");



var LISTENERS = [];
var CURRENT_PHASE = _constants__WEBPACK_IMPORTED_MODULE_1__["PHASE"].PAINT;
var setCurrent = function setCurrent(value) {
  CURRENT_PHASE = value;
  LISTENERS.slice(0).forEach(function (listener) {
    return listener(value);
  });
};
var LazyPhaseContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  subscribe: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createSubscribe"])(LISTENERS),
  currentPhase: function currentPhase() {
    return CURRENT_PHASE;
  },
  api: {
    startNextPhase: function startNextPhase() {
      setCurrent(_constants__WEBPACK_IMPORTED_MODULE_1__["PHASE"].AFTER_PAINT);
      setTimeout(function () {
        return setCurrent(_constants__WEBPACK_IMPORTED_MODULE_1__["PHASE"].LAZY);
      }, _constants__WEBPACK_IMPORTED_MODULE_1__["PHASE_LAZY_DELAY"]);
    },
    resetPhase: function resetPhase() {
      return setCurrent(_constants__WEBPACK_IMPORTED_MODULE_1__["PHASE"].PAINT);
    }
  }
});
var useLazyPhase = function useLazyPhase() {
  var v = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LazyPhaseContext);
  return v.api;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waGFzZS9jb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlBIQVNFIiwiUEhBU0VfTEFaWV9ERUxBWSIsImNyZWF0ZVN1YnNjcmliZSIsIkxJU1RFTkVSUyIsIkNVUlJFTlRfUEhBU0UiLCJQQUlOVCIsInNldEN1cnJlbnQiLCJ2YWx1ZSIsInNsaWNlIiwiZm9yRWFjaCIsImxpc3RlbmVyIiwiTGF6eVBoYXNlQ29udGV4dCIsInN1YnNjcmliZSIsImN1cnJlbnRQaGFzZSIsImFwaSIsInN0YXJ0TmV4dFBoYXNlIiwiQUZURVJfUEFJTlQiLCJzZXRUaW1lb3V0IiwiTEFaWSIsInJlc2V0UGhhc2UiLCJ1c2VMYXp5UGhhc2UiLCJ2Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxhQUFULEVBQXdCQyxVQUF4QixRQUEwQyxPQUExQztBQUVBLFNBQVNDLEtBQVQsRUFBZ0JDLGdCQUFoQixRQUF3QyxjQUF4QztBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsU0FBaEM7QUFFQSxPQUFPLElBQU1DLFNBQWdCLEdBQUcsRUFBekI7QUFDUCxJQUFJQyxhQUFhLEdBQUdKLEtBQUssQ0FBQ0ssS0FBMUI7QUFFQSxPQUFPLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBbUI7QUFDM0NILEVBQUFBLGFBQWEsR0FBR0csS0FBaEI7QUFDQUosRUFBQUEsU0FBUyxDQUFDSyxLQUFWLENBQWdCLENBQWhCLEVBQW1CQyxPQUFuQixDQUEyQixVQUFDQyxRQUFEO0FBQUEsV0FBbUJBLFFBQVEsQ0FBQ0gsS0FBRCxDQUEzQjtBQUFBLEdBQTNCO0FBQ0QsQ0FITTtBQUtQLE9BQU8sSUFBTUksZ0JBQWdCLEdBQUdiLGFBQWEsQ0FBQztBQUM1Q2MsRUFBQUEsU0FBUyxFQUFFVixlQUFlLENBQUNDLFNBQUQsQ0FEa0I7QUFFNUNVLEVBQUFBLFlBQVksRUFBRTtBQUFBLFdBQU1ULGFBQU47QUFBQSxHQUY4QjtBQUc1Q1UsRUFBQUEsR0FBRyxFQUFFO0FBQ0hDLElBQUFBLGNBQWMsRUFBRSwwQkFBTTtBQUNwQlQsTUFBQUEsVUFBVSxDQUFDTixLQUFLLENBQUNnQixXQUFQLENBQVY7QUFDQUMsTUFBQUEsVUFBVSxDQUFDO0FBQUEsZUFBTVgsVUFBVSxDQUFDTixLQUFLLENBQUNrQixJQUFQLENBQWhCO0FBQUEsT0FBRCxFQUErQmpCLGdCQUEvQixDQUFWO0FBQ0QsS0FKRTtBQUtIa0IsSUFBQUEsVUFBVSxFQUFFO0FBQUEsYUFBTWIsVUFBVSxDQUFDTixLQUFLLENBQUNLLEtBQVAsQ0FBaEI7QUFBQTtBQUxUO0FBSHVDLENBQUQsQ0FBdEM7QUFZUCxPQUFPLElBQU1lLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDaEMsTUFBTUMsQ0FBQyxHQUFHdEIsVUFBVSxDQUFDWSxnQkFBRCxDQUFwQjtBQUVBLFNBQU9VLENBQUMsQ0FBQ1AsR0FBVDtBQUNELENBSk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQSEFTRSwgUEhBU0VfTEFaWV9ERUxBWSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjcmVhdGVTdWJzY3JpYmUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IExJU1RFTkVSUzogYW55W10gPSBbXTtcbmxldCBDVVJSRU5UX1BIQVNFID0gUEhBU0UuUEFJTlQ7XG5cbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50ID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgQ1VSUkVOVF9QSEFTRSA9IHZhbHVlO1xuICBMSVNURU5FUlMuc2xpY2UoMCkuZm9yRWFjaCgobGlzdGVuZXI6IGFueSkgPT4gbGlzdGVuZXIodmFsdWUpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBMYXp5UGhhc2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIHN1YnNjcmliZTogY3JlYXRlU3Vic2NyaWJlKExJU1RFTkVSUyksXG4gIGN1cnJlbnRQaGFzZTogKCkgPT4gQ1VSUkVOVF9QSEFTRSxcbiAgYXBpOiB7XG4gICAgc3RhcnROZXh0UGhhc2U6ICgpID0+IHtcbiAgICAgIHNldEN1cnJlbnQoUEhBU0UuQUZURVJfUEFJTlQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50KFBIQVNFLkxBWlkpLCBQSEFTRV9MQVpZX0RFTEFZKTtcbiAgICB9LFxuICAgIHJlc2V0UGhhc2U6ICgpID0+IHNldEN1cnJlbnQoUEhBU0UuUEFJTlQpLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VMYXp5UGhhc2UgPSAoKSA9PiB7XG4gIGNvbnN0IHYgPSB1c2VDb250ZXh0KExhenlQaGFzZUNvbnRleHQpO1xuXG4gIHJldHVybiB2LmFwaTtcbn07XG4iXX0=

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/phase/controller.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/phase/controller.js ***!
  \*********************************************************************/
/*! exports provided: usePhaseSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePhaseSubscription", function() { return usePhaseSubscription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/react-loosely-lazy/lib/esm/phase/context.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var usePhaseSubscription = function usePhaseSubscription() {
  var targetPhase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_1__["LazyPhaseContext"]),
      subscribe = _useContext.subscribe,
      currentPhase = _useContext.currentPhase;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return currentPhase() >= targetPhase;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      run = _useState2[0],
      setRun = _useState2[1]; // subscribe with memo instead of effect to retain tree order


  var unsubscribe = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return subscribe(function (v) {
      return setRun(v >= targetPhase);
    });
  }, [subscribe, setRun, targetPhase]); // subscription is done on first render, here just unsubscribe

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return unsubscribe;
  }, [unsubscribe]);
  return run;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waGFzZS9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYXp5UGhhc2VDb250ZXh0IiwidXNlUGhhc2VTdWJzY3JpcHRpb24iLCJ0YXJnZXRQaGFzZSIsInN1YnNjcmliZSIsImN1cnJlbnRQaGFzZSIsInJ1biIsInNldFJ1biIsInVuc3Vic2NyaWJlIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxTQUFTQSxVQUFULEVBQXFCQyxPQUFyQixFQUE4QkMsUUFBOUIsRUFBd0NDLFNBQXhDLFFBQXlELE9BQXpEO0FBRUEsU0FBU0MsZ0JBQVQsUUFBaUMsV0FBakM7QUFFQSxPQUFPLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBc0I7QUFBQSxNQUFyQkMsV0FBcUIsdUVBQVAsQ0FBQyxDQUFNOztBQUFBLG9CQUNwQk4sVUFBVSxDQUFDSSxnQkFBRCxDQURVO0FBQUEsTUFDaERHLFNBRGdELGVBQ2hEQSxTQURnRDtBQUFBLE1BQ3JDQyxZQURxQyxlQUNyQ0EsWUFEcUM7O0FBQUEsa0JBRWxDTixRQUFRLENBQUM7QUFBQSxXQUFNTSxZQUFZLE1BQU1GLFdBQXhCO0FBQUEsR0FBRCxDQUYwQjtBQUFBO0FBQUEsTUFFakRHLEdBRmlEO0FBQUEsTUFFNUNDLE1BRjRDLGtCQUl4RDs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHVixPQUFPLENBQ3pCO0FBQUEsV0FBTU0sU0FBUyxDQUFDLFVBQUNLLENBQUQ7QUFBQSxhQUFlRixNQUFNLENBQUNFLENBQUMsSUFBSU4sV0FBTixDQUFyQjtBQUFBLEtBQUQsQ0FBZjtBQUFBLEdBRHlCLEVBRXpCLENBQUNDLFNBQUQsRUFBWUcsTUFBWixFQUFvQkosV0FBcEIsQ0FGeUIsQ0FBM0IsQ0FMd0QsQ0FTeEQ7O0FBQ0FILEVBQUFBLFNBQVMsQ0FBQyxZQUFNO0FBQ2QsV0FBT1EsV0FBUDtBQUNELEdBRlEsRUFFTixDQUFDQSxXQUFELENBRk0sQ0FBVDtBQUlBLFNBQU9GLEdBQVA7QUFDRCxDQWZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTGF6eVBoYXNlQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCB1c2VQaGFzZVN1YnNjcmlwdGlvbiA9ICh0YXJnZXRQaGFzZSA9IC0xKSA9PiB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlLCBjdXJyZW50UGhhc2UgfSA9IHVzZUNvbnRleHQoTGF6eVBoYXNlQ29udGV4dCk7XG4gIGNvbnN0IFtydW4sIHNldFJ1bl0gPSB1c2VTdGF0ZSgoKSA9PiBjdXJyZW50UGhhc2UoKSA+PSB0YXJnZXRQaGFzZSk7XG5cbiAgLy8gc3Vic2NyaWJlIHdpdGggbWVtbyBpbnN0ZWFkIG9mIGVmZmVjdCB0byByZXRhaW4gdHJlZSBvcmRlclxuICBjb25zdCB1bnN1YnNjcmliZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gc3Vic2NyaWJlKCh2OiBudW1iZXIpID0+IHNldFJ1bih2ID49IHRhcmdldFBoYXNlKSksXG4gICAgW3N1YnNjcmliZSwgc2V0UnVuLCB0YXJnZXRQaGFzZV1cbiAgKTtcbiAgLy8gc3Vic2NyaXB0aW9uIGlzIGRvbmUgb24gZmlyc3QgcmVuZGVyLCBoZXJlIGp1c3QgdW5zdWJzY3JpYmVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gdW5zdWJzY3JpYmU7XG4gIH0sIFt1bnN1YnNjcmliZV0pO1xuXG4gIHJldHVybiBydW47XG59O1xuIl19

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/phase/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/phase/index.js ***!
  \****************************************************************/
/*! exports provided: LazyWait, useLazyPhase, LazyPhaseContext, setCurrent, LISTENERS, usePhaseSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-loosely-lazy/lib/esm/phase/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyWait", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["LazyWait"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/react-loosely-lazy/lib/esm/phase/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLazyPhase", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["useLazyPhase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyPhaseContext", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["LazyPhaseContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCurrent", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["setCurrent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LISTENERS", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["LISTENERS"]; });

/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./node_modules/react-loosely-lazy/lib/esm/phase/controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePhaseSubscription", function() { return _controller__WEBPACK_IMPORTED_MODULE_2__["usePhaseSubscription"]; });




//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waGFzZS9pbmRleC50c3giXSwibmFtZXMiOlsiTGF6eVdhaXQiLCJ1c2VMYXp5UGhhc2UiLCJMYXp5UGhhc2VDb250ZXh0Iiwic2V0Q3VycmVudCIsIkxJU1RFTkVSUyIsInVzZVBoYXNlU3Vic2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxRQUFULFFBQXlCLGFBQXpCO0FBQ0EsU0FDRUMsWUFERixFQUVFQyxnQkFGRixFQUdFQyxVQUhGLEVBSUVDLFNBSkYsUUFLTyxXQUxQO0FBTUEsU0FBU0Msb0JBQVQsUUFBcUMsY0FBckMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBMYXp5V2FpdCB9IGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCB7XG4gIHVzZUxhenlQaGFzZSxcbiAgTGF6eVBoYXNlQ29udGV4dCxcbiAgc2V0Q3VycmVudCxcbiAgTElTVEVORVJTLFxufSBmcm9tICcuL2NvbnRleHQnO1xuZXhwb3J0IHsgdXNlUGhhc2VTdWJzY3JpcHRpb24gfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuIl19

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/phase/utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/phase/utils.js ***!
  \****************************************************************/
/*! exports provided: createSubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSubscribe", function() { return createSubscribe; });
var createSubscribe = function createSubscribe(listeners) {
  return function (listener) {
    listeners.push(listener);
    return function () {
      var index = listeners.indexOf(listener);
      if (index !== -1) listeners.splice(index, 1);
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waGFzZS91dGlscy50c3giXSwibmFtZXMiOlsiY3JlYXRlU3Vic2NyaWJlIiwibGlzdGVuZXJzIiwibGlzdGVuZXIiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsU0FBRDtBQUFBLFNBQXNCLFVBQUNDLFFBQUQsRUFBbUI7QUFDdEVELElBQUFBLFNBQVMsQ0FBQ0UsSUFBVixDQUFlRCxRQUFmO0FBRUEsV0FBTyxZQUFNO0FBQ1gsVUFBTUUsS0FBSyxHQUFHSCxTQUFTLENBQUNJLE9BQVYsQ0FBa0JILFFBQWxCLENBQWQ7QUFDQSxVQUFJRSxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCSCxTQUFTLENBQUNLLE1BQVYsQ0FBaUJGLEtBQWpCLEVBQXdCLENBQXhCO0FBQ25CLEtBSEQ7QUFJRCxHQVA4QjtBQUFBLENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNyZWF0ZVN1YnNjcmliZSA9IChsaXN0ZW5lcnM6IGFueVtdKSA9PiAobGlzdGVuZXI6IGFueSkgPT4ge1xuICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcbn07XG4iXX0=

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/suspense/component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/suspense/component.js ***!
  \***********************************************************************/
/*! exports provided: LazySuspense */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazySuspense", function() { return LazySuspense; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/react-loosely-lazy/lib/esm/utils/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-loosely-lazy/lib/esm/suspense/context.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var LazySuspense = /*#__PURE__*/function (_Component) {
  _inherits(LazySuspense, _Component);

  var _super = _createSuper(LazySuspense);

  function LazySuspense() {
    var _this;

    _classCallCheck(this, LazySuspense);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      // Used on server to render fallback down the tree
      fallback: _this.props.fallback,
      // Used on client to replace fallback with magic input
      setFallback: function setFallback(f) {
        if (_this.hydrationFallback === f) return;
        _this.hydrationFallback = f;
        _this.useSibling = Boolean(f); // Shedule an update so we force switch from the sibling tree
        // back to the suspense boundary

        _this.forceUpdate();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hydrationFallback", null);

    _defineProperty(_assertThisInitialized(_this), "useSibling", false);

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "DynamicFallback", function (_ref) {
      var children = _ref.children,
          sibling = _ref.sibling;

      if (sibling) {
        return children(_this.useSibling ? _this.hydrationFallback : null);
      }

      return children(_this.useSibling ? null : _this.props.fallback);
    });

    return _this;
  }

  _createClass(LazySuspense, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "renderFallback",
    value: function renderFallback(v) {
      // Use render prop component to allow switch to hydration fallback
      return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.DynamicFallback, {
          sibling: v
        }, function (fallback) {
          return fallback;
        })
      );
    }
  }, {
    key: "renderServer",
    value: function renderServer() {
      return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_2__["LazySuspenseContext"].Provider, {
          value: this.state
        }, this.props.children)
      );
    }
  }, {
    key: "renderClient",
    value: function renderClient() {
      return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_2__["LazySuspenseContext"].Provider, {
          value: this.state
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
          fallback: this.renderFallback(false)
        }, this.props.children), (!this.mounted || this.useSibling) && this.renderFallback(true))
      );
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNodeEnvironment"])() ? this.renderServer() : this.renderClient();
    }
  }]);

  return LazySuspense;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdXNwZW5zZS9jb21wb25lbnQudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU3VzcGVuc2UiLCJpc05vZGVFbnZpcm9ubWVudCIsIkxhenlTdXNwZW5zZUNvbnRleHQiLCJMYXp5U3VzcGVuc2UiLCJmYWxsYmFjayIsInByb3BzIiwic2V0RmFsbGJhY2siLCJmIiwiaHlkcmF0aW9uRmFsbGJhY2siLCJ1c2VTaWJsaW5nIiwiQm9vbGVhbiIsImZvcmNlVXBkYXRlIiwiY2hpbGRyZW4iLCJzaWJsaW5nIiwibW91bnRlZCIsInYiLCJzdGF0ZSIsInJlbmRlckZhbGxiYWNrIiwicmVuZGVyU2VydmVyIiwicmVuZGVyQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixFQUEyQkMsUUFBM0IsUUFBMkMsT0FBM0M7QUFDQSxTQUFTQyxpQkFBVCxRQUFrQyxVQUFsQztBQUNBLFNBQVNDLG1CQUFULFFBQW9DLFdBQXBDO0FBRUEsV0FBYUMsWUFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLDREQUNVO0FBQ047QUFDQUMsTUFBQUEsUUFBUSxFQUFFLE1BQUtDLEtBQUwsQ0FBV0QsUUFGZjtBQUdOO0FBQ0FFLE1BQUFBLFdBQVcsRUFBRSxxQkFBQ0MsQ0FBRCxFQUFZO0FBQ3ZCLFlBQUksTUFBS0MsaUJBQUwsS0FBMkJELENBQS9CLEVBQWtDO0FBQ2xDLGNBQUtDLGlCQUFMLEdBQXlCRCxDQUF6QjtBQUNBLGNBQUtFLFVBQUwsR0FBa0JDLE9BQU8sQ0FBQ0gsQ0FBRCxDQUF6QixDQUh1QixDQUl2QjtBQUNBOztBQUNBLGNBQUtJLFdBQUw7QUFDRDtBQVhLLEtBRFY7O0FBQUEsd0VBZXNCLElBZnRCOztBQUFBLGlFQWdCZSxLQWhCZjs7QUFBQSw4REFpQlksS0FqQlo7O0FBQUEsc0VBdUJvQixnQkFBZ0M7QUFBQSxVQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsVUFBbkJDLE9BQW1CLFFBQW5CQSxPQUFtQjs7QUFDaEQsVUFBSUEsT0FBSixFQUFhO0FBQ1gsZUFBT0QsUUFBUSxDQUFDLE1BQUtILFVBQUwsR0FBa0IsTUFBS0QsaUJBQXZCLEdBQTJDLElBQTVDLENBQWY7QUFDRDs7QUFFRCxhQUFPSSxRQUFRLENBQUMsTUFBS0gsVUFBTCxHQUFrQixJQUFsQixHQUF5QixNQUFLSixLQUFMLENBQVdELFFBQXJDLENBQWY7QUFDRCxLQTdCSDs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx3Q0FtQnNCO0FBQ2xCLFdBQUtVLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7QUFyQkg7QUFBQTtBQUFBLG1DQStCaUJDLENBL0JqQixFQStCNkI7QUFDekI7QUFDQSwyQkFDRSx5QkFBTSxlQUFOO0FBQXNCLFVBQUEsT0FBTyxFQUFFQTtBQUEvQixXQUNHLFVBQUNYLFFBQUQ7QUFBQSxpQkFBbUJBLFFBQW5CO0FBQUEsU0FESDtBQURGO0FBS0Q7QUF0Q0g7QUFBQTtBQUFBLG1DQXdDaUI7QUFDYiwyQkFDRSxvQkFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixVQUFBLEtBQUssRUFBRSxLQUFLWTtBQUExQyxXQUNHLEtBQUtYLEtBQUwsQ0FBV08sUUFEZDtBQURGO0FBS0Q7QUE5Q0g7QUFBQTtBQUFBLG1DQWdEaUI7QUFDYiwyQkFDRSxvQkFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixVQUFBLEtBQUssRUFBRSxLQUFLSTtBQUExQyx3QkFDRSxvQkFBQyxRQUFEO0FBQVUsVUFBQSxRQUFRLEVBQUUsS0FBS0MsY0FBTCxDQUFvQixLQUFwQjtBQUFwQixXQUNHLEtBQUtaLEtBQUwsQ0FBV08sUUFEZCxDQURGLEVBSUcsQ0FBQyxDQUFDLEtBQUtFLE9BQU4sSUFBaUIsS0FBS0wsVUFBdkIsS0FBc0MsS0FBS1EsY0FBTCxDQUFvQixJQUFwQixDQUp6QztBQURGO0FBUUQ7QUF6REg7QUFBQTtBQUFBLDZCQTJEVztBQUNQLGFBQU9oQixpQkFBaUIsS0FBSyxLQUFLaUIsWUFBTCxFQUFMLEdBQTJCLEtBQUtDLFlBQUwsRUFBbkQ7QUFDRDtBQTdESDs7QUFBQTtBQUFBLEVBQWtDcEIsU0FBbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzTm9kZUVudmlyb25tZW50IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgTGF6eVN1c3BlbnNlQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5cbmV4cG9ydCBjbGFzcyBMYXp5U3VzcGVuc2UgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgc3RhdGUgPSB7XG4gICAgLy8gVXNlZCBvbiBzZXJ2ZXIgdG8gcmVuZGVyIGZhbGxiYWNrIGRvd24gdGhlIHRyZWVcbiAgICBmYWxsYmFjazogdGhpcy5wcm9wcy5mYWxsYmFjayxcbiAgICAvLyBVc2VkIG9uIGNsaWVudCB0byByZXBsYWNlIGZhbGxiYWNrIHdpdGggbWFnaWMgaW5wdXRcbiAgICBzZXRGYWxsYmFjazogKGY6IGFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaHlkcmF0aW9uRmFsbGJhY2sgPT09IGYpIHJldHVybjtcbiAgICAgIHRoaXMuaHlkcmF0aW9uRmFsbGJhY2sgPSBmO1xuICAgICAgdGhpcy51c2VTaWJsaW5nID0gQm9vbGVhbihmKTtcbiAgICAgIC8vIFNoZWR1bGUgYW4gdXBkYXRlIHNvIHdlIGZvcmNlIHN3aXRjaCBmcm9tIHRoZSBzaWJsaW5nIHRyZWVcbiAgICAgIC8vIGJhY2sgdG8gdGhlIHN1c3BlbnNlIGJvdW5kYXJ5XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfSxcbiAgfTtcblxuICBoeWRyYXRpb25GYWxsYmFjayA9IG51bGw7XG4gIHVzZVNpYmxpbmcgPSBmYWxzZTtcbiAgbW91bnRlZCA9IGZhbHNlO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gIH1cblxuICBEeW5hbWljRmFsbGJhY2sgPSAoeyBjaGlsZHJlbiwgc2libGluZyB9OiBhbnkpID0+IHtcbiAgICBpZiAoc2libGluZykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHRoaXMudXNlU2libGluZyA/IHRoaXMuaHlkcmF0aW9uRmFsbGJhY2sgOiBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW4odGhpcy51c2VTaWJsaW5nID8gbnVsbCA6IHRoaXMucHJvcHMuZmFsbGJhY2spO1xuICB9O1xuXG4gIHJlbmRlckZhbGxiYWNrKHY6IGJvb2xlYW4pIHtcbiAgICAvLyBVc2UgcmVuZGVyIHByb3AgY29tcG9uZW50IHRvIGFsbG93IHN3aXRjaCB0byBoeWRyYXRpb24gZmFsbGJhY2tcbiAgICByZXR1cm4gKFxuICAgICAgPHRoaXMuRHluYW1pY0ZhbGxiYWNrIHNpYmxpbmc9e3Z9PlxuICAgICAgICB7KGZhbGxiYWNrOiBhbnkpID0+IGZhbGxiYWNrfVxuICAgICAgPC90aGlzLkR5bmFtaWNGYWxsYmFjaz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2VydmVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF6eVN1c3BlbnNlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dGhpcy5zdGF0ZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9MYXp5U3VzcGVuc2VDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJDbGllbnQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXp5U3VzcGVuc2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlfT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXt0aGlzLnJlbmRlckZhbGxiYWNrKGZhbHNlKX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIHsoIXRoaXMubW91bnRlZCB8fCB0aGlzLnVzZVNpYmxpbmcpICYmIHRoaXMucmVuZGVyRmFsbGJhY2sodHJ1ZSl9XG4gICAgICA8L0xhenlTdXNwZW5zZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaXNOb2RlRW52aXJvbm1lbnQoKSA/IHRoaXMucmVuZGVyU2VydmVyKCkgOiB0aGlzLnJlbmRlckNsaWVudCgpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/suspense/context.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/suspense/context.js ***!
  \*********************************************************************/
/*! exports provided: LazySuspenseContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazySuspenseContext", function() { return LazySuspenseContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var LazySuspenseContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setFallback: function setFallback(f) {
    console.warn('Missing <LooselySuspense /> boundary');
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdXNwZW5zZS9jb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwiY3JlYXRlQ29udGV4dCIsIkxhenlTdXNwZW5zZUNvbnRleHQiLCJmYWxsYmFjayIsInNldEZhbGxiYWNrIiwiZiIsImNvbnNvbGUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixFQUEwQkMsYUFBMUIsUUFBK0MsT0FBL0M7QUFFQSxPQUFPLElBQU1DLG1CQUFtQixHQUFHRCxhQUFhLENBQUM7QUFDL0NFLEVBQUFBLFFBQVEsZUFBRSxvQkFBQyxRQUFELE9BRHFDO0FBRS9DO0FBQ0FDLEVBQUFBLFdBQVcsRUFBRSxxQkFBQ0MsQ0FBRCxFQUFZO0FBQ3ZCQyxJQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxzQ0FBYjtBQUNEO0FBTDhDLENBQUQsQ0FBekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBMYXp5U3VzcGVuc2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIGZhbGxiYWNrOiA8RnJhZ21lbnQgLz4sXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgc2V0RmFsbGJhY2s6IChmOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgPExvb3NlbHlTdXNwZW5zZSAvPiBib3VuZGFyeScpO1xuICB9LFxufSk7XG4iXX0=

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/suspense/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/suspense/index.js ***!
  \*******************************************************************/
/*! exports provided: LazySuspense, LazySuspenseContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-loosely-lazy/lib/esm/suspense/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazySuspense", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["LazySuspense"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/react-loosely-lazy/lib/esm/suspense/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazySuspenseContext", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["LazySuspenseContext"]; });



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdXNwZW5zZS9pbmRleC50c3giXSwibmFtZXMiOlsiTGF6eVN1c3BlbnNlIiwiTGF6eVN1c3BlbnNlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsWUFBVCxRQUE2QixhQUE3QjtBQUNBLFNBQVNDLG1CQUFULFFBQW9DLFdBQXBDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTGF6eVN1c3BlbnNlIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0IHsgTGF6eVN1c3BlbnNlQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG4iXX0=

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/utils/hash.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/utils/hash.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return murmurhash2_32_gc; });
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9oYXNoLnRzIl0sIm5hbWVzIjpbIm11cm11cmhhc2gyXzMyX2djIiwic3RyIiwibCIsImxlbmd0aCIsImgiLCJpIiwiayIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBLGVBQWUsU0FBU0EsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQXdDO0FBQ3JELE1BQUlDLENBQUMsR0FBR0QsR0FBRyxDQUFDRSxNQUFaO0FBQUEsTUFDRUMsQ0FBQyxHQUFHRixDQUFDLEdBQUdBLENBRFY7QUFBQSxNQUVFRyxDQUFDLEdBQUcsQ0FGTjtBQUFBLE1BR0VDLENBSEY7O0FBS0EsU0FBT0osQ0FBQyxJQUFJLENBQVosRUFBZTtBQUNiSSxJQUFBQSxDQUFDLEdBQ0VMLEdBQUcsQ0FBQ00sVUFBSixDQUFlRixDQUFmLElBQW9CLElBQXJCLEdBQ0MsQ0FBQ0osR0FBRyxDQUFDTSxVQUFKLENBQWUsRUFBRUYsQ0FBakIsSUFBc0IsSUFBdkIsS0FBZ0MsQ0FEakMsR0FFQyxDQUFDSixHQUFHLENBQUNNLFVBQUosQ0FBZSxFQUFFRixDQUFqQixJQUFzQixJQUF2QixLQUFnQyxFQUZqQyxHQUdDLENBQUNKLEdBQUcsQ0FBQ00sVUFBSixDQUFlLEVBQUVGLENBQWpCLElBQXNCLElBQXZCLEtBQWdDLEVBSm5DO0FBTUFDLElBQUFBLENBQUMsR0FDQyxDQUFDQSxDQUFDLEdBQUcsTUFBTCxJQUFlLFVBQWYsSUFBNkIsQ0FBRSxDQUFDQSxDQUFDLEtBQUssRUFBUCxJQUFhLFVBQWQsR0FBNEIsTUFBN0IsS0FBd0MsRUFBckUsQ0FERjtBQUVBQSxJQUFBQSxDQUFDLElBQUlBLENBQUMsS0FBSyxFQUFYO0FBQ0FBLElBQUFBLENBQUMsR0FDQyxDQUFDQSxDQUFDLEdBQUcsTUFBTCxJQUFlLFVBQWYsSUFBNkIsQ0FBRSxDQUFDQSxDQUFDLEtBQUssRUFBUCxJQUFhLFVBQWQsR0FBNEIsTUFBN0IsS0FBd0MsRUFBckUsQ0FERjtBQUdBRixJQUFBQSxDQUFDLEdBQ0UsQ0FBQ0EsQ0FBQyxHQUFHLE1BQUwsSUFBZSxVQUFmLElBQ0UsQ0FBRSxDQUFDQSxDQUFDLEtBQUssRUFBUCxJQUFhLFVBQWQsR0FBNEIsTUFBN0IsS0FBd0MsRUFEMUMsQ0FBRCxHQUVBRSxDQUhGO0FBS0FKLElBQUFBLENBQUMsSUFBSSxDQUFMO0FBQ0EsTUFBRUcsQ0FBRjtBQUNEOztBQUVELFVBQVFILENBQVI7QUFDRSxTQUFLLENBQUw7QUFDRUUsTUFBQUEsQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ00sVUFBSixDQUFlRixDQUFDLEdBQUcsQ0FBbkIsSUFBd0IsSUFBekIsS0FBa0MsRUFBdkM7O0FBQ0YsU0FBSyxDQUFMO0FBQ0VELE1BQUFBLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNNLFVBQUosQ0FBZUYsQ0FBQyxHQUFHLENBQW5CLElBQXdCLElBQXpCLEtBQWtDLENBQXZDOztBQUNGLFNBQUssQ0FBTDtBQUNFRCxNQUFBQSxDQUFDLElBQUlILEdBQUcsQ0FBQ00sVUFBSixDQUFlRixDQUFmLElBQW9CLElBQXpCO0FBQ0FELE1BQUFBLENBQUMsR0FDQyxDQUFDQSxDQUFDLEdBQUcsTUFBTCxJQUFlLFVBQWYsSUFDQyxDQUFFLENBQUNBLENBQUMsS0FBSyxFQUFQLElBQWEsVUFBZCxHQUE0QixNQUE3QixLQUF3QyxFQUR6QyxDQURGO0FBUEo7O0FBWUFBLEVBQUFBLENBQUMsSUFBSUEsQ0FBQyxLQUFLLEVBQVg7QUFDQUEsRUFBQUEsQ0FBQyxHQUFHLENBQUNBLENBQUMsR0FBRyxNQUFMLElBQWUsVUFBZixJQUE2QixDQUFFLENBQUNBLENBQUMsS0FBSyxFQUFQLElBQWEsVUFBZCxHQUE0QixNQUE3QixLQUF3QyxFQUFyRSxDQUFKO0FBQ0FBLEVBQUFBLENBQUMsSUFBSUEsQ0FBQyxLQUFLLEVBQVg7QUFFQSxTQUFPLENBQUNBLENBQUMsS0FBSyxDQUFQLEVBQVVJLFFBQVYsQ0FBbUIsRUFBbkIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIG11cm11cmhhc2gyIHZpYSBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanMvYmxvYi9tYXN0ZXIvbXVybXVyaGFzaDJfZ2MuanNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXVybXVyaGFzaDJfMzJfZ2Moc3RyOiBzdHJpbmcpIHtcbiAgdmFyIGwgPSBzdHIubGVuZ3RoLFxuICAgIGggPSBsIF4gbCxcbiAgICBpID0gMCxcbiAgICBrO1xuXG4gIHdoaWxlIChsID49IDQpIHtcbiAgICBrID1cbiAgICAgIChzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYpIHxcbiAgICAgICgoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDgpIHxcbiAgICAgICgoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDE2KSB8XG4gICAgICAoKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNCk7XG5cbiAgICBrID1cbiAgICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKCgoayA+Pj4gMTYpICogMHg1YmQxZTk5NSkgJiAweGZmZmYpIDw8IDE2KTtcbiAgICBrIF49IGsgPj4+IDI0O1xuICAgIGsgPVxuICAgICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoKChrID4+PiAxNikgKiAweDViZDFlOTk1KSAmIDB4ZmZmZikgPDwgMTYpO1xuXG4gICAgaCA9XG4gICAgICAoKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArXG4gICAgICAgICgoKChoID4+PiAxNikgKiAweDViZDFlOTk1KSAmIDB4ZmZmZikgPDwgMTYpKSBeXG4gICAgICBrO1xuXG4gICAgbCAtPSA0O1xuICAgICsraTtcbiAgfVxuXG4gIHN3aXRjaCAobCkge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG4gICAgICBoID1cbiAgICAgICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArXG4gICAgICAgICgoKChoID4+PiAxNikgKiAweDViZDFlOTk1KSAmIDB4ZmZmZikgPDwgMTYpO1xuICB9XG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9IChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKCgoaCA+Pj4gMTYpICogMHg1YmQxZTk5NSkgJiAweGZmZmYpIDw8IDE2KTtcbiAgaCBePSBoID4+PiAxNTtcblxuICByZXR1cm4gKGggPj4+IDApLnRvU3RyaW5nKDM2KTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/react-loosely-lazy/lib/esm/utils/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loosely-lazy/lib/esm/utils/index.js ***!
  \****************************************************************/
/*! exports provided: hash, getExport, tryRequire, displayNameFromId, isNodeEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExport", function() { return getExport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryRequire", function() { return tryRequire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayNameFromId", function() { return displayNameFromId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeEnvironment", function() { return isNodeEnvironment; });
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hash */ "./node_modules/react-loosely-lazy/lib/esm/utils/hash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return _hash__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* eslint-disable @typescript-eslint/camelcase */

var getExport = function getExport(m) {
  return 'default' in m ? m.default : m;
};
var tryRequire = function tryRequire(id) {
  if ( true && __webpack_require__.m[id]) {
    try {
      return getExport(__webpack_require__(id)); // eslint-disable-next-line no-empty
    } catch (_unused) {}
  }

  return null;
};
var displayNameFromId = function displayNameFromId(id) {
  var fName = id.split('/').slice(-3).join('/');
  return fName || 'Component';
};
/**
 * Checks to see if we are running inside a node environment or not.
 * Covers jsdom environments.
 *
 * @see https://github.com/jsdom/jsdom/issues/1537
 */

var isNodeEnvironment = function isNodeEnvironment() {
  if (typeof window === 'undefined') {
    return true;
  }

  if (window.name === 'nodejs') {
    return true;
  }

  return false;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiaGFzaCIsImdldEV4cG9ydCIsIm0iLCJ0cnlSZXF1aXJlIiwiaWQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImRpc3BsYXlOYW1lRnJvbUlkIiwiZk5hbWUiLCJzcGxpdCIsInNsaWNlIiwiam9pbiIsImlzTm9kZUVudmlyb25tZW50Iiwid2luZG93IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFJQSxTQUFTQSxPQUFPLElBQUlDLElBQXBCLFFBQWdDLFFBQWhDO0FBRUEsT0FBTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFEO0FBQUEsU0FBYSxhQUFhQSxDQUFiLEdBQWlCQSxDQUFDLENBQUNILE9BQW5CLEdBQTZCRyxDQUExQztBQUFBLENBQWxCO0FBRVAsT0FBTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxFQUFELEVBQWdCO0FBQ3hDLE1BQ0UsT0FBT0MsbUJBQVAsS0FBK0IsVUFBL0IsSUFDQSxPQUFPQyxtQkFBUCxLQUErQixRQUQvQixJQUVBQSxtQkFBbUIsQ0FBQ0YsRUFBRCxDQUhyQixFQUlFO0FBQ0EsUUFBSTtBQUNGLGFBQU9ILFNBQVMsQ0FBQ0ksbUJBQW1CLENBQUNELEVBQUQsQ0FBcEIsQ0FBaEIsQ0FERSxDQUVGO0FBQ0QsS0FIRCxDQUdFLGdCQUFNLENBQUU7QUFDWDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQWJNO0FBZVAsT0FBTyxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNILEVBQUQsRUFBZ0I7QUFDL0MsTUFBTUksS0FBSyxHQUFHSixFQUFFLENBQUNLLEtBQUgsQ0FBUyxHQUFULEVBQWNDLEtBQWQsQ0FBb0IsQ0FBQyxDQUFyQixFQUF3QkMsSUFBeEIsQ0FBNkIsR0FBN0IsQ0FBZDtBQUVBLFNBQU9ILEtBQUssSUFBSSxXQUFoQjtBQUNELENBSk07QUFNUDs7Ozs7OztBQU1BLE9BQU8sSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ3JDLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQyxXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJQSxNQUFNLENBQUNDLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0FWTSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cbmRlY2xhcmUgY29uc3QgX193ZWJwYWNrX3JlcXVpcmVfXzogKGlkOiBzdHJpbmcpID0+IGFueTtcbmRlY2xhcmUgY29uc3QgX193ZWJwYWNrX21vZHVsZXNfXzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXNoIH0gZnJvbSAnLi9oYXNoJztcblxuZXhwb3J0IGNvbnN0IGdldEV4cG9ydCA9IChtOiBhbnkpID0+ICgnZGVmYXVsdCcgaW4gbSA/IG0uZGVmYXVsdCA6IG0pO1xuXG5leHBvcnQgY29uc3QgdHJ5UmVxdWlyZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGlmIChcbiAgICB0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBfX3dlYnBhY2tfbW9kdWxlc19fID09PSAnb2JqZWN0JyAmJlxuICAgIF9fd2VicGFja19tb2R1bGVzX19baWRdXG4gICkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZ2V0RXhwb3J0KF9fd2VicGFja19yZXF1aXJlX18oaWQpKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH0gY2F0Y2gge31cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlOYW1lRnJvbUlkID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZk5hbWUgPSBpZC5zcGxpdCgnLycpLnNsaWNlKC0zKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuIGZOYW1lIHx8ICdDb21wb25lbnQnO1xufTtcblxuLyoqXG4gKiBDaGVja3MgdG8gc2VlIGlmIHdlIGFyZSBydW5uaW5nIGluc2lkZSBhIG5vZGUgZW52aXJvbm1lbnQgb3Igbm90LlxuICogQ292ZXJzIGpzZG9tIGVudmlyb25tZW50cy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qc2RvbS9qc2RvbS9pc3N1ZXMvMTUzN1xuICovXG5leHBvcnQgY29uc3QgaXNOb2RlRW52aXJvbm1lbnQgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHdpbmRvdy5uYW1lID09PSAnbm9kZWpzJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiJdfQ==

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: LazyComponent, SOME_VAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["LazyComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SOME_VAR", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["SOME_VAR"]; });



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: LazyComponent, SOME_VAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return LazyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOME_VAR", function() { return SOME_VAR; });
/* harmony import */ var react_loosely_lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loosely-lazy */ "./node_modules/react-loosely-lazy/lib/esm/index.js");

var LazyComponent = Object(react_loosely_lazy__WEBPACK_IMPORTED_MODULE_0__["lazyForPaint"])(function () {
  return (
    /* webpackChunkName: "dependency-async" */
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./async */ "./src/async.js"))
  );
});
var SOME_VAR = true;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map