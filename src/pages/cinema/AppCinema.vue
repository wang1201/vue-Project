<template>
        <div class="app-outerBox">
                <app-nav></app-nav>
                <section class="app-cinema">
                        <app-cinemaList v-for="cinema in cinemas" 
                        :key="cinema.id" 
                        :info="cinema"
                        ></app-cinemaList>

                </section>
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
export default {
        components: {
                AppCinemaList,
                AppFotter,
                AppNav
        },
        data() {
                return {
                        cinemas: []
                };
        },
        async beforeCreate() {
                let result = await this.$http({
                        url: "/my/ajax/cinemaList",
                        react: false
                });
                this.cinemas = result.cinemas;
                console.log(result.cinemas);
        }
};
</script>

<style lang="scss" >
.app-cinema {
        flex-grow: 1;
        overflow: scroll;
}
</style>


