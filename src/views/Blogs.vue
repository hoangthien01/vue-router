<template>
  <div class="blogs-contain">
    <div v-if="loading" class="loading">Loading {{loadingPercent}}%</div>
    <div
      v-else
      class="blog-item"
      v-for="(blog, index) in blogs"
      :key="index"
      @click="$router.push('/blog/' + blog.id)"
    >
      <div class="image">
        <img :src="blog.image" alt="" srcset="" />
      </div>
      <div class="blog-content">
        <p class="head">{{ blog.head }}</p>
        <h2 class="title">{{ blog.title }}</h2>
        <p class="sub-title">{{ blog.subTitle }}</p>
        <p class="description">{{ blog.description }}</p>
      </div>
    </div>
    <pagination
      :totalPages="5"
      :maxVisiblePage="3"
      @pagechanged="onPageChange"
    ></pagination>
  </div>
</template>

<script>
import axios from "axios";
import pagination from "../components/common/Pagination.vue";
export default {
  name: "Blogs",
  data() {
    return {
      loadingPercent: 0,
      blogs: [],
      currentPage: 1,
      loading: true,
    };
  },
  computed: {
    startPage() {
      return this.currentPage * 10 - 10;
    },
    endPage() {
      return this.currentPage * 10;
    },
  },
  components: {
    pagination,
  },
  async created() {
    try {
      const response = await axios.get(
        " http://localhost:3000/blogs?_start=" +
          this.startPage +
          "&_end=" +
          this.endPage
      );
      this.blogs = response.data;
      setInterval(() => {
        if (this.loadingPercent < 100) this.loadingPercent++;
      }, 15);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async onPageChange(page) {
      this.currentPage = page;
      try {
        const response = await axios.get(
          " http://localhost:3000/blogs?_start=" +
            this.startPage +
            "&_end=" +
            this.endPage
        );
        this.blogs = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1650);
  },
};
</script>

<style scoped>
.loading {
  text-align: center;
  margin: 50px 0;
  font-size: 30px;
  color: rgb(104, 97, 97);
}

.blogs-contain {
  margin-top: 35px;
  padding: 0 130px 50px;
}
.blog-item {
  display: flex;
  margin-bottom: 50px;
  cursor: pointer;
}
.blog-content {
  flex: 1;
}
.image {
  max-width: 475px;
  width: 50%;
  max-height: 270px;
  margin-right: 50px;
  overflow: hidden;
}
.image img {
  width: 100%;
  object-fit: cover;
}
.head {
  font-size: 22px;
  line-height: 27px;
  color: rgba(28, 28, 28, 0.5);
}
.title {
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  color: #000000;
  line-height: 41px;
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
@media (min-width: 576px) {
}

@media (max-width: 767.98px) {
  .blogs-contain {
    padding: 0 100px 50px;
  }
  .blog-item {
    display: block;
  }
  .image {
    margin: 0 auto;
    width: 100%;
  }
  .blog-content {
    margin-top: 20px;
  }
  .title {
    font-size: 24px;
    line-height: 27px;
  }
  .sub-title,
  .head,
  .description {
    font-size: 16px;
    line-height: 20px;
  }
  .description {
    margin-top: 7px;
  }
  .sub-title {
    margin-top: 5px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .blogs-contain {
    padding: 0 40px 50px;
  }
  .image {
    margin-right: 0;
    padding-right: 50px;
  }
  .title {
    font-size: 22px;
    line-height: 25px;
  }
  .sub-title,
  .head,
  .description {
    font-size: 14px;
    line-height: 17px;
  }
  .description {
    margin-top: 7px;
  }
  .sub-title {
    margin-top: 5px;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .blogs-contain {
    padding: 0 100px 50px;
  }
  .title {
    font-size: 26px;
    line-height: 30px;
  }
  .sub-title,
  .head,
  .description {
    font-size: 16px;
    line-height: 20px;
  }
  .description {
    margin-top: 7px;
  }
  .sub-title {
    margin-top: 5px;
  }
}
</style>