<template>
  <div>
    <div class="ourArticlesContainer">
      <div class="ourArticlesContent">
        <img src="@/assets/img/newsHomePic.png" alt="Food" class="picture">
        <div class="lastNews">
          <h2>Les dernières nouveautés</h2>
          <div class="articlesLink">
            <div class="card" v-for="post in posts" :key="post.id">
              <div class="articlelink">
                <router-link :to="`/article/${ post.id }`" class="link">
                  {{ post.title }}
                </router-link>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "OurArticles",
  components: {
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
.ourArticlesContent{
  display: inline-flex;
  width: 100%;
  background-color: #F2F2F2;
}
.ourArticlesContent .picture{
  display: inline-flex;
  width: 50%;
  margin-top: 50px;
  margin-bottom: 50px;
}
.lastNews{
  padding: 50px;
  background-color: #FFFFFF;
  margin-top: 50px;
  margin-bottom: 50px;
}
.lastNews h2{
  text-align: center;
}
.articlelink{
  padding: 10px 0px 10px 0px;
}
@media screen and (max-width: 768px){
 .ourArticlesContent{
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
}
.ourArticlesContent .picture{
  width: 100%;
  margin-top: -50px;
}
}

</style>
