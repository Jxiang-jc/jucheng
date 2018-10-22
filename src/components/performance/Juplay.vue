<template>
    <div class="ju-play">
        <Juheader />
        <router-view></router-view>
        <Juall />
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
    return {}
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
    right:0;
    left: auto;
    background: url(../../../static/image/homecontent/juooo.png) 0 0 no-repeat;
    background-size: 100%;
}
.ju_cheng {
    background: url(../../../static/image/homecontent/ju_cheng.png) 0 0 no-repeat;
    background-size: 100%;
}
</style>
