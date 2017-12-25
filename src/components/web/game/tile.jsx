import React, {Component} from 'react';

export default class Tile extends Component {
    render() {
        const {
            x,
            y,
            inner,
            fresh,
            merged,
            tileRef
        } = this.props;
        return (
            <div
                className={`tile tile-${inner} tile-position-${x + 1}-${y + 1} ${fresh
                ? 'tile-new'
                : (merged
                    ? 'tile-merged'
                    : '')}`}
                ref={tileRef}>
                <div className="tile-inner">{inner}</div>
            </div>
        )
    }
}