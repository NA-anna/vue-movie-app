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
        <v-text-field 
            v-model="title"
            label="영화 검색"
            placeholder="영화 제목을 입력해주세요."
            variant="outlined"
            clearable>
            <template v-slot:prepend-inner>
                <v-icon icon="fa:fas fa-search"></v-icon>
            </template>        
        </v-text-field>
        <v-text-field 
            v-model="title"
            label="영화 검색"
            placeholder="영화 제목을 입력해주세요."
            variant="outlined"
            clearable>
            <template v-slot:prepend-inner>
                <v-icon>search</v-icon>
            </template>        
        </v-text-field>
        검색바
    </div>
    <button @click="searchMovies">검색 버튼</button>
</template>


<script>
import axios from 'axios'
// import { mapActions } from 'vuex';

export default {
    data() {
        return {
            title: '',
            loading: false,
        }
    },
    methods: {
        async searchMovies () {
            this.loading = true
            
            const res = await axios.get(`https://omdbapi.com/?apikey=32e321fd&page=1&s=${this.title}`)
            console.log(res)

            this.loading = false
            console.log("검색")
        }

        // searchMovies() {
        //     this.$store.dispatch('movie/searchMovies')
        // }

        // ...mapActions('movie, [
        //     'searchMovies'
        // ])
  
    }
}
</script>

<style scoped>
</style>