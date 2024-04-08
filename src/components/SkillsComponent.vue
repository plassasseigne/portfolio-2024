<script setup>
import { onMounted, ref } from 'vue'
import SkillCard from '../components/cards/SkillCard.vue'
import Splitting from 'splitting'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const languages = ["html", "css", "javascript", "sass", "vue js", "react native", "bootstrap", "three js", "gsap", "php", "symfony", "api platform"]
const tools = ["apache", "linux", "git", "figma", "wordpress", "docker", "suite adobe", "blender"]

const el = ref()

const sections = ref()

const titles = ref()
const titlesSplitted = ref()

const cards = ref()

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  getElems()
  animate()
})

const getElems = () => {
  titles.value = el.value.querySelectorAll('h3')
  cards.value = el.value.querySelectorAll('.skill-card')
  sections.value = el.value.querySelectorAll('.skills__section')
}

const animate = () => {
  titles.value.forEach((title) => {
    titlesSplitted.value = Splitting({ target: title, by: 'chars' })[0].chars

    gsap.fromTo(titlesSplitted.value, {
      opacity: 0,
      y: 50
    }, {
      scrollTrigger: {
        trigger: title,
      },
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.04
    })
  })

  sections.value.forEach((section) => {
    gsap.fromTo(section.querySelectorAll('.skill-card'), {
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: section
      },
      opacity: 1,
      duration: 0.6,
      stagger: 0.06
    })
  })
}
</script>

<template>
  <section ref="el" class="skills">
    <div class="skills__container">
      <div class="skills__section">
        <div class="skills__title">
          <h3>Langages & Frameworks & Librairies</h3>
        </div>
        <div class="skills__list">
          <SkillCard v-for="item in languages" :skill="item"></SkillCard>
        </div>
      </div>
      <div class="skills__section">
        <div class="skills__title">
          <h3>Outils & Logiciels</h3>
        </div>
        <div class="skills__list">
          <SkillCard v-for="item in tools" :skill="item"></SkillCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;

  &__container {
    display: flex;
    padding-left: calc(4.166667% * 2);
    padding-right: calc(4.166667% * 2);
    flex-direction: column;
    gap: 48px;
  }

  &__title {
    margin-bottom: 50px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    align-items: center;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}
</style>