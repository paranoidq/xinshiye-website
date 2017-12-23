<!--新闻动态组件-->
<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="../../static/img/banner-news.jpg" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <navMap :currentNav="currentNav"></navMap>

    <transition name="fade">
    <div class="container list-lines" v-show="isLoading" style="min-height: 800px; position: relative">
      aaa
    </div>
    </transition>
    <transition name="fade">
    <div class="container list-lines" v-show="!isLoading">
      <h2 class="para-title text-left"><span class="oi oi-globe"></span>新闻动态</h2>

      <!--新闻列表-->
      <div v-for="item in items" class="list-line">
        <div class="row justify-content-center text-left">
          <div class="col-md-2 line-img">
            <router-link :to="`/news/${item.id}`">
              <img class="card-img-top" :src="`../static/news-img/${item.id}.jpg`" onerror="this.src='../static/img/img-default.gif'" alt="Card image cap"/>
            </router-link>
          </div>

          <div class="col-md-10 line-content">
            <div class="card">
                <router-link class="card-header" :to="`/news/${item.id}`">{{item.title}}
                  <span class="badge badge-primary" v-text="DateFormatter.formatTimestamp(item.publishTimestamp)"></span>
                </router-link>
              <div class="card-body">
                <p>{{item.detail.length > 110 ? item.detail.slice(0, 110)+'...' : item.detail}}</p>
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
        @change="pageChange">
      </pagination>

    </div> <!-- /container -->
    </transition>
  </main>
</template>

<script>
  import {getNewsTotalPageCount} from '../utils/api'
  import {getNewsCurrentPage} from '../utils/api'
  import pagination from "./common/Pagination"
  import navMap from './common/NavMap'

  export default {
    components: {
      navMap,
      pagination,
    },
    name: "News",
    data() {
      return {
      	currentNav: "新闻动态",
        isLoading: true,
      	items: [],
        // 当前页
        currentPage: 1,
        // 总页数
        totalPageCount: 1,
      };
    },
    methods: {
      pageChange: function (page) {
      	this.currentPage = page;
        this.renderPage();
      },
      renderPage: function () {
        getNewsTotalPageCount((data) => {
          this.totalPageCount = data;
          getNewsCurrentPage(this.currentPage, (data) => {
            this.items = data;
            this.$refs.pagination.renderPagination();
            this.isLoading = false;
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
  .list-lines .list-line:hover .card-body {
    color: #fff!important;
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
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>


