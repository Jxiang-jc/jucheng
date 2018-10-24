<template>
<article class="text-desc">
    <h3 class="title" v-text="obj.schedular_name"></h3>
    <div class="row">
        时间：<span class="time" v-text="obj.show_time"></span>
    </div>
    <a class="row clearfix venue" href="javascript:;">
        <span class="fl">场馆：</span><span class="place fl js-venue"  v-text="obj.v_name"></span>
        <van-icon name="location" class="icon icon-map-marker fl venue-address" />
    </a>
    <div class="row price">
        <i class="icon icon-yuan">￥</i>
        <span class="num" v-text="`${obj.min_price}-${obj.max_price}`"></span>
    </div>

    <div class="support" href="javascript:;">
		<div class="left">
            支持：<span class="sup-item">橙PLUS卡免邮</span>
                <span class="sup-item">电子票</span>
                <span class="sup-item">橙Plus卡双倍积分</span>
        </div>
	</div>

    <div class="vipcard">
		<a class="row js-vipcard clearfix">
			<div class="left clearfix fl">
				<div class="fl txt3">欢聚橙卡：</div>
				<div class="sup fl cleafix card-sup">
					<div class="sup-wrap clearfix">
						<p class="sup-item fl clearfix">
							<span class="txt1 fl">橙PLUS会员卡</span>
						</p>
					</div>
				</div>
			</div>
			<div class="right fr">
				<span class="icon-dotted">. . .</span>
			</div>
		</a>
	</div>

</article>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'
Vue.use(Icon)
export default {
  data () {
    return {
      obj: ''
    }
  },
  methods: {
    render () {
      this.obj = this.session
      console.log(this.obj)
    }
  },
  created () {
    this.render()
  },
  computed: {
    session () {
      return JSON.parse(window.sessionStorage.getItem('goods'))
    }
  }
}
</script>

<style lang="scss" scoped>
.text-desc {
    padding: 0 30px 0 20px;
    background: #fff;
    position: relative;
    margin-top: -2px;
    .title {
        font-size: 34px;
        padding-top: 3px;
        margin-bottom: 25px;
        word-break: break-word;
        color: #212121;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .row {
        padding-bottom: 10px;
        color:#666;
        font-size:28px;
        .icon-map-marker {
            margin-left: 20px;
            border-left: 1px solid #ccc;
            padding: 0 50px 0 20px;
            font-size: 32px;
            vertical-align: text-bottom;
            color: #666;
            margin-top: 5px;
        }
    }
    .price {
        padding: 10px 0 30px;
        font-size: 36px;
        color: #ff7919;
    }
}

.text-desc .support {
    -webkit-box-pack: justify;
    border-top: 1px dashed #ccc;
    height: 80px;
    font-size: 26px;
    line-height: 80px;
    color: #999;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    .sup-item {
        display: inline-block;
        margin-left: 13px;
        border: 1px solid #ff7919;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        padding: 0 5px;
        height: 32px;
        font-size: 20px;
        line-height: 32px;
        color: #ff7919;
    }
}

.text-desc .vipcard {
    border-top: 1px dashed #ccc;
    .row {
        display: block;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 15px;
        font-size: 26px;
        color: #999;
        background: #fff;
        .txt1 {
            display: inline-block;
            padding: 0 5px;
            height: 30px;
            font-size: 20px;
            text-align: center;
            line-height: 30px;
            color: #ff7919;
            border: 1px solid #ff7919;
            border-radius: 5px;
            margin-right: 10px;
            margin-top: 6px;
        }
        .icon-dotted{
            vertical-align:middle;
            color:#666;
            font-weight:900;
        }
    }
}
</style>
