<template>
  <div>
    <div v-if="beers.data.length === 0">You don't have saved beers</div>
    <div v-else class="beers-container">
      <beer-item
        v-for="beer in beers.data"
        :key="beer.id"
        :id="beer.id"
        :name="beer.name"
        :imgUrl="beer.image_url"
        :tagline="beer.tagline"
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
  mounted() {
    this.getMyBeers();
  },
  computed: {
    beers() {
      return this.$store.getters.myBeers;
    },
    myBeersIds() {
      return this.beers.data.map(item => item.id);
    }
  },
  methods: {
    getMyBeers() {
      this.$store.dispatch('getMyBeers');
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
