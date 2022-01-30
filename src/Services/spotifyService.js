import axios from 'axios';

const defaultOptions = {
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
};

const spotifyService = axios.create(defaultOptions);

spotifyService.interceptors.request.use(request => {
  const token = localStorage.getItem('spotify-token')
  if (!!token) {
    request.headers.Authorization = `Bearer ${token}`
  }

  return request;
})

spotifyService.interceptors.request.use(response => {
  return response;
})
// spotifyService.interceptors.request.use(function (config) {
  
//   const token = localStorage.getItem('spotify-token');
  
//   config.Authorization = token ? `Bearer ${token}` : '';
  
//   return config;
// });

export default spotifyService;
