
import Vue from 'vue'

// 上映时间

Vue.filter('changeImg', (img,val) => {
    let changeImgVal = img.replace("w.h", val);
    return  changeImgVal
})

