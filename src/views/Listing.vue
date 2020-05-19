<template>
  <div class="about">
    <Header/>
    <h1>Découvrez tous nos articles</h1>
    <div class="content">
      <div class="card" v-for="post in posts" :key="post.id">
        <router-link :to="`/article/${ post.id }`">
          {{ post.title }}
        </router-link>
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
.content {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 33%;
  padding: 10px;
}
</style>
