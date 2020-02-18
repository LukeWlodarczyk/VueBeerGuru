import api from "./api";

const state = {
  data: [],
  isLoading: false,
  isLoadingMore: false,
  error: null
};

const mutations = {
  SET_LOADING_BEERS() {
    state.isLoading = true;
  },
  SET_BEERS(state, beers) {
    state.data = beers;
    state.isLoading = false;
  },
  SET_LOADING_MORE_BEERS() {
    state.isLoadingMore = true;
  },
  SET_MORE_BEERS(state, beers) {
    state.data = [...state.data, ...beers];
    state.isLoadingMore = false;
  }
};

const wait = () => new Promise(res => setTimeout(() => res(), 1000));

const actions = {
  async getBeers({ commit }, page) {
    commit("SET_LOADING_BEERS");

    const beers = await api.fetchBeers(page);

    commit("SET_BEERS", beers);
  },
  async getMoreBeers({ commit }, page) {
    commit("SET_LOADING_MORE_BEERS");

    await wait();

    const beers = await api.fetchBeers(page);

    commit("SET_MORE_BEERS", beers);
  }
};

const getters = {
  beers: state => {
    return state;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
