<template>
<mt-swipe :auto="4000" class="load-img">
    <mt-swipe-item v-for="(item,idx) in lunbolist" :key="idx">
        <img :src="item.image | formatImage" />
    </mt-swipe-item>
</mt-swipe>
</template>

<script>
export default {
  data () {
    return {
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
        this.lunbolist = res.data.data.object_list
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 400px;
  margin-top: 94px;
}
.mint-swipe img {
  width: 100%;
  height: 400px;
}
</style>
