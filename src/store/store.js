import Vue from "vue";
import Vuex from "vuex";

import beers from "./modules/beers/beers";
import beer from "./modules/beer/beer";
import myBeers from "./modules/myBeers/myBeers";
import searchedBeers from "./modules/searchedBeers/searchedBeers";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    beers,
    beer,
    myBeers,
    searchedBeers
  }
});
