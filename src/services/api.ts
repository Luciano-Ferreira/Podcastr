import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://podcastr-mzozv0q8g-luciano-ferreira.vercel.app/api'
})