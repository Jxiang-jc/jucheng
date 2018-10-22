<template>
<div>
  <header class="search-top border-bt">
    <div class="search-bar search1">
      <router-link to="/" slot="left">
        <a href="javascript:history.go(-1)" class="left">
          <mt-button icon="back"></mt-button>
        </a>
      </router-link>
      <a href="javascript:void(0);" class="center">
        <input type="text" id="key" class="search-input" placeholder="演出/艺人/场馆">
        <span class="icon icon-search"></span>
      </a>
      <a href="javascript:void(0);" class="right search-btn">
        搜索
      </a>
    </div>
  </header>
  <div class="content-wrap pt88">
      <div class="search-recommend">
        <p class="title">大家都在找</p>
      <div class="hot-word-list">
        <a href="javascript:void(0)" class="hot-words all-gotohref">橙意通行证</a>
        <a href="javascript:void(0)" class="hot-words all-gotohref">小野丽莎</a>
        <a href="javascript:void(0)" class="hot-words all-gotohref">十二生肖</a>
        <a href="javascript:void(0)" class="hot-words all-gotohref">三体</a>
        <a href="javascript:void(0)" class="hot-words all-gotohref">回声</a>
        <a href="javascript:void(0)" class="hot-words all-gotohref">陈慧娴</a>
        <a href="javascript:void(0)" class="hot-words all-gotohref">杨丞琳</a>
        <a href="javascript:void(0)" class="hot-words all-gotohref">吉屋出租</a>
        <a href="javascript:void(0)" class="hot-words all-gotohref">莫文蔚</a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      items: [],
      keyword: ''
    }
  },
  created () {}
}
</script>
<style scoped>
.search-top {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #ffffff;
    padding-left: 30px;
    padding-right: 30px;
}
.search-top.border-bt {
    border-bottom: 1px solid #dfdfdf;
}
.search-top .search-bar {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
}
.search-top .search-bar .left, .search-top .search-bar .right {
    height: 100%;
    line-height: 88px;
}
.mint-button {
    background-color: transparent;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    padding: 0;
    font-size: inherit;
}
.search-top .search-bar .center {
    max-width:550px;
    flex: 1;
    height: 56px;
    line-height: 56px;
    background-color: #f5f5f5;
    border: 1px solid #ebebeb;
    border-radius: 25px;
    font-size: 24px;
    color: #999999;
    text-align: center;
}
.search-top .search-bar.search1 .center {
    position: relative;
    text-align: left;
    padding-left: 30px;
    overflow: hidden;
}
.search-top .search-bar.search1 .center .search-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 15px;
    padding-left: 66px;
    border: none;
    background-color: #f5f5f5;
    font-size: 24px;
    line-height: 24px;
    color: #333;
    outline: 0;
    background: #f0f0f0 url(../../../../static/image/homeheader/search.png) no-repeat 25px 15px;
}

.search-top .search-bar.search1 .right {
    text-align:right;
    width: 84px;
    font-size:28px;
    cursor:pointer;
    color:#666;
}
.router-link-active{
  min-width:55px;
}
.content-wrap {
    width: 100%;
    padding-top: 88px;
    padding-bottom: 101px;
    font-size:24px;
    line-height:38px;
}
.content-wrap .search-recommend .title {
    display: block;
    padding: 40px 30px 0;
    font-size: 24px;
    line-height: 24px;
    color: #999999;
}
.content-wrap .search-recommend .hot-word-list {
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 30px 20px 0;
    font-size: 0;
}
.content-wrap .search-recommend .hot-word-list .hot-words {
    height: 60px;
    line-height: 60px;
    margin: 0 10px 20px;
    padding-left: 38px;
    padding-right: 38px;
    background-color: #f7f7f7;
    border-radius: 5px;
    font-size: 26px;
    color: #212121;
}
</style>
