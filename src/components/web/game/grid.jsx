import Tiler from './tiler';

export default class Grid {
    constructor(size, prevState) {
        this.size = size;
        this.cells = prevState
            ? this.inheritState(prevState)
            : this.init();
    }
    // Initialize
    init() {
        const cells = [];
        for (let x = 0; x < this.size; x++) {
            cells[x] = [];
            for (let y = 0; y < this.size; y++) {
                cells[x].push(null);
            }
        }
        return cells;
    }
    // Inherit serialize state
    inheritState(state) {
        const cells = [];
        for (let x = 0; x < this.size; x++) {
            cells[x] = [];
            for (let y = 0; y < this.size; y++) {
                let tile = state[x][y];
                cells[x].push(tile
                    ? new Tiler(tile.position, tile.value)
                    : null);
            }
        }
        return cells;
    }
    // Traverse every single cell then callback
    eachCell(callback) {
        this
            .cells
            .forEach((column, x) => {
                column.forEach((tile, y) => {
                    callback(x, y, tile);
                })
            })
    }
    // Find space
    availableCells() {
        const cells = [];
        this.eachCell((x, y, tile) => {
            if (!tile) 
                cells.push({x, y});
            }
        )
        return cells;
    }
    // Random space
    randomAvailableCell() {
        let cells = this.availableCells();
        if (cells.length) 
            return cells[Math.floor(Math.random() * cells.length)];
        }
    // Insert tile
    insertTile(tile) {
        this.cells[tile.x][tile.y] = tile;
    }
    // Remove tile
    removeTile(tile) {
        this.cells[tile.x][tile.y] = null;
    }
    // Add a random position tile
    addRandomTile() {
        if (this.availableCells().length) {
            this.insertTile(new Tiler(this.randomAvailableCell(), Math.random() < 0.9
                ? 2
                : 4))
        }
    }
    // Check derailed
    withinBounds({x, y}) {
        return x >= 0 && x < this.size && y >= 0 && y < this.size;
    }
    cellContent({x, y}) {
        return this.withinBounds({x, y})
            ? this.cells[x][y]
            : null;
    }
    // Serialize state
    serialize() {
        const cells = [];
        this
            .cells
            .forEach((column, x) => {
                cells[x] = [];
                column.forEach((tile, y) => {
                    cells[x].push(tile
                        ? tile.serialize()
                        : null);
                })
            });
        return {size: this.size, cells}
    }
}