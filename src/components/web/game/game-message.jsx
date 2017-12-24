import React, {Component} from 'react';
import {connect} from 'react-redux';

class GameMessage extends Component {
    render() {
        const {over, won, keepPlaying, inputManager} = this.props;
        return (
            <div
                className={`game-message ${won && !keepPlaying
                ? 'game-won'
                : (over
                    ? 'game-over'
                    : '')}`}>
                <p>{won && !keepPlaying
                        ? 'You win!'
                        : (over
                            ? 'Game over!'
                            : '')}</p>
                <div className="lower">
                    <a className="keep-playing-button" onClick={inputManager.keepPlaying}>Keep going</a>
                    <a className="retry-button" onClick={inputManager.restart}>Try again</a>
                </div>
            </div>
        )
    }
}
export default connect(({over, won, keepPlaying, inputManager}) => {
    return {over, won, keepPlaying, inputManager};
}, {})(GameMessage);