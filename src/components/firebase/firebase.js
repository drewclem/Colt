import app from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAkiaRSeJZPSVbKWiDhb3nmrE1PiNXbT4g",
  authDomain: "coltxp-3a04a.firebaseapp.com",
  databaseURL: "https://coltxp-3a04a.firebaseio.com",
  projectId: "coltxp-3a04a",
  storageBucket: "",
  messagingSenderId: "288910205486"
};

class firebase {
  constructor(){
    app.initializeApp(config);

    this.auth = app.auth();
  }

  createUserWithEmailandPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailandPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  passwordReset = email => this.auth.sendPasswordResetEmail(email);

  passwordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}



export default firebase