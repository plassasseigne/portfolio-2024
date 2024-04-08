<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  animation()
})

const animation = () => {
  gsap.fromTo('.marquee__wrapper', {
    xPercent: 0
  }, {
    xPercent: -100,
    repeat: -1,
    duration: 15,
    ease: 'linear'
  })
}
</script>

<template>
  <section class="marquee">
    <div class="marquee__wrapper">
      <span class="marquee__text">Compétences</span>
      <span class="marquee__text">Logiciels</span>
      <span class="marquee__text">Langages</span>
      <span class="marquee__text">Outils</span>
    </div>
    <div class="marquee__wrapper">
      <span class="marquee__text">Compétences</span>
      <span class="marquee__text">Logiciels</span>
      <span class="marquee__text">Langages</span>
      <span class="marquee__text">Outils</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.marquee {
  position: relative;
  background-color: #fae367;
  overflow: hidden;
  padding: 40px 0;
  display: flex;

  &__wrapper {
    display: flex;
    width: fit-content;
  }

  &__text {
    display: inline-block;
    font-family: 'Rammetto One', sans-serif;
    font-size: 48px;
    text-transform: uppercase;
    color: white;
    margin: 0 20px;

    @media (min-width: 1024px) {
      font-size: 64px;
    }
  }

  &__text:nth-child(2n) {
    color: #fae367;
    text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white, 1px 1px 0 white;
  }
}
</style>