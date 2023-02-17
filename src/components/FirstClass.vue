<template>
   <section>
      <div class="header">
          <a href="#"><img src="../assets/images/classinoLogo.svg" alt="classino logo"></a>
      </div>
      <div class="diamond-img">
          <img src="../assets/images/diamond_gif.png" alt="dynamic-diamond-image">
      </div>
      <div class="main">
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
          <div class="header-description">
          <h1>دوره فشرده <span> رایگان</span> برای آمادگی کنکور</h1>
          <div class="description">
          <span>
            این دوره مقدمه ای برای شروع کلاس های کنکور ۱۴۰۱ است که
            با برگزاری <strong>۵۰ جلسه سه ساعته</strong> و <strong>۱۶ جلسه</strong> مشاوره و برنامه
            ریزی قصد دارد، ضعف آموزش دوران کرونا را برطرف کند. این
            دوره به دانش آموزان جدی کنکور ۱۴۰۱ که می خواهند با برنامه 
            ریزی دقیق از رقباشون سبقت بگیرند توصیه می شود.
          </span>
          </div>
          <a href="#" class="sign-up-button">ثبت نام رایگان</a>
          </div>          
          <div class="icons-responsive">
              <img src="../assets/images/icons/time.svg" alt="clock icon">
              <p class="icon-subtitle"><strong>۳ ساعت</strong><br>مدت هر جلسه</p>
              <img src="../assets/images/icons/jalasat.svg" alt="person icon">
              <p class="icon-subtitle"><strong>۵۰ جلسه</strong><br>آموزشی</p>
              <img src="../assets/images/icons/free.svg" alt="free icon">
              <p class="icon-subtitle"><strong>رایگان</strong><br>برای همه دانش آموزان</p>
              <img src="../assets/images/icons/moshavere.svg" alt="chat icon">
              <p class="icon-subtitle"><strong>۱۶ جلسه</strong><br>مشاوره و برنامه ریزی</p>
          </div>
          <img class="dynamic-student" src="../assets/images/character_min.png" alt="dynamic-student-image">
      </div>
  </section>
</template>

<script>
export default {
  name: 'FirstClass',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @font-face {
    font-family: IranSans;
    src: url(../assets/font/Iran-Sans.ttf);
}
@mixin horizontal-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
@mixin vertical-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@keyframes dynamicStudent {    
  0% {bottom: 50px;}
  50% {bottom: 80px;}
  100% {bottom: 50px;}
}
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: IranSans;
}
section {
    @include vertical-center();
    .header {
        margin-top: 25px;
        z-index: 1;
        a {
            img {
                width: 150px;
                height: auto;
            }
        }
    }
    .diamond-img {
        position: relative;
        top: 30px;
        z-index: 1;
        img {
            width: 130px;
            height: auto;
        }
    }
    .main {
        // @include horizontal-center();
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: #97979733;
        backdrop-filter: blur(4px);
        position: relative;
        bottom: 30px;
        width: 66%;
        height: 450px;
        border: 2px solid #3b8eb1;
        border-radius: 15px;
        .icons {
              @include vertical-center();
              position: relative;
              left: 60px;              
              width: 200px;
              // height: 200px;
                img {
                    width: 25px;
                    height: auto;
                }                    
                .icon-subtitle {
                    font-size: 10px;
                    direction: rtl;
                    text-align: center;
                    strong {
                        font-size: 13px;
                    }
                }
          }
        .header-description {
          @include vertical-center();
          position: relative;
          right: 45px;
          h1 {
            text-align: center;
            font-size: 25px;
            margin-bottom: 60px;
            span {
                color: #FFD843;
            }
          }
          .description {
          display: flex;
          width: 50%;
          margin-bottom: 70px;
          span {
                direction: rtl;
                text-align: justify;
                font-size: 14px;
                // margin-right: 8%;
                // color: #ffffff98;
                color: black;
                strong {
                    color: #ffffff;
                }
              }
            }
          .sign-up-button {
            @include horizontal-center();
            background-image: linear-gradient(180deg, #FFD843 0%, #FFAF20 100%);
            box-shadow: 0 14px 28px 0 rgba(255,175,32,0.30);
            border-radius: 44.5px;
            width: 220px;
            height: 50px;
            text-decoration: none;
            font-size: 15px;
            font-weight: bold;
            color: #000000;
            // :hover {
                
            // }
          }
        }
        .icons-responsive {
            display: none;
          }
        .dynamic-student {
            position: absolute;
            left: 69.5%;
            bottom: 50px;
            width: 270px;
            height: auto;
            animation-name: dynamicStudent;
            animation-duration: 4.5s;
            animation-iteration-count: infinite;
        }
    }
}

@media only screen and (min-width: 374px) and (max-width: 767px) {
section {  
  .header {
        a {
            img {
                width: 100px;
                height: auto;
            }
        }
    }
    .diamond-img {
      top: 40px;
        img {
            width: 80px;
            height: auto;
        }
    }
    .main {
      justify-content: space-around;
      bottom: 0px;
      width: 90%;
      height: 700px;
      h1 {
        font-size: 20px;
        margin-top: 2px;
      }
      .icons-and-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icons {
          display: none;
        }
        .description {
          display: flex;
          margin-right: 0;
          width: 90%;
          span {
            font-size: 15px;
          }
        }
        .icons-responsive { 
          padding: 5%;
          margin: 5% 0 20%;
          display: block; 
          @include vertical-center(); 
          flex-wrap: wrap;          
          width: 230px;
          height: 220px;
          img {
              width: 30px;
              height: auto;
          }                    
          .icon-subtitle {
              font-size: 10px;
              direction: rtl;
              text-align: center;
              strong {
                  font-size: 11px;
              }
          }
        } 
      }  
        .sign-up-button {
          position: fixed;
          bottom: 25px;
        }
    }
    .dynamic-student {
        display: none;
    }
}
}
</style>
