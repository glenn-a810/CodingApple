<template>
  <div v-if="modalState === true" class="black-bg">
    <div class="white-bg">
      <img :src="products[productsId].image" alt="image" class="room-img" />
      <h4>{{ products[productsId].title }}</h4>
      <p>{{ products[productsId].content }}</p>
      <p>{{ products[productsId].price }}만원</p>
      <button @click="$emit('closeButton')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    products: Array,
    productsId: Number,
    modalState: Boolean,
  },
};
</script>

<style></style>
