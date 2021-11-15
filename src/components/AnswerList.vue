<template>
  <ul class="answers">
    <answer-item :answers="currentAnswers"></answer-item>
  </ul>
  <span>{{ text }}</span>
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
    const currentAnswers = computed(() => store.getters.getAnswerOptions);

    return {
      currentQuestion,
      currentAnswers,
    };
  },
});
</script>

<style lang="less">
.answers {
  &__item {
    padding: 20px 8px 20px 16px;
    border-radius: 3px;

    background-color: rgba(255, 255, 255, 0.2);

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  &__link {
    font-size: 14px;
    line-height: 22px;
  }
}

@media (min-width: 1280px) {
  .answers {
    &__item {
      display: flex;
      align-items: center;
      min-height: 82px;
      padding: 16px 38px 16px 48px;
    }
    &__link {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
