import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../Pages/StartPage.vue';
import GamePage from '../Pages/GamePage.vue';
import ResultPage from '../Pages/ResultPage.vue';
import NotFoundPage from '@/Pages/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    name: 'Start',
    component: StartPage,
  },
  {
    path: '/game/:num',
    name: 'Game',
    component: GamePage,
  },
  {
    path: '/result',
    name: 'Result',
    component: ResultPage,
  },
  {
    name: 'notFound',
    path: '/:notFound(.*)',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
