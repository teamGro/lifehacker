<template>
  <labels></labels>
  <div class="shadow"></div>
  <main class="page page_result result">
    <div
      class="page__header"
      :style="{ backgroundImage: `url('${result.image}')` }"
    ></div>
    <div class="result__body">
      <section class="page__section container result__section result__section_top">
        <h2 class="result__title">{{ result.title }}</h2>
        <p class="result__text">{{ result.text }}</p>
        <div class="result__btns-wrapper">
          <social-link-list class="result__social"></social-link-list>
          <button
            @click="tryAgain"
            class="result__again-btn"
          >
            <svg
              class="result__again-icon"
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="tryAgain"
            >
              <path
                d="M22.7161 0.716064C13.1883 0.716064 5.4403 8.4722 5.4403
                18V18.0571L2.01944 12.9054C1.6847
                12.3992
                0.998893 12.2605 0.492703 12.5952C-0.0134861 12.9299 -0.15228
                13.6157 0.182458 14.1219L5.14638 21.5923C5.326
                21.8617 5.61175 22.0332 5.93016 22.074C5.97915 22.0822 6.01997 22.0822
                6.06895 22.0822C6.33838 22.0822 6.59964
                21.9842 6.80374 21.7964L13.7026 15.5833C14.1517 15.1751 14.1925 14.4812
                13.7843 14.024C13.376 13.5749 12.6821
                13.5341 12.2249 13.9423L7.64467 18.0816V18C7.64467 9.68052 14.4048 2.92044
                22.7161 2.92044C31.0274 2.92044 37.7956
                9.68052 37.7956 18C37.7956 26.3195 31.0355 33.0795 22.7242 33.0795C18.6992
                33.0795 14.9109 31.512 12.0697 28.6626C11.637
                28.2299 10.9431 28.2299 10.5104 28.6626C10.0776 29.0953 10.0776 29.7893 10.5104
                30.222C13.7761 33.4878 18.1114 35.2839
                22.7242 35.2839C32.2439 35.2839 40 27.5359 40 18C40 8.46403 32.2439
                0.716064 22.7161 0.716064Z"
                fill="#7DBFFF"
              />
            </svg>
            <span class="result__again-text">Пройти ещё раз</span>
          </button>
        </div>
      </section>
      <section class="page__section container result__section result__section_bottom">
        <p
          class="result__promo"
          v-html="resultPromo"
        ></p>
        <div class="result__buy-btn">
          <a
            href="#"
            class="btn result__btn"
          >Купить шины со скидкой</a>
        </div>
      </section>
      <div class="result__footer container">
        <div class="result__team team">
          <a
            href="#"
            class="link result__team"
            @mouseover="showTeam"
            @mouseleave="hideTeam"
          >Команда проекта</a>
          <transition name="fade">
            <table
              class="team__table"
              v-if="isTeamVisible"
            >
              <tr
                v-for="(item, i) in team"
                :key="i"
              >
                <td class="team__cell team__cell_right">{{ item.position }}</td>
                <td class="team__cell">{{ item.fullName }}</td>
              </tr>
            </table>
          </transition>
        </div>

        <copyright></copyright>
      </div>
    </div>
  </main>
</template>

<script>
import {
  computed, defineComponent, reactive, ref,
} from 'vue';
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
    const isTeamVisible = ref(false);
    const team = reactive([
      { position: 'Креатив', fullName: 'Сергей Габер' },
      { position: 'Редактор', fullName: 'Маша Пчелкина' },
      { position: 'Автор', fullName: 'Тоня Рубцова' },
      { position: 'Дизайнер', fullName: 'Таня Репина' },
      { position: 'Разработчик', fullName: 'Григорий Тимошук' },
      { position: 'Тестировщик', fullName: 'Ксения Старостина' },
      { position: 'Аналитик', fullName: 'Валерия Нечаева' },
      { position: 'Менеджер проекта', fullName: 'Яна Скрипичникова' },
      { position: 'Менеджер по продажам', fullName: 'Галина Корецкая' },
    ]);

    const showTeam = () => {
      isTeamVisible.value = true;
    };

    const hideTeam = () => {
      isTeamVisible.value = false;
    };

    const tryAgain = () => {
      store.commit('resetUserProgress');
      router.push({ name: 'Game', params: { num: 1 } });
    };

    const result = computed(() => store.getters.getResult);

    return {
      resultPromo: store.state.resultPromo,
      result,
      team,
      isTeamVisible,
      tryAgain,
      showTeam,
      hideTeam,
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
