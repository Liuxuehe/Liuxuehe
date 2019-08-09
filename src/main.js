import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Guess from "./components/Guess"
import Game from "./components/Game"

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:"/",component:Game},
    {path:"/guess",component:Guess}
  ],
  mode:"history"
})
new Vue({
  el:'#app',
  router,
  render: h => h(App),
})
