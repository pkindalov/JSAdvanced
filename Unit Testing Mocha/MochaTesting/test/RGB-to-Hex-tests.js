/**
 * Created by r3v3nan7 on 26.10.16.
 */

let expect = require('chai').expect;
let rgbToHex = require('../RGB to Hex').rgbToHexColor;

        describe("rgbToHexColor(reg, green, blue)", function () {

            describe("Nominal cases(valid input)", function () {
                it("should return #FF9EAA on (255, 158, 170)", function () {
                    let hex = rgbToHex(255, 158, 170);
                    expect(hex).to.be.equal('#FF9EAA');
                });

                it("should return #000000 for (0, 0, 0)", function () {
                    let hex = rgbToHex(0, 0, 0);
                    expect(hex).to.be.equal("#000000");
                });

                it("should return #0C0D0E for (12, 13, 14)", function () {
                    let hex = rgbToHex(12, 13, 14);
                    expect(hex).to.be.equal("#0C0D0E");
                });

                it("should return #FFFFFF for (255, 255, 255)", function () {
                    let hex = rgbToHex(255, 255, 255);
                    expect(hex).to.be.equal("#FFFFFF");
                });

            });



            describe("Special cases(invalid input)", function () {
                it("should return undefined for negative red value", function () {
                    let hex = rgbToHex(-1, 255, 255);
                    expect(hex).equal(undefined);
                });

                it("should return undefined for negative green value", function () {
                    let hex = rgbToHex(255, -1, 255);
                    expect(hex).equal(undefined);
                });

                it("should return undefined for negative blue value", function () {
                    let hex = rgbToHex(255, 255, -1);
                    expect(hex).equal(undefined);
                });

                it("should return undefined for too big red value",function () {
                    let hex = rgbToHex(256,255,255);
                    expect(hex).equal(undefined);
                });

                it("should return undefined for too big green value",function () {
                    let hex = rgbToHex(255,256,255);
                    expect(hex).equal(undefined);
                });

                it("should return undefined for too big blue value",function () {
                    let hex = rgbToHex(255,255,256);
                    expect(hex).equal(undefined);
                });

                it("should return undefined for non integer red value", function () {
                    let hex = rgbToHex(13.5,100,100);
                    expect(hex).equal(undefined);
                });

                it("should return undefined for non integer green value", function () {
                    let hex = rgbToHex(100,13.5,100);
                    expect(hex).equal(undefined);
                });

                it("should return undefined for non integer blue value", function () {
                    let hex = rgbToHex(100,100,13.5);
                    expect(hex).equal(undefined);
                });

                it("should return undefined for non number values", function () {
                    let hex = rgbToHex('red',[3],{5:8});
                    expect(hex).equal(undefined);
                });

                it("should return undefined for missing parameters", function () {
                    let hex = rgbToHex();
                    expect(hex).equal(undefined);
                })




    

            });




        });
