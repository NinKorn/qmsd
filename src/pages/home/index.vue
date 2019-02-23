<template>
  <div class="home-tem">
    <!-- 顶部搜索 -->
    <van-row>
      <van-col span="4">
        <van-icon name="label-o"/>
      </van-col>
      <van-col span="16">
        <van-search placeholder="请输入搜索关键词" v-model="value" background="none"/>
      </van-col>
      <van-col span="4">登陆</van-col>
    </van-row>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style lang="less" scoped>
.home-tem {
  .van-col.van-col--4 {
    text-align: center;
    line-height: 44px;
  }
  .van-col.van-col--16 {
    padding: 6px;
    .van-search {
      height: 32px;
      border: 1px solid #aaa;
      border-radius: 32px;
    }
  }
}
</style>

