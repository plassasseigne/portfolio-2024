<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import GUI from 'lil-gui'

const canvas = ref()

onMounted(() => {
  init()
})

const init = () => {
  // Debug
  const gui = new GUI()

  // Scene
  const scene = new THREE.Scene()

  // Logo
  const loader = new GLTFLoader()

  loader.load('./src/assets/models/logo.glb', (glb) => {
    const logo = glb.scene

    logo.position.y = -0.25
    logo.position.x = 0.6

    const logoController = gui.addFolder('LogoController')
    logoController.add(logo.position, 'y').min(-5).max(5).step(0.01)
    logoController.add(logo.position, 'x').min(-5).max(5).step(0.01)
    logoController.add(logo.position, 'z').min(-5).max(5).step(0.01)

    logoController.add(logo.rotation, 'y').min(-5).max(5).step(0.01)
    logoController.add(logo.rotation, 'x').min(-5).max(5).step(0.01)
    logoController.add(logo.rotation, 'z').min(-5).max(5).step(0.01)

    logo.rotateY(Math.PI / 180 * -35)
    logo.rotateX(Math.PI / 180 * -15)

    scene.add(logo)
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
  const ambientLight = new THREE.AmbientLight(0xffffff, 5)

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
</script>

<template>
  <canvas ref="canvas" class="webgl"></canvas>
</template>

<style lang="scss" scoped>
.webgl {
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
    z-index: -1;
}
</style>