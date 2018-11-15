<template>
    <section class="app-citys">
       <app-content-block title = "当前所在城市">
           <app-content-item v-if="chunks.city" class="active">{{chunks.city.cityName}}</app-content-item>
       </app-content-block>

       <app-content-block title = "热门城市">
           <app-content-item 
                v-for = "city in hotCitys"
                :key  = "city.id"
                @click.native="changeCity(city)"
           >
           {{city.name}}
           </app-content-item>
       </app-content-block>

       <app-citys-content></app-citys-content>
    </section>
</template>

<script>
import AppContentBlock from "@com/layout/AppContentBlock";
import AppContentItem from "@com/layout/AppContentItem";
import AppCitysContent from "@com/layout/AppCitysContent";

import { CHANGE_CITY } from '@/store/chunks/mutation-types'

import { mapState } from 'vuex';
export default {
  data() {
    return {
      hotCitys: [
        { id: 1, name: "北京" },
        { id: 10, name: "上海" },
        { id: 50, name: "杭州" },
        { id: 20, name: "广州" },
       
      ]
    };
  },
  components: {
    AppContentBlock,
    AppContentItem,
    AppCitysContent
  },
  computed:mapState(['chunks']),//等同于this.chunks === store.state.chunks
  methods:{
    changeCity({id:cityId , name:cityName}){
      this.$store.commit({
        type:'chunks/CHANGE_CITY',
        city:{
          cityId,cityName
        }
      })
      this.$router.push({name:'home'})
    }
    
  }
};
</script>

<style lang="scss" >
.app-citys {
  .mint-cell-wrapper {
    font-size: 0.426667rem;
    cursor: pointer;
    color: #838383;
  }
  .mint-indexlist-navitem {
    font-size: 0.293333rem;
    height: auto;
    font-weight: normal;
    color: #333333;
  }
  .mint-indexsection-index {
    font-size: 0.373333rem;
    padding-left: 0.4rem;
  }
  .mint-indexsection-index + ul {
    padding-left: 0.3rem;
  }
  .mint-cell-title {
    line-height: 0.533333rem;
    border-bottom: #ebebeb 1px solid;
  }
  .mint-cell-text {
    font-size: 0.426667rem;
    line-height: 1rem;
    display: block;
    cursor: pointer;
    color: #838383;
    
  }
}
</style>

