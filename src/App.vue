<template>  
    <div id="app">
      <Header />
        <router-view>
        </router-view>  
      <Footer />
    </div>
</template>

<script>
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

UIkit.use(Icons);

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
@import "./assets/less/theme.less";
html{
  font-weight: 300;
}

</style>
