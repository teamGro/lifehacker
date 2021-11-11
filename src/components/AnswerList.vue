<template>
  <ul>
    <answer-item :answers="currentAnswers"></answer-item>
  </ul>
  <span>{{text}}</span>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import AnswerItem from './AnswerItem.vue';

export default defineComponent({
  components: { AnswerItem },
  setup() {
    const store = useStore();
    const currentQuestion = computed(() => store.state.currentQuestion);
    const currentAnswers = computed(() => store.getters.getAnswers);

    return {
      currentQuestion,
      currentAnswers,
    };
  },
});
</script>
