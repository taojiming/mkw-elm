<template>
    <div class="goods">
        <scroll class="wrapper" :pull-up-load=true :probe-type=3>
            <div class="menu-wrapper">
                <ul>
                    <li class="menu-item" v-for="(item,index) in goods" :key=index>
                        <span class="text">
                            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
                            {{item.name}}
                        </span>
                    </li>
                </ul>
            </div>    
        </scroll>
        <scroll class="wrapper" :pull-up-load=true :probe-type=3>
            <div class="foods-wrapper">
                    <ul>
                        <li v-for="(item,index) in goods" class="food-list" :key=index>
                            <h1 class="title">{{item.name}}</h1>
                            <ul>
                                <li v-for="(food,index) in item.foods" class="food-item" :key=index>
                                    <div class="icon">
                                        <img :src="food.icon" class="img_icon" srcset="">
                                    </div>
                                    <div class="content">
                                        <h2 class="name">{{food.name}}</h2>
                                        <p class="desc">{{food.description}}</p>
                                        <div class="extra">
                                            <span>月售{{food.sellCount}}份</span>
                                            <span class="rating">好评率{{food.rating}}%</span>
                                        </div>
                                        <div class="price">
                                            <span class="newPrice">￥{{food.price}}</span>
                                            <span v-show="food.oldPrice" 
                                            class="oldPrice">￥{{food.oldPrice}}</span>
                                            <div class="cartcontrol-wrapper">
                                                <cart-control :food="food"></cart-control>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
            </div> 
        </scroll>
        <Shopcart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice" :selectfoods="selectfoods"></Shopcart>
        
    </div>
</template>

<script>
import { getGoods } from '../../network/index'
import Scroll from 'components/betterScroll/Scroll'
import Shopcart from 'components/shopcart/Shopcart' //购物车
import CartControl from 'components/cartcontrol/CartControl' //购物车添加减少按钮
const ERR_OK = 0
export default {
    data() {
        return {
            goods: [],
        }
    },
    props: {
        seller: {
            type: Object
        }
    },
    components: {
        Scroll,
        Shopcart,
        CartControl
    },
    created() {
        // 从服务器请求数据
        this._getGoods();
        this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    },
    computed: {
        selectfoods() {
            console.log(this)
            let foods = [];
            this.goods.forEach( good => {
                    good.foods.forEach( food => {
                        if(food.count){
                            foods.push(food)
                        }
                })
            })
            return foods
        }
    },
    methods: {
        _getGoods() {
            return getGoods().then(res => {
                console.log(res.data)
                if(res.errno === ERR_OK){
                    this.goods = res.data
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "../../common/stylus/mixin.styl"
    .goods
        display flex
        position absolute
        top 174px
        bottom 46px
        width 100%
        background-color #f3f5f7
        overflow hidden
        .menu-wrapper
            flex 0 0 80px
            .menu-item
                display table
                height 54px
                width 56px
                line-height 14px
                padding 0 12px
                .icon
                    display: inline-block
                    vertical-align: top
                    width: 12px
                    height: 12px
                    margin-right: 2px
                    background-size: 12px 12px
                    background-repeat: no-repeat
                    &.decrease
                        bg-image('decrease_3')
                    &.discount
                        bg-image('discount_3')
                    &.guarantee
                        bg-image('guarantee_3')
                    &.invoice
                        bg-image('invoice_3')
                    &.special
                        bg-image('special_3')
                .text
                    display table-cell
                    width 56px
                    vertical-align middle
                    font-size 12px
                    border-1px(rgba(7,17,27,0.1))
        .foods-wrapper
            flex 1
            .title
                padding-left 14px
                height 26px
                line-height 26px
                border-left 2px solid #d9dde1
            .food-item
                display flex
                width 100%
                padding 18px
                background-color #fff
                border-bottom 1px solid rgba(7,17,27,.1)
                &:last-child
                    border-bottom 0
                .icon
                    .img_icon
                        flex 0 0 57px
                        width 57px
                        height 57px
                .content
                    margin-left 10px
                    flex 1
                    .name
                        margin 2px 0 8px
                        font-size 14px
                        color rgb(7,17,27)
                        height 14px
                        line-height 14px
                    .desc
                        margin-bottom 8px
                        font-size 10px
                        color rgb(147,153,159)
                        line-height 10px
                    .extra
                        font-size 10px
                        color rgb(147,153,159)
                        line-height 10px
                        .rating
                            margin-left 12px
                    .price
                        position relative
                        margin-top 8px
                        .newPrice
                            font-size 10px
                            color rgb(240,20,20)
                            font-weight 700
                            line-height 24px
                            margin-right 8px
                        .oldPrice
                            text-decoration line-through
                            font-size 10px
                            color rgb(147,153,159)
                            font-weight 700
                            line-height 24px
                        .cartcontrol-wrapper
                            position absolute
                            right 36px
                            bottom 0
</style>
