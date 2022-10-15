/**
 * An action creator is a function that creates an action (an object with a "type" property), and returns it.
 */
import { TOGGLE_THEME  } from "./constants";

const toggleTheme = () => {
    return {
        type: TOGGLE_THEME
    };
};

export {
    toggleTheme
};