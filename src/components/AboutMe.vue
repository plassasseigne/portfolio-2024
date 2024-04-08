<script setup>
import { onMounted, ref } from 'vue'
import Splitting from 'splitting'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const el = ref()

const title = ref()
const titleSplitted = ref()
const titleLine = ref()

const meCartoon = ref()

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  splitElems()
  animate()
})

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

  gsap.fromTo(meCartoon.value, {
    scale: 0
  }, {
    scrollTrigger: {
      trigger: el.value,
    },
    scale: 1,
    ease: 'bounce',
    duration: 1.5
  })
}

</script>

<template>
  <section ref="el" id="about" class="about">
    <div class="about__container">
      <div class="about__character">
        <div class="about__character__container">
          <img ref="meCartoon" src="../assets/images/character.png" alt="Me as cartoon character" />
        </div>
      </div>
      <div class="about__biography">
        <div ref="title" class="about__title">
          <h2>
            A propos
            <div ref="titleLine" class="highlighting"></div>
          </h2>
        </div>
        <div class="about__text">
          <p>Je m’appelle Paul Lassasseigne et j’ai 20 ans. J’ai pu découvrir le développement web grâce à ma formation en BUT MMI (Bachelor Universitaire et Technologie des Métiers du Multimédia et de l’Internet).</p>
          <p>En deuxième année, j’ai eu la possibilité de continuer mon parcours en alternance. J’ai alors intégré l’agence Digital Cover, dans laquelle j’ai découvert le monde du développement web orienté créatif.</p>
          <p>J’aime imaginer et créer depuis mon plus jeune âge. C'est pour cela que l'univers du numérique m'intéresse tant. Le développement créatif est un moyen de fusionner le code et le graphisme. C’est cette voie professionnelle que j’aimerais emprunter.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;

  &__container {
    display: flex;
    width: 100%;
    padding-left: calc(4.166667% * 2);
    gap: calc(4.166667% * 2);
    flex-direction: column;
    row-gap: 50px;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }

  &__character {
    width: calc(4.166667% * 20);

    @media (min-width: 1024px) {
      width: calc(4.166667% * 8);
    }

    &__container {
      background-color: #fae367;
      border-radius: 100%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        transform: translate(15px, -15px);
        filter: drop-shadow(-10px 10px 15px rgba(0, 0, 0, 0.15));
      }
    }
  }

  &__biography {
    width: calc(4.166667% * 20);

    @media (min-width: 1024px) {
      width: calc(4.166667% * 10);
    }
  }

  &__title {
    display: flex;
    overflow: hidden;
    margin-bottom: 30px;
  }
}
</style>