<template>
  <li
    class="answers__item"
    v-for="answer in answers"
    :key="answer.num"
    @click="checkUserAnswer(answer.num)"
  >
    <a class="answers__link" v-html="answer.text"></a>
  </li>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: ['answers'],
  setup() {
    const store = useStore();
    const router = useRouter();

    const currentQuestion = computed(() => store.state.currentQuestion);
    const rightAnswer = computed(() => store.getters.getRightAnswer);

    const checkUserAnswer = (num) => {
      if (num === rightAnswer.value.value) {
        store.commit('saveRightUserAnswer', num);
      }

      store.commit('setUserCurrentAnswer', num);
      router.push({ name: 'Answer', params: { num: currentQuestion.value } });
    };

    return {
      checkUserAnswer,
      currentQuestion,
    };
  },
});
</script>
