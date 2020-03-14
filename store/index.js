import Vuex from 'vuex'
import firebase, { auth } from '~/plugins/firebase.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: '',
    },

    getters: {
      user(state) {
        return state.user
      },

      isAuthenticated(state) {
        return !!state.user
      }
    },

    mutations: {
      setUser(state, payload) {
        state.user = payload
      },
    },

    actions: {
      signInWithEmail({ commit }, { email, password }) {
        return auth.signInWithEmailAndPassword(email, password)
      },

      signOut() {
        auth.signOut().then(() => {
          commit('setUser', null)
        })
          .catch(err => console.log(error))
      }
    }
  })
}

export default createStore