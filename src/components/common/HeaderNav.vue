<template id="head-nav">
  <!-- 导航栏 -->
  <nav id="top-nav" class="navbar navbar-expand-md navbar-light bg-light fixed-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsItems" aria-controls="navbarsItems" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link class="navbar-brand col-sm-3" style="width: 80%; margin-right: 0;" to="/home"><img src="/static/img/logo.png" class="img-fluid"/></router-link>


    <div class="collapse navbar-collapse justify-content-end" id="navbarsItems">
      <ul class="navbar-nav">
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
    </div>
  </nav>
</template>

<style>
  /* 定制nav */
  .navbar-light .navbar-nav .nav-link {
    color: #000;
    font-size: 1rem;
    font-weight: bold;
  }
  .navbar-light .navbar-nav .nav-link:hover {
    color: #FF6D00;
    text-decoration:none!important;
  }
  #top-nav {
    border-bottom:1px solid #4fd2c2;
  }
  #top-nav a:focus {
    color: black;
  }

  .highlight-section {
    color: #FF6D00!important;
    border-bottom: 1px solid #FF6D00;
  }
</style>

<script>
  export default {
    name: "HeadNav",
  }
</script>
