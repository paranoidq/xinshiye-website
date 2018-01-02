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
  import {getProject} from '../utils/api'
  import itemDetail from './common/ItemDetail'

  export default {
    components: {
      itemDetail,
    },
    data() {
      return {
        currentSection: "项目合作",
        sectionBaseUrl: "/projects",
        bannerSrc: require('../assets/img/banner-projects.jpg'),
        getFun: getProject,
      };
    },
  }
</script>



