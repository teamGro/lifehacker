<template>
  <section class="answer container page__section">
    <question-num class="num"></question-num>
    <div class="answer__wrapper">
      <p class="answer__feedback">{{ feedback }}</p>
      <p
        class="answer__comment"
        v-html="comment.text"
      ></p>
      <div class="btn__wrapper">
        <button
          class="btn btn_next"
          @click="goToNextQuestion"
        >Далее</button>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import QuestionNum from '@/components/QuestionNum.vue';

export default defineComponent({
  components: { QuestionNum },
  props: [],
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const currentQuestion = computed(() => store.state.currentQuestion);
    const questionQuantity = computed(() => store.state.questionQuantity);

    const goToNextQuestion = () => {
      let questionNumInroute = Number(route.params.num);
      if (currentQuestion.value + 1 <= questionQuantity.value) {
        questionNumInroute += 1;
        store.commit('updateCurrentQuestion', questionNumInroute);
        router.replace({ name: 'Game', params: { num: questionNumInroute } });
      } else {
        router.push({ name: 'Result' });
      }
      store.commit('updateGamePosition', 'question');
    };

    return {
      feedback: computed(() => store.getters.getFeedback),
      comment: computed(() => store.getters.getComment),
      goToNextQuestion,
    };
  },
});
</script>
