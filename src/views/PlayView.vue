<template>
    <div class="ju-play">
      <ju-play-head />
      <ju-play-goods />
        <!-- <Juheader v-on:sort="filt" v-on:change="tab"/> -->
        <!-- <keep-alive>
          <router-view
          v-if="$route.meta.keepAlive"
          :type="sort" :num="dataId"></router-view>
        </keep-alive> -->
        <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
        <!-- <Juall :type="sort" :num="dataId"/> -->
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
    // filt (val) {
    // //   console.log(val)
    //   this.sort = val[0]
    // },
    // tab (val) {
    // //   console.log(val)
    //   this.dataId = val
    // }
  }
}
</script>

<style>

</style>
