<template>
<div>
  <ju-det-head />
  <ju-det-adaptive />
  <ju-det-artical />
  <ju-det-ticket-notice />
  <ju-det-footer />

</div>
</template>
<script>

import JuDetHead from '../components/JuDetHead'
import JuDetAdaptive from '../components/JuDetAdaptive'
import JuDetArtical from '../components/JuDetArtical'
import JuDetTicketNotice from '../components/JuDetTicketNotice'
import JuDetFooter from '../components/JuDetFooter'

import $ from 'jquery' // 目的是为跳转后滚动条的位置

export default {
  components: { JuDetHead, JuDetAdaptive, JuDetArtical, JuDetTicketNotice, JuDetFooter },
  beforeMount () {
    $(window).scrollTop(0)
  }
}
</script>

<style scoped lang="scss">

</style>
