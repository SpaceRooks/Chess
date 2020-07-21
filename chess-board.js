"use strict";

(function() {
    window.addEventListener("load", makeBoard);



    const board = document.getElementById("board");
    const side = ["a", "b", "c", "d", "e", "f", "g", "h"];

    function makeBoard() {
        let brd = document.createDocumentFragment();
        let color = true;
    //   create rows
        for (var i = 1; i < side.length + 1; i++) {
            let row = document.createElement("div");
            row.setAttribute("id", i.toString());
            row.setAttribute("class", "rank");
    //   create the cells
            for (var r = 0; r < side.length; r++) {;
                let box = document.createElement("div");
                box.setAttribute("id", side[r] + i.toString());
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
    //   add to the board
        board.appendChild(brd);
        setBoard();
    }


    function setBoard() {
        var n = ["W", "B"];
        var num = ["1", "8"];
        setPawns();
        var one = document.getElementsByName("1");
        var last = document.getElementsByName("8");
        var all = [one, last];
        var src;
    //   setup pieces based on color
        for (var i = 0; i < all.length; i++) {
            var srcP = "Chess_Peices/" + n[i] + "/";
    //   setup each piece
            for (var t = 0; t < all[i].length; t++) {
                var img = document.createElement("img");
                var piece = all[i][t];
    //   choose which piece is which
                switch (piece.id) {
                    case side[0] + num[i]:
                    case side[7] + num[i]:
                        src = srcP + n[i].toLowerCase() + "R.png";
                        img.setAttribute("class", "rook");
                        break;
                    case side[1] + num[i]:
                    case side[6] + num[i]:
                        src = srcP + n[i].toLowerCase() + "N.png";
                        img.setAttribute("class", "rook");
                        break;
                    case side[2] + num[i]:
                    case side[5] + num[i]:
                        src = srcP + n[i].toLowerCase() + "B.png";
                        img.setAttribute("class", "rook");
                        break;
                    case side[3] + num[i]:
                        src = srcP + n[i].toLowerCase() + "Q.png";
                        img.setAttribute("class", "rook");
                        break;
                    case side[4] + num[i]:
                        src = srcP + n[i].toLowerCase() + "K.png";
                        img.setAttribute("class", "rook");
                        break;
                }
    //   add it to the board
                img.setAttribute("src", src);
                img.setAttribute("name", "piece");
                img.setAttribute("id", n[i] + i.toString() + "");
                piece.appendChild(img);
            }
        }
    }

    function setPawns() {
        var wPs = document.getElementsByName("2");
        var bPs = document.getElementsByName("7")
        var t = 0;
        var src;
    // choose white or black
        while (t < 2) {
            for (var i = 0; i < wPs.length; i++) {  
                var img = document.createElement("img");
    //   choose sorce and id
                if (t == 0) {
                    src = "Chess_Peices/W/wP.png";
                    var tile = wPs[i];
                    img.setAttribute("src", src);
                    img.setAttribute("id", "wp" + i.toString() + "");
                    tile.appendChild(img);
                } else {
                    src = "Chess_Peices/B/bP.png";
                    var tile = bPs[i];
                    img.setAttribute("src", src);
                    img.setAttribute("id", "bp" + i.toString() + "");
                    tile.appendChild(img);
                }
            }
            t++;
        }
    }
})();