import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

    this.fieldValue = app.firestore.fieldValue;
    this.emailAuthProvider = app.auth.emailAuthProvider;

    this.auth = app.auth();
    this.db = app.firestore();
    this.db.settings({timestampsInSnapshots: true});
  }

  createUserWithEmailandPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailandPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  passwordReset = email => this.auth.sendPasswordResetEmail(email);

  passwordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if(authUser) {
        this.user(authUser.uid)
        .get()
        .then(snapshot => {
          const dbUser = snapshot.data();

          authUser = {
            uid: authUser.uid,
            ...dbUser,
          };
        });
      } else{
        fallback();
      }
    });

    user = uid => this.db.doc(`users/${uid}`);
    users = () => this.db.collection('users');

}

export default firebase;