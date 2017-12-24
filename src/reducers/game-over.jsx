import {GAME_OVER} from './../actions';
import storageManager from './../components/web/game/storage-manager';

const initialState = storageManager.getGameState()
    ? storageManager
        .getGameState()
        .over
    : false;

export default(state = initialState, action) => {
    switch (action.type) {
        case GAME_OVER:
            return action.over;
        default:
            return state;
    }
}