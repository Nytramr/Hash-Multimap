"use strict";


module.exports = (function (){
  var _keys = [];
  var _values = [];
  
  var HashMultimap = function () {};
  
  HashMultimap.prototype.clear = function(){
    _keys = [];
    _values = [];
  };
  
  HashMultimap.prototype.get = function(key){
    var i = _keys.indexOf(key);
    
    if(i >= 0) {
      return _values[i];
    }
    
    _keys.push(key);
    var res = [];
    _values.push(res);
    return res;
  };
  
  HashMultimap.prototype.put = function(key){
    var values = this.get(key);
    var len = arguments.length;
    var i;
    
    for(i = 1, i < len; i++) {
      values.push(len[i]);
    }
  };
  
  HashMultimap.prototype.removeAll = function(key){
    
  };

  HashMultimap.prototype.replaceValues  = function(key){
    //TODO: get the rest of the values from the arguments

  };

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
//  
//  HashMultimap.prototype.isEmpty  = function(){
//
//  };
  
  return HashMultimap;
})();