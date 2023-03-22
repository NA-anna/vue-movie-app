import axios from 'axios'

export default ({
    // 현재 파일(movie.js)을 Store 모듈로 활용하려면 다음 옵션이 필요합니다.
    namespaced: true,

    // 상태(State)는 함수로 만들어서 객체 데이터를 반환해야 가변 이슈(데이터 불변성)가 발생하지 않습니다!
    state: () =>  ({
        title: '',
        loading: false,
        movies: []
    }),

    getters: {},

    // Mutations의 주요 목적은 state를 변경시키는 역할
    // commit('함수명', '전달인자')으로 실행 시킬 수 있습니다.
    mutations: {
        updateState (state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },

    // Actions의 주요 목적은 Mutations를 실행시키는 역할
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