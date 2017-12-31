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

    <div class="container list-lines">
        <h2 class="para-title text-left"><span class="oi oi-globe"></span>{{currentSection}}</h2>

        <transition-group name="fade" tag="div">
        <!--列表-->
        <div v-for="item in items" class="list-line" v-bind:key="item.id">
          <div class="row justify-content-center text-left">
            <div class="col-md-2 line-img">
              <router-link :to="sectionBaseUrl + '/' + item.id">
                <img class="card-img-top" :src="`/static/news-img/${item.id}.jpg`" onerror="this.src='/static/img/img-default.gif'" alt="Card image cap"/>
              </router-link>
            </div>

            <div class="col-md-10 line-content">
              <div class="card">
                <div class="card-header">
                  <p class="badge badge-primary" v-text="DateFormatter.formatTimestamp(item.publishTimestamp)"></p>
                  <p class="overflow-ellipsis">
                    <router-link class="card-header" :to="sectionBaseUrl + '/' + item.id">{{item.title}}
                    </router-link>
                  </p>
                </div>
                <div class="card-body">
                  <p v-html="item.detail.length > 110 ? item.detail.slice(0, 110)+'...' : item.detail"></p>
                  <!--<p>{{item.desc}}</p>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        </transition-group>
        <!-- 分页组件 -->
        <pagination
          :currentPage="currentPage"
          :totalPageCount="totalPageCount"
          ref="pagination"
          @change="pageChange"
          v-show="!this.$store.state.isLoading">
        </pagination>

      </div> <!-- /container -->
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

  .list-lines .card {
    border-color: #bee5eb;
    margin-left:0px;
  }

  .list-lines .card-header {
    color: #818182;
    line-height:1rem;
    font-size: 1rem;
    font-weight:bold;
    padding-left:5px;
    border-radius: 0;
    background: transparent;
    padding-bottom:0;
    /*background: linear-gradient(to right, lightgrey, transparent);*/
  }
  .list-lines .card-body {
    color: #818182;
    overflow: hidden;
    padding-left:5px;
    padding-top:0px;
    padding-bottom:0px;
  }
  .list-lines .card-body p {
    margin: 0rem 0;
  }

  .list-lines .list-line:hover .card {
    background: none!important;
    border-bottom-color: lightseagreen;
  }
  .list-lines .list-line:hover {
    background-color: lightseagreen;
  }
  .list-lines .list-line:hover .card-header a{
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

  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(30px);
  }

</style>


