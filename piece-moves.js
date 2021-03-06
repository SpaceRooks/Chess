"use strict";

let start, backup;
let moves = [];
let takes = [];
const side = ["h", "g", "f", "e", "d", "c", "b", "a"];
const sides = side.reverse();


function checkPiece(elem) {
    if (start != undefined || start != null) {
        movePiece(elem)
    } else {
        let pieceID = getID(elem.target);
        start = elem.target;
        elem.target.style.outline = "3px dotted blue";
        let player;
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
        moves.forEach(element => { element.style.outline = "5px dashed LawnGreen"; element.parentElement.addEventListener("click", movePiece);});
        takes.forEach(element => { element.style.outline = "3px solid red"; });
    }
}

function checkPawn(piece, cSpot) {
    let tile = getID(piece.parentElement);
    let n = sides.indexOf(tile[0]);
    let a = [sides[n-1], sides[n], sides[n+1]];
    let u = parseInt(tile[1]);
    let b;
    if (getID(piece)[0] == "W") {
        b = u + 1;
    } else {
        b = u - 1;
    }
    for (let i = 0; i <= a.length; i++) {
        let m = document.getElementById(a[i] + b.toString());
        if (m == null || m == undefined) {
            continue;
        } else {
            if (m.hasChildNodes() == true) {
                if (getID(m.childNodes[0])[0] == getID(piece)[0]) {
                    continue;
                } else {
                    takes.push(m);
                }
            } else if (tile[0] == getID(m)[0]) {
                moves.push(m);
            } else {
                // do nothing
            }
        }
    }
}

