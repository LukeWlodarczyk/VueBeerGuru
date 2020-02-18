<template>
  <div class="container">
    <app-loader v-if="beer.isLoading" />
    <img
      class="beerImg"
      :src="beer.data.image_url"
      :alt="`${beer.data.name}'s bottle`"
    />
    <h1 class="beer-heading">{{ beer.data.name }}</h1>
    <p class="beer-description">{{ beer.data.description }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getBeer();
  },
  watch: {
    $route: 'getBeer'
  },
  computed: {
    beer() {
      return this.$store.getters.beer;
    }
  },
  methods: {
    getBeer() {
      this.$store.dispatch('getBeerById', this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.container {
  width: 60%;
  margin: 0 auto;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.beer-heading {
  color: #65d6ad;
  font-size: 24px;
  text-align: center;
  margin-top: 32px;
}

.beerImg {
  width: 100%;
  max-width: 250px;
  height: 100%;
  max-height: 300px;
  object-fit: scale-down;
  filter: drop-shadow(0 5px 5px);
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.beer-description {
  margin-top: 16px;
  font-size: 20px;
  line-height: 26px;
  color: #727272;
  text-align: left;
}
</style>
