<script setup>
const props = defineProps(["img1", "desc1", "img2", "desc2"])
</script>

<template>
  <section class="double-image">
    <div class="double-image__container">
      <figure class="double-image__image">
        <img :src="'/src/assets/images/projects/' + props.img1"/>
        <figcaption>{{ props.desc1 }}</figcaption>
      </figure>
      <figure class="double-image__image">
        <img :src="'/src/assets/images/projects/' + props.img2"/>
        <figcaption>{{ props.desc2 }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.double-image {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;

  &__container {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    gap: 10px;
    padding-left: calc(4.166667% * 2);
  }

  &__image {
    width: calc(4.166667% * 10);
    display: flex;
    flex-direction: column;

    img {
      max-width: 100%;
      max-height: 500px;
    }
  }
}
</style>