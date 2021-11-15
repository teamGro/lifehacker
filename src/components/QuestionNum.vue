<template>
  <p>{{currentQuestion}} / {{questionQuantity}}</p>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      currentQuestion: computed(() => store.state.currentQuestion),
      questionQuantity: computed(() => store.state.questionQuantity),
    };
  },
});
</script>
