<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <banner :bannerSrc="bannerSrc"></banner>

    <div class="home-line container" id="home-about">
      <h4 class="para-title text-left">
        <router-link :to="`/about`"><span class="oi oi-person"></span>
          关于我们
        </router-link>
      </h4>
      <!-- Example row of columns -->
      <div class="row justify-content-center">
        <div class="col-md-4" style="overflow: hidden; max-height: 20rem;">
          <img src="../assets/img/about-us-left-banner.jpg" class="img-fluid"/>
        </div>
        <div class="col-md-8 text-left">
          <p style="text-align:justify">
            南通新视野环保科技有限公司是综合性环保技术服务性公司。公司凭借专业、严谨的技术能力和灵活、高效的协调能力，得到了客户及各级环境管理部门的认可和支持，享有良好的认可度及信誉度。
            <br/>
            公司秉承“科学严谨、优质高效”的服务宗旨，遵循“诚信为本、互利共赢”的经营方针，以科技为先导，以人才为基础，始终不渝地坚持科学、严谨、求实的工作作风，通过不断吸收新的环保政策和环保理念，广集先进的环保技术，为客户提供最佳解决方案。期望通过我们的努力，能为更多的客户解决更多的环保问题，提升客户的企业整体形象。
            <br/><br/>
            <span class="font-weight-bold">服务范围：</span><br/>
          </p>
          <table class="table table-striped">
            <tbody>
            <tr class="table-info">
              <td>环保技术服务（环保顾问）</td>
              <td>项目竣工环保验收服务</td>
              <td>申请排污许可证服务</td>
            </tr>
            <tr>
              <td>企业环境风险应急预案服务</td>
              <td>项目环评服务</td>
              <td>环境污染治理服务</td>
            </tr>
            <tr class="table-info">
              <td>环境监测服务</td>
              <td>水污染治理设施运营服务</td>
              <td>清洁生产审核服务</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> <!-- /container -->

      <div class="home-line container" id="home-news">
        <h4 class="para-title text-left">
          <router-link :to="`/projects`"><span class="oi oi-external-link"></span>
            项目合作
          </router-link>
        </h4>
        <div class="row justify-content-center">
          <div v-for="item in latestProjects" class="col-md-4">
            <div class="card">
              <router-link :to="`/projects/${item.id}`">
                <!--<img class="card-img-top" :src="`../static/news-img/${item.id}.jpg`" onerror="this.src='../static/img/img-default.gif'" alt="Card image cap"/>-->
                <img class="card-img-top" :src="`../static/news-img/3.jpg`" onerror="this.src='../static/img/img-default.gif'" alt="Card image cap"/>
              </router-link>
              <div class="card-body text-left">
                <p class="card-title font-weight-bold overflow-ellipsis">
                  {{item.title}}
                </p>
                <!--<p class="card-text" v-html="item.detail.length > newsDetailLen ? item.detail.slice(0, newsDetailLen)+'...' : item.detail"></p>-->
              </div>
            </div>
          </div>
        </div>
      </div> <!-- /container -->

      <div class="home-line container">
        <div class="row justify-content-center" style="margin-left: 0; margin-right: 0;">
          <div class="list-group col-md-6 text-left" id="home-projects">
              <h4 class="para-title">
                <router-link :to="`/news`"><span class="oi oi-audio-spectrum"></span>
                  新闻动态
                </router-link>
              </h4>
            <div v-for="item in latestNews"><router-link  :to="`/news/${item.id}`" class="list-group-item list-group-item-light overflow-ellipsis">
              {{item.title}}
            </router-link></div>
          </div>

          <!--<div class="col-md-1"></div>-->
          <div class="list-group col-md-6 text-left" id="home-publish">
            <h4 class="para-title">
              <router-link :to="`/publish`"><span class="oi oi-bell"></span>
                最新公告
              </router-link>
            </h4>
            <div v-for="item in latestPublishes"><router-link :to="`/publish/${item.id}`" class="list-group-item list-group-item-light overflow-ellipsis">
              {{item.title}}
            </router-link>
            </div>
          </div>
        </div>
      </div> <!-- /container -->
  </main>
</template>

<script>

  import {getNewsLatest} from '../utils/api'
  import {getPublishLatest} from '../utils/api'
  import {getProjectsLatest} from '../utils/api'
  import Banner from "./common/Banner";


  export default {
    components: {Banner},
    name: "Home",
    computed: {
    },
    data() {
      return {
        latestNews: [],
        latestPublishes: [],
        latestProjects: [],

        newsDetailLen: 60,

        bannerSrc: require('../assets/img/banner.png'),
      }
    },
    mounted: function () {
      let store = this.$store;
      let types = this.types;

      getNewsLatest(6, (data) => {
        this.latestNews = data;
      });
      getProjectsLatest(3, (data) => {
        this.latestProjects = data;
      });
      getPublishLatest(6, (data) => {
        this.latestPublishes = data;
        store.commit(types.LOADED);
      });
    },
  }
</script>

<style>

  .home-line .row {
    /*background-color: #fff;*/
    /*padding: 1rem 2rem;*/
    /*box-shadow: 0 0 6px 0 lightseagreen*/
    padding: 1rem 0;
  }

  /*定制icon*/
  .home-line h4 .oi {
    padding-right:1rem;
  }

  #home-news .card {
    border-color: #bee5eb;
    position: relative;
    margin-bottom:0.5rem;
  }
  #home-news .card img {
    border-bottom: 1px solid #bee5eb;
    height: 10rem;
  }

  /*!* 响应式图片大小 *!*/
  /*@media(max-width: 960px) {*/
    /*#home-news .card img {*/
      /*height: 10rem;*/
    /*}*/
  /*}*/
  /*@media(min-width: 1200px) {*/
    /*#home-news .card img {*/
      /*height: 15rem;*/
    /*}*/
  /*}*/
  /*@media(min-width: 1400px) {*/
    /*#home-news .card img {*/
      /*height: 20rem;*/
    /*}*/
  /*}*/

  #home-news .card:hover {
    border: 1px solid #fff;
    box-shadow: 0px 0px 15px 0px #4DB6AC;
  }
  #home-news .card:hover .card-body {
    color: #fff;
    background: #4DB6AC;
  }
  #home-news .card-body {
    color: #818182;
    overflow: hidden;
    padding:0.5rem;
  }


  #home-projects  .list-group-item {
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-top: none;
  }
  #home-publish .list-group-item {
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-top: none;
  }
  #home-projects .list-group-item:hover {
    position: relative;
    background-color: lightseagreen!important;
    color: #fff!important;
  }

  #home-publish .list-group-item:hover {
    position: relative;
    background-color: lightseagreen!important;
    color: #fff!important;
  }


    /* 定制页面title */
  .home-line .para-title {
    padding: 0.5rem 1rem;
    border-radius: 0;
    border-bottom: 2px solid lightseagreen;
  }
  .home-line .para-title a {
    color: darkgreen;
  }
  .home-line .para-title a:hover {
    color: darkblue;
    text-decoration: none;
  }


  .home-line .card-text *{
    font-size: 1rem;
    font-weight:normal;
    line-height: 1.5;
  }

  /* 取消.list-group-item-light默认背景 */
  .list-group-item-light {
    background: transparent;
  }


</style>

