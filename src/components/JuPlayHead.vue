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
            <span class="iconfont icon-filter2"
            @click="popupVisible = !popupVisible"
            ></span>
        </a>
    </div>
    <div class="tri" v-show="popupVisible"></div>
    <div class="search-nav">
        <div class="search_nav_wrap js-search-nav">
            <a href="javascript:void(0);"
            class="search_nav_item"
            v-for="(nav,idx) in navs" :key="idx"
            :data-id="nav.dataId"
            :class="{active : nav.dataId == changePath}"
            v-text="nav.title"
            @click="highlight(idx);
            changeTab(nav.dataId);
            keepLight(nav.dataId)">
            </a>
        </div>
    </div>
    <mt-popup
    v-model="popupVisible"
    popup-transition="popup-fade"
    closeOnClickModal="true"
    position="top">
      <mt-picker :slots="slots" @change="onValuesChange">
      </mt-picker>
    </mt-popup>
</header>

</template>
<script>
export default {
  data () {
    return {
      popupVisible: false,
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
      ],
      slots: [{
        values: ['推荐排序', '时间排序']
      }],
      filter: '推荐排序'
    }
  },
  methods: {
    // 刷新保持当前标签高亮
    keepLight (num) {
      this.$router.push({name: 'PlayView', query: {caid: num}})
      // 为了可以在其他页面获取tab在哪个位置高亮
      window.sessionStorage.setItem('caid', num)
    },
    // 点击 子 -> 父 -> 子 通讯
    changeTab (num) {
      this.$emit('change', num)
    },
    // 点击高亮
    highlight (idx) {
      this.navs.map(item => {
        item.isShow = false
        this.navs[idx].isShow = true
      })
    },
    // 般透明罩
    ShouPup () {
      this.popupVisible = true
    },
    // 下拉触发事件
    onValuesChange (picker, values) {
      this.message = values
      this.$emit('sort', values)
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
      this.popupVisible = false
    }
  },
  computed: {
    changePath () {
      return this.$route.query.caid
    }
  }
}
</script>
<style scoped lang='scss'>
@import "../assets/icon/iconfont.css";
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

.mint-popup {
  position: fixed;
  background: #fff;
  top: 5%;
  right: -10%;
  left:auto;
  width: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 6px 12px 6px 16px;
}
.mint-popup.mint-popup-top{
  height:150px;
}
.picker-item{
  top:-20px;
}
.tri {
  position: absolute;
  top: 47px;
  right: 42px;
  width: 20px;
  height: 20px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
  z-index:10000000000000000000000000000;
}
</style>
