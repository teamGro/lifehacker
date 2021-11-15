<template>
  <main class="question page">
    <div
      class="question__header-wrapper page__header"
      :style="{ backgroundImage: `url('${image}')` }"
    >
      <picture>
        <source media="(min-width: 1280px)" :src="carMirror" />

        <img
          class="question__mirror page__mirror"
          :src="carMirrorMobile"
          alt=""
        />
      </picture>
      <img class="wheel" :src="carView" alt="" />
      <labels></labels>
    </div>

    <section class="question__section section">
      <question-num class="question__num num"></question-num>
      <h2 class="question__title">{{ question }}</h2>
      <answer-list></answer-list>
    </section>

    <copyright class="question__copyright page__copyright"></copyright>
  </main>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import AnswerList from '../components/AnswerList.vue';
import QuestionNum from '@/components/QuestionNum.vue';
import Labels from '../components/Labels.vue';
import Copyright from '../components/Copyright.vue';
import carMirrorMobile from '../assets/img/carMirrorMobile.png';
import carMirror from '../assets/img/carMirror.png';
import carView from '../assets/img/carView.png';

export default defineComponent({
  components: {
    AnswerList,
    QuestionNum,
    Labels,
    Copyright,
  },
  setup() {
    const store = useStore();

    return {
      question: computed(() => store.state.question),
      image: computed(() => store.getters.getImage),
      carMirrorMobile,
      carMirror,
      carView,
    };
  },
});
</script>

<style lang="less">
.question {
  &__title {
    margin-bottom: 29px;

    font-family: "Play";
    font-style: normal;
    font-weight: bold;
    font-size: 37px;
    line-height: 43px;
  }
}

@media (min-width: 1280px) {
  .question {
    &__title {
      margin-bottom: 20px;

      font-size: 45px;
      line-height: 52px;
      text-align: center;
    }
  }
}
</style>
