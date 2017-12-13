import React, {Component} from 'react';
import Tile from './tile';
import Grid from './grid';
import Tiler from './tiler';
import storageManager from './storage-manager';
const storage = new storageManager();

export default class TileContainer extends Component {
    constructor() {
        super();
        this.state = this.setup();
        this.startRandomTiles(this.state);
    }
    setup = () => {
        const prevState = storage.getGameState();
        const size = prevState
            ? prevState.grid.size
            : 4;
        const startTiles = 2;
        const grid = prevState
            ? new Grid(size, prevState.grid.cells)
            : new Grid(size);
        return {size, startTiles, grid}
    }
    startRandomTiles = ({startTiles, grid}) => {
        for (let i = 0; i < startTiles; i++) {
            grid.addRandomTile();
        }
    }
    actuate = () => {
        const Tiles = [];
        this
            .state
            .grid
            .eachCell((x, y, cell) => {
                if (cell) 
                    Tiles.push(
                        <Tile
                            inner={cell.value}
                            x={cell.x}
                            y={cell.y}
                            key={`${cell.x + 1}-${cell.y + 1}`}></Tile>
                    )
            });
        return Tiles;
    }
    render() {
        const Tiles = this.actuate();
        return (
            <div className="tile-container">
                {Tiles}
            </div>
        )
    }
}