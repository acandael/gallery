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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
