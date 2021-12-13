<template>
  <div>
    <img :src="products.image" alt="image" class="room-img" />
    <!--    <h4-->
    <!--      @click="-->
    <!--        modalState = true;-->
    <!--        productsId = rooms.id;-->
    <!--      "-->
    <!--    >-->
    <h4 @click="openModal">
      {{ products.title }}
    </h4>
    <p>{{ products.price }}만원</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    products: Object,
  },
  methods: {
    openModal() {
      this.$emit('openModal', this.products.id)
    }
  }
};
</script>

<style></style>
