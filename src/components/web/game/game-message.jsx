import React, {Component} from 'react';
import {connect} from 'react-redux';

class GameMessage extends Component {
    render() {
        const {over, won, keepPlaying, inputManager} = this.props;
        return (
            <div
                className={`game-message ${won
                ? 'game-won'
                : (over
                    ? 'game-over'
                    : '')}`}>
                <p>{won
                        ? 'You win!'
                        : (over
                            ? 'Game over!'
                            : '')}</p>
                <div className="lower">
                    <a className="keep-playing-button">Keep going</a>
                    <a className="retry-button">Try again</a>
                </div>
            </div>
        )
    }
}
export default connect(({inputManager}) => {
    return {inputManager};
})(GameMessage);