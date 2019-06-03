 
import reedux from 'reedux';
import store from '../../services/store';
import { giphyApi } from '../../services/api';
import { 
    FETCH_HOME_GIFS_REQUEST,
    FETCH_HOME_GIFS_SUCCESS,
    FETCH_HOME_GIFS_ERROR,
    FETCH_FAV_GIFS_REQUEST,
    FETCH_FAV_GIFS_SUCCESS,
    FETCH_FAV_GIFS_ERROR,
} from '../../services/actions';

const initialState = {
    home: {
        gifs: [],
        fetching: true,
    },
    fav: {
        gifs: [],
        fetching: true,
    },
}

const fetchHomeGifs = params => dispatch => {
    dispatch({type: FETCH_HOME_GIFS_REQUEST});
    giphyApi.get('', {
        params: {
          q: 'skate+tricks+nestor+judkins',
          limit: 8,
        }
      }).then(res => res.data).then(data => {
          dispatch({type: FETCH_HOME_GIFS_SUCCESS, data: data});
      }).catch(err => {
          dispatch({type: FETCH_HOME_GIFS_ERROR});
      });   
}

const fetchFavouriteGifs = params => dispatch => {
    dispatch({type: FETCH_FAV_GIFS_REQUEST});
    try { 
        let favouriteGifs = JSON.parse(localStorage.getItem('favouriteGifs'));
        if (favouriteGifs === null) {
            dispatch({type: FETCH_FAV_GIFS_ERROR});
        } else {
            dispatch({type: FETCH_FAV_GIFS_SUCCESS, data: favouriteGifs});    
        }
    } catch {

    }
}

const handleFavouriteGifAddRemove = gif => dispatch => {
    const necessaryGifData = { 
        id: gif.id,
        title: gif.title,
        images: {
            downsized_medium: {
                url: gif.images.downsized_medium.url,
            }
        }
    }
    try {
        let favouriteGifs = JSON.parse(localStorage.getItem('favouriteGifs'));
        if (favouriteGifs === null) {
            localStorage.setItem('favouriteGifs', JSON.stringify([necessaryGifData]))
        } else {
            let found = false;
            let foundIndex = null;
            favouriteGifs.forEach((localGif, i) => {
                if (localGif.id === gif.id) {
                    found = localGif.id === gif.id;
                    foundIndex = i;
                }
            });
            if (found && foundIndex !== null) {
                favouriteGifs.splice(foundIndex, 1);
                localStorage.setItem('favouriteGifs', JSON.stringify(favouriteGifs))
            } else {
                localStorage.setItem('favouriteGifs', JSON.stringify([...favouriteGifs, necessaryGifData]))
            }
        }
    } catch {
        localStorage.removeItem('favouriteGifs');
    }
    dispatch(fetchFavouriteGifs());
    dispatch(fetchHomeGifs());
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
                    gifs: [...action.data.data],
                    fetching: false,
                }
            }
        case FETCH_HOME_GIFS_ERROR:
            return state
        case FETCH_FAV_GIFS_SUCCESS: 
            return {
                ...state,
                fav: {
                    ...state.fav,
                    gifs: [...action.data],
                    fetching: false,
                }
            }
        case FETCH_FAV_GIFS_ERROR: 
            return {
                ...state,
                fav: {
                    ...state.fav,
                    gifs: [],
                    fetching: false,
                }
            }
        default: 
            return state;
    }
}

const storePath = reedux(store)
const reducer = storePath('gifs', initialState);
reducer(gifsReducer);

export { fetchHomeGifs, fetchFavouriteGifs, handleFavouriteGifAddRemove }