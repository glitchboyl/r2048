import React, {Component} from 'react';
import {View} from 'react-native';
import Gridiron from './gridiron';
import TileContainer from './tile-container';
import styles from './../../../assets/style';

export default class Game extends Component {
    render() {
        return (
            <View style={styles.gameContainer}>
                <Gridiron/>
                <TileContainer></TileContainer>
            </View>
        )
    }
}