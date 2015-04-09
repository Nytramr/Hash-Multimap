//var path = require('path');
//var fs = require('fs');
//
//var Promise = require('promise');
var chai = require('chai');
//var chaiAsPromised = require('chai-as-promised');

//chai.use(chaiAsPromised);

var should = chai.should(); //Init should assert chai style

//var db = require('../lib/rubistonedb');
var HashMultimap = require('../index');
//
//var testConfig = {
//  jsondbfile: path.join(__dirname, './temp/json.json')
//}

describe ('Hash Multimap', function () {
  var hashMultimap = null;
  
  hashMultimap = new HashMultimap();
  
  it('Should Initiate empty', function () {
    hashMultimap.should.not.be.undefined;
    hashMultimap.should.have.property('_keys');
    hashMultimap._keys.should.have.property('length').that.is.equals(0);
  });
  
  it('Should add an Object', function () {
    hashMultimap.put(1, 'string');
    hashMultimap._keys.should.have.property('length').that.is.equals(1);
    hashMultimap._keys.should.have.property(0);
    hashMultimap._values[0].should.have.length(1);
  });
  
  it('Should add a second Object', function () {
    hashMultimap.put(1, 'another string');
    hashMultimap._keys.should.have.property('length').that.is.equals(1);
    hashMultimap._keys.should.have.property(0);
    hashMultimap._values[0].should.have.length(2);
  });
  
//  it('Should add a second Object', function () {
//    hashMultimap.put(1, 'another string');
//    hashMultimap._keys.should.have.property('length').that.is.equals(1);
//  });

//  //  after(function () {
//  //    console.log('FINISH');
//  //  });

});