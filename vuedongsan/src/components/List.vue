<template>
  <!-- 내용 -->
  <div>
    <div>
      <!-- <img :src="contents[contentsId].image" class="room-img" />
        <h4 @click="modalOpen = true">{{ contents[contentsId].title }}</h4>
        <p>{{ contents[contentsId].price }}원</p> -->
      <img :src="products.image" class="room-img" />
      <h4>
        {{ products.title }}
      </h4>
      <p>{{ products.price }}원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    products: Object,
  },
}
</script>

<style></style>
