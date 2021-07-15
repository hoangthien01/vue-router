<template>
  <li class="nav-item">
    <div class="image">
          <img :src="data.image" alt="" srcset="" />
    </div>
    <span>{{ data.content }}</span>
    <treeFolderContents :children="data.child" class="sub-nav">
    </treeFolderContents>
  </li>
</template>

<script>
import treeFolderContents from "./Tree-folder-content.vue";
export default {
  name: "treeFolder",
  props: ["data"],
  components: {
    treeFolderContents,
  },
};
</script>

<style scoped>
.sub-nav {
  /* padding: 3px;
    position: absolute;
    min-width: 190px;
    z-index: 10;
    list-style: none;
    display: none;
    top: 27px;
    color: #fff;
    font-size: 15px;
    text-transform: capitalize;
    left: 10px; */
}
.nav-item:hover .sub-nav {
  display: block;
}
.image {
  display: inline-block;
  width: 25px;
  height: 25px;
  object-fit: cover;
}
.image img {
  width: 100%;
}
.nav-item span {
  margin-left: 10px;
}
</style>