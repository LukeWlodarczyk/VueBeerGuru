<template>
  <div @click="pushToBeerDetails" class="beer">
    <img class="beerImg" :src="imgUrl" :alt="`${name}'s bottle`" />
    <div class="beer-name">
      {{ name }}
    </div>
    <div class="beer-tagline">
      {{ tagline }}
    </div>
    <button
      class="bookmark-btn"
      v-show="!isFavorite"
      @click.stop="addToFavorite"
    >
      <heart :color="'grey'" />
    </button>
    <button
      class="bookmark-btn bookmark-btn-shadow"
      v-show="isFavorite"
      @click.stop="removeFromFavorites"
    >
      <heart :color="'green'" />
    </button>
  </div>
</template>
<script>
import Heart from '../Heart/Heart.vue';

export default {
  props: [
    'id',
    'name',
    'imgUrl',
    'tagline',
    'addToMyBeers',
    'removeFromMyBeers',
    'myBeersIds'
  ],
  components: {
    heart: Heart
  },
  computed: {
    isFavorite() {
      return this.myBeersIds.includes(this.id);
    }
  },
  methods: {
    pushToBeerDetails() {
      this.$router.push(`/beers/${this.id}`);
    },
    addToFavorite() {
      this.addToMyBeers({
        id: this.id,
        name: this.name,
        image_url: this.imgUrl,
        tagline: this.tagline
      });
    },
    removeFromFavorites() {
      this.removeFromMyBeers({ id: this.id });
    }
  }
};
</script>

<style scoped>
.beer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #65d6ad;
  border-radius: 4px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  min-height: 450px;
  background-color: #fff;
  transition: 0.3s;
  box-shadow: 0 0 5px #c6f7e2;
}

.beer:hover {
  cursor: pointer;
  box-shadow: 0 0 10px #effcf6;
  transform: scale(1.03);
}

.beerImg {
  width: 100%;
  max-width: 250px;
  height: 100%;
  max-height: 300px;
  object-fit: scale-down;
  filter: drop-shadow(0 5px 5px);
}

.beer-name {
  margin-top: 16px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #65d6ad;
}

.beer-tagline {
  color: #9f9f9f;
  text-align: center;
  margin-top: 8px;
}

.bookmark-btn {
  position: absolute;
  top: 8px;
  right: 28px;
  outline: none;
  transition: 0.6s;
}

.bookmark-btn-shadow:hover {
  box-shadow: 0px 9px 50px 15px #65d6ad;
}

.bookmark-btn:hover {
  cursor: pointer;
}
</style>
