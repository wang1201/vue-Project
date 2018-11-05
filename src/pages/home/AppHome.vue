<template>
    <section class="app-home">
       <ul >
           <li class="movie-list">
               <a class="movie-list_item">
                    <div class="movie-item_img">
                        <img src="https://p0.meituan.net/128.180/movie/2721b55eac3ca107bad2af0e18592003431446.jpg" onerror="this.style.visibility='hidden'">
                    </div>
                    <div class="movie-item_info">
                        <div class="movie-item_title">
                            <div class="line-ellipsis">胡桃夹子和四个王国</div>
                            <span class="version v3d"></span>
                        </div>
                    </div>
               </a>
           </li>
       </ul>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.app-home {
  ul {
    .movie-list {
      border: 1px solid red;
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
          img {
            background-color: transparent;
            height: 100%;
            width: 100%;
          }
        }

        .movie-item_info {
          .movie-item_title {
            max-height: 0.64rem;
            margin-bottom: 0.186667rem;
            line-height: 0.64rem;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>

