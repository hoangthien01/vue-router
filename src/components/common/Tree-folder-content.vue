<template>
  <ul>
    <li
      v-for="(item, index) in children"
      :key="index"
      @mouseover="
        () => {
          positionHover = index;
        }
      "
      @mouseleave="
        () => {
          positionHover = -1;
        }
      "
      :class="{ active: positionHover === index }"
    >
      <tree-folder v-if="item.children" :data="item" />
      <span v-else>{{ item.content }}</span>
      <i class="fas fa-hand-point-right" v-if="positionHover === index"></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: "treeFolderContents",
  props: ["children"],
  data() {
    return {
      positionHover: -1,
    };
  },
};
</script>

<style scoped>
li:first-child {
  border-top: 2px solid #828282;
}
li:last-child {
  border-bottom: 2px solid #828282;
}
li {
  border-left: 2px solid #828282;
  border-right: 2px solid #828282;
  padding: 10px;
}
.active {
  color: red;
}
i {
  margin-left: 5px;
}
</style>