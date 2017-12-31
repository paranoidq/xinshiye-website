<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="" id="banner">
      <!--<div class="col-md-12">-->
      <img src="/static/img/banner-contactus.jpg" class="img-fluid center-block"/>
      <!--</div>-->
    </div>

    <navMap :currentNav="currentNav"></navMap>


    <div class="container">
      <div class="row row-contactus-info">
        <div class="col-lg-4 col-xs-4">
          <span class="icon-contactus icon-address"></span>
          <div class="contactus-item">
            <p>注册地址：海安县曙光新村4号楼3号<br/>办公地址：海安县长江中路1号3幢</p>
          </div>
        </div>
        <div class="col-lg-4 col-xs-4">
          <span class="icon-contactus icon-tel"></span>
          <div class="contactus-item">
            <p>固定电话：(+86)-0513-88866136<br/>移动电话：(+86)13606279979</p>
          </div>
        </div>
        <div class="col-lg-4 col-xs-4">
          <span class="icon-contactus icon-website"></span>
          <div class="contactus-item">
            <p>公司网站：http://www.xinshiye.com<br/>企业邮箱：2175752748@qq.com</p>
          </div>
        </div>
      </div>
      <hr/>
    </div> <!-- /container -->


    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <!--百度地图容器-->
          <div style="max-width:900px;height:500px;border:lightseagreen solid 1px;font-size:12px; border-radius: 10px; box-shadow: 10px 10px 10px lightseagreen" id="map"></div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </main>
</template>


<style>
  .row-contactus-info {
    padding-top: 60px;
  }

  .icon-contactus.icon-address {
    background: url("/static/img/icon-contactus-address.png");
  }
  .icon-contactus.icon-tel {
    background: url("/static/img/icon-contactus-tel.png");
  }
  .icon-contactus.icon-website {
    background: url("/static/img/icon-contactus-website.png");
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


  /*定制百度地图*/
  .BMap_bubble_title {
    font-size: 1.2rem;
    color: orangered;
    border-bottom: 1px solid lightseagreen;
  }


</style>

<script>
  //创建和初始化地图函数：
  function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMapOverlay();//向地图添加覆盖物
  }
  function createMap(){
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(120.488413,32.543063),19);
  }
  function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
  }
  function addClickHandler(target,window){
    target.addEventListener("click",function(){
      target.openInfoWindow(window);
    });
  }
  function addMapOverlay(){
    var markers = [
      {content:"海安县长江中路1号3幢",title:"新视野环保科技",imageOffset: {width:-46,height:-21},position:{lat:32.54282,lng:120.488782}}
    ];
    for(var index = 0; index < markers.length; index++ ){
      var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
      var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
        imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
      })});
//      var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
      var opts = {
        width: 200,
        title: markers[index].title,
        enableMessage: true
      };
      var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
//      marker.setLabel(label);             // 默认关闭文字标签
      addClickHandler(marker,infoWindow);
      map.addOverlay(marker);
      map.openInfoWindow(infoWindow,point); //默认开启信息窗口
    };
  }
  //向地图添加控件
  function addMapControl(){
    var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(navControl);
  }
  var map;


  import navMap from './common/NavMap'

  export default {
  	name: "Contact",
    components: {
  		navMap,
    },
    data() {
  		return {
  			currentNav: "联系我们"
      }
    },
    mounted: function () {
      initMap();//创建和初始化地图

      let types = this.types;
      this.$store.commit(types.LOADED);
    }
  }
</script>
