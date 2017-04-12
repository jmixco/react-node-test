function R(size = 100) {
    this.items = [];
    this.rowsize = 10;
    this.votes = new Map();

    for (let i = 0; i < size; i++) {
        this.items[i] = i + 1;
    }
}
R.prototype.checkwiner = function () {
    let loops = 40;
    for (let i = 0; i < loops; i++) {
        let vote = this.roll();
        if (!this.votes.get(vote)) {
            this.votes.set(vote, `p${i + 1}`);
        } else {
            i--;
        }
    }
    let afterVotes = [...this.votes];
    let winer = afterVotes[Math.floor(Math.random() * afterVotes.length)];
    console.log(`The winer is ${winer[1]}!!!! \n voted: ${winer[0]} `);
};
R.prototype.pickRandomItem = function (arr) {
    let item = arr[Math.floor(Math.random() * arr.length)];
    return item;
};
R.prototype.roll = function () {
    let item = R.prototype.pickRandomItem(this.items);
    return item;
};
R.prototype.availableOptions = function () {
    let selected = [... this.votes].map((val) => val[0]);
    let available = this.items.filter((elem, index, arr) => {
        return selected.indexOf(elem) === -1;
    });
    return available;
};
R.prototype.rollAvailable = function () {
    let available = this.availableOptions();
    let item = R.prototype.pickRandomItem(available);

    return item;
};
R.prototype.pickWiner = function () {
    let participantes = [...this.votes];
    let rollNumber = R.prototype.pickRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    let winer = [];
    for (let i = 0; i < rollNumber; i++) {
        winer = R.prototype.pickRandomItem(participantes);
    }

    return winer;
};
R.prototype.castVotes = function () {
    let loops = 40;
    for (var i = 0; i < loops; i++) {
        let vote = this.roll();
        if (!this.votes.get(vote)) {
            this.votes.set(vote, `p${i + 1}`);
        } else {
            i--;
        }
    }

};
R.prototype.vote = function (id, selection) {

    if (!this.votes.get(selection)) {
        this.votes.set(selection, id);
    } else {
        throw "Selection is not available";
    }
};
R.prototype.getVoteByName = function (id) {
    let voteMap = [... this.votes];
    let i = -1;

    let vote = voteMap.find((element, index) => {
        if (element[1] === id) {
            i = index;
            return true;
        }
        return false;
    });
    return vote;
};
R.prototype.removeVote = function (id) {
    let voteMap = [... this.votes];
    let i = -1;

    let vote = voteMap.find((element, index) => {
        if (element[1] === id) {
            i = index;
            return true;
        }
        return false;
    });

    this.votes.delete(vote[0]);
};
R.prototype.printVotes = function () {
    [... this.votes].forEach((val) => {
        console.log(`id:${val[1]} voted:${val[0]}`)
    });

};
module.exports = R;