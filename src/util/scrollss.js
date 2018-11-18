import { Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'

import BScroll from 'better-scroll'
import ajax from '@util/axios'
import _ from 'lodash'
export const scroll = ({
  el,
  data,
  url,
  vm,
  horizontal = false
}) => {
  let count = 0;  
  // 声明BScroll
  let bscroll = new BScroll(el, {
    scrollX: horizontal,
    click:true,
    //当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
    probeType: 1,
    pullUpLoad: { //配置上拉加载
        threshold: 50 // 距离底部多少距离
    },
  })

  // 监听 pullingUp
  bscroll.on('pullingUp', async () => {
     // 分页的ajax请求
     console.log('token',userInfo.token);
     let result = await ajax({
        url,
        method: 'get',
        params: {
          movieIds: movieIds[count].join(',')
        }
      })

      // 激起页面重新渲染
      data.push(...result.coming)
      // $nextTick 保证了本次refresh会拿到渲染好以后的movies
      vm.$nextTick(() => {
        // console.log(vm);
        bscroll.refresh()
        
        count++

        // 告诉better-scroll, 可以进行下次滑动了
        bscroll.finishPullUp()
      })

   
  })


}