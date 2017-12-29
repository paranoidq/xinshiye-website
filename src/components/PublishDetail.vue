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
  import {getPublish} from '../utils/api'
  import itemDetail from './common/ItemDetail'

  export default {
    components: {
      itemDetail,
    },
    data() {
      return {
        currentSection: "公示公告",
        sectionBaseUrl: "/publish",
        bannerSrc: '/static/img/banner-publish.jpg',
        getFun: getPublish,
      };
    },
  }
</script>



