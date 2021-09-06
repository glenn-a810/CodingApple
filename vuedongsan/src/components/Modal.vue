<template>
    <!-- 모달 -->
    <div class="black-bg" v-if="modalOpen === true">
        <div class="white-bg">
            <img :src="products[userSelect].image" class="room-img" />
            <h4>{{ products[userSelect].title }}</h4>
            <p>{{ products[userSelect].content }}</p>
            <input v-model.number="month">
            <p>{{month}}개월 선택 : {{ products[userSelect].price * month }}원</p>
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
    props: {
        products: Array,
        modalOpen: Boolean,
        userSelect: Number,
    }
}
</script>

<style>

</style>