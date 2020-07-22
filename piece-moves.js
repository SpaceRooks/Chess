(function() {
    document.getElementById("board").addEventListener("click", function() { checkPiece(event.target)});
})();

function checkPiece(elem) {
    let pieceID = getID(elem);
    let player;
    // switch (pieceID[0]) {
    //     case "W":
    //         player = true;
    //         break;
    //     case "B":
    //         player = false;
    //         break;
    // }
    switch (piece[1]) {
        case "p":
            movePawn(elem, pieceID);
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
            moveKing(elem, pieceID);
            break;
    }
}

function movePawn(piece, ID) {

}

function moveRook(piece, ID) {
    
}

function moveKnight(piece, ID) {
    
}

function moveBishop(piece, ID) {
    
}

function moveKing(piece, ID) {
    
}

function moveQueen(piece, ID) {
    
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