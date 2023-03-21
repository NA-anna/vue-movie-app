<template>
  <v-app>
    <v-container>
      <SearchBar/> <!-- 검색바 -->
      <MovieList/> <!-- 영화목록 -->
    </v-container>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SearchBar from '@/components/SearchBar.vue' //@ : 절대경로
import MovieList from '@/components/MovieList.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    SearchBar,
    MovieList,
  },

  data: () => ({
    //
  }),
}
</script>
