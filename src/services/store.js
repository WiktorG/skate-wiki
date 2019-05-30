import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = () => ({})
const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = composeWithDevTools(
    middlewareEnhancer
);

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;