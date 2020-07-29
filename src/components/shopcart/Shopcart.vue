<template>
    <div class="shopcart">
        <div class="content">
            <div class="content-left">
                <div class="logo-wrapper">
                    <i class="logo"></i>
                </div>
                <div class="price">￥0</div>
                <div class="desc"></div>
            </div>
            <div class="content-right">abc</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    .shopcart
        position fixed
        left 0 
        bottom 48px
        width 100%
        height 48px
        z-index 50
        background-color #000
        .content
            display flex
            .content-left
                flex 1
                .price
                    padding 12px 12px 12px 18px
                    border-right 1px solid rgba(255,255,255,.1)
            .content-right
                flex 0 0 105px
</style>