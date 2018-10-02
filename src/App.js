import React, { Component } from 'react';
import './App.css';

const crypto  = require('crypto');

class App extends Component {

  componentWillMount() {

  }

  requestToken() {
    fetch("https://cors-anywhere.herokuapp.com/http://eventful.com/oauth/request_token", {
      method: 'POST',
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
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
    for (i=0; i<20; i++) {
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
