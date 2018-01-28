<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="container" id="banner">
      <!--<div class="col-md-12">-->
      <img :src="bannerSrc" class="img-responsive center-block" />
      <!--</div>-->
    </div>

    <navMap
      :currentNav="this.currentSection"
    ></navMap>

    <div class="container project-desc" v-show="!this.$store.state.isLoading">
      <div class="col-md-12 line-content">
        <div class="card detail-card">
          <div class="card-body text-justify">
            <p>
            南通新视野环保科技有限公司近年来为众多企业策化环保管理，有效提高企业的环境管理水平。通过提供环保技术服务，促进企业在生产管理、污染治理中引入全新的环保理念，尽量把污染消灭在生产过程中；增进企业的环保法律意识，完善各方面环保手续，努力做到一切生产经营活动都遵守环保法规。</p>
            <p>
            <br/>
            己经为56家企业编制环境风险评估报告及环境风险应急预案并顺利通过专家组评审。为82个企业的己建成投产项目办理项目竣工环保验收手续，通过对企业进行全过程、全方位的技术指导，使企业在办理项目竣工环保验收过程中，理清思路，少走弯路，并尽快有效的完善各项环保措施，顺利通过环保验收。
            </p>
            <br/>
            <p>
            通过整合社会环保技术资源，与有关公司合作，为65过项目编制环评（其中报告书8个），为103多家企业提供环境监测服务，为20多家企业提供环境工程设计及施工服务。
            </p>
          </div>
        </div>
      </div>
    </div> <!-- /container -->
  </main>
</template>

<script>

  import navMap from './common/NavMap';
  import Banner from "./common/Banner";


  export default {
    name: "Project",
    components: {
      navMap,
      Banner,
    },
    data() {
      return {
        currentSection: "成果业绩",
        bannerSrc: require('../assets/img/banner-projects.jpg'),
      }
    },
    methods: {
    },
    mounted: function () {
      let store = this.$store;
      let types = this.types;

      store.commit(types.LOADED);
    },
  }

</script>



<style>
  .project-desc .detail-card {
    border: 1px solid lightseagreen ;
    box-shadow: 0px 0px 5px lightseagreen;
    background: #ffffff;
  }

  .project-desc {
    margin-bottom: 2rem;
  }
  .project-desc .card-body {
    padding: 1rem;
    font-size: 1rem;
  }
</style>


