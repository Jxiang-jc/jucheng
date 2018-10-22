<template>
    <mt-tabbar id="ju-footer" >
        <mt-tabbar  v-model="currentTab" fixed>
            <mt-tab-item :id="tab.id"
            v-for="tab in tabs" :key="tab.id"
            class="footerwz"
            @click.native="goto(tab.id)"
            >
                <img :src="tab.changeImg ? './static/image/homefooter/' + tab.icon2 + '.png' : tab.icon1"
                slot="icon">
                {{tab.title}}
            </mt-tab-item>
        </mt-tabbar>
    </mt-tabbar>
</template>
<script>
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
          id: 'Home',
          icon1: 'home1',
          icon2: 'home2',
          changeImg: this.$route.name === 'Home' ? true : false
        },
        {
          title: '演出库',
          id: 'Juplay',
          icon1: 'eye1',
          icon2: 'eye2',
          changeImg: this.$route.name === 'Juplay' ? true : false
        },
        {
          title: '我的',
          id: 'coming_soon',
          icon1: 'mine1',
          icon2: 'mine2',
          changeImg: this.$route.name === 'coming_soon' ? true : false
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
    goto (id) {
      // 路由传递数据,主vue上传递的参数在所有副vue都能拿到。副路由通过props接收到。
      // 而所有副路由都可以传递给主路由。因此可以实现子路由->主路由->子路由。
      this.$router.push({name: id, params: {}})
      this.currentTab = id
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
