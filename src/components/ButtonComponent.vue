<script setup>
const props = defineProps(['title', 'link'])
</script>

<template>
  <div class="button">
    <a :href="props.link" target="_blank" class="button__link">
      {{ props.title }}
    </a>
  </div>
</template>

<style lang="scss" scoped>

.button {
  display: flex;

  &__link {
    padding: 10px 40px;
    border: solid 2px #FAE367;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(20px);
    color: black;
    text-transform: uppercase;
    margin-top: 20px;
  }
}
</style>