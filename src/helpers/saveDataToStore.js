export default function saveDataToStore(data, store) {
  /* eslint-disable no-restricted-syntax */
  /* eslint-disable guard-for-in */
  for (const key in data) {
    if (key === 'question') {
      store.commit('setQuestion', data[key]);
    } else if (key === 'questionQuantity') {
      store.commit('setQuestionQuantity', data[key]);
    } else if (key === 'resultPromo') {
      store.commit('setResultPromo', data[key]);
    } else if (key === 'results') {
      store.commit('setResults', data[key]);
    } else {
      const item = data[key];
      for (const val in item) {
        switch (val) {
          case 'answerOptions':
            store.commit('setAnswerOptions', item[val]);
            break;
          case 'feedback':
            store.commit('setFeedbacks', item.feedback);
            break;
          case 'comment':
            store.commit('setComments', item.comment);
            break;
          case 'rightAnswer':
            store.commit('setRightAnswers', item.rightAnswer);
            break;
          default:
            break;
        }
      }
    }
  }
}
