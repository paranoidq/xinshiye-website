<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <banner :bannerSrc="bannerSrc"></banner>

    <navMap :currentNav="currentNav"></navMap>

    <div class="container" id="about" style="padding-top: 0!important;">
      <h4 class="para-title text-left"><span class="oi oi-people"></span>公司简介</h4>
      <!-- Example row of columns -->
      <div class="row justify-content-center text-left">
        <div class="col-md-4">
          <img src="../assets/img/about-1.png" class="img-responsive"/>
        </div>
        <div class="col-md-8">
          <p>
            南通新视野环保科技有限公司是综合性环保技术服务性公司。其主要技术服务范围：企业环保顾问、策化企业项目竣工环保自主验收技术服务、代理申领排污许可证技术服务、企业环境风险应急预案编制技术服务、环境污染治理服务、项目环评服务、清洁生产技术服务、环境监测服务、水污染治理设施运营服务等。凭借专业、严谨的技术能力和灵活、高效的协调能力，得到了客户及各级环境管理部门的认可和支持，享有良好的认可度及信誉度。
          </p>
          <p>
            公司拥有资深的环境管理和技术人才，整合了社会各方面的环境技术资源，能更好的为企业提供强大的环保技术支撑，为企业提供一站式环保解决方案，是企业开展环保工作强化环保管理的好帮手。
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

    <div class="container" id="buss">
      <h4 class="para-title text-left"><span class="oi oi-spreadsheet"></span>业务范围</h4>
      <!-- Example row of columns -->
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <ul class="list-group">
            <li class="list-group-item">环保技术服务（环保顾问）</li>
            <li class="list-group-item">项目竣工环保验收服务</li>
            <li class="list-group-item">申请排污许可证服务</li>
          </ul>
        </div>
        <div class="col-md-4 text-center">
          <ul class="list-group">
            <li class="list-group-item">企业环境风险应急预案服务</li>
            <li class="list-group-item">项目环评服务</li>
            <li class="list-group-item">环境污染治理服务</li>
          </ul>
        </div>
        <div class="col-md-4 text-center">
          <ul class="list-group">
            <li class="list-group-item">环境监测服务</li>
            <li class="list-group-item">水污染治理设施运营服务</li>
            <li class="list-group-item">清洁生产审核服务</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import navMap from './common/NavMap'
  import banner from "./common/Banner";

  export default {
  	name: "About",
    data() {
      return {
      	currentNav: "公司简介",
        bannerSrc: require('../assets/img/banner-about.jpg'),
      }
    },
    components: {
      banner,
      navMap,
    },
    mounted() {
      let types = this.types;
      this.$store.commit(types.LOADED);
    }
  }

</script>

<style>
  #buss li:first-child {
    border-radius: 0;
  }
  #buss li:last-child {
    border-radius: 0;
  }
  #buss .para-title {
    background: linear-gradient(to right, lightseagreen, transparent);
    color: white;
  }
  #about .para-title {
    background: linear-gradient(to right, lightseagreen, transparent);
    color: white;
  }

  #buss li {
    border-top: none;
    border-bottom: none;
  }
  #buss ul:not(:first-child) li {
    border-right: none;
  }
</style>
