<template>
    <mt-tabbar id="ju-footer" >
        <mt-tabbar  v-model="currentTab" fixed>
            <mt-tab-item :id="tab.id"
            v-for="(tab,idx) in tabs" :key="tab.id"
            class="footerwz"
            @click.native="changImgC(idx)"
            >
                <img :src="tab.changeImg ? './static/image/homefooter/' + tab.icon2 + '.png' :tab.icon1"
                slot="icon">
                {{tab.title}}
            </mt-tab-item>
        </mt-tabbar>
    </mt-tabbar>
</template>

<script>
import Vue from 'vue'

// 引入mint-ui
import Mint from 'mint-ui'
Vue.use(Mint)

export default {
  name: 'JuFooter',
  data () {
    return {
      currentTab: 'Home',
      tabs: [
        {
          title: '首页',
          id: 'Home',
          icon1: 'home1',
          icon2: 'home2',
          changeImg: true
        },
        {
          title: '演出库',
          id: 'in_theaters',
          icon1: 'eye1',
          icon2: 'eye2',
          changeImg: false
        },
        {
          title: '我的',
          id: 'coming_soon',
          icon1: 'mine1',
          icon2: 'mine2',
          changeImg: false
        }
      ]
    }
  },
  created () {
    console.log(this.tabs)
    this.tabs.forEach(item => {
      item.icon1 = './static/image/homefooter/' + item.icon1 + '.png'
    })
  },
  methods: {
    changImgC (idx) {
      for (var i = 0; i < this.tabs.length; i++) {
        this.tabs[i].changeImg = false
        this.tabs[idx].changeImg = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  *{box-sizing:border-box;}
  .mint-tab-item.footerwz{
    height: 0.5rem;
  }
  .mint-tabbar.is-fixed{
    border-top:1px solid #e6e6e6;
    background:#EEF3FA;
  }

  .mint-tabbar > .mint-tab-item.is-selected{
    color: #ff7919;
    background:#EEF3FA;
  }
</style>
