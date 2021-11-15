<template>
  <labels></labels>
  <div class="shadow"></div>
  <main class="page page_result result">
    <div
      class="page__header"
      :style="{ backgroundImage: `url('${result.image}')` }"
    ></div>
    <div class="result__body">
      <section
        class="page__section container result__section result__section_top"
      >
        <h2 class="result__title">{{ result.title }}</h2>
        <p class="result__text">{{ result.text }}</p>
        <div class="result__btns-wrapper">
          <social-link-list class="result__social"></social-link-list>
          <button @click="tryAgain" class="result__again-btn">
            <span class="result__again-icon"></span>
            <span class="result__again-text">Пройти ещё раз</span>
          </button>
        </div>
      </section>
      <section
        class="page__section container result__section result__section_bottom"
      >
        <p class="result__promo" v-html="resultPromo"></p>
        <div class="result__buy-btn">
          <a href="#" class="btn result__btn">Купить шины со скидкой</a>
        </div>
      </section>
      <div class="result__footer container">
        <a href="#" class="link result__team">Команда проекта</a>
        <copyright></copyright>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Labels from '../components/Labels.vue';
import SocialLinkList from '@/components/SocialLinkList.vue';
import Copyright from '../components/Copyright.vue';

export default defineComponent({
  components: { Labels, SocialLinkList, Copyright },
  setup() {
    const store = useStore();
    const router = useRouter();

    const tryAgain = () => {
      store.commit('resetUserProgress');
      router.push({ name: 'Question', params: { num: 1 } });
    };

    const result = computed(() => store.getters.getResult);

    return {
      resultPromo: store.state.resultPromo,
      result,
      tryAgain,
    };
  },
});
</script>

<style lang="less">
</style>
