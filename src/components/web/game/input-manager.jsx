class inputManager {
    constructor() {
        this.events = {};
    }
    listen = (gameContainer) => {
        const map = {
            37: 3, // left
            38: 0, // up
            39: 1, // right
            40: 2, // down
            65: 3, // A
            68: 1, // D
            83: 2, // S
            87: 0, // W
        }
        const [eventTouchstart,
            eventTouchmove,
            eventTouchend] = window.navigator.msPointerEnabled
            ? ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'] // IE10
            : ['touchstart', 'touchmove', 'touchend']; // other
        let startX,
            startY;
        document.addEventListener('keydown', event => {
            const modifiers = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
            const mapped = map[event.which];
            if (!modifiers) {
                if (mapped !== void 0) {
                    event.preventDefault();
                    this.emit('move', mapped);
                } else if (event.which === 82) { // R key restarts the game
                    event.preventDefault();
                    this.restart();
                }
            }
        })
        gameContainer.addEventListener(eventTouchstart, e => {
            ([startX, startY] = window.navigator.msPointerEnabled
                ? [e.pageX, e.pageY]
                : [e.changedTouches[0].clientX, e.changedTouches[0].clientY]);
        })
        gameContainer.addEventListener(eventTouchmove, e => {
            e.preventDefault();
        })
        gameContainer.addEventListener(eventTouchend, e => {
            const [endX,
                endY] = window.navigator.msPointerEnabled
                ? [e.pageX, e.pageY]
                : [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
            const [dx,
                dy] = [
                startX - endX,
                startY - endY
            ];
            const [absDx,
                absDy] = [
                Math.abs(dx),
                Math.abs(dy)
            ];
            if (Math.max(absDx, absDy) > 10) 
                this.emit('move', absDx > absDy
                    ? (dx > 0
                        ? 3
                        : 1)
                    : (dy > 0
                        ? 0
                        : 2));
            }
        )
    }
    on = (event, callback) => {
        if (!this.events[event]) 
            this.events[event] = [];
        this
            .events[event]
            .push(callback);
    }
    emit = (event, data) => {
        if (this.events[event]) 
            this.events[event].forEach(callback => {
                callback(data);
            });
        }
    restart = () => {
        this.emit('restart');
    }
    keepPlaying = () => {
        this.emit('keepPlaying');
    }
}

export default new inputManager();