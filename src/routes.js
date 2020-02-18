const Home = () => import('./views/Home/Home.vue');
const Beer = () => import('./views/Beer/Beer.vue');
const MyBeers = () => import('./views/MyBeers/MyBeers.vue');
const Search = () => import('./views/Search/Search.vue');

export const routes = [
  { path: '/', component: Home },
  { path: '/beers/:id', component: Beer },
  { path: '/my-beers', component: MyBeers },
  { path: '/search', component: Search }
];
