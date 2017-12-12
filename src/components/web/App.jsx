import React, {Component} from 'react';
import Heading from './heading';
import AboveGame from './above-game';
import Game from './game';
import Explanation from './explanation';
import Sharing from './sharing';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Heading></Heading>
        <AboveGame></AboveGame>
        <Game></Game>
        <Explanation></Explanation>
        <hr/>
        <Sharing></Sharing>
      </div>
    );
  }
}