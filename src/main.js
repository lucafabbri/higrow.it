import Vue from 'vue';
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-51910998-52 ',
  checkDuplicatedScript: true
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
