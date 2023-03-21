import axios from 'axios'

export default ({
    namespaced: true,
    state: () =>  ({
        title: '',
        loading: false,
        movies: []
    }),
    getters: {
    },
    mutations: {
        updateState (state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },
    actions: {
        async searchMovies ({ commit, state }) {
            // state.loading = true
            commit('updateState', {
                loading: true
            })
            
            const res = await axios.get(`https://omdbapi.com/?apikey=32e321fd&page=1&s=${state.title}`)
            console.log(res)

            state.movies = res.data.Search
            // state.loading = false
            commit('updateState', {
                loading: false
            })
        }
    },
    modules: {
    }
  })