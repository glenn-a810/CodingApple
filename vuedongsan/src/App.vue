<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->

  <div id="app">
    <!-- 모달 -->
    <div class="black-bg" v-if="modalOpen === true">
      <div class="white-bg">
        <img :src="products[userSelect].image" class="room-img" />
        <h4>{{ products[userSelect].title }}</h4>
        <p>{{ products[userSelect].content }}</p>
        <p>{{ products[userSelect].price }}원</p>
        <button @click="modalOpen = false">닫기</button>
      </div>
    </div>

    <!-- 메뉴 -->
    <div class="menu">
      <a v-for="(topMenu, menuId) in menus" :key="menuId">{{ topMenu }}</a>
    </div>

    <!-- 내용 -->
    <div v-for="(contents, contentsId) in products" :key="contentsId">
      <!-- <img :src="contents[contentsId].image" class="room-img" />
      <h4 @click="modalOpen = true">{{ contents[contentsId].title }}</h4>
      <p>{{ contents[contentsId].price }}원</p> -->
      <img :src="contents.image" class="room-img" />
      <h4
        @click="
          modalOpen = true
          userSelect = contentsId
        "
      >
        {{ contents.title }}
      </h4>
      <p>{{ contents.price }}원</p>
    </div>
    <!-- {{ log() }} -->
  </div>
</template>

<script>
import productData from './data/post.js'

export default {
  name: 'App',
  data() {
    return {
      userSelect: 0,
      modalOpen: false,
      fake: [0, 0, 0],
      price: ['1000/120', '1000/130', '1000/110'],
      menus: ['Home', 'Shop', 'About'],
      // products: [productData],
      products: productData,
    }
  },

  methods: {
    log() {
      console.log(this.products.length)
      console.log(this.products)
      console.log(this.products[0].title)
    },
  },
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
    Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.menu {
  background: #2c3e50;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
