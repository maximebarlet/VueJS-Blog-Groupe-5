<template>
  <div>
    <div class="ourArticlesContainer">
      <div class="ourArticlesContent">
        <img src="@/assets/img/newsHomePic.png" alt="Food" class="picture">
        <div class="lastNews">
          <h2>Les dernières nouveautés</h2>
          <div class="article_link">
            <div class="card" v-for="post in posts" :key="post.id">
              <div class="article_link">
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
}
.ourArticlesContent .picture{
  display: inline-flex;
  width: 50%;
}
.lastNews{
  padding: 50px;
}
.lastNews h2{
  text-align: center;
}
@media screen and (max-width: 768px){
 .ourArticlesContent{
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
}
.ourArticlesContent .picture{
  width: 100%;
}
}

</style>
