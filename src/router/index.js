import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../Pages/StartPage.vue';
import GamePage from '../Pages/GamePage.vue';
import ResultPage from '../Pages/ResultPage.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
