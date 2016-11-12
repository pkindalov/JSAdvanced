/**
 * Created by r3v3nan7 on 07.11.16.
 */

let chai = require('chai');
let expect = chai.expect;

let produce = require('./add-delete-in-list').produce;


describe("constructor should produce an empty list", function () {
    let list = {};

    beforeEach(function () {
        list = produce();
    });


   it("constructor should produce object with correct functions", function () {
      expect(typeof(list.add)).to.equal('function');
       expect(typeof(list.delete)).to.equal('function');
       expect(typeof(list.toString)).to.equal('function');
   });

   it("should generate an empty list", function () {
      expect(list.toString()).to.be.equal('');
   });


   describe("add() function", function () {
       it("should add correct value", function () {
          list.add(5);
           expect(list.toString()).to.be.equal("5");
       });

       it("should add correct amount of times", function () {
           list.add("Pesho");
           expect(list.toString()).to.be.equal("Pesho");
       });

       it("should add to the end of list", function () {
           list.add("Pesho");
           list.add("Stamat");
           list.add("Gosho");
           expect(list.toString()).to.be.equal("Pesho, Stamat, Gosho");
       });
   });



    describe("delete() function", function () {
        it("with string should return undefined", function () {
            list.delete("text");
            expect(list.delete("text")).to.be.equal(undefined);
        });

        it("with floating point number should return undefined", function () {
            list.delete(3.14);
            expect(list.delete(3.14)).to.be.equal(undefined);
        });

        it("with floating point number should not delete any element", function () {
            list.add(15);
            list.delete(3.14);
            expect(list.toString()).to.be.equal('15');
        });

        it("with 0 should delete correct element", function () {
            list.add(15);
            list.add(23);

            expect(list.delete(0)).to.be.equal('23');
        });

        it("with 0 and no items in list", function () {
            expect(list.delete(0)).to.be.equal(undefined);
            expect(list.toString()).to.be.equal('');
        });


        it("with index equal to length of list should not delete anything", function () {
            list.add(5);
            list.add("two");
            
            expect(list.delete(2)).to.be.equal(undefined);
            expect(list.toString()).to.be.equal('5, two');
        });

        it("with a correct index should return correct item", function () {
            list.add(5);
            list.add(10);
            list.add(16);
            expect(list.delete(2)).to.be.equal(16);
        });

        it("with a correct index should delete correct item", function () {
            list.add(5);
            list.add(10);
            list.add(16);
            list.delete(1);
            expect(list.toString()).to.be.equal("5, 16");
        });


    });


});

// describe("List()", function () {
//    it("test normal case. It should appends given item to the end of the list.", function () {
//        list.add(3);
//        let length = list.count();
//        expect(list.toString()).to.be.equal(length);
//    });




// });