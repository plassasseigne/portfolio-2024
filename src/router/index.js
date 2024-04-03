import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokedexView from '../views/projects/PokedexView.vue'
import ScaryviewView from '../views/projects/ScaryviewView.vue'
import VrView from '../views/projects/VrView.vue'
import AnyosView from '../views/projects/AnyosView.vue'

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
  ]
})

export default router
