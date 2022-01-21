const express = require('express');
const request = require('request');
const dotenv = require('dotenv');

global.access_token = ''

dotenv.config();
const port = process.env.API_PORT;

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const spotify_redirect_uri = 'http://localhost:3000/auth/callback';

const app = express();

const generateRandomString = (length) => {
  let randomString = '';
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    randomString += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }
  return randomString;
}

app.get('/', (req, res) => {
  // console.log(res, req);
  res.send('hi');
})

app.get('/auth/login', (req, res) => {
  const scope = 'streaming user-read-email user-read-private';
  const state = generateRandomString(16);

  const auth_query_parameters = new URLSearchParams({
    response_type: 'code',
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: spotify_redirect_uri,
    state: state
  });

  res.redirect(`https://accounts.spotify.com/authorize/?${
    auth_query_parameters.toString()
  }`);
});

app.get('/auth/callback', (req, res) => {
  const code = req.query.code;
  
  const authorizationStr = Buffer.from(
    `${spotify_client_id}:${spotify_client_secret}`
  ).toString('base64');

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: spotify_redirect_uri,
      grant_type: 'authorization_code'
    },
    header: {
      'Authorization': `Basic ${authorizationStr}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true
  }

  request.post(authOptions, (error, response, body) => {
    console.log('body', body);
    console.log('error', error);
    console.log('response', response);
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.redirect('/testkoele')
    }
  })
});

app.get('/auth/token', (req, res) => {
  res.json({ access_token: access_token })
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});