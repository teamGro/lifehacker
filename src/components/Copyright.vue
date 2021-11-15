<template>
  <div class="copyright">
    <a target="_blank" class="copyright__link link" :href="links.lifehacker"
      >Лайфхакер</a
    >
    <span class="copyright__symbol">|</span>
    <a target="_blank" class="copyright__link link" :href="links.cordiant"
      >Cordiant</a
    >
    <span class="copyright__text"> &#169; 2020</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import links from '@/helpers/links';

export default defineComponent({
  setup() {
    return {
      links,
    };
  },
});
</script>

<style lang="less">
.copyright {
  display: flex;
  justify-content: center;

  &__link {
    font-size: 13px;
  }

  &__symbol {
    margin: 0 5px;
  }

  &__text {
    margin-left: 3px;
  }
}
</style>
