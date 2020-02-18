import api from "./api";

const state = {
  data: [],
  isLoading: false,
  error: null
};

const mutations = {
  SET_MY_BEERS(state, beers) {
    state.data = beers;
  },
  ADD_TO_MY_BEERS(state, beer) {
    state.data = [...state.data, beer];
  },
  REMOVE_FROM_MY_BEERS(state, beer) {
    state.data = state.data.filter(item => item.id !== beer.id);
  }
};

const actions = {
  async getMyBeers({ commit }) {
    const beers = await api.fetchMyBeers();

    commit("SET_MY_BEERS", beers);
  },
  async addToMyBeers({ commit }, beer) {
    await api.addToMyBeers(beer);

    commit("ADD_TO_MY_BEERS", beer);
  },
  async removeFromMyBeers({ commit }, beer) {
    await api.removeFromMyBeers(beer);

    commit("REMOVE_FROM_MY_BEERS", beer);
  }
};

const getters = {
  myBeers: state => {
    return state;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
