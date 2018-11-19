<template>
    <div class="store" v-if="info">

    </div>
</template>
<script>
export default {
  data() {
    return {
        info:[]
    };
  },
  async created() {
    let userInfo = localStorage.userInfo
      ? JSON.parse(localStorage.userInfo)
      : "";
    let results = await this.$http({
      url: "/my/store/order/list?$from=canary?token=" + userInfo.token
    });
    this.info = results;
     let meta = results.replace(/(<meta.*?>)/g, "");
    document.querySelector('.store').innerHTML =  meta
  }
};
</script>
<style lang="scss">
header.navbar {
    display: none;
}
.no-data .wrapper {
    background-image: url(/bs/file/?f=my-canary:deploy/images/order-empty-1.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 3.7rem 3.7rem;
    top: 45%;
    margin-top: -2rem;
    height: 8rem;
    box-sizing: border-box;
}
.no-data .wrapper .tip-text {
    display: block;
    padding-top: 4rem;
    font-size: 0.4rem;
    height: 1rem;
    line-height: 1rem;
    color: #999;
}
</style>
