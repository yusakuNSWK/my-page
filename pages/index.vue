<template>
  <div>

    <div class="container">

      <figure class="cover-image" v-if="$mq === 'sm' || $mq === 'md'">
        <div class="square-image">
          <img class="cover" src="~/assets/img/eye_catch_short.jpg" alt="">
        </div>
      </figure>

      <figure class="cover-image-wd" v-else>
        <img class="cover-wd" src="~/assets/img/eye_catch_long.jpg" alt="">
      </figure>

    </div>

    <div class="container">
      <p class="text is-size-6 small" v-if="$mq === 'sm'">
        人とロボットとの会話や、協調するための行為方略の研究を行っています。<br>人と人とがなぜ協調して、つながりを形成していくのかに興味があり、ロボットが人と協調できる振る舞いを作ることで、その謎を解明したいと思っています。<br>Human-Agent Interaction(HAI)やHuman-Robot Interaction(HRI)が主な活動領域です。</p>

      <p class="text is-size-5 medium" v-else-if="$mq === 'md'">
        人とロボットとの会話や、協調するための行為方略の研究を行っています。<br>人と人とがなぜ協調して、つながりを形成していくのかに興味があり、<br>ロボットが人と協調できる振る舞いを作ることで、<br>その謎を解明したいと思っています。<br>Human-Agent Interaction(HAI)や<br>Human-Robot Interaction(HRI)が主な活動領域です。</p>

      <p class="text is-size-5 large" v-else>
        人とロボットとの会話や、協調するための行為方略の研究を行っています。<br>人と人とがなぜ協調して、つながりを形成していくのかに興味があり、<br>ロボットが人と協調できる振る舞いを作ることで、その謎を解明したいと思っています。<br>Human-Agent Interaction(HAI)やHuman-Robot Interaction(HRI)が主な活動領域です。</p>
    </div>

  </div>
</template>

<style lang="scss">
  .cover-image-wd {
    margin-top: 50px;
  }

  .cover-wd {
    object-fit: none;
    width: 100%;
    height: 400px;
  }

  .square-image{
    text-align: center;
  }

  .cover-image {
    margin-top: 50px;
  }

  .text {
    text-align: center;
    margin-top: 20px;

    &.small{
      text-align: justify;
      text-align-last: left;
      padding: 0 20px;
    }
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
