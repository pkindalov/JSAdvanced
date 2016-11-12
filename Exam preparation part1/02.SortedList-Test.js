/**
 * Created by r3v3nan7 on 10.11.16.
 */
let chai = require('chai');
let expect = chai.expect;

let SortedList = require('./02.SortedList').SortedList;






describe("test add() function", function () {
    it("check if exist function add", function () {
       let a = new SortedList();
        expect(typeof(a.add)).to.equal('function');
    });

    it("check if class has own property add", function () {
       let a = new SortedList();
        expect(Object.getPrototypeOf(a).hasOwnProperty('add')).to.equal(true);
        //expect(SortedList.hasOwnProperty('add')).to.be.equal(true);
    });

   it("should add element to the collection", function () {
       let a = new SortedList();
       a.add(5);
       expect(a.get(0)).to.equal(5);
   });



    it('sadas',function () {
        expect(typeof SortedList).to.equal('function');

        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
    });






});

describe("test remove() function", function () {
    it("check if exists such a function", function () {
        let a = new SortedList();
        expect(typeof(a.remove)).to.be.equal('function');
    });

    it("check if class has own property remove",function () {
        let a = new SortedList();
       expect(Object.getPrototypeOf(a).hasOwnProperty('remove')).to.be.equal(true);
    });

    it("should remove element from the collection", function () {
        let a = new SortedList();
        a.add(4);
        a.add(16);
        a.remove(0);
        expect(a.get(0)).to.be.equal(16);
    });

    //(negative or outside the collection) or if the collection is empty
    it("Throws an error if the remove() are supplied with an invalid index negative", function () {
        let a = new SortedList();
        a.add(5);
        expect(function() {a.remove(-3)}).to.throw(Error);
    });

    it("Throws an error if the remove() are supplied with an invalid index outside the collection", function () {
        let a = new SortedList();
        a.add(23);
        expect(function() {a.remove(1)}).to.throw(Error);
    });


    it("Check if collection is empty", function () {
       let a = new SortedList();
        expect(() => a.remove(2)).throw(Error);
    });

    it("Check if collection is empty and del negative number", function () {
        let a = new SortedList();
        expect(() => a.remove(-6)).throw(Error);
    });

    it("Check if collection is empty and del 0 number", function () {
        let a = new SortedList();
        expect(() => a.remove(0)).throw(Error);
    });

});



describe("test get(index) method", function () {
    it("check if it exists such a method", function () {
        let a = new SortedList();
        expect(typeof(a.get)).to.be.equal('function');
    });

    it("check if class has own property get(index)",function () {
        let a = new SortedList();
        expect(Object.getPrototypeOf(a).hasOwnProperty('get')).to.be.equal(true);
    });

    it("get(index) must return the value of the element at position index", function () {
        let a = new SortedList();
        a.add(2);
        a.add(5);
        a.add(12);
        expect(a.get(1)).to.be.equal(5);
    });
    
    it("Keeps the elements of the collection sorted in ascending order at all times", function () {
       let a = new SortedList();
        a.add(1);
        a.add(2);
        a.add(3);
        expect(a.get(0)).to.be.equal(1);
        expect(a.get(1)).to.be.equal(2);
        expect(a.get(2)).to.be.equal(3);
    });

    //(negative or outside the collection) or if the collection is empty
    it("Throws an error if the get() are supplied with an invalid index negative", function () {
       let a = new SortedList();
        a.add(34);
        expect(() => a.get(-13)).to.throw(Error);
    });


    it("Throws an error if the get() are supplied with an invalid index negative",function () {
       let a = new SortedList();
       a.add(2);
       a.add(6);
       a.add(8);
       expect(() => a.get(4)).throw(Error);
    });


    it("Check if the collection is empty should throw Error", function () {
       let a = new SortedList();
        expect(() => a.get(2)).throw(Error);
    });

    it("Check if collection is empty and get negative number", function () {
        let a = new SortedList();
        expect(() => a.get(-3)).throw(Error);
    });


    it("trying to get last element of collection", function () {
        let a = new SortedList();
        a.add(1);
        a.add(34);
        a.add(56);
        a.add(23);
        expect(a.get(3)).to.be.equal(56);
    });


});


//Has a size() property getter, which returns the number of elements inside the collection"
describe("Test size() getter", function () {
   it("Test size() should return 0 elements for an empy collection", function () {
        let a = new SortedList();
         expect(a.size).to.be.equal(0);
   });

   it("Test size() should return all added elements", function () {
      let a = new SortedList();
       a.add(4);
       a.add(2);
       a.add(12);
       expect(a.size).to.equal(3);
   });



});