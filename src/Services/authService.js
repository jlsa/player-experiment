import axios from 'axios';

const defaultOptions = {
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
};

const authService = axios.create(defaultOptions);

authService.interceptors.request.use(request => {
//   const token = localStorage.getItem('spotify-token')
//   if (token) {
//     request.headers.Authorization = `Bearer ${token}`
//   }

  return request;
});

authService.interceptors.request.use(response => {
  return response;
});
// spotifyService.interceptors.request.use(function (config) {
  
//   const token = localStorage.getItem('spotify-token');
  
//   config.Authorization = token ? `Bearer ${token}` : '';
  
//   return config;
// });

export default authService;
