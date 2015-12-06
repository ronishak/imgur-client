var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';

var Secrets = require('../secrets');
var apiKey = Secrets.imgurKey;

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response){
      return response.json()
    })
  }
};
