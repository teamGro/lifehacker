<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import AnswerVariants from '@/data/answerVariants';
import Feedbacks from '@/data/feedbacks';
import RightAnswers from '@/data/rightAnswers';

export default defineComponent({
  setup() {
    const store = useStore();

    store.commit('setAnswerVariants', AnswerVariants);
    store.commit('setFeedbacks', Feedbacks);
    store.commit('setRightAnswers', RightAnswers);
  },
});
</script>

<style lang="less">
body {
  background-color: #004373;
}
</style>
