
import { CHANGE_CITY } from '../chunks/mutation-types'
const saveCityInStorage = (store)=>{
   
    //  当 store 初始化后调用
    store.subscribe((mutation,state)=>{
        //每次执行mutation开始和结束中间调用
        //mutation的格式为{type,payload}
        console.log('我是plugins',);
        if(mutation.type == 'chunks/'+CHANGE_CITY){
            if(mutation.payload.cities){//如果是初始化存了数据的
                //则存在本地，下次直接本地取，不用请求了
                // console.log('test',localStorage.city);
                localStorage.cities = JSON.stringify(mutation.payload.cities);
            }
            localStorage.city = JSON.stringify(mutation.payload.city);
        }
    })
}
export { saveCityInStorage }