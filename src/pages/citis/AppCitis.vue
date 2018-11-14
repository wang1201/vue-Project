<template>
    <section class="app-citys">
       <app-content-block title = "当前所在城市">
           <app-content-item class="active">{{activeCity.name}}</app-content-item>
       </app-content-block>

       <app-content-block title = "热门城市">
           <app-content-item 
                v-for = "city in hotCitys"
                :key  = "city.id"
           >{{city.name}}
           </app-content-item>
       </app-content-block>

       <app-citys-content></app-citys-content>
    </section>
</template>

<script>
import AppContentBlock from "@com/layout/AppContentBlock";
import AppContentItem from "@com/layout/AppContentItem";
import AppCitysContent from "@com/layout/AppCitysContent";
export default {
  data() {
    return {
      activeCity: {
        id: 12,
        name: "北京"
      },
      hotCitys: [
        { id: 12, name: "北京" },
        { id: 13, name: "上海" },
        { id: 14, name: "广州" },
        { id: 15, name: "深圳" }
      ]
    };
  },
  components: {
    AppContentBlock,
    AppContentItem,
    AppCitysContent
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

