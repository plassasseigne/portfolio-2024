<script setup>
import ProjectCover from '../../components/ProjectCover.vue'
import SkillCard from '../../components/cards/SkillCard.vue'

const technologies = ["slack", "bolt js"]
</script>

<template>
  <ProjectCover suptitle="Projet personnel" title="Bot Slack" date="2024"></ProjectCover>

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
          <p><b>Slack</b> est un logiciel de communication pour les équipes. Il est généralement utilisé dans le milieu professionnel. Depuis peu, au sein de mon agence d’alternance, nous avons quitté notre ancienne messagerie en direct pour aller sur Slack. Il permet d’avoir un meilleur contrôle et une meilleure organisation des salons textuels.</p>
          <p>En parallèle, Slack propose une API pour les développeurs qui souhaitent créer leurs propres applications au sein du logiciel, comme des bots par exemple, des petits robots avec lesquels les utilisateurs peuvent avoir des interactions.</p>
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
          <p>J’ai donc créé un bot qui se nomme Tangente pour découvrir les fonctionnalités de Slack et ses interactions. L’objectif est de pouvoir l’intégrer plus tard dans l’espace de travail de mon entreprise afin qu’il puisse automatiser certaines tâches, comme des rappels de réunion, des votes, ou encore solliciter l’équipe de développement s’il détecte une erreur critique sur un de nos sites internet.</p>
          <p>Actuellement, pour faire des essais, le bot peut répondre aux messages selon certaines demandes, envoyer la carte d’identité d’un membre de l’équipe (en récupérant les informations Slack de celui-ci) et souhaiter les anniversaires.</p>
          <p>Pour créer un bot Slack, j’ai utilisé l’<b>API de Slack</b> ainsi que <b>Bolt</b>, un framework JS, Python ou Java.</p>
        </div>
      </div>
      <div class="simple-content__image col-10">
        <img src="../../assets/images/projects/slack_tangente.png" alt="Profil du bot Tangente" />
      </div>
    </div>
  </section>

  <section class="simple-content">
    <div class="simple-content__container">
      <div class="simple-content__image col-9 offset-2">
        <img src="../../assets/images/projects/slack_informations_code.png" alt="Code de la commande informations" />
      </div>
      <div class="simple-content__content col-10">
        <div class="simple-content__text">
          <p>Un bot Slack possède plusieurs token qui lui permettent d’être reconnu par l’API. Je les ai ajouté dans un fichier .env pour éviter de les mettre en dur dans le code.</p>
          <p>Voici comment fonctionne la commande !informations, qui affiche la carte d’identité Slack de l’utilisateur. “app.message” permet de détecter lorsqu’un message qui contient “!informations” est envoyé. Je peux récupérer les informations de ce message, dont l’id de l’expéditeur. Grâce à cet ID, je peux récupérer l’entièreté des informations du compte.</p>
          <p>Ensuite, je n’ai plus qu’à poster un message avec le bot en ordonnant les informations grâce à des blocks. Pour chaque requête, je dois rappeler le token du bot qui se trouve dans le .env grâce à la variable <b>process.env.SLACK_BOT_TOKEN</b> gérée par la librairie <b>dotenv</b>.</p>
        </div>
        <div class="simple-content__image">
          <img src="../../assets/images/projects/slack_informations.png" alt="Exécution sur Slack de la commande informations" />
        </div>
      </div>
    </div>
  </section>

  <section class="simple-content">
    <div class="simple-content__container">
      <div class="simple-content__content col-9 offset-2">
        <div class="simple-content__text">
          <p>Pour souhaiter les anniversaires, j’ai dans un premier temps écrit dans un fichier json le nom de la personne et sa date de naissance, que j’ai ensuite importé dans mon fichier index.js.</p>
          <p>Je fais ensuite un comparatif entre la date d’aujourd’hui et les dates présentes dans le json, en ne conservant que les mois. Si le mois et le jour de la date d’aujourd’hui sont les mêmes que ceux de la date d’anniversaire, alors le bot envoie un message de joyeux anniversaire dans le salon défini.</p>
        </div>
        <div class="simple-content__image col-10">
          <img src="../../assets/images/projects/slack_birthdays.png" alt="Message d'anniversaire envoyé par Tangente" />
        </div>
      </div>
      <div class="simple-content__image col-10">
        <img src="../../assets/images/projects/slack_birthdays_code.png" alt="Code de la gestion des anniversaires" />
        <img src="../../assets/images/projects/slack_birthdays_json.png" alt="Json qui regroupe les anniversaires" />
      </div>
    </div>
  </section>

</template>