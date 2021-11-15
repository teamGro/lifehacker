<template>
  <main class="answer page">
    <div class="page__header" :style="{ backgroundImage: `url('${image}')` }">
      <picture>
        <source media="(max-width: 1280px)" :src="carMirrorMobile" />

        <img class="question__mirror page__mirror" :src="carMirror" alt="" />
        <img class="wheel" :src="carView" alt="" />
      </picture>
      <labels></labels>
    </div>

    <section class="section">
      <question-num class="num"></question-num>
      <div class="answer__wrapper">
        <p class="answer__feedback">{{ feedback }}</p>
        <p class="answer__comment" v-html="comment.text"></p>
        <div class="btn__wrapper">
          <button class="btn btn_next" @click="goToNextQuestion">Далее</button>
        </div>
      </div>
    </section>
    <copyright class="page__copyright"></copyright>
  </main>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import QuestionNum from '@/components/QuestionNum.vue';
import Labels from '../components/Labels.vue';
import Copyright from '../components/Copyright.vue';
import carMirrorMobile from '../assets/img/carMirrorMobile.png';
import carMirror from '../assets/img/carMirror.png';
import carView from '../assets/img/carView.png';

export default defineComponent({
  components: { QuestionNum, Labels, Copyright },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const currentQuestion = computed(() => store.state.currentQuestion);
    const questionQuantity = computed(() => store.state.questionQuantity);

    const goToNextQuestion = () => {
      let questionNumInroute = Number(route.params.num);
      if (currentQuestion.value + 1 <= questionQuantity.value) {
        questionNumInroute += 1;
        store.commit('updateCurrentQuestion', questionNumInroute);
        router.push({ name: 'Question', params: { num: store.state.currentQuestion } });
      } else {
        router.push({ name: 'Result' });
      }
    };

    return {
      carMirrorMobile,
      currentQuestion,
      feedback: computed(() => store.getters.getFeedback),
      comment: computed(() => store.getters.getComment),
      goToNextQuestion,
      image: computed(() => store.getters.getImage),
      carMirror,
      carView,
    };
  },
});
</script>

<style lang="less">
.answer {
  &__wrapper {
    padding-left: 15px;
    padding-right: 25px;
  }
  &__feedback {
    margin-bottom: 24px;

    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
  }
  &__comment {
    margin-bottom: 40px;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
