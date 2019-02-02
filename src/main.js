import Vue from 'vue';
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-51910998-52',
  router,
  debug: {
    enabled: true
  }
})


new Vue({
  router,
  VueAnalytics,
  render: h => h(App),
}).$mount('#app')
