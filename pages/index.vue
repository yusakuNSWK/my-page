<template>
  <div>

    <div class="container">

      <!-- 画面いっぱいの画像 -->
      <figure class="cover-image" v-if="$mq === 'md' || $mq === 'sm'">
        <img class="cover" src="~/assets/img/eye_catch_short.png" alt="">
      </figure>

      <!-- 正方形の画像 -->
      <figure class="cover-image-wd" v-else>
        <img class="cover-wd" src="~/assets/img/eye_catch_long.png" alt="">
      </figure>

    </div>

    <div class="container">

      <p class="text is-size-5">
        人と人工物とのインタラクションデザインや、協調するための行為方略の研究を行っています。<br>人と人とがなぜ協調して、つながりを形成していくのかに興味があり、<br>Human-Agent
        Interaction(HAI)やHuman-Robot Interaction(HRI)が主な活動領域です。</p>

    </div>

  </div>
</template>


<style lang="scss">
  .cover-image-wd {
    margin-top: 50px;
  }

  .cover-wd {
    object-fit: cover;
    width: 100%;
    height: 400px;
  }

  .cover-image {
    margin-top: 70px;
  }

  //.cover {}

  .text {
    text-align: center;
    margin-top: 20px;
  }

  // https://stackoverflow.com/questions/17642953/centering-fontawesome-icons-vertically-and-horizontally
  // Fontawesome のアラインの仕方

  .aim-card {
    border: solid;
    border-color: black;
    border-width: 1.5px;
    display: flex;
    align-items: center;
    justify-items: center;

    .card-content {
      display: block;
      text-align: center;

      .my-card-icon {
        display: inline-block;
      }
    }
  }

</style>
