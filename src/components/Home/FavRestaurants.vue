<template>
  <div class="favRestaurants">
    <div class="favRestaurantsContainer">
      <h2>Nos restaurants préférés</h2>
      <div class="content">
      <div class="card" v-for="restaurants in restaurants" :key="restaurants.id">
        <router-link :to="`/restaurants/${ restaurants.id }`">
          {{ restaurants.title }}
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FavRestaurants",
  components: {
  },

  data() {
    return {
      restaurants: null,
    };
  },

  created() {
    fetch("https://my-json-server.typicode.com/maximebarlet/VueJS-Blog-Groupe-5/restaurants/").then((response) => {
      response.json().then((data) => {
        this.restaurants = data;
      });
    });
  },
};
</script>

<style scoped>

</style>
