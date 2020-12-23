(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
const MonkeyLearn = require('monkeylearn');
const Sentiment = require('sentiment');

global.window.MonkeyLearn = MonkeyLearn;
global.window.Sentiment = Sentiment;
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"monkeylearn":198,"sentiment":214}],2:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

},{"./_getNative":95,"./_root":139}],3:[function(require,module,exports){
var hashClear = require('./_hashClear'),
    hashDelete = require('./_hashDelete'),
    hashGet = require('./_hashGet'),
    hashHas = require('./_hashHas'),
    hashSet = require('./_hashSet');

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

},{"./_hashClear":103,"./_hashDelete":104,"./_hashGet":105,"./_hashHas":106,"./_hashSet":107}],4:[function(require,module,exports){
var listCacheClear = require('./_listCacheClear'),
    listCacheDelete = require('./_listCacheDelete'),
    listCacheGet = require('./_listCacheGet'),
    listCacheHas = require('./_listCacheHas'),
    listCacheSet = require('./_listCacheSet');

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

},{"./_listCacheClear":119,"./_listCacheDelete":120,"./_listCacheGet":121,"./_listCacheHas":122,"./_listCacheSet":123}],5:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

},{"./_getNative":95,"./_root":139}],6:[function(require,module,exports){
var mapCacheClear = require('./_mapCacheClear'),
    mapCacheDelete = require('./_mapCacheDelete'),
    mapCacheGet = require('./_mapCacheGet'),
    mapCacheHas = require('./_mapCacheHas'),
    mapCacheSet = require('./_mapCacheSet');

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

},{"./_mapCacheClear":124,"./_mapCacheDelete":125,"./_mapCacheGet":126,"./_mapCacheHas":127,"./_mapCacheSet":128}],7:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

},{"./_getNative":95,"./_root":139}],8:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

},{"./_getNative":95,"./_root":139}],9:[function(require,module,exports){
var MapCache = require('./_MapCache'),
    setCacheAdd = require('./_setCacheAdd'),
    setCacheHas = require('./_setCacheHas');

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

},{"./_MapCache":6,"./_setCacheAdd":141,"./_setCacheHas":142}],10:[function(require,module,exports){
var ListCache = require('./_ListCache'),
    stackClear = require('./_stackClear'),
    stackDelete = require('./_stackDelete'),
    stackGet = require('./_stackGet'),
    stackHas = require('./_stackHas'),
    stackSet = require('./_stackSet');

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

},{"./_ListCache":4,"./_stackClear":146,"./_stackDelete":147,"./_stackGet":148,"./_stackHas":149,"./_stackSet":150}],11:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":139}],12:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

},{"./_root":139}],13:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

},{"./_getNative":95,"./_root":139}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
var baseTimes = require('./_baseTimes'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isIndex = require('./_isIndex'),
    isTypedArray = require('./isTypedArray');

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

},{"./_baseTimes":64,"./_isIndex":112,"./isArguments":165,"./isArray":166,"./isBuffer":169,"./isTypedArray":181}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
var baseAssignValue = require('./_baseAssignValue'),
    eq = require('./eq');

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

},{"./_baseAssignValue":27,"./eq":159}],23:[function(require,module,exports){
var baseAssignValue = require('./_baseAssignValue'),
    eq = require('./eq');

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

},{"./_baseAssignValue":27,"./eq":159}],24:[function(require,module,exports){
var eq = require('./eq');

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

},{"./eq":159}],25:[function(require,module,exports){
var copyObject = require('./_copyObject'),
    keys = require('./keys');

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

},{"./_copyObject":77,"./keys":183}],26:[function(require,module,exports){
var copyObject = require('./_copyObject'),
    keysIn = require('./keysIn');

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

},{"./_copyObject":77,"./keysIn":184}],27:[function(require,module,exports){
var defineProperty = require('./_defineProperty');

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

},{"./_defineProperty":85}],28:[function(require,module,exports){
var Stack = require('./_Stack'),
    arrayEach = require('./_arrayEach'),
    assignValue = require('./_assignValue'),
    baseAssign = require('./_baseAssign'),
    baseAssignIn = require('./_baseAssignIn'),
    cloneBuffer = require('./_cloneBuffer'),
    copyArray = require('./_copyArray'),
    copySymbols = require('./_copySymbols'),
    copySymbolsIn = require('./_copySymbolsIn'),
    getAllKeys = require('./_getAllKeys'),
    getAllKeysIn = require('./_getAllKeysIn'),
    getTag = require('./_getTag'),
    initCloneArray = require('./_initCloneArray'),
    initCloneByTag = require('./_initCloneByTag'),
    initCloneObject = require('./_initCloneObject'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isMap = require('./isMap'),
    isObject = require('./isObject'),
    isSet = require('./isSet'),
    keys = require('./keys'),
    keysIn = require('./keysIn');

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

},{"./_Stack":10,"./_arrayEach":15,"./_assignValue":23,"./_baseAssign":25,"./_baseAssignIn":26,"./_cloneBuffer":71,"./_copyArray":76,"./_copySymbols":78,"./_copySymbolsIn":79,"./_getAllKeys":91,"./_getAllKeysIn":92,"./_getTag":100,"./_initCloneArray":108,"./_initCloneByTag":109,"./_initCloneObject":110,"./isArray":166,"./isBuffer":169,"./isMap":173,"./isObject":175,"./isSet":178,"./keys":183,"./keysIn":184}],29:[function(require,module,exports){
var isObject = require('./isObject');

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

},{"./isObject":175}],30:[function(require,module,exports){
var baseForOwn = require('./_baseForOwn'),
    createBaseEach = require('./_createBaseEach');

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

},{"./_baseForOwn":34,"./_createBaseEach":82}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
var arrayPush = require('./_arrayPush'),
    isFlattenable = require('./_isFlattenable');

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

},{"./_arrayPush":19,"./_isFlattenable":111}],33:[function(require,module,exports){
var createBaseFor = require('./_createBaseFor');

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

},{"./_createBaseFor":83}],34:[function(require,module,exports){
var baseFor = require('./_baseFor'),
    keys = require('./keys');

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

},{"./_baseFor":33,"./keys":183}],35:[function(require,module,exports){
var castPath = require('./_castPath'),
    toKey = require('./_toKey');

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;

},{"./_castPath":69,"./_toKey":153}],36:[function(require,module,exports){
var arrayPush = require('./_arrayPush'),
    isArray = require('./isArray');

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

},{"./_arrayPush":19,"./isArray":166}],37:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

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

},{"./_Symbol":11,"./_getRawTag":97,"./_objectToString":136}],38:[function(require,module,exports){
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

},{}],39:[function(require,module,exports){
var baseFindIndex = require('./_baseFindIndex'),
    baseIsNaN = require('./_baseIsNaN'),
    strictIndexOf = require('./_strictIndexOf');

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

},{"./_baseFindIndex":31,"./_baseIsNaN":45,"./_strictIndexOf":151}],40:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

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

},{"./_baseGetTag":37,"./isObjectLike":176}],41:[function(require,module,exports){
var baseIsEqualDeep = require('./_baseIsEqualDeep'),
    isObjectLike = require('./isObjectLike');

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

},{"./_baseIsEqualDeep":42,"./isObjectLike":176}],42:[function(require,module,exports){
var Stack = require('./_Stack'),
    equalArrays = require('./_equalArrays'),
    equalByTag = require('./_equalByTag'),
    equalObjects = require('./_equalObjects'),
    getTag = require('./_getTag'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isTypedArray = require('./isTypedArray');

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

},{"./_Stack":10,"./_equalArrays":86,"./_equalByTag":87,"./_equalObjects":88,"./_getTag":100,"./isArray":166,"./isBuffer":169,"./isTypedArray":181}],43:[function(require,module,exports){
var getTag = require('./_getTag'),
    isObjectLike = require('./isObjectLike');

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

},{"./_getTag":100,"./isObjectLike":176}],44:[function(require,module,exports){
var Stack = require('./_Stack'),
    baseIsEqual = require('./_baseIsEqual');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

},{"./_Stack":10,"./_baseIsEqual":41}],45:[function(require,module,exports){
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

},{}],46:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isMasked = require('./_isMasked'),
    isObject = require('./isObject'),
    toSource = require('./_toSource');

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

},{"./_isMasked":116,"./_toSource":154,"./isFunction":170,"./isObject":175}],47:[function(require,module,exports){
var getTag = require('./_getTag'),
    isObjectLike = require('./isObjectLike');

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

},{"./_getTag":100,"./isObjectLike":176}],48:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isLength = require('./isLength'),
    isObjectLike = require('./isObjectLike');

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

},{"./_baseGetTag":37,"./isLength":172,"./isObjectLike":176}],49:[function(require,module,exports){
var baseMatches = require('./_baseMatches'),
    baseMatchesProperty = require('./_baseMatchesProperty'),
    identity = require('./identity'),
    isArray = require('./isArray'),
    property = require('./property');

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;

},{"./_baseMatches":52,"./_baseMatchesProperty":53,"./identity":163,"./isArray":166,"./property":188}],50:[function(require,module,exports){
var isPrototype = require('./_isPrototype'),
    nativeKeys = require('./_nativeKeys');

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

},{"./_isPrototype":117,"./_nativeKeys":133}],51:[function(require,module,exports){
var isObject = require('./isObject'),
    isPrototype = require('./_isPrototype'),
    nativeKeysIn = require('./_nativeKeysIn');

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

},{"./_isPrototype":117,"./_nativeKeysIn":134,"./isObject":175}],52:[function(require,module,exports){
var baseIsMatch = require('./_baseIsMatch'),
    getMatchData = require('./_getMatchData'),
    matchesStrictComparable = require('./_matchesStrictComparable');

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

},{"./_baseIsMatch":44,"./_getMatchData":94,"./_matchesStrictComparable":130}],53:[function(require,module,exports){
var baseIsEqual = require('./_baseIsEqual'),
    get = require('./get'),
    hasIn = require('./hasIn'),
    isKey = require('./_isKey'),
    isStrictComparable = require('./_isStrictComparable'),
    matchesStrictComparable = require('./_matchesStrictComparable'),
    toKey = require('./_toKey');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;

},{"./_baseIsEqual":41,"./_isKey":114,"./_isStrictComparable":118,"./_matchesStrictComparable":130,"./_toKey":153,"./get":161,"./hasIn":162}],54:[function(require,module,exports){
var Stack = require('./_Stack'),
    assignMergeValue = require('./_assignMergeValue'),
    baseFor = require('./_baseFor'),
    baseMergeDeep = require('./_baseMergeDeep'),
    isObject = require('./isObject'),
    keysIn = require('./keysIn'),
    safeGet = require('./_safeGet');

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

},{"./_Stack":10,"./_assignMergeValue":22,"./_baseFor":33,"./_baseMergeDeep":55,"./_safeGet":140,"./isObject":175,"./keysIn":184}],55:[function(require,module,exports){
var assignMergeValue = require('./_assignMergeValue'),
    cloneBuffer = require('./_cloneBuffer'),
    cloneTypedArray = require('./_cloneTypedArray'),
    copyArray = require('./_copyArray'),
    initCloneObject = require('./_initCloneObject'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    isBuffer = require('./isBuffer'),
    isFunction = require('./isFunction'),
    isObject = require('./isObject'),
    isPlainObject = require('./isPlainObject'),
    isTypedArray = require('./isTypedArray'),
    safeGet = require('./_safeGet'),
    toPlainObject = require('./toPlainObject');

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

},{"./_assignMergeValue":22,"./_cloneBuffer":71,"./_cloneTypedArray":75,"./_copyArray":76,"./_initCloneObject":110,"./_safeGet":140,"./isArguments":165,"./isArray":166,"./isArrayLikeObject":168,"./isBuffer":169,"./isFunction":170,"./isObject":175,"./isPlainObject":177,"./isTypedArray":181,"./toPlainObject":195}],56:[function(require,module,exports){
var basePickBy = require('./_basePickBy'),
    hasIn = require('./hasIn');

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;

},{"./_basePickBy":57,"./hasIn":162}],57:[function(require,module,exports){
var baseGet = require('./_baseGet'),
    baseSet = require('./_baseSet'),
    castPath = require('./_castPath');

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;

},{"./_baseGet":35,"./_baseSet":62,"./_castPath":69}],58:[function(require,module,exports){
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

},{}],59:[function(require,module,exports){
var baseGet = require('./_baseGet');

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

},{"./_baseGet":35}],60:[function(require,module,exports){
/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;

},{}],61:[function(require,module,exports){
var identity = require('./identity'),
    overRest = require('./_overRest'),
    setToString = require('./_setToString');

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

},{"./_overRest":138,"./_setToString":144,"./identity":163}],62:[function(require,module,exports){
var assignValue = require('./_assignValue'),
    castPath = require('./_castPath'),
    isIndex = require('./_isIndex'),
    isObject = require('./isObject'),
    toKey = require('./_toKey');

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;

},{"./_assignValue":23,"./_castPath":69,"./_isIndex":112,"./_toKey":153,"./isObject":175}],63:[function(require,module,exports){
var constant = require('./constant'),
    defineProperty = require('./_defineProperty'),
    identity = require('./identity');

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

},{"./_defineProperty":85,"./constant":156,"./identity":163}],64:[function(require,module,exports){
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

},{}],65:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    arrayMap = require('./_arrayMap'),
    isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;

},{"./_Symbol":11,"./_arrayMap":18,"./isArray":166,"./isSymbol":180}],66:[function(require,module,exports){
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

},{}],67:[function(require,module,exports){
var arrayMap = require('./_arrayMap');

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

},{"./_arrayMap":18}],68:[function(require,module,exports){
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

},{}],69:[function(require,module,exports){
var isArray = require('./isArray'),
    isKey = require('./_isKey'),
    stringToPath = require('./_stringToPath'),
    toString = require('./toString');

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

},{"./_isKey":114,"./_stringToPath":152,"./isArray":166,"./toString":196}],70:[function(require,module,exports){
var Uint8Array = require('./_Uint8Array');

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

},{"./_Uint8Array":12}],71:[function(require,module,exports){
var root = require('./_root');

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

},{"./_root":139}],72:[function(require,module,exports){
var cloneArrayBuffer = require('./_cloneArrayBuffer');

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

},{"./_cloneArrayBuffer":70}],73:[function(require,module,exports){
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

},{}],74:[function(require,module,exports){
var Symbol = require('./_Symbol');

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

},{"./_Symbol":11}],75:[function(require,module,exports){
var cloneArrayBuffer = require('./_cloneArrayBuffer');

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

},{"./_cloneArrayBuffer":70}],76:[function(require,module,exports){
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

},{}],77:[function(require,module,exports){
var assignValue = require('./_assignValue'),
    baseAssignValue = require('./_baseAssignValue');

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

},{"./_assignValue":23,"./_baseAssignValue":27}],78:[function(require,module,exports){
var copyObject = require('./_copyObject'),
    getSymbols = require('./_getSymbols');

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

},{"./_copyObject":77,"./_getSymbols":98}],79:[function(require,module,exports){
var copyObject = require('./_copyObject'),
    getSymbolsIn = require('./_getSymbolsIn');

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

},{"./_copyObject":77,"./_getSymbolsIn":99}],80:[function(require,module,exports){
var root = require('./_root');

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

},{"./_root":139}],81:[function(require,module,exports){
var baseRest = require('./_baseRest'),
    isIterateeCall = require('./_isIterateeCall');

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

},{"./_baseRest":61,"./_isIterateeCall":113}],82:[function(require,module,exports){
var isArrayLike = require('./isArrayLike');

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

},{"./isArrayLike":167}],83:[function(require,module,exports){
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

},{}],84:[function(require,module,exports){
var baseMerge = require('./_baseMerge'),
    isObject = require('./isObject');

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

module.exports = customDefaultsMerge;

},{"./_baseMerge":54,"./isObject":175}],85:[function(require,module,exports){
var getNative = require('./_getNative');

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;

},{"./_getNative":95}],86:[function(require,module,exports){
var SetCache = require('./_SetCache'),
    arraySome = require('./_arraySome'),
    cacheHas = require('./_cacheHas');

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
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
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

},{"./_SetCache":9,"./_arraySome":21,"./_cacheHas":68}],87:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    Uint8Array = require('./_Uint8Array'),
    eq = require('./eq'),
    equalArrays = require('./_equalArrays'),
    mapToArray = require('./_mapToArray'),
    setToArray = require('./_setToArray');

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

},{"./_Symbol":11,"./_Uint8Array":12,"./_equalArrays":86,"./_mapToArray":129,"./_setToArray":143,"./eq":159}],88:[function(require,module,exports){
var getAllKeys = require('./_getAllKeys');

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
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
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

},{"./_getAllKeys":91}],89:[function(require,module,exports){
var flatten = require('./flatten'),
    overRest = require('./_overRest'),
    setToString = require('./_setToString');

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;

},{"./_overRest":138,"./_setToString":144,"./flatten":160}],90:[function(require,module,exports){
(function (global){(function (){
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],91:[function(require,module,exports){
var baseGetAllKeys = require('./_baseGetAllKeys'),
    getSymbols = require('./_getSymbols'),
    keys = require('./keys');

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

},{"./_baseGetAllKeys":36,"./_getSymbols":98,"./keys":183}],92:[function(require,module,exports){
var baseGetAllKeys = require('./_baseGetAllKeys'),
    getSymbolsIn = require('./_getSymbolsIn'),
    keysIn = require('./keysIn');

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

},{"./_baseGetAllKeys":36,"./_getSymbolsIn":99,"./keysIn":184}],93:[function(require,module,exports){
var isKeyable = require('./_isKeyable');

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

},{"./_isKeyable":115}],94:[function(require,module,exports){
var isStrictComparable = require('./_isStrictComparable'),
    keys = require('./keys');

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;

},{"./_isStrictComparable":118,"./keys":183}],95:[function(require,module,exports){
var baseIsNative = require('./_baseIsNative'),
    getValue = require('./_getValue');

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

},{"./_baseIsNative":46,"./_getValue":101}],96:[function(require,module,exports){
var overArg = require('./_overArg');

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

},{"./_overArg":137}],97:[function(require,module,exports){
var Symbol = require('./_Symbol');

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

},{"./_Symbol":11}],98:[function(require,module,exports){
var arrayFilter = require('./_arrayFilter'),
    stubArray = require('./stubArray');

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

},{"./_arrayFilter":16,"./stubArray":190}],99:[function(require,module,exports){
var arrayPush = require('./_arrayPush'),
    getPrototype = require('./_getPrototype'),
    getSymbols = require('./_getSymbols'),
    stubArray = require('./stubArray');

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

},{"./_arrayPush":19,"./_getPrototype":96,"./_getSymbols":98,"./stubArray":190}],100:[function(require,module,exports){
var DataView = require('./_DataView'),
    Map = require('./_Map'),
    Promise = require('./_Promise'),
    Set = require('./_Set'),
    WeakMap = require('./_WeakMap'),
    baseGetTag = require('./_baseGetTag'),
    toSource = require('./_toSource');

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

},{"./_DataView":2,"./_Map":5,"./_Promise":7,"./_Set":8,"./_WeakMap":13,"./_baseGetTag":37,"./_toSource":154}],101:[function(require,module,exports){
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

},{}],102:[function(require,module,exports){
var castPath = require('./_castPath'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isIndex = require('./_isIndex'),
    isLength = require('./isLength'),
    toKey = require('./_toKey');

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;

},{"./_castPath":69,"./_isIndex":112,"./_toKey":153,"./isArguments":165,"./isArray":166,"./isLength":172}],103:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

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

},{"./_nativeCreate":132}],104:[function(require,module,exports){
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

},{}],105:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

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

},{"./_nativeCreate":132}],106:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

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

},{"./_nativeCreate":132}],107:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

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

},{"./_nativeCreate":132}],108:[function(require,module,exports){
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

},{}],109:[function(require,module,exports){
var cloneArrayBuffer = require('./_cloneArrayBuffer'),
    cloneDataView = require('./_cloneDataView'),
    cloneRegExp = require('./_cloneRegExp'),
    cloneSymbol = require('./_cloneSymbol'),
    cloneTypedArray = require('./_cloneTypedArray');

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

},{"./_cloneArrayBuffer":70,"./_cloneDataView":72,"./_cloneRegExp":73,"./_cloneSymbol":74,"./_cloneTypedArray":75}],110:[function(require,module,exports){
var baseCreate = require('./_baseCreate'),
    getPrototype = require('./_getPrototype'),
    isPrototype = require('./_isPrototype');

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

},{"./_baseCreate":29,"./_getPrototype":96,"./_isPrototype":117}],111:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray');

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

},{"./_Symbol":11,"./isArguments":165,"./isArray":166}],112:[function(require,module,exports){
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

},{}],113:[function(require,module,exports){
var eq = require('./eq'),
    isArrayLike = require('./isArrayLike'),
    isIndex = require('./_isIndex'),
    isObject = require('./isObject');

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

},{"./_isIndex":112,"./eq":159,"./isArrayLike":167,"./isObject":175}],114:[function(require,module,exports){
var isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;

},{"./isArray":166,"./isSymbol":180}],115:[function(require,module,exports){
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

},{}],116:[function(require,module,exports){
var coreJsData = require('./_coreJsData');

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

},{"./_coreJsData":80}],117:[function(require,module,exports){
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

},{}],118:[function(require,module,exports){
var isObject = require('./isObject');

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

},{"./isObject":175}],119:[function(require,module,exports){
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

},{}],120:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

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

},{"./_assocIndexOf":24}],121:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

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

},{"./_assocIndexOf":24}],122:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

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

},{"./_assocIndexOf":24}],123:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

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

},{"./_assocIndexOf":24}],124:[function(require,module,exports){
var Hash = require('./_Hash'),
    ListCache = require('./_ListCache'),
    Map = require('./_Map');

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

},{"./_Hash":3,"./_ListCache":4,"./_Map":5}],125:[function(require,module,exports){
var getMapData = require('./_getMapData');

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

},{"./_getMapData":93}],126:[function(require,module,exports){
var getMapData = require('./_getMapData');

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

},{"./_getMapData":93}],127:[function(require,module,exports){
var getMapData = require('./_getMapData');

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

},{"./_getMapData":93}],128:[function(require,module,exports){
var getMapData = require('./_getMapData');

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

},{"./_getMapData":93}],129:[function(require,module,exports){
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

},{}],130:[function(require,module,exports){
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;

},{}],131:[function(require,module,exports){
var memoize = require('./memoize');

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

},{"./memoize":185}],132:[function(require,module,exports){
var getNative = require('./_getNative');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

},{"./_getNative":95}],133:[function(require,module,exports){
var overArg = require('./_overArg');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

},{"./_overArg":137}],134:[function(require,module,exports){
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

},{}],135:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

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

},{"./_freeGlobal":90}],136:[function(require,module,exports){
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

},{}],137:[function(require,module,exports){
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

},{}],138:[function(require,module,exports){
var apply = require('./_apply');

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

},{"./_apply":14}],139:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":90}],140:[function(require,module,exports){
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

},{}],141:[function(require,module,exports){
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

},{}],142:[function(require,module,exports){
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

},{}],143:[function(require,module,exports){
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

},{}],144:[function(require,module,exports){
var baseSetToString = require('./_baseSetToString'),
    shortOut = require('./_shortOut');

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

},{"./_baseSetToString":63,"./_shortOut":145}],145:[function(require,module,exports){
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

},{}],146:[function(require,module,exports){
var ListCache = require('./_ListCache');

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

},{"./_ListCache":4}],147:[function(require,module,exports){
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

},{}],148:[function(require,module,exports){
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

},{}],149:[function(require,module,exports){
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

},{}],150:[function(require,module,exports){
var ListCache = require('./_ListCache'),
    Map = require('./_Map'),
    MapCache = require('./_MapCache');

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

},{"./_ListCache":4,"./_Map":5,"./_MapCache":6}],151:[function(require,module,exports){
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

},{}],152:[function(require,module,exports){
var memoizeCapped = require('./_memoizeCapped');

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;

},{"./_memoizeCapped":131}],153:[function(require,module,exports){
var isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;

},{"./isSymbol":180}],154:[function(require,module,exports){
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

},{}],155:[function(require,module,exports){
var baseClone = require('./_baseClone');

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

},{"./_baseClone":28}],156:[function(require,module,exports){
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

},{}],157:[function(require,module,exports){
var baseRest = require('./_baseRest'),
    eq = require('./eq'),
    isIterateeCall = require('./_isIterateeCall'),
    keysIn = require('./keysIn');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;

},{"./_baseRest":61,"./_isIterateeCall":113,"./eq":159,"./keysIn":184}],158:[function(require,module,exports){
var apply = require('./_apply'),
    baseRest = require('./_baseRest'),
    customDefaultsMerge = require('./_customDefaultsMerge'),
    mergeWith = require('./mergeWith');

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

module.exports = defaultsDeep;

},{"./_apply":14,"./_baseRest":61,"./_customDefaultsMerge":84,"./mergeWith":186}],159:[function(require,module,exports){
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

},{}],160:[function(require,module,exports){
var baseFlatten = require('./_baseFlatten');

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;

},{"./_baseFlatten":32}],161:[function(require,module,exports){
var baseGet = require('./_baseGet');

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

},{"./_baseGet":35}],162:[function(require,module,exports){
var baseHasIn = require('./_baseHasIn'),
    hasPath = require('./_hasPath');

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

},{"./_baseHasIn":38,"./_hasPath":102}],163:[function(require,module,exports){
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

},{}],164:[function(require,module,exports){
var baseIndexOf = require('./_baseIndexOf'),
    isArrayLike = require('./isArrayLike'),
    isString = require('./isString'),
    toInteger = require('./toInteger'),
    values = require('./values');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;

},{"./_baseIndexOf":39,"./isArrayLike":167,"./isString":179,"./toInteger":193,"./values":197}],165:[function(require,module,exports){
var baseIsArguments = require('./_baseIsArguments'),
    isObjectLike = require('./isObjectLike');

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

},{"./_baseIsArguments":40,"./isObjectLike":176}],166:[function(require,module,exports){
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

},{}],167:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isLength = require('./isLength');

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

},{"./isFunction":170,"./isLength":172}],168:[function(require,module,exports){
var isArrayLike = require('./isArrayLike'),
    isObjectLike = require('./isObjectLike');

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

},{"./isArrayLike":167,"./isObjectLike":176}],169:[function(require,module,exports){
var root = require('./_root'),
    stubFalse = require('./stubFalse');

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

},{"./_root":139,"./stubFalse":191}],170:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObject = require('./isObject');

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

},{"./_baseGetTag":37,"./isObject":175}],171:[function(require,module,exports){
var toInteger = require('./toInteger');

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == toInteger(value);
}

module.exports = isInteger;

},{"./toInteger":193}],172:[function(require,module,exports){
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

},{}],173:[function(require,module,exports){
var baseIsMap = require('./_baseIsMap'),
    baseUnary = require('./_baseUnary'),
    nodeUtil = require('./_nodeUtil');

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

},{"./_baseIsMap":43,"./_baseUnary":66,"./_nodeUtil":135}],174:[function(require,module,exports){
/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;

},{}],175:[function(require,module,exports){
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

},{}],176:[function(require,module,exports){
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

},{}],177:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    getPrototype = require('./_getPrototype'),
    isObjectLike = require('./isObjectLike');

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

},{"./_baseGetTag":37,"./_getPrototype":96,"./isObjectLike":176}],178:[function(require,module,exports){
var baseIsSet = require('./_baseIsSet'),
    baseUnary = require('./_baseUnary'),
    nodeUtil = require('./_nodeUtil');

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

},{"./_baseIsSet":47,"./_baseUnary":66,"./_nodeUtil":135}],179:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isArray = require('./isArray'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;

},{"./_baseGetTag":37,"./isArray":166,"./isObjectLike":176}],180:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;

},{"./_baseGetTag":37,"./isObjectLike":176}],181:[function(require,module,exports){
var baseIsTypedArray = require('./_baseIsTypedArray'),
    baseUnary = require('./_baseUnary'),
    nodeUtil = require('./_nodeUtil');

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

},{"./_baseIsTypedArray":48,"./_baseUnary":66,"./_nodeUtil":135}],182:[function(require,module,exports){
/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;

},{}],183:[function(require,module,exports){
var arrayLikeKeys = require('./_arrayLikeKeys'),
    baseKeys = require('./_baseKeys'),
    isArrayLike = require('./isArrayLike');

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

},{"./_arrayLikeKeys":17,"./_baseKeys":50,"./isArrayLike":167}],184:[function(require,module,exports){
var arrayLikeKeys = require('./_arrayLikeKeys'),
    baseKeysIn = require('./_baseKeysIn'),
    isArrayLike = require('./isArrayLike');

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

},{"./_arrayLikeKeys":17,"./_baseKeysIn":51,"./isArrayLike":167}],185:[function(require,module,exports){
var MapCache = require('./_MapCache');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;

},{"./_MapCache":6}],186:[function(require,module,exports){
var baseMerge = require('./_baseMerge'),
    createAssigner = require('./_createAssigner');

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

},{"./_baseMerge":54,"./_createAssigner":81}],187:[function(require,module,exports){
var basePick = require('./_basePick'),
    flatRest = require('./_flatRest');

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;

},{"./_basePick":56,"./_flatRest":89}],188:[function(require,module,exports){
var baseProperty = require('./_baseProperty'),
    basePropertyDeep = require('./_basePropertyDeep'),
    isKey = require('./_isKey'),
    toKey = require('./_toKey');

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;

},{"./_baseProperty":58,"./_basePropertyDeep":59,"./_isKey":114,"./_toKey":153}],189:[function(require,module,exports){
var arrayReduce = require('./_arrayReduce'),
    baseEach = require('./_baseEach'),
    baseIteratee = require('./_baseIteratee'),
    baseReduce = require('./_baseReduce'),
    isArray = require('./isArray');

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;

},{"./_arrayReduce":20,"./_baseEach":30,"./_baseIteratee":49,"./_baseReduce":60,"./isArray":166}],190:[function(require,module,exports){
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

},{}],191:[function(require,module,exports){
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

},{}],192:[function(require,module,exports){
var toNumber = require('./toNumber');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;

},{"./toNumber":194}],193:[function(require,module,exports){
var toFinite = require('./toFinite');

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;

},{"./toFinite":192}],194:[function(require,module,exports){
var isObject = require('./isObject'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;

},{"./isObject":175,"./isSymbol":180}],195:[function(require,module,exports){
var copyObject = require('./_copyObject'),
    keysIn = require('./keysIn');

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

},{"./_copyObject":77,"./keysIn":184}],196:[function(require,module,exports){
var baseToString = require('./_baseToString');

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

},{"./_baseToString":65}],197:[function(require,module,exports){
var baseValues = require('./_baseValues'),
    keys = require('./keys');

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

},{"./_baseValues":67,"./keys":183}],198:[function(require,module,exports){
'use strict';

module.exports = MonkeyLearn;

const defaults = require('lodash/defaults');
const isString = require('lodash/isString');

const MonkeyLearnError = require('./lib/monkeylearn-error');
const Classifiers = require('./lib/classifiers');
const Extractors = require('./lib/extractors');
const Workflows = require('./lib/workflows');

function MonkeyLearn(api_key, settings) {
  if (!isString(api_key)) {
    throw new MonkeyLearnError('', null, 'A MonkeyLearn API key string is required to use the API. Find yours at https://app.monkeylearn.com/main/my-account/tab/api-keys/');
  }
  settings = settings || {};
  defaults(settings, {
    base_url: 'https://api.monkeylearn.com/v3/',
    retry_if_throttled: true,
    throttling_max_retries: 3,
    auto_batch: true,
    batch_size: 200
  })

  this.api_key = api_key;
  this.settings = settings;
  this.classifiers = new Classifiers(this);
  this.extractors = new Extractors(this);
  this.workflows = new Workflows(this);
}

},{"./lib/classifiers":199,"./lib/extractors":200,"./lib/monkeylearn-error":202,"./lib/workflows":206,"lodash/defaults":157,"lodash/isString":179}],199:[function(require,module,exports){
'use strict';

module.exports = Classifiers;

const isArray = require('lodash/isArray');
const isString = require('lodash/isString');
const isInteger = require('lodash/isInteger');
const isPlainObject = require('lodash/isPlainObject');

const Models = require('./models');
const request = require('./request').request;
const MonkeyLearnError = require('./monkeylearn-error');


function Classifiers(ml) {
  Models.call(this, ml, `${ml.settings.base_url}classifiers/`)
  this.tags = new Tags(this);
}

Classifiers.prototype = Object.create(Models.prototype);
Classifiers.prototype.constructor = Classifiers;

Classifiers.prototype.classify = Classifiers.prototype.run;

// classifier detail is handled by Models

// list classifiers is handled by Models

Classifiers.prototype.create = function(params) {
  return new Promise((resolve, reject) => {
    if (!isPlainObject(params)) {
      throw new MonkeyLearnError('', null, 'An object containing the creation parameters is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.base_url}`,
      method: 'POST',
      body: params
    })
  )
}

Classifiers.prototype.edit = function(model_id, params) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    if (!isPlainObject(params)) {
      throw new MonkeyLearnError('', null, 'An object containing the edit parameters is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.base_url}${model_id}/`,
      method: 'PATCH',
      body: params
    })
  )
}

Classifiers.prototype.delete = function(model_id) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.base_url}${model_id}/`,
      method: 'DELETE',
    })
  )
};

Classifiers.prototype.deploy = function(model_id) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.base_url}${model_id}/deploy/`,
      method: 'POST',
    })
  )
};

