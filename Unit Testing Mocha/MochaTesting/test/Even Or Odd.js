/**
 * Created by r3v3nan7 on 26.10.16.
 */

let chai = require('chai');
let expect = chai.expect;
// let should = chai.should();
// let assert = chai.assert(1,2);

let isOddOrEven = require('../Even Or Odd').isOddOrEven;

describe('isOddOrEven', function () {
   it('with a number parameter, should return undefined', function () {
       expect(isOddOrEven(13)).to.equal(undefined);
   });


   it('with a object parameter, should return undefined', function () {
       expect(isOddOrEven({name: "Pesho"})).equal(undefined);
   });


   it('with an even length string, should return correct result', function () {
        expect(isOddOrEven("roar")).to.be.equal("even");
   });

   it('with an odd length string should return a correct result', function () {
        expect(isOddOrEven("pesho")).to.be.equal("odd");
   });


   it('with multiple consecutive check, should return correct values', function () {
       expect(isOddOrEven("cat")).to.equal("odd");
       expect(isOddOrEven("alabala")).to.equal("odd");
       expect(isOddOrEven("is it even")).to.equal("even");
   })

});