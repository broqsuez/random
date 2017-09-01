import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: null,
      author: ''
    };

    this.getQuotes = this.getQuotes.bind(this);
  }

  componentDidMount() {
    this.getQuotes();
  }

  getQuotes() {
    const url =
      'https://random-quote-generator.herokuapp.com/api/quotes/random';
    axios
      .get(url)
      .then(data =>
        this.setState({ quote: data.data.quote, author: data.data.author })
      );
    console.log('clicked');
  }

  render() {
    const tweet = `https://twitter.com/intent/tweet?text='${this.state
      .quote} - ${this.state.author}`;
    return (
      <div className="content">
        <h1 className="title">Quotes Generator</h1>
        <div className="app">
          <div className="quote">
            {!this.state.quote ? (
              <p>Loading</p>
            ) : (
              <p className="quote__text">{this.state.quote}</p>
            )}
            <p className="quote__author">
              {' '}
              &mdash; {this.state.author} &mdash;
            </p>
          </div>
          <div className="btn-l">
            <button className="btn btn__qoute" onClick={this.getQuotes}>
              New Quote!
            </button>
            <button className="btn btn__tweet">
              <a href={tweet} target="_blank">
                <i className="fa fa-twitter" /> Tweet!
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
