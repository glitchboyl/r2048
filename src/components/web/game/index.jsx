import React, {Component} from 'react';
import Gridiron from './gridiron';
import TileContainer from './tile-container';

export default class Game extends Component {
    render() {
        return (
            <div className="game-container">
                <Gridiron></Gridiron>
                <TileContainer></TileContainer>
            </div>
        )
    }
}