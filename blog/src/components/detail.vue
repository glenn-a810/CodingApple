<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{ content[$route.params.id].title }}</h5>
    <p>{{ content[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    content: Array,
  },
}
</script>

<style></style>
