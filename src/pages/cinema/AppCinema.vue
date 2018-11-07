<template>
    <section class="app-cinema">
         <app-cinemaList
            v-for = "cinema in cinemas"
            :key  = "cinema.id"
            :info = "cinema"
        ></app-cinemaList>
    </section>
</template>

<script>
import AppCinemaList from '@c/common/app-cinema/AppCinemaList'
export default {
 components:{
         AppCinemaList
     },
      data () {
         return {
             cinemas: []
         }
     },
     async  beforeCreate () {
       let result=await  this.$http({
            url: '/my/ajax/cinemaList',
            react: false
        })
        this.cinemas = result.cinemas
       console.log(result.cinemas)
    },
       
};
</script>

<style lang="scss" >


</style>


