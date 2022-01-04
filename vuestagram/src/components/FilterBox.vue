<template>
  <div
    :class="filter + ' filter-item'"
    :style="`background-image: url(${uploadImage})`"
  >
    <button @click="selectFilter">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    uploadImage: String,
    filter: String,
  },
  methods: {
    selectFilter() {
      this.emitter.emit('selectFilter', 'filter');
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
