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
    // window.addEventListener("")
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
    let tile = getID(piece.parentElement);
    let n = side.indexOf(tile[0]);
    let a = side[n];
    let u = parseInt(tile[1]);
    let b = document.getElementById(tile[1]).childNodes;
    let i = 0;
    let move1 = true;
    let move2 = true;
    b.forEach(element => {
        part1: {
            if (move1 == true) {
                let m = element;
                if (m.id == piece.parentElement.id) {
                    break part1;
                } else {
                    if (m.hasChildNodes() == true) {
                        if (getID(m.childNodes[0])[0] == getID(piece)[0]) {
                            move1 = false;
                            break part1;
                        } else {
                            takes.push(m);
                            moves.push(m);
                        }
                    } else {
                        moves.push(m);
                    }
                }
            } else {
                break part1;
            }
        }
        part2: {
            if (move2 == true) {
                let m = document.getElementById(a + i.toString());
                if (m == null || m == undefined) {
                    break part2;
                } else {
                    if (m.id == piece.parentElement.id) {
                        break part2;
                    } else {
                        if (m.hasChildNodes() == true) {
                            if (getID(m.childNodes[0])[0] == getID(piece)[0]) {
                                move2 = false;
                                break part2;
                            } else {
                                takes.push(m);
                                moves.push(m);
                            }
                        } else {
                            moves.push(m);
                        }
                    }
                }
            } else {
                break part2;
            }
        }
        i++;
    })
}

function checkKnight(piece, cSpot) {
    
}

