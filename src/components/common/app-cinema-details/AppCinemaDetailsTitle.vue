<template>
    <section class="app-cinema-details-title">
        <div class="cinema-nav swiper-container swiper-container-horizontal">
            <div class="post-bg-filter"></div>
            <swiper :options="swiperOption" ref="mySwiper">

                <!-- slides -->
                <!-- slides -->
                <swiper-slide v-for="cinema in info.showData.movies" :key="cinema.id">
                    <div class="post"> <img width="100%" class="img-item" :src="cinema.img | changeImg('148.108') ">
                        <i></i>
                    </div>
                </swiper-slide>
                <!-- Optional controls -->

            </swiper>
        </div>
        
        <app-cinema-details-info 
        :info = "cinemas"
        >
        </app-cinema-details-info>
        <app-cinema-details-tuan>

        </app-cinema-details-tuan>
    </section>
</template>

<script>
import AppCinemaDetailsInfo from "@com/common/app-cinema-details/AppCinemaDetailsInfo";
import AppCinemaDetailsTuan from "@com/common/app-cinema-details/AppCinemaDetailsTuan";
export default {
    props: ["info"],
    components: {
        AppCinemaDetailsInfo,
        AppCinemaDetailsTuan
    },
    data() {
        return {
            //sweipr 参数
            swiperOption: { //这里指的就是swiper  
                slidesPerView: 4, //一页显示多少
                centeredSlides: true, //开始剧中显示
                spaceBetween: 50, //每个间隔
                effect: "coverflow",
                coverflowEffect: {
                    rotate: 0,
                    stretch: 10,
                    depth: 70
                },
                slideToClickedSlide: true, //点击剧中
                on: {
                    //滑动结束时触发
                    slideChangeTransitionEnd: this.getItemNUm //为了把滑动结束之后的index 传出去 在这里调用vue 外面的方法 
                }
            },
            index: 0 //先定义一个默认值
        };
    },
    methods:{
        getItemNUm () {
            this.index = this.swiper.activeIndex  //把滑动之后的 activeIndex 传入进来
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        },
        cinemas () {
            return this.info.showData.movies[this.index]  //通过计算属性 处理好对应的图片的数据 然后 cinemas 就有了想要的数据
        }
    }
    // mounted() {
    //     // current swiper instance
    //     // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //     // console.log("this is current swiper instance object", this.swiper);
    //     // this.swiper.slideTo(3, 1000, false);
    // }
};
</script>

<style lang="scss" >
.img-item {
    height: 2.906667rem;
}
.swiper-slide .post img {
    height: 2.533333rem;
    -webkit-transform: scale(1);
    transform: scale(1);
}
.swiper-slide-active .post {
    border: 0.053333rem solid #fff;
}
.post-bg-filter {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #40454d;
    opacity: 0.55;
}
.cinema-nav {
    padding: 0.533333rem 0.4rem 0.533333rem 0.133333rem;
}
.swiper-container {
    padding: 0.266667rem 0.133333rem 0.266667rem 0 !important;
}
.cinema-nav .swiper-slide.swiper-slide-active .post i {
    content: "";
    position: absolute;
    bottom: -0.106667rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 0.266667rem;
    height: 0.133333rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwODIyNEEwNTkwRDExRTZBNkMwOTE1NDA0RjA5MDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMwODIyNEExNTkwRDExRTZBNkMwOTE1NDA0RjA5MDA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzA4MjI0OUU1OTBEMTFFNkE2QzA5MTU0MDRGMDkwMDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzA4MjI0OUY1OTBEMTFFNkE2QzA5MTU0MDRGMDkwMDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kjYk3AAAAVUlEQVR42qzMMQ7AIAwEwSvy8P25EwokZNkYCFcgCu/IzLB7Q9+jS2gz1MG/KN0ZwVOU0fDgLorvI3AVJWozsELJuhmYocyaCvQo1f2jeiT/cK8AAwBzvH2t7aaajQAAAABJRU5ErkJggg==);
    background-size: contain;
}
</style>


