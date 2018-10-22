
import Vue from 'vue'
import path from 'path'

// {{item.image | formatImage}}
Vue.filter('formatImage', (url) => {
  let ext = path.extname(url)
  return url.replace(ext, '.thumb.600_0_c' + ext)
})
