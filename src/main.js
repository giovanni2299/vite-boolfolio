import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'


import HomeView from './pages/HomeView.vue'
import PortfolioView from './pages/PortfolioView.vue'
import ContactView from './pages/ContactView.vue'



const routes = [
  { path: '/', name:'home', component: HomeView},
  { path: '/portfolio', name:'portfolio', component: PortfolioView },
  {path: '/contact', name:'contact', component: ContactView}
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

createApp(App).use(routes).mount('#app')
