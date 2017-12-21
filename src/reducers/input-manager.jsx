import inputManager from './../components/web/game/input-manager';

const initialState = inputManager;

export default(state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}