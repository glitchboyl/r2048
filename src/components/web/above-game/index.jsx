import React, {Component} from 'react';
import RestartButton from './restart-button';

export default class AboveGame extends Component {
    render() {
        return (
            <div className="above-game">
                <p className="game-intro">Join the numbers and get to the <strong>2048 tile!</strong></p>
                <RestartButton></RestartButton>
            </div>
        )
    }
}