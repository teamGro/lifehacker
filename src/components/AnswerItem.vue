<template>
  <li
    class="answers__item"
    v-for="answer in answers"
    :key="answer.num"
    @click="checkUserAnswer(answer.num)"
  >
    <a
      class="answers__link"
      v-html="answer.text"
    ></a>
  </li>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: ['answers'],
  setup() {
    const store = useStore();

    const currentQuestion = computed(() => store.state.currentQuestion);
    const rightAnswer = computed(() => store.getters.getRightAnswer);

    const checkUserAnswer = (num) => {
      if (num === rightAnswer.value.value) {
        store.commit('saveRightUserAnswer', num);
        store.commit('setAnswerState', true);
      } else {
        store.commit('setAnswerState', false);
      }

      store.commit('updateGamePosition', 'answer');
      store.commit('setUserCurrentAnswer', num);
    };

    return {
      checkUserAnswer,
      currentQuestion,
    };
  },
});
</script>
