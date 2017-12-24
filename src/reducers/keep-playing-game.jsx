import {KEEP_PLAYING_GAME} from './../actions';
import storageManager from './../components/web/game/storage-manager';

const initialState = storageManager.getGameState()
    ? storageManager
        .getGameState()
        .keepPlaying
    : false;

export default(state = initialState, action) => {
    switch (action.type) {
        case KEEP_PLAYING_GAME:
            return action.keepPlaying;
        default:
            return state;
    }
}