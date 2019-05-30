 
import { dispatch } from 'redux';
import reedux from 'reedux';
import store from '../../services/store';

const INCREASE_COUNTER = 'INCREASE_COUNTER';
const DECREASE_COUNTER = 'DECREASE_COUNTER';

const initialState = {
    number: 0
}

const increaseCounter = params => dispatch => {
    dispatch({type: INCREASE_COUNTER});
}

const decreaseCounter = params => dispatch => {
    dispatch({type: DECREASE_COUNTER});
}




const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER: 
            return {
                ...state,
                number: state.number + 1,
            }
        case DECREASE_COUNTER: 
            return {
                ...state,
                number: state.number - 1,
            }
        default: 
            return state;
    }
}

const storePath = reedux(store)
const reducer = storePath('counter', initialState);
reducer(counterReducer);

export { increaseCounter, decreaseCounter }