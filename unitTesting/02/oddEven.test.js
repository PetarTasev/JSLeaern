
const { expect } = require("chai")
const { isOddOrEven } = require("./oddEven")

describe("isOddOrEven", () => {
    it ('dosetn work with a number', () => {
        expect(isOddOrEven(123)).to.equal(undefined)
    })
    it ('dosent work with a array', () => {
        expect(isOddOrEven([1,3,4])).to.equal(undefined)
    })
    it ('works with even string', () => {
        expect(isOddOrEven('teyt')).to.equal("even")
    })
    it ('works with odd string', () => {
        expect(isOddOrEven('tet')).to.equal('odd')
    })
    it ('works with string', () => {
        expect(isOddOrEven('okthisisEven')).to.equal('even')
    })
    it ('works with string', () => {
        expect(isOddOrEven('asdas')).to.equal('odd')
    })
    it ('works with  string', () => {
        expect(isOddOrEven('even')).to.equal('even')
    })
})