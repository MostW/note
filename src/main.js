// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '@/style/iconfont.css'

Vue.config.productionTip = false

// 设置一个长按指令
Vue.directive('longpress', {
  bind: function (el, binding, vNode) {
    // 传进来的参数不是函数
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name
      let warn = `[longpress:] provided expression '${binding.expression}' is not a function`
      if (compName) {
        warn = warn + `Found in component '${compName}`
      }
      console.log(warn)
    }
    let pressTimer = null // 接受setTimeout返回的ID

    let start = (e) => {
      if (e.type === 'click' && e.button !== 0) {
        return
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // do something
          binding.value()
        }, 1000)
      }
    }
    let cancel = (e) => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }

    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
  },
  inserted: function (el) {
    console.log('insert')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
