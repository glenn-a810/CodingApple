<template>
  <!--  <div v-if="modalState === true" class="black-bg">-->
  <!--    <div class="white-bg">-->
  <!--      <img :src="products[productsId].image" alt="image" class="room-img" />-->
  <!--      <h4>{{ products[productsId].title }}</h4>-->
  <!--      <p>{{ products[productsId].content }}</p>-->
  <!--      <p>{{ products[productsId].price }}만원</p>-->
  <!--      <button @click="modalState = false">닫기</button>-->
  <!--      <Discount />-->
  <!--    </div>-->
  <!--  </div>-->

  <!--  <div class="start" :class="{ end: modalState }">-->
  <!--    <Modal-->
  <!--      :products="products"-->
  <!--      :productsId="productsId"-->
  <!--      :modalState="modalState"-->
  <!--      @closeModal="modalState = false"-->
  <!--    />-->
  <!--  </div>-->

  <transition name="fade">
    <Modal
      :products="products"
      :productsId="productsId"
      :modalState="modalState"
      @closeModal="modalState = false"
    />
  </transition>

  <div class="menu">
    <a v-for="menuTitle in menus" :key="menuTitle">
      {{ menuTitle }}
    </a>
  </div>

  <Discount />

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortInit">초기화</button>

  <!--  <div v-for="rooms in products" :key="rooms.id">-->
  <!--    <img :src="rooms.image" alt="image" class="room-img" />-->
  <!--    <h4-->
  <!--      @click="-->
  <!--        modalState = true;-->
  <!--        productsId = rooms.id;-->
  <!--      "-->
  <!--    >-->
  <!--      {{ rooms.title }}-->
  <!--    </h4>-->
  <!--    <p>{{ rooms.price }}만원</p>-->
  <!--  </div>-->
  <List
    v-for="(rooms, i) in products"
    :key="rooms"
    :products="products[i]"
    @openModal="
      modalState = true;
      productsId = $event;
    "
  />
</template>

<script>
import roomData from "./assets/roomData";
import Discount from "@/components/Discount";
import Modal from "@/components/Modal";
import List from "@/components/List";

export default {
  name: "App",
  data: () => ({
    productsOriginal: [...roomData],
    products: roomData,
    productsId: 0,
    menus: ["Home", "Products", "About"],
    // reportCount: [0, 0, 0, 0, 0, 0],
    modalState: false,
  }),
  methods: {
    priceSort() {
      this.products.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    sortInit() {
      this.products = [...this.productsOriginal];
    },
  },
  components: {
    Discount,
    Modal,
    List,
  },
};
</script>

<style>
#app {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
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

/*.start {*/
/*  opacity: 0;*/
/*  transition: all 1s;*/
/*}*/

/*.end {*/
/*  opacity: 1;*/
/*}*/

.fade-enter-from {
  /*opacity: 0;*/
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  /*opacity: 1;*/
  transform: translateY(0px);
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
</style>
