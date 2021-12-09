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
  <Modal />

  <div class="menu">
    <a v-for="menuTitle in menus" :key="menuTitle">
      {{ menuTitle }}
    </a>
  </div>

  <Discount />

  <div v-for="rooms in products" :key="rooms.id">
    <img :src="rooms.image" alt="image" class="room-img" />
    <h4
      @click="
        modalState = true;
        productsId = rooms.id;
      "
    >
      {{ rooms.title }}
    </h4>
    <p>{{ rooms.price }}만원</p>
  </div>
</template>

<script>
import roomData from "./assets/roomData";
import Discount from "@/components/Discount";
import Modal from "@/components/Modal";

export default {
  name: "App",
  data: () => ({
    products: roomData,
    productsId: 0,
    menus: ["Home", "Products", "About"],
    // reportCount: [0, 0, 0, 0, 0, 0],
    modalState: false,
  }),
  // methods: {
  //   increment(n) {
  //     this.reportCount[n]++;
  //   },
  // },
  components: {
    Discount,
    Modal,
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
</style>
