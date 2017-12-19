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
              <li class="breadcrumb-item active" aria-current="page">成果业绩</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container" id="news">
      <h2 class="para-title"><span class="oi oi-globe"></span>成果业绩</h2>

      <!--新闻列表-->
      <div v-for="item in items">
        <div class="row justify-content-center text-left">
          <div class="col-md-12">
            <div class="card">
                <router-link class="card-header" :to="`/news/${item.id}`">{{item.title}}</router-link>
              <div class="card-body">
                <p>{{item.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <nav aria-label="">
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

  var items = Array(5).fill({"id":"1", "title":"新闻标题", "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."});

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
    line-height:1rem;
    padding: 0.75rem 1.25rem;
    font-weight: bold;
    font-size: 1rem;
  }
  .card-body {
    padding: 0.5rem;
  }
  .card-body p {
    margin: 0rem 0;
  }

  #news .card {
    border-color: #bee5eb;
  }
  #news .card-body {
    color: #818182;
    overflow: hidden;
  }
  #news .card-header {
    color: #818182;
    font-size: 1.1rem;
    font-weight:bold;
  }

  #news .card-header:hover {
    text-decoration: none;
  }

  #news .card:hover .card-header {
    background-color: #bee5eb!important;
    color: #2c3e50!important;
    border-bottom-color: #bee5eb;
  }



</style>


