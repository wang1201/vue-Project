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
    async beforeCreate () {
        let result = await this.$http({
            url: '/my/dianying/cities.json'
        })
        this.citys = result.cts;
    },  
    computed: {
        cities () {
            return cities(this.citys)
        }
    },
    methods:{
        changeCity({id ,nm}){
            console.log(id,nm);
        }
    }
}
</script>

<style lang="scss">
    .app-city-content {

    }
</style>

