<template>
  <ul>
    <li
      v-for="link, i in links"
      :key="i"
    >
      <social-link-item
        :alt="link.alt"
        :icon="link.icon"
        :link="link.link"
      ></social-link-item>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';
import SocialLinkItem from '@/components/SocialLinkItem.vue';

export default defineComponent({
  components: { SocialLinkItem },
  setup() {
    return {
      links: [
        { icon: '', alt: 'fb', link: '' },
        { icon: '', alt: 'vk', link: '' },
        { icon: '', alt: 'vk', link: '' },
      ],
    };
  },
});
</script>
