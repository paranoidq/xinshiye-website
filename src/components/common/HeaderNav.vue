<template id="head-nav">
  <!-- 导航栏 -->
  <nav id="top-nav" class="navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-end">

    <div class="container">
      <router-link class="navbar-brand text-left" to="/home">
        <img src="../../assets/img/logo.png" class="img-fluid"/>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsItems" aria-controls="navbarsItems" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


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
    color: darkgreen;
    text-decoration:none!important;
  }
  #top-nav {
    border-bottom: 1px solid #4fd2c2;
  }

  #top-nav a:focus {
    color: black;
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
  }
  .navbar-brand img {
    height: 2.5rem;
  }

  .highlight-section {
    color: darkgreen!important;
    border-bottom: 1px solid darkgreen;
  }
</style>

<script>
  export default {
    name: "HeadNav",
  }
</script>
