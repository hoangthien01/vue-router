<template>
  <div class="article">
    <img :src="image" alt="" srcset="" />
  </div>
</template>

<script>
export default {
  name: "Head",
  props: ["image"],
};
</script>

<style scoped>
.article {
  overflow: hidden;
  position: relative;
  width: 80%;
  margin: 0 auto;
  max-height: 600px;
}
.article img {
  width: 100%;
  object-fit: cover;
}

</style>