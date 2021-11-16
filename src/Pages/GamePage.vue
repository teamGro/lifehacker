<template>
  <labels></labels>
  <div class="shadow"></div>
  <main class="answer page">
    <transition name="fade">
      <div
        class="page__header"
        :style="{ backgroundImage: `url('${image}')` }"
      >
        <img
          class="page__mirror"
          :src="faceInMirror"
          alt=""
        />
        <img
          class="page__wheel"
          :src="carView"
          alt=""
        />
      </div>
    </transition>

    <div class="page__state">
      <question-view v-if="gamePosition === 'question'"></question-view>
      <answer-view v-if="gamePosition === 'answer'"></answer-view>
    </div>

    <copyright class="page__copyright"></copyright>
  </main>
</template>

<script>
import {
  defineComponent, computed, ref, onBeforeUpdate,
} from 'vue';
import { useStore } from 'vuex';
import QuestionView from '../components/QuestionView.vue';
import AnswerView from '../components/AnswerView.vue';
import Labels from '../components/Labels.vue';
import Copyright from '../components/Copyright.vue';
import carMirror from '../assets/img/carMirror.png';
import carMirrorRight from '../assets/img/carMirrorRight.png';
import carMirrorWrong from '../assets/img/carMirrorWrong.png';
import carView from '../assets/img/carView.png';

export default defineComponent({
  components: {
    QuestionView,
    Labels,
    Copyright,
    AnswerView,
  },
  setup() {
    const store = useStore();
    const isUserRight = computed(() => store.state.isUserRight);
    const gamePosition = computed(() => store.state.gamePosition);

    const faceInMirror = ref(carMirror);
    onBeforeUpdate(() => {
      if (isUserRight.value && gamePosition.value === 'answer') {
        faceInMirror.value = carMirrorRight;
      } else if (!isUserRight.value && gamePosition.value === 'answer') {
        faceInMirror.value = carMirrorWrong;
      } else {
        faceInMirror.value = carMirror;
      }
    });

    return {
      image: computed(() => store.getters.getImage),
      carView,
      faceInMirror,
      gamePosition: computed(() => store.state.gamePosition),
    };
  },
});
</script>

<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
