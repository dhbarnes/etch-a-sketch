function drawGrid(gridSize = 16) {
    const container = document.querySelector("#container");
    const squareSize = container.offsetWidth/gridSize;

    container.innerHTML = "";

    for (let i = 0; i < gridSize*gridSize; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.minWidth = `${squareSize}px`;
        square.style.minHeight = `${squareSize}px`;
        square.style.maxWidth = `${squareSize}px`;
        square.style.maxHeight = `${squareSize}px`;

        square.addEventListener("mouseover", event => {
            event.target.classList.add("colored");
        });

        container.appendChild(square);
    }
}

const setSize = document.querySelector("#setSize");
setSize.addEventListener("click", () => {
    let gridSize = prompt("Enter grid side size:");
    while (gridSize > 100 || gridSize < 1) {
        gridSize = prompt("Enter grid side size (min 1, max 100):");
    }
    drawGrid(gridSize);
})

const resetGrid = document.querySelector("#resetGrid");
resetGrid.addEventListener("click", () => {
    drawGrid();
})

drawGrid();
