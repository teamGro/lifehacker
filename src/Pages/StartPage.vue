<template>
  <labels></labels>
  <header class="start-page__header"></header>
  <main class="start-page__main">
    <h1 class="start-page__title block">
      <img class="start-page__title_img" :src="appTitle" alt="" />
    </h1>
    <section class="block start-page__describe">
      <div class="container start-page__container">
        <p class="start-page__para">
          Мы составили этот тест вместе с производителем шин
          <a target="_blank" :href="links.cordiant" class="link">Cordiant</a>,
          чтобы вы проверили, сможете ли отличить российские дороги от
          остальных. Активируйте внутреннего Шерлока и вперёд! Пройдёте тест до
          конца — получите <span>скидку 15%</span> на зимнюю резину.
        </p>
        <div class="btn__wrapper">
          <router-link
            class="btn start-page__btn"
            tag="button"
            :to="{ name: 'Game', params: { num: 1 } }"
            >Пройти тест!</router-link
          >
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
import links from '@/helpers/links';
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
