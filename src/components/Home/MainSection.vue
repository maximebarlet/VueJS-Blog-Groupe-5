<template>
  <div>
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

.main_content{
  background-color: white;
  display: flex;

}
.picture{
  width: 50%;
}
.text{
  width: 50%;
  padding: 50px;
}
.title{
  font-size: 25px;
  text-align: center; 
  font-family: 'Klarissa';
  width: 50%;
  margin: 5% 50%;
  transform: translate(-50%, -0%)
}
.content{
  font-family: "Abhaya Libre";
  font-size: 18px;
  margin-top: 30px;
}
</style>
