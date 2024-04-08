<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
import LogoIcon from './components/icons/LogoIcon.vue'
import ButtonComponent from './components/ButtonComponent.vue'

const route = useRoute()
</script>

<template>
  <header v-if="route.path === '/'">
    <nav class="menu">
      <div class="menu__container">
        <div class="menu__tab">
          <a href="#home" class="menu__link">
            <span class="text">Accueil</span>
            <span class="hover">Accueil</span>
          </a>
        </div>
        <div class="menu__tab">
          <a href="#about" class="menu__link">
            <span class="text">A propos</span>
            <span class="hover">A propos</span>
          </a>
        </div>
        <div class="menu__tab">
          <a href="#projects" class="menu__link">
            <span class="text">Projets</span>
            <span class="hover">Projets</span>
          </a>
        </div>
      </div>
    </nav>
  </header>

  <header v-else>
    <nav class="menu">
      <div class="menu__container">
        <div class="menu__tab">
          <RouterLink to="/" class="menu__link">
            <span class="text">Retour aux projets</span>
            <span class="hover">Retour aux projets</span>
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer class="footer">
    <div class="footer__container">
      <div class="footer__logo">
        <LogoIcon color="white" />
      </div>
      <div class="footer__contact">
        <div class="footer__rs">
          <ButtonComponent title="Linkedin" link="https://www.linkedin.com/in/paul-lassasseigne/"/>
          <ButtonComponent title="Github" link="https://www.linkedin.com/in/paul-lassasseigne/"/>
        </div>
        <span>Made with ❤️ - Paul Lassasseigne - © 2024</span>
      </div>
      <div class="footer__email">
        <span class="footer__city">Lyon / Troyes</span>
        <a href="mailto:paul.lassasseigne@gmail.com" class="footer__link">paul.lassasseigne@gmail.com</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #fae367;

  &__container {
    padding: 35px calc(4.166667% * 2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    row-gap: 45px;

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: end;
    }
  }

  &__contact,
  &__logo,
  &__email {
    width: 100%;

    @media (min-width: 1024px) {
      width: 33%;
    }
  }

  &__logo {
    display: flex;
    justify-content: center;

    @media (min-width: 1024px) {
      justify-content: start;
    }
  }

  &__contact {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 45px;
  }

  &__rs {
    display: flex;
    justify-content: center;
    gap: 45px;
  }

  &__email {
    display: flex;
    text-align: right;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
      align-items: end;
    }
  }

  &__link {
    color: black;
  }

  &__city {
    font-size: 18px;
    font-weight: bold;
  }
}

.menu {
  position: fixed;
  top: 3vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 99;

  &__container {
    display: flex;
    gap: 30px;
    border: 2px solid #fae367;
    border-radius: 50px;
    padding: 24px 30px;
    background-color: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(20px);
  }

  &__tab {
    overflow: hidden;

    a {
      text-transform: uppercase;
      font-weight: 300;
      color: black;
    }
  }

  &__link {
    overflow: hidden;
    position: relative;
    display: block;

    &:hover {
      .text {
        transform: translateY(-100%);
      }

      .hover {
        transform: translateY(0%);
      }
    }

    span {
      display: block;
      transition: all 0.3s;
    }

    .text {
      position: relative;
    }

    .hover {
      position: absolute;
      top: 0;
      bottom: 0;
      transform: translateY(100%);
    }
  }
}
</style>
