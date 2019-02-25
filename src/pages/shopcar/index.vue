<template>
  <div class="shopcar">
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft"/>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
      
  },
  methods: {
    onClickLeft(){
        history.back();
    }
  }
};
</script>

<style lang="less" scoped>
.shopcar {
  .van-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>

