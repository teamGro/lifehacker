import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../Pages/StartPage.vue';
import QuestionPage from '../Pages/QuestionPage.vue';
import AnswerPage from '../Pages/AnswerPage.vue';

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
  {
    path: '/answer/:num',
    name: 'Answer',
    component: AnswerPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
