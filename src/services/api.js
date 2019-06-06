import axios from 'axios';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/search?apiKey=OafZS17C0Vqan5PNv9Qip3rOoMA4D4P0',
})

export { giphyApi }