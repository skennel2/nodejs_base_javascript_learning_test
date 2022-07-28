const { expect } = require("chai");

describe('chai', () => {

    it('basic', () => {
        const value = 100 + 100;
        expect(value).to.equal(200);
        expect(value).to.not.equal(300);

        expect(value).to.above(199);
        expect(value).to.least(200);

        expect(value).to.below(201);
        expect(value).to.most(200);
        
        expect({value: 100}).to.deep.equal({value: 100});
        expect({value: 100}).to.not.deep.equal({value: 200});
    })
})

