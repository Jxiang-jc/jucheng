<template>
<header class="search-top border-bt">
    <div class="search-bar">
        <a href="javascript:void(0);" class="left">
            <span class="city">全国</span>
            <span class="iconfont icon-menu-down"></span>
        </a>
        <!-- router-link 相当于a 标签 -->
        <router-link to="/jusearch" class="center">
            <span class="iconfont icon-search"></span>
            <span>搜索演出、艺人或场馆</span>
        </router-link>
        <a href="javascript:void(0)" class="right js-show-bg">
            <span class="iconfont icon-filter2"></span>
        </a>
    </div>
    <div class="search-nav">
        <div class="search_nav_wrap js-search-nav">
            <a href="javascript:void(0);"
            class="search_nav_item"
            v-for="(nav,idx) in navs" :key="idx"
            :data-id="nav.dataId"
            :class="{active : nav.isShow}"
            v-text="nav.title"
            @click="highlight(idx)">
            </a>
        </div>
    </div>
</header>

</template>
<script>
export default {
  data () {
    return {
      navs: [
        {
          title: '全部',
          dataId: 0,
          isShow: true
        },
        {
          title: '演唱会',
          dataId: 35,
          isShow: false
        },
        {
          title: '音乐会',
          dataId: 36,
          isShow: false
        },
        {
          title: '话剧歌剧',
          dataId: 37,
          isShow: false
        },
        {
          title: '儿童亲子',
          dataId: 38,
          isShow: false
        },
        {
          title: '音乐剧',
          dataId: 79,
          isShow: false
        },
        {
          title: '舞蹈芭蕾',
          dataId: 86,
          isShow: false
        },
        {
          title: '戏曲综艺',
          dataId: 91,
          isShow: false
        },
        {
          title: '展览',
          dataId: 99,
          isShow: false
        }
      ]
    }
  },
  methods: {
    highlight (idx) {
      this.navs.map(item => {
        item.isShow = false
        this.navs[idx].isShow = true
      })
    }
  }
}
</script>
<style scoped lang='scss'>
@import "../../assets/icon/iconfont.css";
.search-top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  &.border-bt {
    border-bottom: 1px solid #dfdfdf;
  }
  .search-bar {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
    .left {
      min-width: 120px;
      font-size: 0;
      .city {
        flex: 1;
        font-size: 28px;
        color: #212121;
        padding-left: 7px;
        padding-right: 7px;
        .iconfont {
          width: 24px;
          font-size: 24px;
          color: #999999;
        }
      }
    }
    .center {
      flex: 1;
      height: 56px;
      line-height: 56px;
      background-color: #f5f5f5;
      border: 1px solid #ebebeb;
      border-radius: 25px;
      font-size: 24px;
      color: #999999;
      text-align: center;
      .iconfont {
        width: 24px;
        font-size: 24px;
        color: #999999;
      }
    }
    .right {
      width: 66px;
      text-align: right;
      color: #666666;
      height: 100%;
      line-height: 88px;
      .iconfont {
        width: 42px;
        font-size: 32px;
        line-height: 88px;
        color: #808080;
      }
    }
  }
}
.search-top .search-nav {
  height: 69px;
  font-size: 0;
  overflow: hidden;
  margin-left: -30px;
  margin-right: -30px;
  .search_nav_wrap {
    display: -webkit-box;
    height: 75px;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    .search_nav_item {
      display: inline-block;
      height: 69px;
      line-height: 62px;
      padding-left: 28px;
      padding-right: 28px;
      font-size: 24px;
      color: #666666;
      text-align: center;
      border-bottom: 3px solid transparent;
      white-space: nowrap;
      &:first-child {
        margin-left: 30px;
      }
    }
    .search_nav_item.active {
      font-weight: bold;
      color: #ff7919;
      border-bottom: 3px solid #ff7919;
    }
  }
}
</style>
