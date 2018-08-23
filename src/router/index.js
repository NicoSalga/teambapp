import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login';
import Dashboard from '@/views/Dashboard';
import UpcomingChallenges from '@/views/UpcomingChallenges';
import MyChallenges from '@/views/MyChallenges';
import Ranking from '@/views/Ranking';
import Profile from '@/views/Profile';
import auth from '../services/auth';

Vue.use(Router);

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: requireAuth,
    },
    {
      path: '/upcoming',
      name: 'UpcomingChallenges',
      component: UpcomingChallenges,
      beforeEnter: requireAuth,
    },
    {
      path: '/my-challenges',
      name: 'MyChallenges',
      component: MyChallenges,
      beforeEnter: requireAuth,
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: requireAuth,
    },
  ],
});
