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
  import {getProjectsTotalPageCount} from '../utils/api'
  import {getProjectsCurrentPage} from '../utils/api'

  import itemList from './common/ItemList'

  export default {
    components: {
      itemList,
    },
    data() {
      return {
        currentSection: "成果展示",
        sectionBaseUrl: '/projects',
        bannerSrc: '/static/img/banner-projects.jpg',
        totalPageCountFun: getProjectsTotalPageCount,
        currentPageFun: getProjectsCurrentPage,
      };
    },
  }
</script>



