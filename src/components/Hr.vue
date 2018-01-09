<!--新闻动态组件-->
<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <banner :bannerSrc="bannerSrc"></banner>

    <navMap :currentNav="currentNav"></navMap>

    <div class="container" id="hr">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card">
            <h4 class="card-header">环保工程师 (2人)</h4>
            <div class="card-body text-left">
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 12%;">职位概况</td>
                    <td>
                      工作地点: 海安县城区 | 最低学历: 本科 | 工作经验: 2年 | 工作方式: 全职 | 薪资: 面议
                    </td>
                  </tr>
                  <tr>
                    <td>主要职责</td>
                    <td>负责为企业提供环境管理策划及环保技术指导，负责废气、废水处理项目的方案设计、工程设计等工作。 </td>
                  </tr>
                  <tr>
                    <td>职位要求</td>
                    <td>1、环保类、化工类相关专业本科以上学历，男女不限；<br/>
                      2、有较强的创新意识和事业心，具有团队协作精神和良好的沟通能力及组织管理能力；<br/>
                      3、熟悉环保法规、政策及标准，了解各行业基本生产工艺；<br/>
                      4、具有废气、废水设计和处理的工作经验，了解国内外废气或废水处理的应用；<br/>
                      5、精通计算机操作，熟练应用CAD、PS以及办公软件等软件；<br/>
                      6、具有注册环保工程师证书或其它相关环保的中级或高级工程师职称
                    </td>
                  </tr>
                  <tr>
                    <td>福利补贴</td>
                    <td>提供国家规定的社会保险，提供午餐费补助等。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card">
            <h4 class="card-header">环评工程师 (2人)</h4>
            <div class="card-body text-left">
              <table class="table">
                <tbody>
                <tr>
                  <td style="width: 12%;">职位概况</td>
                  <td>工作地点: 海安县城区 | 最低学历: 本科 | 工作经验: 2年 | 工作方式: 全职 | 薪资: 面议 </td>
                </tr>
                <tr>
                  <td>主要职责</td>
                  <td>负责环境影响报告书(表)的编制，参加环评报告的评审。</td>
                </tr>
                <tr>
                  <td>职位要求</td>
                  <td>
                    1、从事该行业有2年以上工作经验，本科以上学历。<br/>
                    2、具有一定环评工作经验，能独立完成环境影响评价的相关技术工作。<br/>
                    3、具有团队协作精神和良好的沟通能力，有一定的组织管理能力。<br/>
                    4、精通计算机操作，熟悉CAD、PS以及办公软件等软件；<br/>
                    5、离、退休人员亦可聘用。<br/>
                    6、具有环评注册工程师证；
                  </td>
                </tr>
                <tr>
                  <td>福利补贴</td>
                  <td>提供国家规定的社会保险，提供午餐费补助等。</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card">
            <h4 class="card-header">环保技术人员 (2人)</h4>
            <div class="card-body text-left">
              <table class="table">
                <tbody>
                <tr>
                  <td style="width: 12%;">职位概况</td>
                  <td>工作地点: 海安县城区 | 最低学历: 本科 | 工作方式: 全职 | 薪资: 面议</td>
                </tr>
                <tr>
                  <td>主要职责</td>
                  <td>负责环保技术业务工作，参与环境工程或项目环评相关工作，协助为企业提供环保技术服务。</td>
                </tr>
                <tr>
                  <td>职位要求</td>
                  <td>1.环境工程、环境科学或相关专业毕业<br/>
                    2.吃苦耐劳，善于学习思考<br/>
                    3.具有团队协作精神和良好的沟通能力，有一定的组织管理能力<br/>
                    4.能适应到企业现场勘察、勾通调查。</td>
                </tr>
                <tr>
                  <td>其他说明</td>
                  <td>公司提供学习平台，可对无经验者提供培训机会。一经录用提供国家规定的社会保险、提供午餐费补助等，工作成绩优异者有一定奖励。</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div> <!-- /container -->
  </main>
</template>

<script>
  import navMap from './common/NavMap'
  import banner from './common/Banner'

  export default {
    name: "Hr",
    components: {
      navMap,
      banner,
    },
    data() {
    	return {
    	  currentNav: "人才招聘",
        bannerSrc: require('../assets/img/banner-hr.jpg'),
      }
    },
    computed: {
    	items() {
    		return items;
      }
    },
    mounted() {
      let types = this.types;
      this.$store.commit(types.LOADED);
    }
  }

</script>



<style>

  #hr>div:not(:first-child) {
    padding: 10px 0;
  }

  #hr .card-header {
    line-height:1rem;
    padding: 0.75rem 1.25rem;
    font-weight: bold;
    font-size: 1rem;
  }
  #hr .card-body {
    padding: 0.5rem;
  }
  #hr .card-body p {
    margin: 0rem 0;
  }

  #hr .card {
    border-color: #bee5eb;
    color: #434344;
    box-shadow: 8px 8px 10px lightgrey;
  }
  #hr .card-body {
    overflow: hidden;
  }
  #hr .card-header {
    background-color: lightseagreen !important;
    color: #fff;
    font-size: 1.1rem;
    border-bottom-color: #bee5eb;
    font-weight:bold;
  }

  #hr .card-header:hover {
    text-decoration: none;
  }

  #hr .card:hover {
    cursor: pointer;
    border-bottom-color: #bee5eb;
  }

  /*定制职位card中的table*/
  #hr .card-body table tr:first-child td{
    border-top: none;
  }
  #hr .card-body table {
    margin-bottom:0px;
  }
  #hr .card-body table tr td:first-child {
    font-weight: bold;
  }


</style>


