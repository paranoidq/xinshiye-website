<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="../static/img/banner-contactus.jpg" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-12">
          <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><span class="oi oi-list"></span></li>
              <li class="breadcrumb-item"><router-link to="/home"><a href="#">首页</a></router-link></li>
              <li class="breadcrumb-item active" aria-current="page">联系我们</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row row-contactus-info">
        <div class="col-lg-4 col-xs-4">
          <span class="icon-contactus icon-address"></span>
          <div class="contactus-item">
            <p>注册地址：江苏省南通市海安县高新区曙光新村4号楼3号</p>
          </div>
        </div>
        <div class="col-lg-4 col-xs-4">
          <span class="icon-contactus icon-tel"></span>
          <div class="contactus-item">
            <p>联系电话：86-0513-88866136<br/>移动电话：(+86)13606279979</p>
          </div>
        </div>
        <div class="col-lg-4 col-xs-4">
          <span class="icon-contactus icon-website"></span>
          <div class="contactus-item">
            <p>公司网站：http://www.xinshiye.com<br/>企业邮箱：2175752748@qq.com</p>
          </div>
        </div>
      </div>
    </div> <!-- /container -->

    <div class="container">
    </div>
  </main>
</template>


<style>
  #buss li {
    border-left: 0px;
    border-right: 0px;
  }
  .row-contactus-info {
    padding-top: 60px;
  }

  .icon-contactus.icon-address {
    background: url("../static/img/icon-contactus-address.png");
  }
  .icon-contactus.icon-tel {
    background: url("../static/img/icon-contactus-tel.png");
  }
  .icon-contactus.icon-website {
    background: url("../static/img/icon-contactus-website.png");
  }
  .icon-contactus {
    width: 119px;
    height: 119px;
    display: block;
    position: absolute;
    left: 135px;
  }
  .contactus-item {
    border: 1px solid #ccc;
    padding: 70px 20px 0px 20px;
    margin-top:  60px;
    box-shadow: 8px 8px 10px lightgrey;
  }
  .contactus-item p {
    letter-spacing: 1px;
    text-align: center;
    min-height:30px;
    line-height: 30px;
  }


</style>
