import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://imdb-top-100-movies.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
    'x-rapidapi-key': '158c081f67msh0d688ef9b06fd0ap11e404jsn64c0aa07866b'
  }
});

export default {
  getMovies() {
    return apiClient.get('/')
      .then(response => {
        console.log('API Response:', response);
        return response.data;
      })
      .catch(error => {
        console.error('API Error:', error.response ? error.response.data : error.message);
        throw error;
      });
  }
}
