import Vue from 'vue';
import Router from 'vue-router';
import Homepage from './components/Homepage.vue';
import Post from './components/Post.vue';


Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Homepage',
        component: Homepage
      },
      {
        path: '/news/:id',
        name: 'Post',
        component: Post
      },
      {
        path: '*',
        redirect: '/'
      }
    ]
  })