Classifiers.prototype.train = function(model_id) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.base_url}${model_id}/train/`,
      method: 'POST',
    })
  )
};

Classifiers.prototype.upload_data = function(model_id, data) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    if (!isArray(data)){
      throw new MonkeyLearnError('', null, 'A data array is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.base_url}${model_id}/data/`,
      method: 'POST',
      body: {'data': data}
    })
  )
};



function Tags(classifiers) {
  this.ml = classifiers.ml;
  this.classifiers = classifiers;
}

Tags.prototype.detail = function(model_id, tag_id) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    if (!isString(tag_id) && !isInteger(tag_id)) {
      throw new MonkeyLearnError('', null, 'A tag_id string or integer is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.classifiers.base_url}${model_id}/tags/${tag_id}/`,
      method: 'GET',
    })
  )
};

Tags.prototype.create = function(model_id, params) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    if (!isPlainObject(params)) {
      throw new MonkeyLearnError('', null, 'An object containing the creation parameters is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.classifiers.base_url}${model_id}/tags/`,
      method: 'POST',
      body: params
    })
  )
}

Tags.prototype.edit = function(model_id, tag_id, params) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    if (!isString(tag_id) && !isInteger(tag_id)) {
      throw new MonkeyLearnError('', null, 'A tag_id string or integer is required.');
    }
    if (!isPlainObject(params)) {
      throw new MonkeyLearnError('', null, 'An object containing the edit parameters is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.classifiers.base_url}${model_id}/tags/${tag_id}/`,
      method: 'PATCH',
      body: params
    })
  )
}

Tags.prototype.delete = function(model_id, tag_id) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    if (!isString(tag_id) && !isInteger(tag_id)) {
      throw new MonkeyLearnError('', null, 'A tag_id string or integer is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.classifiers.base_url}${model_id}/tags/${tag_id}/`,
      method: 'DELETE'
    })
  )
}

},{"./models":201,"./monkeylearn-error":202,"./request":203,"lodash/isArray":166,"lodash/isInteger":171,"lodash/isPlainObject":177,"lodash/isString":179}],200:[function(require,module,exports){
'use strict';

module.exports = Extractors;

const Models = require('./models');

function Extractors(ml) {
  Models.call(this, ml, `${ml.settings.base_url}extractors/`)
}

Extractors.prototype = Object.create(Models.prototype);
Extractors.prototype.constructor = Extractors;

Extractors.prototype.extract = Extractors.prototype.run;

},{"./models":201}],201:[function(require,module,exports){
'use strict';

module.exports = Models;


const isArray = require('lodash/isArray');
const isString = require('lodash/isString');
const isPlainObject = require('lodash/isPlainObject');
const includes = require('lodash/includes');
const defaults = require('lodash/defaults');
const cloneDeep = require('lodash/cloneDeep');

const request = require('./request').request;
const chain_requests = require('./request').chain_requests;
const MonkeyLearnError = require('./monkeylearn-error');


// base class for endpoints that are in extractors, classifiers and workflows
function Models(ml, base_url) {
  this.ml = ml;
  this.base_url = base_url;

  if (includes(base_url, 'classifiers')) {
    this.run_action = 'classify';
  } else if (includes(base_url, 'extractors')) {
    this.run_action = 'extract';
  } else {
    this.run_action = undefined;
  }
}

Models.prototype.run = function(model_id, data, params) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    if (!isArray(data)){
      throw new MonkeyLearnError('', null, `A ${this.run_action} data array is required.`);
    }

    params = params || {};
    if (!isPlainObject(params)) {
      throw new MonkeyLearnError('', null, 'Extra parameters must be passed as a plain object.');
    }

    let batches = [];
    if (this.ml.settings.auto_batch) {
      for (let ii=0; ii < data.length; ii+=this.ml.settings.batch_size) {
        // keep all the params except the data list, which will get overloaded
        let batch = cloneDeep(params);
        batch.data = data.slice(ii, ii+this.ml.settings.batch_size);
        batches.push(batch)
      }
    } else {
      batches = [params];
    }

    resolve(batches);
  })

  .then(chain_requests(this.ml, `${this.base_url}${model_id}/${this.run_action}/`))
};


Models.prototype.detail = function(model_id) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.base_url}${model_id}/`,
      method: 'GET',
    })
  )
};

Models.prototype.list = function(params) {
  return new Promise((resolve, reject) => {
    params = params || {};
    defaults(params, {
      page: 1,
      per_page: 20,
      order_by: '-created'
    })
    if (!isPlainObject(params)) {
      throw new MonkeyLearnError('', null, 'Query parameters must be passed as a plain object.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.base_url}`,
      method: 'GET',
      query_params: params
    })
  )
};

},{"./monkeylearn-error":202,"./request":203,"lodash/cloneDeep":155,"lodash/defaults":157,"lodash/includes":164,"lodash/isArray":166,"lodash/isPlainObject":177,"lodash/isString":179}],202:[function(require,module,exports){
'use strict';

module.exports = MonkeyLearnError;

// Custom Error class for MonkeyLearn API errors
// this is copied from MDN docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function MonkeyLearnError(error_code, response, message, fileName, lineNumber) {
  let instance = new Error(message, fileName, lineNumber);
  instance.error_code = error_code;
  instance.response = response;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, MonkeyLearnError);
  }
  return instance;
}

