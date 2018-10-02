import React, { Component } from 'react';
import './App.css';

const crypto  = require('crypto');

//app URL: https://event-oauth-test.herokuapp.com/

class App extends Component {

  componentWillMount() {
    this.requestToken()
  }

  requestToken() {
    const oauthSignature = crypto.createHmac('sha1', `POST&https://eventful.com/oauth/request_token%26oauth_consumer_key%3D${process.env.REACT_APP_KEY}%26oauth_nonce%3D${this.nonce()}%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D${Date.now()}`);

    fetch("http://eventful.com/oauth/request_token", {
      method: 'POST',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Authorization': {
                    'oauth_consumer_key': process.env.REACT_APP_KEY,
                    'oauth_signature_method': "HMAC-SHA1",
                    'oauth_timestamp': Date.now(),
                    'oauth_nonce': this.nonce(),
                    'oauth_signature': oauthSignature
        }
      },
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      },

      (error) => {
        console.log(error)
      }
    )
  }

  authorizeRequestToken() {
    fetch("https://cors-anywhere.herokuapp.com/http://eventful.com/oauth/authorize", {
      method: 'GET',
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      },

      (error) => {
        console.log(error)
      }
    )
  }

  accessToken() {
    fetch("https://cors-anywhere.herokuapp.com/http://eventful.com/oauth/access_token", {
      method: 'POST',
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      },

      (error) => {
        console.log(error)
      }
    )
  }

  nonce() {
    let text = '';
    let selection = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i=0; i<20; i++) {
            text += selection.charAt(Math.floor(Math.random()*selection.length));
        };
    return text;
  }

  render() {

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
