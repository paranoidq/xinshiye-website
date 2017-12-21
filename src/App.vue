<!--
 主体框架
-->
<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav id="top-nav" class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <router-link class="navbar-brand" to="/home"><img src="../static/img/logo.png" style="max-height: 60px;"/></router-link>
      <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsItems" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">-->
        <!--<span class="navbar-toggler-icon"></span>-->
      <!--</button>-->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsItems" aria-controls="navbarsItems" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarsItems">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">公司简介</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link">新闻动态</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">成果业绩</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/publish" class="nav-link">公示公告</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/hr" class="nav-link">人才招聘</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">联系我们</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <transition :name="transitionName" appear appearClass="slide-fade-appear-class" appearActiveClass="slide-fade-appear-active-class">
      <router-view class="child-view"></router-view>
    </transition>
    <footer class="">
      <div class="" id="relatedLinks">
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
              <a href="http://www.haian.gov.cn/zgha/infodetail/?infoid=0b1f0d8c-bd49-4835-94aa-126d34ded9bf&categoryNum=012007" target="_blank">海安慢思</a>
              <a href="http://www.haian.gov.cn/zgha/infodetail/?infoid=d07500a9-a8ce-4d6a-bde7-e0cc541f8f8a&categoryNum=012007" target="_blank">海安石板街</a>
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
    	transitionName: 'slide-left'
    }
  },
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


  /* 定制nav */
  .navbar-light .navbar-nav .nav-link {
    color: #000;
    font-size: 1rem;
    font-weight: bold;
  }
  .navbar-light .navbar-nav .nav-link:hover {
    color: #4fd2c2;
    text-decoration:none!important;
  }
  #top-nav {
    border-bottom:1px solid #4fd2c2;
  }
  #top-nav a:focus {
    color: black;
  }

  /* 定制友情链接 */
  #relatedLinks{
    padding: 20px 10px 10px 10px;
    background-color: #5d5857;
  }
  #relatedLinks a {
    display: block;
    color: #c4c4c4;
    font-size: 0.8rem;
  }
  #relatedLinks h2 {
    color: #fff;
    margin-bottom:1rem;
  }
  .link-col div:not(:last-child) {
    border-right: 1px solid #989898;
  }
  .link-col p {
    margin-bottom: 0.2rem;
  }


  /* 定制footer */
  footer {
    margin: 5rem 0 0 0;
    font-weight: bold;
  }
  footer #rightsDeclare {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  footer #rightsDeclare p {
    margin-bottom: 0.4rem;
  }

  /* 定制模块间距 */
  main>.container:not(:last-child){
    margin-bottom: 0rem;
  }

  /* 定制面包屑 */
  .breadcrumb {
    background-color: transparent;
    border-bottom: 1px solid #4fd2c2;
    border-radius: 0px;
  }
  .breadcrumb-item a {
    color: lightseagreen;
  }
  .breadcrumb {
    font-weight: bold;
  }

  /* 定制页面title */
  .container .para-title {
    transform-style: preserve-3d;
    padding: 10px 20px;
    border-radius: 5px;
    color: lightseagreen;
  }

  .container .para-title .oi {
    top: 3px;
  }

  main>.container {
    padding-top: 2rem;
  }

  main>.container:first-child {
    margin-bottom: 0px;
  }


  /*定制icon*/
  .container h2 .oi {
    padding-right:1rem;
  }

  /*定制列表页面和detail日期标签*/
  .detail-container .badge {
    background: coral;
    margin: 0 0.2rem;
  }
  .list-line .badge {
    vertical-align: 20%;
    background: coral;
    float: right;
  }

  .slide-left-enter {
    opacity: 0.5;
    transform: translate(-100px, 0);
    /*transform: rotateY(45deg);*/
  }

  /*.slide-left-enter-active, .slide-right-leave-active {*/
    /*opacity: 0.5;*/
    /*transform: translate(-100px, 0);*/
    /*!*transform: rotateY(45deg);*!*/
  /*}*/
  /*.slide-left-leave-active, .slide-right-enter {*/
    /*opacity: 0.8;*/
    /*transform: translate(-100px, 0);*/
    /*!*transform: rotateY(45deg);*!*/
  /*}*/
  /*.child-view {*/
    /*transition: all .8s cubic-bezier(.55,0,.1,1);*/
  /*}*/



</style>
