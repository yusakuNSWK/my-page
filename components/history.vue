<template>
  <div>
    <div class="duration small" v-if="$mq === 'md' || $mq === 'sm'">
      <span >{{info.duration}}</span>
    </div>
    <div class="duration long" v-else>
      <span >{{info.duration}}</span>
    </div>
    <div class="where">
      <span>{{info.where}}</span>
      <a v-if="info.link !== ''" @click="jump(info.link)">
      <font-awesome-icon icon="external-link-alt" />
    </a>
    </div>
    
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        duration: String,
        where: String,
        link: String
      }
    },
    methods: {
      jump(path) {
        window.open(path, '_blank');
      }
    }
  }

</script>

<style lang="scss">
  .long {
    display: inline-block;
    width: 6rem;
  }

  .duration {
    text-align-last:justify;
    width: 100px;
    margin-right: 10px;
  }

  .where {
    display: inline;
  }

</style>
