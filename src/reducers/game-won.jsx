import {GAME_WON} from './../actions';
import storageManager from './../components/web/game/storage-manager';

const initialState = storageManager.getGameState()
    ? storageManager
        .getGameState()
        .won
    : false;

export default(state = initialState, action) => {
    switch (action.type) {
        case GAME_WON:
            return action.won;
        default:
            return state;
    }
}