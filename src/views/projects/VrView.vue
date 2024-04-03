<script setup>
import ProjectCover from '../../components/ProjectCover.vue'
import SkillCard from '../../components/cards/SkillCard.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import ImageFull from '../../components/projects/ImageFull.vue'
import DoubleImage from '../../components/projects/DoubleImage.vue'

const technologies = ["unity", "blender"]
</script>

<template>
  <ProjectCover suptitle="Projet scolaire" title="Cauchemar au studio" date="2024"></ProjectCover>

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
          <p>“Cauchemar au studio” est un projet de jeu vidéo en réalité virtuelle développé sous <b>Unity</b>. L’objectif était de réaliser un escape game dans une des salles de notre bâtiment modélisée en 3D.</p>
          <p>Nous avions des casques à disposition pour travailler sur le projet. Pour ce travail, nous étions par groupe de trois. J’ai réalisé l’intégralité de la partie graphique ainsi que quelques scripts en C#.</p>
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
      <div class="simple-content__content col-12 offset-2">
        <div class="simple-content__text">
          <p>Le jeu est composé de 5 énigmes à accomplir avant que le timer de 10min se termine :
            <ul>
              <li><b>Énigme 1</b> : trouver un moyen d’allumer la lumière dans la salle sombre.</li>
              <li><b>Énigme 2</b> : reproduire une suite de couleur à l’aide d’indices éparpillés dans toute la salle.</li>
              <li><b>Énigme 3</b> : se rendre à l’étage, et à l’aide d’un pistolet, détruire les cibles.</li>
              <li><b>Énigme 4</b> : trouver la pièce manquante au jeu d’échec et faire un échec et mat.</li>
              <li><b>Énigme 5</b> : faire cuire une pizza, et la donner en offrande au monstre en échange de la clé de la sortie.</li>
            </ul>
          </p>
          <p><b>Partie graphique :</b></p>
          <p>Pour modéliser le studio du bâtiment de mon IUT, j’ai utilisé le logiciel Blender. J’ai pris plusieurs mesures au préalable afin d’avoir une salle en taille réelle et faciliter l’intégration sur Unity. Je voulais rendre l’environnement le plus varié possible, et utiliser la grandeur de la salle à notre avantage. Un des points majeurs d’un escape game est l’immersion. J’ai essayé de créer le plus d’objets possibles afin de créer ce côté chasse aux trésors.</p>
          <p>La conception du monstre, alias le camera guy, a commencé avec plusieurs croquis pour savoir à quoi il allait ressembler au final. Après avoir terminé la modélisation et “riggé” le personnage, c'est-à-dire lui définir un squelette pour bouger ses membres et l’animer, j’ai importé le modèle sur le site Mixamo qui propose une grande variété d’animation en tout genre. Il ne nous restait plus qu’à l’introduire dans notre scène Unity pour lui donner vie.</p>
          <p>Le défi principal a été d’optimiser au maximum chaque modèle conçu. La contrainte principale établie par notre professeur était que notre scène ne devait pas dépasser 40 000 triangles, ce qui est difficile à tenir pour une salle aussi grande que celle que nous avions choisie.</p>
        </div>
      </div>
      <div class="simple-content__image col-7">
        <video width="100%" height="411" controls>
          <source src="../../assets/vr_gameplay.mp4" type="video/mp4">
          Votre navigateur ne supporte pas la balise vidéo
        </video>
        <p class="figcaption">Vidéo de présentation du gameplay</p>
      </div>
    </div>
  </section>

  <ImageFull img="vr_studio_view.png" figcaption="Vue du studio en mode “Shading Solid”"></ImageFull>
  
  <DoubleImage
    img1="vr_studio.png"
    desc1="Salle principale du studio"
    img2="vr_studio_2.png"
    desc2="Vue depuis la régis"
  ></DoubleImage>

  <DoubleImage
    img1="vr_cameraguy.png"
    desc1="Conception du monstre en T pose"
    img2="vr_cameraguy_2.png"
    desc2="Rigging et animation du monstre"
  ></DoubleImage>

  <section class="simple-content">
    <div class="simple-content__container">
      <div class="simple-content__image col-9 offset-2">
        <img src="../../assets/images/projects/vr_code_pizza.png" alt="Partie du code qui gère la cuisson de la pizza" />
      </div>
      <div class="simple-content__content col-10">
        <div class="simple-content__text">
          <p><b>Partie développement :</b></p>
          <p>La partie majeure de développement a été réalisée par un autre membre de mon groupe. Cependant, j’ai pu participer à quelques scripts et améliorer mes compétences en C#. J’ai notamment réalisé le script de cuisson de la pizza par exemple.</p>
          <p>Le code permet de mettre à jour le timer et de vérifier s’il est terminé ou non, c’est à dire qu’il a atteint 10sec. Si c’est le cas, je met à jour l’affichage du timer qui apparaît sur le four ainsi que le skin de la pizza. En fait, j’effectue simplement un échange de position entre la pizza pas cuite et celle qui est prête.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="galerie">
    <div class="galerie__title offset-2">
      <h2>
        Galerie
        <div class="highlighting"></div>
      </h2>
    </div>
    <div class="galerie__container">
      <figure class="galerie__image">
        <img src="../../assets/images/projects/cameraguy_2.jpg" alt="Croquis 1 du cameraguy" />
      </figure>
      <figure class="galerie__image">
        <img src="../../assets/images/projects/cameraguy_1.jpg" alt="Croquis 2 du cameraguy" />
      </figure>
      <figure class="galerie__image">
        <img src="../../assets/images/projects/lasergun.jpg" alt="Croquis du pistolet laser" />
      </figure>
      <figure class="galerie__image">
        <img src="../../assets/images/projects/cameraguy_3.jpg" alt="Croquis 3 du cameraguy" />
      </figure>
    </div>
  </section>

</template>