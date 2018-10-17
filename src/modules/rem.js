
/*  computedRem 计算 rem
*   @params pictureWidth : 设计图的宽度 number (750)
*   @params remWidth : 使用的rem 宽度 number（100）
*   return void
*/

const computedRem = (pictureWidth = 750, remWidth = 100) => {
  let html = document.documentElement
  html.style.fontSize = html.clientWidth / (pictureWidth / (2 * remWidth)) + 'px'

  window.onresize = () => {
    let html = document.documentElement
    html.style.fontSize = html.clientWidth / (pictureWidth / (2 * remWidth)) + 'px'
  }
}

export default computedRem
