<template>
  <labels></labels>
  <header class="start-page__header"></header>
  <main class="start-page__main">
    <h1 class="start-page__title block">
      <!-- Узнаете ли вы Россию <br />
      <span class="start-page__title_upper">по дорогам?</span> -->
      <img
        class="start-page__title_img"
        :src="appTitle"
        alt=""
      />
    </h1>
    <section class="block start-page__describe">
      <div class="container start-page__container">
        <p class="start-page__para">
          Мы составили этот тест вместе с производителем шин
          <a
            target="_blank"
            :href="links.cordiant"
            class="link"
          >Cordiant</a>,
          чтобы вы проверили, сможете ли отличить российские дороги от
          остальных. Активируйте внутреннего Шерлока и вперёд! Пройдёте тест до
          конца — получите <span>скидку 15%</span> на зимнюю резину.
        </p>
        <div class="btn__wrapper">
          <router-link
            class="btn start-page__btn"
            tag="button"
            :to="{ name: 'Game', params: { num: 1 } }"
          >Пройти тест!</router-link>
        </div>
      </div>
    </section>
  </main>

  <footer class="start-page__footer container">
    <social-link-list></social-link-list>
    <copyright></copyright>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';
import SocialLinkList from '@/components/SocialLinkList.vue';
import Copyright from '@/components/Copyright.vue';
import Labels from '@/components/Labels.vue';
import links from '../helpers/links';
import appTitle from '@/assets/img/appTitle.png';

export default defineComponent({
  components: { SocialLinkList, Copyright, Labels },
  setup() {
    return {
      links,
      appTitle,
    };
  },
});
</script>

<style lang="less">
@media (min-width: 1280px) {
  .header {
    position: absolute;

    width: 100vw;
    height: 100vh;
  }

  .main {
    position: absolute;
    right: 0;
    top: 70px;

    width: 635px;

    &__describe {
      background-color: #004373;
    }

    &__container {
      padding-left: 96px !important;
      padding-right: 108px !important;
    }

    &__para {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .title {
    font-size: 21px;
    line-height: 25px;

    &__upper {
      font-size: 41px;
      line-height: 45px;
    }
  }

  .footer {
    z-index: 10;
    position: absolute;
    width: 100vw;
    margin-top: calc(100vh - 60px);
    flex-direction: row;
    justify-content: space-between;
    padding: 0 125px;
  }
}
</style>
