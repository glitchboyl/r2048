import React, {Component} from 'react';

export default class Tile extends Component {
    render() {
        const props = this.props;
        return (
            <div
                className={`tile tile-${props.inner} tile-position-${props.x + 1}-${props.y + 1} tile-new`}>
                <div className="tile-inner">{props.inner}</div>
            </div>
        )
    }
}