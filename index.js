"use strict";


module.exports = (function (){
  
  //Adding remove to arrays
  if(Array.prototype.remove === undefined) {
    Array.prototype.remove = function () {
      for (var j = arguments.length - 1; j >= 0; j--) {
        var index = this.length - 1;
        while (index >= 0) {
          if (this[index] !== arguments[j]) {
            index--;
          } else {
            this.splice(index, 1);
          }
        }
      }
    }
  }
  
  if (Array.prototype.removeIndex === undefined){
    Array.prototype.removeIndex = function (index){
      this.splice(index, 1);
    }
  }
  
  var HashMultimap = function () {
    this._keys = [];
    this._values = [];
  };
  
  HashMultimap.prototype.clear = function(){
    this._keys = [];
    this._values = [];
  };
  
  HashMultimap.prototype.get = function(key){
    var i = this._keys.indexOf(key);
    
    if(i >= 0) {
      return this._values[i];
    }
    
    this._keys.push(key);
    var res = [];
    this._values.push(res);
    return res;
  };
  
  HashMultimap.prototype.put = function(key){
    var values = this.get(key);
    var len = arguments.length;
    var i;
    
    for(i = 1; i < len; i++) {
      values.push(arguments[i]);
    }
  };
  
  HashMultimap.prototype.remove = function(key){
    var values = this.get(key);
    var len = arguments.length;
    var i;

    for(i = 1; i < len; i++) {
      values.remove(arguments[i]);
    }
    
    if (index > -1) {
      array.splice(index, 1);
    }
  };
  
  HashMultimap.prototype.removeAll = function(key){

  };

  HashMultimap.prototype.replaceValues  = function(key){
    //TODO: get the rest of the values from the arguments

  };

  HashMultimap.prototype.keys()  = function(){

  };
//  
//  HashMultimap.prototype.isEmpty  = function(){
//
//  };
//  
//  HashMultimap.prototype.isEmpty  = function(){
//
//  };
//  
//  HashMultimap.prototype.isEmpty  = function(){
//
//  };
//  
//  HashMultimap.prototype.isEmpty  = function(){
//
//  };
//  
//  HashMultimap.prototype.isEmpty  = function(){
//
//  };
//  
//  HashMultimap.prototype.isEmpty  = function(){
//
//  };
//  
//  HashMultimap.prototype.isEmpty  = function(){
//
//  };
  
  return HashMultimap;
})();