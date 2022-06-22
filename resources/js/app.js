import Vue from 'vue';
import MainVue from "./components/MainVue";
import VueRouter from 'vue-router';
import routes from "./routes"

window.Vue = require('vue').default

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    components: {
        MainVue
    }
}); 