const GRID_SIZE = 4
const CELL_SIZE = 20 
const CELL_GAP = 2 
const BORDER_RAD = 1

export default class Grid{
    #cells 
    #cellElement
    #x
    #y

    constructor(gridElement) {
        gridElement.style.setProperty("--grid-size", GRID_SIZE)
        gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
        gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)
        gridElement.style.setProperty("--border-rad", `${BORDER_RAD}vmin`)
        createCellElements(gridElement)
        this.#cells = createCellElements(gridElement).map((cellElement, index) => {
            return new Cell(cellElement, Math.floor(index % GRID_SIZE, index / GRID_SIZE))
        })
    }

    
}

class Cell {
    constructor(cellElement, x, y) {
        this.#cellElement = cellElement
        this.#x = x
        this.#y = y 
    }
}

function createCellElements(gridElement) {
    const cells = []
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cells.push(cell)
        gridElement.append(cell)
    }
    return cells 
}