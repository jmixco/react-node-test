const expect = require('expect');
const R = require('./R');

describe('Test R prototype', () => {
    it('loads the 100 items by default', () => {
        let rif = new R();
        expect(rif.items.length).toBe(100);
    });
    it('loads the number of items passed to the constructor', () => {

        let size = Math.floor(Math.random() * 1000);
        let rif = new R(size);
        expect(rif.items.length).toBe(size);
    });
    it('adds a vote', () => {
        let rif = new R();
        let selection = 10;
        rif.vote("mario", rif.rollAvailable());
        rif.vote("john", selection);
        rif.vote("pedro", rif.rollAvailable());
        let votes = [...rif.votes];
        expect(votes.length).toBe(3);
        let voteFromJohn = rif.getVoteByName("john");
        expect(voteFromJohn[0]).toBe(selection);
        expect(voteFromJohn[1]).toBe("john");
    });
    it('removes a vote', () => {
        let rif = new R();
        let selection = 10;
        rif.vote("john", selection);
        let voteFromJohn = rif.getVoteByName("john");
        expect(voteFromJohn).toBeTruthy("vote not created");
        rif.removeVote("john");
        voteFromJohn = rif.getVoteByName("john");
        expect(voteFromJohn).toBeFalsy();
    });
});


