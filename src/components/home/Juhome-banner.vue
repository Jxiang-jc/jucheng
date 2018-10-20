<template>
    <!-- <mt-swipe :show-indicators="false" :auto="3000">
        <mt-swipe-item v-for="(item,idx) in lunbolist" :key="idx">
            <img :src="item.images.large" />
        </mt-swipe-item>
    </mt-swipe> -->
    <mt-swipe :auto="4000" >
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  data () {
    return {
      movielist: [],
      lunbolist: []
    }
  },
  created () {
    this.getbanner()
  },
  methods: {
    getbanner () {
      this.$http.get('/api/getImg').then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  margin-top: 94px;
  background: red;
}
.mint-swipe img {
  width: 100%;
}
</style>
