import React, {Component} from 'react';
import {connect} from 'react-redux';

class Heading extends Component {
    render() {
        const {score, bestScore, addition, show} = this.props;
        return (
            <div className="heading">
                <h1 className="title">2048</h1>
                <div className="scores-container">
                    <div className="score-container">
                        {score}
                        {show
                            ? <div className="score-addition">{`+${addition}`}</div>
                            : ''}

                    </div>
                    &nbsp;
                    <div className="best-container">{bestScore}</div>
                </div>
            </div>
        )
    }
}

export default connect(({score, bestScore, addition}) => {
    return {score, bestScore, addition: addition.score, show: addition.show};
}, {})(Heading);