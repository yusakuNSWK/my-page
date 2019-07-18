<template>
  <div>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item" style="margin: auto;" v-if="$mq === 'sm'">
          <nuxt-link to="/" class="navbar-item">Yusaku Nishiwaki</nuxt-link>
        </div>
        <div class="navbar-item" v-else>
          <nuxt-link to="/" class="navbar-item">Yusaku Nishiwaki</nuxt-link>
        </div>

        <div class="navbar-burger" data-target="navMenu" @click="$store.commit('navbar/toggleMenu')"
          :class="{'is-active': $store.state.navbar.isMenuActive}" v-if="$mq === 'md' || $mq === 'lg'">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div><!-- navbar-brand END -->
      <div class="navbar-menu" id="navMenu" :class="{'is-active': $store.state.navbar.isMenuActive}">
        <div class="navbar-end">
          <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
          <nuxt-link to="/biography" class="navbar-item">Biography</nuxt-link>
          <nuxt-link to="/publication" class="navbar-item">Publication</nuxt-link>
          <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
        </div>
      </div><!-- navbar-menu END -->

      <div class="nav-table-container" v-if="$mq === 'sm'">
        <table class="nav-table" >
          <tr>
            <td class="nav-item-left">
              <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
            </td>
            <td>
              <nuxt-link to="/biography" class="navbar-item">Biography</nuxt-link>
            </td>
          </tr>
          <tr>
            <td class="nav-item-left">
              <nuxt-link to="/publication" class="navbar-item">Publication</nuxt-link>
            </td>
            <td>
              <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
            </td>
          </tr>
        </table>
      </div>

    </nav>
  </div>
</template>

<script>
  export default {
    watch: {
      '$route'() {
        this.$store.commit('navbar/resetMenu')
      }
    }
  }

</script>


<style lang="scss">
  .nav-table {
    width: 100%;
    border-bottom: solid 1px #000000;
    border-top: solid 1px #000000;

    td{
      border-bottom: solid 1px #000000;

      &.nav-item-left{
        border-right: solid 1px #000000;

      }
    }
  }

  td>a{
    text-align: center;
  }

</style>
