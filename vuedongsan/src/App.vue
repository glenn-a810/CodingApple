<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->

  <div id="app">
    <!-- 모달 Component -->
    <transition name="fade">
      <Modal
        @closeModal="modalOpen = false"
        :products="products"
        :modalOpen="modalOpen"
        :userSelect="userSelect"
      />
    </transition>

    <!-- 메뉴 -->
    <div class="menu">
      <a v-for="(topMenu, menuId) in menus" :key="menuId">{{ topMenu }}</a>
    </div>

    <!-- 배너 Component -->
    <Discount v-if="showDiscount == true" :discountRate="discountRate" />

    <!-- 정렬 -->
    <button @click="priceSort">가격순정렬</button>
    <button @click="sortReset">되돌리기</button>

    <!-- 내용 Component -->
    <List
      @openModal="
        modalOpen = true
        userSelect = $event
      "
      v-for="(product, productId) in products"
      :key="productId"
      :products="products[productId]"
    />
  </div>
</template>

<script>
import productData from './data/post.js'
import Discount from './components/Discount.vue'
import Modal from './components/Modal.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  data() {
    return {
      discountRate: 30,
      showDiscount: true,
      productsOriginal: [...productData],
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
    priceSort() {
      this.products.sort((a, b) => {
        return a.price - b.price
      })
    },
    sortReset() {
      this.products = [...this.productsOriginal]
    },
    discountTimer() {
      if (this.discountRate <= 30 && this.discountRate > 0) {
        setTimeout(() => {
          this.discountRate -= 1
          this.discountTimer()
        }, 1000)
      }
    },
  },

  mounted() {
    this.discountTimer()
  },

  components: {
    Discount, // Discount: Discount
    Modal, // Modal: Modal
    List, // List: List
  },
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

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
