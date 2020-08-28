import React, { Component } from 'react';
import { loadBeers } from '../services/beers';
import Header from '../components/Header';

class BeersView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beers: null,
    };
  }
  componentDidMount() {
    loadBeers()
      .then((data) => {
        this.setState({
          loaded: true,
          beers: data,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <Header />
        <ul>
          {this.state.loaded &&
            this.state.beers.map((beer) => {
              return (
                <li key={beer.id}>
                  <img src={beer.image_url} alt="beer" />
                  <h4>{beer.name}</h4>
                  <p>{beer.description}</p>
                  <small>Created By: {beer.name}</small>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default BeersView;
