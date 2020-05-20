<template>
  <div class="favRestaurants">
    <div class="favRestaurantsContainer">
      <div class="content">
      <div class="card" v-for="restaurants in restaurants" :key="restaurants.id">
        <div class="cardTitle">
          <h3>
            {{ restaurants.title }}
          </h3>
          <div class="cardBody">
            <p>
              {{ restaurants.body }}
            </p>
            <button class="readMore">
              <router-link :to="`/restaurants/${ restaurants.id }`">
                Lire plus
            </router-link>
          </button>
          </div>
        </div>
        <img :src="require(`@/assets/img/${restaurants.img}`)" alt="restaurantsPic" />
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
.favRestaurantsContainer{
  padding: 0px 0px 0px 0px;
  background-color: none;
}
.favRestaurants{
  margin-top: -150px;
}
.favRestaurantsContainer h2{
  text-align: center;
}
.favRestaurantsContainer .content{
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  margin-top: -40px;
  background-color: #F2F2F2;
}
.favRestaurantsContainer .content .readMore{
  position: absolute;
  border: none;
  background: #000000;
  padding: 5px 10px 5px 10px;
}
.favRestaurantsContainer .content .readMore a{
  color: #FFFFFF;
}
.favRestaurantsContainer .content .cardTitle{
    text-align: center;
    font-size: 24px;
    background-color: #FEFFFF;
    position: relative;
    top: 80px;
    margin: 20px;
    padding: 10px;
    color: #000000;
    font-weight: bolder;
}

.favRestaurantsContainer .content .card .cardBody{
    width: 100%;
    padding: 24px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 22px;
    height: 112px;
    font-size: 18px;
    font-weight: normal;
}
.favRestaurantsContainer .content .card{
    width: 33.3%;
}
.favRestaurantsContainer .content .card img{
    width: 100%;
    height: 475px;
}

@media screen and (max-width: 768px){
  .favRestaurantsContainer .content{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 70px;
}
.favRestaurantsContainer .content .card {
    width: 100%;
}

}
</style>
