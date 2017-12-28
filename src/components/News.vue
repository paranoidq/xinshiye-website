<template>
  <itemList
    :currentSection='currentSection'
    :bannerSrc='bannerSrc'
    :sectionBaseUrl='sectionBaseUrl'
    :totalPageCountFun='totalPageCountFun'
    :currentPageFun='currentPageFun'
  >

  </itemList>
</template>

<script>
  import {getNewsTotalPageCount} from '../utils/api'
  import {getNewsCurrentPage} from '../utils/api'

  import itemList from './common/ItemList'

  export default {
    components: {
      itemList,
    },
    data() {
      return {
        currentSection: "新闻动态",
        sectionBaseUrl: "/news",
        bannerSrc: '/static/img/banner-news.jpg',
        totalPageCountFun: getNewsTotalPageCount,
        currentPageFun: getNewsCurrentPage,
      };
    },
  }
</script>



