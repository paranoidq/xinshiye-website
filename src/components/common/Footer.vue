<template id="footer">
  <footer v-show="!this.$store.state.isLoading">
    <div class="" id="relatedLinks">
      <!-- Example row of columns -->
      <div class="container">
      <div class="row-fluid link-col">
        <div class="col-md-2 text-left">
          <h4 class="text-left">友情链接</h4>
          <p>
            <a href="http://www.haian.gov.cn/zgha/" target="_blank">海安县人民政府</a>
          </p>
          <p>
            <a href="http://www.haian.gov.cn/zgha/jyh/060012/060012003/" target="_blank">海安县环保局</a>
          </p>
          <p>
            <a href="http://www.haian.gov.cn/zgha/jyh/060009/060009002/" target="_blank">海安县发改委</a>
          </p>
        </div>
        <div class="col-md-2 text-left">
          <h4 class="text-left">&nbsp;</h4>
          <p>
            <a href="http://www.haian.gov.cn/zgha/jyh/060011/060011002" target="_blank">海安县国土局</a>
          </p>
          <p>
            <a href="http://www.haian.gov.cn/zgha/jyh/060009/060009002" target="_blank">海安县发改委</a>
          </p>
          <p>
            <a href="http://www.haian.gov.cn/zgha/jyh/060013/060013002" target="_blank">海安建管局</a>
          </p>
        </div>
        <div class="col-md-2 text-left">
          <h4 class="text-left">&nbsp;</h4>
          <p>
            <a href="http://www.haian.gov.cn/zgha/infodetail/?infoid=0b1f0d8c-bd49-4835-94aa-126d34ded9bf&categoryNum=012007" target="_blank">海安慢思</a>
          </p>
          <p>
            <a href="http://www.haian.gov.cn/zgha/infodetail/?infoid=d07500a9-a8ce-4d6a-bde7-e0cc541f8f8a&categoryNum=012007" target="_blank">海安石板街</a>
          </p>
          <p>
            <a href="http://www.haianw.com/" target="_blank">海安网</a>
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5 text-left">
          <h4 class="text-left">联系我们</h4>
          <p  style="color: #c4c4c4; font-size: 0.8rem">
            办公地址：海安县长江中路1号3幢
          </p>
          <p  style="color: #c4c4c4; font-size: 0.8rem">
            联系方式：(+86)-0513-88866136、(+86)13606279979
          </p>
          <p  style="color: #c4c4c4; font-size: 0.8rem">
            Email地址：2175752748@qq.com
          </p>
        </div>
        </div>
      </div>
      <section id="rightsDeclare">&copy;{{DateFormatter.currentYear()}} All rights reserved. 南通新视野环保科技有限公司版权所有 <br/>苏ICP备18003053号</section>
    </div> <!-- /container -->
  </footer>
</template>
<script>
  export default {
  	name: "Footer",
  }
</script>

<style>
  /* 定制footer */
  footer {
    margin: 2rem 0 0 0;
  }
  footer #rightsDeclare {
    font-size: 0.8rem;
    margin-top: 1rem;
    border-top: 1px solid #6f6f6f;
    color: #c4c4c4;
    padding-top: 1rem;
  }

  /* 定制友情链接 */
  #relatedLinks{
    padding: 20px 10px 10px 10px;
    background-color: #5d5857;
    color: #fff;
  }
  #relatedLinks a {
    display: block;
    color: #c4c4c4;
    font-size: 0.8rem;
  }

  /* 定制友情链接栏目边框 */
  .link-col div:not(:last-child) {
    /*border-right: 1px solid #989898;*/
  }
  .link-col p {
    margin-bottom: 0.2rem;
  }

</style>
