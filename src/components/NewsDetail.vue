<template>
  <itemDetail
    :currentSection='currentSection'
    :bannerSrc='bannerSrc'
    :sectionBaseUrl='sectionBaseUrl'
    :getFun='getFun'
  >

  </itemDetail>
</template>

<script>
  import {getNews} from '../utils/api'
  import itemDetail from './common/ItemDetail'

  export default {
    components: {
      itemDetail,
    },
    data() {
      return {
        currentSection: "新闻动态",
        sectionBaseUrl: "/news",
        bannerSrc: require('../assets/img/banner-news.jpg'),
        getFun: getNews,
      };
    },
  }
</script>



