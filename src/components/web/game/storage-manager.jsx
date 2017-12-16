class storageManager {
    constructor() {
        this.bestScoreKey = "bestScore";
        this.gameStateKey = "gameState";
        this.noticeClosedKey = "noticeClosed";
        this.storage = window.localStorage;
    }
    getBestScore() {
        return this
            .storage
            .getItem(this.bestScoreKey) || 0;
    }
    setBestScore(score) {
        this
            .storage
            .setItem(this.bestScoreKey, score);
    }
    getGameState() {
        return JSON.parse(this.storage.getItem(this.gameStateKey)) || null;
    }
    setGameState(gameState) {
        this
            .storage
            .setItem(this.gameStateKey, JSON.stringify(gameState));
    }
    clearGameState() {
        this
            .storage
            .removeItem(this.gameStateKey);
    }
    getNoticeClosed() {
        return this
            .storage
            .getItem(this.noticeClosedKey) || 'false';
    }
    setNoticeClosed(noticeClosed) {
        this
            .storage
            .setItem(this.noticeClosedKey, noticeClosed.toString())
    }
}

export default new storageManager();