import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokedexView from '../views/projects/PokedexView.vue'
import ScaryviewView from '../views/projects/ScaryviewView.vue'

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
    }
  ]
})

export default router
