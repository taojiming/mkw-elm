<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0"
                 @click=decreaseCart></div>
        </transition>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click="addCart"></div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
     
    props: {
        food: {
            type: Object
        }
    },
    methods: {
        addCart() {
            if(!this.food.count){
                // count 不是food中的属性，vue无法追踪并响应数据，所有利用Vue.set()方法添加响应式property
                Vue.set(this.food,'count',1);
            }else{
                this.food.count +=1;
            }
        },
        decreaseCart() {
            if(this.food.count){
                this.food.count--;
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .cartcontrol
        // font-size 0
        .move-enter-active,.move-leave-active {
            transition: all 0.5s linear
        }
        .move-enter,.move-leave-to {
            // 无法旋转
            opacity: 0
            transform: rotate(0)
            transform: translate3d(24px,0,0)
        }
        .cart-decrease
            display inline-block
            padding 6px
            line-height 24px
            font-size 24px 
            color rgb(0,160,220)
        .cart-count
            display inline-block
            vertical-align top
            width 12px
            padding-top 6px
            font-size 10px
            color rgb(147,153,159)
            line-height 24px
            text-align center
        .cart-add
            display inline-block
            padding 6px
            font-size 24px
            color rgb(0,160,220)
            line-height 24px
</style>