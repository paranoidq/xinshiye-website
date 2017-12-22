<!--公示公告组件-->
<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="../../static/img/banner-publish.jpg" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-12">
          <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><span class="oi oi-list"></span></li>
              <li class="breadcrumb-item"><router-link to="/home"><a href="#">首页</a></router-link></li>
              <li class="breadcrumb-item active" aria-current="page">公示公告</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container list-lines">
      <h2 class="para-title text-left"><span class="oi oi-globe"></span>公示公告</h2>

      <!--公告列表-->
      <div v-for="item in items" class="list-line">
        <div class="row justify-content-center text-left">
          <div class="col-md-2 line-img">
            <router-link :to="`/publish/${item.id}`">
              <img class="card-img-top" :src="`../static/news-img/${item.id}.jpg`" onerror="this.src='../static/img/img-default.gif'" alt="Card image cap"/>
            </router-link>
          </div>

          <div class="col-md-10 line-content">
            <div class="card">
              <router-link class="card-header" :to="`/publish/${item.id}`">{{item.title}}
                <span class="badge badge-primary" v-text="formatDate(item.publishTimestamp)"></span></router-link>
              <div class="card-body">
                <p>{{item.detail.length > 110 ? item.detail.slice(0, 110)+'...' : item.detail}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 分页组件 -->
      <pagination
        :currentPage="currentPage"
        :totalPageCount="totalPageCount"
        ref="Pagination"
        @change="pageChange">
      </pagination>

    </div> <!-- /container -->
  </main>
</template>

<script>
  import {getPublishTotalPageCount} from '../utils/api'
  import {getPublishCurrentPage} from '../utils/api'
  import {DateFormatter} from '../utils/DateFormatter'

  import Pagination from './common/Pagination';


  export default {
    components: {Pagination},
    name: "News",
    data() {
      return {
        items: [],
        //省略符号
        sign: '...',
        // 从page=4开始省略
        signIndex: 4,
        // 当前页
        currentPage: 1,
        // 总页数
        totalPageCount: 1,
      };
    },
    methods: {
      formatDate: function (timestamp) {
        return DateFormatter.formatDate(new Date(timestamp), "yyyy年MM月dd日");
      },
      pageChange: function (page) {
        this.currentPage = page;
        this.renderPage();
      },
      renderPage: function () {
        getPublishTotalPageCount((data) => {
          this.totalPageCount = data;
          getPublishCurrentPage(this.currentPage, (data) => {
            this.items = data;
            this.$refs.Pagination.renderPagination();
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




</style>


