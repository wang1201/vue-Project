<template>
    <section class="app-nav">
        <div class="app-nav_bg after-border">
            <div class="nav-city">
                <!-- <span class="nav-city-name">武汉</span> -->
                <!-- tag 就是指该部分渲染的时候挂载的标签名 不然router默认为a标签-->
                 <router-link tag = "span" :to="{name: 'citis'}" class="nav-city-name">
                    {{chunks.city ? chunks.city.cityName : ''}}
                </router-link>
                <span class="nav-city_arrow"></span>
            </div>  
            <router-link
                active-class="active"
                v-for="item in navs"
                :key="item.id"
                :to="{name:item.name}"
                class="nav-switch_hot" 
              >
                  <div class="nav-hot_item">{{item.title}}</div>
              </router-link>
            <div class="nav-search_icon" data-type="movie">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABC1JREFUWAntWEtrU1EQPpO+ArYm1Y1I3VRXgu5EoSpVQaxCxUVxYTeCv8CtoFVxW0F/gBsLiguxoBaxWHyLS0EEdWWobrRprZC+cpzv3NyTOfeR3DS3duOF5M6ZMzPflzmvOVHq/9NcBqhRdz001D43UziktR5k35382ao1bUUcIj3NL3w+EtH4xu6eZ3Tv3iL6VvskJjh/vH/Lcql0UZM6o7TamAiQ1BxpNdaazV7pfDT1I5FPwKguQT0w0FFcLF5QSp9nYhsC/smapP5wfkfz7flr9PjxQjInz6omQZO1hdJ9rdW+RoLG2RKpt60d2VONZDOW4PyRA7uX9NJDBuuJACzwhHuQ0ZmHPNe+dm1qxbxTv38t83zU28tUPqG0Phnn25ah451P33yIiBtSRRJE5pZKpfchAKJp0vpSbvO2Wzz5V0LRhIIXU8vsz29nNdFlJmsWkegutGWze5JkMkQQc252cWYqYljH850twzT+6rcAqivqwb6u4vzKbTbEqrcPhjvX3t1fb05mrEdFwIIIkSN1I3/w2KlGySEkfOCrVOamxAKGt/ikNiw7GTRDu1D6Elit44bcyEg57J5co0dGMsXnE/fZo5pJXt1tHdkdtYbaySD2OYcczzkzrE2Sw88gjoFYvLjMgjI/jbctg2ka0V+WIE4IswkLOyyI1QyrCOGIiIWYUglMYEudlC1BHF+BE6KA1SqN05ArMQs2Fp9KBtsqXMESrJyt1V7e5+ptJVXj5JKJybGlRwhbdFqCrMPBbx9swraRshAR28GWcJKgs5nihJCGacoRsR1siWUJ+iWT3+kfX347zXcwdhBbYlmCUrkOso7DtAQrxaa1w8FvGykLwdiM/T0OwhJkg+oGyg1UJXFOzeojYjvYMr4k+FF2mJJJKlKUI2I72BLKEsQdQnagnkPJ5OhSaJiYXq1oo4WwbQ+XGL6MC47iO4Tf5ncP6jnRTkWsxKwWwYxpsGOiW4K4feGCI+1QbKKek7pmZMQyBawIAkxgC5UjWoLQ4vbFWeQLTuXhShjFJkolX7Xatym3ULjK6pqxDGaNoA6wV5fRaMB+sPhi4nozJL1a8IlbCxoQGq1VC8LEKVih+Icl/2cu+Xc1XPLDAVdD5loticCcK+Hin/Kn4uF955KsbtjAFj7wNRGcL+qdW5wFTs0nlEHfeg2vnT4EF9e0QoqGc5Ov71hlQIglCLs1uLh/5lnVyyeJ3V9Bkne7M/nJV3cD3EzTWSRBA0xgXA35p151VnfQsF4bOwPHwJwDGY+U5+SRLY8Vj/SdjgpTM4PSwWQzpT+PPDLlsSSZTEzQJ8uTP5W/35KSbJigTzSNdxxJamnpyz15+Q4YNedgGiRqxfAWRnhO6pWy3ZbWlSDIR5EkpV/4P2xdh9gngffs0f17kTmQy02+mZB9/+VmMvAXE7/38O8tTYkAAAAASUVORK5CYII=" />  
            </div>           
        </div>
    </section>
    
</template>

<script>
import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/chunks/mutation-types'

//因为定位是已进入页面就有了的，因此，初始化的时候就要有请求一次actions了，
export default {
  data() {
    return {
      navs: [
        { id: 'nav01', title: "正在热映" , name:'hotShowing' },
        { id: 'nav02', title: "即将上映", name:'comingSoon' },
      ]
    };
  },
   beforeCreate () {
        // 一进来就先去定位更改城市信息, 如果有保存的，就别获取去了
        if ( localStorage.city ) {
            this.$store.commit({
                type: 'chunks/' + CHANGE_CITY,
                cities: JSON.parse(localStorage.cities),
                city: JSON.parse(localStorage.city)
            })
        } else {
            this.$store.dispatch({type: 'chunks/getCurrentPosition'})
        }     
    },
  //初始化页面的时候就要执行一下这个函数，进行定位
  // beforeCreate(){
  //   this.$store.dispatch({
  //     type:'chunks/getCurrentPosition'
  //   })
  //    console.log('1111111',this.$store.state.chunks);
  // },
  computed:mapState(['chunks']),//// 映射 this.chunks 为 store.state.chunks

};
</script>

<style lang="scss" >
.app-nav {
  flex: 0 0;
  border-bottom: 1px solid #e6e6e6;
  height: 1.173333rem;
  .app-nav_bg {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1.173333rem;
    line-height: 1.173333rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .nav-city {
      font-size: 0.4rem;
      color: #666;
      padding-left: 0.4rem;
      display: -webkit-box;
      // flex-grow: 1;
      .nav-city-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 1.866667rem;
      }
      .nav-city_arrow {
        width: 0;
        height: 0;
        border: 0.106667rem solid #b0b0b0;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        display: inline-block;
        margin: 0.133333rem 0.133333rem 0;
      }
    }
    .nav-switch_hot {
      display: flex;
      height: 1.173333rem;
      line-height: 1.173333rem;
      position: relative;
      &.router-link-exact-active{
         .nav-hot_item{
           color: #f03d37;
            &:after {
            content: "";
            display: block;
            position: absolute;
            bottom: -0.013333rem;
            width: 2.133333rem;
            height: 0.026667rem;
            background-color: #ef4238;
            -webkit-transition: left 0.2s;
            transition: left 0.2s;
          }
         }
         
      }
      .nav-hot_item {
        font-size: 0.4rem;
        color: #666;
        width: 2.133333rem;
        text-align: center;
        margin: 0 0.32rem;
        font-weight: 700;
      }
     
    }
    .nav-search_icon {
      padding-right: 0.4rem;
      text-align: right;
      img {
        width: 0.533333rem;
        height: 0.533333rem;
      }
    }
  }
}
</style>

