<template>
  <div class="bottom">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o">新闻</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="0" to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
