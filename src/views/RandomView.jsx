import React, { Component } from 'react';
import { loadRandomBeer } from '../services/beers';
import Header from '../components/Header';
import BeerDetails from '../components/BeerDetails';

class RandomView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beer: null,
    };
  }
  componentDidMount() {
    loadRandomBeer()
      .then((data) => {
        this.setState({
          loaded: true,
          beer: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Header />
        <div>{this.state.loaded && <BeerDetails beer={this.state.beer} />}</div>
      </div>
    );
  }
}

export default RandomView;
