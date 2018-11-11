import axios from 'axios'
//封装一个axios的ajax的请求
//vue2.0之后就推荐使用axios了,抛弃了jquery ajax
const ajax = (options)=>{
    let _react = options.react === undefined ? true : options.react;
    return axios(options)
    .then(res=>{
        if(res.status == 200){
            if (_react) console.log('数据获取成功')
        }else{
            if (_react) console.log('数据获取失败')
        }
        return res.data
    }).catch((error)=>{
        return false
        
    })
}
export default ajax