MonkeyLearnError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(MonkeyLearnError, Error);
} else {
  MonkeyLearnError.__proto__ = Error;
}

},{}],203:[function(require,module,exports){
'use strict';

module.exports = {request, chain_requests};

const fetch = require('node-fetch').default;
const defaultsDeep = require('lodash/defaultsDeep');
const isPlainObject = require('lodash/isPlainObject');
const pick = require('lodash/pick');

const version = require('../package.json').version;
const objectToQueryString = require('./utils').objectToQueryString;
const MonkeyLearnError = require('./monkeylearn-error');
const MonkeyLearnResponse = require('./response');

const default_seconds_to_retry = 2;
const default_max_retries = 3;

// adapted from rest.js https://github.com/octokit/rest.js/blob/master/lib/request/request.js
// requestOptions will get passed to fetch, but also takes the:
//   "query_params" param, which is an object
//   "retries" param, which is a number
//   "parse_response", which is a boolean that indicates if the response should be a MonkeyLearnResponse
//    or a raw_response, which is an object {body, status, headers}
//    this adds a MonkeyLearnResponse to the errors
function request(ml, requestOptions) {

  defaultsDeep(requestOptions, {
    headers: {
      // TODO: test that the user agent is working properly
      'User-Agent': `node-sdk-${version}`,
      'authorization': `Token ${ml.api_key}`
    },
    query_params: {},
    retries: ml.settings.throttling_max_retries,
    parse_response: true,
  })

  if (requestOptions.body) {
    defaultsDeep(requestOptions.headers, {
      'content-type': 'application/json'
    })
  }

  // https://fetch.spec.whatwg.org/#methods
  requestOptions.method = requestOptions.method.toUpperCase();

  if (isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  let url = `${requestOptions.url}?${objectToQueryString(requestOptions.query_params)}`

  let headers = {};
  let status;

  return fetch(url, pick(requestOptions, 'method', 'body', 'headers'))
    .then(response => {
      status = response.status;
      for (const keyAndValue of response.headers.entries()) {
        headers[keyAndValue[0]] = keyAndValue[1]
      }

      if (status === 429 && ml.settings.retry_if_throttled) {
        // logic for retry if throttled
        return response.json()
          .then(body => {
            let seconds_to_wait;
            if (body.error_code === 'PLAN_RATE_LIMIT') {
              seconds_to_wait = body.seconds_to_wait + 1
            } else if (body.error_code === 'CONCURRENCY_RATE_LIMIT') {
              seconds_to_wait = default_seconds_to_retry
            } else {
              throw new MonkeyLearnError(body.error_code, {body, status, headers}, body.detail);
            }
            // based on https://stackoverflow.com/questions/39538473/using-settimeout-on-promise-chain
            return new Promise((resolve, reject) => setTimeout(resolve, seconds_to_wait * 1000, body))
          })

          .then((body) => {
            requestOptions.retries -= 1;
            if (requestOptions.retries === 0) {
              throw new MonkeyLearnError(body.error_code, {body, status, headers}, `${body.detail} [SDK reached limit of throttling retries]`);
            }
            return request(ml, requestOptions);
          })

      } else if (status >= 400) {
        return response.json()
          .then(body => {
            throw new MonkeyLearnError(body.error_code, {body, status, headers}, body.detail);
          })
      }

      const contentType = response.headers.get('content-type')
      if (/application\/json/.test(contentType)) {
        return response.json()
          // create a raw_response
          .then(body => {return {body, status, headers}})
      }

      // default case
      return response.buffer()
        // create a raw_response
        .then(body => {return {body, status, headers}})
    })

    .then(response => {
      // The response that reaches this step may or may not be a raw_response.
      // (depends on auto retry)
      // If it is a parsed response, just let it through unchanged
      if (requestOptions.parse_response && !response.hasOwnProperty('raw_responses')) {
        return new MonkeyLearnResponse(response);
      }
      return response
    })

    .catch(error => {
      // Transform the response inside the error (if present) into a MonkeyLearnResponse
      // if it isn't one already.
      if (requestOptions.parse_response
          && error.hasOwnProperty('response')
          && !error.response.hasOwnProperty('raw_responses')) {
        error.response = new MonkeyLearnResponse(error.response);
      }
      throw error;
    })


}


// returns a function that takes an array of batches and generates a request for each
// the requests are done sequentially
function chain_requests(ml, url) {
  return (batches) => {
    let promise = new Promise((resolve, reject) => resolve(new MonkeyLearnResponse()));

    // attach requests for all the batches sequentially to the original promise and return _that_
    return batches.reduce((promise, batch) =>
      promise.then((response) =>

        request(ml, {
          url: url,
          method: 'POST',
          body: batch,
          parse_response: false
        })

        .then(raw_response => {
          response._add_raw_response(raw_response);
          return response;
        })

        .catch(error => {
          if (error.hasOwnProperty('response')) {
            response._add_raw_response(error.response);
            error.response = response;
          } else {
            // if it's not a MonkeyLearn Error (so, some other js runtime error),
            // return as-is but add the response
            // not the cleanest solution but I don't want the error to lose the context
            error.response = response;
            error.error_code = '';
          }
          throw error;
        })
      )
    , promise)
  }
}

},{"../package.json":207,"./monkeylearn-error":202,"./response":204,"./utils":205,"lodash/defaultsDeep":158,"lodash/isPlainObject":177,"lodash/pick":187,"node-fetch":208}],204:[function(require,module,exports){
'use strict';

module.exports = MonkeyLearnResponse;

const isArray = require('lodash/isArray');
const isPlainObject = require('lodash/isPlainObject');

function MonkeyLearnResponse(raw_responses) {
  this.body = null;
  this.request_queries_used = 0;
  this.plan_queries_allowed = null;
  this.plan_queries_remaining = null;

  this.raw_responses = [];
  if (isPlainObject(raw_responses)) {
    this._add_raw_response(raw_responses)
  } else if (isArray(raw_responses)){
    raw_responses.map(raw_response => this._add_raw_response(raw_response))
  }
}

// raw_response is an object with body, status, headers as returned by request
// it will break if you add more than one raw response that has an error
MonkeyLearnResponse.prototype._add_raw_response = function(raw_response) {
  if (this.raw_responses.length === 0) {
    this.body = raw_response.body;
  } else if (raw_response.status === 200){
    // this response is aggregating more than one request, so assume that the raw_response body is a list
    this.body = this.body.concat(raw_response.body)
  } else {
    // if there was an exception, replace the current concatenated body with the error body
    // all the other responses are still available in this.raw_responses
    this.body = raw_response.body;
  }
  // TODO: consider what to do if the status isn't valid
  this.raw_responses.push(raw_response);

  if (raw_response.status === 200) {
    // the headers come as all lowercase apparently
    this.plan_queries_allowed = parseInt(raw_response.headers['x-query-limit-limit']);
    this.plan_queries_remaining = parseInt(raw_response.headers['x-query-limit-remaining']);
    this.request_queries_used += parseInt(raw_response.headers['x-query-limit-request-queries']);
  }
}

},{"lodash/isArray":166,"lodash/isPlainObject":177}],205:[function(require,module,exports){
'use strict';

module.exports = {
  objectToQueryString
};


const reduce = require('lodash/reduce');
const isNull = require('lodash/isNull');
const isUndefined = require('lodash/isUndefined');
const isArray = require('lodash/isArray');

// adapted from https://gist.github.com/TravelingTechGuy/32454b95a50d296912b9
function objectToQueryString (obj) {
    let qs = reduce(obj, (result, value, key) => {
        if (!isNull(value) && !isUndefined(value)) {
            if (isArray(value)) {
                result += reduce(value, (result1, value1) => {
                    if (!isNull(value1) && !isUndefined(value1)) {
                        result1 += key + '=' + value1 + '&';
                        return result1
                    } else {
                        return result1;
                    }
                }, '')
            } else {
                result += key + '=' + value + '&';
            }
            return result;
        } else {
            return result
        }
    }, '').slice(0, -1);
    return qs;
};

},{"lodash/isArray":166,"lodash/isNull":174,"lodash/isUndefined":182,"lodash/reduce":189}],206:[function(require,module,exports){
'use strict';

module.exports = Workflows;

const isArray = require('lodash/isArray');
const isString = require('lodash/isString');
const isInteger = require('lodash/isInteger');
const isPlainObject = require('lodash/isPlainObject');

const Models = require('./models');
const request = require('./request').request;
const MonkeyLearnError = require('./monkeylearn-error');


function Workflows(ml) {
  Models.call(this, ml, `${ml.settings.base_url}workflows/`)
  this.steps = new WorkflowSteps(this);
  this.data = new WorkflowData(this);
  this.custom_fields = new WorkflowCustomFields(this);
}

Workflows.prototype = Object.create(Models.prototype);
Workflows.prototype.constructor = Workflows;

Workflows.prototype.run = undefined;
Workflows.prototype.list = undefined;

// workflows detail is handled by Models

Workflows.prototype.create = function(params) {
  return new Promise((resolve, reject) => {
    if (!isPlainObject(params)) {
      throw new MonkeyLearnError('', null, 'An object containing the creation parameters is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.base_url}`,
      method: 'POST',
      body: params
    })
  )
};

Workflows.prototype.delete = function(model_id) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.base_url}${model_id}/`,
      method: 'DELETE',
    })
  )
};

function WorkflowSteps(workflows) {
  this.ml = workflows.ml;
  this.workflows = workflows;
}

WorkflowSteps.prototype.create = function(model_id, params) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    if (!isPlainObject(params)) {
      throw new MonkeyLearnError('', null, 'An object containing the creation parameters is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.workflows.base_url}${model_id}/steps/`,
      method: 'POST',
      body: params
    })
  )
}

function WorkflowData(workflows) {
  this.ml = workflows.ml;
  this.workflows = workflows;
}

WorkflowData.prototype.create = function(model_id, data) {
  let params = {'data': data}

  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    if (!isArray(data)){
      throw new MonkeyLearnError('', null, 'A data array is required');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.workflows.base_url}${model_id}/data/`,
      method: 'POST',
      body: params
    })
  )
}

WorkflowData.prototype.list = function(model_id, params) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    params = params || {};
    if (!isPlainObject(params)) {
      throw new MonkeyLearnError('', null, 'An object containing the list parameters is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.workflows.base_url}${model_id}/data/`,
      method: 'GET',
      query_params: params
    })
  )
}

function WorkflowCustomFields(workflows) {
  this.ml = workflows.ml;
  this.workflows = workflows;
}

