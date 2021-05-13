import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'd0f3375ebe0460f600d03398c1490da6',
        language: 'es-ES'
    }
});


export default movieDB;


