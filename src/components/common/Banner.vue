<template>
  <div class="container" id="banner">
    <!--<div class="col-md-12">-->
    <img :src="bannerSrc" class="img-fluid center-block" style="width: 100%;"/>
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'banner',
    props: {
    	bannerSrc: {
    		type: String,
      }
    }
  };
</script>

<style>
  #banner {
    padding-top: 0;
  }
</style>
