<template>
  <ul class="social">
    <li v-for="(link, i) in links" :key="i" class="social__item">
      <social-link-item
        class="social__link"
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
import fbIcon from '@/assets/img/fbIcon.png';
import twitterIcon from '@/assets/img/twitterIcon.png';
import vkIcon from '@/assets/img/vkIcon.png';
import links from '@/helpers/links';

export default defineComponent({
  components: { SocialLinkItem },
  setup() {
    return {
      links: [
        { icon: twitterIcon, link: links.twitter },
        { icon: vkIcon, link: links.vk },
        { icon: fbIcon, link: links.fb },
      ],
    };
  },
});
</script>
