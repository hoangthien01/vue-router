<template>
  <div class="tags-contain">
    <input
      type="text"
      placeholder="Find the topics you care about "
      v-model="searchInput"
      class="form-control"
    />
    <ul class="list-tags">
      <li class="tag-item" v-for="(tag, index) in searchTag" :key="index">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchInput: "",
      blogs: [],
      tags: [],
    };
  },
  computed: {
    searchTag() {
      return this.tags.filter((tag) => {
        return (tag.toLowerCase().includes(this.searchInput.toLowerCase()));
      });
    },
  },
  async created() {
    try {
      const response = await axios.get(" http://localhost:3000/blogs");
      this.blogs = response.data;
      this.tags = this.blogs.map((blog) => {
        return blog.head;
      });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.tags-contain {
  padding: 120px 95px;
  text-align: center;
}
.form-control {
  width: 50%;
  padding: 10px 15px;
  outline: none;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 25px;
}
.list-tags {
  margin-top: 50px;
  list-style: none;
}
.tag-item {
  margin: 7px;
  cursor: pointer;
  display: inline-block;
  padding: 7px 10px;
  font-size: 17px;
  border: 1px solid #000000;
  border-radius: 50px;
}
.tag-item:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>