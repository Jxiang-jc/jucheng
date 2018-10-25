<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
  </div>
</template>

<script>
// import route from './router'
export default {
  name: 'App',
  components: {
  },
  mounted () {
    console.log('123456', this.$route)
  }
}
</script>

<style>
</style>
