import VueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import BotForum from './pages/BotForum'
const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/dashboard/:code', component: Dashboard, name: 'Dashboard' },
  { path: '/BotForum', component: BotForum, name: 'BotForum' }
]

export default new VueRouter({ routes, mode: 'history' })
