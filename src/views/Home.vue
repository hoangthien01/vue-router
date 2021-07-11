<template>
  <div class="main-contain">
    <HomeHeader></HomeHeader>
    <Blog1 :blogs="blogs"></Blog1>
    <Article></Article>
    <Blog2 :blogs="blogs" :tags="tags"></Blog2>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from "../components/uncommon/Home/HomeHeader.vue";
import Blog1 from "../components/uncommon/Home/Blog1.vue";
import Blog2 from "../components/uncommon/Home/Blog2.vue";
import Article from "../components/uncommon/Home/Article2.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    Blog1,
    Article,
    Blog2,
  },
  async created() {
    try{
      const response = await axios.get(' http://localhost:3000/blogs')
      this.blogs = response.data
      this.tags = this.blogs.map((blog)=> {
        return blog.head
      })
    }
    catch(error) {
      console.log(error)
    }
  },
  data() {
    return {
      blogs: [],
      tags: []
    };
  },
};
</script>

<style scoped>
.main-contain {
  margin-top: 35px;
}
</style>
