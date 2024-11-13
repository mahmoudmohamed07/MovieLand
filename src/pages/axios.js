import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    api_key : '?api_key=25962260f79628170f94e55d3e345a2a',
})


export default axiosInstance;