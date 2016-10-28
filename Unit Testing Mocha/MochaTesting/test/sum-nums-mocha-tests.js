/**
 * Created by r3v3nan7 on 25.10.16.
 */

let expect = require("chai").expect;
let sum = require("../sum-nums.js").sum;


describe("sum(arr) - sum array of numbers", function () {
    it("should return 3 for [1,2]", function () {
        let expected = 3;
        let actualSum = sum([1,2]);
        expect(actualSum).to.be.equal(expected);
    });



    it("should return 1 for [1]", function () {
        let expectedNum = 1;
        let actualNum = sum([1]);
        expect(expectedNum).to.be.equal(actualNum);
    });



    it("should return 0 for empty array", function () {
        let expectedValue = 0;
        let actualValue = sum(['']);
        expect(expectedValue).to.be.equal(actualValue);
    });



});