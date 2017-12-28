import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './../../../assets/style';

export default class Gridiron extends Component {
    render() {
        return (
            <View style={styles.gridiron}>
                <View style={styles.gridRow}>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                </View>
                <View style={styles.gridRow}>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                </View>
                <View style={styles.gridRow}>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                </View>
                <View
                    style={[
                    styles.gridRow, {
                        marginBottom: 0
                    }
                ]}>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                    <View style={styles.gridCell}></View>
                </View>
            </View>
        )
    }
}