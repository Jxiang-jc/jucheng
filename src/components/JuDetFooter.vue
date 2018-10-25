<template>
<div class="shopping-footer">
    <van-goods-action>
        <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
        <van-goods-action-big-btn text="立即购票" @click="onClickBigBtn" class="bgwhite"/>
        <van-goods-action-big-btn text="在线选座" @click="onClickBigBtn" class="bgorange" />
    </van-goods-action>
</div>
</template>

<script>
import Vue from 'vue'
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Toast
} from 'vant'

Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn)
  .use(Toast)
export default {
  methods: {
    onClickMiniBtn () {
      Toast('点击图标')
    },
    onClickBigBtn () {
      Toast('点击按钮')
    }
  }
}
</script>

<style scoped>
.shopping-footer >>> .van-goods-action-big-btn,
.shopping-footer >>> .van-goods-action-mini-btn{
    height:100%;
    line-height:100px;
    font-size:34px;
}
.bgwhite{background:#fff;color:#666;}
.bgorange{background:#ff7919;color:#fff}
.shopping-footer >>> .van-goods-action{
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    position: fixed;
    bottom: 0;
    z-index: 499;
    border-top: 1px solid #e7e7e7;
    width: 100%;
    height: 100px;
    font-size: 34px;
    color: #fff;
    background: #d9d9d9;
    text-align: center;
}

.shopping-footer >>> .van-hairline{
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 130px;
    height: 100%;
    font-size:22px;
}
.shopping-footer >>> .van-goods-action-mini-btn__icon {
    margin: 0 48px;
    font-size:35px;
    height:38px;
    line-height: 34px;
    width: 34px;
    top: 30px;
}
</style>
