<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="/static/img/banner.png" class="img-fluid center-block" style="width: 100%;"/>
      <!--</div>-->
    </div>

    <div class="home-line" id="home-about">
      <h2 class="para-title" style="margin-bottom: 10px;"><span class="oi oi-people"></span>关于我们</h2>
      <!-- Example row of columns -->
      <div class="row justify-content-center">
        <div class="col-md-4" style="overflow: hidden; max-height: 20rem;">
          <img src="/static/img/about-us-left-banner.jpg" class="img-fluid"/>
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

    <div class="home-line" id="home-news">
      <h2 class="para-title"><span class="oi oi-pulse"></span>行业新闻</h2>
      <div class="row justify-content-center">
        <div v-for="item in latestNews" class="col-md-4">
          <div class="card">
            <router-link class="" :to="`/news/${item.id}`">
              <!--<img class="card-img-top" :src="`../static/news-img/${item.id}.jpg`" onerror="this.src='../static/img/img-default.gif'" alt="Card image cap"/>-->
              <img class="card-img-top" :src="`../static/news-img/3.jpg`" onerror="this.src='../static/img/img-default.gif'" alt="Card image cap"/>
            </router-link>
            <div class="card-body text-left">
              <p class="card-title font-weight-bold overflow-ellipsis">
                {{item.title}}
              </p>
              <p class="card-text" v-html="item.detail.length > newsDetailLen ? item.detail.slice(0, newsDetailLen)+'...' : item.detail"></p>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- /container -->

    <div class="home-line" id="">
      <div class="row justify-content-center" style="margin-top:0px;">
        <div class="list-group col-md-6 text-left" id="home-projects">
          <h2 class="para-title"><span class="oi oi-aperture"></span>最新业绩</h2>
          <div v-for="item in latestProjects"><router-link  :to="`/projects/${item.id}`" class="list-group-item list-group-item-light overflow-ellipsis">
            {{item.title}}
          </router-link></div>
        </div>

        <!--<div class="col-md-1"></div>-->
        <div class="list-group col-md-6 text-left" id="home-publish">
          <h2 class="para-title text-left"><span class="oi oi-bullhorn"></span>最新公告</h2>
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


  export default {
    name: "Home",
    computed: {
    },
    data() {
      return {
        latestNews: [],
        latestPublishes: [],
        latestProjects: [],

        newsDetailLen: 60,
      }
    },
    mounted: function () {
      let store = this.$store;
      let types = this.types;

      getNewsLatest(3, (data) => {
        this.latestNews = data;
      });
      getProjectsLatest(6, (data) => {
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

  .home-line {
    padding: 2rem 3rem;
  }

  /*定制icon*/
  .home-line h2 .oi {
    padding-right:1rem;
  }

  /*定制新闻板块*/
  #home-news {
    margin: 0rem auto;
    background: #f7f9f2;
    padding-bottom: 5rem;
  }

  #home-news .card {
    border-color: #bee5eb;
    box-shadow: 5px 5px 5px #4DB6AC;
    position: relative;
    margin-bottom:0.5rem;
  }
  #home-news .card img {
    border-bottom: 1px solid #bee5eb;
  }

  /* 响应式图片大小 */
  @media(max-width: 1200px) {
    #home-news .card img {
      height: 10rem;
    }
  }
  @media(min-width: 1200px) {
    #home-news .card img {
      height: 15rem;
    }
  }
  @media(min-width: 1400px) {
    #home-news .card img {
      height: 20rem;
    }
  }




  #home-news .card:hover {
    border: 1px solid darkgreen;
    transition: all 0.5s ease;
  }
  #home-news .card-body {
    color: #818182;
    height: 8rem;
    overflow: hidden;
    padding:0.5rem;
  }

  #home-projects a:hover {
    position: relative;
    background-color: #ffa777!important;
    color: #fff!important;
    transition: transform 0.5s;
  }

  #home-publish a:hover {
    position: relative;
    background-color: #ffa777!important;
    color: #fff!important;
    transition: transform 0.5s;
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


    /* 定制页面title */
  .home-line .para-title {
    transform-style: preserve-3d;
    padding: 10px 20px;
    color: #00796B;
  }

  .home-line .card-text *{
    font-size: 1rem;
    font-weight:normal;
    line-height: 1.5;
  }


</style>

