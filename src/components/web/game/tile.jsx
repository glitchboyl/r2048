import React, {Component} from 'react';

export default class Tile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props;
        return (
            <div
                className={`tile tile-${props.inner} tile-position-${props.x}-${props.y} tile-new`}>
                <div className="tile-inner">{props.inner}</div>
            </div>
        )
    }
}