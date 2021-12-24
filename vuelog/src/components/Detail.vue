<template>
  <div>
    <h4>Detail Page</h4>
    <h5>{{ contents[$route.params.id].title }}</h5>
    <p>{{ contents[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Detail.vue",
  props: {
    contents: Array,
  },
};
</script>

<style scoped></style>
