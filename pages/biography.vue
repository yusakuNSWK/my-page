<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-size-2">
        Biography
      </h1>

      <div class="content">
        <ul class="history">
          <li v-for="item in bioList" v-bind:key="item.duration">
            <history :info=item />
          </li>
        </ul>
      </div>
      <div class="content">
        <ul class="history">
          <li v-for="item in scholarList" v-bind:key="item.duration">
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
      }
    }
  }

</script>
