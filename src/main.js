
import Vue from 'vue'
import App from './App'
import router from './router'
import swipercss from '../static/sass/swiper.min.css'
import swiperjs from '../static/js/swiper.min.js'
/* eslint-disable no-new */
new Vue({
  
  el: '#app',
  router,
  swipercss,
  swiperjs,
  components: { App },
  template: '<App/>'
})
