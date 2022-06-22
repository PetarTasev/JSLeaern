const { expect } = require("chai")

function sum (a, b) {
    return a + b
}

describe('Testing Suit', () => {
    it('works with int', () => {
        expect(sum(4,6)).to.equal(10, 'didnt work')
    })
})
