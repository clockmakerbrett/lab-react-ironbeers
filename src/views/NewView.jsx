import React, { Component } from 'react';
//import { uploadNewBeer } from '../services/beers';
import Header from '../components/Header';
import { uploadNewBeer } from '../services/beers';

class NewView extends Component {
  constructor() {
    super();
    this.state = {
      beer: [],
    };
  }
  handleSubmit() {
    uploadNewBeer();
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <form method="POST" onSubmit={this.handleSubmit}>
            <label htmlFor="name-input">Name:</label>
            <input id="name-input" type="text" placeholder="name" name="name" />
            <label htmlFor="tagline-input">Tagline:</label>
            <input
              id="tagline-input"
              type="text"
              placeholder="tagline"
              name="tagline"
            />
            <label htmlFor="description-input">Description:</label>
            <input
              id="description-input"
              type="text"
              placeholder="description"
              name="description"
            />
            <label htmlFor="first-brewed-input">First Brewed:</label>
            <input
              id="first-brewed-input"
              type="text"
              placeholder="first brewed"
              name="first_brewed"
            />
            <label htmlFor="brewers-tips-input">Brewers Tips:</label>
            <input
              id="brewers-tips-input"
              type="text"
              placeholder="brewers tips"
              name="brewers_tips"
            />
            <label htmlFor="attenuation-level-input">Attenuation Level:</label>
            <input
              id="attentuation-level-input"
              type="number"
              placeholder="attenuation level"
              name="attenuation_level"
            />
            <label htmlFor="contributed-by-input">Contributed By:</label>
            <input
              id="contributed-by-input"
              type="text"
              placeholder="contributed by"
              name="contributed_by"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewView;
