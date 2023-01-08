import React, {Component} from 'react';

export default class Note extends Component {
    render() {
        return (
            <p className="note">
                <strong className="important">Note:</strong> The game on this site is power by <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>. Apps for <a href="#" target="_blank" rel="noopener noreferrer">Android</a> are also available. Created by <a href="https://github.com/glitchboyl" target="_blank" rel="noopener noreferrer">glitchboyl</a>. Inspired by <a href="https://gabrielecirulli.github.io/2048/" target="_blank" rel="noopener noreferrer">Gabriele Cirulli</a>.
            </p>
        )
    }
}
