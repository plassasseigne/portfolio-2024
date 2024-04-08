<script setup>
const props = defineProps(['skill', 'opacity'])
</script>

<template>
  <div class="skill-card">
    <div class="skill-card__img">
      <img :src="'/src/assets/images/' + props.skill.replace(/ /g, '-') + '.png'" />
    </div>
    <div class="skill-card__name">
      <span>{{ props.skill }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skill-card {
  width: 124px;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  border: solid 2px #fae367;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.50);
  backdrop-filter: blur(20px);
  transition: all 0.3s;

  @media (min-width: 1024px) {
    width: 174px;
  }

  &:hover {
    transform: translateY(-15px);
  }

  &__img {
    img {
      max-height: 42px;

      @media (min-width: 768px) {
        max-height: 54px;
      }
    }
  }

  &__name {
    text-align: center;
    color: black;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
}
</style>