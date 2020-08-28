import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>IronBeers</h1>
        <Link to="/beers">
          <img src="/images/all.jpg" alt="beer" />
          <h3>All Beers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            laudantium assumenda laborum non sit magni perferendis aliquam
            repudiandae voluptatum! Quo, itaque quos.
          </p>
        </Link>
        <Link to="/random-beer">
          <img src="/images/random.jpg" alt="beer" />
          <h3>Random Beers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            laudantium assumenda laborum non sit magni perferendis aliquam
            repudiandae voluptatum! Quo, itaque quos.
          </p>
        </Link>
        <Link to="/new-beer">
          <img src="/images/new.jpg" alt="beer" />
          <h3>New Beers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            laudantium assumenda laborum non sit magni perferendis aliquam
            repudiandae voluptatum! Quo, itaque quos.
          </p>
        </Link>
      </div>
    );
  }
}

export default HomeView;
