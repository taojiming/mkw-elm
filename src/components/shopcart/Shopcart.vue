<template>
    <div class="shopcart">
        <div class="content">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo" :class="{'hightlight':totalCount>0}">
                        <i class="icon-shopping_cart" :class="{'hightlight':totalCount>0}" width="44" height="44"></i>
                    </div>
                    <!-- 选中商品的数量 -->
                    <div class="num" v-show="totalCount>0">{{totalCount}}</div>
                </div>
                <div class="price" :class="{'hightlight':totalPrice>0}">￥{{totalPrice}}</div>
                <div class="desc" @click="cartList">另需配送费 ￥{{deliveryPrice}}元</div>
            </div>
            <div class="content-right">
                <div class="pay" :class="[payClass]">
                    {{payDesc}}
                </div>
            </div>
        </div>
        <!-- 购物车小球动画 -->
        <div class="ball-container">
        </div>

        <!-- cartList 购物车详情页 -->
        <div class="shopcart-list" v-show="listShow">
            <div class="list-header">
                <div class="title">购物车</div>
                <span class="empty">清空</span>
            </div>
            <div class="list-content">
                <ul>
                    <li class="food" v-for="(food,index) in selectfoods" :key=index>
                        <span class="name"></span>
                        <div class="price">
                            <span>￥{{food.price * food.count}}</span>
                        </div>
                        <div class="cartcontrol-wrapper">
                            <cartcontrol :food="food"></cartcontrol>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import CartControl from 'components/cartcontrol/CartControl'
export default {
    props: {
        // 选择的食物
        selectfoods: {
            type: Array,
            default() {
                return []
            }
        },
        deliveryPrice: {
            type: Number,
            default: 0
        },
        minPrice: {
            type: Number,
            default: 0
        }
    },
    components: {
        CartControl
    },
    computed: {
        // 总价格
        totalPrice() {
            let total = 0
            this.selectfoods.forEach(food => {
                total += food.price * food.count
            })
            return total
        },
        totalCount() {
            let count = 0
            this.selectfoods.forEach(food => {
                count += food.count
            })
            return count
        },
        // 根据商品的总价格判断显示对应的文字内容
        payDesc() {
            if (this.totalCount ===0){
                return `￥${this.minPrice}起送`
            } else if(this.totalPrice < this.minPrice){
                return `还差￥${this.minPrice - this.totalPrice}起送`
            } else{
                return `去结算`
            }
        },
        // 根据商品的价格显示对应的类名
        payClass() {
            if(this.totalPrice<20){
                return `not-enough`
            } else{
                return 'enough'
            }
        }
    },
    methods: {
        cartList() {
        }
    }
}
</script>

<style lang="stylus" scoped>
    .shopcart
        position fixed
        left 0
        bottom 0
        width 100%
        height 48px
        padding-left 12px
        z-index 50
        background-color #141d27
        .content
            display flex
            .content-left
                flex 1
                .logo-wrapper
                    display inline-block
                    position relative
                    top -10px
                    margin 0 12px
                    padding 6px
                    width 56px
                    height 56px
                    box-sizing border-box
                    vertical-align top
                    border-radius 50%
                    background #141d27
                    .logo
                        // 高亮
                        &.hightlight
                            background rgb(0,160,220)
                        width 100%
                        height 100%
                        border-radius 50%
                        background #2b343c
                        text-align center
                        .icon-shopping_cart
                            &.hightlight
                                color rgb(255,255,255)
                            line-height 44px
                            font-size 24px
                            color #00858a
                    .num
                        position absolute
                        top 0 
                        right 0
                        width 24px
                        height 16px
                        padding 0 6px
                        background  rgb(240,20,20)
                        color rgb(255,255,255)
                        line-height 16px
                        text-align center
                        font-size 9px
                        font-weight 700
                        z-index 99
                        border-radius 16px
                        box-sizing border-box
                        box-shadow 0 4px 8px 0 rgba(0,0,0,0.4)
                .price
                    display inline-block
                    vertical-align top
                    margin-top 12px
                    padding-right 12px
                    border-right 1px solid rgba(255,255,255,0.1)
                    line-height 24px
                    font-size 16px
                    font-weight 700
                    color rgba(255,255,255,0.5)
                    box-sizing border-box
                    &.hightlight
                            color rgb(255,255,255)
                .desc
                    display inline-block
                    vertical-align top
                    margin 12px 0 0 12px
                    font-size 10px
                    color rgba(255,255,255,0.4)
                    line-height 24px
            .content-right
                flex 0 0 105px
                width 100%
                .pay
                    width 100%
                    height 48px
                    line-height 48px
                    text-align center
                    font-size 12px
                    color rgba(255,255,255,0.4)
                    font-weight 700
                    background #2b333b
                    &.not-&.enough
                        background #2b333b
                    &.enough
                        background #00b43c
                        color #fff
</style>