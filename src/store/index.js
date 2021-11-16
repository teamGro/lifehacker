import { createStore } from 'vuex';
import question1 from '../assets/img/question1.jpg';
import question2 from '../assets/img/question2.jpg';
import question3 from '../assets/img/question3.jpg';
import question4 from '../assets/img/question4.jpg';
import question5 from '../assets/img/question5.jpg';
import question6 from '../assets/img/question6.jpg';
import result1 from '../assets/img/result1.jpg';
import result2 from '../assets/img/result2.jpg';
import result3 from '../assets/img/result3.jpg';

export default createStore({
  state: {
    currentQuestion: 1,
    question: null,
    questionQuantity: null,
    answerOptions: [],
    feedbacks: [],
    comments: [],
    rightAnswers: [],
    images: [question1, question2, question3, question4, question5, question6],
    resultPromo: null,
    results: null,
    userRightAnswers: {},
    userCurrentAnswer: null,
    isUserRight: null,
    gamePosition: 'question',
  },
  getters: {
    getAnswerOptions(state) {
      return state.answerOptions[state.currentQuestion - 1];
    },
    getRightAnswer(state) {
      return state.rightAnswers[state.currentQuestion - 1];
    },
    getFeedback(state) {
      if (state.feedbacks[state.currentQuestion - 1]
        && state.feedbacks[state.currentQuestion - 1][state.userCurrentAnswer - 1]) {
        return state.feedbacks[state.currentQuestion - 1][state.userCurrentAnswer - 1].text;
      }
      return false;
    },
    getComment(state) {
      return state.comments[state.currentQuestion - 1];
    },
    getImage(state) {
      return state.images[state.currentQuestion - 1];
    },
    getResult(state) {
      const [res1, res2, res3] = state.results;
      const rightAnswersQuantity = Object.keys(state.userRightAnswers).length;
      let result = null;
      if (rightAnswersQuantity >= 5) {
        result = res1;
      } else if (rightAnswersQuantity >= 3 && rightAnswersQuantity <= 4) {
        result = res2;
      } else {
        result = res3;
      }
      return result;
    },
  },
  mutations: {
    setQuestion(state, question) {
      state.question = question;
    },
    setQuestionQuantity(state, quantity) {
      state.questionQuantity = quantity;
    },
    setAnswerOptions(state, answers) {
      state.answerOptions.push(answers);
    },
    setFeedbacks(state, feedback) {
      state.feedbacks.push(feedback);
    },
    setComments(state, comment) {
      state.comments.push(comment);
    },
    setRightAnswers(state, rightAnswers) {
      state.rightAnswers.push(rightAnswers);
    },
    saveRightUserAnswer(state, num) {
      state.userRightAnswers[state.currentQuestion] = num;
    },
    setUserCurrentAnswer(state, num) {
      state.userCurrentAnswer = num;
    },
    updateCurrentQuestion(state, num) {
      state.currentQuestion = num;
    },
    setResultPromo(state, resultPromo) {
      state.resultPromo = resultPromo;
    },
    setResults(state, results) {
      state.results = results;
      const resultsImg = [result1, result2, result3];
      state.results = state.results.map((item, i) => ({
        ...item,
        image: resultsImg[i],
      }));
    },
    resetUserProgress(state) {
      state.currentQuestion = 1;
      state.userRightAnswers = {};
    },
    setAnswerState(state, result) {
      state.isUserRight = result;
    },
    updateGamePosition(state, position) {
      state.gamePosition = position;
    },
  },
  actions: {
  },
});
