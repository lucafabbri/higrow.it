<template>
    <div class="uk-container uk-margin">
      <div v-if="loading" class="uk-section uk-flex uk-flex-middle uk-flex-center" uk-height-viewport>
        <div uk-spinner="ratio: 3"></div>
      </div>
      <div v-else>
        <img v-if="post._embedded!=null" v-bind:src="post._embedded['wp:featuredmedia'][0].source_url" uk-img />
        <h1 class="uk-heading-primary">{{post.title.rendered}}</h1>
        <div v-html="post.content.rendered"></div>
      </div>
    </div>
</template>

<script>
var WPAPI = require("wpapi");
var wp = new WPAPI({ endpoint: "https://www.zepfiro.com/wp-json" });  

export default {
  name: "Post",
  data: function(){
    return {
        loading:true,
      post:{
        content:{
          rendered:""
        },
        title:{
          rendered:""
        },
        _embedded:null
      }
    }
  },
  mounted: function(){
    wp.posts().id(this.$route.params.id).embed().then(function( data ) {
      this.post = data;
      this.loading = false;
    }.bind(this)).catch(function( err ) {
    });
  },
  methods:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>