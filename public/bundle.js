/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(43);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(108),
    getValue = __webpack_require__(111);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(6),
    getRawTag = __webpack_require__(96),
    objectToString = __webpack_require__(97);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(65),
    baseAssignValue = __webpack_require__(35);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(42),
    baseKeys = __webpack_require__(100),
    isArrayLike = __webpack_require__(12);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0),
    stubFalse = __webpack_require__(98);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(13),
    isLength = __webpack_require__(45);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObject = __webpack_require__(2);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(121),
    listCacheDelete = __webpack_require__(122),
    listCacheGet = __webpack_require__(123),
    listCacheHas = __webpack_require__(124),
    listCacheSet = __webpack_require__(125);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(7);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(127);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(42),
    baseKeysIn = __webpack_require__(150),
    isArrayLike = __webpack_require__(12);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(165),
    Map = __webpack_require__(29),
    Promise = __webpack_require__(166),
    Set = __webpack_require__(55),
    WeakMap = __webpack_require__(167),
    baseGetTag = __webpack_require__(5),
    toSource = __webpack_require__(51);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const detectMobilePlatform = function () {
  let isMobile = false; //initiate as false
  // device detection
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }

  return isMobile;
};

/* harmony default export */ __webpack_exports__["a"] = (detectMobilePlatform);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(94),
    isObjectLike = __webpack_require__(1);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(99),
    baseUnary = __webpack_require__(11),
    nodeUtil = __webpack_require__(24);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(43);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(49),
    overRest = __webpack_require__(103),
    setToString = __webpack_require__(105);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(52),
    setCacheAdd = __webpack_require__(131),
    setCacheHas = __webpack_require__(132);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(12),
    isObjectLike = __webpack_require__(1);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(139),
    createAssigner = __webpack_require__(152);

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15),
    stackClear = __webpack_require__(140),
    stackDelete = __webpack_require__(141),
    stackGet = __webpack_require__(142),
    stackHas = __webpack_require__(143),
    stackSet = __webpack_require__(144);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(50);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(60);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(46);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(154),
    baseFlatten = __webpack_require__(48),
    baseRest = __webpack_require__(27),
    isArrayLikeObject = __webpack_require__(32),
    last = __webpack_require__(56);

/**
 * This method is like `_.difference` except that it accepts `comparator`
 * which is invoked to compare elements of `array` to `values`. The order and
 * references of result values are determined by the first array. The comparator
 * is invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 *
 * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
 * // => [{ 'x': 2, 'y': 1 }]
 */
var differenceWith = baseRest(function(array, values) {
  var comparator = last(values);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
    : [];
});

module.exports = differenceWith;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(162),
    stubArray = __webpack_require__(66);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const contactForm = Vue.component('contact-form', {
  template: `
  <div id="form_container" class="shadow">
    <form id="contact" action="" method="post">
      <h3>Quick Contact</h3>
      <h4>Contact us today, and get reply with in 24 hours!</h4>
      <fieldset>
        <input placeholder="Your name" type="text" tabindex="1" autofocus>
      </fieldset>
      <fieldset>
        <input placeholder="Your Email Address" type="email" tabindex="2">
      </fieldset>
      <fieldset>
        <input placeholder="Your Phone Number" type="tel" tabindex="3">
      </fieldset>
      <fieldset>
        <textarea placeholder="Type your Message Here...." tabindex="5"></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
      </fieldset>
    </form>
  </div>
  `
});
/* unused harmony export contactForm */


const panelTitle = Vue.component('panel-title', {
  props: ['name', 'color'],
  template: `
  <div class="container" style="padding-top: 20px; padding-bottom: 10px;">
   <div class="has-text-centered">
     <h1 class="title" :style="'color: ' +color+';'">
       {{name}}
     </h1>
   </div>
  </div>
  `
});
/* unused harmony export panelTitle */


/* harmony default export */ __webpack_exports__["a"] = (contactForm);

/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(93),
    isArguments = __webpack_require__(21),
    isArray = __webpack_require__(4),
    isBuffer = __webpack_require__(10),
    isIndex = __webpack_require__(44),
    isTypedArray = __webpack_require__(23);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(95)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(48),
    baseRest = __webpack_require__(27),
    baseUniq = __webpack_require__(113),
    isArrayLikeObject = __webpack_require__(32),
    last = __webpack_require__(56);

/**
 * This method is like `_.union` except that it accepts `comparator` which
 * is invoked to compare elements of `arrays`. Result values are chosen from
 * the first array in which the value occurs. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.unionWith(objects, others, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
var unionWith = baseRest(function(arrays) {
  var comparator = last(arrays);
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
});

module.exports = unionWith;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(26),
    isFlattenable = __webpack_require__(102);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(114),
    mapCacheDelete = __webpack_require__(126),
    mapCacheGet = __webpack_require__(128),
    mapCacheHas = __webpack_require__(129),
    mapCacheSet = __webpack_require__(130);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(133);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(35),
    eq = __webpack_require__(7);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(36);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(148),
    getPrototype = __webpack_require__(37),
    isPrototype = __webpack_require__(25);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    getPrototype = __webpack_require__(37),
    isObjectLike = __webpack_require__(1);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(35),
    eq = __webpack_require__(7);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(26),
    getPrototype = __webpack_require__(37),
    getSymbols = __webpack_require__(39),
    stubArray = __webpack_require__(66);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(69),
    getSymbols = __webpack_require__(39),
    keys = __webpack_require__(9);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(26),
    isArray = __webpack_require__(4);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(28),
    arraySome = __webpack_require__(181),
    cacheHas = __webpack_require__(30);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
module.exports = __webpack_require__(89);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__projects_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meetus_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactus_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_component_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_mounted_js__ = __webpack_require__(88);








const router = new VueRouter({
  routes: [{ path: '/', redirect: '/home' }, { path: '/scrollNav*', redirect: '/projects' }, { path: '/home', name: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_js__["a" /* default */] }, { path: '/projects', name: 'projects', component: __WEBPACK_IMPORTED_MODULE_0__projects_js__["a" /* default */] }, { path: '/services', name: 'services', component: __WEBPACK_IMPORTED_MODULE_1__service_js__["a" /* default */] }, { path: '/meetus', name: 'meetus', component: __WEBPACK_IMPORTED_MODULE_2__meetus_js__["a" /* default */] }, { path: '/contactus', name: 'contactus', component: __WEBPACK_IMPORTED_MODULE_3__contactus_js__["a" /* default */] }]
});

