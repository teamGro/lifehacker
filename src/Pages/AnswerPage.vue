<template>
  <labels></labels>
  <div class="shadow"></div>
  <main class="answer page">
    <div class="page__header" :style="{ backgroundImage: `url('${image}')` }">
      <img class="page__mirror" :src="carMirror" alt="" />
      <img class="page__wheel" :src="carView" alt="" />
    </div>

    <section class="container page__section">
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
