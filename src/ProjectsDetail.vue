<!--新闻动态组件-->
<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="../static/img/banner-projects.jpg" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-12">
          <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><span class="oi oi-list"></span></li>
              <li class="breadcrumb-item"><router-link to="/home"><a href="#">首页</a></router-link></li>
              <li class="breadcrumb-item"><router-link to="/projects">成果业绩</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">{{$route.params.id}}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container detail-container">
      <!--<h2 class="para-title text-center"></h2>-->
      <div class="col-md-12 line-content">
        <h2 class="para-title">{{item.title}}</h2>
        <div class="card detail-card">
          <div class="card-body">
            <div v-html="`${item.detail}`" class="card-text text-left">
              </div>
          </div>
        </div>
      </div>
    </div> <!-- /container -->
  </main>
</template>

<script>
  import {getProject} from './Api'

  export default {
    name: "item",
    data() {
      return {
        item: {}
      }
    },
    mounted: function () {
      var rst = getProject(this.$route.params.id,(data) => {
        this.item = data;
      });
    },
  }

</script>



<style>
  .detail-card {
    border: 1px solid lightseagreen ;
    box-shadow: 10px 10px 10px lightseagreen;
    background: whitesmoke;
  }
</style>


