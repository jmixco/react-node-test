const R= require('./R');
let items = [];
let rowsize = 10;
let votes = new Map();
for (let i = 0; i < 100; i++) {
    items[i] = i + 1;
}
function printItems() {
    for (let line = 0; line < items.length / rowsize; line++) {
        let str = '';
        for (let col = 0; col < rowsize; col++) {
            str += `| ${items[col + line * rowsize]}\t|`;
        }
        console.log(str);
    }
}
function roll() {
    let item = items[Math.floor(Math.random() * items.length)];

    //console.log(`ganador: ${item}`);
    return item
}
function checkRepetition() {
    let map = new Map();
    for (let i = 0; i < 100; i++) {
        let won = roll();
        let val = map.get(won);
        if (val) {
            map.set(won, ++val);
        } else {
            map.set(won, 1);
        }
    }
    console.log('#$#$%$+#$%+#$%+#$%+#$%+#$+%#$%+');
    [...map].sort((a, b) => {
        return a[1] > b[1];
    }).forEach((val, index, arr) => {
        console.log(val[0] + ' times: ' + val[1]);
    });
    /*
        for (var [key, value] of map) {
            console.log(key + ' times: ' + value);
        }
        */
}

//checkRepetition();

function checkwiner() {
    let loops = 40;
    for (var i = 0; i < loops; i++) {
        let vote = roll();
        if (!votes.get(vote)) {
            votes.set(vote, `p${i + 1}`);
        } else {
            i--;
        }
    }
    let afterVotes = [...votes];
    let winer = afterVotes[Math.floor(Math.random() * afterVotes.length)];
    console.log(`The winer is ${winer[1]}!!!! \n voted: ${winer[0]} `);
}
//checkwiner();



let event = new R();
//event.castVotes();
event.vote("mario", event.rollAvailable());
event.vote("john", event.rollAvailable());
event.vote("pedro", event.rollAvailable());
event.printVotes();
console.log("_@#######$@#$)@#$_)@#$$%^$%&*&^");
event.removeVote("john");
event.printVotes();
let win = event.pickWiner();
console.log(`Real winer:  ${win[1]}. \nVote:${win[0]}`);
//event.checkwiner();



