import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './../../../assets/style';

export default class AboveGame extends Component {
    render() {
        return (
            <View
                style={[
                styles.flexContainer, {
                    marginTop: 15
                }
            ]}>
                <Text style={styles.gameIntro}>
                    Join the numbers and get to the&nbsp;
                    <Text style={styles.fontBold}>2048 tile</Text>!
                </Text>
                <TouchableOpacity style={styles.restartButton} activeOpacity={1}>
                    <Text style={styles.restartButtonText}>New Game</Text>
                </TouchableOpacity>
            </View>
        )
    }
}