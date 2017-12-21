import React, {Component} from 'react';
import Gridiron from './gridiron';
import TileContainer from './tile-container';
import GameMessage from './game-message';

export default class Game extends Component {
    constructor() {
        super();
        this.state = {
            over: false,
            won: false,
            keepPlaying: false
        }
    }
    gameOver(over) {
        this.setState({over});
    }
    gameWon(won) {
        this.setState({won});
    }
    keepPlayingGame(keepPlaying) {
        this.setState({keepPlaying});
    }
    render() {
        const {state, gameOver, gameWon, keepPlayingGame} = this;
        const {over, won, keepPlaying} = state;
        return (
            <div className="game-container">
                <Gridiron></Gridiron>
                <TileContainer
                    gameOver={gameOver}
                    gameWon={gameWon}
                    keepPlayingGame={keepPlayingGame}></TileContainer>
                <GameMessage over={over} won={won} keepPlaying={keepPlaying}></GameMessage>
            </div>
        )
    }
}