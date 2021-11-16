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
