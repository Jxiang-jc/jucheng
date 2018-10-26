<template>
    <mt-tabbar id="ju-footer" >
        <mt-tabbar  v-model="currentTab" fixed>
            <mt-tab-item :id="tab.id"
            v-for="(tab, idx) in tabs" :key="tab.id"
            class="footerwz"
            @click.native="go(tab.id, idx)"
            >
                <img :src="tab.changeImg ? './static/image/homefooter/' + tab.icon2 + '.png' : tab.icon1"
                slot="icon">
                {{tab.title}}
            </mt-tab-item>
        </mt-tabbar>
    </mt-tabbar>
</template>
<script>
// 路由传递数据,主vue上传递的参数在所有副vue都能拿到。副路由通过props接收到。
// 而所有副路由都可以传递给主路由。因此可以实现子路由->主路由->子路由。
/* eslint-disable */ 
// eslint-disable-next-line
export default {
  name: 'JuFooter',
  data () {
    return {
      currentTab: this.$route.name,
      tabs: [
        {
          title: '首页',
          id: 'HomeView',
          icon1: 'home1',
          icon2: 'home2',
          changeImg: ''
        },
        {
          title: '演出库',
          id: 'PlayView',
          icon1: 'eye1',
          icon2: 'eye2',
          changeImg: ''
        },
        {
          title: '我的',
          id: 'MineView',
          icon1: 'mine1',
          icon2: 'mine2',
          changeImg: ''
        }
      ]
    }
  },
  created () {
    this.check()

    this.tabs.forEach(item => {
      item.icon1 = './static/image/homefooter/' + item.icon1 + '.png'
    })
  },
  methods: {
    check () {
      if (this.currentTab === 'HomeView') { this.focusImg(0) }
      if (this.currentTab === 'PlayView') { this.focusImg(1) }
      if (this.currentTab === 'MineView') { this.focusImg(2) }
    },
    go (id,idx) {
      // 循环 高亮当前
      this.focusImg(idx)

      if (id === 'HomeView') {
        this.$router.push({name: id})  
      } else if (id === 'PlayView') {
        this.$router.push({name: id, query: {caid: 0}})
      } else if (id === 'MineView') {
        this.$router.push({name: id})
      } else {
        console.log('错啦')
      }
      // console.log(id)
      this.currentTab = id
    },
    focusImg (idx) {
      for(var i = 0; i < this.tabs.length; i++) {
        this.tabs[i].changeImg = false
        this.tabs[idx].changeImg = true
      }
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  *{box-sizing:border-box;}
  .mint-tab-item.footerwz{
    height: 108px;
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
