<template>
  <div v-if="post">
    <h1> {{ post.title }} </h1>
    <p> Posté le {{ post.date }} </p>
    <p> {{ post.body }} </p>
  </div>
</template>

<script>
export default {
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