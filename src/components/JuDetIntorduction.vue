<template>
<div>
    <div class="placeholder"></div>
    <article class="brief-intro">
        <h3 class="title">— 演出介绍 —</h3>
        <p class="brief-txt"
        v-show="show"
        >特供商品，仅供【橙PLUS会员卡】持卡人使用，限量发售1000套</p>
        <p class="brief-txt"
        v-show="!show" v-html="txt"></p>
        <span class="go-detail"
        @click="getHtml"
        v-show="show"
        >查看详情 <span class="icon icon-menu-right"></span></span>
    </article>
    <div class="placeholder"></div>
</div>
</template>

<script>
// import $ from 'jquery' // 为了获取动态生成的节点
// import Vue from 'vue'
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//   preLoad: 0.5,
//   error: '../assets/logo.png',
//   loading: '../assets/logo1.png',
//   attempt: 1
// })

import Qs from 'qs' // post获取信息

export default {
  data () {
    return {
      show: true,
      id: '',
      txt: ''
    }
  },
  methods: {
    getHtml () {
      this.$http({
        headers: {
          'deviceCode': 'A95ZEF1-47B5-AC90BF3'
        },
        method: 'post',
        url: '/showlist/Ticket/getIntroduce',
        data: Qs.stringify({
          'scid': this.id
        })
      }).then(res => {
        // console.log(res.data.data)
        this.txt = res.data.data
        this.show = false
        // this.lazyLoad()
      })
    }
    // v-html生成的无法使用该方法。。。。 已在列表页尝试成功
    // lazyLoad () {
    //   $(function () {
    //     var $imgList = $('img')
    //     // $('img').attr('v-lazy', 'img')
    //     for (var i = 0; i < $imgList.length; i++) {
    //     //   console.log($imgList.eq(i).attr('src'))
    //       $('img').eq(i).attr('v-lazy', $imgList.eq(i).attr('src'))
    //     }
    //     console.log($('img'))
    //   })
    // }
  },
  created () {
    // 把当前商品的id赋值，为了点击查看更多
    this.id = JSON.parse(window.sessionStorage.getItem('goods')).id
  }
}
</script>

<style scoped lang="scss">
.brief-intro {
    padding: 0 30px;
    background: #fff;
    .title {
        padding-top: 45px;
        font-size: 32px;
        font-weight: normal;
        text-align: center;
        color: #212121;
    }
    .brief-txt {
        padding-top: 30px;
        font-size: 28px;
        line-height: 50px;
    }
    .go-detail {
        padding: 35px 0;
        font-size: 24px;
        color: #999;
        display: block;
        width: 100%;
        text-align: center;
        position: relative;
    }
}
.placeholder{
    height:22px;
    width:100%;
    background:#eeebeb;
}
</style>
<style scoped>
.brief-txt >>> img{
    width:100%;
}
</style>
