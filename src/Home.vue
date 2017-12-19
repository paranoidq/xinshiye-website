<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="../static/img/banner.png" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-12">
          <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><span class="oi oi-list"></span></li>
              <li class="breadcrumb-item"><router-link to="/home"><a href="#">首页</a></router-link></li>
              <!--<li class="breadcrumb-item active" aria-current="page">公司简介</li>-->
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <h2 class="para-title">关于我们</h2>
      <!-- Example row of columns -->
      <div class="row justify-content-center">
        <div class="col-md-4 img-fluid" style="max-height: 250px; overflow: hidden;">
          <img src="../static/img/about-us-left-banner.jpg" class="img-fluid"/>
        </div>
        <div class="col-md-8 text-left">
          <p>
            南通新视野环保科技有限公司是综合性环保技术服务性公司。公司凭借专业、严谨的技术能力和灵活、高效的协调能力，得到了客户及各级环境管理部门的认可和支持，享有良好的认可度及信誉度。<br/><br/>
            <span class="font-weight-bold">服务范围：</span><br/>
            企业环保顾问、策化企业项目竣工环保自主验收技术服务、代理申领排污许可证技术服务、企业环境风险应急预案编制技术服务、环境污染治理服务、项目环评服务、清洁生产技术服务、环境监测服务、水污染治理设施运营服务等。
          </p>
        </div>
      </div>
      <hr>
    </div> <!-- /container -->

    <div class="container" id="home-news">
      <h2 class="para-title">行业动态</h2>
      <!-- Example row of columns -->

      <div class="row justify-content-center">
        <div class="list-group col-md-12 text-left">
          <router-link  v-for="item in latestNews" :to="`/news/${item.id}`" class="list-group-item list-group-item-light">
            <span class="oi oi-bullhorn"></span>&nbsp;&nbsp;&nbsp;{{item.title}}
          </router-link>
        </div>
      </div>
    </div> <!-- /container -->

    <div class="container" id="home-projects">
      <h2 class="para-title">成果展示</h2>
      <div class="row justify-content-center">
        <div v-for="item in latestProjects.slice(0, 3)" class="col-md-4">
          <div class="card">
            <router-link class="card-header" :to="`/projects/${item.id}`">{{item.title}}</router-link>
            <div class="card-body">
              <p class="card-text">{{item.desc}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="item in latestProjects.slice(3, 6)" class="col-md-4">
          <div class="card">
            <router-link class="card-header" :to="`/projects/${item.id}`">{{item.title}}</router-link>
            <div class="card-body">
              <p class="card-text">{{item.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- /container -->

  </main>
</template>

<style>
  #home-news .row:not(:first-child) {
    margin-top: 20px;
  }
  #home-news {
    margin: 5rem auto;
  }
  #home-news a{
    border-radius: 0px;
    border: 0 dotted lightseagreen;
    border-bottom-width: 1px;
    background-color: transparent;
  }
  #home-news a:hover {
    background-color: lightseagreen;
    color: #fff;
    transition-duration: 0.2s;
    border-color: #fff;
    border-bottom-style: solid;
    font-weight:bold;
  }
  #home-news a:not(:last-child) {
    margin-bottom: 10px;
  }

  #home-projects .row:not(:first-child){
    margin-top:20px;
  }

  #home-projects .card-body {
    color: #818182;
    max-width: 500px;
    height: 120px;
    overflow: hidden;
  }
  #home-projects .card-header {
    color: #818182;
    font-size: 1.1rem;
    font-weight:bold;
  }

  #home-projects .card-header:hover {
    text-decoration: none;
  }

  #home-projects .card:hover .card-header {
    border-color: lightseagreen;
    background-color: lightseagreen!important;
    color: #fff;
    border-bottom-color: whitesmoke;
  }
  /*#home-projects .card:hover .card-body {*/
    /*border-color: lightseagreen;*/
    /*background-color: lightseagreen!important;*/
    /*color: #fff;*/
  /*}*/



</style>

<script>

  const maxTitleLen = 12;

  var mockNews = [
  	  {"id":"1", "title":"县环保局积极开展反贪腐活动", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
      {"id":"2", "title":"“中科院专家走进海安”能源环保科技成果发布会", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
      {"id":"3", "title":"县环保局：走访企业办实事", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
      {"id":"4", "title":"海安环保：开展“走访企业 服务基层”活动", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
      {"id":"5", "title":"县环保局召开团支部大会 推选入党积极分子", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
      {"id":"6", "title":"海安纪委监察局以四项制度力推“263”专项行动", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
  	  ];

  mockNews = mockNews.map(item =>{
    if (item.title.length > maxTitleLen) {
      item.title = item.title;
    }
    return item;
  });

  var mockProjects = [
  	{"id":"1", "title":"县环保局积极开展反贪腐活动", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
    {"id":"2", "title":"“中科院专家走进海安”能源环保科技成果发布会", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
    {"id":"3", "title":"县环保局：走访企业办实事", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
    {"id":"4", "title":"海安环保：开展“走访企业 服务基层”活动", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
    {"id":"5", "title":"县环保局召开团支部大会 推选入党积极分子", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
    {"id":"6", "title":"海安纪委监察局以四项制度力推“263”专项行动", "desc":"县环保局积极开展“1219”国际反腐日主题教育活动"},
    ];

  mockProjects = mockProjects.map(item =>{
    if (item.title.length > maxTitleLen) {
      item.title = item.title.slice(0, maxTitleLen) + "...";
    }
    return item;
  });

  export default {
  	name: "Home",
    computed: {
  		latestNews() {
        return mockNews;
      },
      latestProjects() {
        return mockProjects;
      }
    }
  }
</script>
