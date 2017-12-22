import {BEST_SCORE} from './../actions';
import storageManager from './../components/web/game/storage-manager';

const initialState = storageManager.getBestScore();

export default(state = initialState, action) => {
    switch (action.type) {
        case BEST_SCORE:
            return action.score;
        default:
            return state;
    }
}