"use strict";

const side = ["h", "g", "f", "e", "d", "c", "b", "a"];

let spot;
let moves = [];
let takes = [];


function checkPiece(elem) {
    let pieceID = getID(elem.target);
    let player;
    spot = elem.target.parentElement.id;
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
            checkPawn(elem.target, pieceID);
            break;
        case "r":
            checkRook(elem.target, pieceID);
            break;
        case "n":
            checkKnight(elem.target, pieceID);
            break;
        case "b":
            checkBishop(elem.target, pieceID);
            break;
        case "q":
            checkQueen(elem.target, pieceID);
            break;
        case "k":
            checkKing(elem.target, pieceID);
            break;
    }
    moves.forEach(element => { element.addEventListener("click", movePiece)});
}

function checkPawn(piece, cSpot) {
    let tile = getID(piece.parentElement);
    let n = side.indexOf(tile[0]);
    let a = [side[n-1], side[n], side[n+1]];
    let u = parseInt(tile[1]);
    let b;
    if (getID(piece)[0] == "W") {
        b = u + 1;
    } else {
        b = u - 1;
    }
    for (let i = 0; i < a.length; i++) {
        let m = document.getElementById(a[i] + b.toString());
        if (m == null || m == undefined) {
            continue;
        } else {
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
    }
}

function checkRook(piece, cSpot) {
    
}

function checkKnight(piece, cSpot) {
    
}

function checkBishop(piece, cSpot) {
    let tile = getID(piece.parentElement);
    let n = side.indexOf(tile[0]);
    let a = [side[n-3], side[n-2], side[n-1], side[n], side[n+1], side[n+2], side[n+3]];
    let u = parseInt(tile[1]);
    let b = [(u-3).toString(), (u-2).toString(), (u-1).toString(), (u).toString(), (u+1).toString(), (u+2).toString(), (u+3).toString()];
    let c = [a, b];
    for (let i = 0; i < c.length; i++) {
        for (let t = 0; t < c[i].length; t++) {
            let m = document.getElementById(c[0][t] + c[1][t]);
            let p = document.getElementById(c[0][c[0].length - 1 - t] + c[1][t]);
            part1: {
                if (m == null || m == undefined) {
                    break part1;
                } else {
                    if (m.id == piece.parentElement.id) {
                        break part1;
                    } else {
                        if (m.hasChildNodes() == true) {
                            if (getID(m.childNodes[0])[0] == getID(piece)[0]) {
                                break part1;
                            } else {
                                takes.push(m);
                                moves.push(m);
                            }
                        } else {
                            moves.push(m);
                        }
                    }
                }
            }
            part2: {
                if (p == undefined || p == undefined) {
                    break part2;
                } else {
                    if (p.id == piece.parentElement.id) {
                        break part2;
                    } else {
                        if (p.hasChildNodes() == true) {
                            if (getID(p.childNodes[0])[0] == getID(piece)[0]) {
                                break part2;
                            } else {
                                takes.push(p);
                                moves.push(p);
                            }
                        } else {
                            moves.push(p);
                        }
                    }
                }
            }
        }
    }
}

function checkQueen(piece, cSpot) {

}

function checkKing(piece, cSpot) {
    //check all possible moves
    let tile = getID(piece.parentElement);
    let n = side.indexOf(tile[0]);
    let a = [side[n-1], side[n], side[n+1]];
    let u = parseInt(tile[1]);
    let b = [(u-1).toString(), (u).toString(), (u+1).toString()];
    for (let i = 0; i < a.length; i++) {
        for (let t = 0; t < b.length; t++) {
            let m = document.getElementById(a[i] + b[t]);
            if (m == null || m == undefined) {
                continue;
            } else {
                if (m.id == piece.parentElement.id) {
                    continue;
                } else {
                    if (m.hasChildNodes() == true) {
                        if (getID(m.childNodes[0])[0] == getID(piece)[0]) {
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
        }
    }
}

function movePiece(to) {
    let piece = document.getElementById(spot).childNodes;
    moves.forEach(element => { element.removeEventListener("click", movePiece) });
    to.target.appendChild(piece[0]);
    moves= [];
    takes = [];
}

function getID(img) {
    let imgID = img.id;
    let parA = imgID.slice(0, 1);
    let parB = imgID.slice(1, 2);
    let parC = imgID.slice(2, 3);
    if (parC == null || parC == undefined || parC == "") {
        return [parA, parB];
    } else {
        return [parA, parB, parC];
    }
}