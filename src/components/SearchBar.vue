<template>
    <h1>프로젝트: {{title}} </h1>
    <div>        
        <v-text-field 
            v-model="title"            
            placeholder="Search for Movies, Series & more"
            variant="outlined"
            clearable     
            prepend-inner-icon="mdi-map-marker"
            @keyup.enter="searchMovies">       
            <template v-slot:append-inner>
                <v-progress-circular
                    v-if="loading"
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </template>
        </v-text-field>        
    </div>
    <button @click="searchMovies">검색 버튼</button>
</template>


<script>
import { mapActions } from 'vuex';

export default {
    name: 'SearchBar',

    data() {
        return {
            title: '',
            loading: false,
        }
    },
    // computed: {
    //     title: {
    //         get () {
    //             return this.$store.state.movie.title
    //         },
    //         set (newTitle) {
    //             this.$store.commit('movie/updateState', {
    //                 title: newTitle
    //             })
    //         }
    //     },
    //     loading () {
    //         return this.$store.state.movie.loading
    //     }
    // },
    methods: {
        // async searchMovies () {
        //     this.loading = true
            
        //     const res = await axios.get(`https://omdbapi.com/?apikey=32e321fd&page=1&s=${this.title}`)
        //     console.log(res)

        //     this.loading = false
        //     console.log("검색")
        // }

        // searchMovies() {
        //     this.$store.dispatch('movie/searchMovies')
        // }

        ...mapActions('movie', [
          'searchMovies'
        ])
  
    }
}
</script>

<style scoped>
</style>