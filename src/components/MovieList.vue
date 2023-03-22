<template>
    <div>
        <ul>
            <li v-for="movie in movies" :key="movie.imdbID">{{ movie }}</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'MovieList',

    computed: {
        movies () {
            return this.$store.state.movie.movies
        }
    }
}
</script>