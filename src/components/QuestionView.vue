<template>
  <section class="question container page__section">
    <div class="question__content">
      <question-num class="num"></question-num>
      <h2 class="question__title">{{ question }}</h2>
      <answer-list></answer-list>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import AnswerList from './AnswerList.vue';
import QuestionNum from '@/components/QuestionNum.vue';

export default defineComponent({
  components: { AnswerList, QuestionNum },
  setup() {
    const store = useStore();

    return {
      question: computed(() => store.state.question),
    };
  },
});
</script>
