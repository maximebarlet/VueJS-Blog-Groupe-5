<template>
  <div v-if="restaurants">
    <Header /> 
    <img :src="require(`@/assets/img/${restaurants.logo}`)" alt="logo restaurant" />
    <h1> {{ restaurants.title }} </h1>
    <p> {{ restaurants.body }} </p>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Restaurants',
  components: {
    Header
  },  
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

<style scoped>
h1{
  font-size: 40px;
  margin-bottom: 10px;
}
img{
  height: 100px;
  width: 100px;
  object-fit: cover;
  object-position: top;
}
</style>