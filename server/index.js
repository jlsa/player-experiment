const express = require('express')
const request = require('request');
const dotenv = require('dotenv');

const port = 4001
const clientPort = 3000

global.access_token = ''

dotenv.config()

var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

var spotify_redirect_uri = `http://localhost:${clientPort}/auth/callback`

var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var app = express();

app.get('/auth/login', (req, res) => {

  const scopes = [
    'streaming', 
    'user-read-email',
    'user-read-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-modify-private',
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-follow-modify',
    'user-follow-read',
    'user-library-modify',
    'user-library-read',
    'app-remote-control',
    'user-read-playback-position',
    'user-top-read',
    'user-read-recently-played'
  ];
  
  const scope = scopes.join(' ');
  var state = generateRandomString(16);

  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: spotify_redirect_uri,
    state: state
  })

  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
})

app.get('/auth/callback', (req, res) => {

  var code = req.query.code;

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: spotify_redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      access_token = body.access_token;
      // res.json({ access_token })
      res.redirect('/')
    }
  });
})

app.get('/auth/token', (req, res) => {
  res.json({ access_token: access_token})
})

app.get('/auth/get-playlist', (req, res) => {
  
  var options = {
    url: 'https://api.spotify.com/v1/users/1170108177/playlists?offset=20&limit=20',
    headers: {
      'Authorization': 'Bearer ' + access_token,
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    json: true
  };

  request.get(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.json({
        href: body.href,
        playlists: body.items,
        limit: body.limit,
        next: body.next,
        offset: body.offset,
        previous: body.previous,
        total: body.total
      })
      // res.redirect('/')
    } else {
      res.json({ error });
    }
  })
});

app.get('/auth/get-user-playlists', (req, res) => {
  var options = {
    url: 'https://api.spotify.com/v1/users/1170108177/playlists',
    headers: {
      'Authorization': 'Bearer ' + access_token,
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    json: true
  };

  request.get(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // access_token = body.access_token;
      res.json({ body })
      // res.redirect('/')
    } else {
      res.json({ error });
    }
  })
});

app.get('/spotify/player/devices', (req, res) => {
  var options = {
    headers: {
      'Authorization': 'Bearer ' + access_token,
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    json: true
  };

  request.get(
    'https://api.spotify.com/v1/me/player/devices', 
    options, 
    function(error, response, body) {
      res.json({
        error,
        response,
        body
      });
      // if (!error && response.statusCode === 200) {
      //   console.log(body);
      //   res.redirect('/')
      // }
      // res.json({
      //   devices: []
      // })
    }
  );

  // 
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
