<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['id', 'title', 'date', 'skills', 'categories', 'type'])

const slug = props.title.toLowerCase().replace(/\s+/g, '-')
</script>

<template>
  <RouterLink :to="'/project/' + slug" class="project-card">
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
          <span class="date-type">Projet {{ props.type }} - {{ props.date }}</span>
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
  border-top: solid 2px #fae367;
  border-bottom: solid 2px #fae367;
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
    flex-direction: column;
    row-gap: 30px;

    @media (min-width: 1024px) {
      justify-content: space-between;
      flex-direction: row;
    }
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
    text-align: left;

    @media (min-width: 1024px) {
      text-align: right;
    }
  }

  &__number {
    font-family: 'Rammetto One', sans-serif;
    font-size: 40px;
    transition: color 0.3s ease-out;
  }

  &__title {
    font-family: 'Rammetto One', sans-serif;
    font-size: 36px;
    text-transform: uppercase;
    transition: color 0.3s ease-out;

    @media (min-width: 768px) {
      font-size: 48px;
    }

    @media (min-width: 1024px) {
      font-size: 54px;
    }
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