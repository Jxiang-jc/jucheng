<template>
    <div class="ju-play">
        <Juheader v-on:sort="filt" v-on:change="tab"/>
        <router-view></router-view>
        <Juall :type="sort" :num="dataId"/>
        <Jufooter />
    </div>
</template>

<script>
import Jufooter from '../home/Jufooter'
import Juheader from './juPhead'
import Juall from './children/Juall'

export default {
  components: {
    Jufooter,
    Juheader,
    Juall
  },
  data () {
    return {
      sort: '推荐排序',
      dataId: 0
    }
  },
  methods: {
    filt (val) {
    //   console.log(val)
      this.sort = val[0]
    },
    tab (val) {
    //   console.log(val)
      this.dataId = val
    }
  }
}
</script>

<style>

</style>
