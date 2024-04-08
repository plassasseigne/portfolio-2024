<script setup>
import { onMounted, ref } from 'vue'
import Splitting from 'splitting'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from '../components/cards/ProjectCard.vue'

const projects = [
  {
    id: '01',
    title: 'Pokedex',
    date: '2024',
    skills: 'React Native / Expo Go',
    categories: 'Graphisme / Développement',
    type: 'personnel'
  },
  {
    id: '02',
    title: 'Scaryview',
    date: '2024',
    skills: 'Symfony / Vue JS / API Platform',
    categories: 'Graphisme / Développement',
    type: 'scolaire'
  }, {
    id: '03',
    title: 'Cauchemar au studio',
    date: '2024',
    skills: 'C# / Unity / Blender',
    categories: 'Graphisme / Développement',
    type: 'scolaire'
  }, {
    id: '04',
    title: 'Anyos',
    date: '2023',
    skills: 'Three JS / Wordpress / GSAP',
    categories: 'Développement',
    type: 'professionnel'
  }, 
  {
    id: '05',
    title: 'Jeu de voiture',
    date: '2023',
    skills: 'Unity / Blender',
    categories: 'Graphisme / Développement',
    type: 'scolaire'
  },
  {
    id: '06',
    title: 'Bot Slack',
    date: '2024',
    skills: 'Slack / Bolt JS',
    categories: 'Développement',
    type: 'personnel'
  }
]

const el = ref()

const title = ref()
const titleSplitted = ref()
const titleLine = ref()

const cards = ref()

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  getElems()
  splitElems()
  animate()
})

const getElems = () => {
  cards.value = document.querySelectorAll('.project-card')
}

const splitElems = () => {
  titleSplitted.value = Splitting({ target: title.value, by: 'chars' })[0].chars
}

const animate = () => {
  gsap.fromTo(titleSplitted.value, {
    y: 100
  }, {
    scrollTrigger: {
      trigger: el.value,
    },
    y: 0,
    duration: 0.6,
    stagger: 0.06
  })

  gsap.fromTo(titleLine.value, {
    scaleX: '0%'
  }, {
    scrollTrigger: {
      trigger: el.value,
    },
    scaleX: '100%',
    ease: 'power3.out',
    duration: 0.6
  })

  cards.value.forEach((card) => {
    gsap.fromTo(card, {
      xPercent: 100
    }, {
      scrollTrigger: {
        trigger: card
      },
      xPercent: 0,
      ease: 'power3.out',
      duration: 0.6
    })
  })
}

</script>

<template>
  <section ref="el" id="projects"class="projects">
    <div class="projects__title">
      <h2 ref="title">
        Projets
        <div ref="titleLine" class="highlighting"></div>
      </h2>
    </div>
    <div class="projects__list">
      <ProjectCard
        v-for="item in projects"
        :title="item.title"
        :date="item.date"
        :skills="item.skills"
        :categories="item.categories"
        :id="item.id"
        :type="item.type"
      ></ProjectCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;

  &__title {
    padding-left: calc(4.166667% * 2);
    display: flex;
    overflow: hidden;
    margin-bottom: 30px;
  }

  &__list {
    overflow-x: hidden;
  }
}
</style>