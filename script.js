var grid = document.getElementById("gridContainer");

function createRow() {
    var row = document.createElement("div");
    row.className = "gridRow";
}

function createSquare() {
    var square = document.createElement("div");
    square.className = "gridSquare";
}

function createGrid(x) {
    deleteGrid();
    for (let i = 0; i < x; i++) {
        var row = document.createElement("div");
        row.className = "gridRow";
        for (let y = 0; y < x; y++) {
            var square = document.createElement("div");
            square.className = "gridSquare";
            row.appendChild(square);
        }
        grid.appendChild(row)
    }
    var selectSquare = document.getElementsByClassName("gridSquare");

    for (var i = 0; i < selectSquare.length; i++) {
        selectSquare[i].addEventListener("mouseover", function () {
         this.classList.add('gridRed');
    });
}
}

function deleteGrid() {
    while (grid.firstChild) grid.removeChild(grid.firstChild);
}

var newGridButton = document.getElementById("newGrid");

function promptSize() {
    var confirm = 0
    var size = 0;
    do {
        size = parseInt(window.prompt("Please enter a number between 1 - 100"));
        if (size >= 1 && size <= 100) {
            confirm = 1;
        }
    } while (confirm !== 1);
    createGrid(size);
}

createGrid(16);

newGridButton.addEventListener("click", function() {
    promptSize();
})