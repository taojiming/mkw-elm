<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from "components/v-header/v-header"
import Tab from './components/tab/Tab' //tab 切换栏

//网络请求相关的函数
import {getSeller} from './network/index'

export default {
  data() {
    return {
      seller: {},
    };
  },
  // 请求数据
   created() {
      this._getSeller()
  },
  components: {
    VHeader,
    Tab
  },
  methods: {
    _getSeller() {
      return getSeller().then(res => {
        console.log(res.data);
        this.seller = res.data;
      });
    },
  }
};
</script>

<style lang="stylus" scoped>
// #app
//     .tab-wrapper
//       position: fixed
//       top: 136px
//       left: 0
//       right: 0
//       bottom: 0
</style>
