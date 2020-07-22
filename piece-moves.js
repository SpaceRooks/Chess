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
            movePawn(elem);
            break;
        case "r":
            moveRook(elem);
            break;
        case "n":
            moveKnight(elem);
            break;
        case "b":
            moveBishop(elem);
            break;
        case "q":
            moveQueen(elem);
            break;
        case "k":
            moveKing(elem);
            break;
    }
}

function movePawn(piece) {

}

function moveRook (piece) {
    
}

function moveKnight(piece) {
    
}

function moveBishop(piece) {
    
}

function moveKing(piece) {
    
}

function moveQueen(piece) {
    
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