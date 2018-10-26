<template>
    <div class="ju-play">
      <ju-play-head :type="sort" :num="dataId" />
      <ju-play-goods v-on:change="tab" v-on:sort="filt" />
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
    //   console.log(val)
      this.sort = val[0] // 筛选按什么排序
    },
    tab (num) {
    //   console.log(num)
      this.dataId = num // 子->父 (用户点击tab标签，按分类重新发起请求)
    }
  }
}
</script>

<style>

</style>
