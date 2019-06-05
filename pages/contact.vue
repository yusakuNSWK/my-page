<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-size-2">
        Contact
      </h1>

      <div class="tile is-ancestor">
        <div class="tile is-6">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child">                
                <p class="is-size-4">Address</p>
                <p class="content">〒441-8580<br>愛知県豊橋市天伯町雲雀ヶ丘１－１<br>豊橋技術科学大学 情報・知能工学専攻<br>F-413 岡田研究室</p>
                <p class="is-size-4">Email</p>
                <p class="content">y143364｛at｝edu.tut.ac.jp</p>
              </article>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <div class="content">
              <div class="gmap-wrap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13120.528164634075!2d137.4086553!3d34.7018494!3m2!1i1024!2i768!4f5.1!3m3!1m2!1s0x0%3A0xb819d28be7a7df7f!2z6LGK5qmL5oqA6KGT56eR5a2m5aSn5a2m!5e0!3m2!1sja!2sjp!4v1559099092732!5m2!1sja!2sjp" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </article>
        </div>
      </div>

    </div>
  </section>
</template>


<style>

.gmap-wrap{
    position : relative;
    height : 0;
    padding-bottom : 100%; /* 縦横比の指定 */
    overflow : hidden;
}
 
.gmap-wrap iframe,
.gmap-wrap object,
.gmap-wrap embed{
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
}

</style>
