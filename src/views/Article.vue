<template>
  <div v-if="post" class="post">
    <Header />
    <img :src="require(`@/assets/img/${post.miniature}`)" alt="miniature article" />
    <h1 class="title"> {{ post.title }} </h1>
    <p class="date"> Posté le {{ post.date }} </p>
    <p class="content"> {{ post.body }} </p>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Article',
  components: {
    Header
  },
  data() {
    return {
      post: null,
    };
  },

  created() {
    console.log('created');

    fetch(`https://my-json-server.typicode.com/maximebarlet/VueJS-Blog-Groupe-5/posts/${ this.$route.params.id }`).then((response) => {
      response.json().then((data) => {
        this.post = data;
        console.log(this.post);
      });
    });
  },
};
</script>

<style scoped>
.post{
}
.title{
  font-size: 40px;
  margin-bottom: 10px;
}
.content{
  margin: 25px 0px;
  font-size: 20px;
}
img{
  height: 400px;
  width: 100%;
  object-fit: cover;
  object-position: top;
}
</style>