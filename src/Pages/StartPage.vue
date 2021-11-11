<template>
  <header>
    <img
      :src="Logo"
      alt="лайфхакер"
    >
    <img
      :src="CordiantLabel"
      alt="coordiant"
    >
  </header>
  <main>
    <h1>Узнаете ли вы Россию по дорогам?</h1>
    <p>
      Мы составили этот тест вместе с производителем шин <a href="">Cordiant</a>,
      чтобы вы проверили, сможете ли отличить российские дороги от остальных.
      Активируйте внутреннего Шерлока и вперёд!
      Пройдёте тест до конца — получите <span>скидку 15%</span> на зимнюю резину.
    </p>
    <router-link
      tag="btn"
      :to="{name: 'Question', params: {num: 1}}"
    >Пройти тест!</router-link>
  </main>
  <footer>
    <social-link-list></social-link-list>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';
import SocialLinkList from '@/components/SocialLinkList.vue';
import CordiantLabel from '../assets/cordiantLabel.png';
import Logo from '../assets/logo.png';

export default defineComponent({
  components: { SocialLinkList },
  setup() {
    return {
      CordiantLabel,
      Logo,
    };
  },
});
</script>
