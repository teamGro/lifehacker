<template>
  <router-view></router-view>
</template>

<script>
import { computed, defineComponent, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import data from './data/data';
import saveDataToStore from './helpers/saveDataToStore';

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    saveDataToStore(data, store);
    const currentQuestion = computed(() => store.state.currentQuestion);

    watch(route, () => {
      if (
        (route.name === 'Answer' || route.name === 'Question')
        && Number(route.params.num) !== currentQuestion.value
      ) {
        store.commit('updateCurrentQuestion', Number(route.params.num));
      }
    });
  },
});
</script>
