<template>
  <!-- 모달 -->
  <div class="black-bg" v-if="modalOpen === true">
    <div class="white-bg">
      <img :src="products[userSelect].image" class="room-img" />
      <h4>{{ products[userSelect].title }}</h4>
      <p>{{ products[userSelect].content }}</p>
      <input v-model.number="month" />
      <p>{{ month }}개월 선택 : {{ products[userSelect].price * month }}원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      month: 1,
    }
  },
  watch: {
    month(userInput) {
      if (isNaN(userInput) == true) {
        alert('숫자만 입력할 수 있습니다.')
        this.month = 1
      }
      // else if(userInput == 2) {
      //   alert('아 안팔아요')
      // }
    },
  },
  updated() {
    if(this.month == 2) {
      alert('안팔아요')
    }
  },
  props: {
    products: Array,
    modalOpen: Boolean,
    userSelect: Number,
  },
}
</script>

<style></style>
