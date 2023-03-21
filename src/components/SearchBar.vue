<template>
    <h1>프로젝트: {{title}} </h1>
    <div>        
        <v-text-field 
            v-model="title"
            label="영화 검색"
            placeholder="영화 제목을 입력해주세요."
            variant="outlined"
            clearable     
            prepend-inner-icon="mdi-map-marker"
            @keypress.enter="searchMovies">       
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
</template>


<script>
export default {
    data() {
        return {
            title: '',
            loading: false,
        }
    },
    methods: {
        searchMovies() {
            this.loading = true
        }
    }
}
</script>