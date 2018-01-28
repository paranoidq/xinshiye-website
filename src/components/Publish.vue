<template>
  <itemListMin
    :currentSection='currentSection'
    :bannerSrc='bannerSrc'
    :sectionBaseUrl='sectionBaseUrl'
    :totalPageCountFun='totalPageCountFun'
    :currentPageFun='currentPageFun'
  >

  </itemListMin>
</template>

<script>
  import {getPublishTotalPageCount} from '../utils/api'
  import {getPublishCurrentPage} from '../utils/api'

  import itemListMin from './common/ItemListMin'

  export default {
    components: {
      itemListMin,
    },
    data() {
      return {
        currentSection: "公示公告",
        sectionBaseUrl: '/publish',
        bannerSrc: require('../assets/img/banner-publish.jpg'),
        totalPageCountFun: getPublishTotalPageCount,
        currentPageFun: getPublishCurrentPage,
      };
    },
  }
</script>



