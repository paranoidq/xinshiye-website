<!--新闻动态组件-->
<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="../../static/img/banner-news.jpg" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-12">
          <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><span class="oi oi-list"></span></li>
              <li class="breadcrumb-item"><router-link to="/home"><a href="#">首页</a></router-link></li>
              <li class="breadcrumb-item active" aria-current="page">新闻动态</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container list-lines">
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
                  <span class="badge badge-primary" v-text="formatDate(item.publishTimestamp)"></span>
                </router-link>
              <div class="card-body">
                <p>{{item.detail.length > 110 ? item.detail.slice(0, 110)+'...' : item.detail}}</p>
                <!--<p>{{item.desc}}</p>-->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <nav aria-label="">
          <ul class="pagination" id="news-pagination">
            <li class="page-item">
              <a class="page-link" v-if="currentPage==1">首页</a>
              <a class="page-link" v-else href="javascript:;" @click="goPage(1)">首页</a>
            </li>
            <li class="page-item">
              <a class="page-link" v-if="currentPage<=1">上一页</a>
              <a class="page-link" v-else href="javascript:;" @click="goPage(currentPage-1)">上一页</a>
            </li>

            <li class="page-item" v-for="item in pageList">
              <a class="page-link" v-if="currentPage == item.key || sign == item.key">{{item.key}}</a>
              <a class="page-link" v-else href="javascript:;" @click="goPage(item.value)">{{item.key}}</a>
            </li>

            <li class="page-item">
              <a class="page-link" v-if="currentPage>=totalPageCount">下一页</a>
              <a class="page-link" v-else href="javascript:;" @click="goPage(currentPage+1)">下一页</a>
            </li>
            <li class="page-item">
              <a class="page-link" v-if="currentPage==totalPageCount">尾页</a>
              <a class="page-link" v-else href="javascript:;" @click="goPage(totalPageCount)">尾页</a>
            </li>
          </ul>
        </nav>
      </div>
    </div> <!-- /container -->
  </main>
</template>

<script>
  import {getAllNews} from '../utils/Api'
  import {getNewsTotalPageCount} from '../utils/Api'
  import {getNewsCurrentPage} from '../utils/Api'
  import {DateFormatter} from '../utils/DateFormatter'

  export default {
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
        totalPageCount: 4,
        // 页面数组列表
        pageList: []
      };
    },
    methods: {
      formatDate: function (timestamp) {
          return DateFormatter.formatDate(new Date(timestamp), "yyyy年MM月dd日");
      },
      goPage: function (i) {
          this.currentPage = i;
          this.fetchData(i);
      },
      fetchData: function (i=1) {
        getNewsTotalPageCount((data) => {
        	this.pageList = [];
        	this.totalPageCount = data;
          var tmp = null;

        	if (this.totalPageCount > 6) {
            if (((this.totalPageCount-1) == (this.totalPageCount - this.currentPage)) && (this.totalPageCount - this.currentPage) > 5) {
              for (let i=1; i<7; i++) {
              	if (i < this.signIndex) {
              		tmp = {key: i, value: i};
                } else if (i == this.signIndex) {
              		tmp = {key: this.sign, value: 0};
                } else if (i == (this.signIndex + 1) ) {
                  tmp = {key:this.totalPageCount - 1, value:this.totalPageCount - 1 };
                } else {
                  tmp = {key:this.totalPageCount, value:this.totalPageCount };
                }
                this.pageList.push(tmp)
              }
            } else if (((this.totalPageCount - this.currentPage) <= this.signIndex)){
              var starNum = this.totalPageCount - 5;
              for (let i=starNum;i<starNum+6;i++) {
                tmp = {key:i, value:i }
                this.pageList.push(tmp)
              }
            } else {
              var starNum = this.currentPage - 1;
              for (let i=1;i<7;i++) {
                if (i < this.signIndex) {
                  tmp = {key:(starNum - 1) + i, value:(starNum - 1) + i }
                } else if (i== this.signIndex) {
                  tmp = {key:this.sign, value:0 }
                } else if (i == (this.signIndex + 1) ) {
                  tmp = {key:this.totalPageCount - 1, value:this.totalPageCount - 1 }
                } else {
                  tmp = {key:this.totalPageCount, value:this.totalPageCount }
                }
                this.pageList.push(tmp)
              }
            }
          } else {
            for (var i =0; i <this.totalPageCount; i++) {
              tmp = {key:i+1, value:i+1 }
              this.pageList.push(tmp)
            }
          }
        }).then(getNewsCurrentPage(i, (data) => {
        	this.items = data;
        }));
      }
    },
    mounted: function () {
      this.fetchData();
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


