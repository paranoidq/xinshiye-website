<template>
    <main role="main">
      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="container" id="banner">
        <!--<div class="col-md-12">-->
        <img :src="bannerSrc" class="img-responsive center-block" />
        <!--</div>-->
      </div>

      <navMap
        :currentNav="currentSection"
        :sectionBaseUrl="sectionBaseUrl"
      ></navMap>

      <div class="container detail-container">
        <div v-show="this.$store.state.isLoading">
          <img src="../../assets/img/loading.gif" class="img-responsive text-center"/>
        </div>
        <!--<h2 class="para-title text-center"></h2>-->
        <div class="col-md-12 line-content" v-show="!this.$store.state.isLoading">
          <h2 class="para-title">{{item.title}}</h2>
          <h6>
            <span class="badge badge-danger text-white" v-text="'发布时间: ' + DateFormatter.formatTimestamp(item.publishTimestamp)"></span>
            <span class="badge badge-danger text-white" v-text="'作者: 管理员' "></span>
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
    box-shadow: 0px 0px 10px lightseagreen;
    background: #ffffff;
  }

  .detail-container {
    margin-bottom: 2rem;
  }

  .detail-container .para-title {
    margin-top: 0px;
    font-size: 1.5rem;
  }

  .detail-container .card-body {
    padding: 1rem;
    font-size:1rem;
  }
</style>


