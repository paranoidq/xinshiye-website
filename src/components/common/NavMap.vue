<template>
  <div class="container">
    <div class="row justify-content-left">
      <div class="col-md-12">
        <nav aria-label="breadcrumb" role="navigation">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><span class="oi oi-list"></span></li>
            <li class="breadcrumb-item"><router-link to="/home">首页</router-link></li>
            <li class="breadcrumb-item" v-if="sectionBaseUrl" aria-current="page"><router-link :to="sectionBaseUrl">{{this.currentNav}}</router-link>
            </li>
            <li class="breadcrumb-item active" v-else aria-current="page">{{this.currentNav}}</li>

            <li class="breadcrumb-item active" v-show="sectionBaseUrl" aria-current="page">{{this.$route.params.id}}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props: {
    	currentNav: {
    		type: String,
        default: "",
      },
      sectionBaseUrl: {
    		type: String,
        default: undefined,
      }
    }
  }
</script>

<style>
  /* 定制面包屑 */
  .breadcrumb {
    background-color: transparent;
    border-bottom: 1px solid #4fd2c2;
    border-radius: 0px;
  }
  .breadcrumb-item a {
    color: lightseagreen;
  }
  .breadcrumb {
    font-weight: bold;
  }
</style>
