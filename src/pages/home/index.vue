<template>
  <div class="home-tem">
    <!-- 顶部搜索 -->
    <van-row class="serach-bar">
      <van-col span="4">
        <van-icon name="label-o"/>
      </van-col>
      <van-col span="16">
        <van-search placeholder="请输入搜索关键词" v-model="value" background="none"/>
      </van-col>
      <van-col span="4">登陆</van-col>
    </van-row>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerImg" :key="item.id">
        <img :src="item.img">
      </van-swipe-item>
    </van-swipe>

    <!-- 商品分类 -->
    <van-row class="goods-categories">
      <van-col span="8" v-for="item in goodsSubCategories" :key="item.id">
        <img :src="item.img" alt="" srcset="">
        <p>{{ item.name }}</p>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      bannerImg: [],
      goodsSubCategories: []
    };
  },
  created() {
    this.getBanner();
    this.getGoodsSubCategories();
  },
  methods: {
    //获取轮播图
    getBanner() {
      this.$http.get("/home/getBanners").then(res => {
        console.log(res.data.data);
        this.bannerImg = res.data.data;
      });
    },
    //获取商品分类
    getGoodsSubCategories() {
      this.$http
        .get("/goods/getGoodsSubCategories", {
          params: {
            page: 1,
            pageSize: 100
          }
        })
        .then(res => {
          console.log(res);
          this.goodsSubCategories = res.data.data.cates;
        });
    }
  }
};
</script>
<style lang="less" scoped>
.home-tem {
  .serach-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    .van-col.van-col--4 {
      text-align: center;
      line-height: 44px;
    }
    .van-col.van-col--16 {
      margin-top: 6px;
      background-color: #fff;
      border: 1px solid #aaa;
      border-radius: 32px;
      .van-search {
        height: 32px;
      }
    }
  }

  .van-swipe-item {
    img {
      width: 100%;
    }
  }
  .goods-categories {
    .van-col {
      text-align: center;
      padding: 5px;
      img {
        width: 60%;
      }
      p{
        font-size: 14px;
        color: #bbb;
      }
    }
  }
}
</style>

