import Vuex from 'vuex'
import firebase, { auth, GoogleProvider } from '~/plugins/firebase.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: ''
    },

    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },

    mutations: {
      setUser(state, payload) {
        state.user = payload
      }
    },

    actions: {
      signInWithEmail({ commit }, { email, password }) {
        return new Promise((resolve, reject) => {
          auth.signInWithEmailAndPassword(email, password)
          resolve()
        })
      }
    }
  })
}

export default createStore