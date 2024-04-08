<script setup>
import { onMounted, ref } from 'vue'
import Splitting from 'splitting'
import gsap from 'gsap'
const props = defineProps(['suptitle', 'title', 'date'])
import ArrowIcon from '../components/icons/ArrowIcon.vue'

const title = ref()
const titleSplitted = ref()
const titleLine = ref()

const suptitle = ref()
const suptitleSplitted = ref()

const date = ref()
const dateSplitted = ref()

onMounted(() => {
  splitElems()
  animate()
})

const splitElems = () => {
  titleSplitted.value = Splitting({ target: title.value, by: 'chars' })[0].chars
  suptitleSplitted.value = Splitting({ target: suptitle.value, by: 'chars' })[0].chars
  dateSplitted.value = Splitting({ target: date.value, by: 'chars' })[0].chars
}

const animate = () => {
  const tl = gsap.timeline()

  tl.fromTo(titleSplitted.value, {
    y: 125
  }, {
    y: 0,
    stagger: 0.06,
    duration: 0.6
  })

  tl.fromTo(suptitleSplitted.value, {
    y: 100
  }, {
    y: 0,
    stagger: 0.04,
    duration: 0.4
  })

  tl.fromTo(dateSplitted.value, {
    y: 100
  }, {
    y: 0,
    stagger: 0.04,
    duration: 0.4
  })

  tl.fromTo(titleLine.value, {
    scaleX: '0%'
  }, {
    scaleX: '100%',
    ease: 'power3.out',
    duration: 0.6
  })
}
</script>

<template>
  <section class="project-cover">
    <div class="project-cover__content">
      <span ref="suptitle" class="project-cover__suptitle">{{ props.suptitle }}</span>
      <h1 ref="title" class="project-cover__title">
        <span>
          {{ props.title }}
          <div ref="titleLine" class="highlighting"></div>
        </span>
      </h1>
      <span ref="date" class="project-cover__date">{{ props.date }}</span>
    </div>
    <div class="project-cover__scroll-button">
      <a href="#intro" class="project-cover__scroll-button__wrapper">
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
    gap: 15px;
    height: 100%;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
      gap: 30px;
    }
  }

  &__suptitle {
    font-size: 28px;
    font-style: italic;
    overflow: hidden;
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 32px;
    }

    @media (min-width: 1024px) {
      font-size: 40px;
    }
  }

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 calc(4.166667% * 2);
    text-align: center;
    overflow: hidden;

    span {
      display: inline-block;
      font-size: 48px;
      line-height: 115px;
      text-transform: uppercase;
      font-family: 'Rammetto One', sans-serif;
      position: relative;

      @media (min-width: 768px) {
        font-size: 64px;
      }

      @media (min-width: 1024px) {
        font-size: 86px;
      }

      .highlighting {
        display: block;
        bottom: 10px;
        z-index: -1;
        position: absolute;
        width: calc(100%);
        height: 50%;
        background-color: #fae367;
        transform-origin: left;
      }
    }
  }

  &__date {
    font-size: 48px;
    font-style: italic;
    overflow: hidden;
    width: 100%;
    text-align: center;

    @media (min-width: 1024px) {
      font-size: 86px;
    }
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