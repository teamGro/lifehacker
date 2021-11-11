import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../Pages/StartPage.vue';
import QuestionPage from '../Pages/QuestionPage.vue';

const routes = [
  {
    path: '/',
    name: 'Start',
    component: StartPage,
  },
  {
    path: '/question/:num',
    name: 'Question',
    component: QuestionPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
