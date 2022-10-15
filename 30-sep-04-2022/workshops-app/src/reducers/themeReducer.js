import { TOGGLE_THEME } from "../actions/constants";

const initialState = {
    theme: 'light'
};

const themeReducer = ( curState = initialState, action ) => {
    switch( action.type ) {
        case TOGGLE_THEME:
            // set theme to the "opposite" of the current theme
            const newTheme = curState.theme === 'light' ? 'dark': 'light';

            // return what becomes the new state
            return {
                theme: newTheme
            };
        default:
            return curState;
    }
};

export default themeReducer;