function checkBishop(piece, cSpot) {
    let tile = getID(piece.parentElement);
    let n = side.indexOf(tile[0]);
    let a = [side[n-7], side[n-6], side[n-5], side[n-4], side[n-3], side[n-2], side[n-1], side[n], side[n+1], side[n+2], side[n+3], side[n+4], side[n+5], side[n+6], side[n+7]];
    let u = parseInt(tile[1]);
    let b = [(u-7).toString(), (u-6).toString(), (u-5).toString(), (u-4).toString(), (u-3).toString(), (u-2).toString(), (u-1).toString(), (u).toString(), (u+1).toString(), (u+2).toString(), (u+3).toString(), (u+4).toString(), (u+5).toString(), (u+6).toString(), (u+7).toString()];
    let c = [a, b];
    let move1 = true;
    let move2 = true;
    for (let i = 0; i < c.length; i++) {
        for (let t = 0; t < c[i].length; t++) {
            let m = document.getElementById(c[0][t] + c[1][t]);
            let p = document.getElementById(c[0][c[0].length - 1 - t] + c[1][t]);
            part1: {
                if (move1 == true) {
                    if (m == null || m == undefined) {
                        break part1;
                    } else {
                        if (m.id == piece.parentElement.id) {
                            break part1;
                        } else {
                            if (m.hasChildNodes() == true) {
                                if (getID(m.childNodes[0])[0] == getID(piece)[0]) {
                                    move1 = false;
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
                } else {
                    break part1;
                }
            }
            part2: {
                if (move2 == true) {
                    if (p == undefined || p == undefined) {
                        break part2;
                    } else {
                        if (p.id == piece.parentElement.id) {
                            break part2;
                        } else {
                            if (p.hasChildNodes() == true) {
                                if (getID(p.childNodes[0])[0] == getID(piece)[0]) {
                                    move2 = false;
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
                } else {
                    break part2;
                }
            }
        }
    }
}

function checkQueen(piece, cSpot) {
    let tile = getID(piece.parentElement);
    let n = side.indexOf(tile[0]);
    let a = [side[n-7], side[n-6], side[n-5], side[n-4], side[n-3], side[n-2], side[n-1], side[n], side[n+1], side[n+2], side[n+3], side[n+4], side[n+5], side[n+6], side[n+7]];
    let u = parseInt(tile[1]);
    let b = [(u-7).toString(), (u-6).toString(), (u-5).toString(), (u-4).toString(), (u-3).toString(), (u-2).toString(), (u-1).toString(), (u).toString(), (u+1).toString(), (u+2).toString(), (u+3).toString(), (u+4).toString(), (u+5).toString(), (u+6).toString(), (u+7).toString()];
    let c = [a, b];
    let f = side[n];
    let d = document.getElementById(tile[1]).childNodes;
    let move1 = true;
    let move2 = true;
    let move3 = true;
    let move4 = true;
    // diagonals
    loop1: {
        for (let i = 0; i < b.length; i++)  {
            // diagnal
            part1: {
                if (move1 == true) {
                    let m = document.getElementById(a[i] + b[i]);
                    if (m == null || m == undefined) {
                        break part1;
                    } else {
                        if (m.id == piece.parentElement.id) {
                            break part1;
                        } else {
                            if (m.hasChildNodes() == true) {
                                if (getID(m.childNodes[0])[0] == getID(piece)[0] && parseInt(getID(m)[1]) < parseInt(tile[1])) {
                                    break part1;
                                } else if (getID(m.childNodes[0])[0] == getID(piece)[0] && parseInt(getID(m)[1]) > parseInt(tile[1])) {
                                    move1 = false;
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
                } else {
                    break part1;
                }
            }
            part2: {
                //other diagonal
                if (move2 == true) {
                    let p = document.getElementById(a[a.length - 1 - i] + b[i]);
                    if (p == null || p == undefined) {
                        break part2;
                    } else {
                        if (p == null || p == undefined) {
                            break part2;
                        } else {
                            if (p.id == piece.parentElement.id) {
                                break part2;
                            } else {
                                if (p.hasChildNodes() == true) {
                                    if (getID(p.childNodes[0])[0] == getID(piece)[0] && parseInt(getID(p)[1]) < parseInt(tile[1])) {
                                        break part2;
                                    } else if (getID(p.childNodes[0])[0] == getID(piece)[0] && parseInt(getID(p)[1]) > parseInt(tile[1])) {
                                        move2 = false;
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
                } else {
                    break part2;
                }
            }
            if (move1 == false && move2 == false) {
                break loop1;
            } else {
                
            }
        }
    }
    //side to side and up and down
    loop2: {
        for (let l = 0; l < d.length; l++) {
            //side to side
            part3: {
                if (move3 == true) {
                    let m = d[l];
                    if (m == null || m == undefined) {
                        break part3;
                    } else {
                        if (m.id == piece.parentElement.id) {
                            break part3;
                        } else {
                            if (m.hasChildNodes() == true) {
                                if (getID(m.childNodes[0])[0] == getID(piece)[0] && side.indexOf(getID(m)[1]) < side.indexOf(tile[1])) {
                                    break part3;
                                } else if (getID(m.childNodes[0])[0] == getID(piece)[0] && side.indexOf(getID(m)[1]) > side.indexOf(tile[1])) {
                                    move3 = false;
                                    break part3;
                                } else {
                                    takes.push(m);
                                    moves.push(m);
                                }
                            } else {
                                moves.push(m);
                            }
                        }
                    }
                } else {
                    break part3;
                }
            }
            part4: {
                // up and down
                if (move4 == true) {
                    let m = document.getElementById(f + l.toString());
                    if (m == null || m == undefined) {
                        break part4;
                    } else {
                        if (m.id == piece.parentElement.id) {
                            break part4;
                        } else {
                            if (m.hasChildNodes() == true) {
                                if (getID(m.childNodes[0])[0] == getID(piece)[0] && parseInt(getID(m)[1]) < parseInt(tile[1])) {
                                    break part4;
                                } else if (getID(m.childNodes[0])[0] == getID(piece)[0] && parseInt(getID(m)[1]) > parseInt(tile[1])) {
                                    move4 = false;
                                    break part4;
                                } else {
                                    takes.push(m);
                                    moves.push(m);
                                }
                            } else {
                                moves.push(m);
                            }
                        }
                    }
                } else {
                    break part4;
                }
            }
            if (move3 == false && move4 == false) {
                break loop2;
            } else {
                
            }
        }
    }
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
                            continue;
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