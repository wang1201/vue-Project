import { Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'

import BScroll from 'better-scroll'
import ajax from '@util/axios'
import _ from 'lodash'
export const scroll = ({
  el,
  data,
  movieList = null,
  url,
  vm,
  paging = {},
  horizontal = false
}) => {
  let count = 0

  let movieIds = _.chunk(movieList && movieList.movieIds.slice(12) || {}, 10)

  // 声明BScroll
  let bscroll = new BScroll(el, {
    scrollX: horizontal,
    //当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
    probeType: 1,
    pullUpLoad: { //配置上拉加载
        threshold: 50 // 距离底部多少距离
    },
  })

  // 监听 pullingUp
  bscroll.on('pullingUp', async () => {
    if (count < movieIds.length) {
      // 分页的ajax请求
      let result = await ajax({
        url,
        method: 'get',
        params: {
          token: '', // 加个token, 不然拿不到更多数据
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
    }

    if ( count == movieIds.length ) {
      Toast({
        message: '没有更多数据啦~~',
        position: 'bottom',
        duration: 1000
      })

      // 告诉better-scroll, 可以进行下次滑动了
      bscroll.finishPullUp()
    }
  })

  // 监听横向滚动
  let reachThreshold = false
  let hasMore = true
  bscroll.on('scroll', () => {
    if (horizontal) {
      const threshold = 50
      const curPosition = bscroll.maxScrollX - bscroll.x
      if (curPosition > threshold) {
        reachThreshold = true
      }
    }
  })
  bscroll.on('scrollEnd', async () => {
    if (horizontal && reachThreshold && hasMore) {
      count++
      // 告诉better-scroll, 可以进行下次滑动了
      bscroll.finishPullUp()
      // 分页的ajax请求
      let result = await ajax({
        url,
        method: 'get',
        params: {
          token: '',
          ci: paging.ci,
          limit: paging.limit,
          offset: count * paging.limit
        }
      })
      // hasMore 要每次取新的Ajax请求的hasMore
      hasMore = result.paging.hasMore
      data.push(...result.coming)

      // $nextTick 等待mostExpected被渲染到DOM上
      vm.$nextTick(() => {
      
        bscroll.refresh()
      })
    }

    if (!hasMore) {
      Toast({
        message: '到头了~',
        position: 'top',
        duration: 1000
      })
    }
  })
}