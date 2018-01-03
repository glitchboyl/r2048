import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import styles from './../../../assets/style';
import Tile from './tile';
import Grid from './../../../unit/grid';
import Tiler from './../../../unit/tiler';

export default class TileContainer extends Component {
    constructor() {
        super();
        this.state = this.setup();
        this.touch = {
            start: null,
            end: null
        };
    }
    setup = () => {
        const size = 4;
        const grid = new Grid(size);
        const startTiles = 2;
        const Tiles = null;
        const tilePos = {};
        this.startRandomTiles(startTiles, grid);
        return {size, grid, startTiles, Tiles, tilePos};
    }
    startRandomTiles = (startTiles, grid) => {
        for (let i = 0; i < startTiles; i++) {
            grid.addRandomTile();
        }
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
    buildTraversals = ({x, y}) => {
        const traversals = {
            x: [],
            y: []
        };
        for (let i = 0; i < this.state.size; i++) {
            traversals
                .x
                .push(i);
            traversals
                .y
                .push(i);
        }
        if (x === 1) 
            traversals.x = traversals.x.reverse();
        if (y === 1) 
            traversals.y = traversals.y.reverse();
        return traversals;
    }
    findFarthestPosition = (cell, vector) => {
        const {grid} = this.state;
        let prev;
        do {
            prev = cell;
            cell = {
                x: prev.x + vector.x,
                y: prev.y + vector.y
            }
        } while (grid.withinBounds(cell) && !grid.cellContent(cell));
        return {farthest: prev, next: cell}
    }
    positionsEqual = (first, second) => {
        return first.x === second.x && first.y === second.y;
    }
    tileMatchesAvailable = () => {
        const {grid, size} = this.state;
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const tile = grid.cellContent({x, y});
                if (tile) {
                    for (let direction = 0; direction < 4; direction++) {
                        const vector = this.getVector(direction);
                        const cell = {
                            x: x + vector.x,
                            y: y + vector.y
                        }
                        const other = grid.cellContent(cell);
                        if (other && other.value === tile.value) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
    movesAvailable = () => {
        return !!this
            .state
            .grid
            .availableCells()
            .length || this.tileMatchesAvailable();
    }
    mergeTiles = (tileOne, tileTwo) => {
        // const {won, SCORE, GAME_OVER, GAME_WON} = this.props;
        const {grid} = this.state;
        const merged = new Tiler({
            x: tileTwo.x,
            y: tileTwo.y
        }, tileOne.value * 2);
        merged.mergedFrom = [tileOne, tileTwo];
        if (this.state.tilePos[`${tileOne.x}-${tileOne.y}`]) {
            // this     .tiles[`${tileOne.x}-${tileOne.y}`]     .classList
            // .remove(`tile-position-${tileOne.x + 1}-${tileOne.y + 1}`); this
            // .tiles[`${tileOne.x}-${tileOne.y}`]     .classList
            // .add(`tile-position-${merged.x + 1}-${merged.y + 1}`);
        }
        grid.insertTile(merged);
        grid.removeTile(tileOne);
        // SCORE(merged.value);
        tileOne.updatePosition({x: tileTwo.x, y: tileTwo.y});
        // if (!won && merged.value === 2048) {     GAME_WON(true);     GAME_OVER(true);
        // }
    }
    moveTile = (tile, cell) => {
        const {grid} = this.state;
        // if (this.state.tilePos[`${tile.x}-${tile.y}`]) {
        // Animated.timing(this.state.tilePos[`${tile.x}-${tile.y}`], {         toValue:
        // {             x: this.spacing * cell.x,             y: this.spacing * cell.y
        //       },         duration: 100,         useNativeDriver: true     }) }
        grid.cells[tile.x][tile.y] = null;
        grid.cells[cell.x][cell.y] = tile;
        tile.updatePosition(cell);
    }
    move = (direction) => {
        // let {over, won, keepPlaying} = this.props; const {ADDITION_OUT, GAME_OVER} =
        // this.props; if (!over || (over && won && keepPlaying))
        setTimeout(() => {
            const {grid} = this.state;
            const vector = this.getVector(direction);
            const traversals = this.buildTraversals(vector);
            let moved = false;
            const scored = this.props.score;
            this.prepareTiles();
            // ADDITION_OUT();
            traversals
                .x
                .forEach(x => {
                    traversals
                        .y
                        .forEach(y => {
                            let cell = {
                                x,
                                y
                            };
                            const tile = grid.cellContent(cell);
                            if (tile) {
                                const positions = this.findFarthestPosition(cell, vector);
                                const next = grid.cellContent(positions.next);
                                if (next && next.value === tile.value && !next.mergedFrom) 
                                    this.mergeTiles(tile, next);
                                else 
                                    this.moveTile(tile, positions.farthest);
                                if (!this.positionsEqual(cell, tile)) 
                                    moved = true;
                                }
                            })
                })
            if (moved) {
                // const {score, bestScore, BEST_SCORE, ADDITION} = this.props; if (scored !==
                // score) {     ADDITION(score - scored);     if (score > bestScore) {
                // BEST_SCORE(score);         storageManager.setBestScore(score);     } }
                setTimeout(() => {
                    grid.addRandomTile();
                    this.renderHandle(); // if (!this.movesAvailable()) {
                    // GAME_OVER(true); storageManager.clearGameState(); } else {     ({over, won,
                    // keepPlaying} = this.props);     storageManager.setGameState({         grid:
                    // grid.serialize(),         score,         over,         won, keepPlaying }); }
                }, 100);
            }
        }, 100);
    }
    restart = () => {
        // storageManager.clearGameState();
        this.setState(this.setup());
        // this     .props     .RESET_SCORE();
        setTimeout(() => {
            this.renderHandle();
        }, 1);
    }
    renderHandle = () => {
        this.setState((prevState, props) => {
            const tilePos = {};
            const Tiles = [];
            prevState
                .grid
                .eachCell((x, y, tile) => {
                    if (tile) {
                        Tiles.push(
                            <Tile
                                inner={tile.value}
                                x={x}
                                y={y}
                                prevPosition={tile.prevPosition}
                                fresh={!tile.prevPosition && !tile.mergedFrom}
                                merged={!!tile.mergedFrom}
                                key={Math.floor(Math.random() * 100000000000000).toString(16)}></Tile>
                        )
                    }
                });
            return {Tiles, tilePos};
        })
    }
    responderStart = ({nativeEvent}) => {
        if (!this.touch.start) 
            this.touch.start = {
                x: nativeEvent.pageX,
                y: nativeEvent.pageY
            };
    }
    responderRelease = ({nativeEvent}) => {
        if (!this.touch.end) {
            this.touch.end = {
                x: nativeEvent.pageX,
                y: nativeEvent.pageY
            };
            const {start, end} = this.touch;
            const [startX,
                startY,
                endX,
                endY] = [start.x, start.y, end.x, end.y];
            const [dx,
                dy] = [
                startX - endX,
                startY - endY
            ];
            const [absDx,
                absDy] = [
                Math.abs(dx),
                Math.abs(dy)
            ];
            if (Math.max(absDx, absDy) > 10) 
                this.move(absDx > absDy
                    ? (dx > 0
                        ? 3
                        : 1)
                    : (dy > 0
                        ? 0
                        : 2));
            }
        this.touch = {
            start: null,
            end: null
        };
    }
    componentWillMount() {
        this.renderHandle();
    }
    render() {
        const {responderStart, responderRelease} = this;
        return (
            <View
                style={styles.tileContainer}
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderStart={responderStart}
                onResponderRelease={responderRelease}>
                {this.state.Tiles}
            </View>
        )
    }
}