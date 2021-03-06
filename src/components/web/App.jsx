import React, {Component} from 'react';
import Heading from './heading';
import AboveGame from './above-game';
import Game from './game';
import Explanation from './explanation';
import Note from './note';
import Sharing from './sharing';

export default class App extends Component {
  gameContainer = () => {
    return this.gameRef;
  }
  render() {
    return (
      <div className="container">
        <Heading/>
        <AboveGame/>
        <Game gameRef={game => this.gameRef = game} gameContainer={this.gameContainer}/>
        <Explanation/>
        <hr/>
        <Note/>
        <hr/>
        <Sharing/>
      </div>
    );
  }
}