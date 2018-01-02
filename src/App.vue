<!--
 主体框架
-->
<template>
  <div id="app" class="container-fluid">
    <!-- 引用HeaderNav组件 -->
    <HeaderNav></HeaderNav>
      <router-view></router-view>
    <!-- 引用Footer组件-->
    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderNav from './components/common/HeaderNav.vue'
  import Footer from './components/common/Footer.vue'

  export default {
    name: 'app',
    components: {
      HeaderNav,
      Footer
    },
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*box-shadow: 0px 0px 10px 0px lightseagreen;*/
    padding-right: 0px;
    padding-left: 0px;
  }
  h2 {
    font-size: 2rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }


  /* 定制模块间距 */
  main>.container:not(:last-child){
    margin-bottom: 0rem;
  }

  /* 定制页面title */
  .container .para-title {
    transform-style: preserve-3d;
    padding: 10px 20px;
    border-radius: 5px;
    color: #6e6968;
  }

  .container .para-title .oi {
    top: 3px;
  }

  main>.container {
    padding-top: 2rem;
  }

  main>.container:first-child {
    margin-bottom: 0px;
  }


  /*定制icon*/
  .container h2 .oi {
    padding-right:1rem;
  }

  /*定制列表页面和detail日期标签*/
  .detail-container .badge {
    background: coral;
    margin: 0 0.2rem;
  }
  .list-line .badge {
    vertical-align: 20%;
    background: deepskyblue;
  }


  /*.slide-left-enter-active {*/
    /*opacity: 0.5;*/
    /*transform: translate(-100px, 0);*/
    /*position: relative;*/
    /*!*transform: rotateY(45deg);*!*/
  /*}*/
  /*.slide-left-enter-to {*/
    /*position: static;*/
    /*!*transform: rotateY(45deg);*!*/
  /*}*/
  /*.slide-left-leave-active {*/
    /*opacity: 0.8;*/
    /*transform: translate(-100px, 0);*/
    /*!*transform: rotateY(45deg);*!*/
  /*}*/
  /*.child-view {*/
    /*transition: all .8s cubic-bezier(.55,0,.1,1);*/
  /*}*/



</style>
