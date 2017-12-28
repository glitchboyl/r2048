import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './../../../assets/style';

export default class Heading extends Component {
    render() {
        return (
            <View style={styles.flexContainer}>
                <Text style={styles.headingTitle}>2048</Text>
                <View style={styles.scoresContainer}>
                    <View
                        style={[
                        styles.scoreContainer, {
                            marginRight: 5
                        }
                    ]}>
                        <Text style={styles.scoreTitle}>SCORE</Text>
                        <Text style={styles.score}>0</Text>
                    </View>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.scoreTitle}>BEST</Text>
                        <Text style={styles.score}>404</Text>
                    </View>
                </View>
            </View>
        )
    }
}