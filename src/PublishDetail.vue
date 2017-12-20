<!--新闻动态组件-->
<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="../static/img/banner-publish.jpg" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-12">
          <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><span class="oi oi-list"></span></li>
              <li class="breadcrumb-item"><router-link to="/home"><a href="#">首页</a></router-link></li>
              <li class="breadcrumb-item"><router-link to="/publish">公示公告</router-link></li>
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
        <h6>
          <span class="badge badge-danger text-white" v-text="'发布时间: ' + formatDate(item.publishTimestamp)"></span>
          <span class="badge badge-danger text-white" v-text="'作者: Admin' "></span>
          <span class="badge badge-danger text-white" v-text="'来源: Admin' "></span>
        </h6>
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
  import {getPublish} from './Api'
  import {DateFormatter} from './DateFormatter'

  export default {
    name: "item",
    data() {
      return {
        item: {}
      }
    }, methods: {
      formatDate: function (timestamp) {
        return DateFormatter.formatDate(new Date(timestamp), "yyyy年MM月dd日");
      }
    },
    mounted: function () {
      var rst = getPublish(this.$route.params.id,(data) => {
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


