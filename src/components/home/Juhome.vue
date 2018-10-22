<template>
    <div id="ju-home">
        <juheader :city='localCity'/>
        <Jubanner />
        <Jucategory />
        <Juconcert />
        <Jucontent />
        <Jufooter />
    </div>
</template>

<script>
import Jufooter from './Jufooter'
import juheader from './juheader'
import Jucategory from './Jucategory'
import Jubanner from './juhome-banner'
import Juconcert from './juconcert-tour'
import Jucontent from './Jucontent'

export default {
  props: ['city'],
  components: {
    Jufooter,
    juheader,
    Jubanner,
    Jucategory,
    Juconcert,
    Jucontent
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
.logo_i {
    width: 58px;
    height: 70px;
    display: block;
    position: absolute;
    top: 0;
    right: auto;
    left: 8px;
    background: url(../../../static/image/homecontent/juooo.png) 0 0 no-repeat;
    background-size: 100%;
}
.ju_cheng {
    background: url(../../../static/image/homecontent/ju_cheng.png) 0 0 no-repeat;
    background-size: 100%;
}
</style>
