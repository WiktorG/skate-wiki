 
import reedux from 'reedux';
import store from '../../services/store';
import { giphyApi } from '../../services/api';

const initialState = {
    home: {
        nextPage: 0,
        gifs: [],
        fetching: true,
    },
    fav: {
        gifs: [],
        fetching: true,
    },
}

const FETCH_HOME_GIFS_REQUEST = 'FETCH_HOME_GIFS_REQUEST';
const FETCH_HOME_GIFS_SUCCESS = 'FETCH_HOME_GIFS_SUCCESS';
const FETCH_HOME_GIFS_ERROR = 'FETCH_HOME_GIFS_ERROR';


const fetchHomeGifs = params => dispatch => {
    dispatch({type: FETCH_HOME_GIFS_REQUEST});
    giphyApi.get('', {
        params: {
          q: 'skate+tricks+nestor+judkins',
        }
      }).then(res => res.data).then(data => {
          dispatch({type: FETCH_HOME_GIFS_SUCCESS, data: data});
      }).catch(err => {
          dispatch({type: FETCH_HOME_GIFS_ERROR});
      });   
}


const gifsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HOME_GIFS_REQUEST:
            return {
                ...state,
                home: {
                    ...state.home,
                    fetching: true,
                }
            }
        case FETCH_HOME_GIFS_SUCCESS:
            return {
                ...state,
                home: {
                    ...state.home,
                    nextPage: state.home.nextPage+1,
                    gifs: [...state.home.gifs, ...action.data.data],
                    fetching: false,
                }
            }
        case FETCH_HOME_GIFS_ERROR:
            return state
        default: 
            return state;
    }
}

const storePath = reedux(store)
const reducer = storePath('gifs', initialState);
reducer(gifsReducer);

export { fetchHomeGifs }