//var Promise = require('promise');
var chai = require('chai');
//var chaiAsPromised = require('chai-as-promised');

//chai.use(chaiAsPromised);

var should = chai.should(); //Init should assert chai style

var HashMultimap = require('../index');

//var testConfig = {
//  jsondbfile: path.join(__dirname, './temp/json.json')
//}

describe ('Hash Multimap', function () {
  var hashMultimap = null;

  hashMultimap = new HashMultimap();
  var objectKey = {};
  var objectKey2 = {};

  it('Should Initiate empty', function () {
    hashMultimap.should.not.be.undefined;
    hashMultimap.should.have.property('_keys');
    hashMultimap._keys.should.have.property('length').that.is.equals(0);
  });

  it('Should put an object', function () {
    hashMultimap.put(objectKey, 'value1');
    hashMultimap._keys.should.have.property('length').that.is.equals(1);
    hashMultimap._keys.should.have.property(0);
    hashMultimap._values[0].should.have.length(1);
  });
  
  var value2 = {
    a: 'Value',
    b: 1
  };
  
  it('Should put a second object in the same key', function () {
    hashMultimap.put(objectKey, value2);
    hashMultimap._keys.should.have.property('length').that.is.equals(1);
    hashMultimap._keys.should.have.property(0);
    hashMultimap._values[0].should.have.length(2);
  });

  it('Should put 3 objects at the same time with a different key', function () {
    hashMultimap.put(objectKey2, 'value3', 'value4', 'value5');
    hashMultimap._keys.should.have.length(2);
    hashMultimap._values.should.have.length(2);
    hashMultimap._values[1].should.have.length(3);
  });

  it('Should get an array with 2 objects', function () {
    var arr = hashMultimap.get(objectKey);
    arr.should.not.be.undefined;
    arr.should.have.length(2);
  });
  
  it('Should store objects in the order in which they were put', function(){
    hashMultimap.get(objectKey)[1].should.have.property('b').that.is.equals(1);
  });

  it('Should get an array with 3 objects', function () {
    var arr = hashMultimap.get(objectKey2);
    arr.should.not.be.undefined;
    arr.should.have.length(3);
  });

  var functionKey = function(){};
  var functionKey2 = function(){};

  it('Should put an object with a function as its key', function () {
    hashMultimap.put(functionKey, 'string2');
    hashMultimap._keys.should.have.length(3);
    hashMultimap._values.should.have.length(3);
    hashMultimap._keys.should.have.property(2);
    hashMultimap._values[2].should.have.length(1);
  });

  it('Should get an array with 1 object using the function as a key', function () {
    var arr = hashMultimap.get(functionKey);
    arr.should.not.be.undefined;
    arr.should.have.length(1);
  });

  it('Should remove an object from objectKey2 array', function () {
    hashMultimap.remove(objectKey2, 'value4');
    hashMultimap._keys.should.have.length(3);
    hashMultimap._values.should.have.length(3);
    hashMultimap._values[1].should.have.length(2);
  });

  it('Should put 3 objects and then remove them at once', function () {
    hashMultimap.put(objectKey2, 'value5', 'value5', 'value5');
    hashMultimap._keys.should.have.length(3);
    hashMultimap._values.should.have.length(3);
    hashMultimap._values[1].should.have.length(5);
    hashMultimap.remove(objectKey2, 'value5');
    hashMultimap._keys.should.have.length(3);
    hashMultimap._values.should.have.length(3);
    hashMultimap._values[1].should.have.length(1);
  });

  it('Should remove an the entire objectKey', function () {
    hashMultimap.removeAll(objectKey);
    hashMultimap._keys.should.have.length(2);
    hashMultimap._values.should.have.length(2);
  });
  //  after(function () {
  //    console.log('FINISH');
  //  });

});