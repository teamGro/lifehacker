<template>
  <div class="container labels">
    <a target="_blank" :href="links.lifehacker">
      <img class="labels__img labels__img_logo" :src="logo" alt="Логотип" />
    </a>

    <a target="_blank" :href="links.cordiant">
      <img
        class="labels__img labels__img_label"
        :src="CordiantLabel"
        alt="coordiant"
      />
    </a>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CordiantLabel from '@/assets/img/cordiantLabel.png';
import logo from '@/assets/img/logo.png';
import links from '@/helpers/links';

export default defineComponent({
  setup() {
    return {
      CordiantLabel,
      logo,
      links,
    };
  },
});
</script>
