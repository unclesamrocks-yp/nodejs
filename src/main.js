import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueRouter)

import createStore from './store/index.js'

Vue.config.productionTip = false

import router from './router.js'

new Vue({
	render: h => h(App),
	router,
	store: createStore()
}).$mount('#app')
