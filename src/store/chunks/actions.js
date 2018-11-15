import {
    CHANGE_CITY
} from './mutation-types'

import http from '@util/axios'

const actions = {
    async getCurrentPosition(context){
        //初始化一个城市，一进页面没有的情况
        let cityId = 1
        let cityName = '北京'
        //请求猫眼json,拿到全部的id nm
        let city = await http({
            url:'/my/dianying/cities.json',
        })
        //用地图定位，拿到当前定位的信息 代理http://api.map.baidu.com/location/ip
        let result = await http({
            url: '/bd/location/ip',
            params: {
                ak: 'EajH3hpCLeGgNMbnPqbVl1Bm9PWGD0HO'
            }
        }, true);
       console.log('是否可以定位到',result);//定位不到为false,定位到返回的是定位信息
        if(result){
            cityName = result.content.address.replace('市','');//取到的是XX市，需要截取一下
            //拿到定位的城市，需要和得到的人家猫眼接口的城市名字对比，得到对应的猫眼接口的城市id
            for(let i = 0; i<city.cts.length;i++){
                if(city.cts[i].nm === cityName){//如果找到对应的城市name
                    // 这里不用forEach二用for的原因就是for可以找到就打断直接break
                    //而不用在遍历了
                    cityId = city.cts[i].id;
                    break;
                }
            };
        }
        context.commit({
            type: CHANGE_CITY,
            city: { cityId, cityName },
            cities: city.cts//第一个进来初始化的时候，拿到猫眼接口的city所有数据,详情页就能直接在state上取
        })
        console.log(cityId,cityName);
    }
    
}
export default actions