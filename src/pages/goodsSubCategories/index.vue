<template>
  <div class="goods-sub-categories">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft"/>

    <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
      <router-link
        class="lise"
        v-for="item in list"
        :key="item.id"
        :to="'/goodsInfo/'+ item.id"
        tag="div"
      >
        <img :src="item.cover_img" alt srcset>
        <div class="list-info">
          <h3>
            <span>商品名称：</span>
            {{ item.name }}
          </h3>
          <h4>
            <span>市场价</span>
            {{ item.price }}
          </h4>
        </div>
      </router-link>
    </scroller>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      title: this.$route.params.title,
      page: 0,
      pageSize: 10,
      list: [],
      totalCount: ""
    };
  },
  created() {
  },
  methods: {
    //获取列表数据
    getGoodsSubCategories() {
      return this.$http
        .get("/goods/getGoodsList", {
          params: {
            cateId: this.id,
            keys: this.title,
            page: this.page,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          // console.log(res);
          this.list = this.list.concat(res.data.goods);
          this.totalCount = res.data.totalCount;
          this.$refs.my_scroller.finishInfinite(true);
        });
    },
    //下拉刷新
    refresh() {
      this.page = 1;
      this.list = [];
      this.getGoodsSubCategories().then(() => {
        this.$refs.my_scroller.finishPullToRefresh();
      });
    },
    //上拉加载更多
    infinite(done) {
        this.page++;
        this.getGoodsSubCategories();
    },
    onClickLeft() {
      history.back();
    }
  }
};
</script>


<style lang="less" scoped>
.goods-sub-categories {
  padding: 0 5px;
  .van-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  ._v-container {
    margin-top: 55px;
    .lise {
      height: 110px;
      display: flex;
      align-content: center;
      border: 1px solid #ccc;
      margin: 0 5px 5px;
      box-shadow: 0 0 4px #ccc;

      img {
        width: 100px;
        height: 100px;
      }
      .list-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3 {
          font-size: 12px;
          // padding: 10px;
        }
        h4 {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
