<template>
    <div class="ju-play">
      <ju-play-head v-on:change="tab" v-on:sort="filt"/>
      <ju-play-goods :type="sort" :num="dataId" />
    </div>
</template>

<script>
import JuPlayHead from '../components/JuPlayHead'
import JuPlayGoods from '../components/JuPlayGoods'

export default {
  components: { JuPlayHead, JuPlayGoods },
  data () {
    return {
      sort: '推荐排序',
      dataId: 0
    }
  },
  methods: {
    filt (val) {
      // 筛选按什么排序
      // console.log(val)
      this.sort = val[0]
    },
    tab (val) {
      // 子->父 (用户点击tab标签，按分类重新发起请求)
      console.log(val)
      this.dataId = val
    }
  }
}
</script>

<style>

</style>
