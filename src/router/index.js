import Vue from 'vue';
import Router from 'vue-router';
import Tactics from '@/components/Tactics';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/tactics',
      name: 'Tactics',
      component: Tactics,
    },
  ],
});
