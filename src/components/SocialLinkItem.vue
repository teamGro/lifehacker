<template>
  <a
    target="_blank"
    :href="link"
    :style="{ backgroundImage: `url('${icon}')` }"
  >
    <span>{{ alt }} </span>
  </a>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['icon', 'link'],
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
span {
  display: none;
}
</style>
