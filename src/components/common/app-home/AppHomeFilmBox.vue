// home的列表的外壳   
<template>
    <ul class="app-home-film-box">
        <app-home-film-item
            v-for = "film in films"
            :key  = "film.id"
            :title  = 'film.comingTitle'
            :info = "film"
        ></app-home-film-item>
    </ul>
</template>
<script>
import AppHomeFilmItem from "@com/common/app-home/AppHomeFilmItem";
export default {
  components: {
    AppHomeFilmItem
  },
  props: ["filmType"],
  data() {
    return {
      films: []
    };
  },
  async created() {
    let { url } = this.filmType;
    let results = await this.$http({
      url: "/my/ajax/" + url
    });
    this.films = results.movieList ? results.movieList : results.coming;
   
   let titleArray = this.getNewDateTitle();
    this.films.forEach((element, i) => {
      if (element.comingTitle) {
        element.getNewDateTile = titleArray[i];
      }
    });
    console.log(this.films);
  },
  methods: {
    getNewDateTitle() {
      let temp = [];
      console.log(this.films);
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

