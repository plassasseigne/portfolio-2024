<script setup>
import SkillCard from '../components/cards/SkillCard.vue'

const languages = ["HTML", "CSS", "Javascript", "SASS", "Vue JS", "React Native", "Booststrap", "Three JS", "Gsap", "PHP", "Symfony", 'API Platform']
const tools = ["Apache", "Linux", "NPM", "Git", "Figma", "Wordpress", "Docker", "Suite Adobe", "Blender"]
</script>

<template>
  <section class="skills">
    <div class="skills__container">
      <div class="skills__section">
        <h3>Langages & Frameworks & Librairies</h3>
        <div class="skills__list">
          <SkillCard v-for="item in languages" :skill="item"></SkillCard>
        </div>
      </div>
      <div class="skills__section">
        <h3>Outils & Logiciels</h3>
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

  &__list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 20px;
    align-items: center;
  }
}
</style>