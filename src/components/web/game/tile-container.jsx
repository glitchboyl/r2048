import React, {Component} from 'react';
import Tile from './tile';
import Grid from './grid';
import Tiler from './tiler';
import inputManager from './input-manager';
import storageManager from './storage-manager';

export default class TileContainer extends Component {
    constructor() {
        super();
        this.state = this.setup();
        this.startRandomTiles(this.state);
        inputManager.on('move', this.move);
        inputManager.on('restart', this.restart);
        inputManager.on('keepPlaying', this.keepPlaying);
        inputManager.listen();
    }
    setup = () => {
        const prevState = storageManager.getGameState();
        const size = prevState
            ? prevState.grid.size
            : 4;
        const grid = prevState
            ? new Grid(size, prevState.grid.cells)
            : new Grid(size);
        return {size, grid, startTiles: 2}
    }
    startRandomTiles = ({startTiles, grid}) => {
        for (let i = 0; i < startTiles; i++) {
            grid.addRandomTile();
        }
    }
    renderHandle = () => {
        const Tiles = [];
        this
            .state
            .grid
            .eachCell((x, y, tile) => {
                if (tile) 
                    Tiles.push(
                        <Tile
                            inner={tile.value}
                            x={tile.x}
                            y={tile.y}
                            key={`${tile.x + 1}-${tile.y + 1}`}></Tile>
                    )
            });
        return Tiles;
    }
    prepareTiles = () => {
        this
            .state
            .grid
            .eachCell((x, y, tile) => {
                if (tile) {
                    tile.mergedFrom = null;
                    tile.savePosition();
                }
            });
    }
    getVector = (direction) => {
        // 0: up, 1: right, 2: down, 3: left
        const map = {
            0: {
                x: 0,
                y: -1
            },
            1: {
                x: 1,
                y: 0
            },
            2: {
                x: 0,
                y: 1
            },
            3: {
                x: -1,
                y: 0
            }
        }
        return map[direction];
    }
    buildTraversals = (vector) => {}
    move = (direction) => {
        // 0: up, 1: right, 2: down, 3: left
        const vector = this.getVector(direction);
        const traversals = this.buildTraversals(vector);
    }
    restart = () => {}
    keepPlaying = () => {}
    render() {
        const Tiles = this.renderHandle();
        return (
            <div className="tile-container">
                {Tiles}
            </div>
        )
    }
}