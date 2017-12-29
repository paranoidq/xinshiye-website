<!--新闻动态组件-->
<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img :src="bannerSrc" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <navMap :currentNav="currentSection"></navMap>

    <transition name="fade" v-show="!this.$store.state.isLoading">
      <div class="container list-lines">
        <h2 class="para-title text-left"><span class="oi oi-globe"></span>{{currentSection}}</h2>

        <!--列表-->
        <div v-for="item in items" class="list-line">
          <div class="row justify-content-center text-left">
            <div class="col-md-2 line-img">
              <router-link :to="sectionBaseUrl + '/' + item.id">
                <img class="card-img-top" :src="`/static/news-img/${item.id}.jpg`" onerror="this.src='/static/img/img-default.gif'" alt="Card image cap"/>
              </router-link>
            </div>

            <div class="col-md-10 line-content">
              <div class="card">
                <router-link class="card-header" :to="sectionBaseUrl + '/' + item.id">{{item.title}}
                  <span class="badge badge-primary" v-text="DateFormatter.formatTimestamp(item.publishTimestamp)"></span>
                </router-link>
                <div class="card-body">
                  <p v-html="item.detail.length > 110 ? item.detail.slice(0, 110)+'...' : item.detail"></p>
                  <!--<p>{{item.desc}}</p>-->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 分页组件 -->
        <pagination
          :currentPage="currentPage"
          :totalPageCount="totalPageCount"
          ref="pagination"
          @change="pageChange"
          v-show="!this.$store.state.isLoading">
        </pagination>

      </div> <!-- /container -->
    </transition>
  </main>
</template>

<script>
  import pagination from "./Pagination"
  import navMap from './NavMap'

  export default {
    components: {
      navMap,
      pagination,
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

  .list-lines>div:not(:first-child) {
    padding: 10px 0;
  }

  .list-lines .card-header {
    line-height:1rem;
    padding: 0.75rem 1.25rem;
    font-weight: bold;
    font-size: 1rem;
  }
  .list-lines .card-body p {
    margin: 0rem 0;
  }

  .list-lines .card {
    border-color: #bee5eb;
    margin-left:0px;
  }
  .list-lines .card-body {
    color: #818182;
    overflow: hidden;
    padding-left:5px;
    padding-top:0px;
    padding-bottom:0px;
  }
  .list-lines .card-header {
    color: #818182;
    font-size: 1.1rem;
    font-weight:bold;
    padding-left:5px;
    border-radius: 0;
    background: transparent;
    /*background: linear-gradient(to right, lightgrey, transparent);*/
  }

  .list-lines .list-line:hover .card {
    background: none!important;
    border-bottom-color: lightseagreen;
  }
  .list-lines .list-line:hover {
    box-shadow: 5px 5px 5px lightgrey;
    background-color: lightseagreen;
  }
  .list-lines .list-line:hover .card-header{
    color: #fff!important;
    text-decoration: underline!important;
  }

  .list-lines .para-title {
    background: linear-gradient(to right, lightseagreen, transparent);
    color: white;
  }

  .list-lines .line-img {
    height:6.7rem;
    overflow: hidden;
    padding-right:0px;
  }
  .list-lines .list-line {
    border-bottom: 1px solid lightseagreen;
  }

  .list-lines .line-content .card, .card-header {
    border: none;
  }

  .fade-enter-active, fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .card-body p * {
    font-size: 1rem;
    font-weight:normal;
    color: #818182;
  }
  .list-lines .list-line:hover * {
    color: #fff!important;
  }
  .list-lines .list-line:hover .card-body {
    color: #fff!important;
  }

</style>


