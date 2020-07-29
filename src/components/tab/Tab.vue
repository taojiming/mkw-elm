<template>
    <div class="tab">
        <div class="tab-item" @click="itemClick">商品</div>
        <div class="tab-item" @click="itemClick2">评论</div>
        <div class="tab-item" @click="itemClick3">商家</div>
    </div>
</template>

<script>
export default {
    methods: {
        itemClick() {
            this.$router.push('/goods')
        },
        itemClick2() {
            this.$router.push('/ratings')
        },
        itemClick3() {
            this.$router.push('/seller')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .tab
        display flex
        width 100%
        height 40px
        color rgb(77,85,93)
        .tab-item
            flex 1
            line-height 28px
            text-align center
            // &.router-link-active
            //     color rgb(240,20,20)    
</style>
