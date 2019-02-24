<template>
  <div class="goods-info">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft"/>
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
    onClickLeft() {
      history.back();
    }
  }
};
</script>