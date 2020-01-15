import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import createStore from "../store/index"

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

!firebase.apps.length ? firebase.initializeApp(config) : ''

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth().onAuthStateChanged(user => {
  createStore().dispatch("fetchUser", user);
})
export const StoreDB = firebase.firestore()
export default firebase