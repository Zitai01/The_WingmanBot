import VueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import BotForum from './pages/BotForum'
import PostDetail from './pages/PostDetail'
import GuildConfig from './pages/GuildConfig'
const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  {
    path: '/dashboard/:code',
    component: Dashboard,
    name: 'Dashboard',
    props: true
  },
  { path: '/botforum', component: BotForum, name: 'BotForum' },
  { path: '/postdetail/:postid', component: PostDetail, name: 'PostDetail' },
  { path: '/guild/:guildid', component: GuildConfig, name: 'GuildConfig' }
]

export default new VueRouter({ routes, mode: 'history' })
