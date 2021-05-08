import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://podcastr-mauve.vercel.app/api'
})