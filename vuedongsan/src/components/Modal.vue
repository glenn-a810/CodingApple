<template>
  <div v-if="modalState === true" class="black-bg">
    <div class="white-bg">
      <img :src="products[productsId].image" alt="image" class="room-img" />
      <h4>{{ products[productsId].title }}</h4>
      <p>{{ products[productsId].content }}</p>
      <!--      <input @input="months = $event.target.value" />-->
      <input v-model="months" />
      <p>
        {{ months }}개월 선택 | {{ products[productsId].price * months }}만원
      </p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  // data: () => ({
  //   months: 1,
  // }),
  data() {
    return {
      months: 1,
    };
  },
  props: {
    products: Array,
    productsId: Number,
    modalState: Boolean,
  },
};
</script>

<style></style>
