import axios from 'axios';

export default {
  fetchBeers(page) {
    return axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=21`)
      .then(res => res.data);
  }
};
