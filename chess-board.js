"use strict";

(function() {
    const board = document.getElementById("board");
    // const side = ["a", "b", "c", "d", "e", "f", "g", "h"]; 
    /* since we set up our board with white on top it reverses the column order.
    1a should be a white rook in a black square so I revered the letters as this
    is the easiest way to solve the problem */
    const side = ["h", "g", "f", "e", "d", "c", "b", "a"]; 

    let displayBoard = false;
    let moveCounter = 0;

    function playGame() {
        if(displayBoard == true) {
            displayBoard = false;
            document.getElementById("brd").remove();
        }
        else {
            makeBoard();
            displayBoard = true;
        // makeTimer():
        // makePieceJail();
        }
        
    }

    function makeBoard() {
        let brd = document.createDocumentFragment();
        let fBoard = document.createElement("span");
        fBoard.setAttribute("id", "brd");
        let color = true;
    //   create rows
        for (let i = 1; i <= side.length; i++) {
            let row = document.createElement("div");
            row.setAttribute("id", i.toString());
            row.setAttribute("class", "rank");
    //   create the cells
            for (let r = 0; r < side.length; r++) {
                let box = document.createElement("div");
                box.setAttribute("id", side[r] + i.toString());
                box.setAttribute("name", i.toString());
                box.setAttribute("class", "tile");
                box.setAttribute("title", side[r] + i.toString()); //to see the cell id for dev purposes
                /* if (color == true) {
                    box.style.backgroundColor = "#F7F2F0";
                    color = false;
                } else {
                    box.style.backgroundColor = "#2c5600";
                    color = true;
                } */
                if (color) {
                    box.style.backgroundColor = "#F7F2F0"; //off-white
                } 
                else {
                    box.style.backgroundColor = "#2c5600"; //green
                }
                color = !color;
                row.appendChild(box);
            }
            // if (color == true) {
            //     color = false;
            // } else {
            //     color = true;
            // }
            color = !color;
            fBoard.appendChild(row);
        }
    //   add to the board
        brd.appendChild(fBoard)
        board.appendChild(brd);
        setBoard();
    }

    function setBoard() {
        const n = ["W", "B"];
        const num = ["1", "8"];
        setPawns();
        let one = document.getElementsByName("1"); //row one of the board (white non-pawn pieces)
        let last = document.getElementsByName("8"); //row eight of the borad (black non-pawn pieces)
        let all = [one, last]; //2x8 array representing all of the columns or row one and eight
        let src;
    //   setup pieces based on color
        for (let i = 0; i < all.length; i++) {
            let srcP = "Chess_Pieces/" + n[i] + "/";
    //   setup each piece
            for (let t = 0; t < all[i].length; t++) {
                let img = document.createElement("img");
                let piece = all[i][t];
    //   choose which piece is which
                switch (piece.id) {
                    case side[0] + num[i]: //column a and h are rooks
                    case side[7] + num[i]:
                        src = srcP + n[i].toLowerCase() + "R.png";
                        img.setAttribute("name", "rook");
                        img.setAttribute("id", n[i] + "r");
                        break;
                    case side[1] + num[i]: //column b and g are knights
                    case side[6] + num[i]:
                        src = srcP + n[i].toLowerCase() + "N.png";
                        img.setAttribute("name", "knight");
                        img.setAttribute("id", n[i] + "n");
                        break;
                    case side[2] + num[i]: //column c and f are bishops
                    case side[5] + num[i]:
                        src = srcP + n[i].toLowerCase() + "B.png";
                        img.setAttribute("name", "bishop");
                        img.setAttribute("id", n[i] + "b");
                        break;
                    case side[4] + num[i]: //column e is a queen irrespective of color
                        src = srcP + n[i].toLowerCase() + "Q.png";
                        img.setAttribute("name", "queen");
                        img.setAttribute("id", n[i] + "q");
                        break;
                    case side[3] + num[i]: //column d is a king irrepective of color
                        src = srcP + n[i].toLowerCase() + "K.png";
                        img.setAttribute("name", "king");
                        img.setAttribute("id", n[i] + "k");
                        break;
                }
    //   add it to the board
                img.setAttribute("src", src);
                img.setAttribute("class", "piece");
                img.addEventListener("click", checkPiece);
                piece.appendChild(img);
            }
        }
    }

    function setPawns() {
        let wPs = document.getElementsByName("2"); //white pawn row
        let bPs = document.getElementsByName("7"); //black pawn row
        let t = 0;
        let src;
    // choose white or black
        while (t < 2) {
            for (let i = 0; i < wPs.length; i++) {  
                let img = document.createElement("img");
                let bs = i + 1;
                let tile;
    //   choose sorce and id
                if (t == 0) {
                    src = "Chess_Pieces/W/wP.png";
                    tile = wPs[i];
                    img.setAttribute("src", src);
                    img.setAttribute("id", "wp" + bs.toString() + "");
                    tile.appendChild(img);
                } else {
                    src = "Chess_Pieces/B/bP.png";
                    tile = bPs[i];
                    img.setAttribute("src", src);
                    img.setAttribute("id", "bp" + bs.toString() + "");
                    tile.appendChild(img);
                }
                img.addEventListener("click", checkPiece);
            }
            t++;
        }
    }
    //when buttons are clicked board appears, disapears on reclick
    document.getElementById("onePlayerButton").addEventListener("click", playGame);
    document.getElementById("twoPlayerButton").addEventListener("click", playGame);
})();