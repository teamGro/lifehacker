<template>
  <header class="header">
    <labels></labels>
  </header>

  <main class="main">
    <h1 class="title block">
      Узнаете ли вы Россию <br />
      <span class="title__upper">по дорогам?</span>
    </h1>
    <section class="block main__describe">
      <div class="container main__container">
        <p class="main__para">
          Мы составили этот тест вместе с производителем шин
          <a href="#" class="main__link link">Cordiant</a>, чтобы вы проверили,
          сможете ли отличить российские дороги от остальных. Активируйте
          внутреннего Шерлока и вперёд! Пройдёте тест до конца — получите
          <span>скидку 15%</span> на зимнюю резину.
        </p>
        <div class="btn__wrapper">
          <router-link
            class="btn main__btn"
            tag="button"
            :to="{ name: 'Question', params: { num: 1 } }"
            >Пройти тест!</router-link
          >
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <social-link-list></social-link-list>
    <copyright></copyright>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';
import SocialLinkList from '@/components/SocialLinkList.vue';
import Copyright from '@/components/Copyright.vue';
import Labels from '@/components/Labels.vue';

export default defineComponent({
  components: { SocialLinkList, Copyright, Labels },
  setup() {
    return {};
  },
});
</script>

<style lang="less">
.header {
  padding-top: 11px;
  height: 230px;
  background-image: url("../assets/img/startImgMobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  margin-bottom: 8px;
  padding-top: 28px;
  padding-bottom: 23px;

  font-size: 14px;
  line-height: 20px;
  letter-spacing: 3.5px;
  text-align: center;

  background: #004373;

  &__upper {
    text-transform: uppercase;
    font-size: 33px;
    line-height: 35px;
    letter-spacing: 0;
  }
}

.main {
  position: relative;
  z-index: 10;

  &__describe {
    padding-top: 32px;
    padding-bottom: 70px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__para {
    margin-bottom: 40px;
  }
}

.footer {
  padding-top: 40px;
  padding-bottom: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1280px) {
  .header {
    position: absolute;

    width: 100vw;
    height: 100vh;

    background-image: url("../assets/img/startImg.jpg");
  }

  .main {
    position: absolute;
    right: 0;
    top: 70px;

    width: 635px;

    &__describe {
      background-color: #004373;
    }

    &__container {
      padding-left: 96px !important;
      padding-right: 108px !important;
    }

    &__para {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .title {
    font-size: 21px;
    line-height: 25px;

    &__upper {
      font-size: 41px;
      line-height: 45px;
    }
  }

  .footer {
    z-index: 10;
    position: absolute;
    width: 100vw;
    margin-top: calc(100vh - 60px);
    flex-direction: row;
    justify-content: space-between;
    padding: 0 125px;
  }
}
</style>
