<template>
<div>
    <article class="poster img-wrap js-sche-wrap ab-light" >
        <img class="img-fg" id="img" :src="`http://image.juooo.com${obj.pic}`"
        alt="【万有音乐系】小野丽莎2018巡回演唱会 深圳站" data-adaptive-background>
        <div class="poster-bg-shadow">
        </div>
        <div class="poster-bg-wrapper">
            <div class="poster-bg"></div>
        </div>
        <div class="poster-fg"></div>
        <div class="poster-img">
            <div class="img-bg">
                <span class="logo_i"></span>
            </div>
            <a class="round-num js-tour-num"
            href="https://m.juooo.com/tour/tourshowinfo?sid=34679"
            v-show="tourNum > 1"
            >{{tourNum}}场巡演</a>
        </div>
    </article>
</div>
</template>

<script>
import $ from 'jquery'
import './js/jq.adaptive-bg'
//  插件的用法哈
//  <div class='img-wrap'>
//    <img src="../../assets/logo.png" id="img" data-adaptive-background>
//  </div>
// post请求如果不这样做的话无法成功传递参数到后端，后端识别不了
// 如果想传的是数组 只需要在qs的方法中设置它的indices为false即可
// 如: qs.stringify({ a: ['b', 'c', 'd'] }, { indices: false })
import Qs from 'qs'

export default {
  data () {
    return {
      obj: '',
      showId: '',
      tourNum: ''
    }
  },
  methods: {
    test () {
      $('#img').ready(function () {
        $.adaptiveBackground.run()
      })
    },
    render () {
      console.log(this.session)
      this.obj = this.session
      this.showId = this.obj.show_id
    },
    getTourNum () {
      // loading
      this.$http({
        headers: {
          'deviceCode': 'A95ZEF1-47B5-AC90BF3'
        },
        method: 'post',
        url: '/showlist/Ticket/getTourNum',
        data: Qs.stringify({
          sid: this.showId
        })
      }).then(res => {
        this.tourNum = res.data.data.num
      })
    }
  },
  created () {
    this.test()
    this.render()
    this.getTourNum()
  },
  computed: {
    session () {
      return JSON.parse(window.sessionStorage.getItem('goods'))
    }
  }
}
</script>

<style scoped>
.poster {
    position: relative;
    width: 100%;
    height: 528px;
    overflow: hidden;
}
.poster .img-fg {
    width: 280px;
    height: 372px;
    position: absolute;
    top: 114px;
    left: 235px;
    z-index: 9;
    border: 3px solid #fff;
}
.poster .poster-bg-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 4;
    background: #000;
    opacity: 0.4;
}
.poster .poster-bg-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 98%;
    overflow: hidden;
    z-index: 3;
}
.poster .poster-bg {
    width: 100%;
    z-index: 3;
}
.poster .poster-fg {
    /* overflow: hidden; */
    position: absolute;
    bottom: -20px;
    left: -25%;
    z-index: 5;
    border-top: 1px solid #ccc;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    width: 150%;
    height: 120px;
    background: #fff;
}
.poster .poster-img {
    z-index: 29;
    -webkit-box-pack: center;
    position: relative;
    margin: 114px 0 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}
.poster .poster-img .img-bg {
    position: relative;
    /* left:20px; */
    padding: 3px;
    width: 280px;
    height: 372px;
    border: 3px solid #fff;
}
.poster .poster-img .img-bg .logo_i {
    width: 58px;
    height: 70px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: url(../../static/image/homecontent/juooo.png) 0 0 no-repeat;
    background-size: 100%;
}
.poster .poster-img .round-num {
    position: absolute;
    right: 20px;
    bottom: 96px;
    border: 1px solid #dadada;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    padding: 10px;
    color: #dadada;
    font-size:28px;
}
</style>
