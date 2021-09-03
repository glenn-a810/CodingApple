<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->
  <div id="app">
    <div class="menu">
      <a v-for="(topMenu, menuId) in menus" :key="menuId">{{ topMenu }}</a>
    </div>
    <!-- <div>
      <h4 v-for="(contents, contentsId) in products" :key="contentsId">
        {{ contents }}
      </h4>
      <p v-for="(price, priceId) in price" :key="priceId">{{ price }}</p>
    </div> -->
    <div v-for="(contents, contentsId) in products" :key="contentsId">
      <h4>{{contents}}</h4>
      <p>{{price[contentsId]}}</p>
    </div>
    <!-- <div>
      <h4>{{ products[0] }}</h4>
      <p>{{ price1 }} 만원</p>
    </div>
    <div>
      <h4>{{ products[1] }}</h4>
      <p>{{ price2 }} 만원</p>
    </div>
    <div>
      <h4>{{ products[2] }}</h4>
      <p>{{ price3 }} 만원</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      price: ['1000/120', '1000/130', '1000/110'],
      products: ['역삼동원룸', '삼평동원룸', '백현동원룸'],
      menus: ['Home', 'Shop', 'About'],
    }
  },
}
</script>

<style>
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
