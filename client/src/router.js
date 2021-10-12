import VueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import BotForum from './pages/BotForum'
import PostDetail from './pages/PostDetail'
const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/dashboard/:code', component: Dashboard, name: 'Dashboard' },
  { path: '/botforum', component: BotForum, name: 'BotForum' },
  { path: '/postdetail/:postid', component: PostDetail, name: 'PostDetail' }
]

export default new VueRouter({ routes, mode: 'history' })
