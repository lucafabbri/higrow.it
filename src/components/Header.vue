<template>
  <div>
    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar uk-sticky>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="/">
          <img src="/images/higrow-logo-1024.png" width="150">
        </a>
      </div>
      <div class="uk-navbar-right uk-visible@l">
        <ul class="uk-navbar-nav">
          <li v-bind:key="item.label" v-for="item in menu">
            <a :href="item.target" uk-scroll>{{item.label}}</a>
          </li>
        </ul>
      </div>
      <div class="uk-navbar-right uk-hidden@l">
        <a class="uk-navbar-toggle" href="#" uk-toggle="target: #mobile-nav">
            <div class="hg-hamburger">
                <div class="hg-hamburger-line"></div>
                <div class="hg-hamburger-line"></div>
            </div>
        </a>
      </div>
    </nav>
    <div id="mobile-nav" uk-offcanvas="overlay: true; flip:true; mode: push">
      <div class="uk-offcanvas-bar uk-flex uk-flex-column">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul class="uk-nav uk-nav-primary uk-margin-auto-vertical">
          <li v-bind:key="item.label" v-for="item in menu">
            <a :href="item.target">{{item.label}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  data: function() {
    return {
      menu: [
        {
          label: "Servizi",
          target: "/#servizi"
        },
        {
          label: "Contatti",
          target: "/#contatti"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.uk-offcanvas-overlay::before{
    background-color: fade(#d4af37,10%);
}
.hg-hamburger{
    position: relative;
    width:36px;
    .hg-hamburger-line{
        position: absolute;
        top:0px;
        left: 0px;
        background-color: #111;
        width:100%;
        height: 1px;
        border-radius: 4px;
        +.hg-hamburger-line{
            margin-top:10px;    
        }
        -webkit-transition: all 0.3s; /* Safari */
        transition: all 0.3s;
    }
}
.uk-offcanvas-page{
    .hg-hamburger{
        .hg-hamburger-line{
            position: relative;
            top:5px;
            +.hg-hamburger-line{
                margin-top:-1px;    
            }
        }
    }
}
</style>
