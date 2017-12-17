<!--
 主体框架
-->
<template>
  <div id="app">

    <!-- 导航栏 -->
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#"><img src="../static/img/logo.png" style="max-height: 80px;"/></a>
      <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsItems" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">-->
        <!--<span class="navbar-toggler-icon"></span>-->
      <!--</button>-->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsItems" aria-controls="navbarsItems" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarsItems">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">首页<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">公司简介</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">业务范围</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">新闻动态</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">成果业绩</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">公示公告</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">人才招聘</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">联系我们</a>
          </li>
        </ul>
      </div>
    </nav>
    <main role="main">
      <!-- Main jumbotron for a primary marketing message or call to action -->
        <div class="" id="banner">
          <!--<div class="col-md-12">-->
            <img src="../static/img/banner.png" class="img-fluid center-block"/>
          <!--</div>-->
        </div>

      <div class="container">
        <h2 style="margin-bottom: 30px;">关于我们</h2>
        <!-- Example row of columns -->
        <div class="row justify-content-center">
          <div class="col-md-5" style="max-height: 250px; overflow: hidden;">
            <img src="../static/img/about-us-left-banner.jpg"/>
          </div>
          <div class="col-md-5 text-left">
            <p>
              南通新视野环保科技有限公司是综合性环保技术服务性公司。公司凭借专业、严谨的技术能力和灵活、高效的协调能力，得到了客户及各级环境管理部门的认可和支持，享有良好的认可度及信誉度。<br/><br/>
              <span class="font-weight-bold">服务范围：</span><br/>
              企业环保顾问、策化企业项目竣工环保自主验收技术服务、代理申领排污许可证技术服务、企业环境风险应急预案编制技术服务、环境污染治理服务、项目环评服务、清洁生产技术服务、环境监测服务、水污染治理设施运营服务等。
            </p>
          </div>
          <!--<div class="col-md-4">-->
            <!--<h2>Heading</h2>-->
            <!--<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>-->
            <!--<p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>-->
          <!--</div>-->
          <!--<div class="col-md-4">-->
            <!--<h2>Heading</h2>-->
            <!--<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>-->
            <!--<p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>-->
          <!--</div>-->
        </div>
        <hr>
      </div> <!-- /container -->

      <div class="container" id="news">
        <h2>行业动态</h2>
        <!-- Example row of columns -->
        <div class="row justify-content-center text-left">
          <div class="col-md-10 border-left">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          </div>
        </div>
        <div class="row justify-content-center text-left">
          <div class="col-md-10 border-left">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          </div>
        </div>
        <div class="row justify-content-center text-left">
          <div class="col-md-10 border-left">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          </div>
        </div>
        <hr>
      </div> <!-- /container -->


      <div class="container" id="exhibitedProjects">
        <h2>成果展示</h2>
        <!-- Example row of columns -->
        <div class="row justify-content-center text-left">
          <div class="col-md-10 border-left">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          </div>
        </div>
        <div class="row justify-content-center text-left">
          <div class="col-md-10 border-left">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          </div>
        </div>
        <div class="row justify-content-center text-left">
          <div class="col-md-10 border-left">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          </div>
        </div>
      </div> <!-- /container -->


      <div class="container" id="relatedLinks">
        <h2>友情链接</h2>
        <!-- Example row of columns -->
        <div class="row justify-content-center link-col">
          <div class="col-md-2">
            <p>
              <a href="http://www.haian.gov.cn/zgha/" target="_blank">海安县人民政府</a>
              <a href="http://www.haian.gov.cn/zgha/jyh/060012/060012003/" target="_blank">海安县环保局</a>
              <a href="http://www.haian.gov.cn/zgha/jyh/060009/060009002/" target="_blank">海安县发改委</a>
            </p>
          </div>
          <div class="col-md-2">
            <p>
              <a href="http://www.haian.gov.cn/zgha/jyh/060011/060011002" target="_blank">海安县国土局</a>
              <a href="http://www.haian.gov.cn/zgha/jyh/060009/060009002" target="_blank">海安县发改委</a>
              <a href="http://www.haian.gov.cn/zgha/jyh/060013/060013002" target="_blank">海安建管局</a>
            </p>
          </div>
          <div class="col-md-2">
            <p>
              <a href="http://www.haian.gov.cn/zgha/" target="_blank">海安县人民政府</a>
              <a href="http://www.haian.gov.cn/zgha/jyh/060012/060012003/" target="_blank">海安县环保局</a>
              <a href="http://www.haianw.com/" target="_blank">海安网</a>
            </p>
          </div>
        </div>
      </div> <!-- /container -->

    </main>
    <footer class="container">
      <section id="rightsDeclare"><p>&copy;2018 All right reserved. 南通新视野环保科技有限公司版权所有</p></section>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h2 {
  font-size: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline-block;
  margin: 0 0px;
  font-size: 0.9rem;
  font-weight: bold;
}


/* 定制nav */
.navbar-light .navbar-nav .nav-link {
  color: #000;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #4fd2c2;
}

#rightsDeclare {
  font-size: 0.8rem;
}

/*定制首页大图*/
#banner {
}

/* 定制友情链接 */
#relatedLinks{
  padding: 20px 10px 10px 10px;
  background-color: #5d5857;
}
#relatedLinks a {
  display: block;
  color: #989898;
  font-size: 0.8rem;
}
#relatedLinks h2 {
  color: #fff;
}
.link-col div:not(:last-child) {
  border-right: 1px solid #989898;
}
.link-col p {
  margin-bottom: 0.2rem;
}

/*定制成果展示模块*/
.border-left {
  margin: 10px 0px;
  border-left: 5px solid lightseagreen;
  /*border-radius: 10px;*/
}

/* 定制news模块 */
main>div:not(:last-child){
  margin-bottom: 2rem;
}
/* 定制footer */
footer {
  margin: 10px 0;
  font-weight: bold;
}




</style>
