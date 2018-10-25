<template>
<div>
    <Juheader />
    <Jubanner />
    <Jucategory />
    <Juconcertour />
    <Jucontent />
</div>
</template>

<script>
import Juheader from '../components/Juheader'
import Jubanner from '../components/Jubanner'
import Jucategory from '../components/Jucategory'
import Juconcertour from '../components/Juconcert-tour'
import Jucontent from '../components/Jucontent'

export default {
  components: { Juheader, Jubanner, Jucategory, Juconcertour, Jucontent },
  data () {
    return {}
  }
}
</script>

<style>

</style>
