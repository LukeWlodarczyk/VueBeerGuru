import axios from "axios";

export default {
  fetchBeerById(id) {
    return axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .then(res => res.data[0]);
  }
};
