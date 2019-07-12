import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyAkiaRSeJZPSVbKWiDhb3nmrE1PiNXbT4g",
  authDomain: "coltxp-3a04a.firebaseapp.com",
  databaseURL: "https://coltxp-3a04a.firebaseio.com",
  projectId: "coltxp-3a04a",
  storageBucket: "coltxp-3a04a.appspot.com",
  messagingSenderId: "288910205486",
  appId: "1:288910205486:web:7af61905475bcebc"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const StoreDB = firebase.firestore()
export default firebase