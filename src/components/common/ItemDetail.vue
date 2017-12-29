<template>
    <main role="main">
      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="" id="banner">
        <!--<div class="col-md-12">-->
        <img :src="bannerSrc" class="img-fluid center-block" />
        <!--</div>-->
      </div>

      <navMap
        :currentNav="currentSection"
        :sectionBaseUrl="sectionBaseUrl"
      ></navMap>

      <transition name="fade">

      <div class="container detail-container" v-show="!this.$store.state.isLoading">
        <!--<h2 class="para-title text-center"></h2>-->
        <div class="col-md-12 line-content">
          <h2 class="para-title">{{item.title}}</h2>
          <h6>
            <span class="badge badge-danger text-white" v-text="'发布时间: ' + DateFormatter.formatTimestamp(item.publishTimestamp)"></span>
            <span class="badge badge-danger text-white" v-text="'作者: Admin' "></span>
            <span class="badge badge-danger text-white" v-text="'来源: 网络' "></span>
          </h6>
          <div class="card detail-card">
            <div class="card-body">
              <div v-html="`${item.detail}`" class="card-text text-left">
              </div>
            </div>
          </div>
        </div>
      </div> <!-- /container -->
      </transition>

    </main>
</template>

<script>

  import navMap from './NavMap';

  export default {
    name: "ItemDetail",
    components: {
      navMap
    },
    data() {
    	return {
    		item: {},
      }
    },
    props: {
    	bannerSrc: {
    		type: String, ///static/img/banner-news.jpg
        default: '',
      },
    	currentSection: {
    		type: String,
        default: '',
      },
      getFun: {
        type: Function,
        default: null,
      },
      sectionBaseUrl: {
        type: String,
        default: "",
      },
    },
    methods: {

    },
    mounted: function () {
      let store = this.$store;
      let types = this.types;

      var rst = this.getFun(this.$route.params.id,(data) => {
        this.item = data;
        store.commit(types.LOADED);
      });
    },
  }

</script>



<style>
  .detail-card {
    border: 1px solid lightseagreen ;
    box-shadow: 10px 10px 10px lightseagreen;
    background: whitesmoke;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(30px);
  }


</style>


