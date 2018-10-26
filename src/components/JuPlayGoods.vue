<template>
<div class="hot-wrap">
    <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoadeds" ref="loadmore" @bottom-status-change="handleBottomChange">
        <div class="list-wrap">
            <!-- <router-link to="/judetails" slot="left" class="link"> -->
            <span class="show-item clearfix"
            v-for="(showlist,idx) in showlists" :key="idx"
            @click="detail(idx)">
                <div class="show-left fl load-img2">
                    <img :src="`http://image.juooo.com${showlist.pic}`" alt="">
                    <span v-html="showlist.ico"></span>
                </div>
                <div class="show-right fl">
                    <p class="title" v-text="showlist.schedular_name"></p>
                    <p class="show-time ">
                        <span class="day">{{showlist.show_time}}</span>
                    </p>
                    <p class="show-venue ">
                        <span class="city">[{{showlist.c_name}}]</span>
                        <span class="vunue" v-text="showlist.v_name"></span>
                    </p>
                    <div class="start-price">
                        <i class="icon icon-yuan ">￥</i>
                        <span class="yuan" v-text="showlist.min_price"></span>
                    </div>
                </div>
            </span>
            <!-- </router-link> -->
        <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        </div>
        </div>
    </mt-loadmore>
</div>
</template>

<script>
// post请求如果不这样做的话无法成功传递参数到后端，后端识别不了
import Qs from 'qs'

export default {
  props: ['type', 'num'],
  data () {
    return {
      showlists: [],
      totalPage: 0, // 总数
      count: 20, // api接口所需
      page: 1, // api接口所需
      sort: 0, // 筛选切换
      categoryId: 0, // tab切换
      allLoadeds: false, // 向上加载ui所需
      bottomStatus: '' // 向上加载ui所需
    }
  },
  created () {
    this.categoryId = this.$route.query.caid
    this.getList()
  },
  watch: {
    type (newvalue) {
      // console.log(newvalue)
      if (newvalue === '时间排序') {
        this.sort = 1
        this.showlists = []
        this.getList()
      } else {
        this.sort = 0
        this.showlists = []
        this.getList()
      }
    },
    num (val) {
      // console.log(val)
      this.categoryId = val
      this.showlists = []
      this.getList()
    }
  },
  methods: {
    // 获取数据并渲染
    getList () {
      // loading
      this.$loading.open()
      this.$http({
        headers: {
          'deviceCode': 'A95ZEF1-47B5-AC90BF3'
        },
        method: 'post',
        url: '/showlist/Show/getShowList',
        data: Qs.stringify({
          'city_id': 0,
          'category': this.categoryId,
          'keywords': '',
          'activity_id': 0,
          'sort_type': this.sort,
          'page': this.page
        })
      }).then(res => {
        // console.log(res.data.data)
        let obj = res.data.data
        this.totalPage = Math.ceil(obj.total / this.count)
        this.showlists.push(...obj.list)
        // 去除loading的效果
        this.$loading.close()
      })
    },
    // UI
    loadBottom () {
      this.page++
      if (this.page > this.totalPage) {
        this.allLoaded = true
        return
      }
      //   console.log(this.page)
      this.getList()
    },
    // 下拉时的状态
    handleBottomChange (status) {
      this.bottomStatus = status
    },
    detail (idx) {
      var obj = JSON.stringify(this.showlists[idx])
      window.sessionStorage.setItem('goods', obj)
      this.$router.push({name: 'DetailView', params: {}})
    }
  }
}
</script>
<style scoped lang="scss">
@import '../stylesheets/_base.scss';
.hot-wrap{
    margin-top:159px;
}
.list-wrap{
    margin-top:20px;
    margin-bottom:120px;
}
.hot-wrap > .title {
  font-size: 36px;
  color: #333;
  padding: 20px 25px 10px;
  font-weight: bold;
  background: #fff;
  position: relative;
  .switch-bar {
    width: 36px;
    height: 36px;
    position: absolute;
    top: 20px;
    right: 30px;
    background: url(../../static/image/homecontent/icon-palace.png) no-repeat
      center center;
    background-size: 36px 36px;
  }
  .list-icon{
    background: url(../../static/image/homecontent/list-icon.png) no-repeat
    center center;
    background-size: 36px 36px;
  }
}

.hot-wrap .list-wrap1 {
    padding: 0 25px;
    background: #fff;
}
.list-wrap1 {
    margin-right: -10px;
}
.list-wrap1 .show-item1 {
    display: inline-block;
    position: relative;
    margin-right: 10px;
    padding: 15px 0;
    width: 225px;
    .poster-box {
        position: relative;
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
        float:left;
        .bgloading{
            width: 225px;
            height:300px;
        }
        .poster-pic {
            vertical-align: middle;
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }
}
.list-wrap1 .show-item1 .poster-name {
    color: #1a1a1a;
    padding: 0 8px;
    font-size: 28px;
    font-weight: bold;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.list-wrap {
    width: 100%;
}
.hot-wrap .list-wrap {
    padding: 0 25px;
    background: #fff;
    .show-item {
        display: block;
        height: 280px;
        padding: 15px 0;
        border-bottom: 1px solid #e6e6e6;
        .show-left {
            width: 180px;
            height: 240px;
            margin-right: 25px;
            position: relative;
            border: 1px solid #f2f2f2;
            >img {
                width: 100%;
                height: 100%;
                border: 1px solid #fff;
            }
        }
        .show-right {
            width: 485px;
            .title {
                min-height: 40px;
                font-size: 28px;
                padding-top: 6px;
                margin-bottom: 25px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-weight: normal;
                color:#000;
                background:#fff;
            }
            .show-time{
                .day{
                    display: inline-block;
                    margin-right: 10px;
                    font-size:22px;
                    height:32px;line-height:32px;
                    color:#666;
                }
            }
            .show-venue > .city{
                margin-right:8px;
                font-size:22px;
                color: #666;
            }
            .show-venue > .vunue {
                padding-left: 9px;
                border-left: 1px solid #999;
                font-size:22px;
                color:#666;
            }
            .start-price {
                float: right;
                min-width: 148px;
                padding: 0 17px;
                height: 69px;
                background: url(../../static/image/homecontent/bg-priceBtn.png) no-repeat center center;
                background-size: 100% 100%;
                line-height: 55px;
                color: #fff;
                text-align: center;
                .icon-yuan {
                    color: #fff;
                    font-size: 28px;
                    font-weight: bold;
                }
                .yuan {
                    display: inline-block;
                    font-size: 28px;
                    font-weight: bold;
                    margin-left: -8px;
                    margin-right: -3px;
                }
                 .start-hint {
                    font-size: 18px;
                }
            }
        }
    }
}
/* 只要设置这个时:bottom-method="loadBottom" 才能生效*/
.hot-wrap{overflow-y:auto;}
.mint-loadmore-bottom {
    span {
        display: inline-block;
        transition: .2s linear;
        vertical-align: middle;

    }
    .mint-spinner {
        display: inline-block;
        vertical-align: middle;
    }
}
</style>
<style scoped>
hot-wrap >>>.logo_i{
    width: 58px;
    height: 70px;
    display: block;
    position: absolute;
    top: 0;
    right:0;
    left: auto;
    background: url(../../static/image/homecontent/juooo.png) 0 0 no-repeat;
    background-size: 100%;
}
hot-wrap >>>.ju_cheng {
    background: url(../../static/image/homecontent/ju_cheng.png) 0 0 no-repeat;
    background-size: 100%;
}
</style>
