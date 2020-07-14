"use strict";


const board = document.getElementById("board");
const side = ["a", "b", "c", "d", "e", "f", "g", "h"];

function makeBoard() {
    let brd = document.createDocumentFragment();
    let color = true;
    for (var i = 1; i < side.length + 1; i++) {
        let row = document.createElement("div");
        row.setAttribute("id", i.toString());
        row.setAttribute("class", "rank");
        for (var r = 0; r < side.length; r++) {
            let box = document.createElement("div");
            box.setAttribute("id", "" + side[r] + i.toString() + "");
            box.setAttribute("class", "tile");
            if (color == true) {
                box.style.backgroundColor = "blue";
                color = false;
             } else {
                box.style.backgroundColor = "red";
                color = true;
             }
            row.appendChild(box);
        }
        if (color == true) {
            color = false;
         } else {
            color = true;
         }
        brd.appendChild(row);
    }
    board.appendChild(brd);
}


function setBoard() {

}

function getPieces() {
    const fPath = "Chess_Peices"
    
}