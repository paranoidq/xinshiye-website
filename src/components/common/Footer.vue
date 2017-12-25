<template id="footer">
  <footer>
    <div class="" id="relatedLinks">
      <h2>友情链接</h2>
      <!-- Example row of columns -->
      <div class="row justify-content-center link-col">
        <div class="col-md-2">
          <p>
            <a href="http://www.haian.gov.cn/zgha/" target="_blank">海安县人民政府</a>
            <a href="http://www.haian.gov.cn/zgha/jyh/060012/060012003/" target="_blank">海安县环保局</a>
            <a href="http://www.haian.gov.cn/zgha/jyh/060009/060009002/" target="_blank">海安县发改委</a>
          </p>
        </div>
        <div class="col-md-2">
          <p>
            <a href="http://www.haian.gov.cn/zgha/jyh/060011/060011002" target="_blank">海安县国土局</a>
            <a href="http://www.haian.gov.cn/zgha/jyh/060009/060009002" target="_blank">海安县发改委</a>
            <a href="http://www.haian.gov.cn/zgha/jyh/060013/060013002" target="_blank">海安建管局</a>
          </p>
        </div>
        <div class="col-md-2">
          <p>
            <a href="http://www.haian.gov.cn/zgha/infodetail/?infoid=0b1f0d8c-bd49-4835-94aa-126d34ded9bf&categoryNum=012007" target="_blank">海安慢思</a>
            <a href="http://www.haian.gov.cn/zgha/infodetail/?infoid=d07500a9-a8ce-4d6a-bde7-e0cc541f8f8a&categoryNum=012007" target="_blank">海安石板街</a>
            <a href="http://www.haianw.com/" target="_blank">海安网</a>
          </p>
        </div>
      </div>
    </div> <!-- /container -->
    <section id="rightsDeclare"><p>&copy;2018 All right reserved. 南通新视野环保科技有限公司版权所有</p></section>
  </footer>
</template>
<script>
  export default {
  	name: "Footer",
  }
</script>

<style>
  /* 定制友情链接 */
  #relatedLinks{
    padding: 20px 10px 10px 10px;
    background-color: #5d5857;
  }
  #relatedLinks a {
    display: block;
    color: #c4c4c4;
    font-size: 0.8rem;
  }
  #relatedLinks h2 {
    color: #fff;
    margin-bottom:1rem;
  }
  .link-col div:not(:last-child) {
    border-right: 1px solid #989898;
  }
  .link-col p {
    margin-bottom: 0.2rem;
  }


  /* 定制footer */
  footer {
    margin: 2rem 0 0 0;
    font-weight: bold;
  }
  footer #rightsDeclare {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  footer #rightsDeclare p {
    margin-bottom: 0.4rem;
  }
</style>
