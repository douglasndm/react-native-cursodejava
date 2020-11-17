import EnvConfig from 'react-native-config';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: EnvConfig.YOUTUBE_API_KEY,
    },
});

export default api;
