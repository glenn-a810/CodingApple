<template>
  <div v-if="modalState === true" class="black-bg">
    <div class="white-bg">
      <h4>상태창</h4>
      <p>상세페이지 내용</p>
      <button @click="modalState = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="menuTitle in menus" :key="menuTitle">
      {{ menuTitle }}
    </a>
  </div>

  <!--  <div>-->
  <!--    <img src="./assets/room0.jpg" alt="room0" class="room-img" />-->
  <!--    <h4 @click="modalState = true">{{ products[0] }}</h4>-->
  <!--    <p>{{ price[0] }}만원</p>-->
  <!--    <button @click="increment(0)">허위매물신고</button>-->
  <!--    <span> 신고수 : {{ reportCount[0] }}</span>-->
  <!--  </div>-->
  <!--  <div>-->
  <!--    <img src="./assets/room1.jpg" alt="room1" class="room-img" />-->
  <!--    <h4 @click="modalState = true">{{ products[1] }}</h4>-->
  <!--    <p>{{ price[1] }}만원</p>-->
  <!--    <button @click="increment(1)">허위매물신고</button>-->
  <!--    <span> 신고수 : {{ reportCount[1] }}</span>-->
  <!--  </div>-->
  <!--  <div>-->
  <!--    <img src="./assets/room2.jpg" alt="room2" class="room-img" />-->
  <!--    <h4 @click="modalState = true">{{ products[2] }}</h4>-->
  <!--    <p>{{ price[2] }}만원</p>-->
  <!--    <button @click="increment(2)">허위매물신고</button>-->
  <!--    <span> 신고수 : {{ reportCount[2] }}</span>-->
  <!--  </div>-->

  <!--  <hr />-->

  <div v-for="rooms in products" :key="rooms.id">
    <img :src="rooms.image" alt="image" class="room-img" />
    <h4 @click="modalState = true">{{ rooms.title }}</h4>
    <p>{{ rooms.price }}만원</p>
  </div>
</template>

<script>
import roomData from "./assets/roomData";

export default {
  name: "App",
  data: () => ({
    // products: ["삼평동 원룸", "백현동 원룸", "판교동 원룸"],
    products: roomData,
    price: ["60", "70", "80"],
    menus: ["Home", "Products", "About"],
    reportCount: [0, 0, 0, 0, 0, 0],
    modalState: false,
  }),
  methods: {
    increment(n) {
      this.reportCount[n]++;
    },
  },
  components: {},
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
