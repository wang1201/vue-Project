// home的列表的实际字段
<template>
     <li class="movie-list" data-id = 'info.id'>
       <p class="movie-group-date" v-if="info.comingTitle">{{info.getNewDateTile}}</p>
        <a class="movie-list_item after-border">
            <div class="movie-item_img">
                <img :src="info.img | changeImg('128.180') " onerror="this.style.visibility='hidden'">
            </div>
            <div class="movie-item_info">
                <div class="movie-item_title">
                    <div class="line-ellipsis">{{info.nm}}  <span :class="info.version" class="version"></span></div>             
                </div>
                <div class="movie-detail_column">
                    <div class="line-ellipsis" v-if="info.globalReleased"> 
                        <span>观众评 </span>
                        <span class="grade">{{info.sc}}</span>
                    </div>
                    <div class="line-ellipsis" v-else> 
                        <span class="grade">{{info.wish}}</span>
                        <span>人想看</span>
                    </div>
                    <div class="line-ellipsis">主演: {{info.star}}</div>
                    <div class="line-ellipsis" v-if="info.comingTitle">{{info.rt}}上映</div>
                    <div class="line-ellipsis" v-else>{{info.showInfo}}</div>
                </div>         
            </div>

            <div class="movie-btn_normal">
                <span v-if="info.showst == '3'" class="btn-buy_ticket" data-bid="">购票</span>
                <span v-else-if="info.showst == '4'" class="btn-buy_ticket btn-subscribe_ticket" data-bid="">预售</span>
                <span v-else-if="info.showst == '1'" class="btn-buy_ticket btn-want-look" data-bid="">想看</span>
            </div>
        </a>
    </li>
</template>
<script>
export default {
  props: ["info"],  
  
};
</script>
<style lang="scss">
.movie-list {
  position: relative;
  // border-bottom: .013333rem solid #666;
  .movie-group-date {
    padding: 0.32rem 0.4rem 0;
    margin: 0;
    font-size: 28px;
    color: #333;
  }
  .movie-list_item {
    padding: 0.373333rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .movie-item_img {
      background-color: #e1e1e1;
      background-size: 100% 100%;
      height: 2.4rem;
      width: 1.706667rem;
      min-width: 1.706667rem;
      img {
        background-color: transparent;
        height: 100%;
        width: 100%;
      }
    }

    .movie-item_info {
      flex-grow: 1;
      padding: 0 0.266667rem;
      overflow: hidden;
      .movie-item_title {
        max-height: 0.64rem;
        margin-bottom: 0.186667rem;
        line-height: 0.64rem;
        overflow: hidden;
        font-size: 0.453333rem;
        color: #333;
        font-weight: 700;
        padding-right: 0.133333rem;
        flex-shrink: 1;
        display: flex;
        .version.v3d {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAAAXNSR0IArs4c6QAAA0VJREFUSA3tV1tIFGEU/mZ23F11vaTrZbNs1TIxawkSuyEWIRVU2ksEvRQFRU+91EvQmw9Rb1EQRARFVCC9iCRF201MKlRCMctN3RRb23VRd9e9TecfW2XWmdEedvOh8zJzzn/+c745t39+DkRH73evEcOBqwBXJ4qihckSTRzHjQGinROMF5tP2JycBCIU6BaBnEQ7V7LPAW4uxWgTWCT+FQgGTPJNGHiWDiWkyZVxdXyyakLrwxgGisjKoP9A4vMgxAvieYHnsHe9GdacNESiIhxuH14P/kKY3hlV5JtQSmsxYuLx6Vk4J/1wzQRj4iWfmkCyjAKaDlZidaYR/lAEOo6DXuDRWGXBpZZe+EhWU7wKDcQrUdeoFzffOZYFSBPIme1WCcStdgdefpsAT0CO2YrQuNmCQ5sK8ajrx7z/y619cHh8MOh45JsM2LY2G0dI5/rhKpxv7sHUbHheV+lFtVgpI6iksA9MTKPtiwuhiIjZcBSt/eOSHUuGQWaPRcwXjMDjD6HfNY0Hn5y49uorMgwCjm8tkukqMaoRYbk+9bhr0R6bJUuS9Y5PLVqLF3QOT2KIosTSd7tjKH5ZxqsCkWkRc7pmHTaY01Gam4ann8ekVMXrKPFObwC7rDnQU8qCkaiSiiRTTU38jnyTHuZ0vVQnzCjrpuXQzJ/aMBl0murLjkjTiwHJUG1pLi7Ulklfd+/DiKZxtphHhRuk2nL7Qpq6qhEppGI8t8OK3SXyv4M3NEMmqSCrqSuWIpNeh3JKp9PrX0oVqkC8gRD2lefhZHUxpWPBTgEBZPPFG9Bux9QUHmd3liCduuZJz+iCAZU31dT4Q1G09f/E/ooCXKmvgJ3mCKuRPWVm0N8VWvrm2jhml4H2UPjZwGPRrCrMRHZqCp4PuNAx5ImpqT5VgbAddzqHwdq4fmMetlgyJSMsLTfeDqL9u1tm9AABZsSOATbi2fx5Rh/y0emV6akxXMPd93OHhpoGyfU6DgUZRgRoaP3N+aFhctGSZkRi2kGaqiN0iCWSVIs1kU6VbK8cIHP3CyWMyZMxDBQR0Z48l2qeRDvPblo0r+S9qKafADnzzTDw0nWPblo0ox4mM03Ml+STfDMMvwErHhRiC0ymfAAAAABJRU5ErkJggg==);
        }
        .version.v3d.imax {
          width: 1.146667rem;
          background-image: url(data:image/png;base64,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);
        }
        .pre-show,
        .version {
          background-size: contain;
          background-repeat: no-repeat;
          height: 0.373333rem;
          width: 0.453333rem;
          display: inline-block;
          margin-top: 0.133333rem;
          -webkit-box-flex: 0;
          flex: 0 0 auto;
          margin-right: 0.08rem;
        }
      }
      .movie-detail_column {
        font-size: 0.346667rem;
        color: #666;
        div {
          margin-top: 0.16rem;
          line-height: 0.4rem;
          .grade {
            font-weight: 700;
            color: #faaf00;
            font-size: 0.4rem;
          }
        }
      }
    }
    .movie-btn_normal {
      height: 0.72rem;
      width: 1.253333rem;
      .btn-buy_ticket {
        display: block;
        width: 1.253333rem;
        height: 0.72rem;
        line-height: 0.746667rem;
        text-align: center;
        background-color: #f03d37;
        color: #fff;
        border-radius: 0.106667rem;
        white-space: nowrap;
        font-size: 0.32rem;
        cursor: pointer;
      }
      .btn-subscribe_ticket {
        background-color: #3c9fe6;
      }
      .btn-want-look{
        background-color: #faaf00;
      }
    }
  }
  
}
</style>

