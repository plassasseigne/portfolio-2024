<script setup>
import ProjectCover from '../../components/ProjectCover.vue'
import SkillCard from '../../components/cards/SkillCard.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import ImageFull from '../../components/projects/ImageFull.vue'
import DoubleImage from '../../components/projects/DoubleImage.vue'

const technologies = ["symfony", "api platform", "git", "figma", "vue js", "postman"]
</script>

<template>
  <ProjectCover suptitle="Projet scolaire" title="Scaryview" date="2024"></ProjectCover>

  <section class="intro">
    <div class="intro__container">
      <div class="intro__presentation">
        <div class="intro__title">
          <h2>
            Présentation
            <div class="highlighting"></div>
          </h2>
        </div>
        <div class="intro__content">
          <p>Scaryview est un site de streaming fictif spécialisé dans les films horrifiques. Pour ce travail, nous devions réaliser un site avec une partie back à l’aide de Symfony et API Platform, et une partie front avec Vue JS. L’objectif était de faire un CRUD à partir de notre propre API.</p>
          <p>Le site propose également un système de connexion sécurisé. Si l’utilisateur n’est pas connecté, il n’a pas accès au site et ne peut donc pas interagir avec l’API.</p>
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

  <ImageFull title="Conception" img="scaryview_cover.png"></ImageFull>

  <section class="double-content">
    <div class="double-content__container col-20">
      <div class="double-content__content offset-2">
        <p><b>Partie back :</b></p>
        <p>Pour la partie back, j’ai utilisé le framework <b>Symfony</b> car il permet de créer  facilement une API grâce à <b>API Platform</b>, puis de mettre en place un système de récupération de données sécurisé avec un JWT.</p>
        <p>L’API permet de gérer les entités Movie, Actor, Category, Nationality et User avec les requêtes HTTP GET, POST, PUT, DELETE et PATCH. Elles ont été créées au préalable par Symfony et envoyées sur une base de données grâce à Doctrine (un outil PHP intégré au framework). Toutes les données fictives ont été généré par des Fixtures. Pour tester mes requêtes, j’ai utilisé le logiciel Postman en créant une collection avec toutes les requêtes qui composent mon API.</p>
        <p>J’ai aussi mis en place un système de connexion. Avec un formulaire en front, l’utilisateur envoie une requête à l’API. Si les identifiants entrés correspondent à un User de la base de données, il génère un token qui lui permet d’effectuer l’intégralité des requêtes pour récupérer les contenus en naviguant sur le site. Bien sûr, tout ça l’utilisateur ne le sait pas, c’est ce qu’il se passe côté serveur.</p>
      </div>
      <div class="double-content__content offset-2">
        <p><b>Partie front :</b></p>
        <p>Pour la partie front, j’ai utilisé le framework <b>Vue JS</b>. Il permet de construire des sites internet grâce à des composants réutilisables et des vues. Une fois qu’une fonctionnalité ou qu’un bout de code a été fait, il peut être intégré ailleurs facilement tout en étant adapté, et permet donc de gagner un temps conséquent et d’avoir un espace de travail propre et organisé.</p>
        <p>Si l’utilisateur n’est pas connecté (et n’a donc pas de token), il est automatiquement redirigé vers la page de connexion du site. Une fois connecté, il est redirigé sur la page d’accueil qui affiche les derniers films, les acteurs du moment et les catégories les plus populaires.</p>
        <p>Chaque entité possède sa propre page générale, où l’utilisateur peut faire des recherches, supprimer et modifier l’élément. Chaque carte permet d’avoir davantage d’informations sur l’entité. Il est aussi possible de modifier les informations du compte dans l’onglet “Account” du menu. Toutes les requêtes ont été réalisées avec axios.</p>
      </div>
    </div>
  </section>

  <DoubleImage
    img1="scaryview_movies_code.png"
    desc1="Exemple de récupération des films avec une requête axios ainsi que la gestion de la pagination. L’URL est à définir dans le .env à la racine du fichier. Je vérifie aussi si l’utilisateur possède bien le token de connexion, sinon je le redirige vers la page login - MoviesView.vue"
    img2="scaryview_movies_front.png"
    desc2="Affichage des films grâce au composant ItemCard.view qui s’adapte selon le type de données (un film, un acteur ou une catégorie) - MovesView.vue"
  ></DoubleImage>

  <DoubleImage
    img1="scaryview_movie_edit_front.png"
    desc1="Panel d’édition des films. Lorsque l’utilisateur clique sur l'icône de modification, les informations du film sont automatiquement mis dans le formulaire d’édition - MoviesView.vue"
    img2="scaryview_movie_edit_code.png"
    desc2="Fonction de modification d’un film. L’interface de modification récupère l’ensemble des données du film modifié et les affiche dans les input. Lorsque l’utilisateur modifie une valeur, les variables edit se mettent à jour. Lorsque le formulaire est soumis, c’est une requête PATCH qui va mettre à jour les données - MoviesView.vue"
  ></DoubleImage>

  <section class="simple-content">
    <div class="simple-content__container">
      <div class="simple-content__image col-9 offset-2">
        <img src="../../assets/images/projects/scaryview_movie_entity.png" alt="Capture d'écran de la Class Movie" />
      </div>
      <div class="simple-content__content col-10">
        <div class="simple-content__text">
          <p>La capture d’écran présente une partie de la construction de la Class de l’entité Movie dans le projet Symfony. C’est dans ce fichier que j’ai défini toutes les caractéristiques de mon entité, comme le titre, la description, la date de parution ou encore les acteurs qui lui sont liés.</p>
          <p>C’est aussi dans ce fichier que je peux contrôler les informations visibles grâce à des groupes et comment les requêtes doivent être faites pour accepter les contenus envoyés.</p>
          <p>Les attributs <b>#[Groups()]</b> permettent d’autoriser la lecture des données (par exemple pouvoir récupérer les acteurs quand on récupère l’ensemble des films, car ce n’est pas automatique même si les class sont liées). Les attributs <b>#[Assert()]</b> permettent de contrôler ce qui doit être envoyé, comme en renvoyant une erreur si le champs est vide ou s’il dépasse une limite imposée (pour les nombres, comme la caractéristique box office).</p>
        </div>
        <div class="simple-content__image">
          <img src="../../assets/images/projects/scaryview_movie_entity_2.png" alt="Capture d'écran 2 de la Class Movie" />
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
          <p>Ce projet m’a appris à créer un back office et à contrôler les données d’un site grâce à une API. Ce qui est a été très intéressant, c’est d’avoir deux projets à part (une partie back et une partie front) qui sont liées, mais qui peuvent être utilisées seules.</p>
        </div>
        <div class="simple-content__buttons">
          <ButtonComponent title="Github du front" link="https://github.com/plassasseigne/wr505d"/>
          <ButtonComponent title="Github du back" link="https://github.com/plassasseigne/wr506d"/>
          <ButtonComponent title="Lien du site" link="https://wr505.lassasseigne.fr/login"/>
        </div>
      </div>
      <div class="simple-content__image col-10">
        <img src="../../assets/images/projects/scaryview_categories.png" alt="Page d'accueil de l'application Pokedex" />
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
.simple-content {
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.double-content {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;

  &__container {
    display: flex;
    width: 100%;
  }

  &__content {
    width: calc(4.166667% * 9);
  }
}
</style>