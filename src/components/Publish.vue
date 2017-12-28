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
  import {getPublishTotalPageCount} from '../utils/api'
  import {getPublishCurrentPage} from '../utils/api'

  import itemList from './common/ItemList'

  export default {
    components: {
      itemList,
    },
    data() {
      return {
        currentSection: "公示公告",
        sectionBaseUrl: '/publish',
        bannerSrc: '/static/img/banner-publish.jpg',
        totalPageCountFun: getPublishTotalPageCount,
        currentPageFun: getPublishCurrentPage,
      };
    },
  }
</script>



