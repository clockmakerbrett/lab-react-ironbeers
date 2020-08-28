import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com',
});

export const loadBeers = () => {
  return instance.get('/beers').then((response) => {
    return response.data;
  });
};

export const loadRandomBeer = () => {
  return instance.get('/beers/random').then((response) => {
    return response.data;
  });
};

export const loadBeer = (id) => {
  return instance.get(`/beers/${id}`).then((response) => {
    return response.data;
  });
};

export const uploadNewBeer = (data) => {
  const {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by,
  } = data;
  return instance
    .post('/beers/new', {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    })
    .then((response) => {
      console.log(response);
    });
};
