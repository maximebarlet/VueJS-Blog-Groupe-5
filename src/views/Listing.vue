<template>
  <div class="about">
    <img src="@/assets/img/png-transparent-hamburger-french-fries-fast-food-onion-ring-fried-chicken-hd-fries-potato-fries-food.png" alt="Frech fries" class="background">
    <!--<h1>Découvrez tous nos articles</h1>-->
    <div class="content">
      <div class="card" v-for="post in posts" :key="post.id">
        <div class="picture"></div>
        <div class="article_link">
          <router-link :to="`/article/${ post.id }`" class="link">
            {{ post.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
}
.background{
  position: fixed;
  width: 50%;
  left: 50%;
  top: -10%;
  transform: translate(-50%, -0%);
  opacity: 60%;
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

</style>
