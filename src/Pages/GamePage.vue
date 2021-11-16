<template>
  <preloader v-if="isLoading"></preloader>
  <labels></labels>
  <div class="shadow"></div>
  <main class="answer page">
    <transition name="fade">
      <div class="page__header" :style="{ backgroundImage: `url('${image}')` }">
        <img class="page__mirror" :src="faceInMirror" alt="" />
        <img class="page__wheel" :src="carView" alt="" />
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
import QuestionView from '@/components/QuestionView.vue';
import AnswerView from '@/components/AnswerView.vue';
import Labels from '@/components/Labels.vue';
import Copyright from '@/components/Copyright.vue';
import Preloader from '@/components/Preloader.vue';
import carView from '@/assets/img/carView.png';

export default defineComponent({
  components: {
    QuestionView,
    Labels,
    Copyright,
    AnswerView,
    Preloader,
  },
  setup() {
    const store = useStore();
    const isUserRight = computed(() => store.state.isUserRight);
    const gamePosition = computed(() => store.state.gamePosition);
    const isLoading = ref(true);

    setTimeout(() => {
      isLoading.value = false;
    }, 2000);

    const { mirror } = store.state;
    const faceInMirror = ref(mirror.normal);
    onBeforeUpdate(() => {
      if (isUserRight.value && gamePosition.value === 'answer') {
        faceInMirror.value = mirror.right;
      } else if (!isUserRight.value && gamePosition.value === 'answer') {
        faceInMirror.value = mirror.wrong;
      } else {
        faceInMirror.value = mirror.normal;
      }
    });

    return {
      image: computed(() => store.getters.getImage),
      carView,
      faceInMirror,
      gamePosition: computed(() => store.state.gamePosition),
      isLoading,
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
