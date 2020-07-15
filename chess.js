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
        for (var r = 0; r < side.length; r++) {;
            let box = document.createElement("div");
            box.setAttribute("id", "" + side[r] + i.toString() + "");
            box.setAttribute("name", i.toString());
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
    setBoard();
}


function setBoard() {
    setPawns();
}

function setPawns() {
    var wPs = document.getElementsByName("2");
    var bPs = document.getElementsByName("7")
    var path = "Chess_Peices";
    var t = 0;
    var src;
    while (t < 2) {
        for (var i = 0; i < wPs.length; i++) {  
            if (t == 0) {
                src = "Chess_Peices/W/wP.png";
                var tile = wPs[i];
                tile.appendChild(document.createElement("img").setAttribute("src", src).setAttribute("id", "wp" + i.toString() + ""));
            } else {
                src = "Chess_Peices/B/bP.png";
                var tile = bPs[i];
                tile.appendChild(document.createElement("img").setAttribute("src", src).setAttribute("id", "bp" + i.toString() + ""));
            }
        }
        t++;
    }
}