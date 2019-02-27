import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAkiaRSeJZPSVbKWiDhb3nmrE1PiNXbT4g",
  authDomain: "coltxp-3a04a.firebaseapp.com",
  databaseURL: "https://coltxp-3a04a.firebaseio.com",
  projectId: "coltxp-3a04a",
  storageBucket: "",
  messagingSenderId: "288910205486"
};
const fire = firebase.initializeApp(config);

export default fire