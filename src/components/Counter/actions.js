 
import reedux from 'reedux';
import store from '../../services/store';

const initialState = {
    number: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

const storePath = reedux(store)
const reducer = storePath('counter', initialState);
reducer(counterReducer);