<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-size-2">
        Publication
      </h1>

      <h2 class="subtitle is-size-3">
        Journal
      </h2>

      <div class="cards" v-for="one in Journals" v-bind:key="one.title">
        <myArticle :info=one />
      </div>

      <h2 class="subtitle is-size-3">
        International Conference
      </h2>

      <div class="cards" v-for="one in iConferences" v-bind:key="one.title">
        <myArticle :info=one />
      </div>

      <h2 class="subtitle is-size-3">
        Domestic Conference
      </h2>

      <div class="cards" v-for="one in dConferences" v-bind:key="one.title">
        <myArticle :info=one />
      </div>

    </div>
  </section>
</template>

<script>
  import myArticle from '~/components/myArticle.vue'

  export default {
    computed: {
      sortedList(){
        this.$store.commit('publication/sortByDate');
        return this.$store.state.publication.list
      },
      Journals() {
        return this.$store.state.publication.journals
      },
      iConferences() {
        return this.$store.state.publication.iConfs
      },
      dConferences() {
        return this.$store.state.publication.dConfs
      }
    },
    // レンダリング前に非同期えVuexストアへデータを反映する - Nuxt.js
    async fetch ({ store, params }) {
      store.commit('publication/sortByDate');
      store.commit('publication/getJournals');
      store.commit('publication/getiConfs');
      store.commit('publication/getdConfs');
    },
    components: {
      myArticle
    }
  }

</script>

<style>
  .cards .card {
    margin-bottom: 1em
  }

</style>
