<template>
  <labels></labels>
  <div class="shadow"></div>
  <main class="question page">
    <div class="page__header" :style="{ backgroundImage: `url('${image}')` }">
      <img class="page__mirror" :src="carMirror" alt="" />
      <img class="page__wheel" :src="carView" alt="" />
      <div class="page__labels"></div>
    </div>

    <section class="container page__section">
      <div class="question__content">
        <question-num class="num"></question-num>
        <h2 class="question__title">{{ question }}</h2>
        <answer-list></answer-list>
      </div>
    </section>
    <copyright class="page__copyright"></copyright>
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
