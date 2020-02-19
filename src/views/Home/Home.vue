<template>
  <div>
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
    <app-loader v-if="beers.isLoadingMore && !beers.isLoading" />
    <observer v-on:intersect="getMoreBeers" />
  </div>
</template>

<script>
import Observer from '../../components/Observer/Observer.vue';
import BeerItem from '../../components/BeerItem/BeerItem.vue';

export default {
  components: {
    observer: Observer,
    beerItem: BeerItem
  },
  data: () => ({
    page: 1
  }),
  mounted() {
    this.getMyBeers();
    if (this.beers.data.length === 0) this.getBeers();
  },
  computed: {
    beers() {
      return this.$store.getters.beers;
    },
    myBeersIds() {
      return this.$store.getters.myBeers.data.map(item => item.id);
    }
  },
  methods: {
    getBeers(page = 1) {
      this.$store.dispatch('getBeers', page);
    },
    getMoreBeers() {
      this.$store.dispatch('getMoreBeers', ++this.page);
    },
    getMyBeers() {
      this.$store.dispatch('getMyBeers');
    },
    addToMyBeers(beer) {
      this.$store.dispatch('addToMyBeers', beer);
    },
    removeFromMyBeers(beer) {
      this.$store.dispatch('removeFromMyBeers', beer);
    }
  }
};
</script>

<style scoped>
.beers-container {
  width: 80%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
