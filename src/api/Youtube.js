import axios from 'axios';

const KEY = 'AIzaSyARhtNRNuzALqIOOvVeSDbnAVfDJG9_2_c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});