import React from 'react';

const BeerDetails = (props) => {
  return (
    <div>
      <img src={props.beer.image_url} alt="beer" />
      <h2>
        {props.beer.name} <span>{props.beer.attenuation_level}</span>
      </h2>
    </div>
  );
};
export default BeerDetails;
