<template>
  <li
    v-for="answer in answers"
    :key="answer.num"
    @click="checkUserAnswer(answer.num)"
  >
    <router-link :to="{ name: 'Answer', params: { num: currentQuestion } }">{{
      answer.text
    }}</router-link>
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
      if (num === rightAnswer.value) {
        store.commit('saveRightUserAnswer', num);
      }

      store.commit('setUserCurrentAnswer', num);
    };

    return {
      checkUserAnswer,
      currentQuestion,
    };
  },
});
</script>
