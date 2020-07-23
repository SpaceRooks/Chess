"use strict";



(function() {
    const board = document.getElementById("board");
    const side = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let displayBoard = false;


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
        // 
        }
        
    }

    function makeBoard() {
        let brd = document.createDocumentFragment();
        let fBoard = document.createElement("span");
        fBoard.setAttribute("id", "brd");
        let color = true;
    //   create rows
        for (let i = 1; i < side.length + 1; i++) {
            let row = document.createElement("div");
            row.setAttribute("id", i.toString());
            row.setAttribute("class", "rank");
    //   create the cells
            for (let r = 0; r < side.length; r++) {
                let box = document.createElement("div");
                box.setAttribute("id", side[r] + i.toString());
                box.setAttribute("name", i.toString());
                box.setAttribute("class", "tile");
                if (color == true) {
                    box.style.backgroundColor = "#F7F2F0";
                    color = false;
                } else {
                    box.style.backgroundColor = "#2c5600";
                    color = true;
                }
                row.appendChild(box);
            }
            if (color == true) {
                color = false;
            } else {
                color = true;
            }
            fBoard.appendChild(row);
        }
    //   add to the board
        brd.appendChild(fBoard)
        board.appendChild(brd);
        setBoard();
    }

    /**
     * test test test
     */
    function setBoard() {
        const n = ["W", "B"];
        const num = ["1", "8"];
        setPawns();
        let one = document.getElementsByName("1");
        let last = document.getElementsByName("8");
        let all = [one, last];
        let src;
    //   setup pieces based on color
        for (let i = 0; i < all.length; i++) {
            let srcP = "Chess_Peices/" + n[i] + "/";
    //   setup each piece
            for (let t = 0; t < all[i].length; t++) {
                let img = document.createElement("img");
                let piece = all[i][t];
    //   choose which piece is which
                switch (piece.id) {
                    case side[0] + num[i]:
                    case side[7] + num[i]:
                        src = srcP + n[i].toLowerCase() + "R.png";
                        img.setAttribute("name", "rook");
                        img.setAttribute("id", n[i] + "r");
                        break;
                    case side[1] + num[i]:
                    case side[6] + num[i]:
                        src = srcP + n[i].toLowerCase() + "N.png";
                        img.setAttribute("name", "knight");
                        img.setAttribute("id", n[i] + "n");
                        break;
                    case side[2] + num[i]:
                    case side[5] + num[i]:
                        src = srcP + n[i].toLowerCase() + "B.png";
                        img.setAttribute("name", "bishop");
                        img.setAttribute("id", n[i] + "b");
                        break;
                    case side[4] + num[i]:
                        src = srcP + n[i].toLowerCase() + "Q.png";
                        img.setAttribute("name", "queen");
                        img.setAttribute("id", n[i] + "q");
                        break;
                    case side[3] + num[i]:
                        src = srcP + n[i].toLowerCase() + "K.png";
                        img.setAttribute("name", "king");
                        img.setAttribute("id", n[i] + "k");
                        break;
                }
    //   add it to the board
                img.setAttribute("src", src);
                img.setAttribute("class", "piece");
                piece.appendChild(img);
            }
        }
    }

    function setPawns() {
        let wPs = document.getElementsByName("2");
        let bPs = document.getElementsByName("7")
        let t = 0;
        let src;
    // choose white or black
        while (t < 2) {
            for (let i = 0; i < wPs.length; i++) {  
                let img = document.createElement("img");
                let bs = i + 1;
    //   choose sorce and id
                if (t == 0) {
                    src = "Chess_Peices/W/wP.png";
                    let tile = wPs[i];
                    img.setAttribute("src", src);
                    img.setAttribute("id", "wp" + bs.toString() + "");
                    tile.appendChild(img);
                } else {
                    src = "Chess_Peices/B/bP.png";
                    let tile = bPs[i];
                    img.setAttribute("src", src);
                    img.setAttribute("id", "bp" + bs.toString() + "");
                    tile.appendChild(img);
                }
            }
            t++;
        }
    }
    document.getElementById("onePlayerButton").addEventListener("click", playGame);
    document.getElementById("twoPlayerButton").addEventListener("click", playGame);
})();