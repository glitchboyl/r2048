import React, {Component} from 'react';
import {Text} from 'react-native';
import styles from './../../../assets/style';

export default class Explanation extends Component {
    render() {
        return (
            <Text style={styles.explanation}>
                <Text style={styles.fontBold}>HOW TO PLAY:</Text> Use your <Text style={styles.fontBold}>finger</Text> to move the tiles. When two tiles with the same number touch, they <Text style={styles.fontBold}>merge into one!</Text>
            </Text>
        )
    }
}