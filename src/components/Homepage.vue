<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-text-center">
        <img src="images/higrow-icona-1024.png" width="200" uk-img>
        <h1 class="uk-heading-hero">creatività
          <br>senza {{ends[current]}}
        </h1>
        <a class="uk-button uk-button-text uk-button-large" v-on:click="count()">clicca qui</a>
      </div>
    </div>
    <div class="uk-section">
      <img src="images/table-top-view-creativity.jpg" uk-img/>
    </div>
    <div id="servizi" class="uk-section">
      <div class="uk-container uk-text-center">
        <img src="images/higrow-icona-penta-1024.png" width="100" uk-img>
        <h2 class="uk-heading-primary">Brand identity</h2>
        <p class="uk-text-lead uk-flex-middle">Naming</p>
        <p class="uk-text-lead uk-flex-middle">Logo</p>
        <p class="uk-text-lead uk-flex-middle">Graphic Design</p>
        <p class="uk-text-lead uk-flex-middle">Twin-set</p>
        <p class="uk-text-lead uk-flex-middle">Packaging</p>
      </div>
    </div>
    <div class="uk-container uk-text-center">
      <div class="uk-child-width-expand@s uk-light" uk-grid>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/lasportiva.jpg);">
            </div>
        </div>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/globus.jpg);">
            </div>
        </div>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/saiindustry.jpg);">
            </div>
        </div>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/cimento.jpg);">
            </div>
        </div>
      </div>
    </div>
    <div class="uk-section">
      <div class="uk-container uk-text-center">
        <img src="images/higrow-icona-epta-1024.png" width="100" uk-img>
        <h2 class="uk-heading-primary">Web design</h2>
        <p class="uk-text-lead uk-flex-middle">Siti web</p>
        <p class="uk-text-lead uk-flex-middle">E-commerce</p>
        <p class="uk-text-lead uk-flex-middle">Web App</p>
        <p class="uk-text-lead uk-flex-middle">Landing Page</p>
        <p class="uk-text-lead uk-flex-middle">iOS&Droid App</p>
      </div>
    </div>
    <div class="uk-container uk-text-center">
      <div class="uk-child-width-expand@s uk-light" uk-grid>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/stateofart.jpg);">
            </div>
        </div>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/theedgecompany.jpg);">
            </div>
        </div>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/aiprogetti.jpg);">
            </div>
        </div>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/relax.jpg);">
            </div>
        </div>
      </div>
    </div>
    <div class="uk-section">
      <div class="uk-container uk-text-center">
        <img src="images/higrow-icona-enna-1024.png" width="100" uk-img>
        <h2 class="uk-heading-primary">Growth Hacking</h2>
        <p class="uk-text-lead uk-flex-middle">Digital marketing</p>
        <p class="uk-text-lead uk-flex-middle">Social media strategy</p>
        <p class="uk-text-lead uk-flex-middle">Market acquisition</p>
      </div>
    </div>
    <div class="uk-container uk-text-center">
      <div class="uk-child-width-expand@s uk-light" uk-grid>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/villaggiomarzotto.jpg);">
            </div>
        </div>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/kibernetes.jpg);">
            </div>
        </div>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/noventavetro.jpg);">
            </div>
        </div>
        <div>
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(images/portfolio/ristorantelieto.jpg);">
            </div>
        </div>
      </div>
    </div>
    <div class="uk-section uk-flex uk-flex-middle" uk-height-viewport>
      <div class="uk-container uk-text-center">
        <div class="uk-child-width-expand@s" uk-grid>
          <div>
              <cite class="uk-text-lead uk-panel uk-height-large uk-flex-middle uk-flex-center ">&ldquo;I nostri pregi e i nostri difetti sono inscindibili, <br>proprio come la forza e la materia, <br>quando si separano l'uomo non è più.&rdquo;</cite>
              <p class="uk-h4">
                <strong>Nikola Tesla</strong>
              </p>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-container uk-text-center">
      <h2>Blog</h2>
      <div v-if="loading" class="uk-section uk-flex uk-flex-middle uk-flex-center">
        <div uk-spinner="ratio: 3"></div>
      </div>
      <div v-else class="uk-child-width-expand@s" uk-grid>
        <router-link v-bind:to="{ name: 'Post', params: { id: post.id }}" v-bind:key="post.id" v-for="post in posts" >
            <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" v-bind:style="{ 'background-image': 'url(' + post._embedded['wp:featuredmedia'][0].source_url + ')' }">
            </div> 
            <div>
              <h5 v-html="post.title.rendered"></h5>
            </div>
        </router-link>
      </div>
    </div>
    <div id="contatti" class="uk-section uk-flex uk-flex-middle" uk-height-viewport>
      <div class="uk-container uk-text-center">
        <div class="uk-child-width-expand@s" uk-grid>
          <div>
              <cite class="uk-text-lead uk-panel uk-height-large uk-flex-middle uk-flex-center ">&ldquo;Ogni lungo viaggio inizia con un passo&rdquo;</cite>
              <p class="uk-h4">
                <strong>Laozi</strong>
              </p>
              <p class="uk-text-small"><a href="mailto:commerciale@higrow.it">commerciale@higrow.it</a> | <a href="tel:3339774604">3339774604</a></p>
              <!--p><a class="typeform-share uk-button uk-button-primary" href="https://lucafabbri.typeform.com/to/vYvROi" data-mode="drawer_left" data-submit-close-delay="5">Parlaci del tuo progetto </a> </p-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

var WPAPI = require("wpapi");

var wp = new WPAPI({ endpoint: "https://www.zepfiro.com/wp-json" });

export default {
  name: "Homepage",
  data: function(){
    return {
      loading:true,
      posts:{},
      ends:["regole","pregiudizi","scopo","font","palle","cervello","di te","bottoni","pazienza","click","alberi","penna","fili","altro","odio"],
      current:0
    }
  },
  mounted: function(){
    wp.posts().perPage(4).embed().then(function( data ) {
      this.posts = data;
      this.loading = false;
    }.bind(this)).catch(function( err ) {
    });
  },
  methods:{
    count: function(){
      if(this.current==this.ends.length-1){
        this.current=0;
      }else{
        this.current++;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
