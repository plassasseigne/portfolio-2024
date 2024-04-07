<script setup>
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
    skills: 'C# / Unity / Blender',
    categories: 'Graphisme / Développement',
    type: 'personnel'
  },
  {
    id: '06',
    title: 'Portfolio',
    date: '2024',
    skills: 'Three JS / Vue JS / GSAP',
    categories: 'Graphisme / Développement',
    type: 'personnel'
  }
]
</script>

<template>
  <section id="projects"class="projects">
    <div class="projects__title">
      <h2>
        Projets
        <div class="highlighting"></div>
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
  }
}
</style>