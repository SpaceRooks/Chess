"use strict";


const board = document.getElementById("board");
const side = ["a", "b", "c", "d", "e", "f", "g", "h"];

function makeBoard() {
    let brd = document.createDocumentFragment();
    for (var i = 1; i > side.length; i++) {
        let box = document.createElement("<div>");
        box.setAttribute("id", "" + side[i] + i.toString() + "");
        brd.appendChild(box);
    }
    board.appendChild(brd);
}