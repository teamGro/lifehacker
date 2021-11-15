<template>
  <div class="copyright">
    <a
      class="copyright__link link"
      href="#"
    >Лайфхакер</a>
    <span class="copyright__symbol">|</span>
    <a
      class="copyright__link link"
      href="#"
    >Cordiant</a>
    <span class="copyright__text"> &#169; 2020</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
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
