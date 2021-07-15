<template>
  <div class="sidebar">
    <div class="bg">
      <p><span>nu</span>ntium.</p>
    </div>
    <ul class="navigation">
      <treeFolder class="navigation-item" :data="item" v-for="(item,index) in treeData" :key="index">
      </treeFolder>
    </ul>
    <button class="logout" @click="$router.push('/home')">Logout</button>
  </div>
</template>

<script>
import treeFolder from "./Tree-folder.vue"
export default {
  name: "Sidebar",
  data() {
    return {
      treeData : [
                {
                    content: 'Dashboard',
                    image: require('../../assets/image/grid1.png'),
                    child : [
                    ],
                },
                {
                    content: 'Profile',
                    image: require('../../assets/image/user.png'),
                    child: [
                    ]
                },
                {
                    content: 'Write a post',
                    image: require('../../assets/image/edit.png'),
                    child: [
                    ]
                },
                {
                    content: 'All Posts',
                    image: require('../../assets/image/book-open.png'),
                    child: [
                    ]
                },
                 {
                    content: 'Resources',
                    image:require( '../../assets/image/box.png'),
                    child: [
                    ]
                },
                 {
                    content: 'Settings',
                    image: require('../../assets/image/settings.png'),
                    child: [
                    ]
                },
                 {
                    content: 'Settings',
                    image: require('../../assets/image/help-circle.png'),
                    child: [
                    ]
                },
            ]
        }
  },
  components: {
        treeFolder,
  }
}
</script>

<style scoped>
.sidebar {
  width: 225px;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #3b3f44;
  position: fixed;
}

.bg {
  width: 58px;
  height: 57px;
  background-color: #fff;
  position: relative;
  margin: 30px 0 0 30px;
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
  color: #fff;
  letter-spacing: 1.2px;
}
.bg p span {
  color: #000;
}
.navigation {
  margin-top: 60px;
}
.navigation-item {
  font-size: 20px;
  line-height: 22px;
  padding: 17px 30px;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.navigation-item:hover {
  background: #545a61;
}

.logout {
  background-color: transparent;
  width: 70px;
  height: 30px;
  right: 77.5px;
  top: 650px;
  position: absolute;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
</style>