<template>
  <div class="header">
    <div class="container">
      <router-link to="/" class="home_link"
        ><h1>My Food</h1>
        </router-link>
      <div class="header__links">
        <router-link to="/" class="link">Accueil</router-link>
        <router-link to="/listing" class="link">Nos Articles</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Kalissa';
  src: url("/fonts/Klarissa.ttf") format(ttf);
};
@font-face {
  font-family: "Abhaya Libre";
  src: url("https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap");
}

.container{
  width: 70%;
  margin-left: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header {
  width: 100%;
  padding: 26px 32px 26px 32px;
  background-color: #ffffff;
  

  /* box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.14); */
}
.home_link{
  text-decoration: none;
  color: black;
  font-family: 'Klarissa';
  font-weight: 900;
  font-size: 24px;

}

.header__links {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Abhaya Libre';
  font-size: 14px;
  letter-spacing: -0.06em;
}

.link {
  text-decoration: none;
  color: #161616;
}
</style>
