import {SCORE} from './../actions/action-types';

const initialState = 0;

export default(state = initialState, action) => {
    switch (action.type) {
        case SCORE:
            return {
                score: state + action.score
            };
        default:
            return state;
    }
}