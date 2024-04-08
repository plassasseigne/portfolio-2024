<script setup>
import ProjectCover from '../../components/ProjectCover.vue'
import SkillCard from '../../components/cards/SkillCard.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import DoubleImage from '../../components/projects/DoubleImage.vue'

const technologies = ["react native", "expo go", "git", "figma"]
</script>

<template>
  <ProjectCover suptitle="Projet personnel" title="Pokedex" date="2024"></ProjectCover>

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
          <p>Pour ce projet, j’ai conçu une application mobile de Pokedex en utilisant le framework React Native. Un Pokedex est une encyclopédie que l’on doit compléter dans les célèbres jeux de la franchise Pokemon. Il recense toutes les informations sur l’univers de ces petits monstres, leurs espèces, leurs évolutions, leurs attaques etc....</p>
          <p>L’objectif de l’application est de pouvoir accéder aux informations de chaque Pokemon, faire des recherches et concevoir sa propre équipe en ajoutant des favoris. Tout ça à partir de l’API gratuite <b>PokeAPI</b>.</p>
          <p>Afin de tester mon application et la débugger au cours de son développement, j’ai utilisé Astro Go qui permet de pouvoir rapidement expérimenter ses propres applications mobiles.</p>
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
      <div class="simple-content__content col-13 offset-2">
        <div class="simple-content__text">
          <p>Pour commencer, j’ai réalisé une maquette Figma au préalable afin de savoir exactement ce que je voulais faire.</p>
          <p>L’application est composée de 4 onglets :
            <ul>
              <li>Home : page principale où sont affichés tous les Pokemon. Lorsque l’on clique sur une carte, on peut accéder aux informations détaillées du Pokemon, comme ses statistiques de bases ou ses évolutions, et il est possible de le capturer pour l’ajouter à son équipe.</li>
              <li>Search : page de recherche qui permet de directement trouver et d’accéder au Pokemon voulu.</li>
              <li>Team : page de l’équipe que l’on peut constituer. Le maximum autorisé est 6 Pokemon. Il est aussi possible de la vider intégralement.</li>
              <li>Settings : page d’options qui permet à l’utilisateur de définir une photo de profil en la prenant directement depuis l’application. Permet aussi de changer l’orientation de l’écran sur l’application.</li>
            </ul>
          </p>
          <p>Toutes les informations proviennent de PokeAPI. J’ai réalisé mes requêtes à l’aide d’Axios, un client HTTP compatible avec node.js.</p>
          <p>En ce concerne la gestion des menus, j’ai utilisé les librairies React <b>native-stack</b>, pour créer des “empilements” de page, et <b>bottom-tabs</b>, pour créer le menu en bas de l’écran.</p>
          <p>De plus, afin de stocker certaines informations dans l’appareil, j’ai utilisé la librairie <b>async-storage</b>, comme pour sauvegarder l’équipe ou la photo de profil de l’utilisateur. Et enfin, pour les options, j’ai fais appel aux librairies <b>expo-camera</b> pour accéder à la caméra de l’appareil et <b>expo-screen-orientation</b> pour gérer l’orientation de l’écran, que l’on peut retrouver dans la documentation officielle d’Expo.</p>
        </div>
      </div>
      <div class="simple-content__image col-6">
        <img src="../../assets/images/projects/pokedex_main.jpg" alt="Page d'accueil de l'application Pokedex" />
      </div>
    </div>
  </section>

  <DoubleImage
    img1="pokedex_get_data.png"
    desc1="Exemple de récupération des données d’un Pokemon et de son espèce selon son ID avec Axios - DetailScreen.js"
    img2="pokedex_color_type.png"
    desc2="Attribution des couleurs par rapport aux types du Pokemon, dans PokemonCard.js"
  ></DoubleImage>

  <section class="simple-content">
    <div class="simple-content__title offset-2">
      <h2>
        Défis et solutions
        <div class="highlighting"></div>
      </h2>
    </div>
    <div class="simple-content__container">
      <div class="simple-content__image col-6 offset-2">
        <img src="../../assets/images/projects/pokedex_detail.jpg" alt="Page d'accueil de l'application Pokedex" />
      </div>
      <div class="simple-content__content col-13">
        <div class="simple-content__text">
          <p>Le principal défis a été d’apprendre à maîtriser les bases de React Native pour l’application. Bien qu’il y ai beaucoup de ressemblances avec le balisage de l’HTML et du CSS, la façon de développer l’interface d’une application React Native est assez différente. Malgré les outils mis en place par Expo, le débogage est plus complexe.</p>
          <p>Le plus gros problème auquel j’ai été confronté est la gestion de la réception des données de mes requêtes API. Javascript est très stricte, et lorsque j’appelais des données alors que la requête n’était pas tout à fait chargée, j’avais une erreur critique. Et inversement, parfois l’application gardait les données chargées en mémoire, et lorsque je l’actualisais, il ne les recevait plus correctement.</p>
          <p>J’ai pu y faire face en utilisant correctement plusieurs conditions et en utilisant les fonctions <b>useState</b> et <b>useEffect</b> de React, qui permettent de stocker des valeurs et de déclencher des fonctions lorsque celles-ci sont mises à jour.</p>
          <ButtonComponent title="Lien Github" link="https://github.com/plassasseigne/wra509d-pokedex"></ButtonComponent>
        </div>
      </div>
    </div>
  </section>

  <DoubleImage
    img1="pokedex_storage.png"
    desc1="Ensemble de mes fonctions qui permettent de stocker des informations dans la mémoire du téléphone - StorageService.js"
    img2="pokedex_search.png"
    desc2="Fonction qui permet d’effectuer une recherche. Search est un useState attaché à un <TextInput>. A chaque fois que search est mise à jour, on réattribue la valeur, et on lance une recherche grâce à la fonction getData() - SearchScreen.js"
  ></DoubleImage>

  <section class="galerie">
    <div class="galerie__title offset-2">
      <h2>
        Galerie
        <div class="highlighting"></div>
      </h2>
    </div>
    <div class="galerie__container">
      <figure class="galerie__image">
        <img src="../../assets/images/projects/pokedex_detail_2.jpg" alt="Page détails" />
        <figcaption>Page détails</figcaption>
      </figure>
      <figure class="galerie__image">
        <img src="../../assets/images/projects/pokedex_team.jpg" alt="Page équipe" />
        <figcaption>Page équipe</figcaption>
      </figure>
      <figure class="galerie__image">
        <img src="../../assets/images/projects/pokedex_search.jpg" alt="Page de recherche" />
        <figcaption>Page de recherche</figcaption>
      </figure>
      <figure class="galerie__image">
        <img src="../../assets/images/projects/pokedex_options.jpg" alt="Page options" />
        <figcaption>Page options</figcaption>
      </figure>
    </div>
  </section>

</template>

<style lang="scss" scoped>

</style>