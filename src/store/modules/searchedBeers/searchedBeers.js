import api from "./api";

const state = {
  data: [],
  isLoading: false,
  error: null
};

const mutations = {
  SET_LOADING_BEERS_BY_NAME() {
    state.isLoading = true;
  },
  SET_BEERS_BY_NAME(state, beers) {
    state.data = beers;
    state.isLoading = false;
  }
};

const actions = {
  async getBeersByName({ commit }, name) {
    commit("SET_LOADING_BEERS_BY_NAME");

    const beers = await api.fetchBeerByName(name);

    commit("SET_BEERS_BY_NAME", beers);
  },
  async getRandomBeer({ commit }) {
    commit("SET_LOADING_BEERS_BY_NAME");

    const beer = await api.fetchRandomBeer();

    commit("SET_BEERS_BY_NAME", [beer]);
  }
};

const getters = {
  beersByName: state => {
    return state;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
