<template>
    <!-- 모달 -->
    <div class="black-bg" v-if="modalOpen === true">
        <div class="white-bg">
            <img :src="products[userSelect].image" class="room-img" />
            <h4>{{ products[userSelect].title }}</h4>
            <p>{{ products[userSelect].content }}</p>
            <p>{{ products[userSelect].price }}원</p>
            <!-- <button @click="modalOpen = false">닫기</button> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        products: Array,
        modalOpen: Boolean,
        userSelect: Number,
    }
}
</script>

<style>

</style>