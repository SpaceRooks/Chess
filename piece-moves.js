"use strict";

let spot;
let moves;
let takes;


function checkPiece(elem) {
    let pieceID = getID(elem);
    let player;
    spot = elem.parentElement.id;
    switch (pieceID[0]) {
        case "W":
            player = true;
            break;
        case "B":
            player = false;
            break;
    }
    switch (piece[1]) {
        case "p":
            movePawns(elem, pieceID);
            break;
        case "r":
            moveRook(elem, pieceID);
            break;
        case "n":
            moveKnight(elem, pieceID);
            break;
        case "b":
            moveBishop(elem, pieceID);
            break;
        case "q":
            moveQueen(elem, pieceID);
            break;
        case "k":
            checkKing(elem, pieceID);
            break;
    }
}

function movePawns(piece, cSpot) {

}

function moveRook(piece, cSpot) {
    
}

function moveKnight(piece, cSpot) {
    
}

function moveBishop(piece, cSpot) {
    
}

function checkKing(piece, cSpot) {
    //check all possible moves
    let tile = getID(cSpot);
    let n = side.indexOf(tile[0]);
    let a = [side[n-1], side[n], side[n+1]];
    let u = parseInt(tile[1]);
    let b = [u-1, u, u+1].toString();
    let c = [a, b];
    for (let i = 0; i < c.length; i++) {
        for (let t = 0; t < c[i].length; t++) {
            let m = document.getElementById(c[0][t] + c[1][t]);
            if (m.id == piece.id) {
                break;
            } else if (m.hasChildNodes == true) {
                if (m.childNodes[0].getID()[0] == tile[0]) {
                    break;
                } else {
                    takes.push(m);
                    moves.push(m);
                }
            } else {
                moves.push(m);
            }
        }
    }
    moves.forEach(element => { document.getElementById(element).addEventListener("click", moveKing(event.target)) });
}

function moveKing(to) {
    let piece = spot.childNodes;
    to.appendChild(piece[0]);
    spot.removeChild(piece[0]);
    
}

function moveQueen(piece, cSpot) {
    
}

function getID(img) {
    let imgID = img.id;
    let parA = imgID.slice(0, 1);
    let parB = imgID.slice(1, 2);
    let parC = imgID.slice(2, 3);
    if (parC == null || parC == undefined) {
        return [parA, parB];
    } else {
        return [parA, parB, parC];
    }
}