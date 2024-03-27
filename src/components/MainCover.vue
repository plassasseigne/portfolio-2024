<script setup>
import { onMounted, ref } from 'vue'
import Splitting from 'splitting'
import gsap from 'gsap'
import ArrowIcon from '../components/icons/ArrowIcon.vue'

const mainCover = ref('')

const title = ref('')
const titleSplitted = ref()
const titleLines = ref([])

const text = ref('')
const textSplitted = ref()

const scrollButton = ref('')

onMounted(() => {
  getElems()
  splitElems()
  animation()
})

const getElems = () => {
  mainCover.value = document.querySelector('.cover-main')
  titleLines.value = mainCover.value.querySelectorAll('.highlighting')
  scrollButton.value = mainCover.value.querySelector('.cover-main__scroll-button')
}

const splitElems = () => {
  titleSplitted.value = Splitting({ target: title.value, by: 'chars' })[0].chars
  textSplitted.value = Splitting({ target: text.value, by: 'words' })[0].words
}

const animation = () => {
  const coverTl = new gsap.timeline()

  coverTl.fromTo(titleSplitted.value, {
    y: 200,
  }, {
    y: 0,
    duration: 0.4, 
    stagger: 0.06
  })

  coverTl.fromTo(textSplitted.value, {
    y: 125,
  }, {
    y: 0,
    duration: 0.6, 
    stagger: 0.06
  })

  coverTl.fromTo(titleLines.value, {
    scaleX: '0%'
  }, {
    scaleX: '100%',
    ease: 'power3.out',
    duration: 0.6
  })

  coverTl.fromTo(scrollButton.value, {
    y: 150
  }, {
    y: 0,
    ease: 'power3.out',
    duration: 0.6
  })
}
</script>

<template>
  <section class="cover-main">
    <div class="cover-main__content">
      <h1 ref="title" class="cover-main__title">
        <div class="first-name">
          <span>
            Paul
            <div class="highlighting"></div>
          </span>
        </div>
        <div class="last-name">
          <span>
            Lassasseigne
            <div class="highlighting"></div>
          </span>
        </div>
      </h1>
      <div class="cover-main__text">
        <p ref="text">Jeune développeur web créatif en soif d’apprentissage et de défis</p>
      </div>
    </div>
    <div class="cover-main__scroll-button">
      <a href="#" class="cover-main__scroll-button__wrapper">
        <ArrowIcon color="#fae367"></ArrowIcon>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cover-main {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  &__content {
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    gap: 45px;
  }

  .first-name,
  .last-name {
    overflow: hidden;
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

  &__text {
    width: calc(4.166667% * 6);
    padding: 0 calc(4.166667% * 2);
    font-size: 24px;
    overflow: hidden;
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