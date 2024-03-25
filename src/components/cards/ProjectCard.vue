<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['id', 'title', 'date', 'skills', 'categories'])
</script>

<template>
  <RouterLink to="#" class="project-card">
    <div class="project-card__container">
      <div class="project-card__left">
        <div class="project-card__number">
          <span>{{ props.id }}</span>
        </div>
        <div class="project-card__title">
          <span>{{ props.title }}</span>
        </div>
      </div>
      <div class="project-card__right">
        <div class="project-card__infos">
          <span class="date">{{ props.date }}</span>
          <span class="skills">{{ props.skills }}</span>
          <span class="category">{{ props.categories }}</span>
        </div>
      </div>
    </div>
    <div class="project-card__background"></div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.project-card {
  border: solid 2px #fae367;
  border-collapse: collapse;
  display: block;
  color: black;
  position: relative;
  overflow: hidden;

  &:hover {
    .project-card {
      &__title,
      &__number {
        color: white;
      }

      &__background {
        transform: translateY(-100%);
      }
    }
  }

  &__container {
    padding: 46px calc(4.166667% * 2) 46px 22px;
    display: flex;
    justify-content: space-between;
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 40px;
    color: #fae367;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__infos {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  &__number {
    font-family: 'Rammetto One', sans-serif;
    font-size: 40px;
    transition: color 0.3s ease-out;
  }

  &__title {
    font-family: 'Rammetto One', sans-serif;
    font-size: 54px;
    text-transform: uppercase;
    transition: color 0.3s ease-out;
  }

  &__background {
    width: 100%;
    height: 100%;
    background-color: #fae367;
    position: absolute;
    transition: transform 0.3s ease;
    z-index: -1;
  }
}
</style>