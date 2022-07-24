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

var selectSquare = document.getElementsByClassName("gridSquare");

for (var i = 0; i < selectSquare.length; i++) {
    selectSquare[i].addEventListener("mouseover", function () {
        this.classList.add('gridRed');
    });
}