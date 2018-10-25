<template>
<div class="tour-wrap active ">
    <div class="tour-title ">巡回演出
        <div class="more"><a href="#"> 更多巡演 &gt;</a></div>
    </div>
    <div class="swiper-container" ref = "el">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
            v-for="(arr,idx) in concerts" :key='idx'>
                <a class="tour" href="https://m.juooo.com/tour/tourShowInfo?sid=33506">
                    <img :src="arr.pic">
                    <div class="tour-city">
                    {{arr.cityItems[0].city_name}}
                    <span>/</span>
                    {{arr.cityItems[1].city_name}}
                    <span>/</span>
                    {{arr.cityItems[2].city_name}}
                    <span>/</span>
                    {{arr.cityItems[3].city_name}}
                    <span>/</span>
                    </div>
                </a>
            </div>
        </div>
        <div class="swiper-pagination "></div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'

export default {
  name: 'tour-wrap',
  data () {
    return {
      concerts: []
    }
  },
  methods: {
    getConcerts () {
      this.$http.post('/showlist/Tour/ShowList').then(res => {
        // console.log(res.data.data)
        this.concerts = res.data.data
        // console.log(this.concerts)
      })
    }
  },
  created () {
    this.getConcerts()
  },
  mounted () {
    var swiper = new Swiper(this.$refs.el, {
      slidesPerView: 3,
      spaceBetween: 10,
      observer: true, // 修改swiper自己或子元素时,自动初始化swiper
      observeParents: true// 修改swiper的父元素时,自动初始化swiper
    })
    Vue.use(swiper)
  }
}
</script>

<style scoped lang="scss">
.tour-wrap {
    padding: 20px 0 30px 25px;
    background: #fff;
    margin-bottom: 100px;
    .tour-title {
        font-size: 36px;
        color: #333;
        font-weight: bold;
        background: #fff;
        position: relative;
        margin-bottom:25px;
        .more {
            font-size: 22px;
            color: #999;
            position: absolute;
            top: 0;
            right: 20px;
            font-weight: normal;
            >a{
                font-size:inherit;
                color:rgb(153,153,153)
            }
        }
    }
    .swiper-container {
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
        .tour-city{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            color: #B2B2B2;
            font-size: 24px;
            z-index: 10;
            height: 55px;
            line-height: 55px;
            padding: 0 15px;
            background: rgba(0, 0, 0, 0.5);
            overflow: hidden;
            word-break: break-all;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .swiper-container .swiper-slide{
        border-radius:10px;
        overflow: hidden;
        position: relative;
        img{width:100%;}
    }
}
// .swiper-wrapper{
//     width: 100%;
//     height: 100%;
// }

</style>
