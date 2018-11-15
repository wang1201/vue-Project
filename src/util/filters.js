import Vue from 'vue'

// 上映时间

Vue.filter('changeImg', (img, val) => {
    let changeImgVal = img.replace("w.h", val);
    return changeImgVal
})

//根据得到的2018-11-15算出是今天还是明天还是周几
Vue.filter('changeTime', ( time) => {
    //得到是今天是周几
    let weeks = ["日", "一", "二", "三", "四", "五", "六"];
    let d = new Date().getDay();
    let realWeeks = "周" + weeks[d];
    
    //拿到返回来的数据类似2018-11-12，得到11月12日
    let month = time.split('-')[1];
    let day = time.split('-')[2];
    let showDate = month + '月'+ day + '日';
    //today
    let date = new Date();
    let nowTime = date.getFullYear()+ '-'+parseInt(date.getMonth()+1) + '-'+date.getDate();
    
    switch(time){
        case (nowTime): return '今天'+showDate;
        // case (nowDay):return '今天'+showDate;
        default:return showDate
         
    }
})