import api from "./api";

const state = {
  data: {},
  isLoading: false,
  error: null
};

const mutations = {
  SET_LOADING_BEER(state) {
    state.isLoading = true;
  },
  SET_BEER(state, beer) {
    state.data = beer;
    state.isLoading = false;
  }
};

const actions = {
  async getBeerById({ commit }, id) {
    commit("SET_LOADING_BEER", beer);
    const beer = await api.fetchBeerById(id);

    commit("SET_BEER", beer);
  }
};

const getters = {
  beer: state => {
    return state;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
