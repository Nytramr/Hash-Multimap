"use strict";


module.exports = (function (){

  //Adding remove to arrays
  if (Array.prototype._remove === undefined) {
    Array.prototype._remove = function () {
      var result = [];
      for (var j = arguments.length - 1; j >= 0; j--) {
        var index = this.length - 1;
        while (index >= 0) {
          if (this[index] !== arguments[j]) {
            index--;
          } else {
            result.push(this.splice(index, 1)[0]);
          }
        }
      }
      return result;
    }
  }

  if (Array.prototype.removeIndex === undefined){
    Array.prototype.removeIndex = function (index){
      return this.splice(index, 1);
    }
  }

  var HashMultimap = function () {
    this._keys = [];
    this._values = [];
  };

  HashMultimap.prototype.clear = function () {
    this._keys = [];
    this._values = [];
  };

  HashMultimap.prototype.get = function (key) {
    var i = this._keys.indexOf(key);

    if (i >= 0) {
      return this._values[i];
    }

    this._keys.push(key);
    var res = [];
    this._values.push(res);
    return res;
  };

  HashMultimap.prototype.put = function (key) {
    var values = this.get(key);
    var len = arguments.length;
    var i;

    for (i = 1; i < len; i++) {
      values.push(arguments[i]);
    }
  };

  HashMultimap.prototype.remove = function (key) {
    var values = this.get(key);
    var items = Array.prototype.slice.call(arguments, 1);
    Array.prototype._remove.apply(values, items);
  };

  HashMultimap.prototype.removeAll = function (key) {
    var index = this._keys.indexOf(key);

    if (index >= 0) {
      this._keys.removeIndex(index);
      this._values.removeIndex(index);
    }
  };

  HashMultimap.prototype.replaceValues  = function (key) {
    //TODO: get the rest of the values from the arguments

  };

  HashMultimap.prototype.keys = function () {
    //Returns an array containing all keys in the multimap
    return this._keys.splice(0);
  }

  HashMultimap.prototype.contains  = function (key, value) {
    //Returns true if the multimap contains the specified key-value pair.
    var index = this._keys.indexOf(key);
    return (index >= 0) && (this._values[index].indexOf(value) >= 0);
  };

  HashMultimap.prototype.containsKey  = function (key) {
    //Returns true if the multimap contains any values for the specified key.
    return this._keys.indexOf(key) >= 0;
  };

  HashMultimap.prototype.containsValue  = function (value) {
    //Returns true if the multimap contains the specified value for any key.
    for (var index = this._values.length - 1; index >= 0; index--) {
      if (this._values[index].indexOf(value) >= 0) {
        return true;
      }
    }
    return false;
  };

  return HashMultimap;
})();
