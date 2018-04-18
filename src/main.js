import Vue from 'vue'
import App from './App.vue';
import HelloWorld from './components/HelloWorld'
import Login from './components/Login'
import VueRouter from 'vue-router';
import VueSessionStorage from 'vue-sessionstorage'

Vue.use(VueSessionStorage);
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: HelloWorld
    },
    {
        path: "/login",
        component: Login
    }
];

const router = new VueRouter({routes});

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    console.log("OK");

    next()
});



new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
