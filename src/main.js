import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

import Spinner from './components/Spinner/Spinner.vue';

Vue.use(VueRouter);

Vue.component('app-loader', Spinner);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

// margins/paddings = 8/16/32
// colors
// green = #65d6ad
// lightgreen = #c6f7e2
// grey = #727272
// white = #ffffff
// background = #f8f8f8
// font-size = 14/18/20/24/38
