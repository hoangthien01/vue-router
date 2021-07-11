<template>
  <div class="blog-detail" v-if="blog">
    <Head :image="blog.image"></Head>
    <div class="content">
      <Content :blog="blog"></Content>
      <Author></Author>
    </div>
  </div>
  <div v-else class="notFound">
    <p>Not found</p>
  </div>
</template>

<script>
import axios from 'axios'
import Head from "../components/uncommon/Blog/Head.vue";
import Content from "../components/uncommon/Blog/Content.vue"
import Author from "../components/uncommon/Blog/Author.vue";
export default {
  components: {
    Head,Content, Author,
  },
  async created() {
     try{
      const response = await 
      axios.get(' http://localhost:3000/blogs/'+ this.$route.params.id)
      this.blog = response.data
    }
    catch(error) {
      console.log(error)
    }
  },
  data() {
    return {
      blog: null,
    };
  },
};
</script>

<style scoped>
.blog-detail {
  margin-top: 35px;
}
.content {
  width: 70%;
  max-width: 652px;
  margin: 54px auto 0;
}
.notFound {
  text-align: center;
  font-size: 30px;
  margin: 30px;
  font-family: monospace;
}
</style>