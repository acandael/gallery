import React, { Component } from 'react';
import './App.css';
import apiKey from './config.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Import components
import Header from './components/Header';
import Nav from './components/Nav';
import SearchResults from './components/SearchResults';

// Create a variable to store the API key
const api = apiKey;

class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: [],
      loading: true
    };
  }

  componentDidMount() {
    this.mainSearch();
    this.catSearch();
    this.dogSearch();
    this.computerSearch();
  }

  mainSearch = (query = 'cats') => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({
          mainPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function(error) {
        console.log('Error fetching and parsing data', error);
      });
  };

  catSearch = (query = 'cats') => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({
          catPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function(error) {
        console.log('Error fetching and parsing data', error);
      });
  };

  dogSearch = (query = 'dogs') => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({
          dogPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function(error) {
        console.log('Error fetching and parsing data', error);
      });
  };

  computerSearch = (query = 'computers') => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({
          computerPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function(error) {
        console.log('Error fetching and parsing data', error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                this.state.loading ? (
                  <p> Loading...</p>
                ) : (
                  <SearchResults data={this.state.mainPics} />
                )
              }
            />
            <Route
              exact
              path="/cats"
              render={() =>
                this.state.loading ? (
                  <p> Loading...</p>
                ) : (
                  <SearchResults data={this.state.catPics} />
                )
              }
            />
            <Route
              exact
              path="/dogs"
              render={() =>
                this.state.loading ? (
                  <p> Loading...</p>
                ) : (
                  <SearchResults data={this.state.dogPics} />
                )
              }
            />
            <Route
              exact
              path="/computers"
              render={() =>
                this.state.loading ? (
                  <p> Loading...</p>
                ) : (
                  <SearchResults data={this.state.computerPics} />
                )
              }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
