import axios from "axios";

export default {
  fetchBeerByName(searchTerm) {
    return axios
      .get(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
      .then(res => res.data);
  },
  fetchRandomBeer() {
    return axios
      .get("https://api.punkapi.com/v2/beers/random")
      .then(res => res.data[0]);
  }
};
