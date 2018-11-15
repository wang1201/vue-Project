import { CHANGE_CITY} from './mutation-types'

export default {
    [CHANGE_CITY]:(state,payload)=>{
        console.log('我是mutation 头');
        //拿到点击的最新的城市名字
        state.city = payload.city;
       
        //为什么多写一个这个猫眼的城市列表数据，是因为页面初始化第一次请求就拿到数据，
        //state上面就有了所有的城市信息，那么当我们进入城市列表页
        //的时候，此时state上就有了所有的cities，就不用请求接口了，直接遍历
        if(payload.cities){
            //第一次初始化的时候就有了cities
            state.cities = payload.cities;
        }
        
        //于是有了一个需求，我们不想每次都调用这个猫眼的接口，希望第一次取到存起来，下次不用在调用了，这个城市的总信息又不变化
        //使用插件plugins,他会在每次mutation之后调用，相当于一个拦截器，看到请求了就去本地找，找到了就用本地
        //需要在store中用一下
        console.log('我是mutation 尾');

    },
    // aa(state,payload){
    //     console.log('adasedasds');
    // }

}