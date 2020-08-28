import React, { Component } from 'react';
import { loadBeer } from '../services/beers';
import Header from '../components/Header';
import BeerDetails from '../components/BeerDetails';

class SingleView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beers: null,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    loadBeer(id)
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

export default SingleView;
