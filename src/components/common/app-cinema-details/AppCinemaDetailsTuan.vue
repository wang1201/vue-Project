<template>

 

    <section class="app-cinema-details-tuan tuan-list">
        <div class="gap" ></div>
	<div class="tuan-title mb-line-b">影院超值套餐</div>
	
	<div class="tuan-item mb-line-b">
		<img data-ui-type="image-viewer" src="//p1.meituan.net/440.0/mmdb/1154a185dc3954a364f403a348faaf6952489.jpg@388w_388h_2e">
		
		<div class="item-info" data-href="/deal/submitorder/100084341?_v_=yes&amp;promotionsId=0&amp;cinemaId=107&amp;category=11&amp;poiId=0&amp;channelId=4" data-bid="dp_wx_cinema_deal_list">
			<div class="title">
				
					<span>双人</span>
				
				16oz机打可乐2杯+64oz爆米花1桶
			</div>
			
			<div class="sell-num">已售6118</div>
			<div class="price">
				
				<span class="sell-price">
					<span>¥</span><span class="num">40.6</span>
				</span>
				
			</div>
			<div class="buy-btn">去购买</div>
		</div>
	</div>

    </section>
</template>

<script>

export default {
//     props: ["info"],

}
    
</script>

<style lang="scss" >
    .tuan-list {
    position: relative;
    margin: 0 0 0 .4rem;
}
.tuan-list .gap{
 height:.266667rem;
  background-color: #f0f0f0
}
 .tuan-list .tuan-title {
    line-height:1.2rem;
    height:1.2rem;
    font-size: .4rem;
    color: #666;
}
 .tuan-list .tuan-item {
    cursor: pointer;
    position: relative;
    width: 100%;
    padding: .346667rem 0;
    overflow: hidden;
}
 .tuan-list .tuan-item img {
    display: inline-block;
    width: 2.453333rem;
    height: 2.453333rem;
    float: left;
}
 .tuan-list .tuan-item .item-info {
    width: auto;
    position: relative;
    margin: 0 .4rem 0 2.72rem;
    height: 2.453333rem;
    overflow: hidden;
}
.tuan-list .tuan-item .item-info .title {
    font-size:.373333rem;
    line-height: .48rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
}
 .tuan-list .tuan-item .item-info .title span {
     width: auto;
    display: inline-block;
    vertical-align: top;
    margin-top: .026667rem;
    margin-right: .186667rem;
    padding: 0 .106667rem;
    font-size: .266667rem;
    line-height: .4rem;
    height: .4rem;
    background: #f90;
    border-radius: .053333rem;
    color: #fff;
}
.tuan-list .tuan-item .item-info .sell-num {
    display: inline-block;
    position: absolute;
    bottom: .906667rem;
    right: 0;
    line-height:.426667rem;
    height: .426667rem;
    font-size: .32rem;
    color: #999;
    width: auto
}
.tuan-list .tuan-item .item-info .price {
    position: absolute;
    bottom: 0;
    left: 0;
    height: auto;
}
.tuan-item .item-info .price .sell-price {
    color: #f03d37;
    display: inline-block;
}
 .tuan-list .tuan-item .item-info .price .sell-price span {
    font-size:.373333rem;
}
.tuan-item .item-info .price .sell-price .num {
    font-size: .453333rem;
}
.tuan-wrap .tuan-list .tuan-item .item-info .buy-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-block;
    padding: 0 8px;
    height: .72rem;
    line-height: .72rem;
    font-size: .32rem;
    border-radius: .08rem;
    color: #fff;
    background-color: #f03d37;
}
</style>