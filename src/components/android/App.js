import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './../../assets/style';
import Heading from './heading';
import AboveGame from './above-game';
import Game from './game';
import Explanation from './explanation';

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.container}>
          <Heading/>
          <AboveGame/>
          <Game/>
          <Explanation/>
        </View>
      </View>
    )
  }
}