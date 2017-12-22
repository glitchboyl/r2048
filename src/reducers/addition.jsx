import {ADDITION, ADDITION_OUT} from './../actions';

const initialState = {
    score: 0,
    show: false
};

export default(state = initialState, action) => {
    switch (action.type) {
        case ADDITION:
            return {score: action.addition, show: true};
        case ADDITION_OUT:
            return {
                ...state,
                show: false
            };
        default:
            return state;
    }
}