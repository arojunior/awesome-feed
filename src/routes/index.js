//import Layout from '../layouts'
import Home from './Home'
import Login from './Login'

export default [
  {
    path: '/:user',
    component: Home
  },
  {
    path: '/',
    component: Login
  }
]
