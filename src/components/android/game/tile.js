import React, {Component} from 'react';
import {View, Text, Dimensions, Animated} from 'react-native';
import styles from './../../../assets/style';

export default class Tile extends Component {
    constructor(props) {
        super(props);
        const {x, y, prevPosition} = props;
        this.spacing = Dimensions
            .get('window')
            .width > 500
            ? 121.25
            : (Dimensions.get('window').width - 50) / 4;
        this.state = {
            translateX: new Animated.Value(!!prevPosition
                ? this.spacing * prevPosition.x
                : this.spacing * x),
            translateY: new Animated.Value(!!prevPosition
                ? this.spacing * prevPosition.y
                : this.spacing * y),
            scale: new Animated.Value(0)
        }
    }
    componentDidMount() {
        const {x, y, prevPosition, fresh, merged} = this.props;
        if (!!prevPosition) 
            Animated.timing(x == prevPosition.x
                ? this.state.translateY
                : this.state.translateX, {
                toValue: x == prevPosition.x
                    ? this.spacing * y
                    : this.spacing * x,
                duration: 100,
                useNativeDriver: true
            }).start();
        if (fresh) 
            Animated.timing(this.state.scale, {
                toValue: 1,
                duration: 280,
                useNativeDriver: true
            }).start();
        if (merged) 
            Animated.sequence([
                Animated.timing(this.state.scale, {
                    toValue: 1.2,
                    duration: 150,
                    useNativeDriver: true
                }),
                Animated.timing(this.state.scale, {
                    toValue: 1,
                    duration: 150,
                    useNativeDriver: true
                })
            ]).start();
        }
    render() {
        const {inner, fresh, merged} = this.props;
        const transform = [];
        transform.push({translateX: this.state.translateX});
        transform.push({translateY: this.state.translateY});
        if (fresh || merged) 
            transform.push({scale: this.state.scale});
        return (
            <Animated.View
                style={[styles.tile, {
                    transform
                }]}>
                <Text
                    style={[
                    styles.tileInner,
                    styles[`tile-${inner}`]
                ]}>{inner}</Text>
            </Animated.View>
        )
    }
}