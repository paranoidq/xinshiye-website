<template id="head-nav">

  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <router-link class="navbar-brand" to="/home">
          <img src="../../assets/img/logo.png" class="img-fluid"/>
        </router-link>
      </div>


      <div id="navbar" class="collapse navbar-collapse navbar-right">
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <router-link to="/home" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/home/*')}">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/about/*')}">公司简介</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/news/*')}">新闻动态</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/projects/*')}">成果业绩</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/publish" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/publish/*')}">公示公告</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/hr" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/hr/*')}">人才招聘</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/contact/*')}">联系我们</router-link>
          </li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>


  <!-- 导航栏 -->
  <!--<nav id="top-nav" class="navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-end">-->

    <!--<div class="container">-->
      <!--<router-link class="navbar-brand text-left" to="/home">-->
        <!--<img src="../../assets/img/logo.png" class="img-fluid"/>-->
      <!--</router-link>-->

      <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsItems" aria-controls="navbarsItems" aria-expanded="false" aria-label="Toggle navigation">-->
        <!--<span class="navbar-toggler-icon"></span>-->
      <!--</button>-->


      <!--<div class="collapse navbar-collapse justify-content-end" id="navbarsItems">-->
        <!--<ul class="navbar-nav">-->
          <!--<li class="nav-item">-->
            <!--<router-link to="/home" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/home/*')}">首页</router-link>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
            <!--<router-link to="/about" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/about/*')}">公司简介</router-link>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
            <!--<router-link to="/news" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/news/*')}">新闻动态</router-link>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
            <!--<router-link to="/projects" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/projects/*')}">成果业绩</router-link>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
            <!--<router-link to="/publish" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/publish/*')}">公示公告</router-link>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
            <!--<router-link to="/hr" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/hr/*')}">人才招聘</router-link>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
            <!--<router-link to="/contact" class="nav-link" v-bind:class="{'highlight-section': this.$route.path.match('/contact/*')}">联系我们</router-link>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
  <!--</nav>-->
</template>

<style>
  /* 定制nav */
  .navbar-light .navbar-nav .nav-link {
    color: #000;
    font-size: 1rem;
    font-weight: 900;
  }
  #top-nav {
    border-bottom: 1px solid #4fd2c2;
  }
  #top-nav .nav-item {
    margin-right: 1rem;
  }

  /* 定制nav-bar toggle */
  .navbar-toggle {
  }


  /* 定制nav-brand和图片 */
  .navbar-brand {
    padding-left: 0;
    margin-right: 0;
    padding-right: 0;
    padding: 10px;
  }
  .navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {
    margin-left: 0;
  }
  .navbar-brand img {
    height: 2rem;
  }

  .navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover {
    color: green;
  }

  .highlight-section {
    background-color: lightseagreen !important;
    color: #ffffff!important;
  }

  .navbar-default .navbar-nav>li>a {
    font-size: 1rem;
    font-weight: bold;
    color: darkslategrey;
  }


</style>

<script>
  export default {
    name: "HeadNav",
  }
</script>
