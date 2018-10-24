<template>
<div>
    <mt-header fixed class="navbar detail-header">
        <router-link :to="{path: '/juplay', query: {caid: idx}}" slot="left"
        class="btn-return">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right" class="btn-dotted"></mt-button>
    </mt-header>
</div>
</template>

<script>
export default {
  data () {
    return {
      idx: 0
    }
  },
  created () {
    this.idx = window.sessionStorage.getItem('caid')
  }
}
</script>

<style scoped lang="scss">
.navbar {
    position: fixed;
    z-index: 500;
    left: 0;
    top: 0;
    background: transparent;
    /* -webkit-backface-visibility: hidden; */
    /* backface-visibility: hidden; */
    margin: 0;
    width: 100%;
    height: 88px;
    font-size: 34px;
    color: #fff;
    transition: all 1s cubic-bezier(0, 0, 0.25, 1);
    box-shadow: none;
}
.btn-return,.btn-dotted {
    display:inline-block;
    height: 88px;
    line-height: 88px;
    padding-left: 30px;
}
.btn-dotted {
    padding-left:0;
    padding-right:30px;
}

</style>
<style scoped>
.btn-return >>> .mint-button {
    height:88px;
}
.btn-return >>> .mintui-back:before {
    font-size: 40px;
    color:#fff;
}
.btn-dotted >>> .mintui {
    font-size:60px;
}
</style>