function checkRook(piece, cSpot) {  
    let tile = getID(piece.parentElement);
    let n = sides.indexOf(tile[0]);
    let a = sides[n];
    let u = parseInt(tile[1]);
    let b = document.getElementById(tile[1]).childNodes;
    let move1 = true;
    let move2 = true;
    for (let l = 0; l <= b.length; l++) {
        //sides to sides
        part3: {
            if (move1 == true) {
                let m = b[l];
                if (m == null || m == undefined) {
                    break part3;
                } else {
                    if (m.id == piece.parentElement.id) {
                        break part3;
                    } else {
                        if (m.hasChildNodes() == true) {
                            if (getID(m.childNodes[0])[0] == getID(piece)[0] && sides.indexOf(getID(m)[0]) < sides.indexOf(tile[0])) {
                                break part3;
                            } else if (getID(m.childNodes[0])[0] == getID(piece)[0] && sides.indexOf(getID(m)[0]) > sides.indexOf(tile[0])) {
                                move1 = false;
                                break part3;
                            } else {
                                takes.push(m);
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
            if (move2 == true) {
                let m = document.getElementById(a + l.toString());
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
                                move2 = false;
                                break part4;
                            } else {
                                takes.push(m);
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
    }
}

function checkKnight(piece, cSpot) {
    let tile = getID(piece.parentElement);
    let n = sides.indexOf(tile[0]);
    let a = [sides[n-2], sides[n-1], sides[n+1], sides[n+2]];
    let u = parseInt(tile[1]);
    let b = [(u-2).toString(), (u-1).toString(), (u+1).toString(), (u+2).toString()];
    let c0 = a[1] + b[0];
    let c1 = a[0] + b[1];
    let c2 = a[2] + b[0];
    let c3 = a[3] + b[1];
    let c4 = a[0] + b[2];
    let c5 = a[1] + b[3];
    let c6 = a[2] + b[3];
    let c7 = a[3] + b[2];
    let cs = [c0, c1, c2,c3, c4,c5, c6, c7];
    cs.forEach(element => {
        let m = document.getElementById(element);
        if (m == null || m == undefined) {
            // do nothing
        } else {
            if (m.hasChildNodes() == true) {
                if (getID(m.childNodes[0])[0] == getID(piece)[0]) {
                    // do nothing
                } else {
                    takes.push(m);
                }
            } else {
                moves.push(m);
            }
        }
    })
}

function checkBishop(piece, cSpot) {
    let tile = getID(piece.parentElement);
    let n = sides.indexOf(tile[0]);
    let a = [sides[n-7], sides[n-6], sides[n-5], sides[n-4], sides[n-3], sides[n-2], sides[n-1], sides[n], sides[n+1], sides[n+2], sides[n+3], sides[n+4], sides[n+5], sides[n+6], sides[n+7]];
    let u = parseInt(tile[1]);
    let b = [(u-7).toString(), (u-6).toString(), (u-5).toString(), (u-4).toString(), (u-3).toString(), (u-2).toString(), (u-1).toString(), (u).toString(), (u+1).toString(), (u+2).toString(), (u+3).toString(), (u+4).toString(), (u+5).toString(), (u+6).toString(), (u+7).toString()];
    let c = [a, b];
    let move1 = true;
    let move2 = true;
    for (let i = 0; i <= b.length; i++)  {
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
    }
}

function checkQueen(piece, cSpot) {
    let tile = getID(piece.parentElement);
    let n = sides.indexOf(tile[0]);
    let a = [sides[n-7], sides[n-6], sides[n-5], sides[n-4], sides[n-3], sides[n-2], sides[n-1], sides[n], sides[n+1], sides[n+2], sides[n+3], sides[n+4], sides[n+5], sides[n+6], sides[n+7]];
    let u = parseInt(tile[1]);
    let b = [(u-7).toString(), (u-6).toString(), (u-5).toString(), (u-4).toString(), (u-3).toString(), (u-2).toString(), (u-1).toString(), (u).toString(), (u+1).toString(), (u+2).toString(), (u+3).toString(), (u+4).toString(), (u+5).toString(), (u+6).toString(), (u+7).toString()];
    let c = [a, b];
    let f = sides[n];
    let d = document.getElementById(tile[1]).childNodes;
    let move1 = true;
    let move2 = true;
    let move3 = true;
    let move4 = true;
    // diagonals
    loop1: {
        for (let i = 0; i <= b.length; i++)  {
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
    //sides to sides and up and down
    loop2: {
        for (let l = 0; l <= d.length; l++) {
            //sides to sides
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
                                if (getID(m.childNodes[0])[0] == getID(piece)[0] && sides.indexOf(getID(m)[0]) < sides.indexOf(tile[0])) {
                                    break part3;
                                } else if (getID(m.childNodes[0])[0] == getID(piece)[0] && sides.indexOf(getID(m)[0]) > sides.indexOf(tile[0])) {
                                    move3 = false;
                                    break part3;
                                } else {
                                    takes.push(m);
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
    let n = sides.indexOf(tile[0]);
    let a = [sides[n-1], sides[n], sides[n+1]];
    let u = parseInt(tile[1]);
    let b = [(u-1).toString(), (u).toString(), (u+1).toString()];
    for (let i = 0; i <= a.length; i++) {
        for (let t = 0; t <= b.length; t++) {
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
    let spot = to.target;
    if (start == undefined || start == null || start == to.target) {
        if (moves.length == 0) {
            to.target.parentElement.removeEventListener("click", movePiece)
            to.target.style.outline = "none";

        } else {
            
        }
    } else {
        if (to.target.id == start.id) {
            spot.removeEventListener("click", movePiece);
            if (spot.childNodes[0] != undefined) {
                    spot.childNodes[0].style.outline = "none";
            } else {
                 spot.style.outline = "none";
            }
            spot.style.outline = "none";
            moves = [];
            takes = [];
            start.style.outline = "none";
            start = null;
        } else {
            backup = start;
        }
        if (moves.length != 0 || takes.length != 0 && moves.includes(spot) == true || takes.includes(spot.parentElement) == true) {
            moves.forEach(element => { element.style.outline = "none"; element.removeEventListener("click", movePiece) });
            takes.forEach(element => { element.style.outline = "none"; element.removeEventListener("click", movePiece)});
            if (takes.includes(spot) ==  true || takes.includes(spot.parentElement) == true) {
                // jail it
                let aspot = spot.parentElement;
                jailPiece(to.target);
                aspot.appendChild(start);
                spot.parentElement.removeEventListener("click", movePiece);
            } else if (to.target.id == start.id) {
                spot.removeEventListener("click", movePiece);
                if (spot.childNodes[0] != undefined) {
                    spot.childNodes[0].style.outline = "none";
                } else {
                    spot.childNodes[0].style.outline = "none";
                }
            } else if (moves.includes(spot) == true || moves.includes(spot.parentElement) == true) {
                // move like normal
                to.target.appendChild(start);
                spot.removeEventListener("click", movePiece);
            }
            spot.removeEventListener("click", movePiece);
            spot.style.outline = "none";
            moves = [];
            takes = [];
            start.style.outline = "none";
            start = null;
        } else if (to.target.id == start.id) {
            spot.removeEventListener("click", movePiece);
            if (spot.childNodes[0] != undefined) {
                    spot.childNodes[0].style.outline = "none";
                } else {
                    spot.childNodes[0].style.outline = "none";
                }
            spot.style.outline = "none";
            moves = [];
            takes = [];
            start.style.outline = "none";
            start = null;
        } else {
            alert("that is not a valid move");
        }
    }
}

function jailPiece(piece) {
    if (getID(piece)[0] == "w" || getID(piece)[0] == "W") {
        document.getElementById("whiteJ").appendChild(piece);
    } else {
        document.getElementById("blackJ").appendChild(piece);
    }
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