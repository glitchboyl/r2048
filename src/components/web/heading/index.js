import React, {Component} from 'react';

export default class Heading extends Component {
    render() {
        return (
            <div className="heading">
                <h1 className="title">2048</h1>
                <div className="scores-container">
                    <div className="score-container">0</div>
                    <div className="best-container">7336</div>
                </div>
            </div>
        )
    }
}