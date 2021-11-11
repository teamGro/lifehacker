<template>
  <h2>{{question}}</h2>
  <answer-list></answer-list>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import AnswerList from '../components/AnswerList.vue';

export default defineComponent({
  components: { AnswerList },
  setup() {
    const store = useStore();

    // const setUserAnswer = () => {

    // }

    return {
      question: computed(() => store.state.question),
    };
  },
});
</script>
