<template>
  <a
    :href="link"
    :style="{'background-image': icon}"
  >
    <span>{{alt}}
    </span>
  </a>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['icon', 'link', 'alt'],
  setup() {
    return {
      // icon: props.icon,
      // link: props.link,
      // alt: props.alt,
    };
  },
});
</script>