new Vue({
  router,
  el: '#root',
  components: {
    contactForm: __WEBPACK_IMPORTED_MODULE_5__shared_component_js__["a" /* default */]
  },
  mounted: __WEBPACK_IMPORTED_MODULE_6__router_mounted_js__["a" /* default */]
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__projects_data_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_mounted_js__ = __webpack_require__(76);



Vue.component('project-item', {
  props: ['caseItem'],
  template: `
  <div class="columns has-text-centered">
    <div class="column has-text-left">
      <span class="title">{{caseItem.name}}</span>
      <br />
      <span class="tag" style="margin-left: 3px;" :class=item.color v-for="item in caseItem.projectTags">
       {{item.name}}
      </span>
      <br />
      <br />
      <p>{{caseItem.projectDesc}}</p>
      <div class="has-text-left">
        <a href='./cases/caseview.html'>Read More ></a>
      </div>
    </div>
    <div class="tile is-vertical is-6">
      <img :src=caseItem.caseImage class="shadow"/>
    </div>
  </div>
  `
});

Vue.component('project-list', {
  props: ['navBarName', 'caseList'],
  template: `
   <div style="padding-bottom: 30px;">
    <article class="post__article">
      <section :id=item.id class="section" v-for="item in caseList">
        <div class="column is-gapless is-multiline is-mobile">
          <project-item :caseItem=item />
        </div>
      </section>
    </article>
   </div>
  `
});

Vue.component('top-nav-bar', {
  props: ['navBarName', 'caseList'],
  template: `
  <nav class="scroll-nav">
    <p style="margin-left: 15px;"><strong style="color: #ffffff;">{{navBarName}}</strong></p>
    <ul id="menu">
      <li v-for="item in caseList">
        <a :href=item.hrefLink style="margin-left: 15px; color: #ffffff;">
        {{item.name}}
        <span class="tag" :class=item.navTag.tagColor>{{item.navTag.tagName}}</span>
        </a>
      </li>
    </ul>
  </nav>
  `
});

Vue.component('project-content', {
  props: ['navBarName', 'caseList'],
  template: `
    <div class="column">
     <div class="project-top-bar">
      <top-nav-bar :navBarName=navBarName :caseList=caseList />
     </div>
    	<project-list :navBarName=navBarName :caseList=caseList />
    </div>
  `
});

const projects = {
  data: function () {
    return __WEBPACK_IMPORTED_MODULE_0__projects_data_js__["a" /* default */];
  },
  template: `
  <div class="container is-fullhd">
   <project-content :navBarName=navBarName :caseList=caseList />
  </div>
  `,
  mounted: __WEBPACK_IMPORTED_MODULE_1__projects_mounted_js__["a" /* default */]
};
/* harmony default export */ __webpack_exports__["a"] = (projects);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const projectsData = {
  projectsTitle: "Our cases",
  navBarName: "Projects navigation",
  caseList: [{
    id: "scrollNav-1",
    hrefLink: "#scrollNav-1",
    name: "Flywheel",
    navTag: {
      tagName: "Mobile",
      tagColor: "is-success"
    },
    projectTags: [{
      name: "Angular.js",
      color: "is-danger"
    }, {
      name: "Python",
      color: "is-success"
    }],
    projectDesc: "Helping instructors inspire riders through experience and service design.",
    caseImage: "./images/projects/p1.jpg"
  }, {
    id: "scrollNav-2",
    hrefLink: "#scrollNav-2",
    name: "McGraw",
    navTag: {
      tagName: "Desktop",
      tagColor: "is-danger"
    },
    projectTags: [{
      name: "Rails",
      color: "is-danger"
    }, {
      name: "Vue.js",
      color: "is-success"
    }],
    projectDesc: "The best educational experiences are adaptive.",
    caseImage: "./images/projects/p2.jpg"
  }, {
    id: "scrollNav-3",
    hrefLink: "#scrollNav-3",
    name: "Learnivore",
    navTag: {
      tagName: "WebApp",
      tagColor: "is-info"
    },
    projectTags: [{
      name: "React Native",
      color: "is-info"
    }, {
      name: "Vue.js",
      color: "is-success"
    }],
    projectDesc: "A social platform supporting collaborative learning by connecting instructors and students.",
    caseImage: "./images/projects/p3.jpg"
  }]
};

/* harmony default export */ __webpack_exports__["a"] = (projectsData);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_detect_platform_js__ = __webpack_require__(20);

const projectsFunc = function () {
  $('.post-article').scrollNav({
    sections: 'section',
    subSections: false,
    sectionElem: 'section',
    className: 'scroll-nav',
    showHeadline: true,
    headlineText: 'Scroll To',
    showTopLink: true,
    topLinkText: 'Top',
    fixedMargin: 40,
    scrollOffset: 0,
    animated: true,
    speed: 500,
    insertTarget: this.selector,
    insertLocation: 'insertBefore',
    activeClass: 'active',
    arrowKeys: false,
    scrollToHash: true,
    onInit: null,
    onRender: null,
    onDestroy: null
  });

  $('#contact-button-div').show();

  if (Object(__WEBPACK_IMPORTED_MODULE_0__shared_detect_platform_js__["a" /* default */])()) {
    $('.project-top-bar').css("top", "60px");
  } else {
    $('.project-top-bar').css("top", "85px");
  }
};

/* harmony default export */ __webpack_exports__["a"] = (projectsFunc);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_data_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_detect_platform_js__ = __webpack_require__(20);



Vue.component('service-item', {
  props: ['name', 'desc', 'serviceImage'],
  template: `
  <div class="columns">
   <div class="column">
     <h5 class="title">{{name}}</h5>
     <span>{{desc}}</span>
   </div>
   <div class="column service-item-image">
    <img :src=serviceImage class="shadow"/>
   </div>
  </div>
  `
});

const service = {
  data: function () {
    return __WEBPACK_IMPORTED_MODULE_0__service_data_js__["a" /* default */];
  },
  template: `
  <div>
    <panel-title :name=serviceTitle />
    <div style="padding: 30px;">
     <service-item v-for="item in serviceList"
       :key=item.name
       :name=item.name
       :serviceImage=item.serviceImage
       :desc=item.serviceDesc
     />
   </div>
  </div>
  `,
  mounted: function () {
    $('#contact-button-div').show();

    if (Object(__WEBPACK_IMPORTED_MODULE_1__shared_detect_platform_js__["a" /* default */])()) {
      //Service page
      $(".service-item-image").hide();
    } else {
      //Service page
      $(".service-item-image").show();
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (service);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const serviceData = {
  serviceTitle: "Our services",
  serviceList: [{
    name: "Website Development",
    serviceImage: "./images/services/s1.jpg",
    serviceDesc: `
        So its essential to ensure your website design & development are simple, clean and user friendly, to make the users experience enjoyable.
        Whether your a startup or a well established brand, MadeByUs place thought in to every stage of a website from research and planning,
        to design & development right through to user and browser testing. Making sure your website is on brand and achieves your goals.
      `
  }, {
    name: "Website maintanance",
    serviceImage: "./images/services/s2.jpg",
    serviceDesc: `
        Using the best technologies for progressive web apps our engineers expertly architect and
        implement quality code that is cost effective for you, and is further supported by our design.
      `
  }, {
    name: "Mobile development",
    serviceImage: "./images/services/s3.jpg",
    serviceDesc: `
        Adding a Content Management System (CMS) in to your website will give you full control to update your website, without asking us to add content for you. And even though our CMS is intuitive, we provide full training to you and your team on how to use it.
        Whether it’s updating a blog, shop opening times, restaurant menus, team profiles or adding products to your website. Our CMS will handle it no problem. There are no limitations with what we can create - as we are bespoke web developers and work with clients of all natures including start ups,
        medium sized businesses and large global organisations.
      `
  }, {
    name: "Report analysis",
    serviceImage: "./images/services/s2.jpg",
    serviceDesc: `
        Using the best technologies for progressive web apps our engineers expertly architect and
        implement quality code that is cost effective for you, and is further supported by our design.
      `
  }]
};

/* harmony default export */ __webpack_exports__["a"] = (serviceData);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__meetus_data_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meetus_mounted_js__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cv_js__ = __webpack_require__(82);



var bus = new Vue();

Vue.component('resume-modal', {
  props: ['members'],
  data: function () {
    return { id: 1 };
  },
  created: function () {
    bus.$on('id-selected', function (id) {
      this.id = id;
    }.bind(this));
  },
  template: `
  <div class="modal cv-modal" style="z-index: 1001">
    <div class="modal-background"></div>
    <div class="modal-content" style="width: 1200px;">
      <resume :resumeInfo=members[id-1] />
    </div>
    <button class="modal-close cv-modal-close is-large" aria-label="close"></button>
  </div>
  `
});

Vue.component('member-item', {
  props: ['memberInfo'],
  methods: {
    getId: function (id) {
      bus.$emit('id-selected', id);
    }
  },
  template: `
   <div class="column is-3">
    <a id="memeber-image"
      class="member-profile has-text-centered"
      v-on:click="getId(memberInfo.id)"
      data-target="cv-modal" >
      <div class="unhover_img">
      <img :src=memberInfo.imageUnhover alt="" />
      </div>
      <div class="hover_img">
      <img :src=memberInfo.imageHover alt="" />
      </div>
    </a>
    <div class="has-text-centered">
      <h6 style="min-width: 40px;">
       <strong>{{memberInfo.name}}</strong>
       <span class="tag is-light">{{memberInfo.title}}</span>
      </h6>
    </div>
  </div>
  `
});

Vue.component('member-list', {
  props: ['meetUsTitle', 'members'],
  template: `
  <div class="container" style="margin-bottom: 30px;">
   <panel-title :name=meetUsTitle />
   <div class="columns is-mobile is-centered" style="margin: 0 40px;">
     <member-item v-for="member in members"
        :key=member.id
        :memberInfo=member
     />
   </div>
  </div>
  `
});

Vue.component('tech-stack-title', {
  props: ['techStackTitle', 'techStackDesc'],
  template: `<div class="white-bg tech-stack-title-panel">
    <div class="columns" style="padding-left: 40px; padding-top: 60px;">
     <div class="column is-mobile is-two-fifths">
      <p class="title">{{techStackTitle}}</p>
      <p class="subtitle" style="margin-top: 5px;">{{techStackDesc}}</p>
      </div>
     <div class="column">
      <div class="image_wall_grid" style="margin-top: 0px;" />
     </div>
    </div>
   </div>
  `
});

Vue.component('tech-item-card', {
  props: ['name', 'tag', 'tagColor', 'imageIcon'],
  template: `
  <div class="card">
    <div class="card-content has-text-centered">
     <div class="content">
      <img :src=imageIcon :alt=name style="width: 80px; height: 80px;"/>
      <p class="title is-4">{{name}}</p>
      <p class="subtitle is-6"><span :class=tagColor class="tag">{{tag}}</span></p>
     </div>
    </div>
   </div>
  `
});

Vue.component('tech-stack-list', {
  props: ['techStackContentTitle', 'techStackList'],
  template: `
  <div id="tech-stack-list-id" style="padding: 0 30px 30px 30px;">
   <panel-title :name=techStackContentTitle />
   <div class="columns" style="margin-top: 10px;">
    <div class="column is-3" v-for="techStackItem in techStackList">
     <tech-item-card
        :key=techStackItem.id
        :name=techStackItem.name
        :tag=techStackItem.tag
        :tagColor=techStackItem.tagColor
        :imageIcon=techStackItem.imageIcon
     />
     <div class="content"
          style="background-color: #363636; padding: 20px;"
     >
      <div class="columns" style="height: 14px;">
       <p style="padding-left: 12px; color: #ffffff;">{{techStackItem.dependency.name}}</p>
      </div>
      <div class="columns is-mobile is-gapless" >
       <div class="column is-3" v-for="item in techStackItem.dependency.dependencyList">
        <img :src=item style="width: 40px; height: 40px;"/>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  `
});

const meetUs = {
  data: function () {
    return __WEBPACK_IMPORTED_MODULE_0__meetus_data_js__["a" /* default */];
  },
  template: `
   <div class="container is-fullhd">
     <member-list :members=members :meetUsTitle=meetUsTitle />
     <tech-stack-title :techStackTitle=techStackTitle :techStackDesc=techStackDesc />
     <tech-stack-list :techStackContentTitle=techStackContentTitle :techStackList=techStackList />
     <resume-modal :members=members />
   </div>
  `,
  mounted: __WEBPACK_IMPORTED_MODULE_1__meetus_mounted_js__["a" /* default */]
};
/* harmony default export */ __webpack_exports__["a"] = (meetUs);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const meetUsData = {
  meetUsTitle: "Meet our team",
  members: [{
    id: 1,
    name: "Berrys",
    fullName: "Berry Colour",
    title: "Engineer",
    imageUnhover: "./images/team/img/speaker-1.png",
    imageHover: "./images/team/img/speaker-1-hover.png",
    liveImage: "./images/team/leader2.jpg",
    age: 20,
    workYears: 5,
    blog: "http://rogerluo410.github.io",
    github: "https://github.com/rogerluo410",
    skills: [{ name: "HTML", value: 75, color: "cssProgress-info" }, { name: "Ruby on rails", value: 85, color: "cssProgress-danger" }, { name: "React Native", value: 75, color: "cssProgress-success" }, { name: "Vue.js", value: 55, color: "cssProgress-warning" }, { name: "Angular.js", value: 95, color: "cssProgress-success" }],
    projects: [{
      id: 1,
      name: "Project1",
      timeframe: "Jan 2010 - Mar 2012",
      role: "Developer",
      desc: "I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online."
    }, {
      id: 2,
      name: "Project2",
      timeframe: "Jan 2010 - Mar 2012",
      role: "Developer",
      desc: "I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online."
    }]
  }, {
    id: 2,
    name: "Berry",
    fullName: "Berry Tan",
    title: "Engineer",
    imageUnhover: "./images/team/img/speaker-1.png",
    imageHover: "./images/team/img/speaker-1-hover.png",
    liveImage: "./images/team/leader2.jpg",
    age: 20,
    workYears: 5,
    blog: "http://rogerluo410.github.io",
    github: "https://github.com/rogerluo410",
    skills: [{ name: "HTML", value: 1 }, { name: "Ruby on rails", value: 5 }, { name: "React Native", value: 5 }],
    projects: [{
      id: 1,
      name: "Project3",
      timeframe: "Jan 2012 - Mar 2015",
      role: "Developer",
      desc: "I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online."
    }, {
      id: 2,
      name: "Project4",
      timeframe: "Jan 2015 - Mar 2017",
      role: "Developer",
      desc: "I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online."
    }]
  }],
  techStackTitle: "Technology stack",
  techStackDesc: "We use technologies proven and supported by a large open-source community and adopted by leading companies like Apple, Netflix, Microsoft, and IBM.",
  techStackContentTitle: "Our technology stack",
  techStackList: [{
    id: 1,
    name: "Ruby on rails",
    tag: "Backend",
    tagColor: "is-success",
    imageIcon: "./images/tech/rails-icon.png",
    dependency: {
      name: "Modules",
      dependencyList: ["./images/tech/devise.png", "./images/tech/rspec.png"]
    }
  }]

};

/* harmony default export */ __webpack_exports__["a"] = (meetUsData);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_detect_platform_js__ = __webpack_require__(20);

const meetUsFunc = function () {

  $('#contact-button-div').show();

  $('.member-profile').click(function (e) {
    $('.cv-modal').addClass('is-active');
    $("body").addClass("modal-open");
  });

  $('.cv-modal-close').click(function (e) {
    $('.cv-modal').removeClass('is-active');
    $("body").removeClass("modal-open");
  });

  if (Object(__WEBPACK_IMPORTED_MODULE_0__shared_detect_platform_js__["a" /* default */])()) {
    //Meetus page
    $(".tech-stack-title-panel").hide();
    $("#tech-stack-list-id").addClass('white-bg');
  } else {
    //Meetus page
    $(".tech-stack-title-panel").show();
    $("#tech-stack-list-id").removeClass('white-bg');
  }

  //Creating 50 thumbnails inside .image_wall_grid
  //the images are stored on the server serially. So we can use a loop to generate the HTML.
  var images = "",
      count = 50;
  for (var i = 1; i <= count; i++) images += '<img src="http://thecodeplayer.com/u/uifaces/' + i + '.jpg" class="image_wall" />';

  //appending the images to .image_wall_grid
  $(".image_wall_grid").append(images);

  var d = 0; //delay
  var ry, tz, s; //transform params

  //animation time
  $(document).ready(function () {
    //fading out the thumbnails with style
    $(".image_wall").each(function () {
      d = Math.random() * 1000; //1ms to 1000ms delay
      $(this).delay(d).animate({ opacity: 0 }, {
        //while the thumbnails are fading out, we will use the step function to apply some transforms. variable n will give the current opacity in the animation.
        step: function (n) {
          s = 1 - n; //scale - will animate from 0 to 1
          $(this).css("transform", "scale(" + s + ")");
        },
        duration: 1000
      });
    }).promise().done(function () {
      //after *promising* and *doing* the fadeout animation we will bring the images back
      storm();
    });
  });

  //bringing back the images with style
  function storm() {
    $(".image_wall").each(function () {
      d = Math.random() * 1000;
      $(this).delay(d).animate({ opacity: 1 }, {
        step: function (n) {
          //rotating the images on the Y axis from 360deg to 0deg
          ry = (1 - n) * 360;
          //translating the images from 1000px to 0px
          tz = (1 - n) * 1000;
          //applying the transformation
          $(this).css("transform", "rotateY(" + ry + "deg) translateZ(" + tz + "px)");
        },
        duration: 3000,
        //some easing fun. Comes from the jquery easing plugin.
        easing: 'easeOutQuint'
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (meetUsFunc);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const cv = Vue.component('resume', {
  props: ['resumeInfo'],
  template: `
  <div class="container">
    <panel-title name="Profile" color="#ffffff" />
    <div id="user-profile" class="columns has-text-centered" style="margin-top: 10px;">
     <div class="column is-one-quarter">
       <p style="color: #ffffff;">{{resumeInfo.fullName}}</p>
       <p style="color: #ffffff;">Age: {{resumeInfo.age}}</p>
       <p style="color: #ffffff;">Working: {{resumeInfo.workYears}} years</p>
       <p>
         <span class="icon is-large">
          <a :href=resumeInfo.github target="_blank" title="Github"><i class="fab fa-github fa-1x"></i></a>&nbsp;
          <a :href=resumeInfo.blog target="_blank" alt="Blog"><i class="fab fa-blogger fa-1x"></i></a>
         </span>
       </p>
     </div>
     <div class="column is-5">
      <img :src=resumeInfo.liveImage class="shadow">
     </div>
    </div>

    <panel-title name="Skills" color="#ffffff" />
    <div class="columns is-multiline" style="margin-top: 10px;">
     <div class="column is-4" style="padding-top:  0px;" v-for="item in resumeInfo.skills">
      <p style="color: #ffffff">{{item.name}}</p>
      <div class="cssProgress">
        <div class="progress2">
          <div class="cssProgress-bar" :class=item.color :data-percent=item.value :style="'width: '+item.value+'%;'" >
            <span class="cssProgress-label">{{item.value}}%</span>
          </div>
        </div>
      </div>
     </div>
    </div>
    <panel-title name="Experience" color="#ffffff" />
    <section id="cd-timeline" class="cd-container">
      <div class="cd-timeline-block" v-for="item in resumeInfo.projects">
        <div class="cd-timeline-img cd-picture">
          <img src="./images/resume/cd-icon-picture.svg" alt="Picture">
        </div>

        <div class="cd-timeline-content">
          <h2 style="height: 0px;">{{item.name}}</h2>
          <span>{{item.timeframe}}</span>
          <br />
          <span>{{item.role}}</span>
          <br />
          <br />
          <span>{{item.desc}}</span>
        </div>
      </div>
    </section>
  </div>
  `
});
/* unused harmony export cv */


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_component_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contactus_data_js__ = __webpack_require__(84);



Vue.component('contact-us-info', {
  props: ['contactUsInfo'],
  template: `
  <div class="columns is-gapless is-mobile">
   <div class="column is-5" v-for="info in contactUsInfo">
     <p>
       <strong>{{info.name}}</strong>
       <br>
       {{info.value}}
     </p>
   </div>
  </div>
  `
});

Vue.component('contact-us-buttons', {
  template: `
  <div class="columns is-gapless is-mobile">
   <div class="column is-one-quarter is-3">
    <p><strong>Follow us:</strong></p>
   </div>
   <div class="column">
     <a class="button">
       <span class="icon">
         <i class="fab fa-github"></i>
       </span>
     </a>
     <a class="button">
       <span class="icon">
         <i class="fab fa-twitter"></i>
       </span>
     </a>
     <a class="button">
       <span class="icon">
         <i class="fab fa-facebook"></i>
       </span>
     </a>
   </div>
  </div>
  `
});

Vue.component('contact-us-title', {
  props: ['contactUsTitle', 'contactUsSubTitle'],
  template: `
  <div class="column is-four-fifths">
    <p class="title">{{contactUsTitle}}</p>
    <p class="subtitle" style="margin-top: 5px;">{{contactUsSubTitle}}</p>
  </div>
  `
});

Vue.component('google-map', {
  template: `
   <div id="google-map" class="shadow" style="width: 500px; height: 465px; margin-top: 5px;"></div>
  `
});

const contactUs = {
  data: function () {
    return __WEBPACK_IMPORTED_MODULE_1__contactus_data_js__["a" /* default */];
  },
  template: `
   <div>
    <panel-title :name=contactUsTitle />
    <div class='columns is-gapless' style="padding-bottom: 30px;padding-top: 30px;">
      <div class="column">
       <contact-form />
      </div>
      <div class="column">
       <google-map />
      </div>
    </div>
   </div>
  `,
  mounted: function () {
    $('#contact-button-div').hide();
    var map = new GMaps({
      el: '#google-map',
      lat: 30.519107,
      lng: 114.366855
    });

    map.addMarker({
      lat: 30.519107,
      lng: 114.366855,
      title: 'Wuhan',
      infoWindow: {
        content: '<span>312 Luoyu Rd, Hongshan Qu, Wuhan Shi, Hubei Sheng, China, 430072</span>'
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (contactUs);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const contactUsData = {
  contactUsTitle: "Contact",
  contactUsSubTitle: "Whatever your ambition, we’d love to design and build your next big idea or lend a hand on an existing one.",
  contactUsInfo: [{
    name: "Email Address:",
    value: "xxxx@madebyus.com"
  }, {
    name: "Skype:",
    value: "xxxx@madebyus.com"
  }, {
    name: "Telephone:",
    value: "0212-634255309"
  }]
};

/* harmony default export */ __webpack_exports__["a"] = (contactUsData);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_data_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_mounted_js__ = __webpack_require__(87);



Vue.component('company-home-header', {
  props: ['companyTitle', 'companySubTitle', 'companyButtonText', 'companyImageAddr'],
  template: `
  <div class="section">
    <div class="columns">
      <div class="column is-two-fifths">
          <p class="title">{{companyTitle}}</p>
          <p class="subtitle" style="margin-top: 5px;">{{companySubTitle}}</p>
          <div class="columns">
           <div class="column">
             <a href='/#/contactus' style="background-color: #ee4f4b;" class="button is-outlined has-text-white">
              {{companyButtonText}}
             </a>
           </div>
          </div>
      </div>
      <div class="column">
        <img :src=companyImageAddr>
      </div>
    </div>
  </div>
  `
});

Vue.component('work-process-introduce', {
  props: ['workProcessTitle', 'workProcessImage', 'workSprintImage'],
  template: `
  <div class="white-bg">
   <panel-title :name=workProcessTitle />
   <div class="columns" style="padding-right: 10px;">
    <div class="column is-half is-mobile">
     <img :src=workProcessImage />
    </div>
    <div class="column is-half is-mobile">
     <img :src=workSprintImage />
    </div>
   </div>
  </div>
 `
});

Vue.component('recent-case-card', {
  props: ['name', 'desc', 'caseImage'],
  template: `
     <div class="hovereffect" style="padding: 10px;">
      <img class="img-responsive" :src=caseImage alt="" />
      <div class="overlay">
       <h2>{{name}}</h2>
       <a class="info" href="/#/projects">Read more</a>
      </div>
     </div>
 `
});

Vue.component('recent-case-list', {
  props: ['recentCaseTitle', 'recentCaseList', 'recentCaseButtonText'],
  template: `
  <div >
    <panel-title :name=recentCaseTitle />
    <div class="columns is-centered ">
     <div class="column is-4" v-for="item in recentCaseList">
      <recent-case-card :name=item.name :desc=item.desc :caseImage=item.caseImage />
     </div>
    </div>
    <div class="column has-text-centered">
      <a href='/#/projects' style="background-color: #ee4f4b;"
         class="button is-outlined has-text-white go-to-top">
         {{recentCaseButtonText}}
       </a>
    </div>
  </div>
 `
});

Vue.component('home-member-introduce', {
  props: ['memberIntroduceTitle', 'memberStars', 'memberIntroduceButtonText'],
  template: `
  <div class="white-bg">
   <panel-title :name=memberIntroduceTitle />
   <div class="columns is-mobile is-centered" style="margin: 0 40px;">
     <member-item v-for="member in memberStars"
        :key=member.id
        :memberInfo=member
     />
   </div>
   <div class="column has-text-centered">
     <a href='/#/meetus' style="background-color: #ee4f4b;"
        class="button is-outlined has-text-white go-to-top">
        {{memberIntroduceButtonText}}
      </a>
   </div>
  </div>
  `
});

const home = {
  data: function () {
    return __WEBPACK_IMPORTED_MODULE_0__home_data_js__["a" /* default */];
  },
  template: `
   <div class="container is-fullhd">
     <company-home-header
      :companyTitle=companyTitle
      :companySubTitle=companySubTitle
      :companyButtonText=companyButtonText
      :companyImageAddr=companyImageAddr
     />
     <work-process-introduce
      :workProcessTitle=workProcessTitle
      :workProcessImage=workProcessImage
      :workSprintImage=workSprintImage
     />
     <recent-case-list
      :recentCaseTitle=recentCaseTitle
      :recentCaseList=recentCaseList
      :recentCaseButtonText=recentCaseButtonText
     />
     <home-member-introduce
      :memberIntroduceTitle=memberIntroduceTitle
      :memberStars=memberStars
      :memberIntroduceButtonText=memberIntroduceButtonText
     />
    </div>
  `,
  mounted: __WEBPACK_IMPORTED_MODULE_1__home_mounted_js__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (home);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const homeData = {
  companyTitle: "MadeByUs Believes",
  companySubTitle: "We understand the challenges faced when embracing new technology and tools. With this in mind, our expert team takes pride in ensuring you’re set up for success.",
  companyButtonText: "Let's build together",
  companyImageAddr: "./images/home/home-image.png",
  workProcessTitle: "Our work process",
  workProcessImage: "./images/home/web-design-process.png",
  workSprintImage: "./images/home/work-sprint.png",
  recentCaseTitle: "Recent cases",
  recentCaseList: [{
    id: 1,
    name: "project1",
    desc: "xxdsadasdas",
    caseImage: "./images/services/s2.jpg"
  }, {
    id: 2,
    name: "project2",
    desc: "xxdsadasdas",
    caseImage: "./images/services/s2.jpg"
  }, {
    id: 3,
    name: "project3",
    desc: "xxdsadasdas",
    caseImage: "./images/services/s2.jpg"
  }],
  recentCaseButtonText: "More cases",
  memberIntroduceTitle: "Member Stars",
  memberStars: [{
    id: 1,
    name: "Berry Colour",
    title: "Engineer",
    imageUnhover: "./images/team/img/speaker-1.png",
    imageHover: "./images/team/img/speaker-1-hover.png"
  }, {
    id: 2,
    name: "Berry Colour",
    title: "Engineer",
    imageUnhover: "./images/team/img/speaker-1.png",
    imageHover: "./images/team/img/speaker-1-hover.png"
  }],
  memberIntroduceButtonText: "View All"
};

/* harmony default export */ __webpack_exports__["a"] = (homeData);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const homeFunc = function () {
  $('#contact-button-div').show();

  $('.go-to-top').click(function (e) {
    jQuery('html,body').animate({ scrollTop: 0 }, 0);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (homeFunc);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const routerFunc = function () {

  $('.modal-button').click(function (e) {
    $('.contact-modal').addClass('is-active');
    $("body").addClass("modal-open");
  });

  $('.modal-close').click(function (e) {
    $('.contact-modal').removeClass('is-active');
    $("body").removeClass("modal-open");
  });

  $('.go-to-top').click(function (e) {
    jQuery('html,body').animate({ scrollTop: 0 }, 0);
  });

  //Hamburger
  var menuIsOpen = false,
      $menu = $(".menu"),
      $menuItem = $(".menu-item"),
      $menuBg = $(".menu-bg"),
      $menuToggle = $(".menu-toggle"),
      menuWidth = 300,
      menuItemOffset = 150,
      menuBgSkew = -10,
      timeScale = { v: 1 };
  TweenMax.globalTimeScale(timeScale.v);

  TweenMax.set($menuItem, {
    x: -menuItemOffset
  });
  TweenMax.set($menuBg, {
    skewX: menuBgSkew
  });
  function setTimescale(v) {
    TweenMax.to(timeScale, 0.5, {
      v: v,
      ease: Quad.easeInOut,
      onUpdate: updateTimescale,
      onComplete: updateTimescale
    });
  }
  function updateTimescale() {
    TweenMax.globalTimeScale(timeScale.v);
  }

  function openMenu() {
    menuIsOpen = true;
    TweenMax.to($menu, 0.55, {
      x: menuWidth,
      force3D: false,
      ease: Elastic.easeOut,
      easeParams: [1.01, 0.8]
    });
    TweenMax.to($menuBg, 0.55, {
      skewX: 0,
      force3D: false,
      ease: Elastic.easeOut,
      easeParams: [1.01, 0.8]
    });
    $menuItem.each(function (i) {
      TweenMax.to($(this), 0.7 + i * 0.05, {
        delay: 0.02 * i,
        x: 0,
        force3D: false,
        // ease:Quint.easeOut
        ease: Elastic.easeOut,
        easeParams: [1.1, 0.6]
      });
    });
  }
  function closeMenu() {
    menuIsOpen = false;
    TweenMax.to($menu, 0.2, {
      x: -100,
      ease: Quad.easeIn,
      force3D: false
    });
    TweenMax.set($menuBg, {
      delay: 0.2,
      skewX: menuBgSkew,
      force3D: false
    });
    $menuItem.each(function (i) {
      TweenMax.to($(this), 0.3 + 0.05 * i, {
        x: -menuItemOffset,
        ease: Quad.easeIn,
        force3D: false
      });
    });
  }
  function toggleMenu() {
    if (menuIsOpen) {
      $menuToggle.removeClass('menu-open');
      closeMenu();
    } else {
      $menuToggle.addClass('menu-open');
      openMenu();
    }
  }
  $menuToggle.click(function () {
    toggleMenu();
  });
  $menuItem.click(function () {
    toggleMenu();
  });
  /* ----- end ----- */

  var scrollOffset = function (e) {
    var e = e || window.event;
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrolltop > 10) {
      $("#navbar").addClass('navbar-fixed-top');
      $("body").css("padding-top", "120px");
    } else {
      $("#navbar").removeClass('navbar-fixed-top');
      $("body").css("padding-top", "0px");
    }
  };

  //resize screen size
  var resizeFun = function (event) {
    if (event.currentTarget.outerWidth < 1024) {
      $("#humburger").show();
      $("#contact-button").show();
      $("#contact-button").removeClass('button');
      $("#contact-button").css("background-color", "");
      $("#contact-icon").show();
      $("#contact-text").hide();
      $("#navbar").addClass('navbar-fixed-top');
      $("body").css("padding-top", "60px");
      $("#brand-title").addClass('has-text-centered');
      $("#brand-title").css("width", "200px");
      $("#navbar").css("height", "60px");
      $("#brand-subtitle").hide();

      $('.project-top-bar').css("top", "60px");
    } else {
      $("#humburger").hide();
      $("#contact-button").show();
      $("#contact-button").addClass('button');
      $("#contact-button").css("background-color", "#ee4f4b");
      $("#contact-icon").hide();
      $("#contact-text").show();
      $("#navbar").removeClass('navbar-fixed-top');
      $("body").css("padding-top", "0px");
      $("#brand-title").removeClass('has-text-centered');
      $("#navbar").css("height", "85px");
      $("#brand-subtitle").show();

      $('.project-top-bar').css("top", "85px");

      window.onscroll = scrollOffset;
    }
  };
  window.onresize = resizeFun;
  window.onload = resizeFun;
};

/* harmony default export */ __webpack_exports__["a"] = (routerFunc);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

const merge = __webpack_require__(90);
const common = __webpack_require__(186);
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map'
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _values2 = __webpack_require__(91);

var _values3 = _interopRequireDefault(_values2);

var _unionWith2 = __webpack_require__(47);

var _unionWith3 = _interopRequireDefault(_unionWith2);

var _mergeWith2 = __webpack_require__(33);

var _mergeWith3 = _interopRequireDefault(_mergeWith2);

var _differenceWith2 = __webpack_require__(38);

var _differenceWith3 = _interopRequireDefault(_differenceWith2);

var _joinArrays = __webpack_require__(155);

var _joinArrays2 = _interopRequireDefault(_joinArrays);

var _joinArraysSmart = __webpack_require__(177);

var _unique = __webpack_require__(185);

var _unique2 = _interopRequireDefault(_unique);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function merge() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  // This supports
  // merge([<object>] | ...<object>)
  // merge({ customizeArray: <fn>, customizeObject: <fn>})([<object>] | ...<object>)
  // where fn = (a, b, key)
  if (sources.length === 1) {
    if (Array.isArray(sources[0])) {
      return _mergeWith3.default.apply(undefined, [{}].concat(_toConsumableArray(sources[0]), [(0, _joinArrays2.default)(sources[0])]));
    }

    if (sources[0].customizeArray || sources[0].customizeObject) {
      return function () {
        for (var _len2 = arguments.length, structures = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          structures[_key2] = arguments[_key2];
        }

        if (Array.isArray(structures[0])) {
          return _mergeWith3.default.apply(undefined, [{}].concat(_toConsumableArray(structures[0]), [(0, _joinArrays2.default)(sources[0])]));
        }

        return _mergeWith3.default.apply(undefined, [{}].concat(structures, [(0, _joinArrays2.default)(sources[0])]));
      };
    }

    return sources[0];
  }

  return _mergeWith3.default.apply(undefined, [{}].concat(sources, [(0, _joinArrays2.default)()]));
}

var mergeSmart = merge({
  customizeArray: function customizeArray(a, b, key) {
    if (isRule(key.split('.').slice(-1)[0])) {
      return (0, _unionWith3.default)(a, b, _joinArraysSmart.uniteRules.bind(null, {}, key));
    }

    return null;
  }
});

var mergeMultiple = function mergeMultiple() {
  for (var _len3 = arguments.length, sources = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    sources[_key3] = arguments[_key3];
  }

  return (0, _values3.default)(merge(sources));
};

// rules: { <field>: <'append'|'prepend'|'replace'> }
// All default to append but you can override here
var mergeStrategy = function mergeStrategy() {
  var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return merge({
    customizeArray: _customizeArray(rules),
    customizeObject: customizeObject(rules)
  });
};
var mergeSmartStrategy = function mergeSmartStrategy() {
  var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return merge({
    customizeArray: function customizeArray(a, b, key) {
      var topKey = key.split('.').slice(-1)[0];

      if (isRule(topKey)) {
        switch (rules[key]) {
          case 'prepend':
            return [].concat(_toConsumableArray((0, _differenceWith3.default)(b, a, function (newRule, seenRule) {
              return (0, _joinArraysSmart.uniteRules)(rules, key, newRule, seenRule, 'prepend');
            })), _toConsumableArray(a));
          case 'replace':
            return b;
          default:
            // append
            return (0, _unionWith3.default)(a, b, _joinArraysSmart.uniteRules.bind(null, rules, key));
        }
      }

      return _customizeArray(rules)(a, b, key);
    },
    customizeObject: customizeObject(rules)
  });
};

function _customizeArray(rules) {
  return function (a, b, key) {
    switch (rules[key]) {
      case 'prepend':
        return [].concat(_toConsumableArray(b), _toConsumableArray(a));
      case 'replace':
        return b;
      default:
        // append
        return false;
    }
  };
}

function customizeObject(rules) {
  return function (a, b, key) {
    switch (rules[key]) {
      case 'prepend':
        return (0, _mergeWith3.default)({}, b, a, (0, _joinArrays2.default)());
      case 'replace':
        return b;
      default:
        // append
        return false;
    }
  };
}

function isRule(key) {
  return ['preLoaders', 'loaders', 'postLoaders', 'rules'].indexOf(key) >= 0;
}

module.exports = merge;
module.exports.multiple = mergeMultiple;
module.exports.smart = mergeSmart;
module.exports.strategy = mergeStrategy;
module.exports.smartStrategy = mergeSmartStrategy;
module.exports.unique = _unique2.default;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(92),
    keys = __webpack_require__(9);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(41);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObjectLike = __webpack_require__(1);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(6);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isLength = __webpack_require__(45),
    isObjectLike = __webpack_require__(1);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(25),
    nativeKeys = __webpack_require__(101);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(46);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(6),
    isArguments = __webpack_require__(21),
    isArray = __webpack_require__(4);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(104);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(106),
    shortOut = __webpack_require__(112);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(107),
    defineProperty = __webpack_require__(50),
    identity = __webpack_require__(49);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(13),
    isMasked = __webpack_require__(109),
    isObject = __webpack_require__(2),
    toSource = __webpack_require__(51);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(110);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(28),
    arrayIncludes = __webpack_require__(53),
    arrayIncludesWith = __webpack_require__(54),
    cacheHas = __webpack_require__(30),
    createSet = __webpack_require__(137),
    setToArray = __webpack_require__(31);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(115),
    ListCache = __webpack_require__(15),
    Map = __webpack_require__(29);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(116),
    hashDelete = __webpack_require__(117),
    hashGet = __webpack_require__(118),
    hashHas = __webpack_require__(119),
    hashSet = __webpack_require__(120);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(134),
    baseIsNaN = __webpack_require__(135),
    strictIndexOf = __webpack_require__(136);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(55),
    noop = __webpack_require__(138),
    setToArray = __webpack_require__(31);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(34),
    assignMergeValue = __webpack_require__(57),
    baseFor = __webpack_require__(145),
    baseMergeDeep = __webpack_require__(147),
    isObject = __webpack_require__(2),
    keysIn = __webpack_require__(18),
    safeGet = __webpack_require__(64);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15),
    Map = __webpack_require__(29),
    MapCache = __webpack_require__(52);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(146);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(57),
    cloneBuffer = __webpack_require__(58),
    cloneTypedArray = __webpack_require__(59),
    copyArray = __webpack_require__(61),
    initCloneObject = __webpack_require__(62),
    isArguments = __webpack_require__(21),
    isArray = __webpack_require__(4),
    isArrayLikeObject = __webpack_require__(32),
    isBuffer = __webpack_require__(10),
    isFunction = __webpack_require__(13),
    isObject = __webpack_require__(2),
    isPlainObject = __webpack_require__(63),
    isTypedArray = __webpack_require__(23),
    safeGet = __webpack_require__(64),
    toPlainObject = __webpack_require__(149);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(8),
    keysIn = __webpack_require__(18);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2),
    isPrototype = __webpack_require__(25),
    nativeKeysIn = __webpack_require__(151);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(27),
    isIterateeCall = __webpack_require__(153);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(7),
    isArrayLike = __webpack_require__(12),
    isIndex = __webpack_require__(44),
    isObject = __webpack_require__(2);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(28),
    arrayIncludes = __webpack_require__(53),
    arrayIncludesWith = __webpack_require__(54),
    arrayMap = __webpack_require__(41),
    baseUnary = __webpack_require__(11),
    cacheHas = __webpack_require__(30);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeWith2 = __webpack_require__(33);

var _mergeWith3 = _interopRequireDefault(_mergeWith2);

var _isPlainObject2 = __webpack_require__(63);

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _isFunction2 = __webpack_require__(13);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _cloneDeep2 = __webpack_require__(156);

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

exports.default = joinArrays;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isArray = Array.isArray;

function joinArrays() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      customizeArray = _ref.customizeArray,
      customizeObject = _ref.customizeObject,
      key = _ref.key;

  return function _joinArrays(a, b, k) {
    var newKey = key ? key + '.' + k : k;

    if ((0, _isFunction3.default)(a) && (0, _isFunction3.default)(b)) {
      return function () {
        return _joinArrays(a.apply(undefined, arguments), b.apply(undefined, arguments), k);
      };
    }
    if (isArray(a) && isArray(b)) {
      var customResult = customizeArray && customizeArray(a, b, newKey);

      return customResult || [].concat(_toConsumableArray(a), _toConsumableArray(b));
    }

    if ((0, _isPlainObject3.default)(a) && (0, _isPlainObject3.default)(b)) {
      var _customResult = customizeObject && customizeObject(a, b, newKey);

      return _customResult || (0, _mergeWith3.default)({}, a, b, joinArrays({
        customizeArray: customizeArray,
        customizeObject: customizeObject,
        key: newKey
      }));
    }

    if ((0, _isPlainObject3.default)(b)) {
      return (0, _cloneDeep3.default)(b);
    }

    if (isArray(b)) {
      return [].concat(_toConsumableArray(b));
    }

    return b;
  };
}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(157);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(34),
    arrayEach = __webpack_require__(158),
    assignValue = __webpack_require__(65),
    baseAssign = __webpack_require__(159),
    baseAssignIn = __webpack_require__(160),
    cloneBuffer = __webpack_require__(58),
    copyArray = __webpack_require__(61),
    copySymbols = __webpack_require__(161),
    copySymbolsIn = __webpack_require__(163),
    getAllKeys = __webpack_require__(68),
    getAllKeysIn = __webpack_require__(164),
    getTag = __webpack_require__(19),
    initCloneArray = __webpack_require__(168),
    initCloneByTag = __webpack_require__(169),
    initCloneObject = __webpack_require__(62),
    isArray = __webpack_require__(4),
    isBuffer = __webpack_require__(10),
    isMap = __webpack_require__(173),
    isObject = __webpack_require__(2),
    isSet = __webpack_require__(175),
    keys = __webpack_require__(9);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 158 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(8),
    keys = __webpack_require__(9);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(8),
    keysIn = __webpack_require__(18);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(8),
    getSymbols = __webpack_require__(39);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(8),
    getSymbolsIn = __webpack_require__(67);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(69),
    getSymbolsIn = __webpack_require__(67),
    keysIn = __webpack_require__(18);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(36),
    cloneDataView = __webpack_require__(170),
    cloneRegExp = __webpack_require__(171),
    cloneSymbol = __webpack_require__(172),
    cloneTypedArray = __webpack_require__(59);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(36);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(6);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(174),
    baseUnary = __webpack_require__(11),
    nodeUtil = __webpack_require__(24);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(1);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(176),
    baseUnary = __webpack_require__(11),
    nodeUtil = __webpack_require__(24);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(1);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniteEntries = exports.uniteRules = undefined;

var _unionWith2 = __webpack_require__(47);

var _unionWith3 = _interopRequireDefault(_unionWith2);

var _differenceWith2 = __webpack_require__(38);

var _differenceWith3 = _interopRequireDefault(_differenceWith2);

var _mergeWith2 = __webpack_require__(33);

var _mergeWith3 = _interopRequireDefault(_mergeWith2);

var _isEqual2 = __webpack_require__(178);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isArray = Array.isArray;

function uniteRules(rules, key, newRule, rule) {
  if (String(rule.test) !== String(newRule.test) || (newRule.enforce || rule.enforce) && rule.enforce !== newRule.enforce || newRule.include && !isSameValue(rule.include, newRule.include) || newRule.exclude && !isSameValue(rule.exclude, newRule.exclude)) {
    return false;
  } else if (!rule.test && !rule.include && !rule.exclude && (rule.loader && rule.loader.split('?')[0]) !== (newRule.loader && newRule.loader.split('?')[0])) {
    // Don't merge the rule if there isn't any identifying fields and the loaders don't match
    return false;
  } else if ((rule.include || rule.exclude) && !newRule.include && !newRule.exclude) {
    // Don't merge child without include/exclude to parent that has either
    return false;
  }

  // apply the same logic for oneOf
  if (rule.oneOf && newRule.oneOf) {
    rule.oneOf = (0, _unionWith3.default)(rule.oneOf, newRule.oneOf, uniteRules.bind(null, {}, 'oneOf'));

    return true;
  }

  // newRule.loader should always override use, loaders and oneOf
  if (newRule.loader) {
    var optionsKey = newRule.options ? 'options' : newRule.query && 'query';

    delete rule.use;
    delete rule.loaders;
    delete rule.oneOf;

    rule.loader = newRule.loader;

    if (optionsKey) {
      rule[optionsKey] = newRule[optionsKey];
    }
  } else if (newRule.oneOf) {
    delete rule.use;
    delete rule.loaders;
    delete rule.loader;

    rule.oneOf = newRule.oneOf;
  } else if ((rule.use || rule.loaders || rule.loader) && (newRule.use || newRule.loaders)) {
    var expandEntry = function expandEntry(loader) {
      return typeof loader === 'string' ? { loader: loader } : loader;
    };
    // this is only here to avoid breaking existing tests
    var unwrapEntry = function unwrapEntry(entry) {
      return !entry.options && !entry.query ? entry.loader : entry;
    };

    var entries = void 0;
    if (rule.loader) {
      var _optionsKey = rule.options ? 'options' : rule.query && 'query';
      entries = [{ loader: rule.loader }];

      if (_optionsKey) {
        entries[0][_optionsKey] = rule[_optionsKey];
      }

      delete rule.loader;

      if (_optionsKey) {
        delete rule[_optionsKey];
      }
    } else {
      entries = [].concat(rule.use || rule.loaders).map(expandEntry);
    }
    var newEntries = [].concat(newRule.use || newRule.loaders).map(expandEntry);

    var loadersKey = rule.use || newRule.use ? 'use' : 'loaders';
    var resolvedKey = key + '.' + loadersKey;

    switch (rules[resolvedKey]) {
      case 'prepend':
        rule[loadersKey] = [].concat(_toConsumableArray((0, _differenceWith3.default)(newEntries, entries, uniteEntries)), _toConsumableArray(entries)).map(unwrapEntry);
        break;
      case 'replace':
        rule[loadersKey] = newRule.use || newRule.loaders;
        break;
      default:
        rule[loadersKey] = combineEntries(newEntries, entries).map(unwrapEntry);
    }
  }

  if (newRule.include) {
    rule.include = newRule.include;
  }

  if (newRule.exclude) {
    rule.exclude = newRule.exclude;
  }

  return true;
}

/**
 * Check equality of two values using lodash's isEqual
 * Arrays need to be sorted for equality checking
 * but clone them first so as not to disrupt the sort order in tests
 */
function isSameValue(a, b) {
  var _map = [a, b].map(function (value) {
    return isArray(value) ? [].concat(_toConsumableArray(value)).sort() : value;
  }),
      _map2 = _slicedToArray(_map, 2),
      propA = _map2[0],
      propB = _map2[1];

  return (0, _isEqual3.default)(propA, propB);
}

function areEqualEntries(newEntry, entry) {
  var loaderNameRe = /^([^?]+)/ig;

  var _entry$loader$match = entry.loader.match(loaderNameRe),
      _entry$loader$match2 = _slicedToArray(_entry$loader$match, 1),
      loaderName = _entry$loader$match2[0];

  var _newEntry$loader$matc = newEntry.loader.match(loaderNameRe),
      _newEntry$loader$matc2 = _slicedToArray(_newEntry$loader$matc, 1),
      newLoaderName = _newEntry$loader$matc2[0];

  return loaderName === newLoaderName;
}

function uniteEntries(newEntry, entry) {
  if (areEqualEntries(newEntry, entry)) {
    // Replace query values with newer ones
    (0, _mergeWith3.default)(entry, newEntry);
    return true;
  }
  return false;
}

/* Combines entries and newEntries, while respecting the order of loaders in each.

Iterates through new entries. If the new entry also exists in existing entries,
we'll put in all of the loaders from existing entries that come before it (in case
those are pre-requisites). Any remaining existing entries are added at the end.

Since webpack processes right-to-left, we're working backwards through the arrays
*/
function combineEntries(newEntries, existingEntries) {
  var resultSet = [];

  // We're iterating through newEntries, this keeps track of where we are in the existingEntries
  var existingEntriesIteratorIndex = existingEntries.length - 1;

  for (var i = newEntries.length - 1; i >= 0; i -= 1) {
    var currentEntry = newEntries[i];
    var indexInExistingEntries = findLastIndexUsingComparinator(existingEntries, currentEntry, areEqualEntries, existingEntriesIteratorIndex);
    var hasEquivalentEntryInExistingEntries = indexInExistingEntries !== -1;

    if (hasEquivalentEntryInExistingEntries) {
      // If the same entry exists in existing entries, we should add all of the entries that
      // come before to maintain order
      for (var j = existingEntriesIteratorIndex; j > indexInExistingEntries; j -= 1) {
        var existingEntry = existingEntries[j];

        // If this entry also exists in new entries, we'll add as part of iterating through
        // new entries so that if there's a conflict between existing entries and new entries,
        // new entries order wins
        var hasMatchingEntryInNewEntries = findLastIndexUsingComparinator(newEntries, existingEntry, areEqualEntries, i) !== -1;

        if (!hasMatchingEntryInNewEntries) {
          resultSet.unshift(existingEntry);
        }
        existingEntriesIteratorIndex -= 1;
      }

      uniteEntries(currentEntry, existingEntries[existingEntriesIteratorIndex]);
      // uniteEntries mutates the second parameter to be a merged version, so that's what's pushed
      resultSet.unshift(existingEntries[existingEntriesIteratorIndex]);

      existingEntriesIteratorIndex -= 1;
    } else {
      var alreadyHasMatchingEntryInResultSet = findLastIndexUsingComparinator(resultSet, currentEntry, areEqualEntries) !== -1;

      if (!alreadyHasMatchingEntryInResultSet) {
        resultSet.unshift(currentEntry);
      }
    }
  }

  // Add remaining existing entries
  for (existingEntriesIteratorIndex; existingEntriesIteratorIndex >= 0; existingEntriesIteratorIndex -= 1) {

    var _existingEntry = existingEntries[existingEntriesIteratorIndex];
    var _alreadyHasMatchingEntryInResultSet = findLastIndexUsingComparinator(resultSet, _existingEntry, areEqualEntries) !== -1;

    if (!_alreadyHasMatchingEntryInResultSet) {
      resultSet.unshift(_existingEntry);
    }
  }

  return resultSet;
}

function findLastIndexUsingComparinator(entries, entryToFind, comparinator, startingIndex) {
  startingIndex = startingIndex || entries.length - 1;
  for (var i = startingIndex; i >= 0; i -= 1) {
    if (areEqualEntries(entryToFind, entries[i])) {
      return i;
    }
  }
  return -1;
}

exports.uniteRules = uniteRules;
exports.uniteEntries = uniteEntries;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(179);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(180),
    isObjectLike = __webpack_require__(1);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(34),
    equalArrays = __webpack_require__(70),
    equalByTag = __webpack_require__(182),
    equalObjects = __webpack_require__(184),
    getTag = __webpack_require__(19),
    isArray = __webpack_require__(4),
    isBuffer = __webpack_require__(10),
    isTypedArray = __webpack_require__(23);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 181 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(6),
    Uint8Array = __webpack_require__(60),
    eq = __webpack_require__(7),
    equalArrays = __webpack_require__(70),
    mapToArray = __webpack_require__(183),
    setToArray = __webpack_require__(31);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 183 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(68);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _differenceWith2 = __webpack_require__(38);

var _differenceWith3 = _interopRequireDefault(_differenceWith2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function mergeUnique(key, uniques) {
  var getter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (a) {
    return a;
  };

  return function (a, b, k) {
    return k === key && [].concat(_toConsumableArray(a), _toConsumableArray((0, _differenceWith3.default)(b, a, function (item) {
      return uniques.indexOf(getter(item)) >= 0;
    })));
  };
}

exports.default = mergeUnique;

/***/ }),
/* 186 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports = {
  entry: [__dirname + "/app/main.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }]
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ })
/******/ ]);