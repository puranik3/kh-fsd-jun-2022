import { createStore, applyMiddleware } from 'redux';
import themeReducer from './reducers/themeReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// we shall set up the state along with the reducer
// const initialState = {
//     theme: 'light'
// };

const store = createStore( themeReducer, /*initialState,*/ composeWithDevTools( applyMiddleware() ) );

export default store;