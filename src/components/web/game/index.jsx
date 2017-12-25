import React, {Component} from 'react';
import Gridiron from './gridiron';
import TileContainer from './tile-container';
import GameMessage from './game-message';

export default class Game extends Component {
    render() {
        return (
            <div className="game-container" ref={this.props.gameRef}>
                <Gridiron></Gridiron>
                <TileContainer gameContainer={this.props.gameContainer}></TileContainer>
                <GameMessage></GameMessage>
            </div>
        )
    }
}