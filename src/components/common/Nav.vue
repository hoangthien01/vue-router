<template>
  <div class="nav">
    <div class="left-nav">
      <div class="bg" @click="$router.push('/home')">
        <p><span>nu</span>ntium.</p>
      </div>
      <div class="arrow-down" @click="showNavbar">
        <i class="fas fa-sort-down"></i>
      </div>
      <div class="nav-content animate__animated animate__fadeIn" ref="navbar">
        <ul>
          <li @click="$router.push('/home')">Home</li>
          <li @click="$router.push('/blogs')">Blogs</li>
          <li @click="$router.push('/about')">About</li>
        </ul>
      </div>
    </div>
    <div class="right-nav">
      <div class="search-contain">
        <!-- <input
          type="text"
          class="search animate__animated animate__fadeIn"
          v-show="typing"
        /> -->
        <i class="fas fa-search search-icon" @click="toggle"></i>
      </div>
      <slot>
        <router-link to="/auth/login">
          <button class="login">
            <p>Login</p>
          </button>
        </router-link>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      typing: false,
    };
  },
  methods: {
    toggle() {
      this.typing = !this.typing;
    },
    showNavbar () {
      if(this.$refs.navbar.style.display === 'block') {
         this.$refs.navbar.style.display = 'none'
      } else
        this.$refs.navbar.style.display = 'block'
    }
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  height: 57px;
  width: 100%;
  left: 0;
  padding: 31px 0 0;
  box-sizing: content-box;
}
.left-nav {
  position: relative;
  width: 465px;
  height: 57px;
  display: flex;
}
.bg {
  width: 58px;
  height: 57px;
  background-color: #000;
  position: relative;
  cursor: pointer;
}
.bg p {
  position: absolute;
  display: block;
  z-index: 10000;
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 57px;
  width: 162px;
  margin-left: 23px;
}
.bg p span {
  color: #fff;
}
.nav-content {
  display: block;
  position: absolute;
  left: 180px;
  height: 100%;
}
.nav-content ul {
  display: flex;
  list-style: none;
  font-size: 24px;
  line-height: 57px;
  align-items: center;
}
.nav-content ul li {
  padding: 0 20px;
  cursor: pointer;
}
.nav ul li:hover {
  text-decoration: underline;
}
.right-nav {
  position: relative;
  height: 57px;
  display: flex;
  align-items: center;
}

.search {
  font-size: 20px;
  width: 363px;
  padding: 10px 20px;
  color: #000;
  margin-right: 20px;
  border: 2px solid #1c1c1c;
  border-radius: 10px;
  outline: none;
}
.arrow-down {
  left: 150px;
  position: absolute;
  top: 0;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
  display: none;
  z-index: 10000;
}
.arrow-down i {
  font-size: 30px;
  height: 100%;
  line-height: 55px;
}
.search-icon {
  position: absolute;
  font-size: 25px;
  top: 10px;
  right: 169px;
  line-height: 40px;
  cursor: pointer;
}
.login {
  font-family: Libre Baskerville;
  right: 0;
  cursor: pointer;
  width: 125px;
  height: 42px;
  background-color: transparent;
  border-radius: 10px;
  font-size: 20px;
  position: relative;
}
.login:before {
  content: "";
  position: absolute;
  display: block;
  height: 108%;
  width: 0;
  background-color: #000;
  top: -2px;
  left: -2px;
  z-index: -1;
  border-radius: 10px;
}
.login:hover {
  transform: scale(0.9);
  color: #fff;
  transition-duration: 0.3s;
}
.login:hover.login:before {
  width: 102.5%;
  transition-duration: 0.3s;
}
@media (max-width: 767.98px) { 
.left-nav {
  display: block;
}
.nav-content {
  left: 0;
  width: 100%;
  max-width: 300px;
  z-index: 100000;
  background-color: #ccc;
  height: auto;
  display: none;
  border-radius: 5px;
}
.nav-content ul {
  display: block;

}
.arrow-down {
  display: block;
}
 }

 @media (max-width: 576px) {  
.search-contain {
  display: none;
}
 }
</style>
