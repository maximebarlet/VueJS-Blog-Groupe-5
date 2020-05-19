<template>
  <div v-if="restaurants">
    <h1> {{ restaurants.title }} </h1>
    <p> {{ restaurants.body }} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurants: null,
    };
  },

  created() {
    console.log('created');

    fetch(`https://my-json-server.typicode.com/maximebarlet/VueJS-Blog-Groupe-5/restaurants/${ this.$route.params.id }`).then((response) => {
      response.json().then((data) => {
        this.restaurants = data;
        console.log(this.restaurants);
      });
    });
  },
};
</script>