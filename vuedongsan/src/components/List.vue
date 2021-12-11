<template>
  <div v-for="rooms in products" :key="rooms.id">
    <img :src="rooms.image" alt="image" class="room-img" />
    <!--    <h4-->
    <!--      @click="-->
    <!--        modalState = true;-->
    <!--        productsId = rooms.id;-->
    <!--      "-->
    <!--    >-->
    <h4>
      {{ rooms.title }}
    </h4>
    <p>{{ rooms.price }}만원</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    products: Array,
    productsId: Number,
  },
};
</script>

<style></style>
