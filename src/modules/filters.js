
import Vue from 'vue'
import path from 'path'

// {{banner.image_url | formatImage}}
Vue.filter('formatImage', (url) => {
  let ext = path.extname(url)
  return url.replace(ext, '.thumb.750_0_c' + ext)
})
