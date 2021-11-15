<template>
  <div class="container labels">
    <picture>
      <source media="(min-width: 1280px)" :src="logo" />
      <img class="header__logo-img" :src="logoMobile" alt="Логотип" />
    </picture>
    <picture>
      <source media="(min-width: 1280px)" :src="CordiantLabel" />
      <img
        class="header__logo-img"
        :src="CordiantLabelMobile"
        alt="coordiant"
      />
    </picture>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CordiantLabel from '../assets/img/cordiantLabel.png';
import CordiantLabelMobile from '../assets/img/cordiantLabelMobile.png';
import logo from '../assets/img/logo.png';
import logoMobile from '../assets/img/logoMobile.png';

export default defineComponent({
  setup() {
    return {
      CordiantLabel,
      CordiantLabelMobile,
      logo,
      logoMobile,
    };
  },
});
</script>

<style lang="less">
.labels {
  position: relative;
  z-index: 10;
  padding-top: 11px;
  display: flex;
  justify-content: space-between;
  padding-top: 11px;
}

@media (min-width: 1280px) {
  .labels {
    position: absolute;
    width: 100vw !important;
  }
}
</style>
