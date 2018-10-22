<template>
<div class="hot-wrap">
    <div class="title ">热门演出
        <div class="switch-bar"
        @click="changShow"
        :class="{'list-icon':active2}"></div>
    </div>
    <div class="showBox" v-show="active1">
        <div class="list-wrap1 clearfix">
            <a href="#"
            v-for="(showlist,idx) in showlists" :key="idx"
            class="show-item1 clearfix ">
                <div class="poster-box">
                    <div class="bgloading load-img2">
                        <img :src="showlist.pic" alt="" class="poster-pic" >
                    </div>
                    <span v-html="showlist.ico"></span>
                </div>
                <div class="poster-ctn">
                    <p class="poster-name" v-text="showlist.show_name"></p>
                    <p class="poster-time">
                        {{showlist.display_show_time}}
                        <span class="poster-address" v-text="showlist.city_name"></span>
                    </p>
                </div>
            </a>
        </div>
    </div>
    <div class="list-wrap" v-show="active2">
        <a href="#" class="show-item clearfix"
        v-for="(showlist,idx) in showlists" :key="idx">
            <div class="show-left fl load-img2">
                <img :src="showlist.pic" alt="">
                <span v-html="showlist.ico"></span>
            </div>
            <div class="show-right fl">
                <p class="title" v-text="showlist.show_name"></p>
                <p class="show-time ">
                    <span class="day">{{showlist.display_show_time}}</span>
                </p>
                <p class="show-venue ">
                    <span class="city" v-text="showlist.city_name"></span>
                    <span class="vunue" v-text="showlist.venue_name"></span>
                </p>
                <div class="start-price">
                    <i class="icon icon-yuan ">￥</i>
                    <span class="yuan" v-text="filter(showlist.show_price)"></span>
                    <span class="start-hint">元起</span>
                </div>
            </div>
        </a>
    </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      showlists: [],
      active1: true,
      active2: false
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$http.post('/showlist/index/hotsShowList', {
        params: {
          city_id: 3
        }
      }).then(res => {
        console.log(res)
        this.showlists = res.data.data
      })
    },
    // 筛选价格 '200 - 1500' => '200'
    filter (price) {
      if (price === 0 || price === 2000) {
        return price
      } else {
        var a = price.split(' - ')
        return a[0]
      }
    },
    changShow () {
      this.active1 = !this.active1
      this.active2 = !this.active2
    }
  }
}
</script>
<style scoped lang="scss">
@import '../../stylesheets/_base.scss';
.showBox,.list-wrap{
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
    background: url(../../../static/image/homecontent/icon-palace.png) no-repeat
      center center;
    background-size: 36px 36px;
  }
  .list-icon{
    background: url(../../../static/image/homecontent/list-icon.png) no-repeat
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
                    font-size:26px;
                    height:32px;line-height:32px;
                    color:#666;
                }
            }
            .show-venue > .city{
                margin-right:8px;
                font-size:26px;
                color: #666;
            }
            .show-venue > .vunue {
                padding-left: 9px;
                border-left: 1px solid #999;
                font-size:26px;
                color:#666;
            }
            .start-price {
                float: right;
                min-width: 148px;
                padding: 0 17px;
                height: 69px;
                background: url(../../../static/image/homecontent/bg-priceBtn.png) no-repeat center center;
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

</style>
