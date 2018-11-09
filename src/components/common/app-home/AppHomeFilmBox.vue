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
import AppHomeFilmItem from "@com/common/app-home/AppHomeFilmItem";
import scroll from '@util/scroll'



export default {
  components: {
    AppHomeFilmItem
  },
  props: ["url","type"],
  data() {
    return {
      films: [],
      page: 1, // 页数
      hasMore: true // 是否还有更多
    };
  },
  async created() {
    let results = await this.$http({
      url: "/my/ajax/" + this.url
    });
    this.films = results.movieList ? results.movieList : results.coming;

   let titleArray = this.getNewDateTitle();
    this.films.forEach((element, i) => {
      if (element.comingTitle) {
        element.getNewDateTile = titleArray[i];
      }
    });
  },
  methods: {
    getNewDateTitle() {
      let temp = [];
      this.films.forEach(element => {
        if (element.comingTitle) {
          element.getNewDateTile = "";
          temp.push(element.comingTitle);
        }
      });
      let newTemp = [];
      for (const i in temp) {
        if (newTemp.indexOf(temp[i]) == -1) {
          newTemp.push(temp[i]);
        } else {
          newTemp.push("");
        }
      }
      return newTemp;
    },
  }
};
</script>
<style lang="scss">
</style>

