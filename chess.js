"use strict";


const board = document.getElementById("board");
const side = ["a", "b", "c", "d", "e", "f", "g", "h"];

function makeBoard() {
    let brd = document.createDocumentFragment();
    for (var i = 1; i < side.length + 1; i++) {
        let row = document.createElement("div");
        row.setAttribute("id", i.toString());
        row.setAttribute("class", "rank");
        for (var r = 0; r < side.length; r++) {
            let box = document.createElement("div");
            box.setAttribute("id", "" + side[r] + i.toString() + "");
            box.setAttribute("class", "tile");
            row.appendChild(box);
        }
        brd.appendChild(row);
    }
    board.appendChild(brd);
}


document.body.onload(makeBoard());