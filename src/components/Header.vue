<template>
  <div class="header">
    <div class="container">
      <router-link to="/" class="homeLink"
        ><img src="@/assets/img/logo.png" alt="My Food logo" class="logo">
        </router-link>
      <div class="headerLinks">
        <router-link to="/" class="link">Accueil</router-link>
        <router-link to="/listing" class="link">Nos Articles</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Kalissa';
  src: url("../assets/css/fonts/Klarissa.ttf") format(ttf);
};
@font-face {
  font-family: "Abhaya Libre";
  src: url("https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap");
}

.container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header {
  width: 100%;
  padding: 26px 0px 26px 0px;
  background-color: #ffffff;
  

  /* box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.14); */
}
.homeLink{
  text-decoration: none;
  color: black;
  font-family: 'Klarissa';
  font-weight: 900;
  font-size: 24px;

}
.header .logo{
  width: 30%;
}

.headerLinks {
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
@media screen and (max-width: 768px){
  .container{
  display: flex;
  flex-direction: column;
}
.header{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header .logo{
  width: 30%;
}
.headerLinks{
    width: 24%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Abhaya Libre';
    font-size: 14px;
    letter-spacing: -0.06em;
    text-align: center;
    margin-top: 20px;
    display: contents;
}
.headerLinks a{
    margin-top: 10px;
}
.homeLink{
  display: contents;

}
}
</style>
