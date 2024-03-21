<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="menu">
      <div class="menu__container">
        <div class="menu__tab">
          <RouterLink to="/" class="menu__link">
            <span class="text">Accueil</span>
            <span class="hover">Accueil</span>
          </RouterLink>
        </div>
        <div class="menu__tab">
          <RouterLink to="#" class="menu__link">
            <span class="text">A propos</span>
            <span class="hover">A propos</span>
          </RouterLink>
        </div>
        <div class="menu__tab">
          <RouterLink to="#" class="menu__link">
            <span class="text">Projets</span>
            <span class="hover">Projets</span>
          </RouterLink>
        </div>
        <div class="menu__tab">
          <RouterLink to="#" class="menu__link">
            <span class="text">Contact</span>
            <span class="hover">Contact</span>
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 3vh;
  width: 100%;
  display: flex;
  justify-content: center;

  &__container {
    display: flex;
    gap: 30px;
    border: 2px solid #fae367;
    border-radius: 50px;
    padding: 24px 30px;
    background-color: rgba(255, 255, 255, 0.75);
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
