export default class Tiler {
    constructor(position, value) {
        this.x = position.x;
        this.y = position.y;
        this.value = value || 2;
        this.prevPosition = null;
        this.mergedFrom = null;
    }
    savePosition() {
        this.prevPosition = {
            x: this.x,
            y: this.y
        };
    }
    updatePosition(position) {
        this.x = position.x;
        this.y = position.y;
    }
    serialize() {
        return {
            position: {
                x: this.x,
                y: this.y
            },
            value: this.value
        }
    }
}