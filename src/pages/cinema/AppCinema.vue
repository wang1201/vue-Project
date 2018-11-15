<template>
        <div  class="app-outerBox">
                <!-- <app-nav></app-nav> -->
                <div ref="root" class="app-cinema-item">
                    <div class="app-cinema">
                            <app-cinemaList v-for="(cinema,i) in cinemas"
                            :key="i" 
                            :info="cinema"
                            ></app-cinemaList>

                    </div>
                </div>
           <app-fotter></app-fotter>    
        </div>
     
</template>

<script>
// 列表
import AppCinemaList from "@com/common/app-cinema/AppCinemaList";
//底部
import AppFotter from "@com/layout/AppFotter";
//NAV
import AppNav from "@com/layout/AppNav";

import scroll from '@util/scroll'
export default {
    components: {
        AppCinemaList,
        AppFotter,
        AppNav
    },
    data() {
        return {
            cinemas: [],
            offset:20
        };
    },
    async beforeCreate() {
        let result = await this.$http({
            url: "/my/ajax/cinemaList",
            params:{
                offset:0,
                limit:20
            }
    
        });
        this.cinemas = result.cinemas;
    },
    methods:{
       async  getFilms () {
             let result = await this.$http({
                url: "/my/ajax/cinemaList",
                 params:{
                     offset:this.offset,
                     limit:20
                  }
        });
         this.page =  this.page+20
        this.cinemas = this.cinemas.concat(result.cinemas) ;
         }
    },
    mounted() {
       scroll({
           el:this.$refs.root, 
            handler: this.getFilms.bind(this),
       }) 
    },
};
</script>

<style lang="scss" >
.app-cinema-item {
    flex: 1 1;
     overflow: hidden;
}
</style>


