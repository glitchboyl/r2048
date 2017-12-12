import React, {Component} from 'react';
import Grid from './grid';
import TileContainer from './tile-container';

export default class Game extends Component {
    render() {
        return (
            <div className="game-container">
                <Grid></Grid>
                <TileContainer></TileContainer>
            </div>
        )
    }
}