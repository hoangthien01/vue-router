<template>
  <ul class="pagination">
    <li class="page-item">
      <button :disabled="isInFirstPage" @click="onClickPreviousPage">
        <i class="fas fa-angle-double-left"></i>
      </button>
    </li>
        <!-- :disabled="page.isDisabled" -->
    <li class="page-item" v-for="(page, index) in pages" :key="index">
      <button
        @click="onClickPage(page.name)"
        :class="{ pageActive: currentPage === page.name }"
      >
        {{ page.name }}
      </button>
    </li>
    <li class="page-item">
      <button :disabled="isInLastPage" @click="onClickNextPage">
        <i class="fas fa-angle-double-right"></i>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['totalPages','maxVisiblePage'],
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisiblePage + 1;
      }
      return this.currentPage - 1;
    },
     endPage() {
        return Math.min(this.startPage + this.maxVisiblePage - 1, this.totalPages)
      },
    pages() {
      const range = [];
      for (let i = this.startPage; i <= Math.min(this.startPage + this.maxVisiblePage - 1,
       this.totalPages); i += 1) 
      {
        range.push({
          name: i,
          // isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    // onClickPage(index) {
    //   console.log(index);
    //   this.isPageActive = index;
    //   if (index + 1 === 1) {
    //     this.isFirstPage = true;
    //     this.isLastPage = false;
    //   } else if (index + 1 === this.pages) {
    //     this.isLastPage = true;
    //     this.isFirstPage = false;
    //   } else {
    //     (this.isFirstPage = false), (this.isLastPage = false);
    //   }
    // },
    // prePage() {
    //   if (this.isPageActive + 1 != 0) this.onClickPage(--this.isPageActive);
    // },
    // nextPage() {
    //   if (this.isPageActive + 1 != this.pages)
    //     this.onClickPage(++this.isPageActive);
    // },
    onClickPreviousPage() {
        this.currentPage--;
      this.$emit('pagechanged', this.currentPage);
    },
    onClickPage(page) {
        this.currentPage= page
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
        this.currentPage++;
      this.$emit('pagechanged', this.currentPage);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  list-style: none;
  text-align: center;
  justify-content: center;
  margin-top: 30px;
}
.page-item {
  margin: 0 4px;
}
.pageActive {
  background: linear-gradient(to top,#f48b03,#c87100);
}
button {
  padding: 10px;
  border: none;
  cursor: pointer;
  border: 1px solid #ccc;
  display: block;
  color: #f2f2f2;
  font-size: 20px;
  text-shadow: 1px 0 0 #101011;
  padding: 10px 20px;
  border-radius: 2px;
  background: linear-gradient(to top,#434345,#2f3032);
  text-decoration: none;
}
button:disabled {
  opacity: 0.85;
  color: #ccc;
}
</style>