<!--简单列表动态组件-->
<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <banner :bannerSrc="bannerSrc"></banner>

    <navMap :currentNav="currentSection"></navMap>

    <div class="container min-list-lines">
        <h4 class="para-title text-left">{{currentSection}}</h4>

        <div v-show="this.$store.state.isLoading" style="margin: 2rem 0;">
          <img src="../../assets/img/loading.gif" class="img-responsive text-center"/>
        </div>

      <!--列表-->
      <div v-for="item in items" class="list-line" v-bind:key="item.id">
        <div class="row text-left">
          <div class="col-md-10 line-content text-left" style="padding-left: 0;">
            <div class="card">
              <div class="card-header">
                <p class="overflow-ellipsis" style="margin-bottom: 0">
                  <span class="oi oi-media-record" style="color: lightseagreen; font-size: 0.5rem; padding-right: 0.5rem"></span>
                  <router-link class="card-header" :to="sectionBaseUrl + '/' + item.id">{{item.title}}
                  </router-link>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-2 text-right">
            <span style="font-size: 0.8rem;" v-text="DateFormatter.formatTimestamp(item.publishTimestamp)"></span>
          </div>
        </div>
      </div>
    </div> <!-- /container -->
    <div class="container">
      <!-- 分页组件 -->
      <pagination
        :currentPage="currentPage"
        :totalPageCount="totalPageCount"
        ref="pagination"
        @change="pageChange"
        v-show="!this.$store.state.isLoading">
      </pagination>
    </div>
  </main>

</template>

<script>
  import pagination from "./Pagination"
  import navMap from './NavMap'
  import banner from './Banner'

  export default {
    components: {
      navMap,
      pagination,
      banner,
    },
    props: {
    	bannerSrc: {
    		type: String,
        default: "",
      },
      currentSection: {
    		type: String,
        default: ""
      },
      totalPageCountFun: {
        type: Function,
        default: null,
      },
      currentPageFun: {
        type: Function,
        default: null,
      },
      sectionBaseUrl: {
        type: String,
        default: "",
      },
    },
    name: "ItemList",
    data() {
      return {
        items: [],
        // 当前页
        currentPage: 1,
        // 总页数
        totalPageCount: 1,
        // 正在加载数据
        minHeight: '500px'
      }
    },
    methods: {
      pageChange: function (page) {
        this.currentPage = page;
        this.renderPage();
      },
      renderPage: function () {
        let pagination = this.$refs.pagination;
        let store = this.$store;
        let types = this.types;

        this.totalPageCountFun((data) => {
          this.totalPageCount = data;
          this.currentPageFun(this.currentPage, (data) => {
            this.items = data;
            pagination.renderPagination();
            store.commit(types.LOADED);
          })
        });
      }
    },
    mounted: function () {
      this.renderPage();
    },
  }
</script>


<style>

  .min-list-lines {
    padding-top: 0!important;

  }

  .min-list-lines .list-line {
    border-bottom: 1px dotted lightseagreen;
    padding: 15px 0 15px 1rem;
  }

  .min-list-lines .list-line .row {
    margin-left: 0;
    margin-right: 0;
  }

  .min-list-lines .card {
    border-color: #bee5eb;
    margin-left:0px;
  }

  .min-list-lines .card-header {
    color: #818182;
    line-height: 1rem;
    font-size: 1rem;
    border-radius: 0;
    background: transparent;
    /*background: linear-gradient(to right, lightgrey, transparent);*/
  }
  .min-list-lines .card-body {
    color: #818182;
    overflow: hidden;
    padding-left:5px;
    padding-top:0px;
    padding-bottom:0px;
  }
  .min-list-lines .card-body p {
    margin: 0rem 0;
  }

  .min-list-lines .list-line:hover .card {
    background: none!important;
    border-bottom-color: lightseagreen;
  }
  .min-list-lines .list-line:hover {
    background-color: lightseagreen;
  }
  .min-list-lines .list-line:hover .card-header a{
    color: #fff!important;
    text-decoration: underline!important;
  }

  .min-list-lines .para-title {
    background: linear-gradient(to right, lightseagreen, transparent);
    color: white;
  }

  .min-list-lines .line-img img {
    border-radius: 0;
    height:100%;
    width: 100%;
  }

  .min-list-lines .line-content .card, .card-header {
    border: none;
  }

  .min-list-lines .card-body p * {
    font-size: 1rem;
    font-weight:normal;
    color: #818182;
  }
  .min-list-lines .list-line:hover * {
    color: #fff!important;
  }
  .min-list-lines .list-line:hover .card-body {
    color: #fff!important;
  }
</style>


