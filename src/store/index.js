import { createStore } from 'vuex';

export default createStore({
  state: {
    currentQuestion: 1,
    question: 'Где эта дорога?',
    answers: null,
    feedbacks: null,
    rightAnswers: null,
    userAnswers: [],
  },
  getters: {
    getAnswers(state) {
      return state.answers[state.currentQuestion];
    },
    getRightAnswer(state) {
      return state.rightAnswers[state.currentQuestion];
    },
  },
  mutations: {
    setAnswers(state, answers) {
      state.answers = answers;
    },
    setFeedbacks(state, feedbacks) {
      state.feedbacks = feedbacks;
    },
    setRightAnswers(state, rightAnswers) {
      state.rightAnswers = rightAnswers;
    },
    saveRightUserAnswer(state, num) {
      state.userAnswers.push(num);
    }
  },
  actions: {
  },
});
