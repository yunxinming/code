import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .directive('lazy', {
    mounted(el, binding) {
      const { value } = binding
      const H = document.documentElement.clientHeight
      window.onscroll = function () {
        let TOP = document.documentElement.scrollTop || document.body.scrollTop
        if (el.getBoundingClientRect().top < H + TOP) {
          el.src = value
        }
      }
    },
  })
  .mount('#app')
