<template>
  <div class="menu">
    <a v-for="menuTitle in menus" :key="menuTitle">
      {{ menuTitle }}
    </a>
  </div>

  <div>
    <img src="./assets/room0.jpg" alt="room0" class="room-img" />
    <h4>{{ products[0] }}</h4>
    <p>{{ price[0] }}만원</p>
    <button @click="increment(0)">허위매물신고</button>
    <span> 신고수 : {{ reportCount[0] }}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" alt="room1" class="room-img" />
    <h4>{{ products[1] }}</h4>
    <p>{{ price[1] }}만원</p>
    <button @click="increment(1)">허위매물신고</button>
    <span> 신고수 : {{ reportCount[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" alt="room2" class="room-img" />
    <h4>{{ products[2] }}</h4>
    <p>{{ price[2] }}만원</p>
    <button @click="increment(2)">허위매물신고</button>
    <span> 신고수 : {{ reportCount[2] }}</span>
  </div>

  <hr />

  <div v-for="(productsTitle, i) in products" :key="i">
    <h4>{{ productsTitle }}</h4>
    <p>{{ price[i] }}만원</p>
    <button @click="increment(i)">허위매물신고</button>
    <span> 신고수 : {{reportCount[i]}}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    products: ["삼평동 원룸", "백현동 원룸", "판교동 원룸"],
    price: ["60", "70", "80"],
    menus: ["Home", "Products", "About"],
    reportCount: [0, 0, 0],
  }),
  methods: {
    increment(n) {
      this.reportCount[n]++
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
</style>
