<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import gsap from 'gsap'

const canvas = ref()
const screenW = ref()
let logo

onMounted(() => {
  init()
})

const init = () => {
  // Screen
  screenW.value = screen.width

  // Scene
  const scene = new THREE.Scene()

  // Logo
  const loader = new GLTFLoader()

  loader.load('./src/assets/models/logo.glb', (glb) => {
    logo = glb.scene

    logo.position.y = -1.5
    logo.position.x = 0.6

    logo.rotateY(Math.PI / 180 * -35)
    logo.rotateX(Math.PI / 180 * -15)

    scene.add(logo)

    logoAnimation() 
  })

  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  // Camera
  const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000)

  camera.position.z = 1.5

  scene.add(camera)

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 9)

  scene.add(ambientLight)

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const animate = () => {
    requestAnimationFrame(animate)

    renderer.render(scene, camera)
  }

  animate()
}

const logoAnimation = () => {
  if (logo !== undefined) {
    gsap.to(logo.position, {
      y: -0.25,
      ease: 'power3.out',
      duration: 1
    })
    gsap.to(logo.rotation, {
      y: logo.rotation.y + Math.PI * 2,
      ease: 'power3.out',
      duration: 1
    })
  }
}
</script>

<template>
  <canvas :v-if="screenW > 1024" ref="canvas" class="webgl"></canvas>
</template>

<style lang="scss" scoped>
.webgl {
  position: absolute;
  top: 0;
  left: 0;
  outline: none;
  z-index: -1;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
}
</style>