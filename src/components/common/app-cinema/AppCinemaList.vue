<template>

<<<<<<< HEAD
 <router-link tag="div" :to ="{name: 'cinema-details', params: {id: info.id},}" class="app-cinemaList after-border" >
        <div class="item " :data-id='info.id'>
            <div class="title-block box-flex middle">
                <div class="title line-ellipsis">
                    <span>{{info.nm}}</span>
                    <span class="price-block">
                        <span class="price">{{info.sellPrice}}</span>
                        <span class="q">元起</span>
                    </span>
                </div>
                <div class="location-block box-flex">
                    <div class="flex line-ellipsis">{{info.addr}}</div>
                    <span class="distance">{{info.distance}}</span>
                </div>
                <div class="flex"></div>
                <div class="label-block">
                         <div class="allowRefund" v-if="info.tag.allowRefund===1">退</div>
                        <div class="endorse" v-if="info.tag.endorse===1">改签</div>
                        <div class="snack" v-if="info.tag.snack===1">小吃</div>
                        <div class="vipTag" v-if="info.tag.vipTag" >{{info.tag.vipTag}}</div>
                        <div class="hallType"  v-if="info.tag.hallType" v-for = "hallType in info.tag.hallType"  :key  = "hallType.index">{{hallType}}</div>
                </div>
                <div class="discount-block" v-if="info.promotion.cardPromotionTag">
                    <div >
                        <div class="discount-label normal card">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
                        </div>
                        <div class="discount-label-text" >{{info.promotion.cardPromotionTag}}</div>
                    </div>
                </div>
                <div class="min-show-block disabled " v-if="info.showTimes">
                    <span>近期场次：</span>
=======
        <router-link tag="div" :to="{name: 'cinema-details', params: {id: info.id},}" class="app-cinemaList after-border">
                <div class="item " :data-id='info.id'>
                        <div class="title-block box-flex middle">
                                <div class="title line-ellipsis">
                                        <span>{{info.nm}}</span>
                                        <span class="price-block">
                                                <span class="price">{{info.sellPrice}}</span>
                                                <span class="q">元起</span>
                                        </span>
                                </div>
                                <div class="location-block box-flex">
                                        <div class="flex line-ellipsis">{{info.addr}}</div>
                                        <span class="distance">{{info.distance}}</span>
                                </div>
                                <div class="flex"></div>
                                <div class="label-block">
                                        <div class="endorse" v-if="info.tag.endorse===1">改签</div>
                                        <div class="snack" v-if="info.tag.snack===1">小吃</div>
                                        <div class="vipTag" v-if="info.tag.vipTag">{{info.tag.vipTag}}</div>
                                        <!-- v-for = "hallType in info.hallType"  -->

                                        <div class="hallType" v-if="info.tag.hallType" v-for="hallType in info.tag.hallType" :key="hallType.index">{{hallType}}</div>
>>>>>>> 326e939656ed19b6c737851ba31fa8ffd1eaee5a

                                </div>
                                <div class="discount-block" v-if="info.promotion.cardPromotionTag">
                                        <div>
                                                <div class="discount-label normal card">
                                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
                                                </div>
                                                <div class="discount-label-text">{{info.promotion.cardPromotionTag}}</div>
                                        </div>
                                </div>
                                <div class="min-show-block disabled " v-if="info.showTimes">
                                        <span>近期场次：</span>

                                        <span class="time-line">{{info.showTimes}}</span>

                                </div>
                        </div>
                </div>
        </router-link>
</template>

<script>
export default {
  props: ["info"],
  //    methods: {
  //       goToDetail () {

  //           this.$router.push({ name: 'cinema-details',params: {id: this.info.id} })
  //       }
  //     }
};
</script>

<style lang="scss" >
.app-cinemaList {
  //   height: 3.293333rem;
  position: relative;
}

.app-cinemaList .item {
  padding: 0.33rem 0.4rem;
//   margin: 0 0.4rem;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  width: auto;
}
.app-cinemaList .title-block .title > span {
  height: 0.613333rem;
  line-height: 0.613333rem;
  font-size: 0.426667rem;
  color: #000;
}
.app-cinemaList .price-block .d,
.app-cinemaList .price-block .price,
.app-cinemaList .price-block .q {
  font-size: 0.293333rem;
  color: #f03d37;
}
.app-cinemaList .price-block {
  padding-top: 0.24rem;
  padding-left: 0.08rem;
}

.app-cinemaList .price-block .price {
  font-size: 0.426667rem;
}
.distance {
  width: auto;
}

.app-cinemaList .title-block .title {
  height: 0.613333rem;
  line-height: 0.613333rem;
  font-size: 0.426667rem;
  color: #000;
}
.app-cinemaList .line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 7.733333rem;
}

.app-cinemaList .location-block,
.app-cinemaList .price-block,
.app-cinemaList .title-block {
  line-height: 1.5;
}
.app-cinemaList .location-block {
  margin-top: 0.16rem;
  font-size: .346667rem;
  color: #666;
  display: flex;
  justify-content: space-between;
}
.app-cinemaList .title-block .label-block {
  line-height: 0.453333rem;
  margin-top: 0.106667rem;
//   margin-bottom: 0.106667rem;
  overflow: hidden;
  font-size: 0;
  flex-shrink: 0;
}
.app-cinemaList .discount-block {
  color: #999;
}
.title-block .label-block div.snack,
.title-block .label-block div.vipTag {
  color: #f90;
  border: 1px solid #f90;
}
.title-block .label-block .hallType,
.endorse,.allowRefund {
  color: #589daf;
  border: 1px solid #589daf;
}
.app-cinemaList .title-block .label-block > div {
  position: relative;
  display: inline-block;
  width: auto;
  padding: 0 0.08rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 0.053333rem;
  font-size: 0.32rem;
}
.app-cinemaList .discount-block .discount-label {
  width: 0.426667rem;
  height: 0.373333rem;
  position: relative;

  left: 0;
  display: inline-block;
}
.app-cinemaList .title-block .label-block > div + div {
  margin-left: 0.133333rem;
}
.app-cinemaList .discount-block .discount-label-text {
  margin-left: 0.133333rem;
  font-size: 0.293333rem;
  display: inline;
}

.app-cinemaList .min-show-block > span {
  font-size: 0.32rem;
  color: #999;
}
</style>


