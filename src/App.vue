<template>
  <v-app>
    <v-container>
      <SearchBar/> <!-- 검색바 -->
      <MovieList/> <!-- 영화목록 -->
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue' //@ : 절대경로
import MovieList from '@/components/MovieList.vue'

export default {
  name: 'App',

  components: {
    SearchBar,
    MovieList,
  },

  data: () => ({
    //
  }),
}
</script>
