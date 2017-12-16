class inputManager {
    constructor() {
        this.events = {};
    }
    listen() {
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
        document.addEventListener('keydown', event => {
            const modifiers = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
            const mapped = map[event.which];
            if (!modifiers) {
                if (mapped !== void 0) {
                    event.preventDefault();
                    this.emit('move', mapped);
                } else if (event.which === 82) {
                    // R key restarts the game
                    event.preventDefault();
                    this.restart();
                }
            }
        })
    }
    on(event, callback) {
        if (!this.events[event]) 
            this.events[event] = [];
        this
            .events[event]
            .push(callback);
    }
    emit(event, data) {
        if (this.events[event]) 
            this.events[event].forEach(callback => {
                callback(data);
            });
        }
    restart() {
        this.emit('restart');
    }
    keepPlaying() {
        this.emit('keepPlaying');
    }
}

export default new inputManager();