var grid = document.getElementById("gridContainer");

function createRow() {
    var row = document.createElement("div");
    row.className = "gridRow";
}

function createSquare() {
    var square = document.createElement("div");
    square.className = "gridSquare"
}

function createGrid(x) {
    deleteGrid();
    for (let i = 0; i < x; i++) {
        var row = document.createElement("div");
        row.className = "gridRow";
        for (let y = 0; y < x; y++) {
            var square = document.createElement("div");
            square.className = "gridSquare"
            row.appendChild(square);
        }
        grid.appendChild(row)
    }
}

function deleteGrid() {
    while (grid.firstChild) grid.removeChild(grid.firstChild);
}

createGrid(16)

var selectSquare = document.getElementsByClassName("gridSquare")[0];

selectSquare.addEventListener("mouseover", gridRed);

function gridRed() {
    selectSquare.setAttribute("style", "background-color:red;")
}