<template>
  <div class="goods-info">
    <van-nav-bar :title="this.goodsinfo.name" left-text="返回" left-arrow @click-left="onClickLeft"/>

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in goodsinfo.big_img" :key="index">
        <img :src="item" alt srcset>
      </van-swipe-item>
    </van-swipe>

    <div class="goods-info-box">
      <h2>
        商品名称:
        <span>{{ this.goodsinfo.name }}</span>
      </h2>
      <div class="goods-info-sale">
        <h2>
          商品价格：
          <span>{{ this.goodsinfo.price }}</span>
        </h2>
        <h2>
          库存：
          <span>{{ this.goodsinfo.sale_count }}</span>
        </h2>
      </div>
      <div class="buy-num">
        <span>购买数量:</span>
        <div class="buy-num-box">
          <input type="button" value="-" @click=" buyNum>=2 && buyNum-- ">
          <input type="text" v-model="buyNum">
          <input type="button" value="+" @click=" buyNum<=goodsinfo.sale_count && buyNum++">
        </div>
      </div>
      <h2>商品详情</h2>
      <div class="content" v-html="goodsinfo.content"></div>
    </div>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" text="客服"/>
      <van-goods-action-mini-btn icon="cart-o" text="购物车" @click="onClickMiniBtn"/>
      <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn"/>
      <van-goods-action-big-btn primary text="立即购买"/>
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      id: this.$route.params.id,
      buyNum: 1,
      goodsinfo: {}
    };
  },
  created() {
    this.getGoodsInfo();
  },
  methods: {
    
    //获取商品详情
    getGoodsInfo() {
      this.$http.get("/goods/getGoodsInfo/" + this.id).then(res => {
        console.log(res);
        this.goodsinfo = res.data;
      });
    },
    onClickLeft() {
      history.back();
    },
    //跳转到购物车
    onClickMiniBtn() {},
    //添加购物车
    onClickBigBtn() {
      //获取商品id
      let id = this.getGoodsInfo.id;
      //获取token
      // let Authorization = JSON.parse(localStorage.getItem('token'));
      let count = this.buyNum;
      //向后台发送请求
      this.$http
        .post('cart/postGoodsToCart/'+this.id, {
          id: this.id,
          count: this.buyNum
        })
        .then(res => {
          Toast.success(res.succMsg);
        })
        
    }
  }
};
</script>

<style lang="less">
.goods-info {
  img {
    width: 100%;
  }
  .van-swipe {
    img {
      height: 275px;
    }
  }
  .goods-info-box {
    padding: 4px;
    h2 {
      font-size: 14px;
      font-weight: 600;
      line-height: 30px;
      span {
      }
    }
    .goods-info-sale {
      display: flex;
      justify-content: space-between;
    }
    .buy-num {
      display: flex;
      padding: 10px 0;
      align-content: center;
      span {
        display: block;
        margin-right: 10px;
        font-weight: 600;
        font-size: 14px;
        line-height: 35px;
      }
      .buy-num-box {
        display: flex;
        input {
          height: 35px;
          width: 35px;
          text-align: center;
        }
        input[text] {
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
        }
      }
    }
  }
}
</style>
