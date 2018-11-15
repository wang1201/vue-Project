<template>

    <section class="app-cinema-details-date-show">
        <div class="nav-block mb-line-t">
            <div class="nav-bar mb-line-b wrapper">
                <div class="nav-bar-wrap content">
                    <div v-for="(day,index) in info.shows" :key="index" class="nav-item" data-id="info.dateShow" :class="{'active': index == active}" @click="check_show(index)">
                        <span class="date-title">{{day.dateShow}}</span>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="seat-wrap">
            <div class="discount-block">

                <div class="vip-tips">
                    <a>
                        <div class="label">折扣卡</div>
                        <div class="label-text line-ellipsis">购票享低价，首单2张立减8元</div>
                        <div class="process">30元开卡</div>
                    </a>
                </div>
            </div>
            <div class="seat-inner-wrap">
                <div class="item-outer mb-line-b" data-bid="dp_wx_cinema_show_item"  v-for="(info,i) in plist.plist " :key="i">

                    <div class="item box-flex">
                        <div class="time-block">
                            <div class="begin">{{info.tm}}</div>
                            <div class="end">17:17
                                <span class="tui">散场</span>
                            </div>

                        </div>
                        <div class="info-block">
                            <div class="lan">{{info.lang}} {{info.ttp}}</div>
                            <div class="hall">{{info.th}}</div>
                        </div>
                        <div class="price">
                            <div class="sellPr">
                                <span class="d">¥</span>
                                <span>
                                    <span class="stonefont">32.5 </span>
                                </span>
                            </div>
                            <div class="vipPrice" v-if="info.vipPrice">
                                <span class="icon">折扣卡</span>
                                <span class="num">{{info.vipPrice}} </span>
                            </div>
                            <div class="extraDesc" v-if="info.extraDesc">{{info.extraDesc}}</div>
                        </div>
                        <div class="button-block">
                            <div class="button" data-bid="dp_wx_cinema_show_btn">购票</div>

                        </div>
                    </div>

                </div>
                <div class="no-seat" v-if="!plist.plist.length">
                    <div class="icon"><img src="data:image/png;base64,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"></div>

                    <div class="text">今日场次已映完</div>
                </div>

            </div>
        </div>

    </section>

</template>
<script>
import _ from "lodash";
export default {
    props: ["info"],
    data() {
        return {
            active: 0,
            item: {}
        };
    },
    // methods(){
    methods: {
        check_show(index) {
            this.active = index;
            console.log(index);
        }
    },
    computed: {
        plist() {
            return this.info.shows[this.active];
        }
    }


};
</script>

<style lang="scss" >
.nav-block .nav-bar {
    position: relative;
    height: 1.2rem;
    overflow: hidden;
    white-space: nowrap;
}
.nav-block .nav-bar .nav-bar-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: auto;
}

.nav-bar .nav-item:first-child {
    margin-left: 0.4rem;
}
.nav-block .nav-bar .nav-item:last-child {
    margin-right: 0.4rem;
}
.nav-item + .nav-item {
    margin-left: 0.8rem;
}
.nav-block .nav-bar .nav-item {
    width: auto;
    display: inline-block;
    line-height: 1.2rem;
    height: 1.2rem;
    text-align: center;
    font-size: 0.373333rem;
    color: #666;
}
.active {
    color: #f03d37 !important;
    position: relative;
}
.nav-bar .active i {
    content: "";
    position: absolute;
    width: 110%;
    height: 0.053333rem;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f03d37;
}

.discount-block {
    padding-top: 1px;
}
.vip-tips {
    background-color: #fff5ea;
    margin-top: -1px;
    padding: 0 0.4rem;
    height: 1.12rem;
    line-height: 1.12rem;
}

.vip-tips .label {
    background-color: #ff941a;
}
.vip-tips .label-text {
    color: #fa9600;
}
.discount-tips .label,
.vip-tips .label {
    flex: 0 0 auto;
    display: inline-block;
    background-color: #60b8e1;
    border-radius: 0.053333rem;
    font-size: 0.266667rem;
    line-height: 0.4rem;
    height: 0.4rem;
    width: 0.906667rem;
    text-align: center;
    color: #fff;
    margin-top: 0.346667rem;
    margin-right: 0.266667rem;
}
.discount-tips a,
.vip-tips a {
    display: flex;
    color: #777;
}
.vip-tips .label-text {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    color: #60b8e1;
    font-size: 0.32rem;
}
.discount-tips .process,
.vip-tips .process {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    line-height: 1.12rem;
    color: #999;
    font-size: 0.32rem;
    width: auto;
}

.seat-inner-wrap .box-flex {
    display: flex;
}

 .item-outer {
    padding: .453333rem 0;
    margin-left: .333333rem;
}
 .item {
    padding-right: 0.666667rem;
}
 .item .time-block .begin {
    font-size: 0.533333rem;
    color: #333;
    line-height: 1;
    white-space: nowrap;
}
 .time-block {
    width: auto;
}
 .vipPrice span {
    width: auto;
}
 .price div {
    width: auto;
}
.item .time-block .end {
    margin-top: 0.266667rem;
    color: #999;
    font-size: 0.293333rem;
    line-height: 1;
    white-space: nowrap;
}
.item .info-block {
    margin-left: 0.426667rem;
    flex: 1;
    overflow-x: hidden;
}
.item .info-block .lan {
    margin-top: 0.053333rem;
    line-height: 0.48rem;
    font-size: 0.346667rem;
    color: #333;
    white-space: normal;
}
.item .info-block .hall {
    margin-top: 0.186667rem;
    font-size: 0.293333rem;
    color: #999;
    white-space: normal;
}
.item .price {
    flex: 0 1 auto;
    width: 3.466667rem;
    margin-left: 0.133333rem;
}
.item .price .sellPr {
    display: inline-block;
    line-height: 1;
    color: #f03d37;
    margin-top: 0.026667rem;
    font-size: 0.506667rem;
}
.item .price .sellPr .d {
    color: 13px;
    font-size: 0.293333rem;
}
.stonefont {
    font-family: "stonefont";
}
.vipPrice {
    display: inline-block;
    line-height: 0.4rem;
    height: 0.4rem;
    transform: scale(0.8);
    transform-origin: left;
    margin-right: -0.426667rem;
    border: 1px solid #ff9000;
    border-radius: 0.053333rem;
    font-size: 0.32rem;
}
.vipPrice .icon,
.vipPrice .num {
    display: inline-block;
    padding: 0 0.053333rem;
}
.vipPrice .num {
    color: #f90;
    background-color: #fff;
}
.vipPrice .icon {
    color: #fff;
    background-color: #f90;
}
.item .price .extraDesc {
    margin-top: 0.133333rem;
    display: block;
    font-size: 0.293333rem;
    color: #999;
}
.item .button-block {
    width: 1.2rem;
    margin-left: 0.053333rem;
    position: relative;
}
.item .button-block .button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 0.72rem;
    line-height: 0.746667rem;
    font-size: 0.32rem;
    background-color: #f03d37;
    color: #fff;
    border-radius: 0.106667rem;
    text-align: center;
}

.no-seat {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 6.133333rem;
    background-color: #f0f0f0;
}
.no-seat .icon {
    width: 2.066667rem;
    height: 1.906667rem;
    margin-top: .666667rem
    
}
.icon img {
    width: 100%;
}
.no-seat .text {
    margin-top: .32rem;
    line-height: 1;
    font-size: .426667rem;
    color: #acacac;
}
</style>