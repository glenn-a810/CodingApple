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
        <h4>상세페이지</h4>
        <p>상세페이지 내용</p>
        <button @click="modalOpen = false">닫기</button>
      </div>
    </div>

    <!-- 메뉴 -->
    <div class="menu">
      <a v-for="(topMenu, menuId) in menus" :key="menuId">{{ topMenu }}</a>
    </div>
    <!-- <div v-for="(contents, contentsId) in products" :key="contentsId">
      <h4>{{contents}}</h4>
      <p>{{price[contentsId]}}</p>
    </div> -->

    <!-- 내용 -->
    <div>
      <img src="./assets/room0.jpg" class="room-img">
      <h4 @click="modalOpen = true">{{ products[0] }}</h4>
      <p>{{ price[0] }} 만원</p>
      <button @click="[fake[0]++, $forceUpdate()]">허위매물신고</button>
      <span>신고수 : {{ fake[0] }}</span>
    </div>
    <div>
      <img src="./assets/room1.jpg" class="room-img">
      <h4 @click="modalOpen = true">{{ products[1] }}</h4>
      <p>{{ price[1] }} 만원</p>
      <button @click="[fake[1]++, $forceUpdate()]">허위매물신고</button>
      <span>신고수 : {{ fake[1] }}</span>
    </div>
    <div>
      <img src="./assets/room2.jpg" class="room-img">
      <h4 @click="modalOpen = true">{{ products[2] }}</h4>
      <p>{{ price[2] }} 만원</p>
      <button @click="[fake[2]++, $forceUpdate()]">허위매물신고</button>
      <span>신고수 : {{ fake[2] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      modalOpen: false,
      fake: [0, 0, 0],
      price: ['1000/120', '1000/130', '1000/110'],
      products: ['역삼동원룸', '삼평동원룸', '백현동원룸'],
      menus: ['Home', 'Shop', 'About'],
    }
  },

  methods: {
    fakeCopy() {
      const copyFake = [...this.fake]
      copyFake[0]++
      this.fake = copyFake
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
  background: rgba(0,0,0,0.5);
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
