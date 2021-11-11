<template>
  <li
    v-for="answer in answers"
    :key="answer.num"
    @click="checkUserAnswer(answer.num)"
  >
    <span>{{answer.text}}</span>
  </li>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: ['answers'],
  setup() {
    const store = useStore();
    const rightAnswer = computed(() => store.getters.getRightAnswer);
    const checkUserAnswer = (num) => {
      if (num === rightAnswer.value) {
        store.commit('saveRightUserAnswer', num);
      }
    };

    return {
      checkUserAnswer,
    };
  },
});
</script>
