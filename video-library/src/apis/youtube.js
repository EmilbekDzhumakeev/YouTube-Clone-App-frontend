import axios from 'axios';
const KEY = 'AIzaSyAACIBMXcV3cB9S7VnBOvCuLSDZU2nV0Tk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})