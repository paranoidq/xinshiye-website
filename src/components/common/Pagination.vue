<template id="pagination">
  <div class="row justify-content-center">
    <nav aria-label="">
      <ul class="pagination" id="news-pagination">
        <li class="page-item">
          <a class="page-link" v-if="currentPage==1">首页</a>
          <a class="page-link" v-else href="javascript:;" @click="goPage(1)">首页</a>
        </li>
        <li class="page-item">
          <a class="page-link" v-if="currentPage<=1">上一页</a>
          <a class="page-link" v-else href="javascript:;" @click="goPage(currentPage-1)">上一页</a>
        </li>

        <li class="page-item" v-for="item in pageList">
          <a class="page-link" v-if="currentPage == item.key || sign == item.key">{{item.key}}</a>
          <a class="page-link" v-else href="javascript:;" @click="goPage(item.value)">{{item.key}}</a>
        </li>

        <li class="page-item">
          <a class="page-link" v-if="currentPage>=totalPageCount">下一页</a>
          <a class="page-link" v-else href="javascript:;" @click="goPage(currentPage+1)">下一页</a>
        </li>
        <li class="page-item">
          <a class="page-link" v-if="currentPage==totalPageCount">尾页</a>
          <a class="page-link" v-else href="javascript:;" @click="goPage(totalPageCount)">尾页</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

  export default {
    name: "Pagination",
    data() {
      return {
        items: [],
        //省略符号
        sign: '...',
        // 从page=4开始省略
        signIndex: 4,
        // 页面数组列表
        pageList: [],
        // 暂存当前页码
        index: this.currentPage
      };
    },
    props: {
      // 当前页
      currentPage: {
        type: Number,
        default: 1.
      },
      // 总页数
      totalPageCount: {
        type: Number,
        default: 1,
      },
    },
    methods: {
      goPage: function (i) {
      	if (this.index != i) {
          this.index = i;
          // 父组件通过change方法接受自组件当前页码的变化，并作出处理
          this.$emit('change', this.index);
          this.renderPagination(i);
        }
      },
      renderPagination: function (i=1) {
        this.pageList = [];
        var tmp = null;

        if (this.totalPageCount > 6) {
          if (((this.totalPageCount-1) == (this.totalPageCount - this.currentPage)) && (this.totalPageCount - this.currentPage) > 5) {
            for (let i=1; i<7; i++) {
              if (i < this.signIndex) {
                tmp = {key: i, value: i};
              } else if (i == this.signIndex) {
                tmp = {key: this.sign, value: 0};
              } else if (i == (this.signIndex + 1) ) {
                tmp = {key:this.totalPageCount - 1, value:this.totalPageCount - 1 };
              } else {
                tmp = {key:this.totalPageCount, value:this.totalPageCount };
              }
              this.pageList.push(tmp)
            }
          } else if (((this.totalPageCount - this.currentPage) <= this.signIndex)){
            var starNum = this.totalPageCount - 5;
            for (let i=starNum;i<starNum+6;i++) {
              tmp = {key:i, value:i }
              this.pageList.push(tmp)
            }
          } else {
            var starNum = this.currentPage - 1;
            for (let i=1;i<7;i++) {
              if (i < this.signIndex) {
                tmp = {key:(starNum - 1) + i, value:(starNum - 1) + i }
              } else if (i== this.signIndex) {
                tmp = {key:this.sign, value:0 }
              } else if (i == (this.signIndex + 1) ) {
                tmp = {key:this.totalPageCount - 1, value:this.totalPageCount - 1 }
              } else {
                tmp = {key:this.totalPageCount, value:this.totalPageCount }
              }
              this.pageList.push(tmp)
            }
          }
        } else {
          for (var i =0; i <this.totalPageCount; i++) {
            tmp = {key:i+1, value:i+1 }
            this.pageList.push(tmp)
          }
        }
      }
    },
    mounted: function () {
      this.renderPagination();
    },
    watch: {
      currentPage(val) {
      	this.renderPagination(val);
      },
    }
  };
</script>
