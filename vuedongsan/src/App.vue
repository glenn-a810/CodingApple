<template>
  <div class="menu">
    <a v-for="menuTitle in menus" :key="menuTitle">
      {{ menuTitle }}
    </a>
  </div>

  <div>
    <h4>{{ products[0] }}</h4>
    <p>{{ price[0] }}만원</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ price[1] }}만원</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>{{ price[2] }}만원</p>
  </div>

  <hr />

  <div>

  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    products: ["삼평동 원룸", "백현동 원룸", "판교동 원룸"],
    price: ["60", "70", "80"],
    menus: ["Home", "Products", "About"],
  }),
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
</style>
