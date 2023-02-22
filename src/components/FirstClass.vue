<template>
   <section>
      <div class="header">
          <a href="https://classino.com/" target="_blank"><img src="../assets/images/classinoLogo.svg" alt="classino logo"></a>
      </div>
      <div class="diamond-img">
          <img src="../assets/images/diamond_gif.png" alt="dynamic-diamond-image">
      </div>
      <div class="main">
        <h1>دوره فشرده <span> رایگان</span> برای آمادگی کنکور</h1>
        <div class="icons-and-description">
          <div class="icons">
              <img src="../assets/images/icons/time.svg" alt="clock icon">
              <p class="icon-subtitle"><strong>۳ ساعت</strong><br>مدت هر جلسه</p>
              <img src="../assets/images/icons/jalasat.svg" alt="person icon">
              <p class="icon-subtitle"><strong>۵۰ جلسه</strong><br>آموزشی</p>
              <img src="../assets/images/icons/free.svg" alt="free icon">
              <p class="icon-subtitle"><strong>رایگان</strong><br>برای همه دانش آموزان</p>
              <img src="../assets/images/icons/moshavere.svg" alt="chat icon">
              <p class="icon-subtitle"><strong>۱۶ جلسه</strong><br>مشاوره و برنامه ریزی</p>
          </div>
          <div class="description">
          <span>
            این دوره مقدمه ای برای شروع کلاس های کنکور ۱۴۰۱ است که
            با برگزاری <strong>۵۰ جلسه سه ساعته</strong> و <strong>۱۶ جلسه</strong> مشاوره و برنامه
            ریزی قصد دارد، ضعف آموزش دوران کرونا را برطرف کند. این
            دوره به دانش آموزان جدی کنکور ۱۴۰۱ که می خواهند با برنامه 
            ریزی دقیق از رقباشون سبقت بگیرند توصیه می شود.
          </span>
          </div>
          </div>   
          <a href="#" class="sign-up-button">ثبت نام رایگان</a>
          <img class="dynamic-student" src="../assets/images/character_min.png" alt="dynamic-student-image">
      </div>
  </section>
</template>

<script>
  export default {
    name: 'FirstClass',
    props: {
      msg: String
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../assets/style/app.scss";
</style>
