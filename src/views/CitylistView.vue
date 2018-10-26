<template>
<div class="citylist">
    <mt-header title="选择城市">
      <!-- to指定目标地址，默认渲染成a标签，可通过tag属性修改成其他标签 -->
        <a href="javascript:history.go(-1)" slot="left">
          <mt-button icon="back"></mt-button>
        </a>
    </mt-header>
    <mt-index-list>
        <mt-index-section
        :index="letter"
        v-for="(citylist,letter) in indexCity"
        v-if="citylist.length>0" :key="letter">
          <!-- ，父组件通过prop传递数据给子组件，子组件触发事件给父组件。但父组件想在子组件上监听自己的click的话,需要加上native修饰符，故写法就像下面这样。 -->
          <mt-cell
          :title="city.name"
          v-for="city in citylist"
          @click.native="setCurrentCity(city.name)"
          :key="city.id">
          </mt-cell>
        </mt-index-section>
    </mt-index-list>
</div>
</template>
<script>
import eventBus from '../components/vueBus/eventbus'
export default {
  data () {
    return {
      indexCity: []
    }
  },
  methods: {
    setCurrentCity (city) {
      city = city.replace(/市$/, '')
      window.sessionStorage.setItem('localCity', city)
      this.goback(city)
    },
    // 返回上一页并同时传参
    goback (city) {
      // 传递一个键值，choicecity是key，city是value
      eventBus.$emit('choicecity', city)
      // 调用router回退页面
      this.$router.go(-1)
    }
  },
  created () {
    // console.log(666)
    this.$http.get('static/mock/region.json').then(res => {
      let data = res.data

      let indexCity = {}

      // 以字母作为属性写入对象indexCity
      'abcdefghijklmnopqrstuvwxyz'
        .toUpperCase()
        .split('')
        .forEach(letter => {
          indexCity[letter] = []
          // console.log(indexCity)
        })

      function getCity (items) {
        for (let item of items) {
          if (item.id % 10000 === 0) {
            // 直辖市，特别行政区
            // console.log(item.name)
            if (item.municipality || item.special) {
              addCity(item)
            } else {
              // 省份进入递归调用
              getCity(item.regions)
            }
          } else {
            // 城市处理
            addCity(item)
          }
        }
      }

      function addCity (item) {
        let { id, name, pinyin } = item
        indexCity[item.pinyin[0]].push({
          id,
          name,
          pinyin
        })
      }

      getCity(data.regions)

      this.indexCity = indexCity

      // console.log(data)
      // console.log(indexCity)
    })
  }
}
</script>
<style scoped lang="scss">
  .mint-header-title{
    height:42px;
    line-height:42px;
    font-size:32px;
  }
  .mint-header-button{
    font-size:32px;
    height:32px;
    width:32px;
  }
  .mint-header .mint-button{
    font-size:32px;
  }
  .mint-cell-wrapper{
    height:87px;
  }
</style>
