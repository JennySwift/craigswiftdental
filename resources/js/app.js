
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./config');

import Vue from 'vue'
// window.VueRouter = require('vue-router');
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// window.router = new VueRouter({hashbang: false});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('navbar', require('./components/shared/NavbarComponent.vue'));

// const app = new Vue({
//     el: '#app'
// });

var router = new VueRouter({
    routes: require('./routes')
});

var app = new Vue({
    router: router
}).$mount('#app');
