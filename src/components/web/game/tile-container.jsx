import React, {Component} from 'react';
import Tile from './tile';

export default class TileContainer extends Component {
    render() {
        return (
            <div className="tile-container">
                <Tile inner='2' x='1' y='2'></Tile>
                <Tile inner='2' x='1' y='3'></Tile>
            </div>
        )
    }
}