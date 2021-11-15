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
import fbIcon from '../assets/img/fbIcon.png';
import twitterIcon from '../assets/img/twitterIcon.png';
import vkIcon from '../assets/img/vkIcon.png';

export default defineComponent({
  components: { SocialLinkItem },
  setup() {
    return {
      links: [
        { icon: twitterIcon, alt: 'vk', link: '' },
        { icon: vkIcon, alt: 'vk', link: '' },
        { icon: fbIcon, alt: 'fb', link: '' },
      ],
    };
  },
});
</script>

<style lang="less">
.social {
  display: flex;
  margin-bottom: 40px;

  &__item {
    display: flex;
    justify-items: center;
    align-items: center;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &__link {
    display: flex;
    justify-items: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    background-color: #7dbfff;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
