import axios from 'axios';

const accesstoken = sessionStorage.getItem('access');
const refreshToken = sessionStorage.getItem('refresh');

const baseURL = 'http://localhost:8000/api/v1/';

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: accesstoken ? `Bearer ${accesstoken}` : '',
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

export default axiosInstance;