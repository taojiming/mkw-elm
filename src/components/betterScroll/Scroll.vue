<template>
    <div class="content" ref="content">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            //1.创建BScroll对象
            this.scroll = new BScroll(this.$refs.content, {
                //click属性主要是对div span 起作用
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            })
            //2.监听滚动的区域
            if (this.probeType) {
                this.scroll.on('scroll', (position) => {
                    this.$emit('scroll', position)
                })
            }
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })
        },
        methods: {
            scrollTo(x, y, time = 500) {
                this.scroll && this.scroll.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.scroll && this.scroll.finishPullUp()
            },
            refresh() {
                this.scroll && this.scroll.refresh()
            },
            getScrollY() {
                return this.scroll ? this.scroll.y : 0
            }
        }
    }
</script>

<style scoped>

</style>