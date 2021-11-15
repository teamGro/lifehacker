<template>
  <main class="page page_result result">
    <div
      class="page__header"
      :style="{ backgroundImage: `url('${result.image}')` }"
    >
      <labels></labels>
    </div>

    <div class="result__body">
      <section class="section result__section">
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
      <section class="section result__section result__section_bottom">
        <p class="result__promo">{{ resultPromo }}</p>
        <a href="#" class="btn result__buy-btn">Купить шины со скидкой</a>
        <div class="result__footer">
          <a href="#" class="link result__team">Команда проекта</a>
          <copyright></copyright>
        </div>
      </section>
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
.result {
  border-bottom: 2px solid #fff;

  &__title {
    margin-bottom: 16px;

    font-family: "Play";
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
  }

  &__text {
    margin-bottom: 40px;

    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
  }

  &__section {
    display: flex;
    flex-direction: column;
  }

  &__btns-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 27px;
  }

  &__social {
    margin-bottom: 27px;
  }

  &__again-btn {
    display: flex;
    align-items: center;

    color: #7dbfff;
    background-color: transparent;
  }

  &__again-icon {
    margin-right: 16px;
    width: 40px;
    height: 35px;
    background-image: url("../assets/img/retry.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  &__promo {
    margin-bottom: 40px;

    font-size: 16px;
    line-height: 24px;
  }

  &__buy-btn {
    margin-bottom: 35px;
    padding: 16px 20px;

    text-align: center;
  }

  &__team {
    margin-bottom: 40px;

    text-align: center;
    font-size: 12px;
    line-height: 15px;
  }

  &__footer {
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 1280px) {
  .result {
    &__body {
      width: 50%;
    }

    &__section {
      padding-top: 120px !important;
      width: 100% !important;
      border-bottom: 2px solid #fff;

      &_bottom {
        padding-top: 25px !important;
      }
    }

    &__btns-wrapper {
      flex-direction: row;
    }

    &__social {
      order: 1;
      margin-bottom: 0;
      margin-left: 52px;
    }

    &__buy-btn {
      width: auto;
    }
  }
}
</style>
