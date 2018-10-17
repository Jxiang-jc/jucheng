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

//  rem
import computedRem from './rem'

// 全局引入样式
import 'mint-ui/lib/style.css'

// ajax请求
Vue.prototype.$http = axios

//  计算rem
computedRem()

Vue.config.productionTip = false
