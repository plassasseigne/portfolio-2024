import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokedexView from '../views/projects/PokedexView.vue'
import ScaryviewView from '../views/projects/ScaryviewView.vue'
import VrView from '../views/projects/VrView.vue'
import AnyosView from '../views/projects/AnyosView.vue'
import CarGameView from '../views/projects/CarGameView.vue'
import SlackBotView from '../views/projects/SlackBotView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project/pokedex',
      name: 'pokedex',
      component: PokedexView
    },
    {
      path: '/project/scaryview',
      name: 'scaryview',
      component: ScaryviewView
    },
    {
      path: '/project/cauchemar-au-studio',
      name: 'cauchemar-au-studio',
      component: VrView
    },
    {
      path: '/project/anyos',
      name: 'anyos',
      component: AnyosView
    },
    {
      path: '/project/bot-slack',
      name: 'bot-slack',
      component: SlackBotView
    },
    {
      path: '/project/jeu-de-voiture',
      name: 'jeu-de-voiture',
      component: CarGameView
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {
        top: 0,
        behavior: 'instant'
      }
    }
  }
})

export default router
