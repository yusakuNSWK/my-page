<template>
  <section class="section biography">
    <div class="container">
      <h1 class="title is-size-2 bio-title">
        Biography
      </h1>

      <h3 class="is-size-4">
        School
      </h3>
      <div class="content bio-items">
        <ul class="history">
          <li v-for="item in bioList" v-bind:key="item.duration">
            <history :info=item />
          </li>
        </ul>
      </div>

      <h3 class="is-size-4">
        Scholarship
      </h3>
      <div class="content">
        <ul class="history">
          <li v-for="item in scholarList" v-bind:key="item.duration">
            <history :info=item />
          </li>
        </ul>
      </div>

      <h3 class="is-size-4">
        Experience
      </h3>
      <div class="content">
        <ul class="history">
          <li v-for="item in expList" v-bind:key="item.duration">
            <history :info=item />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import history from '~/components/history.vue'

  export default {
    components: {
      history
    },
    computed: {
      bioList() {
        return this.$store.state.biography.list.school
      },
      scholarList() {
        return this.$store.state.biography.list.scholarship
      },
      expList() {
        return this.$store.state.biography.list.experience
      }
    }
  }

</script>

<style lang="scss">
  div.content {
    ul.history {
      li {
        list-style: none;
      }
    }
  }
</style>
