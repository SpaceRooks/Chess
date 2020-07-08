var board = document.getElementById("board");
var side = [a, b, c, d, e, f, g, h];

function makeBoard() {
    var brd = document.createDocumentFragment();
    for (var i = 0; i < 8; i++) {
        var tr = document.createElement("<tr>");
        tr.setAttribute("id", i + 1);
        for (var c = 0; c < side.length; c++) {
            var td = document.createElement("<td>");
            td.setAttribute("id", "" + side[c].toString() + c+1 + "");
            tr.appendChild(td);
        }
    }
}