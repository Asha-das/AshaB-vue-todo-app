import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../views/DashboardPage.vue';
import AuthPage from '../views/AuthPage.vue';

const isAuthenticated = () => !!localStorage.getItem('token');

const routes = [
  { path: '/', name: 'Auth', component: AuthPage },
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: DashboardPage,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
