<template>
  <div class="shopcar">
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <!-- 商品 -->
    <ul class="goods">
      <li v-for="item in goodslist" :key="item.id">
        <img
          :src="item.small_img"
          alt
          srcset
        >
        <div class="goods-info">
          <h2>{{ item.name }}</h2>
          <div class="click">
            <div class="moner">
              价格：
              <span>{{ item.price }}</span>
            </div>
            <van-stepper v-model="num" integer :min="1" :max="40" :step="1" :integer="true"/>
          </div>
          <van-button type="danger" size="mini">删除</van-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      goodslist:[],
      page:1,
      pageSize:10
    };
  },
  created() {
    this.getShopCar()
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    //获取用户购物车商品
    getShopCar(){
      this.$http.get('cart/getGoodsFromCart',{
        params:{
          page:this.page,
          pageSize:this.pageSize
        }
      })
      .then(res => {
        this.goodslist = res.data;
        console.log(this.goodslist)
        
      })
    }
  }
};
</script>

<style lang="less">
.shopcar {
  margin-top: 50px;
  .van-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .goods {
    li {
      display: flex;
      margin: 10px 5px;
      border: 1px solid #ccc;
      box-shadow: 0 0 4px #ccc;
      padding: 10px 0;
      .goods-info {
          padding: 0 5px;
        margin-left: 10px;
        h2 {
          font-size: 16px;
          font-weight: 600;
        }
        .click {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;
          span {
            font-size: 13px;
            font-weight: 600;
            color: red;
          }
        }
        .van-button--danger {
            float: right;
        }
      }
    }
  }
}
</style>

