// home的列表的外壳   
<template>
    <ul class="app-home-film-box">
        <app-home-film-item
            v-for = "film in films"
            :key  = "film.id"
            :info = "film"
        ></app-home-film-item>
    </ul>
</template>
<script>
import AppHomeFilmItem from  '@com/common/app-home/AppHomeFilmItem'
export default{
    components:{
        AppHomeFilmItem
    },
    props:['filmType'],
    data(){
        return {
            films:[]
        }
    },
    async created(){
        let {url} = this.filmType;
        let results =await this.$http({
            url:'/my/ajax/'+url,

        })
        this.films = results.movieList
        console.log(results);
    },
    
}
//  export default {
//      components:{
//          AppHomeFilmItem
//      },
//      props: ['type'],
//      data () {
//          return {
//              films: []
//          }
//      },
//      async created () {
//         //  console.log(this.type);
//         //  let {url} = this.type
//          let result = await this.$http({
//             url: '/my/ajax/movieOnInfoList' ,
//             // params: {
//             //     __t: Date.now(),
//             // }
//          })
//          console.log(result);
//         //  this.films = result.movieList
//      }
//  }
</script>
<style lang="scss">

</style>

