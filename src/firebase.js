import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDToPVC-rq2v_lj66ySDyHcAPSc1U4LO7M",
  authDomain: "fire-to-do-list-react.firebaseapp.com",
  databaseURL: "https://fire-to-do-list-react-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fire-to-do-list-react",
  storageBucket: "fire-to-do-list-react.appspot.com",
  messagingSenderId: "166570287638",
  appId: "1:166570287638:web:a4a64bc03ed4cd83d38b37"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase;