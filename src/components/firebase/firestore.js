import firestore from './firestore';

const config= {
  apiKey: "AIzaSyAkiaRSeJZPSVbKWiDhb3nmrE1PiNXbT4g",
  authDomain: "coltxp-3a04a.firebaseapp.com",
  databaseURL: "https://coltxp-3a04a.firebaseio.com",
};
firestore.initializeApp(config);

export default firestore;