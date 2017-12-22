import {SCORE, RESET_SCORE} from './../actions';
import storageManager from './../components/web/game/storage-manager';

const initialState = storageManager.getGameState()
    ? storageManager
        .getGameState()
        .score
    : 0;

export default(state = initialState, action) => {
    switch (action.type) {
        case SCORE:
            return state + action.score;
        case RESET_SCORE:
            return 0;
        default:
            return state;
    }
}