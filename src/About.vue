<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="../static/img/banner.png" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-12">
          <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/home"><a href="#">首页</a></router-link></li>
              <li class="breadcrumb-item active" aria-current="page">公司简介</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <h2>公司简介</h2>
      <!-- Example row of columns -->
      <div class="row justify-content-center text-left">
        <div class="col-md-4">
          <img src="http://www.ysemm.cn/templets/newysemmcn/images/aboutus-info.png" class="img-fluid"/>
        </div>
        <div class="col-md-8">
          <p>
            南通新视野环保科技有限公司是综合性环保技术服务性公司。其主要技术服务范围：企业环保顾问、策化企业项目竣工环保自主验收技术服务、代理申领排污许可证技术服务、企业环境风险应急预案编制技术服务、环境污染治理服务、项目环评服务、清洁生产技术服务、环境监测服务、水污染治理设施运营服务等。凭借专业、严谨的技术能力和灵活、高效的协调能力，得到了客户及各级环境管理部门的认可和支持，享有良好的认可度及信誉度。
          </p>
          <p>
            公司拥有资深的环境管理和技术人才，整合了社会各方面的环境技术资源，能更好的为企业提供强大的环保技术支撑，是企业开展环保工作强化环保管理的好帮手。
          </p>
          <p>
            公司秉承“科学严谨、优质高效”的服务宗旨，遵循“诚信为本、互利共赢”的经营方针，以科技为先导，以人才为基础，始终不渝地坚持科学、严谨、求实的工作作风，通过不断吸收新的环保政策和环保理念，广集先进的环保技术，为客户提供最佳解决方案。期望通过我们的努力，能为更多的客户解决更多的环保问题，提升客户的企业整体形象。
          </p>
          <p>
            你的需要，就是我们的服务；你的提升，就是我们的目标；你的信任，就是我们的动力！
          </p>
        </div>
      </div>
    </div> <!-- /container -->
  </main>
</template>

<style>
  /* 定制news模块 */
  main>div:not(:last-child){
    margin-bottom: 2rem;
  }
</style>
