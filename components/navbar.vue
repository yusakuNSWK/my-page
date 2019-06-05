<template>
  <div>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <div class="navbar-item">
            <nuxt-link to="/" class="navbar-item">Yusaku Nishiwaki</nuxt-link>
          </div>
          <div class="navbar-burger" data-target="navMenu" @click="$store.commit('navbar/toggleMenu')"
            :class="{'is-active': $store.state.navbar.isMenuActive}">
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
