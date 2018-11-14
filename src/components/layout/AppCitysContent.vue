<template>
    <div class="app-citys-content">
        <mt-index-list>
            <mt-index-section 
                v-for = "(value, key) in cities"
                :key  = "key"
                :index="key"
            >
                <mt-cell
                    v-for = "city in value"
                    :key  = "city.id"
                    :title= "city.nm" 
                    @click.native="changeCity(city)"
                ></mt-cell>
            </mt-index-section>
        </mt-index-list>
     </div>
</template>

<script>
import { IndexList, IndexSection, Cell } from 'mint-ui';
import { cities } from '@util/cities'
import { CHANGE_CITY } from '@/store/chunks/mutation-types'

import { mapState } from 'vuex' 

export default {
    components: {
        [IndexList.name]: IndexList,
        [IndexSection.name]: IndexSection,
        [Cell.name]: Cell
    },
     data () {
        return {
            citys: []
        }
    },
    //由于我们初始化的时候就在state上挂载了cities信息，那么这里直接取就ok了
    // async beforeCreate () {
    //     let result = await this.$http({
    //         url: '/my/dianying/cities.json'
    //     })
    //     this.citys = result.cts;
    // },  

    computed: {
        ...mapState(['chunks']),//访问this.chunks等同于访问store.state.chunks
        cities () {
            console.log('this.chunks',this.chunks);
            return cities(this.chunks.cities)
        },
    },
    methods:{
        changeCity({id:cityId, nm:cityName}){
            console.log(this.$store.state.chunks);
            //需要把得到的这个id和name提交到仓库，仓库得到数据，调用接口刷新页面并且显示到主页
            this.$store.commit({
                type:'chunks/'+CHANGE_CITY,
                city:{
                    cityId,cityName
                }
            });
            this.$router.push({name:'home'})

        }
    }
}
</script>

<style lang="scss">
    .app-city-content {

    }
</style>

