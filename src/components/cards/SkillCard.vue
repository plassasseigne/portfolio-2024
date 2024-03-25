<script setup>
const props = defineProps(['skill'])
</script>

<template>
  <div class="skill-card">
    <div class="skill-card__img">

    </div>
    <div class="skill-card__name">
      <span>{{ props.skill }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skill-card {
  width: 171px;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  border: solid 2px #fae367;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.50);
  backdrop-filter: blur(20px);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-15px);
  }

  &__name {
    text-align: center;
    color: black;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>