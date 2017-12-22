<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="../../static/img/banner-about.jpg" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <div class="container" id="home-about">
      <h2 class="para-title" style="margin-bottom: 10px;"><span class="oi oi-people"></span>关于我们</h2>
      <!-- Example row of columns -->
      <div class="row justify-content-center">
        <div class="col-md-4" style="max-height: 300px;">
          <img src="../../static/img/about-us-left-banner.jpg" class="img-fluid" style="border-radius: 5px;"/>
        </div>
        <div class="col-md-8 text-left">
          <p>
            南通新视野环保科技有限公司是综合性环保技术服务性公司。公司凭借专业、严谨的技术能力和灵活、高效的协调能力，得到了客户及各级环境管理部门的认可和支持，享有良好的认可度及信誉度。<br/><br/>
            <span class="font-weight-bold">服务范围：</span><br/>
            <!--、、、、、、、、水污染治理设施运营服务等。-->
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

    <div class="container" id="home-news">
      <h2 class="para-title"><span class="oi oi-pulse"></span>行业新闻</h2>
      <div class="row justify-content-center">
        <div v-for="item in latestNews.slice(0, 3)" class="col-md-4">
          <div class="card">
            <router-link class="" :to="`/news/${item.id}`">
              <img class="card-img-top" :src="`../static/news-img/${item.id}.jpg`" onerror="this.src='../static/img/img-default.gif'" alt="Card image cap"/>
            </router-link>
            <div class="card-body text-left">
              <p class="card-title font-weight-bold">
                {{item.title.length > 18 ? item.title.slice(0, 18)+'...' : item.title}}
              </p>
              <p class="card-text">{{item.detail.length > 60 ? item.detail.slice(0, 60)+'...' : item.detail}}</p>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- /container -->

    <div class="container">
      <div class="row justify-content-center" style="margin-top:0px;">
        <div class="list-group col-md-6 text-left" id="home-projects">
          <h2 class="para-title"><span class="oi oi-aperture"></span>最新业绩</h2>
          <div v-for="item in latestProjects"><router-link  :to="`/projects/${item.id}`" class="list-group-item list-group-item-light">
            {{item.title}}
          </router-link></div>
        </div>

        <!--<div class="col-md-1"></div>-->
        <div class="list-group col-md-6 text-left" id="home-publish">
          <h2 class="para-title text-left"><span class="oi oi-bullhorn"></span>最新公告</h2>
          <div v-for="item in latestPublishes"><router-link :to="`/publish/${item.id}`" class="list-group-item list-group-item-light">
            {{item.title.length> 30 ? item.title.slice(0, 30)+'...' : item.title}}
          </router-link>
          </div>
        </div>
      </div>
    </div> <!-- /container -->

  </main>
</template>

<style>

  #home-about .para-title {
    background: linear-gradient(to left, transparent, lightseagreen, transparent);
    color: #fff;
  }

  /*定制新闻板块*/
  #home-news {
    margin: 5rem auto;
  }
  #home-news .para-title {
    background: linear-gradient(to left, transparent, lightseagreen, transparent);
    color: #fff;
  }

  #home-news .card {
    border-color: #bee5eb;
    box-shadow: 5px 5px 5px #bee5eb;
    position: relative;
  }
  #home-news .card img {
    max-height: 10rem;
    border-bottom: 1px solid #bee5eb;
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


  #home-projects .para-title {
    background: linear-gradient(to right, lightseagreen, transparent);
    color: #fff;
  }

  #home-publish .para-title {
    background: linear-gradient(to right, lightseagreen, transparent);
    color: #fff;
  }

  #home-projects a:hover {
    box-shadow: 5px 5px 5px #bee5eb;
    position: relative;
    right: 5px;
    bottom: 5px;
    background-color: #ffa777;
    color: #fff;
    transition-duration: 0.2s;
  }

  #home-publish a:hover {
    box-shadow: 5px 5px 5px #bee5eb;
    position: relative;
    right: 5px;
    bottom: 5px;
    background-color: #ffa777;
    color: #fff;
    transition-duration: 0.2s;
  }






</style>

<script>

  const maxTitleLen = 12;
  import {getNewsLatest} from '../utils/Api'
  import {getPublishLatest} from '../utils/Api'
  import {getProjectsLatest} from '../utils/Api'


  export default {
  	name: "Home",
    computed: {
    },
    data() {
  		return {
        latestNews: [],
        latestPublishes: [],
        latestProjects: [],
      }
    },
    mounted: function () {
        getNewsLatest(3, (data) => {
        	this.latestNews = data;
        });
        getPublishLatest(6, (data) => {
          this.latestPublishes = data;
        });
        getProjectsLatest(6, (data) => {
          this.latestProjects = data;
        });
    },
  }
</script>
