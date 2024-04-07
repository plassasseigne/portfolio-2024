<script setup>
const props = defineProps(['color'])
</script>

<template>
  <svg width="90" height="120" viewBox="0 0 90 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 0V29.9257V59.8515V89.7772H30H0V119.703H30H60H90V89.7772V59.8515V29.9257V0H60Z" :fill="color !== undefined ? color : 'black'"/>
    <path d="M30 29.926H0V59.8518H30V29.926Z" :fill="color !== undefined ? color : 'black'"/>
  </svg>
</template>