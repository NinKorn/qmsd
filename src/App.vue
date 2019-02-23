<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <!-- <v-router></v-router> -->
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o">新闻</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="0">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0
    };
  }
};
</script>
 
<style>
#app {
  margin-bottom: 75px;
}
</style>
