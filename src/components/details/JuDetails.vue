<template>
<div>
  <ju-dheader />
  <ju-dadaptive />
  <ju-dartical />
  <JuDticketNotice />
  <ju-dfooter />
  <!-- <div class='img-wrap'>
      <img src="../../assets/logo.png" id="img" data-adaptive-background>
  </div> -->
</div>
</template>
<script>

import JuDheader from './JuDheader'
import JuDfooter from './JuDfooter'
import JuDadaptive from './JuDadaptive'
import JuDartical from './JuDartical'
import JuDticketNotice from './JuDticket-notice'
export default {
  components: {
    JuDheader,
    JuDfooter,
    JuDadaptive,
    JuDartical,
    JuDticketNotice
  }
}
</script>

<style scoped lang="scss">

</style>
