const { expect } = require("chai");
const { mathEnforcer } = require("./mathEnforcer");

describe("teset", () => {
  it("addFive not a number returns undefined", () => {
    expect(mathEnforcer.addFive("5")).to.equal(undefined);
  });
  it("addFIve adds 5 to the number given", () => {
    expect(mathEnforcer.addFive(5)).to.equal(10);
    expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
    expect(mathEnforcer.addFive(-1)).to.equal(4)
  });
  it("subtractTen not a number returns undefined", () => {
    expect(mathEnforcer.subtractTen("15")).to.equal(undefined);
  });
  it("subtractTen subtracts 10 from the given numebr", () => {
    expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5);
    expect(mathEnforcer.subtractTen(15)).to.equal(5);
    expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
  });
  it("sum if num1 or num2 is not a number return undefined", () => {
    expect(mathEnforcer.sum("1", 1)).to.equal(undefined);
    expect(mathEnforcer.sum(1, "1")).to.equal(undefined);
  });
  it("sum if both numbers and numbers return the sum", () => {
    expect(mathEnforcer.sum(1, 3)).to.equal(4);
    expect(mathEnforcer.sum(1.5, 3)).to.equal(4.5);
    expect(mathEnforcer.sum(1, 3.5)).to.equal(4.5);
    expect(mathEnforcer.sum(5, -1)).to.equal(4);
    expect(mathEnforcer.sum(-1, 5)).to.equal(4);
  });
  
});
