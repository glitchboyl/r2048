import React, {Component} from 'react';
import {View, Text, Dimensions, Animated} from 'react-native';
import styles from './../../../assets/style';

export default class Tile extends Component {
    constructor() {
        super();
        this.state = {
            scale: new Animated.Value(0)
        }
    }
    componentDidMount() {
        const {fresh} = this.props;
        if (fresh) 
            Animated.timing(this.state.scale, {
                toValue: 1,
                duration: 233,
                useNativeDriver: true
            }).start();
        }
    render() {
        const {inner, style, fresh, merged} = this.props;
        if (fresh) 
            style.transform.push({scale: this.state.scale});
        return (
            <Animated.View style={[styles.tile, style]}>
                <Text
                    style={[
                    styles.tileInner,
                    styles[`tile-${inner}`]
                ]}>{inner}</Text>
            </Animated.View>
        )
    }
}