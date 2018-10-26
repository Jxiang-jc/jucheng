<template>
<header class="navbar ind-header">
    <div class="navbar-inner">
        <div class="left">
            <router-link :to="{ name: 'CitylistView' }" slot="left" class="link">
            <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/location.png">
                <span class="city" v-text="currentCity"></span>
            </router-link>
            <!-- <span class="icon icon-menu-down"></span> -->
        </div>
        <router-link to="/search">
            <span class="center">搜索演出、艺人或场馆</span>
        </router-link>
    </div>
</header>
</template>
<script>
// import eventBus from './/vueBus/eventbus'
export default {
//   props: ['city'],
  data () {
    // console.log(this.$route.params.city, this.city)
    return {
      currentCity: '广州'
    }
  },
  created () {
    this.getLocal()
  },
  methods: {
    getLocal () {
      this.currentCity = window.sessionStorage.getItem('localCity')
    }
  }
// 有bug.....
//   activated () {
//     // activated : keep-alive组件激活时调用。
//     // 该钩子在服务器端渲染期间不被调用。
//     // 根据key名获取传递回来的参数，data就是map
//     eventBus.$on('choicecity', function (data) {
//       this.currentCity = data
//     }.bind(this))
//   }
}
</script>
<style scoped lang='scss'>
.navbar {
    position: fixed;
    z-index: 500;
    left: 0;
    top: 0;
    background-color: #fdfdfd;
}
.navbar {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    margin: 0;
    border-bottom: 1px solid #e7e7e7;
    width: 100%;
    height: 94px;
    font-size: 30px;
    line-height:30px;
    color: #212121;
}
.navbar .navbar-inner {
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -moz-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.ind-header .left {
    top: 0;
    height: 94px;
    font-size: 30px;
    line-height: 94px;
}
.ind-header .left .link {
    box-sizing: border-box;
    min-width: 150px;
    padding-left: 30px;
    height: 100%;
    line-height: 100%;
    text-align: center;
    vertical-align: middle;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.ind-header .left .link .city {
    display: inline-block;
    min-width: 56px;
    font-size: 30px;
    height:90px;
    line-height:90px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #262626;
    padding-left:5px;
}
.ind-header .center {
    display:block;
    float:left;
    box-sizing: border-box;
    width: 565px;
    height: 60px;
    line-height: 60px;
    font-size: 26px;
    color: #b3b3b3;
    background: #f0f0f0 url(../../static/image/homeheader/search.png) no-repeat 25px center;
    background-size: 24px 24px;
    border-radius: 10px;
    // margin-left: -156px;
    margin-right:30px;
    position: relative;
    text-align: left;
    padding-left: 62px;
}
</style>
