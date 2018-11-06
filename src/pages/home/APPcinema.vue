<template>
  <section class="app-cinema">
    <div class="item mb-line-b" data-id="107" data-bid="dp_wx_home_cinema_list">
      <div class="title-block box-flex middle">
        <div class="title line-ellipsis">
          <span>中影国际影城(昌平永旺店)</span>
          <span class="price-block">
            <span class="price">34.9</span>
            <span class="q">元起</span>
          </span>
        </div>
        <div class="location-block box-flex">
          <div class="flex line-ellipsis">昌平区北清路1号永旺国际商城3楼</div>
          <span class="distance">7.2km</span>
        </div>
        <div class="flex"></div>
        <div class="label-block">
          <div class="snack">小吃</div>
          <div class="vipTag">折扣卡</div>
          <div class="hallType">DTS:X 临境音厅</div>
        </div>
        <div class="discount-block">
          <div>
            <div class="discount-label normal card">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
            </div>
            <div class="discount-label-text">开卡特惠，首单2张立减8元</div>
          </div>
        </div>
        <div class="min-show-block disabled ">
          <span>近期场次：</span>

          <span class="time-line">22:00</span>

        </div>

      </div>

    </div>

  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.app-cinema .item {
    padding: 0.346667rem 0.4rem 0.346667rem 0;
    margin-left: 0.4rem;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}
.app-cinema .price-block .d,
.app-cinema .price-block .price,
.app-cinema .price-block .q {
    font-size: 0.293333rem;
    color: #f03d37;
}
.app-cinema .price-block {
    padding-top: 0.24rem;
    padding-left: 0.08rem;
}

.app-cinema .price-block .price {
    font-size: 0.426667rem;
}
.distance {
    width: auto;
    margin-right: 0.8rem;
}

.app-cinema .title-block .title {
    height: 0.613333rem;
    line-height: 0.613333rem;
    font-size: 0.426667rem;
    color: #000;
}
.app-cinema .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 7.733333rem;
}

.app-cinema .location-block,
.app-cinema .price-block,
.app-cinema .title-block {
    line-height: 1.5;
}
.app-cinema .location-block {
    margin-top: 0.16rem;
    font-size: 0.32rem;
    color: #666;
    display: flex;
    justify-content: space-between;
}
.app-cinema .title-block .label-block {
    height: 0.453333rem;
    line-height: 0.453333rem;
    margin-top: 0.106667rem;
    margin-bottom: 0.106667rem;
    overflow: hidden;
    font-size: 0;
    flex-shrink: 0;
}
.app-cinema .discount-block {
    color: #999;
    margin-bottom: 0.106667rem;
}
.title-block .label-block div.snack,
.title-block .label-block div.vipTag {
    color: #f90;
    border: 1px solid #f90;
}
.title-block .label-block .hallType {
    color: #589daf;
    border: 1px solid #589daf;
}
.app-cinema .title-block .label-block > div {
    position: relative;
    display: inline-block;
    width: auto;
    padding: 0 0.08rem;
    height: 0.4rem;
    line-height: 0.4rem;
    border-radius: 0.053333rem;
    font-size: 0.32rem;
}
.app-cinema .discount-block .discount-label {
    width: 0.426667rem;
    height: 0.373333rem;
    position: relative;

    left: 0;
    display: inline-block;
}
.app-cinema .title-block .label-block > div + div {
    margin-left: 0.133333rem;
}
.app-cinema .discount-block .discount-label-text {
    margin-left: 0.133333rem;
    font-size: 0.293333rem;
    display: inline;
}

.app-cinema .min-show-block>span {
    font-size: .32rem;
    color: #999;
}
</style>

