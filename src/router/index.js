import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '../views/Login';
import AuthorizedView from '../views/Authorized';
import HomeView from '../views/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
    }, {
      path: '/app',
      name: 'Home',
      component: HomeView,
    }, {
      path: '/authorized',
      name: 'Authorized',
      component: AuthorizedView,
    },
  ],
});
