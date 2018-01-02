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
        currentSection: "项目合作",
        sectionBaseUrl: '/projects',
        bannerSrc: require('../assets/img/banner-projects.jpg'),
        totalPageCountFun: getProjectsTotalPageCount,
        currentPageFun: getProjectsCurrentPage,
      };
    },
  }
</script>



