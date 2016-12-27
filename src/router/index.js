/**
 * External dependencies
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * Internal dependencies
 */
import menus from './menu';

Vue.use(VueRouter);

function generateRoutesFromMenu(menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i += 1) {
    const item = menu[i];
    if (item.path) {
      routes.push(item);
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes);
    }
  }
  return routes;
}

const routes = [
  {
    name: 'Home',
    path: '/',
    component: resolve => require(['../containers/Home'], resolve), // eslint-disable-line
  },
  {
    name: 'NoAuth',
    path: '/noauth',
    component: resolve => require(['../containers/NoAuth'], resolve), // eslint-disable-line
  },
  ...generateRoutesFromMenu(menus),
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
