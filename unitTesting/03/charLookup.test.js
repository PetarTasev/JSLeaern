const { expect } = require('chai')
const { lookupChar } = require('./charLookup')

describe('test', () => {
    it ('returns undefined when given a non string for 1st param', () => {
        expect(lookupChar(1234, 1)).to.equal(undefined)
    })
    it ('returns undefined when given a non number for 2end param', () => {
        expect(lookupChar('word', '2')).to.equal(undefined)
    })
    it ('returns undefined whne the indes is not a integer', () => {
        expect(lookupChar('hello', 1.5)).to.equal(undefined)
    })
    it ('returns Incorrect index when the index is bigger', () => {
        expect(lookupChar('hello', 10)).to.equal("Incorrect index")
    })
    it ('returns Incorrect index when the index is smaller', () => {
        expect(lookupChar('hello', -1)).to.equal("Incorrect index")
    })
    it ('returns correct char', () => {
        expect(lookupChar('hello', 1)).to.equal('e')
    })
    it ('returns correct char', () => {
        expect(lookupChar('testing', 4)).to.equal('i')
    })
    it ('returns correct char', () => {
        expect(lookupChar('justToBeSure', 7)).to.equal('e')
    })
})