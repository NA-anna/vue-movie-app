import axios from 'axios'

const API_KEY = '32e321fd'

export default {
    // 현재 파일(movie.js)을 Store 모듈로 활용하려면 다음 옵션이 필요합니다.
    namespaced: true,

    // 상태(State)는 함수로 만들어서 객체 데이터를 반환해야 가변 이슈(데이터 불변성)가 발생하지 않습니다!
    state: () =>  ({
        title: 'lion', //초기화
        loading: false,
        movies: []
    }),

    getters: {},

    // Mutations의 주요 목적은 state를 변경시키는 역할
    // commit('함수명', '전달인자')으로 실행
    mutations: {
        updateState (state, payload) {
            Object
            .keys(payload)
            .forEach(key => {
                state[key] = payload[key]
            })
        },
        pushIntoMovies (state, movies) {
            state.movies.push(...movies)
        }
    },

    // Actions의 주요 목적은 Mutations를 실행시키는 역할
    // dispatch 로 실행
    actions: {
        function fetchMovies ({ state, commit }, pageNum) {
            const promise = new Promise(resolve => {
              const res = axios.get(`https://omdbapi.com/?apikey=${API_KEY}&s=${state.title}&page=${pageNum}`)
              resolve(res)
            })
            return promise.then(res => res.data)
          },
        // fetchMovies ({ state, commit }, pageNum) {
        //     return new Promise( async resolve => {
        //         const res = await axios.get(`https://omdbapi.com/?apikey=${API_KEY}&s=${state.title}&page=${pageNum}`)
        //         commit('pushIntoMovies', res.data.Search )
        //         resolve(res.data)
        //     })
        // },
        async searchMovies ({ commit, dispatch }) {
        
            commit('updateState', {
                loading: true, // 로딩 애니메이션 시작
                movies: [] // 초기화
            })
            const { totalResults } = await dispatch('fetchMovies', 1)  
            const pageLength = Math.ceil(totalResults / 10)

            // const res = await axios.get(`https://omdbapi.com/?apikey=32e321fd&s=${state.title}&page=1`)
            // console.log(res)
            // const pageLength = Math.ceil(res.data.totalResults / 10)

            // commit('updateState', {
            //     movies: res.data.Search
            // })

            if ( pageLength > 1 ) {
                for (let i = 2 ; i <= pageLength; i += 1) {
                    if ( i > 4 ) break
                    await dispatch('fetchMovies', i)  
                    // const resMore = await axios.get(`https://omdbapi.com/?apikey=32e321fd&s=${state.title}&page=1${i}`)                    
                    // commit('pushIntoMovies', resMore.data.Search )
                }
            }
            
            commit('updateState', {
                loading: false, // 로딩 애니메이션 종료
            })
        }
    },

    modules: {
    }
  }