<template>
  <p>{{ currentQuestion }} / 9</p>
  <p>{{ feedback.text }}</p>
  <p v-html="feedback.comments"></p>
  <button @click="goToNextQuestion">Далее</button>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const currentQuestion = computed(() => store.state.currentQuestion);

    const goToNextQuestion = () => {
      store.commit('updateCurrentQuestion');
      router.push({ name: 'Question', params: { num: store.state.currentQuestion } });
    };

    return {
      currentQuestion,
      feedback: computed(() => store.getters.getFeedback),
      goToNextQuestion,
    };
  },
});
</script>
