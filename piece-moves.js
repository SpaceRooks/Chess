"use strict";

const side = ["h", "g", "f", "e", "d", "c", "b", "a"];

let spot;
let moves = [];
let takes = [];


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
    switch (pieceID[1]) {
        case "p":
            checkPawn(elem, pieceID);
            break;
        case "r":
            checkRook(elem, pieceID);
            break;
        case "n":
            checkKnight(elem, pieceID);
            break;
        case "b":
            checkBishop(elem, pieceID);
            break;
        case "q":
            checkQueen(elem, pieceID);
            break;
        case "k":
            checkKing(elem, pieceID);
            break;
    }
}

function checkPawn(piece, cSpot) {
    let tile = getID(piece.parentElement);
    let n = side.indexOf(tile[0]);
    let a = [side[n-1], side[n], side[n+1]];
    let u = parseInt(tile[1]);
    let b = u + 1;
    for (let i = 0; i < a.length; i++) {
        let m = document.getElementById(a[i] + b.toString());
        if (m.hasChildNodes == true) {
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
    moves.forEach(element => { document.getElementById(element.id).addEventListener("click", movePiece(event.target)) });
}

function checkRook(piece, cSpot) {
    
}

function checkKnight(piece, cSpot) {
    
}

function checkBishop(piece, cSpot) {
    
}

function checkQueen(piece, cSpot) {

}

function checkKing(piece, cSpot) {
    //check all possible moves
    let tile = getID(piece.parentElement);
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
    moves.forEach(element => { (function () {document.getElementById(element.id).addEventListener("click", movePiece(event.target))})});
}

function movePiece(to) {
    let piece = document.getElementById(spot).childNodes;
    to.appendChild(piece[0]);
    document.getElelementById(spot).removeChild(piece[0]);
    
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