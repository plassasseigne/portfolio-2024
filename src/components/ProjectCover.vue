<script setup>
const props = defineProps(['suptitle', 'title', 'date'])
import ArrowIcon from '../components/icons/ArrowIcon.vue'
</script>

<template>
  <section class="project-cover">
    <div class="project-cover__content">
      <span class="project-cover__suptitle">{{ props.suptitle }}</span>
      <h1 class="project-cover__title">
        <span>
          {{ props.title }}
          <div class="highlighting"></div>
        </span>
      </h1>
      <span class="project-cover__date">{{ props.date }}</span>
    </div>
    <div class="project-cover__scroll-button">
      <a href="#" class="project-cover__scroll-button__wrapper">
        <ArrowIcon color="#fae367"></ArrowIcon>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project-cover {
  height: 100vh;
  width: 100%;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  &__suptitle {
    font-size: 40px;
    font-style: italic;
  }

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 calc(4.166667% * 2);

    span {
      display: inline-block;
      font-size: 86px;
      line-height: 115px;
      text-transform: uppercase;
      font-family: 'Rammetto One', sans-serif;
      position: relative;

      .highlighting {
        display: block;
        bottom: 10px;
        z-index: -1;
        position: absolute;
        width: calc(100% + 25px);
        height: 50%;
        background-color: #fae367;
        transform-origin: left;
      }
    }
  }

  &__date {
    font-size: 86px;
    font-style: italic;
  }

  &__scroll-button {
    position: absolute;
    bottom: 5vh;
    width: 100%;
    display: flex;
    justify-content: center;

    &__wrapper {
      width: 72px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid 2px #fae367;
      border-radius: 100%;

      svg {
        transition-duration: 0.3s;
      }

      &:hover {
        svg {
          transform: translateY(10px);
        }
      }
    }
  }
}
</style>