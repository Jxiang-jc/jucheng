<template>
<div>
    <mt-header fixed class="navbar detail-header mui-bar-nav">
        <router-link :to="{path: 'play', query: {caid: idx}}" slot="left"
        class="btn-return">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right" class="btn-dotted"></mt-button>
    </mt-header>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      idx: 0
    }
  },
  methods: {
    scrollShow () {
      $(document).ready(function () {
        // console.log(88)
        $(window).scroll(function () {
          // 获取当前滑动位置
          var scrollTop = $(window).scrollTop()
          // 滑动到该位置时执行代码
          if (scrollTop > 90) {
            $('.mui-bar-nav').addClass('active')
          } else {
            $('.mui-bar-nav').removeClass('active')
          }
        })
      })
    }
  },
  created () {
    if (window.sessionStorage.getItem('caid') === null) { // 防止获取不到的情况
      this.idx = 0
    } else {
      this.idx = window.sessionStorage.getItem('caid')
    }
    this.scrollShow()
  }
}
</script>

<style scoped lang="scss">
.navbar {
    position: fixed;
    z-index: 500;
    left: 0;
    top: 0;
    background: transparent;
    /* -webkit-backface-visibility: hidden; */
    /* backface-visibility: hidden; */
    margin: 0;
    width: 100%;
    height: 88px;
    font-size: 34px;
    color: #fff;
    transition: all 1s cubic-bezier(0, 0, 0.25, 1);
    box-shadow: none;
}
.btn-return,.btn-dotted {
    display:inline-block;
    height: 88px;
    line-height: 88px;
    padding-left: 30px;
}
.btn-dotted {
    padding-left:0;
    padding-right:30px;
}
.mui-bar-nav{box-shadow: none; background:transparent;}
.mui-bar-nav.active{
	background:#fff;
    color:#212121;
	transition: background 1s;
        /* Firefox 4 */
           -moz-transition:background 1s;
         /* Safari and Chrome */
         -webkit-transition:background 1s;
         /* Opera */
          -o-transition:background 1s;
}

</style>
<style scoped>
.btn-return >>> .mint-button {
    height:88px;
}
.btn-return >>> .mintui-back:before {
    font-size: 40px;
    color:#fff;
}
.btn-dotted >>> .mintui {
    font-size:60px;
}
.mui-bar-nav.active .btn-return >>> .mintui-back:before {
    color:#212121;
}
</style>
