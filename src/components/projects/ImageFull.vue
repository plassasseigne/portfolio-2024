<script setup>
const props = defineProps(['title', 'img'])
</script>

<template>
  <section class="image-full">
    <div v-if="props.title" class="image-full__title offset-2">
      <h2>
        {{ props.title }}
        <div class="highlighting"></div>
      </h2>
    </div>
    <div class="image-full__image col-20 offset-2">
      <img :src="'/src/assets/images/projects/' + props.img" alt="Cover"/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.image-full {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;

  &__title {
    display: flex;
  }

  &__image {
    img {
      width: 100%;
    }
  }
}
</style>