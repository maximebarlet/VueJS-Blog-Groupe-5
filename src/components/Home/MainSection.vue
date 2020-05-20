<template>
  <div class="wrapper">
    <main>
      <div class="main_content">
        <img src="@/assets/img/mainHomePic.png" alt="Food" class="picture">
        <div class="text">
          <h1 class="title">ON MANGE ENSEMBLE ?</h1>
          <h3 class="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </h3>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: "MainSection",
  components: {
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

.wrapper{
  margin-bottom: 30px;
}

.main_content{
  background-color: #F2F2F2;
  display: flex;

}
.picture{
  width: 50%;
  margin-bottom: 50px;
  margin-top: 15px;
}
.text{
    width: 50%;
    padding: 50px 50px 0px 50px;
    background-color: #FFFFFF;
    margin-bottom: 50px;
    margin-top: 15px;
}
.title{
  font-size: 25px;
  text-align: center; 
  font-family: 'Klarissa';
  font-weight: bolder;
  width: 50%;
  margin: 5% 50%;
  transform: translate(-50%, -0%)
}
.content{
  font-family: "Abhaya Libre";
  font-size: 18px;
  margin-top: 30px;
}

@media screen and (max-width: 768px){
  .main_content{
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 30px;

}
.picture{
  width: 100%;
  margin-top: -50px;
}
.text{
  width: 100%;
  padding: 5px;
}
}
</style>
