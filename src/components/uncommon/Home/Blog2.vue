<template>
  <div class="recent-post-contain">
    <div class="recent-post-content">
      <div
        class="recent-post"
        v-for="(blog, index) in blogs.slice(3,8)"
        :key="index"
        @click="$router.push('/blog/' + blog.id)"
      >
        <div class="blog-image">
          <img :src="blog.image" alt="" srcset="" />
        </div>
        <div class="blog-content" style="flex: 1; margin-left: 37px">
          <p class="head">{{ blog.head }}</p>
          <h2 class="title">{{ blog.title }}</h2>
          <p class="sub-title">{{ blog.subTitle }}</p>
          <p class="description">{{ blog.description }}</p>
        </div>
      </div>
    </div>
    <div class="tag-contain">
      <h4>tags.</h4>
      <ul class="list-tags">
        <li v-for="(tag, index) in tags" :key="index">{{ tags[index] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blogs", "tags"],
};
</script>

<style scoped>
.recent-post-contain {
  /* width: 812px; */
  width: 100%;
  margin: 0 auto;
  padding: 0 121px 76px;
  display: flex;
}
.recent-post-content {
  width: 80%;
}
.recent-post {
  display: flex;
  cursor: pointer;
  margin-top: 63px;
  padding-right: 100px;
}
.blog-image {
  width: 40%;
  max-height: 200px;
  overflow: hidden;
}
.blog-image img {
  width: 100%;
  object-fit: cover;
}
.tag-contain {
  width: 20%;
  max-height: 1200px;
  overflow-y: scroll;
  margin-top: 63px;
  position: relative;
}
.tag-contain::-webkit-scrollbar {
    display: none;
}
.tag-contain h4 {
  position: sticky;
  top: 0;
  font-weight: bold;
  font-size: 22px;
  line-height: 40px;
  color: #1c1c1c;
  background-color: #ccc;
  padding-left: 20px;
  border-radius: 3px;
}
.list-tags {
  list-style: none;
  padding-left: 20px;
}
.list-tags li {
  font-size: 19px;
  line-height: 45px;
  color: #000000;
  cursor: pointer;
}
.list-tags li:hover {
  color: #0e1ea7;
  text-decoration: underline;
}
.head {
  font-size: 20px;
  line-height: 24px;
  color: rgba(28, 28, 28, 0.5);
}
.title {
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #000000;
  line-height: 39px;
}
.sub-title {
  margin-top: 12px;
  font-size: 19px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
}

.description {
  margin-top: 14px;
  font-size: 19px;
  line-height: 24px;
  color: #000000;
}
@media (min-width: 576px) {  }

@media (max-width: 767.98px) {  }

@media (min-width: 768px) and (max-width: 991.98px) {
  .recent-post-contain{
    padding: 0 90px 50px;
  }
.recent-post {
  display: block;
}
.blog-image {
  width: 100%;
}
.blog-content {
  margin-left: 0 !important;
  margin-top: 20px;
}
.head,.description,.sub-title {
  font-size: 17px;
  line-height: 21px;
}
.title {
  font-size: 28px;
  line-height: 30px;
}
.sub-title {
  margin-top: 5px;
}
.description {
  margin-top: 7px;
}
  }

@media (min-width: 992px) and (max-width: 1199.98px){
.recent-post-contain{
  padding: 0 50px 50px;
}
.sub-title {
  margin-top: 0;
}
.title {
  font-size:28px;
  line-height: 32px;
}
.recent-post {
  padding-right: 60px;
}
.head,.description,.sub-title {
    font-size: 18px;
  line-height: 24px;
}
.description {
  margin-top: 5px;
}
.list-tags li {
  font-size: 18px;
  line-height: 40px;
}
 }
</style>