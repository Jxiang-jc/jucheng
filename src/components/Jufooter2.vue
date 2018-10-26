<template>
<div id="ju-footer">
<van-tabbar v-model="active">
      <van-tabbar-item v-for="(tab, index) in tabbar"
      :to="tab.path"
      :dot="tab.dot"
      :key="index"
      >
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? tab.icon.active : tab.icon.normal" class="imgs"/>
        </template>
        <span>{{tab.name}}</span>
      </van-tabbar-item>
    </van-tabbar>
</div>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar).use(TabbarItem)
export default {
  name: 'JuFooter',
  data () {
    return {
      active: 0,
      tabbar: [
        {
          name: '首页',
          path: 'home',
          pathName: 'HomeView',
          icon: {
            normal: require('../../static/image/homefooter/home1.png'),
            active: require('../../static/image/homefooter/home2.png')
          },
          dot: false
        },
        {
          name: '演出库',
          path: 'play',
          pathName: 'PlayView',
          icon: {
            normal: require('../../static/image/homefooter/eye1.png'),
            active: require('../../static/image/homefooter/eye2.png')
          },
          dot: false
        },
        {
          name: '我的',
          path: 'mine',
          pathName: 'MineView',
          icon: {
            normal: require('../../static/image/homefooter/mine1.png'),
            active: require('../../static/image/homefooter/mine2.png')
          },
          dot: false
        }
      ]
    }
  },
  methods: {
    check () {
      console.log(this.active)
    }
  }
}
</script>

<style scoped>
  *{box-sizing:border-box;}
#ju-footer >>> .van-hairline--top-bottom {
    height: 108px;
}
#ju-footer >>> .van-tabbar-item--active {
    color:#ff7919;
}
#ju-footer >>> .van-tabbar-item__text {
    font-size:22px;
}
#ju-footer >>> .van-icon {
    font-size:43px;
}
.imgs{
    height:43px;
}
</style>
