import axios from 'axios'

export default ({
    // 현재 파일(movie.js)을 Store 모듈로 활용하려면 다음 옵션이 필요합니다.
    namespaced: true,

    state: () =>  ({
        title: '',
        loading: false,
        movies: []
    }),

    getters: {},

    mutations: {
        updateState (state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },

    actions: {
        async searchMovies ({ commit, state }) {
        
            commit('updateState', {
                loading: true
            })
            
            const res = await axios.get(`https://omdbapi.com/?apikey=32e321fd&page=1&s=${state.title}`)
            console.log(res)
            
            commit('updateState', {
                movies: res.data.Search,
                loading: false
            })
        }
    },

    modules: {
    }
  })