<template>
  <div class="home">
    <Header/>
    <MainSection/>
    <FavRestaurants/>
    <OurArticles/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import MainSection from '@/components/Home/MainSection.vue'
import FavRestaurants from '@/components/Home/FavRestaurants.vue'
import OurArticles from '@/components/Home/OurArticles.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    MainSection,
    FavRestaurants,
    OurArticles,
    Footer,
  }
}
</script>

<style scoped>
  .home {
    background: #ffffff;
  }
</style>
