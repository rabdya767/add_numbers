const expect = require("chai").expect;
const addNNumbers = require("./");

describe("addNNumbers", () => {
    it("should return the sum of an array of positive numbers", () => {
        const numbers = [1, 2, 3, 4, 5];
        const expectedSum = 15;
        expect(addNNumbers(numbers)).to.equal(expectedSum);
    });

    it("should return the sum of an array of negative numbers", () => {
        const numbers = [-1, -2, -3, -4, -5];
        const expectedSum = -15;
        expect(addNNumbers(numbers)).to.equal(expectedSum);
    });

    it("should return the sum of an array of mixed positive and negative numbers", () => {
        const numbers = [-1, 2, -3, 4, -5];
        const expectedSum = -3;
        expect(addNNumbers(numbers)).to.equal(expectedSum);
    });

    it("should return 0 when passed an empty array", () => {
        const numbers = [];
        const expectedSum = 0;
        expect(addNNumbers(numbers)).to.equal(expectedSum);
    });
});
