import React, { Component } from 'react';
import api from './config';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Photo from './components/Photo';
import SearchBar from './components/SearchBar';
import PageNotFound from './components/PageNotFound';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      dogs: [],
      computers: [],
      loading: true
    };
  }

  componentDidMount() {
    this.mainSearch('cows', 'cows');
  }

  mainSearch = (query, input) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=16&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({
          [input]: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching the data', error);
      });
  };

  loading = () => this.state.loading;

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <SearchBar onSearch={this.mainSearch} />
          <Nav />
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Photo data={this.state.cows} />}
              />
              <Route
                exact
                path="/cats"
                render={() => (
                  <Photo
                    mainSearch={this.mainSearch('cats', 'cats')}
                    data={this.state.cats}
                  />
                )}
              />
              <Route
                exact
                path="/dogs"
                render={() => (
                  <Photo
                    mainSearch={this.mainSearch('dogs', 'dogs')}
                    data={this.state.dogs}
                  />
                )}
              />
              <Route
                exact
                path="/computers"
                render={() => (
                  <Photo
                    mainSearch={this.mainSearch('computers', 'computers')}
                    data={this.state.computers}
                  />
                )}
              />
              <Route
                exact
                path="/results"
                render={() => <Photo data={this.state.results} />}
              />
              <Route component={PageNotFound} />
            </Switch>
          )}
        </div>
      </BrowserRouter>
    );
  }
}