WorkflowCustomFields.prototype.create = function(model_id, params) {
  return new Promise((resolve, reject) => {
    if (!isString(model_id)) {
      throw new MonkeyLearnError('', null, 'A model_id string is required.');
    }
    if (!isPlainObject(params)) {
      throw new MonkeyLearnError('', null, 'An object containing the creation parameters is required.');
    }
    resolve();
  })

  .then(_ =>
    request(this.ml, {
      url: `${this.workflows.base_url}${model_id}/custom-fields/`,
      method: 'POST',
      body: params
    })
  )
}

},{"./models":201,"./monkeylearn-error":202,"./request":203,"lodash/isArray":166,"lodash/isInteger":171,"lodash/isPlainObject":177,"lodash/isString":179}],207:[function(require,module,exports){
module.exports={
  "_from": "monkeylearn",
  "_id": "monkeylearn@3.4.0",
  "_inBundle": false,
  "_integrity": "sha512-Xh5hjf0GeCeXCBjmpbubDJ7wph4FiabGOG+LFUyPbqV58mrKGuHOIjtiWo3jdQPFEqnDtvNfS+A+F9vdJYZG2A==",
  "_location": "/monkeylearn",
  "_phantomChildren": {},
  "_requested": {
    "type": "tag",
    "registry": true,
    "raw": "monkeylearn",
    "name": "monkeylearn",
    "escapedName": "monkeylearn",
    "rawSpec": "",
    "saveSpec": null,
    "fetchSpec": "latest"
  },
  "_requiredBy": [
    "#USER",
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/monkeylearn/-/monkeylearn-3.4.0.tgz",
  "_shasum": "e0c41e7c029dec0b2a57535636d39e957dd53d77",
  "_spec": "monkeylearn",
  "_where": "/Users/jche/Documents/457A/assignments/JeffChe_a3",
  "author": {
    "name": "MonkeyLearn",
    "email": "hello@monkeylearn.com",
    "url": "https://monkeylearn.com"
  },
  "bugs": {
    "url": "https://github.com/monkeylearn/monkeylearn-node/issues"
  },
  "bundleDependencies": false,
  "contributors": [
    {
      "name": "rsteca",
      "email": "rodrigo@monkeylearn.com",
      "url": "https://github.com/rsteca/"
    },
    {
      "name": "brusteca",
      "email": "bruno@monkeylearn.com",
      "url": "https://github.com/brusteca"
    }
  ],
  "dependencies": {
    "lodash": "^4.17.10",
    "node-fetch": "^2.1.2"
  },
  "deprecated": false,
  "description": "Official Node client for the MonkeyLearn API version 3.",
  "engines": {
    "node": ">=4"
  },
  "homepage": "https://github.com/monkeylearn/monkeylearn-node#readme",
  "keywords": [
    "monkeylearn",
    "machine",
    "learning",
    "nlp",
    "node"
  ],
  "license": "MIT",
  "main": "index.js",
  "name": "monkeylearn",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/monkeylearn/monkeylearn-node.git"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "version": "3.4.0"
}

},{}],208:[function(require,module,exports){
(function (global){(function (){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],209:[function(require,module,exports){
module.exports={
    "😂": 1,
    "❤": 3,
    "♥": 3,
    "😍": 3,
    "😭": -1,
    "😘": 3,
    "😊": 3,
    "👌": 2,
    "💕": 3,
    "👏": 2,
    "😁": 2,
    "☺": 3,
    "♡": 3,
    "👍": 2,
    "😩": -2,
    "🙏": 2,
    "✌": 2,
    "😏": 1,
    "😉": 2,
    "🙌": 2,
    "🙈": 2,
    "💪": 2,
    "😄": 2,
    "😒": -2,
    "💃": 3,
    "💖": 3,
    "😃": 2,
    "😔": -1,
    "🎉": 3,
    "😜": 2,
    "🌸": 3,
    "💜": 3,
    "💙": 3,
    "✨": 1,
    "💗": 3,
    "★": 1,
    "█": -1,
    "☀": 2,
    "😡": -1,
    "😎": 2,
    "💋": 3,
    "😋": 3,
    "🙊": 2,
    "😴": -1,
    "🎶": 2,
    "💞": 3,
    "😌": 2,
    "🔫": -1,
    "💛": 3,
    "💁": 1,
    "💚": 3,
    "♫": 1,
    "😞": -1,
    "😆": 2,
    "😝": 2,
    "😪": -1,
    "😫": -1,
    "👊": 1,
    "💀": -2,
    "😀": 2,
    "😚": 3,
    "😻": 3,
    "💘": 3,
    "☕": 1,
    "👋": 2,
    "🎊": 3,
    "🍕": 2,
    "❄": 2,
    "😕": -2,
    "💔": -1,
    "😤": -2,
    "😈": 1,
    "✈": 2,
    "🔝": 2,
    "😰": -1,
    "⚽": 3,
    "😑": -2,
    "👑": 3,
    "👉": 1,
    "🍃": 1,
    "🎁": 3,
    "😠": -2,
    "🐧": 2,
    "☆": 2,
    "🍀": 1,
    "🎈": 3,
    "🎅": 1,
    "😓": -1,
    "😣": -2,
    "😐": -2,
    "✊": 2,
    "😨": -1,
    "😖": -1,
    "💤": 1,
    "💓": 3,
    "👎": -1,
    "💦": 2,
    "✔": 1,
    "😷": -1,
    "🙋": 2,
    "🎄": 2,
    "💩": -1,
    "🎵": 2,
    "😛": 3,
    "👯": 2,
    "💎": 2,
    "🌿": 1,
    "🎂": 3,
    "🌟": 1,
    "🔮": 1,
    "👫": 1,
    "🏆": 3,
    "✖": 1,
    "☝": 1,
    "😙": 3,
    "⛄": 2,
    "👅": 2,
    "♪": 2,
    "🍂": 2,
    "💏": 1,
    "🌴": 2,
    "👈": 2,
    "🌹": 3,
    "🙆": 2,
    "👻": 1,
    "💰": 1,
    "🍻": 2,
    "🙅": -2,
    "🌞": 2,
    "🍁": 2,
    "⭐": 2,
    "▪": 1,
    "🎀": 3,
    "🐷": 1,
    "🙉": 1,
    "🌺": 2,
    "💅": 1,
    "🐶": 2,
    "🌚": 2,
    "👽": 1,
    "🎤": 2,
    "👭": 2,
    "🎧": 2,
    "👆": 1,
    "🍸": 2,
    "🍷": 2,
    "®": 1,
    "🍉": 3,
    "😇": 3,
    "🏃": 2,
    "😿": -2,
    "│": 1,
    "🍺": 2,
    "▶": 1,
    "😲": -1,
    "🎸": 2,
    "🍹": 3,
    "💫": 2,
    "📚": 1,
    "😶": -1,
    "🌷": 2,
    "💝": 3,
    "💨": 1,
    "🏈": 2,
    "💍": 2,
    "☔": 1,
    "👸": 3,
    "🇪": 3,
    "░": -1,
    "🍩": 1,
    "👾": 1,
    "☁": 1,
    "🌻": 2,
    "↿": 3,
    "🐯": 2,
    "👼": 1,
    "🍔": 1,
    "😸": 2,
    "👶": 2,
    "↾": 3,
    "💐": 3,
    "🌊": 2,
    "🍦": 2,
    "🍓": 3,
    "👇": 1,
    "💆": 1,
    "🍴": 2,
    "😧": -1,
    "🇸": 2,
    "😮": 1,
    "🚫": -3,
    "😽": 2,
    "🌈": 2,
    "🙀": 1,
    "⚠": -1,
    "🎮": 2,
    "╯": -1,
    "🍆": 2,
    "🍰": 2,
    "✓": 1,
    "👐": -1,
    "🍟": 1,
    "🍌": 2,
    "💑": 3,
    "👬": -1,
    "🐣": 2,
    "🎃": 3,
    "▬": 2,
    "￼": -3,
    "🐾": 3,
    "🎓": 2,
    "🏊": 2,
    "📷": 2,
    "👄": 2,
    "🌼": 4,
    "🚶": -1,
    "🐱": 2,
    "🐸": -1,
    "🇺": 2,
    "👿": -3,
    "🚬": 2,
    "✿": 1,
    "🐒": 2,
    "🌍": 3,
    "┊": 5,
    "🐥": 3,
    "🐼": 1,
    "🎥": 1,
    "💄": 2,
    "⛔": 2,
    "🏀": 1,
    "💉": 1,
    "💟": 3,
    "🚗": 1,
    "📝": 1,
    "♦": 2,
    "💭": 1,
    "🌙": 3,
    "🐟": 3,
    "👣": 1,
    "✂": -3,
    "🗿": 2,
    "👪": -1,
    "🍭": 1,
    "🌃": 2,
    "❌": 1,
    "🐰": 3,
    "💊": 2,
    "🚨": 3,
    "😦": -2,
    "🍪": 1,
    "🍣": -2,
    "✧": 1,
    "🎆": 3,
    "🎎": 4,
    "🇩": 3,
    "✅": 2,
    "📱": 1,
    "🙍": -2,
    "🍑": 1,
    "🎼": 1,
    "🔊": 2,
    "🌌": 2,
    "🍎": 1,
    "🐻": 2,
    "╰": -1,
    "💇": 1,
    "♬": 1,
    "🔴": 2,
    "🍱": -2,
    "🍊": 2,
    "🍒": 1,
    "🐭": 3,
    "👟": 2,
    "🌎": 1,
    "🍍": 2,
    "🐮": 3,
    "📲": 1,
    "☼": 1,
    "🌅": 1,
    "🇷": 3,
    "👠": 1,
    "🌽": 2,
    "💧": -1,
    "🍬": 1,
    "😺": 2,
    "🚀": 2,
    "¦": 3,
    "💢": 1,
    "🎬": 1,
    "🍧": 1,
    "🍜": 2,
    "🐏": 3,
    "🏄": 2,
    "➤": 1,
    "⬆": 1,
    "🍋": 1,
    "🆗": 2,
    "⚪": 2,
    "📺": 2,
    "🍅": 1,
    "⛅": 2,
    "🐢": 1,
    "👙": 2,
    "🏡": 2,
    "🌾": 2,
    "◉": 1,
    "✏": 1,
    "🐬": 2,
    "🇹": 3,
    "♣": 1,
    "🐝": 1,
    "🌝": 1,
    "🇮": 3,
    "🔋": -3,
    "🐍": 1,
    "♔": 2,
    "🔵": 1,
    "😾": -2,
    "🌕": 3,
    "🐨": 2,
    "🔐": 1,
    "💿": 3,
    "🌳": 2,
    "👰": 2,
    "❀": 2,
    "⚓": 3,
    "🚴": 3,
    "▀": -1,
    "👗": 1,
    "➕": 2,
    "💬": 2,
    "▒": -1,
    "🔜": 1,
    "🍨": 1,
    "💲": 1,
    "🍙": 1,
    "🍥": -4,
    "▸": 1,
    "♛": 1,
    "😼": 1,
    "🐙": 2,
    "👨": 2,
    "🍚": 2,
    "♨": 4,
    "🎹": 1,
    "♕": 2,
    "▃": 5,
    "🇬": 1,
    "🇧": 1,
    "☠": -1,
    "🐠": 2,
    "🚹": 3,
    "💵": 2,
    "✰": 4,
    "╠": 1,
    "👛": 2,
    "🌱": 3,
    "💻": 1,
    "🌏": 1,
    "▄": -1,
    "👓": 1,
    "◄": 1,
    "⚾": -1,
    "🌲": 2,
    "👴": 1,
    "🏠": 2,
    "🍇": 1,
    "🍘": 2,
    "🐇": 1,
    "🔞": -1,
    "👵": 2,
    "◀": 1,
    "🔙": 1,
    "🌵": 1,
    "🍮": -1,
    "🎇": 3,
    "🐎": 2,
    "➔": -1,
    "🐤": 2,
    "╩": 1,
    "🌑": 2,
    "🚲": 2,
    "🐑": -1,
    "🏁": 2,
    "🎾": 3,
    "╚": 1,
    "🈹": 1,
    "👮": -2,
    "☹": -3,
    "🐵": 2,
    "✪": 1,
    "◕": 2,
    "🗼": 3,
    "▐": -1,
    "♠": 1,
    "┳": -2,
    "👺": -2,
    "🐚": 1,
    "👂": -1,
    "🗽": 1,
    "🍵": 2,
    "🆒": 2,
    "🐺": 1,
    "⇨": 2,
    "🌓": 3,
    "🔒": 1,
    "╬": -1,
    "👳": 3,
    "🌂": 1,
    "🚌": 1,
    "♩": 3,
    "🍡": -1,
    "❥": 1,
    "🎡": 1,
    "💌": 2,
    "🐩": 2,
    "🌜": 2,
    "⌚": 1,
    "🚿": 3,
    "🔆": 3,
    "🌛": 3,
    "💂": -1,
    "🐔": 1,
    "🙎": -1,
    "🏩": 2,
    "🇫": 2,
    "🔨": -1,
    "📢": 2,
    "🐦": 2,
    "🐲": -1,
    "♻": 2,
    "🌘": 3,
    "🌔": 3,
    "👖": 2,
    "😗": 3,
    "🐄": 1,
    "◟": -1,
    "🍢": -1,
    "🎨": 1,
    "⬇": 2,
    "🚼": 3,
    "🇴": 2,
    "🌗": 3,
    "🌖": 3,
    "🔅": 5,
    "👜": 1,
    "🐌": 3,
    "💼": 3,
    "🐹": 1,
    "🌠": 3,
    "🐈": 1,
    "🌁": 1,
    "⚫": 1,
    "♧": 2,
    "🏰": 1,
    "🚵": 2,
    "🎢": 2,
    "🎷": 3,
    "🎐": 1,
    "┈": -4,
    "╗": 2,
    "🌇": 3,
    "⏰": 2,
    "🚂": 1,
    "◠": 2,
    "🎿": 2,
    "🆔": 4,
    "🌒": 3,
    "🐪": 3,
    "╔": 1,
    "╝": 2,
    "👔": 2,
    "🆓": 1,
    "🐋": 1,
    "▽": 2,
    "🐛": 1,
    "👕": 2,
    "💳": 2,
    "🏧": 5,
    "💡": 3,
    "⬅": 2,
    "🐫": 2,
    "🇱": 2,
    "📹": 2,
    "👞": 2,
    "👚": 3,
    "□": -2,
    "🚣": 3,
    "🏉": 3,
    "🗻": 3,
    "╦": 2,
    "⛺": 3,
    "🐕": 1,
    "🏂": 2,
    "👡": 2,
    "📻": 2,
    "✒": 1,
    "🌰": 3,
    "🏢": 1,
    "🎒": 3,
    "⌒": 3,
    "🏫": -2,
    "📴": 4,
    "🚢": 1,
    "🚚": -1,
    "🐉": 1,
    "❒": 1,
    "🔔": 5,
    "◢": 4,
    "🏥": 1,
    "🚖": -1,
    "▌": -2,
    "☛": 2,
    "💒": 3,
    "🚤": 2,
    "🐐": 2,
    "■": -2,
    "🔚": 2,
    "🎻": 2,
    "🔷": 1,
    "🎽": 2,
    "📅": 1,
    "🎺": 3,
    "🍈": -3,
    "✉": 1,
    "◤": 5,
    "○": 3,
    "🍼": 3,
    "🚛": -2,
    "📓": 1,
    "☉": 1,
    "💴": -2,
    "➰": -1,
    "🔌": -1,
    "📕": 1,
    "📣": 2,
    "🚓": 1,
    "🐗": 3,
    "⛳": 4,
    "┻": -3,
    "┛": 3,
    "┃": 2,
    "💺": 1,
    "🏇": -1,
    "☻": 1,
    "📞": 2,
    "Ⓐ": -1,
    "🌉": 3,
    "🚩": -2,
    "✎": 3,
    "📃": 2,
    "🏨": 1,
    "📌": -3,
    "♎": -1,
    "💷": 2,
    "🚄": 3,
    "▲": 3,
    "⛵": 3,
    "🔸": 1,
    "🚜": 5,
    "🐆": 2,
    "👒": 1,
    "❕": 1,
    "🔛": 2,
    "♢": 2,
    "🇲": 2,
    "❅": 4,
    "👝": 2,
    "✞": 2,
    "◡": 1,
    "🎋": 3,
    "👥": 1,
    "🐡": 1,
    "◆": 4,
    "🔭": 2,
    "🎪": 1,
    "🐜": 3,
    "♌": 4,
    "☐": -5,
    "👷": 1,
    "🔈": 1,
    "📄": 5,
    "🚐": 4,
    "🌋": 3,
    "📡": 1,
    "🚳": 5,
    "✘": 4,
    "🅰": 1,
    "🇼": 2,
    "┓": 3,
    "┣": 3,
    "Ⓛ": 2,
    "Ⓔ": 2,
    "👤": 4,
    "🚁": 1,
    "🎠": 3,
    "🐁": -2,
    "📗": 1,
    "┐": -1,
    "♂": 1,
    "📯": -1,
    "🔩": 1,
    "👢": 4,
    "◂": 2,
    "📰": 1,
    "📶": 2,
    "🌄": 1,
    "🗾": 2,
    "🔶": 2,
    "🏤": 2,
    "🎩": 2,
    "Ⓜ": 1,
    "🔧": -4,
    "🐅": 1,
    "♮": 1,
    "🅾": -1,
    "📦": 1,
    "🚊": 1,
    "🔲": 3,
    "△": 1,
    "📆": 5,
    "❛": 2,
    "📉": 2,
    "▵": 2,
    "🔎": 3,
    "☜": 1,
    "🇯": 2,
    "🇵": 2,
    "📘": 1,
    "ⓔ": 3,
    "🔑": 1,
    "⭕": 2,
    "🔘": 1,
    "🚭": 5,
    "🚉": 3,
    "🚪": 3,
    "➳": 2,
    "🚃": 3,
    "┯": -3,
    "🆙": 2,
    "🆖": 1,
    "┗": 5,
    "Ⓞ": 2,
    "❇": 3,
    "✴": 3,
    "☊": 5,
    "🔕": -2,
    "⬛": -2,
    "🚞": 3,
    "🍶": 3,
    "🌐": 3,
    "♀": 1,
    "🚅": 3,
    "🚒": -2,
    "♋": 1,
    "♍": 3,
    "🕝": -2,
    "ⓐ": 5,
    "📙": 1,
    "Ⓢ": 1,
    "📋": 3,
    "🎱": 1,
    "🐞": 1,
    "🔺": 1,
    "ⓡ": 5,
    "♤": 3,
    "🎯": 3,
    "🔉": 3,
    "↩": 5,
    "🚾": 1,
    "🎣": -4,
    "🔣": 1,
    "❎": -5,
    "➥": 1,
    "🎌": 5,
    "◣": 1,
    "⏬": 5,
    "♭": 1,
    "ⓞ": 5,
    "🔳": 2,
    "🏭": 2,
    "🎳": -3,
    "☚": 5,
    "➽": 2,
    "➫": 2,
    "➖": -5,
    "꒰": 2,
    "꒱": 2,
    "◝": -3,
    "📑": 5,
    "ⓧ": 5,
    "🔟": 5,
    "〓": 5,
    "ⓜ": 2,
    "➠": 5,
    "🚆": 2,
    "℅": -5,
    "☃": 2,
    "🚽": 5,
    "ⓝ": 5,
    "⇦": 5,
    "👲": 2,
    "🚡": -3,
    "🔬": 5,
    "➗": -3,
    "📈": 2,
    "⏪": 2,
    "◎": 5,
    "꒦": -5,
    "📎": 5,
    "⑅": 5,
    "✭": 5,
    "♓": 2,
    "┏": 5,
    "☇": 5,
    "࿎": -5,
    "👘": 5,
    "↙": 5,
    "Ⓕ": 2,
    "Ⓦ": 2,
    "Ⓟ": 2,
    "🕑": 2,
    "🕛": 5,
    "♈": -5,
    "↬": 5,
    "✍": 5,
    "🏦": 5,
    "🔻": 5,
    "ⓟ": 5,
    "ⓕ": 5,
    "ⓘ": 5,
    "♿": 5,
    "⇗": 5,
    "⇘": 5,
    "ⓨ": 5,
    "ⓙ": 5,
    "▫": 5,
    "🔇": 5,
    "⌃": -5,
    "🔖": 5,
    "📜": 5,
    "🚝": 5,
    "┘": -5,
    "✝": -5,
    "⍣": -5,
    "📮": -5,
    "🕕": -5,
    "🔯": 5,
    "➸": 5,
    "꒵": 5,
    "🕥": -5,
    "✽": 5,
    "📼": 5,
    "🕐": -5,
    "🀄": 5,
    "✬": 5,
    "✫": 5,
    "🕔": -5,
    "❣": 5,
    "📫": 5,
    "🉐": 5,
    "🈂": -5,
    "🎰": -5,
    "҂": -5,
    "╤": -5,
    "📔": 5
}
},{}],210:[function(require,module,exports){
module.exports = {
    labels: require('./labels.json'),
    scoringStrategy: require('./scoring-strategy')
};

},{"./labels.json":211,"./scoring-strategy":213}],211:[function(require,module,exports){
module.exports={
  "abandon": -2,
  "abandoned": -2,
  "abandons": -2,
  "abducted": -2,
  "abduction": -2,
  "abductions": -2,
  "abhor": -3,
  "abhorred": -3,
  "abhorrent": -3,
  "abhors": -3,
  "abilities": 2,
  "ability": 2,
  "aboard": 1,
  "aborted": -1,
  "aborts": -1,
  "absentee": -1,
  "absentees": -1,
  "absolve": 2,
  "absolved": 2,
  "absolves": 2,
  "absolving": 2,
  "absorbed": 1,
  "abuse": -3,
  "abused": -3,
  "abuses": -3,
  "abusing": -3,
  "abusive": -3,
  "accept": 1,
  "acceptable": 1,
  "acceptance": 1,
  "accepted": 1,
  "accepting": 1,
  "accepts": 1,
  "accessible": 1,
  "accident": -2,
  "accidental": -2,
  "accidentally": -2,
  "accidents": -2,
  "acclaim": 2,
  "acclaimed": 2,
  "accolade": 2,
  "accomplish": 2,
  "accomplished": 2,
  "accomplishes": 2,
  "accomplishment": 2,
  "accomplishments": 2,
  "accusation": -2,
  "accusations": -2,
  "accuse": -2,
  "accused": -2,
  "accuses": -2,
  "accusing": -2,
  "ache": -2,
  "achievable": 1,
  "aching": -2,
  "acquit": 2,
  "acquits": 2,
  "acquitted": 2,
  "acquitting": 2,
  "acrimonious": -3,
  "active": 1,
  "adequate": 1,
  "admire": 3,
  "admired": 3,
  "admires": 3,
  "admiring": 3,
  "admit": -1,
  "admits": -1,
  "admitted": -1,
  "admonish": -2,
  "admonished": -2,
  "adopt": 1,
  "adopts": 1,
  "adorable": 3,
  "adoration": 3,
  "adore": 3,
  "adored": 3,
  "adores": 3,
  "adoring": 3,
  "adoringly": 3,
  "advanced": 1,
  "advantage": 2,
  "advantageous": 2,
  "advantageously": 2,
  "advantages": 2,
  "adventure": 2,
  "adventures": 2,
  "adventurous": 2,
  "adversary": -1,
  "advisable": 1,
  "affected": -1,
  "affection": 3,
  "affectionate": 3,
  "affectionateness": 3,
  "afflicted": -1,
  "affordable": 2,
  "affronted": -1,
  "aficionados": 2,
  "afraid": -2,
  "aggravate": -2,
  "aggravated": -2,
  "aggravates": -2,
  "aggravating": -2,
  "aggression": -2,
  "aggressions": -2,
  "aggressive": -2,
  "aggressiveness": -2,
  "aghast": -2,
  "agog": 2,
  "agonise": -3,
  "agonised": -3,
  "agonises": -3,
  "agonising": -3,
  "agonize": -3,
  "agonized": -3,
  "agonizes": -3,
  "agonizing": -3,
  "agree": 1,
  "agreeable": 2,
  "agreed": 1,
  "agreement": 1,
  "agrees": 1,
  "alarm": -2,
  "alarmed": -2,
  "alarmist": -2,
  "alarmists": -2,
  "alas": -1,
  "alert": -1,
  "alienation": -2,
  "alive": 1,
  "allegation": -2,
  "allegations": -2,
  "allergic": -2,
  "allow": 1,
  "ally": 2,
  "alone": -2,
  "altruistic": 2,
  "amaze": 2,
  "amazed": 2,
  "amazes": 2,
  "amazing": 4,
  "ambitious": 2,
  "ambivalent": -1,
  "amicable": 2,
  "amuse": 3,
  "amused": 3,
  "amusement": 3,
  "amusements": 3,
  "anger": -3,
  "angered": -3,
  "angers": -3,
  "angry": -3,
  "anguish": -3,
  "anguished": -3,
  "animosity": -2,
  "annoy": -2,
  "annoyance": -2,
  "annoyed": -2,
  "annoying": -2,
  "annoys": -2,
  "antagonistic": -2,
  "anti": -1,
  "anticipation": 1,
  "anxiety": -2,
  "anxious": -2,
  "apathetic": -3,
  "apathy": -3,
  "apeshit": -3,
  "apocalyptic": -2,
  "apologise": -1,
  "apologised": -1,
  "apologises": -1,
  "apologising": -1,
  "apologize": -1,
  "apologized": -1,
  "apologizes": -1,
  "apologizing": -1,
  "apology": -1,
  "appalled": -2,
  "appalling": -2,
  "appealing": 2,
  "appease": 2,
  "appeased": 2,
  "appeases": 2,
  "appeasing": 2,
  "applaud": 2,
  "applauded": 2,
  "applauding": 2,
  "applauds": 2,
  "applause": 2,
  "appreciate": 2,
  "appreciated": 2,
  "appreciates": 2,
  "appreciating": 2,
  "appreciation": 2,
  "apprehensive": -2,
  "appropriate": 2,
  "appropriately": 2,
  "approval": 2,
  "approved": 2,
  "approves": 2,
  "ardent": 1,
  "arrest": -2,
  "arrested": -3,
  "arrests": -2,
  "arrogant": -2,
  "arsehole": -4,
  "ashame": -2,
  "ashamed": -2,
  "ass": -4,
  "assassination": -3,
  "assassinations": -3,
  "assault": -2,
  "assaults": -2,
  "asset": 2,
  "assets": 2,
  "assfucking": -4,
  "asshole": -4,
  "astonished": 2,
  "astound": 3,
  "astounded": 3,
  "astounding": 3,
  "astoundingly": 3,
  "astounds": 3,
  "atrocious": -3,
  "atrocity": -3,
  "attack": -1,
  "attacked": -1,
  "attacking": -1,
  "attacks": -1,
  "attract": 1,
  "attracted": 1,
  "attracting": 2,
  "attraction": 2,
  "attractions": 2,
  "attractive": 2,
  "attractively": 2,
  "attractiveness": 2,
  "attracts": 1,
  "audacious": 3,
  "aura": 1,
  "authority": 1,
  "avenge": -2,
  "avenged": -2,
  "avenger": -2,
  "avengers": -2,
  "avenges": -2,
  "avenging": -2,
  "avert": -1,
  "averted": -1,
  "averts": -1,
  "avid": 2,
  "avoid": -1,
  "avoided": -1,
  "avoids": -1,
  "await": -1,
  "awaited": -1,
  "awaits": -1,
  "award": 3,
  "awarded": 3,
  "awards": 3,
  "awesome": 4,
  "awful": -3,
  "awkward": -2,
  "axe": -1,
  "axed": -1,
  "backed": 1,
  "backing": 2,
  "backs": 1,
  "bad": -3,
  "bad luck": -2,
  "badass": -3,
  "badly": -3,
  "badness": -3,
  "bailout": -2,
  "balanced": 1,
  "bamboozle": -2,
  "bamboozled": -2,
  "bamboozles": -2,
  "ban": -2,
  "banish": -1,
  "bankrupt": -3,
  "bankruptcy": -3,
  "bankster": -3,
  "banned": -2,
  "barbarian": -2,
  "barbaric": -2,
  "barbarous": -2,
  "bargain": 2,
  "barrier": -2,
  "bastard": -5,
  "bastards": -5,
  "battle": -1,
  "battled": -1,
  "battles": -1,
  "battling": -2,
  "beaten": -2,
  "beatific": 3,
  "beating": -1,
  "beauties": 3,
  "beautiful": 3,
  "beautifully": 3,
  "beautify": 3,
  "beauty": 3,
  "befit": 2,
  "befitting": 2,
  "belittle": -2,
  "belittled": -2,
  "beloved": 3,
  "benefactor": 2,
  "benefactors": 2,
  "benefit": 2,
  "benefits": 2,
  "benefitted": 2,
  "benefitting": 2,
  "benevolent": 3,
  "bereave": -2,
  "bereaved": -2,
  "bereaves": -2,
  "bereaving": -2,
  "best": 3,
  "best damn": 4,
  "betray": -3,
  "betrayal": -3,
  "betrayed": -3,
  "betraying": -3,
  "betrays": -3,
  "better": 2,
  "bias": -1,
  "biased": -2,
  "big": 1,
  "bitch": -5,
  "bitches": -5,
  "bitter": -2,
  "bitterest": -2,
  "bitterly": -2,
  "bizarre": -2,
  "blackmail": -3,
  "blackmailed": -3,
  "blackmailing": -3,
  "blackmails": -3,
  "blah": -2,
  "blame": -2,
  "blamed": -2,
  "blames": -2,
  "blaming": -2,
  "bless": 2,
  "blesses": 2,
  "blessing": 3,
  "blessings": 3,
  "blind": -1,
  "bliss": 3,
  "blissful": 3,
  "blithe": 2,
  "bloated": -1,
  "block": -1,
  "blockade": -2,
  "blockbuster": 3,
  "blocked": -1,
  "blocking": -1,
  "blocks": -1,
  "bloody": -3,
  "blurry": -2,
  "boastful": -2,
  "bold": 2,
  "boldly": 2,
  "bomb": -1,
  "boost": 1,
  "boosted": 1,
  "boosting": 1,
  "boosts": 1,
  "bore": -2,
  "bored": -2,
  "boring": -3,
  "bother": -2,
  "bothered": -2,
  "bothers": -2,
  "bothersome": -2,
  "boycott": -2,
  "boycotted": -2,
  "boycotting": -2,
  "boycotts": -2,
  "brainwashing": -3,
  "brave": 2,
  "braveness": 2,
  "bravery": 2,
  "bravura": 3,
  "breach": -2,
  "breached": -2,
  "breaches": -2,
  "breaching": -2,
  "breakthrough": 3,
  "breathtaking": 5,
  "bribe": -3,
  "bribed": -3,
  "bribes": -3,
  "bribing": -3,
  "bright": 1,
  "brightest": 2,
  "brightness": 1,
  "brilliant": 4,
  "brilliance": 3,
  "brilliances": 3,
  "brisk": 2,
  "broke": -1,
  "broken": -1,
  "brooding": -2,
  "brutal": -3,
  "brutally": -3,
  "bullied": -2,
  "bullshit": -4,
  "bully": -2,
  "bullying": -2,
  "bummer": -2,
  "buoyant": 2,
  "burden": -2,
  "burdened": -2,
  "burdening": -2,
  "burdens": -2,
  "burglar": -2,
  "burglary": -2,
  "calm": 2,
  "calmed": 2,
  "calming": 2,
  "calms": 2,
  "can't stand": -3,
  "cancel": -1,
  "cancelled": -1,
  "cancelling": -1,
  "cancels": -1,
  "cancer": -1,
  "capabilities": 1,
  "capability": 1,
  "capable": 1,
  "captivated": 3,
  "care": 2,
  "carefree": 1,
  "careful": 2,
  "carefully": 2,
  "carefulness": 2,
  "careless": -2,
  "cares": 2,
  "caring": 2,
  "cashing in": -2,
  "casualty": -2,
  "catastrophe": -3,
  "catastrophic": -4,
  "cautious": -1,
  "celebrate": 3,
  "celebrated": 3,
  "celebrates": 3,
  "celebrating": 3,
  "celebration": 3,
  "celebrations": 3,
  "censor": -2,
  "censored": -2,
  "censors": -2,
  "certain": 1,
  "chagrin": -2,
  "chagrined": -2,
  "challenge": -1,
  "champion": 2,
  "championed": 2,
  "champions": 2,
  "chance": 2,
  "chances": 2,
  "chaos": -2,
  "chaotic": -2,
  "charged": -3,
  "charges": -2,
  "charisma": 2,
  "charitable": 2,
  "charm": 3,
  "charming": 3,
  "charmingly": 3,
  "charmless": -3,
  "chastise": -3,
  "chastised": -3,
  "chastises": -3,
  "chastising": -3,
  "cheat": -3,
  "cheated": -3,
  "cheater": -3,
  "cheaters": -3,
  "cheating": -3,
  "cheats": -3,
  "cheer": 2,
  "cheered": 2,
  "cheerful": 2,
  "cheerfully": 2,
  "cheering": 2,
  "cheerless": -2,
  "cheers": 2,
  "cheery": 3,
  "cherish": 2,
  "cherished": 2,
  "cherishes": 2,
  "cherishing": 2,
  "chic": 2,
  "chide": -3,
  "chided": -3,
  "chides": -3,
  "chiding": -3,
  "childish": -2,
  "chilling": -1,
  "choke": -2,
  "choked": -2,
  "chokes": -2,
  "choking": -2,
  "clarifies": 2,
  "clarity": 2,
  "clash": -2,
  "classy": 3,
  "clean": 2,
  "cleaner": 2,
  "clear": 1,
  "cleared": 1,
  "clearly": 1,
  "clears": 1,
  "clever": 2,
  "clouded": -1,
  "clueless": -2,
  "cock": -5,
  "cocksucker": -5,
  "cocksuckers": -5,
  "cocky": -2,
  "coerced": -2,
  "coercion": -2,
  "collapse": -2,
  "collapsed": -2,
  "collapses": -2,
  "collapsing": -2,
  "collide": -1,
  "collides": -1,
  "colliding": -1,
  "collision": -2,
  "collisions": -2,
  "colluding": -3,
  "combat": -1,
  "combats": -1,
  "comedy": 1,
  "comfort": 2,
  "comfortable": 2,
  "comfortably": 2,
  "comforting": 2,
  "comforts": 2,
  "comic": 1,
  "commend": 2,
  "commended": 2,
  "commit": 1,
  "commitment": 2,
  "commits": 1,
  "committed": 1,
  "committing": 1,
  "compassion": 2,
  "compassionate": 2,
  "compelled": 1,
  "competencies": 1,
  "competent": 2,
  "competitive": 2,
  "complacent": -2,
  "complain": -2,
  "complained": -2,
  "complaining": -2,
  "complains": -2,
  "complaint": -2,
  "complaints": -2,
  "complicating": -2,
  "compliment": 2,
  "complimented": 2,
  "compliments": 2,
  "comprehensive": 2,
  "concerned": -2,
  "conciliate": 2,
  "conciliated": 2,
  "conciliates": 2,
  "conciliating": 2,
  "condemn": -2,
  "condemnation": -2,
  "condemned": -2,
  "condemns": -2,
  "confidence": 2,
  "confident": 2,
  "confidently": 2,
  "conflict": -2,
  "conflicting": -2,
  "conflictive": -2,
  "conflicts": -2,
  "confuse": -2,
  "confused": -2,
  "confusing": -2,
  "congrats": 2,
  "congratulate": 2,
  "congratulation": 2,
  "congratulations": 2,
  "consent": 2,
  "consents": 2,
  "consolable": 2,
  "conspiracy": -3,
  "constipation": -2,
  "constrained": -2,
  "contagion": -2,
  "contagions": -2,
  "contagious": -1,
  "contaminant": -2,
  "contaminants": -2,
  "contaminate": -2,
  "contaminated": -2,
  "contaminates": -2,
  "contaminating": -2,
  "contamination": -2,
  "contaminations": -2,
  "contempt": -2,
  "contemptible": -2,
  "contemptuous": -2,
  "contemptuously": -2,
  "contend": -1,
  "contender": -1,
  "contending": -1,
  "contentious": -2,
  "contestable": -2,
  "controversial": -2,
  "controversially": -2,
  "controversies": -2,
  "controversy": -2,
  "convicted": -2,
  "convince": 1,
  "convinced": 1,
  "convinces": 1,
  "convivial": 2,
  "cool": 1,
  "cool stuff": 3,
  "cornered": -2,
  "corpse": -1,
  "corrupt": -3,
  "corrupted": -3,
  "corrupting": -3,
  "corruption": -3,
  "corrupts": -3,
  "costly": -2,
  "courage": 2,
  "courageous": 2,
  "courageously": 2,
  "courageousness": 2,
  "courteous": 2,
  "courtesy": 2,
  "cover-up": -3,
  "coward": -2,
  "cowardly": -2,
  "coziness": 2,
  "cramp": -1,
  "crap": -3,
  "crappy": -3,
  "crash": -2,
  "crazier": -2,
  "craziest": -2,
  "crazy": -2,
  "creative": 2,
  "crestfallen": -2,
  "cried": -2,
  "cries": -2,
  "crime": -3,
  "crimes": -3,
  "criminal": -3,
  "criminals": -3,
  "criminate": -3,
  "criminated": -3,
  "criminates": -3,
  "crisis": -3,
  "critic": -2,
  "criticise": -2,
  "criticised": -2,
  "criticises": -2,
  "criticising": -2,
  "criticism": -2,
  "criticize": -2,
  "criticized": -2,
  "criticizes": -2,
  "criticizing": -2,
  "critics": -2,
  "critique": -2,
  "crowding": -1,
  "crude": -1,
  "cruel": -3,
  "cruelty": -3,
  "crush": -1,
  "crushed": -2,
  "crushes": -1,
  "crushing": -1,
  "cry": -1,
  "crying": -2,
  "cunning": 2,
  "cunt": -5,
  "curious": 1,
  "curse": -1,
  "cut": -1,
  "cutback": -2,
  "cutbacks": -2,
  "cute": 2,
  "cuts": -1,
  "cutting": -1,
  "cynic": -2,
  "cynical": -2,
  "cynicism": -2,
  "damage": -3,
  "damaged": -3,
  "damages": -3,
  "damaging": -3,
  "damn": -2,
  "damn cute": 3,
  "damn good": 4,
  "damned": -4,
  "damnit": -4,
  "danger": -2,
  "dangerous": -2,
  "dangerously": -2,
  "daredevil": 2,
  "daring": 2,
  "darkest": -2,
  "darkness": -1,
  "dauntless": 2,
  "dazzling": 3,
  "dead": -3,
  "deadening": -2,
  "deadlock": -2,
  "deadly": -3,
  "deafening": -1,
  "dear": 2,
  "dearly": 3,
  "death": -2,
  "deaths": -2,
  "debonair": 2,
  "debt": -2,
  "deceit": -3,
  "deceitful": -3,
  "deceive": -3,
  "deceived": -3,
  "deceives": -3,
  "deceiving": -3,
  "deception": -3,
  "deceptive": -3,
  "decisive": 1,
  "dedicated": 2,
  "dedication": 2,
  "defeat": -2,
  "defeated": -2,
  "defect": -3,
  "defective": -3,
  "defects": -3,
  "defender": 2,
  "defenders": 2,
  "defenseless": -2,
  "defer": -1,
  "deferring": -1,
  "defiant": -1,
  "deficient": -2,
  "deficiency": -2,
  "deficiencies": -2,
  "deficit": -2,
  "deformed": -2,
  "deformities": -2,
  "deformity": -2,
  "defraud": -3,
  "defrauds": -3,
  "deft": 2,
  "defunct": -2,
  "degrade": -2,
  "degraded": -2,
  "degrades": -2,
  "dehumanize": -2,
  "dehumanized": -2,
  "dehumanizes": -2,
  "dehumanizing": -2,
  "deject": -2,
  "dejected": -2,
  "dejecting": -2,
  "dejects": -2,
  "delay": -1,
  "delayed": -1,
  "delectable": 3,
  "delicious": 3,
  "delight": 3,
  "delighted": 3,
  "delightful": 3,
  "delightfully": 3,
  "delighting": 3,
  "delights": 3,
  "demand": -1,
  "demanded": -1,
  "demanding": -1,
  "demands": -1,
  "demonstration": -1,
  "demoralize": -2,
  "demoralized": -2,
  "demoralizes": -2,
  "demoralizing": -2,
  "denial": -2,
  "denials": -2,
  "denied": -2,
  "denier": -2,
  "deniers": -2,
  "denies": -2,
  "denounce": -2,
  "denounces": -2,
  "dent": -2,
  "deny": -2,
  "denying": -2,
  "deplore": -3,
  "deplored": -3,
  "deplores": -3,
  "deploring": -3,
  "deport": -2,
  "deported": -2,
  "deporting": -2,
  "deports": -2,
  "deportation": -2,
  "deportations": -2,
  "depressed": -2,
  "depressing": -2,
  "deprivation": -3,
  "derail": -2,
  "derailed": -2,
  "derails": -2,
  "derelict": -2,
  "deride": -2,
  "derided": -2,
  "derides": -2,
  "deriding": -2,
  "derision": -2,
  "desirable": 2,
  "desire": 1,
  "desired": 2,
  "desirous": 2,
  "despair": -3,
  "despairing": -3,
  "despairs": -3,
  "desperate": -3,
  "desperately": -3,
  "despondent": -3,
  "destroy": -3,
  "destroyed": -3,
  "destroying": -3,
  "destroys": -3,
  "destruction": -3,
  "destructive": -3,
  "detached": -1,
  "detain": -2,
  "detained": -2,
  "detention": -2,
  "deteriorate": -2,
  "deteriorated": -2,
  "deteriorates": -2,
  "deteriorating": -2,
  "determined": 2,
  "deterrent": -2,
  "detract": -1,
  "detracted": -1,
  "detracts": -1,
  "devastate": -2,
  "devastated": -2,
  "devastating": -2,
  "devastation": -2,
  "devastations": -2,
  "devoted": 3,
  "devotion": 2,
  "devotional": 2,
  "diamond": 1,
  "dick": -4,
  "dickhead": -4,
  "die": -3,
  "died": -3,
  "difficult": -1,
  "diffident": -2,
  "dignity": 2,
  "dilemma": -1,
  "dilligence": 2,
  "dipshit": -3,
  "dire": -3,
  "direful": -3,
  "dirt": -2,
  "dirtier": -2,
  "dirtiest": -2,
  "dirty": -2,
  "disabilities": -2,
  "disability": -2,
  "disabling": -1,
  "disadvantage": -2,
  "disadvantaged": -2,
  "disagree": -2,
  "disagreeable": -2,
  "disagreement": -2,
  "disappear": -1,
  "disappeared": -1,
  "disappears": -1,
  "disappoint": -2,
  "disappointed": -2,
  "disappointing": -2,
  "disappointment": -2,
  "disappointments": -2,
  "disappoints": -2,
  "disapproval": -2,
  "disapprovals": -2,
  "disapprove": -2,
  "disapproved": -2,
  "disapproves": -2,
  "disapproving": -2,
  "disaster": -2,
  "disasters": -2,
  "disastrous": -3,
  "disbelieve": -2,
  "discard": -1,
  "discarded": -1,
  "discarding": -1,
  "discards": -1,
  "discernment": 2,
  "discomfort": -2,
  "disconsolate": -2,
  "disconsolation": -2,
  "discontented": -2,
  "discord": -2,
  "discounted": -1,
  "discouraged": -2,
  "discredited": -2,
  "discriminate": -2,
  "discriminated": -2,
  "discriminates": -2,
  "discriminating": -2,
  "discriminatory": -2,
  "disdain": -2,
  "disease": -1,
  "diseases": -1,
  "disgrace": -2,
  "disgraced": -2,
  "disguise": -1,
  "disguised": -1,
  "disguises": -1,
  "disguising": -1,
  "disgust": -3,
  "disgusted": -3,
  "disgustful": -3,
  "disgusting": -3,
  "disheartened": -2,
  "dishonest": -2,
  "disillusioned": -2,
  "disinclined": -2,
  "disjointed": -2,
  "dislike": -2,
  "disliked": -2,
  "dislikes": -2,
  "dismal": -2,
  "dismayed": -2,
  "dismissed": -2,
  "disorder": -2,
  "disorders": -2,
  "disorganized": -2,
  "disoriented": -2,
  "disparage": -2,
  "disparaged": -2,
  "disparages": -2,
  "disparaging": -2,
  "displeased": -2,
  "displeasure": -2,
  "disproportionate": -2,
  "dispute": -2,
  "disputed": -2,
  "disputes": -2,
  "disputing": -2,
  "disqualified": -2,
  "disquiet": -2,
  "disregard": -2,
  "disregarded": -2,
  "disregarding": -2,
  "disregards": -2,
  "disrespect": -2,
  "disrespected": -2,
  "disrupt": -2,
  "disrupted": -2,
  "disrupting": -2,
  "disruption": -2,
  "disruptions": -2,
  "disruptive": -2,
  "disrupts": -2,
  "dissatisfied": -2,
  "distasteful": -2,
  "distinguished": 2,
  "distort": -2,
  "distorted": -2,
  "distorting": -2,
  "distorts": -2,
  "distract": -2,
  "distracted": -2,
  "distraction": -2,
  "distracts": -2,
  "distress": -2,
  "distressed": -2,
  "distresses": -2,
  "distressing": -2,
  "distrust": -3,
  "distrustful": -3,
  "disturb": -2,
  "disturbed": -2,
  "disturbing": -2,
  "disturbs": -2,
  "dithering": -2,
  "diverting": -1,
  "dizzy": -1,
  "dodging": -2,
  "dodgy": -2,
  "does not work": -3,
  "dolorous": -2,
  "donate": 2,
  "donated": 2,
  "donates": 2,
  "donating": 2,
  "donation": 2,
  "dont like": -2,
  "doom": -2,
  "doomed": -2,
  "doubt": -1,
  "doubted": -1,
  "doubtful": -1,
  "doubting": -1,
  "doubts": -1,
  "douche": -3,
  "douchebag": -3,
  "dour": -2,
  "downcast": -2,
  "downer": -2,
  "downhearted": -2,
  "downside": -2,
  "drag": -1,
  "dragged": -1,
  "drags": -1,
  "drained": -2,
  "dread": -2,
  "dreaded": -2,
  "dreadful": -3,
  "dreading": -2,
  "dream": 1,
  "dreams": 1,
  "dreary": -2,
  "droopy": -2,
  "drop": -1,
  "dropped": -1,
  "drown": -2,
  "drowned": -2,
  "drowns": -2,
  "drudgery": -2,
  "drunk": -2,
  "dubious": -2,
  "dud": -2,
  "dull": -2,
  "dumb": -3,
  "dumbass": -3,
  "dump": -1,
  "dumped": -2,
  "dumps": -1,
  "dupe": -2,
  "duped": -2,
  "dupery": -2,
  "durable": 2,
  "dying": -3,
  "dysfunction": -2,
  "eager": 2,
  "earnest": 2,
  "ease": 2,
  "easy": 1,
  "ecstatic": 4,
  "eerie": -2,
  "eery": -2,
  "effective": 2,
  "effectively": 2,
  "effectiveness": 2,
  "effortlessly": 2,
  "elated": 3,
  "elation": 3,
  "elegant": 2,
  "elegantly": 2,
  "embarrass": -2,
  "embarrassed": -2,
  "embarrasses": -2,
  "embarrassing": -2,
  "embarrassment": -2,
  "embezzlement": -3,
  "embittered": -2,
  "embrace": 1,
  "emergency": -2,
  "empathetic": 2,
  "empower": 2,
  "empowerment": 2,
  "emptiness": -1,
  "empty": -1,
  "enchanted": 2,
  "encourage": 2,
  "encouraged": 2,
  "encouragement": 2,
  "encourages": 2,
  "encouraging": 2,
  "endorse": 2,
  "endorsed": 2,
  "endorsement": 2,
  "endorses": 2,
  "enemies": -2,
  "enemy": -2,
  "energetic": 2,
  "engage": 1,
  "engages": 1,
  "engrossed": 1,
  "engrossing": 3,
  "enjoy": 2,
  "enjoyable": 2,
  "enjoyed": 2,
  "enjoying": 2,
  "enjoys": 2,
  "enlighten": 2,
  "enlightened": 2,
  "enlightening": 2,
  "enlightens": 2,
  "ennui": -2,
  "enrage": -2,
  "enraged": -2,
  "enrages": -2,
  "enraging": -2,
  "enrapture": 3,
  "enslave": -2,
  "enslaved": -2,
  "enslaves": -2,
  "ensure": 1,
  "ensuring": 1,
  "enterprising": 1,
  "entertaining": 2,
  "enthral": 3,
  "enthusiastic": 3,
  "entitled": 1,
  "entrusted": 2,
  "envies": -1,
  "envious": -2,
  "environment-friendly": 2,
  "envy": -1,
  "envying": -1,
  "erroneous": -2,
  "error": -2,
  "errors": -2,
  "escape": -1,
  "escapes": -1,
  "escaping": -1,
  "esteem": 2,
  "esteemed": 2,
  "ethical": 2,
  "euphoria": 3,
  "euphoric": 4,
  "evacuate": -1,
  "evacuated": -1,
  "evacuates": -1,
  "evacuating": -1,
  "evacuation": -1,
  "evergreen": 2,
  "evergreens": 2,
  "evergreening": -3,
  "eviction": -1,
  "evil": -3,
  "exacerbate": -2,
  "exacerbated": -2,
  "exacerbates": -2,
  "exacerbating": -2,
  "exaggerate": -2,
  "exaggerated": -2,
  "exaggerates": -2,
  "exaggerating": -2,
  "exasparate": -2,
  "exasperated": -2,
  "exasperates": -2,
  "exasperating": -2,
  "excellence": 3,
  "excellent": 3,
  "excite": 3,
  "excited": 3,
  "excitement": 3,
  "exciting": 3,
  "exclude": -1,
  "excluded": -2,
  "exclusion": -1,
  "exclusive": 2,
  "excruciatingly": -1,
  "excuse": -1,
  "exempt": -1,
  "exhausted": -2,
  "exhilarated": 3,
  "exhilarates": 3,
  "exhilarating": 3,
  "exonerate": 2,
  "exonerated": 2,
  "exonerates": 2,
  "exonerating": 2,
  "expand": 1,
  "expands": 1,
  "expel": -2,
  "expelled": -2,
  "expelling": -2,
  "expels": -2,
  "expertly": 2,
  "exploit": -2,
  "exploited": -2,
  "exploiting": -2,
  "exploits": -2,
  "exploration": 1,
  "explorations": 1,
  "expose": -1,
  "exposed": -1,
  "exposes": -1,
  "exposing": -1,
  "exquisite": 3,
  "extend": 1,
  "extends": 1,
  "extremist": -2,
  "extremists": -2,
  "exuberant": 4,
  "exultant": 3,
  "exultantly": 3,
  "fabulous": 4,
  "fabulously": 4,
  "fad": -2,
  "fag": -3,
  "faggot": -3,
  "faggots": -3,
  "fail": -2,
  "failed": -2,
  "failing": -2,
  "fails": -2,
  "failure": -2,
  "failures": -2,
  "fainthearted": -2,
  "fair": 2,
  "fairness": 2,
  "faith": 1,
  "faithful": 3,
  "fake": -3,
  "faker": -3,
  "fakes": -3,
  "faking": -3,
  "fallen": -2,
  "falling": -1,
  "false": -1,
  "falsely": -2,
  "falsified": -3,
  "falsify": -3,
  "fame": 1,
  "famine": -2,
  "famous": 2,
  "fan": 3,
  "fantastic": 4,
  "farce": -1,
  "fascinate": 3,
  "fascinated": 3,
  "fascinates": 3,
  "fascinating": 3,
  "fascination": 3,
  "fascist": -2,
  "fascists": -2,
  "fatal": -3,
  "fatalities": -3,
  "fatality": -3,
  "fatigue": -2,
  "fatigued": -2,
  "fatigues": -2,
  "fatiguing": -2,
  "favor": 2,
  "favorable": 2,
  "favorably": 2,
  "favored": 2,
  "favorite": 2,
  "favorited": 2,
  "favorites": 2,
  "favors": 2,
  "favour": 2,
  "favourable": 2,
  "favourably": 2,
  "favoured": 2,
  "favourite": 2,
  "favourited": 2,
  "favourites": 2,
  "favours": 2,
  "fear": -2,
  "fearful": -2,
  "fearfully": -2,
  "fearing": -2,
  "fearless": 2,
  "fearlessness": 2,
  "fearsome": -2,
  "fed up": -3,
  "feeble": -2,
  "feeling": 1,
  "felonies": -3,
  "felony": -3,
  "fertile": 2,
  "fervent": 2,
  "fervid": 2,
  "festive": 2,
  "fever": -2,
  "fiasco": -3,
  "fidgety": -2,
  "fight": -1,
  "fighting": -2,
  "fine": 2,
  "fines": -2,
  "finest": 3,
  "fire": -2,
  "fired": -2,
  "firing": -2,
  "fit": 1,
  "fitness": 1,
  "filth": -2,
  "filthy": -2,
  "flagship": 2,
  "flaw": -2,
  "flawed": -3,
  "flawless": 2,
  "flawlessly": 2,
  "flaws": -2,
  "flees": -1,
  "flop": -2,
  "flops": -2,
  "flu": -2,
  "flustered": -2,
  "focused": 2,
  "fond": 2,
  "fondness": 2,
  "fool": -2,
  "foolish": -2,
  "fools": -2,
  "forbid": -1,
  "forbidden": -2,
  "forbidding": -2,
  "forced": -1,
  "foreclosure": -2,
  "foreclosures": -2,
  "forefront": 1,
  "forget": -1,
  "forgetful": -2,
  "forgettable": -1,
  "forgive": 1,
  "forgiving": 1,
  "forgot": -1,
  "forgotten": -1,
  "fortune": 2,
  "fortunate": 2,
  "fortunately": 2,
  "foul": -3,
  "frantic": -1,
  "fraud": -4,
  "frauds": -4,
  "fraudster": -4,
  "fraudsters": -4,
  "fraudulence": -4,
  "fraudulent": -4,
  "freak": -2,
  "free": 1,
  "freedom": 2,
  "freedoms": 2,
  "frenzy": -3,
  "fresh": 1,
  "friend": 1,
  "friendliness": 2,
  "friendly": 2,
  "friendship": 2,
  "fright": -2,
  "frightened": -2,
  "frightening": -3,
  "frikin": -2,
  "frisky": 2,
  "frowning": -1,
  "fruitless": -2,
  "frustrate": -2,
  "frustrated": -2,
  "frustrates": -2,
  "frustrating": -2,
  "frustration": -2,
  "ftw": 3,
  "fuck": -4,
  "fucked": -4,
  "fucker": -4,
  "fuckers": -4,
  "fuckface": -4,
  "fuckhead": -4,
  "fuckin": -4,
  "fucking": -4,
  "fucking amazing": 4,
  "fucking beautiful": 4,
  "fucking cute": 4,
  "fucking fantastic": 4,
  "fucking good": 4,
  "fucking great": 4,
  "fucking hot": 2,
  "fucking love": 4,
  "fucking loves": 4,
  "fucking perfect": 4,
  "fucktard": -4,
  "fud": -3,
  "fuked": -4,
  "fuking": -4,
  "fulfill": 2,
  "fulfilled": 2,
  "fulfillment": 2,
  "fulfills": 2,
  "fuming": -2,
  "fun": 4,
  "funeral": -1,
  "funerals": -1,
  "funky": 2,
  "funnier": 4,
  "funny": 4,
  "furious": -3,
  "futile": -2,
  "gag": -2,
  "gagged": -2,
  "gain": 2,
  "gained": 2,
  "gaining": 2,
  "gains": 2,
  "gallant": 3,
  "gallantly": 3,
  "gallantry": 3,
  "game-changing": 3,
  "garbage": -1,
  "gem": 3,
  "generous": 2,
  "generously": 2,
  "genial": 3,
  "ghastly": -2,
  "ghost": -1,
  "giddy": -2,
  "gift": 2,
  "glad": 3,
  "glamorous": 3,
  "glamourous": 3,
  "glee": 3,
  "gleeful": 3,
  "gloom": -1,
  "gloomy": -2,
  "glorious": 2,
  "glory": 2,
  "glum": -2,
  "god": 1,
  "goddamn": -3,
  "godsend": 4,
  "gold": 2,
  "good": 3,
  "goodlooking": 3,
  "goodmorning": 1,
  "goodness": 3,
  "goodwill": 3,
  "goofiness": -2,
  "goofy": -2,
  "grace": 1,
  "graceful": 2,
  "gracious": 3,
  "grand": 3,
  "grant": 1,
  "granted": 1,
  "granting": 1,
  "grants": 1,
  "grateful": 3,
  "gratification": 2,
  "grave": -2,
  "gray": -1,
  "grisly": -2,
  "gr8": 3,
  "great": 3,
  "greater": 3,
  "greatest": 3,
  "greed": -3,
  "greedy": -2,
  "green wash": -3,
  "green washing": -3,
  "greenwash": -3,
  "greenwasher": -3,
  "greenwashers": -3,
  "greenwashing": -3,
  "greet": 1,
  "greeted": 1,
  "greeting": 1,
  "greetings": 2,
  "greets": 1,
  "grey": -1,
  "grief": -2,
  "grieved": -2,
  "grim": -2,
  "gripping": 2,
  "groan": -2,
  "groaned": -2,
  "groaning": -2,
  "groans": -2,
  "gross": -2,
  "growing": 1,
  "growth": 2,
  "growths": 2,
  "gruesome": -3,
  "guarantee": 1,
  "guilt": -3,
  "guilty": -3,
  "gullibility": -2,
  "gullible": -2,
  "gun": -1,
  "ha": 2,
  "hacked": -1,
  "haha": 3,
  "hahaha": 3,
  "hahahah": 3,
  "hail": 2,
  "hailed": 2,
  "hallelujah": 3,
  "handpicked": 1,
  "handsome": 3,
  "hapless": -2,
  "haplessness": -2,
  "happiest": 3,
  "happiness": 3,
  "happy": 3,
  "harass": -3,
  "harassed": -3,
  "harasses": -3,
  "harassing": -3,
  "harassment": -3,
  "hard": -1,
  "hardier": 2,
  "hardship": -2,
  "hardy": 2,
  "harm": -2,
  "harmed": -2,
  "harmful": -2,
  "harming": -2,
  "harmony": 2,
  "harmonious": 2,
  "harmoniously": 2,
  "harms": -2,
  "harried": -2,
  "harsh": -2,
  "harsher": -2,
  "harshest": -2,
  "harshly": -2,
  "hate": -3,
  "hated": -3,
  "hater": -3,
  "haters": -3,
  "hates": -3,
  "hating": -3,
  "hatred": -3,
  "haunt": -1,
  "haunted": -2,
  "haunting": 1,
  "haunts": -1,
  "havoc": -2,
  "hazardous": -3,
  "headache": -2,
  "healthy": 2,
  "heartbreaking": -3,
  "heartbroken": -3,
  "heartfelt": 3,
  "heartless": -2,
  "heartwarming": 3,
  "heaven": 2,
  "heavenly": 4,
  "heavyhearted": -2,
  "hehe": 2,
  "hell": -4,
  "hellish": -2,
  "help": 2,
  "helpful": 2,
  "helping": 2,
  "helpless": -2,
  "helps": 2,
  "hero": 2,
  "heroes": 2,
  "heroic": 3,
  "hesitant": -2,
  "hesitate": -2,
  "hid": -1,
  "hide": -1,
  "hideous": -3,
  "hides": -1,
  "hiding": -1,
  "highlight": 2,
  "hilarious": 2,
  "hinder": -2,
  "hindrance": -2,
  "hoax": -2,
  "hollow": -1,
  "homeless": -2,
  "homesick": -2,
  "homicide": -2,
  "homicides": -2,
  "honest": 2,
  "honor": 2,
  "honored": 2,
  "honoring": 2,
  "honour": 2,
  "honoured": 2,
  "honouring": 2,
  "hooligan": -2,
  "hooliganism": -2,
  "hooligans": -2,
  "hope": 2,
  "hopeful": 2,
  "hopefully": 2,
  "hopeless": -2,
  "hopelessness": -2,
  "hopes": 2,
  "hoping": 2,
  "horrendous": -3,
  "horrid": -3,
  "horrible": -3,
  "horrific": -3,
  "horrified": -3,
  "hospitalized": -2,
  "hostile": -2,
  "huckster": -2,
  "hug": 2,
  "huge": 1,
  "hugs": 2,
  "humane": 2,
  "humble": 1,
  "humbug": -2,
  "humerous": 3,
  "humiliated": -3,
  "humiliation": -3,
  "humor": 2,
  "humorous": 2,
  "humour": 2,
  "humourous": 2,
  "hunger": -2,
  "hurrah": 5,
  "hurt": -2,
  "hurting": -2,
  "hurts": -2,
  "hypocritical": -2,
  "hysteria": -3,
  "hysterical": -3,
  "hysterics": -3,
  "icky": -3,
  "idiocy": -3,
  "idiot": -3,
  "idiotic": -3,
  "ignorance": -2,
  "ignorant": -2,
  "ignore": -1,
  "ignored": -2,
  "ignores": -1,
  "ill": -2,
  "ill-fated": -2,
  "illegal": -3,
  "illegally": -3,
  "illegitimate": -3,
  "illiteracy": -2,
  "illness": -2,
  "illnesses": -2,
  "illogical": -2,
  "imaginative": 2,
  "imbecile": -3,
  "immobilized": -1,
  "immortal": 2,
  "immune": 1,
  "impair": -2,
  "impaired": -2,
  "impairing": -2,
  "impairment": -2,
  "impairs": -2,
  "impatient": -2,
  "impeachment": -3,
  "impeachments": -3,
  "impede": -2,
  "impeded": -2,
  "impedes": -2,
  "impeding": -2,
  "impedingly": -2,
  "imperfect": -2,
  "importance": 2,
  "important": 2,
  "impose": -1,
  "imposed": -1,
  "imposes": -1,
  "imposing": -1,
  "imposter": -2,
  "impotent": -2,
  "impress": 3,
  "impressed": 3,
  "impresses": 3,
  "impressive": 3,
  "imprisoned": -2,
  "imprisonment": -2,
  "improper": -2,
  "improperly": -2,
  "improve": 2,
  "improved": 2,
  "improvement": 2,
  "improves": 2,
  "improving": 2,
  "inability": -2,
  "inaction": -2,
  "inadequate": -2,
  "inadvertently": -2,
  "inappropriate": -2,
  "incapable": -2,
  "incapacitated": -2,
  "incapacitates": -2,
  "incapacitating": -2,
  "incense": -2,
  "incensed": -2,
  "incenses": -2,
  "incensing": -2,
  "incoherent": -2,
  "incompetence": -2,
  "incompetent": -2,
  "incomplete": -1,
  "incomprehensible": -2,
  "inconsiderate": -2,
  "inconvenience": -2,
  "inconvenient": -2,
  "increase": 1,
  "increased": 1,
  "indecisive": -2,
  "indestructible": 2,
  "indicted": -2,
  "indifference": -2,
  "indifferent": -2,
  "indignant": -2,
  "indignation": -2,
  "indoctrinate": -2,
  "indoctrinated": -2,
  "indoctrinates": -2,
  "indoctrinating": -2,
  "inediable": -2,
  "inexorable": -3,
  "inexcusable": -3,
  "ineffective": -2,
  "ineffectively": -2,
  "ineffectual": -2,
  "inefficiency": -2,
  "inefficient": -2,
  "inefficiently": -2,
  "inept": -2,
  "ineptitude": -2,
  "infantile": -2,
  "infantilized": -2,
  "infatuated": 2,
  "infatuation": 2,
  "infect": -2,
  "infected": -2,
  "infecting": -2,
  "infection": -2,
  "infections": -2,
  "infectious": -2,
  "infects": -2,
  "inferior": -2,
  "infest": -2,
  "infested": -2,
  "infesting": -2,
  "infests": -2,
  "inflamed": -2,
  "inflict": -2,
  "inflicted": -2,
  "inflicting": -2,
  "inflicts": -2,
  "influential": 2,
  "infract": -2,
  "infracted": -2,
  "infracting": -2,
  "infracts": -2,
  "infringement": -2,
  "infuriate": -2,
  "infuriated": -2,
  "infuriates": -2,
  "infuriating": -2,
  "inhibit": -1,
  "inhuman": -2,
  "injured": -2,
  "injuries": -2,
  "injury": -2,
  "injustice": -2,
  "innovate": 1,
  "innovates": 1,
  "innovation": 1,
  "innovative": 2,
  "inoperative": -2,
  "inquisition": -2,
  "inquisitive": 2,
  "insane": -2,
  "insanity": -2,
  "insecure": -2,
  "insensitive": -2,
  "insensitivity": -2,
  "insignificant": -2,
  "insipid": -2,
  "insolvent": -2,
  "insomnia": -2,
  "inspiration": 2,
  "inspirational": 2,
  "inspire": 2,
  "inspired": 2,
  "inspires": 2,
  "inspiring": 3,
  "insufficiency": -2,
  "insufficient": -2,
  "insufficiently": -2,
  "insult": -2,
  "insulted": -2,
  "insulting": -2,
  "insults": -2,
  "intact": 2,
  "integrity": 2,
  "intelligent": 2,
  "intense": 1,
  "interest": 1,
  "interested": 2,
  "interesting": 2,
  "interests": 1,
  "interrogated": -2,
  "interrupt": -2,
  "interrupted": -2,
  "interrupting": -2,
  "interruption": -2,
  "interrupts": -2,
  "intimacy": 2,
  "intimidate": -2,
  "intimidated": -2,
  "intimidates": -2,
  "intimidating": -2,
  "intimidation": -2,
  "intransigence": -2,
  "intransigency": -2,
  "intricate": 2,
  "intrigues": 1,
  "invasion": -1,
  "invincible": 2,
  "invite": 1,
  "inviting": 1,
  "invulnerable": 2,
  "irate": -3,
  "ironic": -1,
  "irony": -1,
  "irrational": -1,
  "irreparable": -2,
  "irreproducible": -2,
  "irresistible": 2,
  "irresistibly": 2,
  "irresolute": -2,
  "irresponsible": -2,
  "irresponsibly": -2,
  "irreversible": -1,
  "irreversibly": -1,
  "irritate": -3,
  "irritated": -3,
  "irritates": -3,
  "irritating": -3,
  "isolated": -1,
  "itchy": -2,
  "jackass": -4,
  "jackasses": -4,
  "jailed": -2,
  "jaunty": 2,
  "jealous": -2,
  "jealousy": -2,
  "jeopardy": -2,
  "jerk": -3,
  "jesus": 1,
  "jewel": 1,
  "jewels": 1,
  "jocular": 2,
  "join": 1,
  "joke": 2,
  "jokes": 2,
  "jolly": 2,
  "jovial": 2,
  "joy": 3,
  "joyful": 3,
  "joyfully": 3,
  "joyless": -2,
  "joyous": 3,
  "jubilant": 3,
  "jumpy": -1,
  "justice": 2,
  "justifiably": 2,
  "justified": 2,
  "keen": 1,
  "kickback": -3,
  "kickbacks": -3,
  "kidnap": -2,
  "kidnapped": -2,
  "kidnapping": -2,
  "kidnappings": -2,
  "kidnaps": -2,
  "kill": -3,
  "killed": -3,
  "killing": -3,
  "kills": -3,
  "kind": 2,
  "kind of": 0,
  "kinder": 2,
  "kindness": 2,
  "kiss": 2,
  "kudos": 3,
  "lack": -2,
  "lackadaisical": -2,
  "lag": -1,
  "lagged": -2,
  "lagging": -2,
  "lags": -2,
  "lame": -2,
  "landmark": 2,
  "lapse": -1,
  "lapsed": -1,
  "laugh": 1,
  "laughed": 1,
  "laughing": 1,
  "laughs": 1,
  "laughting": 1,
  "launched": 1,
  "lawl": 3,
  "lawsuit": -2,
  "lawsuits": -2,
  "lazy": -1,
  "leadership": 1,
  "leading": 2,
  "leak": -1,
  "leaked": -1,
  "leave": -1,
  "legal": 1,
  "legally": 1,
  "lenient": 1,
  "lethal": -2,
  "lethality": -2,
  "lethargic": -2,
  "lethargy": -2,
  "liar": -3,
  "liars": -3,
  "libelous": -2,
  "lied": -2,
  "lifeless": -1,
  "lifesaver": 4,
  "lighthearted": 1,
  "likable": 2,
  "like": 2,
  "likeable": 2,
  "liked": 2,
  "likers": 2,
  "likes": 2,
  "liking": 2,
  "limitation": -1,
  "limited": -1,
  "limits": -1,
  "litigation": -1,
  "litigious": -2,
  "lively": 2,
  "livid": -2,
  "lmao": 4,
  "lmfao": 4,
  "loathe": -3,
  "loathed": -3,
  "loathes": -3,
  "loathing": -3,
  "loathsome": -3,
  "lobbied": -2,
  "lobby": -2,
  "lobbying": -2,
  "lobbyist": -2,
  "lobbyists": -2,
  "lol": 3,
  "lolol": 4,
  "lololol": 4,
  "lolololol": 4,
  "lonely": -2,
  "lonesome": -2,
  "longing": -1,
  "lool": 3,
  "loom": -1,
  "loomed": -1,
  "looming": -1,
  "looms": -1,
  "loool": 3,
  "looool": 3,
  "loose": -3,
  "looses": -3,
  "loser": -3,
  "losing": -3,
  "loss": -3,
  "losses": -3,
  "lost": -3,
  "lousy": -2,
  "lovable": 3,
  "love": 3,
  "loved": 3,
  "lovelies": 3,
  "lovely": 3,
  "loves": 3,
  "loving": 2,
  "loving-kindness": 3,
  "lowest": -1,
  "loyal": 3,
  "loyalty": 3,
  "luck": 3,
  "luckily": 3,
  "lucky": 3,
  "lucrative": 3,
  "ludicrous": -3,
  "lugubrious": -2,
  "lunatic": -3,
  "lunatics": -3,
  "lurk": -1,
  "lurking": -1,
  "lurks": -1,
  "luxury": 2,
  "macabre": -2,
  "mad": -3,
  "maddening": -3,
  "made-up": -1,
  "madly": -3,
  "madness": -3,
  "magnificent": 3,
  "maladaption": -2,
  "maldevelopment": -2,
  "maltreatment": -2,
  "mandatory": -1,
  "manipulated": -1,
  "manipulating": -1,
  "manipulation": -1,
  "manslaughter": -3,
  "marvel": 3,
  "marvelous": 3,
  "marvels": 3,
  "masterpiece": 4,
  "masterpieces": 4,
  "matter": 1,
  "matters": 1,
  "mature": 2,
  "meaningful": 2,
  "meaningless": -2,
  "medal": 3,
  "mediocrity": -3,
  "meditative": 1,
  "melancholy": -2,
  "memorable": 1,
  "memoriam": -2,
  "menace": -2,
  "menaced": -2,
  "menaces": -2,
  "mercy": 2,
  "merry": 3,
  "mesmerizing": 3,
  "mess": -2,
  "messed": -2,
  "messing up": -2,
  "methodical": 2,
  "methodically": 2,
  "mindless": -2,
  "miracle": 4,
  "mirth": 3,
  "mirthful": 3,
  "mirthfully": 3,
  "misbehave": -2,
  "misbehaved": -2,
  "misbehaves": -2,
  "misbehaving": -2,
  "misbranding": -3,
  "miscast": -2,
  "mischief": -1,
  "mischiefs": -1,
  "misclassified": -2,
  "misclassifies": -2,
  "misclassify": -2,
  "misconduct": -2,
  "misconducted": -2,
  "misconducting": -2,
  "misconducts": -2,
  "miserable": -3,
  "miserably": -3,
  "misery": -2,
  "misfire": -2,
  "misfortune": -2,
  "misgiving": -2,
  "misinformation": -2,
  "misinformed": -2,
  "misinterpreted": -2,
  "mislead": -3,
  "misleaded": -3,
  "misleading": -3,
  "misleads": -3,
  "misplace": -2,
  "misplaced": -2,
  "misplaces": -2,
  "misplacing": -2,
  "mispricing": -3,
  "misread": -1,
  "misreport": -2,
  "misreported": -2,
  "misreporting": -2,
  "misreports": -2,
  "misrepresent": -2,
  "misrepresentation": -2,
  "misrepresentations": -2,
  "misrepresented": -2,
  "misrepresenting": -2,
  "misrepresents": -2,
  "miss": -2,
  "missed": -2,
  "missing": -2,
  "mistake": -2,
  "mistaken": -2,
  "mistakes": -2,
  "mistaking": -2,
  "misunderstand": -2,
  "misunderstanding": -2,
  "misunderstands": -2,
  "misunderstood": -2,
  "misuse": -2,
  "misused": -2,
  "misuses": -2,
  "misusing": -2,
  "moan": -2,
  "moaned": -2,
  "moaning": -2,
  "moans": -2,
  "mock": -2,
  "mocked": -2,
  "mocking": -2,
  "mocks": -2,
  "modernize": 2,
  "modernized": 2,
  "modernizes": 2,
  "modernizing": 2,
  "mongering": -2,
  "monopolize": -2,
  "monopolized": -2,
  "monopolizes": -2,
  "monopolizing": -2,
  "monotone": -1,
  "moody": -1,
  "mope": -1,
  "moping": -1,
  "moron": -3,
  "motherfucker": -5,
  "motherfucking": -5,
  "motivate": 1,
  "motivated": 2,
  "motivating": 2,
  "motivation": 1,
  "mourn": -2,
  "mourned": -2,
  "mournful": -2,
  "mourning": -2,
  "mourns": -2,
  "muddy": -2,
  "mumpish": -2,
  "murder": -2,
  "murderer": -2,
  "murdering": -3,
  "murderous": -3,
  "murders": -2,
  "murky": -2,
  "myth": -1,
  "n00b": -2,
  "naive": -2,
  "narcissism": -2,
  "nasty": -3,
  "natural": 1,
  "naïve": -2,
  "needy": -2,
  "negative": -2,
  "negativity": -2,
  "neglect": -2,
  "neglected": -2,
  "neglecting": -2,
  "neglects": -2,
  "nerves": -1,
  "nervous": -2,
  "nervously": -2,
  "nice": 3,
  "nifty": 2,
  "niggas": -5,
  "nigger": -5,
  "no": -1,
  "no fun": -3,
  "noble": 2,
  "noblest": 2,
  "noisy": -1,
  "non-approved": -2,
  "nonsense": -2,
  "noob": -2,
  "nosey": -2,
  "not good": -2,
  "not working": -3,
  "notable": 2,
  "noticeable": 2,
  "notorious": -2,
  "novel": 2,
  "numb": -1,
  "nurturing": 2,
  "nuts": -3,
  "obliterate": -2,
  "obliterated": -2,
  "obnoxious": -3,
  "obscene": -2,
  "obscenity": -2,
  "obsessed": 2,
  "obsolete": -2,
  "obstacle": -2,
  "obstacles": -2,
  "obstinate": -2,
  "obstruct": -2,
  "obstructed": -2,
  "obstructing": -2,
  "obstruction": -2,
  "obstructs": -2,
  "odd": -2,
  "offence": -2,
  "offences": -2,
  "offend": -2,
  "offended": -2,
  "offender": -2,
  "offending": -2,
  "offends": -2,
  "offense": -2,
  "offenses": -2,
  "offensive": -2,
  "offensively": -2,
  "offline": -1,
  "oks": 2,
  "ominous": 3,
  "once-in-a-lifetime": 3,
  "oops": -2,
  "opportunities": 2,
  "opportunity": 2,
  "oppressed": -2,
  "oppression": -2,
  "oppressions": -2,
  "oppressive": -2,
  "optimism": 2,
  "optimistic": 2,
  "optionless": -2,
  "ostracize": -2,
  "ostracized": -2,
  "ostracizes": -2,
  "ouch": -2,
  "outage": -2,
  "outages": -2,
  "outbreak": -2,
  "outbreaks": -2,
  "outcry": -2,
  "outmaneuvered": -2,
  "outnumbered": -2,
  "outrage": -3,
  "outraged": -3,
  "outrageous": -3,
  "outreach": 2,
  "outstanding": 5,
  "overjoyed": 4,
  "overload": -1,
  "overlooked": -1,
  "overprotective": -2,
  "overran": -2,
  "overreact": -2,
  "overreacted": -2,
  "overreacting": -2,
  "overreaction": -2,
  "overreacts": -2,
  "oversell": -2,
  "overselling": -2,
  "oversells": -2,
  "oversight": -1,
  "oversimplification": -2,
  "oversimplified": -2,
  "oversimplifies": -2,
  "oversimplify": -2,
  "oversold": -2,
  "overstatement": -2,
  "overstatements": -2,
  "overweight": -1,
  "overwrought": -3,
  "oxymoron": -1,
  "pain": -2,
  "pained": -2,
  "painful": -2,
  "panic": -3,
  "panicked": -3,
  "panics": -3,
  "paradise": 3,
  "paradox": -1,
  "pardon": 2,
  "pardoned": 2,
  "pardoning": 2,
  "pardons": 2,
  "parley": -1,
  "passion": 1,
  "passionate": 2,
  "passive": -1,
  "passively": -1,
  "pathetic": -2,
  "pay": -1,
  "peace": 2,
  "peaceful": 2,
  "peacefully": 2,
  "penalize": -2,
  "penalized": -2,
  "penalizes": -2,
  "penalizing": -2,
  "penalty": -2,
  "pensive": -1,
  "perfect": 3,
  "perfected": 2,
  "perfection": 3,
  "perfectly": 3,
  "perfects": 2,
  "peril": -2,
  "perjury": -3,
  "perpetrated": -2,
  "perpetrator": -2,
  "perpetrators": -2,
  "perplexed": -2,
  "persecute": -2,
  "persecuted": -2,
  "persecutes": -2,
  "persecuting": -2,
  "perturbed": -2,
  "pervert": -3,
  "pesky": -2,
  "pessimism": -2,
  "pessimistic": -2,
  "petrified": -2,
  "philanthropy": 2,
  "phobic": -2,
  "picturesque": 2,
  "pileup": -1,
  "pillage": -2,
  "pique": -2,
  "piqued": -2,
  "piss": -4,
  "pissed": -4,
  "pissing": -3,
  "piteous": -2,
  "pitied": -1,
  "pity": -2,
  "plague": -3,
  "plagued": -3,
  "plagues": -3,
  "plaguing": -3,
  "playful": 2,
  "pleasant": 3,
  "please": 1,
  "pleased": 3,
  "pleasurable": 3,
  "pleasure": 3,
  "plodding": -2,
  "poignant": 2,
  "pointless": -2,
  "poised": -2,
  "poison": -2,
  "poisoned": -2,
  "poisons": -2,
  "polished": 2,
  "polite": 2,
  "politeness": 2,
  "pollutant": -2,
  "pollute": -2,
  "polluted": -2,
  "polluter": -2,
  "polluters": -2,
  "pollutes": -2,
  "pollution": -2,
  "poor": -2,
  "poorer": -2,
  "poorest": -2,
  "poorly": -2,
  "popular": 3,
  "popularity": 3,
  "positive": 2,
  "positively": 2,
  "possessive": -2,
  "post-traumatic": -2,
  "postpone": -1,
  "postponed": -1,
  "postpones": -1,
  "postponing": -1,
  "poverty": -1,
  "powerful": 2,
  "powerless": -2,
  "praise": 3,
  "praised": 3,
  "praises": 3,
  "praising": 3,
  "pray": 1,
  "praying": 1,
  "prays": 1,
  "prblm": -2,
  "prblms": -2,
  "predatory": -2,
  "prepared": 1,
  "pressure": -1,
  "pressured": -2,
  "pretend": -1,
  "pretending": -1,
  "pretends": -1,
  "pretty": 1,
  "prevent": -1,
  "prevented": -1,
  "preventing": -1,
  "prevents": -1,
  "prick": -5,
  "prison": -2,
  "prisoner": -2,
  "prisoners": -2,
  "privileged": 2,
  "proactive": 2,
  "problem": -2,
  "problems": -2,
  "profit": 2,
  "profitable": 2,
  "profiteer": -2,
  "profits": 2,
  "progress": 2,
  "prohibit": -1,
  "prohibits": -1,
  "prominent": 2,
  "promise": 1,
  "promised": 1,
  "promises": 1,
  "promote": 1,
  "promoted": 1,
  "promotes": 1,
  "promoting": 1,
  "promptly": 1,
  "propaganda": -2,
  "prosecute": -1,
  "prosecuted": -2,
  "prosecutes": -1,
  "prosecution": -1,
  "prospect": 1,
  "prospects": 1,
  "prosperity": 3,
  "prosperous": 3,
  "protect": 1,
  "protected": 1,
  "protects": 1,
  "protest": -2,
  "protesters": -2,
  "protesting": -2,
  "protests": -2,
  "proud": 2,
  "proudly": 2,
  "provoke": -1,
  "provoked": -1,
  "provokes": -1,
  "provoking": -1,
  "prudence": 2,
  "pseudoscience": -3,
  "psychopathic": -2,
  "punish": -2,
  "punished": -2,
  "punishes": -2,
  "punishing": -2,
  "punitive": -2,
  "pure": 1,
  "purest": 1,
  "purposeful": 2,
  "pushy": -1,
  "puzzled": -2,
  "quaking": -2,
  "qualities": 2,
  "quality": 2,
  "questionable": -2,
  "questioned": -1,
  "questioning": -1,
  "racism": -3,
  "racist": -3,
  "racists": -3,
  "rage": -2,
  "rageful": -2,
  "rainy": -1,
  "rant": -3,
  "ranter": -3,
  "ranters": -3,
  "rants": -3,
  "rape": -4,
  "raped": -4,
  "rapist": -4,
  "rapture": 2,
  "raptured": 2,
  "raptures": 2,
  "rapturous": 4,
  "rash": -2,
  "ratified": 2,
  "reach": 1,
  "reached": 1,
  "reaches": 1,
  "reaching": 1,
  "reassure": 1,
  "reassured": 1,
  "reassures": 1,
  "reassuring": 2,
  "rebel": -2,
  "rebellion": -2,
  "rebels": -2,
  "recession": -2,
  "reckless": -2,
  "recognition": 2,
  "recommend": 2,
  "recommended": 2,
  "recommends": 2,
  "redeemed": 2,
  "refine": 1,
  "refined": 1,
  "refines": 1,
  "refreshingly": 2,
  "refuse": -2,
  "refused": -2,
  "refuses": -2,
  "refusing": -2,
  "regret": -2,
  "regretful": -2,
  "regrets": -2,
  "regretted": -2,
  "regretting": -2,
  "reigning": 1,
  "reject": -1,
  "rejected": -1,
  "rejecting": -1,
  "rejection": -2,
  "rejects": -1,
  "rejoice": 4,
  "rejoiced": 4,
  "rejoices": 4,
  "rejoicing": 4,
  "relaxed": 2,
  "relentless": -1,
  "reliability": 2,
  "reliable": 2,
  "reliably": 2,
  "reliant": 2,
  "relieve": 1,
  "relieved": 2,
  "relieves": 1,
  "relieving": 2,
  "relishing": 2,
  "remarkable": 2,
  "remorse": -2,
  "repellent": -2,
  "repercussion": -2,
  "repercussions": -2,
  "reprimand": -2,
  "reprimanded": -2,
  "reprimanding": -2,
  "reprimands": -2,
  "repulse": -1,
  "repulsed": -2,
  "repulsive": -2,
  "rescue": 2,
  "rescued": 2,
  "rescues": 2,
  "resentful": -2,
  "resign": -1,
  "resigned": -1,
  "resigning": -1,
  "resigns": -1,
  "resolute": 2,
  "resolution": 2,
  "resolve": 2,
  "resolved": 2,
  "resolves": 2,
  "resolving": 2,
  "respect": 2,
  "respected": 2,
  "respects": 2,
  "responsibility": 1,
  "responsible": 2,
  "responsive": 2,
  "restful": 2,
  "restless": -2,
  "restore": 1,
  "restored": 1,
  "restores": 1,
  "restoring": 1,
  "restrict": -2,
  "restricted": -2,
  "restricting": -2,
  "restriction": -2,
  "restrictive": -1,
  "restricts": -2,
  "retained": -1,
  "retard": -2,
  "retarded": -2,
  "retreat": -1,
  "revenge": -2,
  "revengeful": -2,
  "revered": 2,
  "revive": 2,
  "revives": 2,
  "revolting": -2,
  "reward": 2,
  "rewarded": 2,
  "rewarding": 2,
  "rewards": 2,
  "rich": 2,
  "richly": 2,
  "ridiculous": -3,
  "rig": -1,
  "rigged": -1,
  "right direction": 3,
  "righteousness": 2,
  "rightful": 2,
  "rightfully": 2,
  "rigorous": 3,
  "rigorously": 3,
  "riot": -2,
  "riots": -2,
  "rise": 1,
  "rises": 1,
  "risk": -2,
  "risks": -2,
  "risky": -2,
  "riveting": 3,
  "rob": -2,
  "robber": -2,
  "robed": -2,
  "robing": -2,
  "robs": -2,
  "robust": 2,
  "rofl": 4,
  "roflcopter": 4,
  "roflmao": 4,
  "romance": 2,
  "romantical": 2,
  "romantically": 2,
  "rose": 1,
  "rotfl": 4,
  "rotflmfao": 4,
  "rotflol": 4,
  "rotten": -3,
  "rude": -2,
  "ruin": -2,
  "ruined": -2,
  "ruining": -2,
  "ruins": -2,
  "sabotage": -2,
  "sad": -2,
  "sadden": -2,
  "saddened": -2,
  "sadly": -2,
  "safe": 1,
  "safely": 1,
  "safer": 2,
  "safety": 1,
  "salient": 1,
  "salute": 2,
  "saluted": 2,
  "salutes": 2,
  "saluting": 2,
  "salvation": 2,
  "sappy": -1,
  "sarcastic": -2,
  "satisfied": 2,
  "savange": -2,
  "savanges": -2,
  "save": 2,
  "saved": 2,
  "savings": 1,
  "scam": -2,
  "scams": -2,
  "scandal": -3,
  "scandalous": -3,
  "scandals": -3,
  "scapegoat": -2,
  "scapegoats": -2,
  "scare": -2,
  "scared": -2,
  "scar": -2,
  "scars": -2,
  "scary": -2,
  "sceptical": -2,
  "scold": -2,
  "scoop": 3,
  "scorn": -2,
  "scornful": -2,
  "scream": -2,
  "screamed": -2,
  "screaming": -2,
  "screams": -2,
  "screwed": -2,
  "screwed up": -3,
  "scum": -3,
  "scumbag": -4,
  "seamless": 2,
  "seamlessly": 2,
  "secure": 2,
  "secured": 2,
  "secures": 2,
  "sedition": -2,
  "seditious": -2,
  "seduced": -1,
  "self-abuse": -2,
  "self-confident": 2,
  "self-contradictory": -2,
  "self-deluded": -2,
  "selfish": -3,
  "selfishness": -3,
  "sentence": -2,
  "sentenced": -2,
  "sentences": -2,
  "sentencing": -2,
  "serene": 2,
  "settlement": 1,
  "settlements": 1,
  "severe": -2,
  "severely": -2,
  "sexist": -2,
  "sexistic": -2,
  "sexy": 3,
  "shaky": -2,
  "shame": -2,
  "shamed": -2,
  "shameful": -2,
  "share": 1,
  "shared": 1,
  "shares": 1,
  "shattered": -2,
  "shit": -4,
  "shithead": -4,
  "shitty": -3,
  "shock": -2,
  "shocked": -2,
  "shocking": -2,
  "shocks": -2,
  "shoody": -2,
  "shoot": -1,
  "short-sighted": -2,
  "short-sightedness": -2,
  "shortage": -2,
  "shortages": -2,
  "shrew": -4,
  "shy": -1,
  "sick": -2,
  "sickness": -2,
  "side-effect": -2,
  "side-effects": -2,
  "sigh": -2,
  "significance": 1,
  "significant": 1,
  "silencing": -1,
  "silly": -1,
  "simplicity": 1,
  "sin": -2,
  "sincere": 2,
  "sincerely": 2,
  "sincerest": 2,
  "sincerity": 2,
  "sinful": -3,
  "singleminded": -2,
  "sinister": -2,
  "sins": -2,
  "skeptic": -2,
  "skeptical": -2,
  "skepticism": -2,
  "skeptics": -2,
  "slam": -2,
  "slash": -2,
  "slashed": -2,
  "slashes": -2,
  "slashing": -2,
  "slave": -3,
  "slavery": -3,
  "slaves": -3,
  "sleeplessness": -2,
  "slick": 2,
  "slicker": 2,
  "slickest": 2,
  "slip": -1,
  "sloppy": -2,
  "sluggish": -2,
  "slumping": -1,
  "slut": -5,
  "smart": 1,
  "smarter": 2,
  "smartest": 2,
  "smear": -2,
  "smile": 2,
  "smiled": 2,
  "smiles": 2,
  "smiling": 2,
  "smog": -2,
  "smuggle": -2,
  "smuggled": -2,
  "smuggling": -2,
  "smuggles": -2,
  "sneaky": -1,
  "sneeze": -2,
  "sneezed": -2,
  "sneezes": -2,
  "sneezing": -2,
  "snub": -2,
  "snubbed": -2,
  "snubbing": -2,
  "snubs": -2,
  "sobering": 1,
  "solemn": -1,
  "solid": 2,
  "solidarity": 2,
  "solidified": 2,
  "solidifies": 2,
  "solidify": 2,
  "solidifying": 2,
  "solution": 1,
  "solutions": 1,
  "solve": 1,
  "solved": 1,
  "solves": 1,
  "solving": 1,
  "somber": -2,
  "some kind": 0,
  "son-of-a-bitch": -5,
  "soothe": 3,
  "soothed": 3,
  "soothing": 3,
  "sophisticated": 2,
  "sore": -1,
  "sorrow": -2,
  "sorrowful": -2,
  "sorry": -1,
  "spacious": 1,
  "spam": -2,
  "spammer": -3,
  "spammers": -3,
  "spamming": -2,
  "spark": 1,
  "sparkle": 3,
  "sparkles": 3,
  "sparkling": 3,
  "spearhead": 2,
  "speculative": -2,
  "spirit": 1,
  "spirited": 2,
  "spiritless": -2,
  "spiteful": -2,
  "splendid": 3,
  "spoiled": -2,
  "spoilt": -2,
  "spotless": 2,
  "sprightly": 2,
  "squander": -2,
  "squandered": -2,
  "squandering": -2,
  "squanders": -2,
  "squelched": -1,
  "stab": -2,
  "stabbed": -2,
  "stable": 2,
  "stabs": -2,
  "stall": -2,
  "stalled": -2,
  "stalling": -2,
  "stamina": 2,
  "stampede": -2,
  "stank": -2,
  "startled": -2,
  "startling": 3,
  "starve": -2,
  "starved": -2,
  "starves": -2,
  "starving": -2,
  "steadfast": 2,
  "steal": -2,
  "stealing": -2,
  "steals": -2,
  "stereotype": -2,
  "stereotyped": -2,
  "stifled": -1,
  "stimulate": 1,
  "stimulated": 1,
  "stimulates": 1,
  "stimulating": 2,
  "stingy": -2,
  "stink": -2,
  "stinked": -2,
  "stinker": -2,
  "stinking": -2,
  "stinks": -2,
  "stinky": -2,
  "stole": -2,
  "stolen": -2,
  "stop": -1,
  "stopped": -1,
  "stopping": -1,
  "stops": -1,
  "stout": 2,
  "straight": 1,
  "strange": -1,
  "strangely": -1,
  "strangled": -2,
  "strength": 2,
  "strengthen": 2,
  "strengthened": 2,
  "strengthening": 2,
  "strengthens": 2,
  "strengths": 2,
  "stress": -1,
  "stressed": -2,
  "stressor": -2,
  "stressors": -2,
  "stricken": -2,
  "strike": -1,
  "strikers": -2,
  "strikes": -1,
  "strong": 2,
  "stronger": 2,
  "strongest": 2,
  "struck": -1,
  "struggle": -2,
  "struggled": -2,
  "struggles": -2,
  "struggling": -2,
  "stubborn": -2,
  "stuck": -2,
  "stunned": -2,
  "stunning": 4,
  "stupid": -2,
  "stupidity": -3,
  "stupidly": -2,
  "suave": 2,
  "subpoena": -2,
  "substantial": 1,
  "substantially": 1,
  "subversive": -2,
  "succeed": 3,
  "succeeded": 3,
  "succeeding": 3,
  "succeeds": 3,
  "success": 2,
  "successful": 3,
  "successfully": 3,
  "suck": -3,
  "sucks": -3,
  "sue": -2,
  "sued": -2,
  "sueing": -2,
  "sues": -2,
  "suffer": -2,
  "suffered": -2,
  "sufferer": -2,
  "sufferers": -2,
  "suffering": -2,
  "suffers": -2,
  "suicidal": -2,
  "suicide": -2,
  "suicides": -2,
  "suing": -2,
  "suitable": 2,
  "suited": 2,
  "sulking": -2,
  "sulky": -2,
  "sullen": -2,
  "sunshine": 2,
  "super": 3,
  "superb": 5,
  "superior": 2,
  "support": 2,
  "supported": 2,
  "supporter": 1,
  "supporters": 1,
  "supporting": 1,
  "supportive": 2,
  "supports": 2,
  "supreme": 4,
  "survived": 2,
  "surviving": 2,
  "survivor": 2,
  "suspect": -1,
  "suspected": -1,
  "suspecting": -1,
  "suspects": -1,
  "suspend": -1,
  "suspended": -1,
  "suspicious": -2,
  "sustainability": 1,
  "sustainable": 2,
  "sustainably": 2,
  "swear": -2,
  "swearing": -2,
  "swears": -2,
  "sweet": 2,
  "sweeter": 3,
  "sweetest": 3,
  "swift": 2,
  "swiftly": 2,
  "swindle": -3,
  "swindles": -3,
  "swindling": -3,
  "sympathetic": 2,
  "sympathy": 2,
  "taint": -2,
  "tainted": -2,
  "talent": 2,
  "tard": -2,
  "tarnish": -2,
  "tarnished": -2,
  "tarnishes": -2,
  "tears": -2,
  "tender": 2,
  "tenderness": 2,
  "tense": -2,
  "tension": -1,
  "terrible": -3,
  "terribly": -3,
  "terrific": 4,
  "terrifically": 4,
  "terrified": -3,
  "terror": -3,
  "terrorist": -2,
  "terrorists": -2,
  "terrorize": -3,
  "terrorized": -3,
  "terrorizes": -3,
  "thank": 2,
  "thankful": 2,
  "thanks": 2,
  "thorny": -2,
  "thoughtful": 2,
  "thoughtless": -2,
  "threat": -2,
  "threaten": -2,
  "threatened": -2,
  "threatening": -2,
  "threatens": -2,
  "threats": -2,
  "thrilled": 5,
  "thwart": -2,
  "thwarted": -2,
  "thwarting": -2,
  "thwarts": -2,
  "timid": -2,
  "timorous": -2,
  "tired": -2,
  "tits": -2,
  "tolerance": 2,
  "tolerant": 2,
  "toothless": -2,
  "top": 2,
  "tops": 2,
  "torn": -2,
  "torture": -4,
  "tortured": -4,
  "tortures": -4,
  "torturing": -4,
  "totalitarian": -2,
  "totalitarianism": -2,
  "tout": -2,
  "touted": -2,
  "touting": -2,
  "touts": -2,
  "toxic": -3,
  "tragedies": -2,
  "tragedy": -2,
  "tragic": -2,
  "tranquil": 2,
  "transgress": -2,
  "transgressed": -2,
  "transgresses": -2,
  "transgressing": -2,
  "trap": -1,
  "trapped": -2,
  "traps": -1,
  "trauma": -3,
  "traumatic": -3,
  "travesty": -2,
  "treason": -3,
  "treasonous": -3,
  "treasure": 2,
  "treasures": 2,
  "trembling": -2,
  "tremor": -2,
  "tremors": -2,
  "tremulous": -2,
  "tribulation": -2,
  "tribute": 2,
  "tricked": -2,
  "trickery": -2,
  "triumph": 4,
  "triumphant": 4,
  "troll": -2,
  "trouble": -2,
  "troubled": -2,
  "troubles": -2,
  "troubling": -2,
  "true": 2,
  "trust": 1,
  "trusted": 2,
  "trusts": 1,
  "tumor": -2,
  "twat": -5,
  "tyran": -3,
  "tyrannic": -3,
  "tyrannical": -3,
  "tyrannically": -3,
  "tyrans": -3,
  "ubiquitous": 2,
  "ugh": -2,
  "ugliness": -3,
  "ugly": -3,
  "unable": -2,
  "unacceptable": -2,
  "unappeasable": -2,
  "unappreciated": -2,
  "unapproved": -2,
  "unattractive": -2,
  "unavailable": -1,
  "unavailing": -2,
  "unaware": -2,
  "unbearable": -2,
  "unbelievable": -1,
  "unbelieving": -1,
  "unbiased": 2,
  "uncertain": -1,
  "unclear": -1,
  "uncomfortable": -2,
  "unconcerned": -2,
  "unconfirmed": -1,
  "unconvinced": -1,
  "uncredited": -1,
  "undecided": -1,
  "undercooked": -2,
  "underestimate": -1,
  "underestimated": -1,
  "underestimates": -1,
  "underestimating": -1,
  "undermine": -2,
  "undermined": -2,
  "undermines": -2,
  "undermining": -2,
  "underperform": -2,
  "underperformed": -2,
  "underperforming": -2,
  "underperforms": -2,
  "undeserving": -2,
  "undesirable": -2,
  "uneasy": -2,
  "unemployed": -1,
  "unemployment": -2,
  "unequal": -1,
  "unequaled": 2,
  "unethical": -2,
  "uneventful": -2,
  "unfair": -2,
  "unfavorable": -2,
  "unfit": -2,
  "unfitted": -2,
  "unfocused": -2,
  "unforgivable": -3,
  "unforgiving": -2,
  "unfulfilled": -2,
  "unfunny": -2,
  "ungenerous": -2,
  "ungrateful": -3,
  "unhappy": -2,
  "unhappiness": -2,
  "unhealthy": -2,
  "unhygienic": -2,
  "unified": 1,
  "unimaginative": -2,
  "unimpressed": -2,
  "uninspired": -2,
  "unintelligent": -2,
  "unintentional": -2,
  "uninvolving": -2,
  "united": 1,
  "unjust": -2,
  "unlikely": -1,
  "unlovable": -2,
  "unloved": -2,
  "unmatched": 1,
  "unmotivated": -2,
  "unoriginal": -2,
  "unparliamentary": -2,
  "unpleasant": -2,
  "unpleasantness": -2,
  "unprofessional": -2,
  "unravel": 1,
  "unreleting": -2,
  "unresearched": -2,
  "unsafe": -2,
  "unsatisfied": -2,
  "unscientific": -2,
  "unsecured": -2,
  "unselfish": 2,
  "unsettled": -1,
  "unsold": -1,
  "unsophisticated": -2,
  "unsound": -2,
  "unstable": -2,
  "unstoppable": 2,
  "unsuccessful": -2,
  "unsuccessfully": -2,
  "unsupported": -2,
  "unsure": -1,
  "untarnished": 2,
  "untrue": -2,
  "unwanted": -2,
  "unworthy": -2,
  "uplifting": 2,
  "uproar": -3,
  "upset": -2,
  "upsets": -2,
  "upsetting": -2,
  "uptight": -2,
  "urgent": -1,
  "useful": 2,
  "usefulness": 2,
  "useless": -2,
  "uselessness": -2,
  "vague": -2,
  "validate": 1,
  "validated": 1,
  "validates": 1,
  "validating": 1,
  "vapid": -2,
  "verdict": -1,
  "verdicts": -1,
  "vested": 1,
  "vexation": -2,
  "vexing": -2,
  "vibrant": 3,
  "vicious": -2,
  "victim": -3,
  "victimization": -3,
  "victimize": -3,
  "victimized": -3,
  "victimizes": -3,
  "victimizing": -3,
  "victims": -3,
  "victor": 3,
  "victors": 3,
  "victory": 3,
  "victories": 3,
  "vigilant": 3,
  "vigor": 3,
  "vile": -3,
  "vindicate": 2,
  "vindicated": 2,
  "vindicates": 2,
  "vindicating": 2,
  "violate": -2,
  "violated": -2,
  "violates": -2,
  "violating": -2,
  "violation": -2,
  "violations": -2,
  "violence": -3,
  "violence-related": -3,
  "violent": -3,
  "violently": -3,
  "virtuous": 2,
  "virulent": -2,
  "vision": 1,
  "visionary": 3,
  "visioning": 1,
  "visions": 1,
  "vitality": 3,
  "vitamin": 1,
  "vitriolic": -3,
  "vivacious": 3,
  "vividly": 2,
  "vociferous": -1,
  "vomit": -3,
  "vomited": -3,
  "vomiting": -3,
  "vomits": -3,
  "vulnerability": -2,
  "vulnerable": -2,
  "walkout": -2,
  "walkouts": -2,
  "wanker": -3,
  "want": 1,
  "war": -2,
  "warfare": -2,
  "warm": 1,
  "warmhearted": 2,
  "warmness": 2,
  "warmth": 2,
  "warn": -2,
  "warned": -2,
  "warning": -3,
  "warnings": -3,
  "warns": -2,
  "waste": -1,
  "wasted": -2,
  "wasting": -2,
  "wavering": -1,
  "weak": -2,
  "weakened": -2,
  "weakness": -2,
  "weaknesses": -2,
  "wealth": 3,
  "wealthier": 2,
  "wealthy": 2,
  "weary": -2,
  "weep": -2,
  "weeping": -2,
  "weird": -2,
  "welcome": 2,
  "welcomed": 2,
  "welcomes": 2,
  "well-being": 2,
  "well-championed": 3,
  "well-developed": 2,
  "well-established": 2,
  "well-focused": 2,
  "well-groomed": 2,
  "well-proportioned": 2,
  "whimsical": 1,
  "whitewash": -3,
  "whore": -4,
  "wicked": -2,
  "widowed": -1,
  "willingness": 2,
  "win": 4,
  "winner": 4,
  "winning": 4,
  "wins": 4,
  "winwin": 3,
  "wisdom": 1,
  "wish": 1,
  "wishes": 1,
  "wishing": 1,
  "withdrawal": -3,
  "wits": 2,
  "woebegone": -2,
  "woeful": -3,
  "won": 3,
  "wonderful": 4,
  "wonderfully": 4,
  "woo": 3,
  "woohoo": 3,
  "wooo": 4,
  "woow": 4,
  "worn": -1,
  "worried": -3,
  "worries": -3,
  "worry": -3,
  "worrying": -3,
  "worse": -3,
  "worsen": -3,
  "worsened": -3,
  "worsening": -3,
  "worsens": -3,
  "worshiped": 3,
  "worst": -3,
  "worth": 2,
  "worthless": -2,
  "worthy": 2,
  "wow": 4,
  "wowow": 4,
  "wowww": 4,
  "wrathful": -3,
  "wreck": -2,
  "wrenching": -2,
  "wrong": -2,
  "wrongdoing": -2,
  "wrongdoings": -2,
  "wronged": -2,
  "wrongful": -2,
  "wrongfully": -2,
  "wrongly": -2,
  "wtf": -4,
  "wtff": -4,
  "wtfff": -4,
  "xo": 3,
  "xoxo": 3,
  "xoxoxo": 4,
  "xoxoxoxo": 4,
  "yeah": 1,
  "yearning": 1,
  "yeees": 2,
  "yes": 1,
  "youthful": 2,
  "yucky": -2,
  "yummy": 3,
  "zealot": -2,
  "zealots": -2,
  "zealous": 2
}

},{}],212:[function(require,module,exports){
module.exports={
    "cant": 1,
    "can't": 1,
    "dont": 1,
    "don't": 1,
    "doesnt": 1,
    "doesn't": 1,
    "not": 1,
    "non": 1,
    "wont": 1,
    "won't": 1,
    "isnt": 1,
    "isn't": 1
}

},{}],213:[function(require,module,exports){
var negators = require('./negators.json');

module.exports = {
    apply: function(tokens, cursor, tokenScore) {
        if (cursor > 0) {
            var prevtoken = tokens[cursor - 1];
            if (negators[prevtoken]) {
                tokenScore = -tokenScore;
            }
        }
        return tokenScore;
    }
};

},{"./negators.json":212}],214:[function(require,module,exports){
(function (process){(function (){
var tokenize = require('./tokenize');
var languageProcessor = require('./language-processor');

/**
 * Constructor
 * @param {Object} options - Instance options
 */
var Sentiment = function (options) {
    this.options = options;
};

/**
 * Registers the specified language
 *
 * @param {String} languageCode
 *     - Two-digit code for the language to register
 * @param {Object} language
 *     - The language module to register
 */
Sentiment.prototype.registerLanguage = function (languageCode, language) {
    languageProcessor.addLanguage(languageCode, language);
};

/**
 * Performs sentiment analysis on the provided input 'phrase'.
 *
 * @param {String} phrase
 *     - Input phrase
 * @param {Object} opts
 *     - Options
 * @param {Object} opts.language
 *     - Input language code (2 digit code), defaults to 'en'
 * @param {Object} opts.extras
 *     - Optional sentiment additions to AFINN (hash k/v pairs)
 * @param {function} callback
 *     - Optional callback
 * @return {Object}
 */
Sentiment.prototype.analyze = function (phrase, opts, callback) {
    // Parse arguments
    if (typeof phrase === 'undefined') phrase = '';
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }
    opts = opts || {};

    var languageCode = opts.language || 'en';
    var labels = languageProcessor.getLabels(languageCode);

    // Merge extra labels
    if (typeof opts.extras === 'object') {
        labels = Object.assign(labels, opts.extras);
    }

    // Storage objects
    var tokens      = tokenize(phrase),
        score       = 0,
        words       = [],
        positive    = [],
        negative    = [],
        calculation = [];

    // Iterate over tokens
    var i = tokens.length;
    while (i--) {
        var obj = tokens[i];
        if (!labels.hasOwnProperty(obj)) continue;
        words.push(obj);

        // Apply scoring strategy
        var tokenScore = labels[obj];
        // eslint-disable-next-line max-len
        tokenScore = languageProcessor.applyScoringStrategy(languageCode, tokens, i, tokenScore);
        if (tokenScore > 0) positive.push(obj);
        if (tokenScore < 0) negative.push(obj);
        score += tokenScore;
        
        var zipObj = {}; 
        // Calculations breakdown
        zipObj[obj] = tokenScore;
        calculation.push(zipObj);
    }

    var result = {
        score:          score,
        comparative:    tokens.length > 0 ? score / tokens.length : 0,
        calculation:    calculation,
        tokens:         tokens,
        words:          words,
        positive:       positive,
        negative:       negative
    };

    // Handle optional async interface
    if (typeof callback === 'function') {
        process.nextTick(function () {
            callback(null, result);
        });
    } else {
        return result;
    }
};

module.exports = Sentiment;

}).call(this)}).call(this,require('_process'))
},{"./language-processor":215,"./tokenize":216,"_process":217}],215:[function(require,module,exports){
var emojis = require('../build/emoji.json');

// English is loaded by default
var enLanguage = require('../languages/en/index');
// Add emojis
Object.assign(enLanguage.labels, emojis);

// Cache loaded languages
var languages = {
    en: enLanguage
};

module.exports = {

    /**
     * Registers the specified language
     *
     * @param {String} languageCode
     *     - Two-digit code for the language to register
     * @param {Object} language
     *     - The language module to register
     */
    addLanguage: function (languageCode, language) {
        if (!language.labels) {
            throw new Error('language.labels must be defined!');
        }
        // Add emojis
        Object.assign(language.labels, emojis);
        languages[languageCode] = language;
    },

    /**
     * Retrieves a language object from the cache,
     * or tries to load it from the set of supported languages
     *
     * @param {String} languageCode - Two-digit code for the language to fetch
     */
    getLanguage: function(languageCode) {
        if (!languageCode) {
            // Default to english if no language was specified
            return languages.en;
        }
        if (!languages[languageCode]) {
            // Try to load specified language
            try {
                // eslint-disable-next-line max-len
                var language = require('../languages/' + languageCode + '/index');
                // Add language to in-memory cache
                this.addLanguage(languageCode, language);
            } catch (err) {
                throw new Error('No language found: ' + languageCode);
            }
        }
        return languages[languageCode];
    },

    /**
     * Returns AFINN-165 weighted labels for the specified language
     *
     * @param {String} languageCode - Two-digit language code
     * @return {Object}
     */
    getLabels: function(languageCode) {
        var language = this.getLanguage(languageCode);
        return language.labels;
    },

    /**
     * Applies a scoring strategy for the current token
     *
     * @param {String} languageCode - Two-digit language code
     * @param {Array} tokens - Tokens of the phrase to analyze
     * @param {int} cursor - Cursor of the current token being analyzed
     * @param {int} tokenScore - The score of the current token being analyzed
     */
    applyScoringStrategy: function(languageCode, tokens, cursor, tokenScore) {
        var language = this.getLanguage(languageCode);
        // Fallback to default strategy if none was specified
        // eslint-disable-next-line max-len
        var scoringStrategy = language.scoringStrategy || defaultScoringStrategy;
        return scoringStrategy.apply(tokens, cursor, tokenScore);
    }
};

var defaultScoringStrategy = {
    apply: function(tokens, cursor, tokenScore) {
        return tokenScore;
    }
};

},{"../build/emoji.json":209,"../languages/en/index":210}],216:[function(require,module,exports){
/*eslint no-useless-escape: "off"*/

/**
 * Remove special characters and return an array of tokens (words).
 * @param  {string} input Input string
 * @return {array}        Array of tokens
 */
module.exports = function(input) {
    return input
        .toLowerCase()
        .replace(/\n/g, ' ')
        .replace(/[.,\/#!?$%\^&\*;:{}=_`\"~()]/g, ' ')
        .replace(/\s\s+/g, ' ')
        .trim()
        .split(' ');
};

},{}],217:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
