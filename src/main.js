import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './style.css'
import App from './App.vue'
import Contact from './pages/Contact.vue'
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/contact', component: Contact },

    ]
})


createApp(App).use(router).mount('#app')
