<!--新闻动态组件-->
<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="../static/img/banner-news.jpg" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-12">
          <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><span class="oi oi-list"></span></li>
              <li class="breadcrumb-item"><router-link to="/home"><a href="#">首页</a></router-link></li>
              <li class="breadcrumb-item active" aria-current="page">新闻动态</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container" id="news">
      <h2 class="para-title">新闻动态</h2>

      <!--新闻列表-->
      <div v-for="item in items">
        <div class="row justify-content-center text-left">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                {{item.title}}
              </div>
              <div class="card-body">
                <p>{{item.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div> <!-- /container -->
  </main>
</template>

<script>

  var items = Array(5).fill({"title":"新闻标题", "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."});

  export default {
    name: "News",
    computed: {
    	items() {
    		return items;
      }
    }
  }

</script>



<style>

  #news>div:not(:first-child) {
    padding: 10px 0;
  }

  .card-header {
    line-height:0.5rem;
    padding: 0.75rem 1.25rem;
    font-weight: bold;
  }
  .card-body {
    padding: 0.5rem;
  }
  .card-body p {
    margin: 0rem 0;
  }

  .card:hover {
    cursor: pointer;
    border-color: limegreen;
  }

</style>


