<template>
  <div class="container">
    <div class="search">
      <input
        class="search-input"
        placeholder="IPA...."
        type="text"
        v-model="searchTerm"
      />
      <button class="random-button" @click="getRandomBeer">Get random</button>
    </div>

    <app-loader v-if="beers.isLoading" />
    <div v-else class="beers-container">
      <beer-item
        v-for="beer in beers.data"
        :key="beer.id"
        :id="beer.id"
        :name="beer.name"
        :imgUrl="beer.image_url"
        :tagline="beer.tagline"
        :addToMyBeers="addToMyBeers"
        :removeFromMyBeers="removeFromMyBeers"
        :myBeersIds="myBeersIds"
      />
    </div>
  </div>
</template>

<script>
import BeerItem from '../../components/BeerItem/BeerItem.vue';

export default {
  components: {
    beerItem: BeerItem
  },
  data: () => ({
    searchTerm: '',
    timeout: null
  }),
  computed: {
    beers() {
      return this.$store.getters.beersByName;
    },
    myBeersIds() {
      return this.$store.getters.myBeers.data.map(item => item.id);
    }
  },
  watch: {
    searchTerm(term) {
      if (term) {
        this.debounce(() => this.getBeerByName(term));
      }
    }
  },
  methods: {
    getBeerByName(term) {
      this.$store.dispatch('getBeersByName', term);
    },
    getRandomBeer() {
      this.$store.dispatch('getRandomBeer');
    },
    addToMyBeers(beer) {
      this.$store.dispatch('addToMyBeers', beer);
    },
    removeFromMyBeers(beer) {
      this.$store.dispatch('removeFromMyBeers', beer);
    },
    debounce(fn) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => fn(), 300);
    }
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  margin-top: 16px;
}

.search {
  width: 300px;
  position: relative;
  margin: 0 auto;
}

.search-input {
  height: 40px;
  width: 300px;
  font-size: 14px;
  padding: 8px;
  color: #727272;
  border: 1px solid #65d6ad;
  border-radius: 4px;
}

.search-input::placeholder {
  color: #c6f7e2;
}

.random-button {
  position: absolute;
  right: 0;
  height: 40px;
  padding: 8px;
  font-size: 14px;
  color: #65d6ad;
  cursor: pointer;
  border: 1px solid #65d6ad;
  border-radius: 4px;
}

.random-button:hover {
  color: #3ebd93;
  border-color: #3ebd93;
  box-shadow: 0 0 4px 0 #8eedc7;
}

.beers-container {
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
