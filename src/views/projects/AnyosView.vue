<script setup>
import ProjectCover from '../../components/ProjectCover.vue'
import SkillCard from '../../components/cards/SkillCard.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import ImageFull from '../../components/projects/ImageFull.vue'

const technologies = ["gsap", "wordpress", "git", "three js"]
</script>

<template>
  <ProjectCover suptitle="Projet professionnel" title="Anyos" date="2023"></ProjectCover>

  <section id="intro" class="intro">
    <div class="intro__container">
      <div class="intro__presentation">
        <div class="intro__title">
          <h2>
            Présentation
            <div class="highlighting"></div>
          </h2>
        </div>
        <div class="intro__content">
          <p>J’ai réalisé ce projet en entreprise, dans le cadre de mon alternance. Anyos est une entreprise qui propose des bornes électriques uniques. L’entreprise a contacté mon agence, Digital Cover, pour une refonte de leur site internet, et j’ai été chargé de développer la page produits du site qui contient du <b>ThreeJS</b>. J’ai dû animer et intégrer la dernière borne qu’ils ont sortis.</p>
        </div>
      </div>
      <div class="intro__technologies">
        <div class="intro__title">
          <h2>
            Technologies
            <div class="highlighting"></div>
          </h2>
        </div>
        <div class="intro__list">
          <SkillCard v-for="item in technologies" :skill="item" />
        </div>
      </div>
    </div>
  </section>

  <section class="simple-content">
    <div class="simple-content__title offset-2">
      <h2>
        Conception
        <div class="highlighting"></div>
      </h2>
    </div>
    <div class="simple-content__container">
      <div class="simple-content__content col-9 offset-2">
        <div class="simple-content__text">
          <p>Sur ce projet, j’étais avec un autre développeur. Il a développé l’entièreté du site, et moi j’étais en charge de la page produits seulement. J’ai donc dans un premier temps conçu les blocs qui forment la page et je les ai liés au back office de Wordpress afin de laisser le plus de liberté au client dans le choix de ses contenus, puis j’ai ajouté un canvas par-dessus contenant la scène en 3D. Celle-ci contient le modèle 3D récupéré au préalable grâce auprès du directeur artistique, des lumières puis une caméra.</p>
          <p>La borne suit un chemin, et le scroll se bloque à certains moments pour laisser l’animation se faire jusqu’au bout. J’ai pu réaliser cette animation grâce à la librairie <b>GSAP</b> et son plugin <b>ScrollTrigger</b>.</p>
        </div>
      </div>
      <div class="simple-content__image col-10">
        <img src="../../assets/images/projects/anyos_borne.png" alt="Borne d'Anyos" />
      </div>
    </div>
  </section>

  <section class="simple-content">
    <div class="simple-content__container">
      <div class="simple-content__image col-10 offset-2">
        <img src="../../assets/images/projects/anyos_code.png" alt="Code d'importation de la borne dans le code" />
      </div>
      <div class="simple-content__content col-9">
        <div class="simple-content__text">
          <p>Voici le code qui permet d’importer la borne en 3D. J’ai utilisé le format gltf, qui est un format de modèle 3D qui utilise le JSON. Cela permet de réduire considérablement sa taille et donc son temps de chargement sur le site.</p>
          <p>J’importe dans un premier temps la scène toute entière, puis je définis mes éléments : la porte de la borne (borneDoor), et le reste de la structure (borneFixe) qui seront amenés à être animés ensemble et séparément.</p>
          <p>Puis, j’ajoute mes éléments dans un groupe pour redéfinir le point d’origine de la borne au centre (et non aux pieds comme dans le modèle). Il est très important, car c’est de ce point là que tout va s’animer.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="simple-content">
    <div class="simple-content__title offset-2">
      <h2>
        Défis et solutions
        <div class="highlighting"></div>
      </h2>
    </div>
    <div class="simple-content__container">
      <div class="simple-content__content col-11 offset-2">
        <div class="simple-content__text">
          <p>Le plus compliqué a été d’intégrer ThreeJS au stack de l’agence. J’avais déjà pu travailler avec ThreeJS sur des petits projets pour me former, mais jamais au sein d’un projet avec une telle structure. Et étant donné que c’était pour un vrai site, j’ai dû faire attention au moindre détail afin d’éviter toute perte de performance. J’ai donc optimisé mon code au maximum.</p>
        </div>
        <ButtonComponent title="Lien de la page" link="https://www.anyos.fr/produits/"/>
      </div>
    </div>
  </section>

  <ImageFull img="anyos_borne_full.png"/>
</template>