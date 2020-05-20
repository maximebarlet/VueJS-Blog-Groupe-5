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
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Listing',
  components: {
    Header,
    Footer
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
  height: 150vh;
  background-image: url("../assets/img/png-transparent-hamburger-french-fries-fast-food-onion-ring-fried-chicken-hd-fries-potato-fries-food.png");
  background-repeat: no-repeat;
  background-position: center;
}

.content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 0%;
}

.card {
  width: 90%;
  margin-left: 5%;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  float: right;
}
.picture{
  height: 200px;
  width: 200px;
  background-color: tomato;
}
.picture img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.article_link{
  width: 70%;
  height: 200px;
  background-color: white;
  padding: 40px 20px;
  font-family: "Abhaya Libre";
}
.link {
  text-decoration: none;
  color: black;
  font-size: 35px;
}

.link:hover {
  font-weight: bold;
}

.postDate{
  font-style: italic;
  font-size: 12px;
}

@media screen and (max-width: 768px){
  .link {
  text-decoration: none;
  color: black;
  font-size: 12px;
}
.postDate{
  font-style: italic;
  font-size: 10px;
}
.card {
  width: 90%;
  margin-left: 5%;
  padding: 20px 0px 20px 0px;
  
}
}
</style>
