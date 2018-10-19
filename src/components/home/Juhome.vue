<template>
    <div id="ju-home">
        <!-- <router-view/> -->
        <juheader :city='localCity'/>
        <jubanner />
        <Jufooter />
    </div>
</template>

<script>
import Jufooter from './Jufooter.vue'
import juheader from './juheader.vue'
import jubanner from './juhome-banner.vue'

export default {
  props: ['city'],
  components: {
    Jufooter,
    juheader,
    jubanner
  },
  data () {
    // 我本意是想把数据从juhome->juheader.但是，！！juheader又是juhome的子组件。因此无法直接用this.city去获取。之能用this.$route.parmams去获取。如果想要在header那边获取，只能用下面这种办法了
    return {
      localCity: this.city
    }
  }
}
</script>

<style>
</style>
