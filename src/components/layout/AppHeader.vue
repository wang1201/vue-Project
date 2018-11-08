// {{}}mustache  /mə'stɑːʃ/ 
<template>
    <header class="app-header">     
        <div class="page-title">
            <h1>猫眼电影</h1>
        </div> 
    </header>
</template>

<script>
export default {
    data () {
        return {
            isNavShow: false
        }
    },
    components: {
    }
}
</script>

<style lang="scss">
// sass语法，不是webpack的东西，所以不能使用alias
@import '../../stylesheets/particles/variable';

.app-header{
    background: $base-bg-color;
    height: 1.466667rem;
    line-height:1.466667rem;
    text-align: center;
    flex: 0 0;
    .page-title{
        h1{
            color: #ffffff;
            font-size: .48rem;
        }
    }
}
</style>

