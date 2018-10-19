import Vue from 'vue'
// // swiper css
import 'swiper/dist/css/swiper.min.css'

// 全局通用样式
// 要引入scss必须先装 node-sass 以及 sass-loader
import '../stylesheets/main.scss'

// axios
import axios from 'axios'

// filters
import './filters'

import 'lib-flexible/flexible'

// 引入weui
import 'weui'

// 引入mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// ajax请求
Vue.prototype.$http = axios

Vue.config.productionTip = false
