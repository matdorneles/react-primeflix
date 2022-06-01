import axios from 'axios';

// base url: https://api.themoviedb.org/3/
// API url: movie/now_playing?api_key=0eb66b13c99835c4287f68d05cde5f43

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;