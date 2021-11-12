import { createStore } from 'vuex';

export default createStore({
  state: {
    currentQuestion: 1,
    question: 'Где эта дорога?',
    answerVariants: null,
    feedbacks: null,
    rightAnswers: null,
    userRightAnswers: [],
    userCurrentAnswer: null,
  },
  getters: {
    getAnswerVariants(state) {
      return state.answers[state.currentQuestion];
    },
    getRightAnswer(state) {
      return state.rightAnswers[state.currentQuestion];
    },
    getFeedback(state) {
      return state.feedbacks[state.currentQuestion][state.userCurrentAnswer];
    },
  },
  mutations: {
    setAnswerVariants(state, answers) {
      state.answers = answers;
    },
    setFeedbacks(state, feedbacks) {
      state.feedbacks = feedbacks;
    },
    setRightAnswers(state, rightAnswers) {
      state.rightAnswers = rightAnswers;
    },
    saveRightUserAnswer(state, num) {
      state.userRightAnswers.push(num);
    },
    setUserCurrentAnswer(state, num) {
      state.userCurrentAnswer = num;
    },
    updateCurrentQuestion(state) {
      state.currentQuestion += 1;
    },
  },
  actions: {
  },
});
