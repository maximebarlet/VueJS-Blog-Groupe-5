<template>
  <div>
    <div class="ourArticlesContainer">
      <div class="ourArticlesContent">
        <img src="@/assets/img/newsHomePic.png" alt="Food" class="picture">
        <div class="lastNews">
        <h2>Les dernières nouveautés</h2>
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
</style>
