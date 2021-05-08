import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://podcastr-mcyph5dcm-luciano-ferreira.vercel.app/api'
})