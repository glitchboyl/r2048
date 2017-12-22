import React, {Component} from 'react';
import {connect} from 'react-redux';

class RestartButton extends Component {
    render() {
        const inputManager = this.props.inputManager;
        return (
            <a className="restart-button" onClick={inputManager.restart}>New Game</a>
        )
    }
}

export default connect(({inputManager}) => {
    return {inputManager};
}, {})(RestartButton);