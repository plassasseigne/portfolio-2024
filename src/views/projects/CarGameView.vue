<script setup>
import ProjectCover from '../../components/ProjectCover.vue'
import SkillCard from '../../components/cards/SkillCard.vue'
import ImageFull from '../../components/projects/ImageFull.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'

const technologies = ["unity", "blender"]
</script>

<template>
  <ProjectCover suptitle="Projet scolaire" title="Jeu de voiture" date="2023"></ProjectCover>

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
          <p>Pour ce projet, j’ai conçu un jeu vidéo très basique de voiture qui consiste à récupérer 10 objets éparpillés sur une carte avant le temps imparti. Je l’ai réalisé sous le moteur <b>Unity</b>. C’était l’évaluation finale de ce cours.</p>
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
          <p>J’ai développé les scripts et j’ai modélisé les assets en m’inspirant d’éléments réels, comme mon IUT ou le logo de Docker. C'étaient mes premiers modèles “fonctionnels” exportés depuis Blender. J’ai ajouté à ça quelques sons pour les interactions avec une musique d’ambiance pour donner plus de dynamisme au jeu.</p>
          <p>Le plus difficile a été la gestion des collisions et de la gravité. Encore actuellement, la voiture peut passer à travers le terrain. Dans Unity, les collisions se gèrent avec ce qu’on appelle des “box collider”, mais elles dépendent aussi du poids de l’objet avec lesquelles elles sont en contact.</p>
          <p>Le jeu est en WebGL, j’ai donc pu l’héberger sur un site internet.</p>
        </div>
      </div>
      <div class="simple-content__image col-10">
        <img src="../../assets/images/projects/jv_gameplay.png" alt="Interface du jeu de voiture" />
      </div>
    </div>
  </section>

  <ImageFull img="jv_interface.png" figcaption="Vue de l’interface Unity"/>

  <section class="simple-content">
    <div class="simple-content__container">
      <div class="simple-content__image col-9 offset-2">
        <img src="../../assets/images/projects/jv_carcontroller.png" alt="Code de la class CarController" />
      </div>
      <div class="simple-content__content col-10">
        <div class="simple-content__text">
          <p>Ce code permet de gérer le contrôle de la voiture. Dans un premier temps, je déclare mes variables : 
            <ul>
              <li><b>Speed</b> : qui va gérer la vitesse. Par défaut elle est à 15 mais elle peut se changer depuis l’interface Unity.</li>
              <li><b>carRigidbody</b> : qui permet de gérer les forces et la gravité.</li>
              <li><b>initialPosition</b> : c’est un Vector3 qui va gérer la position des 3 axes (x, y, z).</li>
              <li><b>initialRotation</b> : c’est un Quaternion qui va gérer la rotation.</li>
              <li><b>carNoises</b> : c’est une source audio qui va me permettre de charger un bruit de moteur lorsque la voiture sera en marche.</li>
            </ul>
          </p>
          <p>La fonction <b>Start()</b> permet de bien initialiser mes variables en leur attribuant les valeurs de la voiture.</p>
          <p>La fonction <b>Update()</b> permet de mettre à jour l’état de la voiture à chaque frame du jeu. Je récupère les entrées de l'axe horizontal et vertical du clavier (les flèches directionnelles par exemple) puis je contrôle la rotation horizontale et la position de la voiture.</p>
          <p>Enfin, je vérifie si la voiture n’est pas à l’arrêt, et je joue un son de moteur que j’ai importé au préalable dans Unity.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="simple-content">
    <div class="simple-content__title offset-2">
      <h2>
        Conclusion
        <div class="highlighting"></div>
      </h2>
    </div>
    <div class="simple-content__container">
      <div class="simple-content__content col-9 offset-2">
        <div class="simple-content__text">
          <p>Ce projet m’a appris les bases d’Unity, que ce soit les interactions avec l’interface principale du logiciel, le chargement de ressources (sons, modèles etc...) ou encore le développement de scripts en C#.</p>
        </div>
        <div class="simple-content__buttons">
          <ButtonComponent title="Vidéo de gameplay" link="https://youtu.be/ompgw7dvQCk"/>
          <ButtonComponent title="Lien du jeu" link="https://mmi21h08.mmi-troyes.fr/voiture/"/>
        </div>
      </div>
      <div class="simple-content__image col-10">
        <img src="../../assets/images/projects/jv_victory.png" alt="Interface de victoire du jeu de voiture" />
      </div>
    </div>
  </section>

</template>