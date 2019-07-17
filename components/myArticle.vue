<template>
  <div class="card listed-card">
    <div class="card-content" @click="isModalActive = true">
      <h1 class="is-size-5">
        {{ info.title }}
      </h1>
      <ul class="authors is-size-6">
        <li v-for="(name, index) in info.authors" v-bind:key="name">
          <span v-if="index != 0">, </span>
          <span v-if="hasYusaku(name)" class="emphasis">{{ name }}</span>
              <span v-else>{{ name }}</span>
        </li>
      </ul>
      <div class="appendix is-size-6" v-if="info.appendix !== ''">{{ info.appendix }} </div>
    </div>

    <b-modal :active.sync="isModalActive" :width="1000" scroll="keep">
      <div class="card">
        <div class="card-content">
          <h2 class="title is-size-4">
            {{ info.title }}
          </h2>
          <ul class="subtitle authors is-size-5">
            <li v-for="(name, index) in info.authors" v-bind:key="name">
              <span v-if="index != 0">, </span>
              <span v-if="hasYusaku(name)" class="emphasis">{{ name }}</span>
              <span v-else>{{ name }}</span>
            </li>
            <div class="appendix is-size-6">{{ info.appendix }} </div>
          </ul>

          <div class="has-text-justified"> {{ info.abstract }} </div>
        </div>

        <div class="card-footer" v-if="info.link !== null">
          <a class="card-footer-item" @click="jump(info.link.url)">
            Go to {{info.link.name}}
          </a>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isModalActive: false
      }
    },
    props: {
      info: {
        title: String,
        authors: Array,
        abstract: String,
        appendix: String,
        date: Number,
        tags: Array,
        link: Object
      }
    },
    methods: {
      jump(path) {
        window.open(path, '_blank');
      },
      hasYusaku(name) {
        return name.includes('Yusaku') || name.includes('裕作');
      },
      MouseOver(){

      },
      MouseLeave(){

      }
    }
  }

</script>

<style lang="scss">
  .listed-card{
    box-shadow: 0px 0px 0px rgba(0,0,0,0.2);
  }

  .listed-card:hover{
    box-shadow: 0px 5px 10px rgba(0,0,0,0.4);
    transition: .3s;
  }

  .emphasis{
    border-bottom: solid 3px #d3d3d3;
  }

  .appendix {
    margin-top: 0.5em
  }

  ul.authors {
    li {
      display: inline;
    }
  }

  .tags {
    .tag {
      margin-bottom: 0.2rem
    }

    span.tag {
      font-size: 1em
    }
  }

  .tags:not(:last-child) {
    margin-bottom: 0rem
  }

  .tag:not(body) {
    padding-left: 0em
  }

  .title:not(.is-spaced)+.subtitle {
    margin-top: -1rem
  }

</style>
