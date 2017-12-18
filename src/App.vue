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
            <router-link to="/home"><a class="nav-link" href="#">首页<span class="sr-only">(current)</span></a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about"><a class="nav-link" href="#">公司简介</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/buss"><a class="nav-link" href="#">业务范围</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news"><a class="nav-link" href="#">新闻动态</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects"><a class="nav-link" href="#">成果业绩</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/publish"><a class="nav-link" href="#">公示公告</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/hr"><a class="nav-link" href="#">人才招聘</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact"><a class="nav-link" href="#">联系我们</a></router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="container">
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


  /* 定制footer */
  footer {
    margin: 10px 0;
    font-weight: bold;
  }

  /* 定制模块间距 */
  main>div:not(:last-child){
    margin-bottom: 2rem;
  }

  /* 定制面包屑 */
  .breadcrumb {
    background-color: transparent;
    border-bottom: 1px solid #4fd2c2;
    border-radius: 0px;
  }
  .breadcrumb-item a {
    color: #4fd2c2;
  }

</style>
