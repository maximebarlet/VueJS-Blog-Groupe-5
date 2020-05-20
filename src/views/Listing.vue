<template>
  <div class="about">
    <Header />
    <!--<h1>Découvrez tous nos articles</h1>-->
    <div class="content">
      <div class="card" v-for="post in posts" :key="post.id">
        <div class="picture">
          <img :src="require(`@/assets/img/${post.miniature}`)" alt="miniature article" />
        </div>
        <div class="article_link">
          <router-link :to="`/article/${ post.id }`" class="link">
            {{ post.title }}
          </router-link>
          <div class="postDate">Posté le {{ post.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Listing',
  components: {
    Header,
  },
  data() {
    return {
      posts: null,
    };
  },

  created() {
    fetch("https://my-json-server.typicode.com/maximebarlet/VueJS-Blog-Groupe-5/posts/").then((response) => {
      response.json().then((data) => {
        this.posts = data;
      });
    });
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'Kalissa';
  src: url("/fonts/Klarissa.ttf") format(ttf);
};
@font-face {
  font-family: "Abhaya Libre";
  src: url("https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap");
}
.about{
  height: 100vh;
  background-image: url("../assets/img/png-transparent-hamburger-french-fries-fast-food-onion-ring-fried-chicken-hd-fries-potato-fries-food.png");
  background-repeat: no-repeat;
  background-position: center;
}

.content {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin-left: 15%;
}

.card {
  width: 100%;
  padding: 10px;
  margin-left: 50%;
  transform: translate(-50%, -0%);
  align-items: center;
  justify-content: space-between;
  display: flex;
}
.picture{
  height: 100px;
  width: 100px;
  background-color: tomato;
}
.picture img{
  object-fit: cover;
  width: 100px;
  height: 100px;
}
.article_link{
  max-width: 70%;
  background-color: white;
  height: 100%;
  padding: 20px;
  font-family: "Abhaya Libre";
}
.link {
  text-decoration: none;
  color: black;
}

.link:hover {
  font-weight: bold;
}

.postDate{
  font-style: italic;
  font-size: 14px;
}
</style>
