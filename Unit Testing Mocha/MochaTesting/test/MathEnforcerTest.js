/**
 * Created by r3v3nan7 on 11.11.16.
 */

let chai = require('chai');
let expect = chai.expect;

let mathEnforcer = require('../MathEnforcer').mathEnforcer;


describe("test for prototype addFive", function () {
    it("should return function if mathEnforcer have addGFive", function () {
        expect(typeof(mathEnforcer.addFive)).to.equal('function');
        expect(mathEnforcer.hasOwnProperty('addFive')).to.equal(true);
    });
});




describe("test addFive(num) for normal cases", function () {
    it("with number 5 like parameter, it should return 10", function () {
        expect(mathEnforcer.addFive(5)).to.equal(10);
    });

    it('should return 7.5 on addFive(2.5)', () => {
        expect(mathEnforcer.addFive(2.5)).to.equal(2.5 + 5);
    });

    it('should return 0 on addFive(-5)', () => {
        expect(mathEnforcer.addFive(-5)).to.equal(0);
    });

    it('should return 2.5 on addFive(-2.5)', () => {
        expect(mathEnforcer.addFive(-2.5)).to.equal(-2.5 + 5);
    });

    it('should return 5 on addFive(0)', () => {
        expect(mathEnforcer.addFive(0)).to.equal(5);
    });


    describe("test addFive(num)", function () {
       it("if num is not an number should return undefined", function () {
          expect(mathEnforcer.addFive('c')).to.equal(undefined);
          expect(mathEnforcer.addFive("text")).to.equal(undefined);
          expect(mathEnforcer.addFive("2")).to.equal(undefined);
       });
    });
});



describe("test for prototype subtractTen(num)", function () {
    it("should return function if mathEnforcer have addGFive", function () {
        expect(typeof(mathEnforcer.subtractTen)).to.equal('function');
        expect(mathEnforcer.hasOwnProperty('subtractTen')).to.equal(true);
    });
});


describe("test subtractTen(num) for normal cases", function () {
   it("with number 15 it should return 5", function () {
      expect(mathEnforcer.subtractTen(15)).to.equal(5);
   });

    it('should return 69 on subtractTen(79)', () => {
        expect(mathEnforcer.subtractTen(79)).to.equal(69);
    });


    it('should return -20 on subtractTen(-10)', () => {
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });

    it('should return 2.5 on subtractTen(12.5)', () => {
        expect(mathEnforcer.subtractTen(12.5)).to.equal(12.5 - 10);
    });

    it('should return -12.5 on subtractTen(-2.5)', () => {
        expect(mathEnforcer.subtractTen(-2.5)).to.equal(-2.5 - 10);
    });

    it('should return -10 on subtractTen(0)', () => {
        expect(mathEnforcer.subtractTen(0)).to.equal(-10);
    });



    describe("test subtractTen(num)", function () {
      it("if num is not an number it should return undefined", function () {
         expect(mathEnforcer.subtractTen('a')).to.equal(undefined);
         expect(mathEnforcer.subtractTen("text")).to.equal(undefined);
      });
   });

});



describe("test for prototype sum(num1,num2)", function () {
    it("should return function if mathEnforcer have sum(num1,num2)", function () {
        expect(typeof(mathEnforcer.sum)).to.equal('function');
        expect(mathEnforcer.hasOwnProperty('sum')).to.equal(true);
    });
});



describe("test sum(num1,num2) normal cases", function () {
   it("with 10,20 it should return 30", function () {
      expect(mathEnforcer.sum(10,20)).to.equal(30);
   });

    it('should return -4 on sum(-2, -2)', () => {
        expect(mathEnforcer.sum(-2, -2)).to.equal(-4);
    });

    it('should return 2 on sum(0, 2)', () => {
        expect(mathEnforcer.sum(0, 2)).to.equal(2);
    });

    it('should return 0 on sum(0, 0)', () => {
        expect(mathEnforcer.sum(0, 0)).to.equal(0);
    });

    it('should return 3.7 on sum(2.5, 1.2)', () => {
        expect(mathEnforcer.sum(2.5, 1.2)).to.equal(2.5 + 1.2);
    });



    describe("test sum(num1,num2)", function () {
      it("num1 or num2 not an number should return undefined", function () {
         expect(mathEnforcer.sum('c', 4)).to.equal(undefined);
         expect(mathEnforcer.sum("test", 6)).to.equal(undefined);
         expect(mathEnforcer.sum(4, 'c')).to.equal(undefined);
         expect(mathEnforcer.sum(8,"test")).to.equal(undefined);
      });

      it("if two parameters are not a numbers it should return undefined", function () {
         expect(mathEnforcer.sum('c', 'a')).to.be.equal(undefined);
         expect(mathEnforcer.sum("test", "test1")).to.be.equal(undefined);
      });
   });
});